<?php

declare(strict_types=1);

function bizhub_ensure_site_tables(PDO $pdo): void
{
    static $ready = false;
    if ($ready) {
        return;
    }
    $pdo->exec(
        "CREATE TABLE IF NOT EXISTS site_pages (
          id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
          path VARCHAR(120) NOT NULL,
          locale CHAR(5) NOT NULL,
          section VARCHAR(40) NOT NULL,
          title VARCHAR(255) NOT NULL,
          summary VARCHAR(255) NOT NULL DEFAULT '',
          UNIQUE KEY uk_site_page_path (path),
          INDEX idx_site_page_section (section),
          INDEX idx_site_page_locale (locale)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci"
    );
    $pdo->exec(
        "CREATE TABLE IF NOT EXISTS page_hits (
          path_hash CHAR(40) NOT NULL,
          path VARCHAR(120) NOT NULL,
          day DATE NOT NULL,
          views INT UNSIGNED NOT NULL DEFAULT 0,
          PRIMARY KEY (path_hash, day),
          INDEX idx_page_hits_day (day),
          INDEX idx_page_hits_path (path)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci"
    );
    $pdo->exec(
        "CREATE TABLE IF NOT EXISTS site_meta (
          name VARCHAR(40) NOT NULL PRIMARY KEY,
          meta_value VARCHAR(64) NOT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci"
    );
    $hasSummary = $pdo->query("SHOW COLUMNS FROM site_pages LIKE 'summary'")->fetch();
    if (!$hasSummary) {
        $pdo->exec("ALTER TABLE site_pages ADD COLUMN summary VARCHAR(255) NOT NULL DEFAULT '' AFTER title");
    }
    $ready = true;
}

function bizhub_site_index_file(): string
{
    return dirname(__DIR__) . '/data/site-index.json';
}

function bizhub_normalize_path(string $path): string
{
    $path = rawurldecode(trim($path));
    $cut = strcspn($path, '?#');
    $path = substr($path, 0, $cut);
    if ($path === '' || $path[0] !== '/') {
        return '';
    }
    if (str_contains($path, '..') || str_contains($path, '\\') || str_contains($path, "\0")) {
        return '';
    }
    if (strlen($path) > 1) {
        $path = rtrim($path, '/');
    }
    if ($path === '' || strlen($path) > 120) {
        return '';
    }
    return $path;
}

/** Import the committed catalog when its file hash changes. Returns stored page count. */
function bizhub_import_site_index(PDO $pdo, bool $force = false): int
{
    bizhub_ensure_site_tables($pdo);
    $file = bizhub_site_index_file();
    if (!is_file($file)) {
        return (int) $pdo->query('SELECT COUNT(*) FROM site_pages')->fetchColumn();
    }
    $hash = hash_file('sha256', $file) ?: '';
    $stored = (string) $pdo->query("SELECT meta_value FROM site_meta WHERE name = 'catalog_hash'")->fetchColumn();
    if (!$force && $stored !== '' && strlen($stored) === strlen($hash) && hash_equals($stored, $hash)) {
        return (int) $pdo->query('SELECT COUNT(*) FROM site_pages')->fetchColumn();
    }

    $locked = (int) $pdo->query("SELECT GET_LOCK('bizhub_catalog', 25)")->fetchColumn();
    if ($locked !== 1) {
        return (int) $pdo->query('SELECT COUNT(*) FROM site_pages')->fetchColumn();
    }
    try {
        $stored = (string) $pdo->query("SELECT meta_value FROM site_meta WHERE name = 'catalog_hash'")->fetchColumn();
        if (!$force && $stored !== '' && strlen($stored) === strlen($hash) && hash_equals($stored, $hash)) {
            return (int) $pdo->query('SELECT COUNT(*) FROM site_pages')->fetchColumn();
        }
        $rows = json_decode((string) file_get_contents($file), true);
        if (!is_array($rows) || $rows === []) {
            return (int) $pdo->query('SELECT COUNT(*) FROM site_pages')->fetchColumn();
        }

        @set_time_limit(180);
        $pdo->beginTransaction();
        try {
            $pdo->exec('DELETE FROM site_pages');
            $chunk = [];
            $flush = function () use ($pdo, &$chunk): void {
                if ($chunk === []) {
                    return;
                }
                $place = implode(',', array_fill(0, count($chunk), '(?,?,?,?,?)'));
                $vals = [];
                foreach ($chunk as $row) {
                    array_push($vals, $row[0], $row[1], $row[2], $row[3], $row[4]);
                }
                $pdo->prepare('INSERT IGNORE INTO site_pages (path, locale, section, title, summary) VALUES ' . $place)
                    ->execute($vals);
                $chunk = [];
            };
            foreach ($rows as $row) {
                if (!is_array($row)) {
                    continue;
                }
                $path = bizhub_normalize_path((string) ($row['path'] ?? ''));
                if ($path === '') {
                    continue;
                }
                $chunk[] = [
                    $path,
                    substr((string) ($row['locale'] ?? 'fa'), 0, 5),
                    substr((string) ($row['section'] ?? 'other'), 0, 40),
                    bizhub_clip((string) ($row['title'] ?? $path), 180),
                    bizhub_clip((string) ($row['summary'] ?? ''), 240),
                ];
                if (count($chunk) >= 60) {
                    $flush();
                }
            }
            $flush();
            $pdo->prepare('INSERT INTO site_meta (name, meta_value) VALUES (\'catalog_hash\', ?) ON DUPLICATE KEY UPDATE meta_value = VALUES(meta_value)')
                ->execute([$hash]);
            $pdo->commit();
        } catch (Throwable $e) {
            if ($pdo->inTransaction()) {
                $pdo->rollBack();
            }
            throw $e;
        }
    } finally {
        $pdo->query("SELECT RELEASE_LOCK('bizhub_catalog')");
    }

    return (int) $pdo->query('SELECT COUNT(*) FROM site_pages')->fetchColumn();
}

function bizhub_record_hit(PDO $pdo, string $path): void
{
    $path = bizhub_normalize_path($path);
    if ($path === '' || str_starts_with($path, '/admin') || str_starts_with($path, '/api')) {
        return;
    }
    bizhub_ensure_site_tables($pdo);
    $pdo->prepare(
        'INSERT INTO page_hits (path_hash, path, day, views) VALUES (?, ?, CURDATE(), 1)
         ON DUPLICATE KEY UPDATE views = views + 1'
    )->execute([sha1($path), $path]);
}

function bizhub_import_editorial(PDO $pdo): array
{
    bizhub_ensure_site_tables($pdo);
    $dir = dirname(__DIR__) . '/data';
    $posts = bizhub_import_json_once($pdo, 'articles_hash', $dir . '/articles.json', 'bizhub_store_articles');
    $faqs = bizhub_import_json_once($pdo, 'faqs_hash', $dir . '/faqs.json', 'bizhub_store_faqs');
    return ['posts' => $posts, 'faqs' => $faqs];
}

function bizhub_import_json_once(PDO $pdo, string $metaName, string $file, string $saver): int
{
    if (!is_file($file)) {
        return 0;
    }
    $hash = hash_file('sha256', $file) ?: '';
    $stored = (string) $pdo->query('SELECT meta_value FROM site_meta WHERE name = ' . $pdo->quote($metaName))->fetchColumn();
    if ($stored !== '' && strlen($stored) === strlen($hash) && hash_equals($stored, $hash)) {
        return 0;
    }
    $rows = json_decode((string) file_get_contents($file), true);
    $saved = is_array($rows) ? $saver($pdo, $rows) : 0;
    $pdo->prepare('INSERT INTO site_meta (name, meta_value) VALUES (?, ?) ON DUPLICATE KEY UPDATE meta_value = VALUES(meta_value)')
        ->execute([$metaName, $hash]);
    return $saved;
}

function bizhub_store_articles(PDO $pdo, array $rows): int
{
    $saved = 0;
    $find = $pdo->prepare('SELECT id FROM posts WHERE slug = ? LIMIT 1');
    $insert = $pdo->prepare(
        'INSERT INTO posts (slug, category, title_fa, title_tr, title_en, excerpt_fa, excerpt_tr, excerpt_en, content_fa, content_tr, content_en, thumb, status, published_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, \'published\', ?)'
    );
    foreach ($rows as $row) {
        if (!is_array($row)) {
            continue;
        }
        $slug = substr(preg_replace('/[^a-z0-9-]/', '', strtolower((string) ($row['slug'] ?? ''))) ?? '', 0, 160);
        if ($slug === '') {
            continue;
        }
        $find->execute([$slug]);
        if ($find->fetch()) {
            continue;
        }
        $fa = is_array($row['fa'] ?? null) ? $row['fa'] : [];
        $tr = is_array($row['tr'] ?? null) ? $row['tr'] : [];
        $en = is_array($row['en'] ?? null) ? $row['en'] : [];
        $title = bizhub_clip((string) ($fa['title'] ?? $slug), 240);
        $published = (string) ($row['published'] ?? '');
        $publishedAt = preg_match('/^\d{4}-\d{2}-\d{2}$/', $published) ? $published . ' 09:00:00' : null;
        $insert->execute([
            $slug,
            bizhub_clip((string) ($row['category'] ?? 'general'), 80) ?: 'general',
            $title,
            bizhub_clip((string) ($tr['title'] ?? ''), 240) ?: null,
            bizhub_clip((string) ($en['title'] ?? ''), 240) ?: null,
            bizhub_clip((string) ($fa['excerpt'] ?? ''), 500) ?: null,
            bizhub_clip((string) ($tr['excerpt'] ?? ''), 500) ?: null,
            bizhub_clip((string) ($en['excerpt'] ?? ''), 500) ?: null,
            (string) ($fa['content'] ?? '') ?: null,
            (string) ($tr['content'] ?? '') ?: null,
            (string) ($en['content'] ?? '') ?: null,
            bizhub_clip((string) ($row['thumb'] ?? ''), 500) ?: null,
            $publishedAt,
        ]);
        $saved++;
    }
    return $saved;
}

function bizhub_store_faqs(PDO $pdo, array $rows): int
{
    $saved = 0;
    $find = $pdo->prepare('SELECT id FROM faqs WHERE question_fa = ? LIMIT 1');
    $insert = $pdo->prepare('INSERT INTO faqs (question_fa, answer_fa, sort_order, is_published) VALUES (?, ?, ?, 1)');
    $order = (int) $pdo->query('SELECT COALESCE(MAX(sort_order), 0) FROM faqs')->fetchColumn();
    foreach ($rows as $row) {
        if (!is_array($row)) {
            continue;
        }
        $question = bizhub_clip(trim((string) ($row['question'] ?? '')), 480);
        $answer = bizhub_clip(trim((string) ($row['answer'] ?? '')), 4000);
        if ($question === '' || $answer === '') {
            continue;
        }
        $find->execute([$question]);
        if ($find->fetch()) {
            continue;
        }
        $order++;
        $insert->execute([$question, $answer, $order]);
        $saved++;
    }
    return $saved;
}

function bizhub_content_groups(): array
{
    return [
        'company' => ['home', 'about', 'contact', 'gallery', 'portfolio', 'privacy', '404'],
        'services' => ['services', 'fast', 'custom-web-app', 'field-tech', 'smm-turk'],
        'articles' => ['articles', 'blog'],
        'tools' => ['tools', 'speed-test', 'website-speed-test', 'what-is-my-ip', 'whatsapp-link-generator', 'utm-builder', 'tank-volume-calculator', 'unit-converter'],
        'catalog' => ['motorcycle', 'auto-moto', 'car-parts'],
    ];
}

function bizhub_page_area(string $section): string
{
    foreach (bizhub_content_groups() as $area => $sections) {
        if (in_array($section, $sections, true)) {
            return $area;
        }
    }
    return 'supply';
}

/** @return array{0:string,1:array<int,string>}|null */
function bizhub_area_filter(string $area): ?array
{
    $groups = bizhub_content_groups();
    if ($area === 'supply') {
        $known = [];
        foreach ($groups as $sections) {
            foreach ($sections as $section) {
                $known[] = $section;
            }
        }
        $marks = implode(',', array_fill(0, count($known), '?'));
        return [' AND section NOT IN (' . $marks . ')', $known];
    }
    if (!isset($groups[$area])) {
        return null;
    }
    $sections = $groups[$area];
    $marks = implode(',', array_fill(0, count($sections), '?'));
    return [' AND section IN (' . $marks . ')', $sections];
}

function bizhub_site_stats(PDO $pdo): array
{
    bizhub_import_site_index($pdo);
    bizhub_import_editorial($pdo);
    $pages = (int) $pdo->query('SELECT COUNT(*) FROM site_pages')->fetchColumn();
    $locales = [];
    foreach ($pdo->query('SELECT locale, COUNT(*) AS c FROM site_pages GROUP BY locale')->fetchAll() as $row) {
        $locales[(string) $row['locale']] = (int) $row['c'];
    }
    $viewBySection = [];
    foreach ($pdo->query(
        'SELECT p.section, COALESCE(SUM(h.views), 0) AS views
         FROM site_pages p
         LEFT JOIN page_hits h ON h.path = p.path AND h.day >= CURDATE() - INTERVAL 6 DAY
         GROUP BY p.section'
    )->fetchAll() as $row) {
        $viewBySection[(string) $row['section']] = (int) $row['views'];
    }
    $sections = [];
    foreach ($pdo->query('SELECT section, COUNT(*) AS c FROM site_pages GROUP BY section ORDER BY c DESC')->fetchAll() as $row) {
        $name = (string) $row['section'];
        $sections[] = [
            'section' => $name,
            'count' => (int) $row['c'],
            'views' => $viewBySection[$name] ?? 0,
        ];
    }
    $today = (int) $pdo->query('SELECT COALESCE(SUM(views), 0) FROM page_hits WHERE day = CURDATE()')->fetchColumn();
    $week = (int) $pdo->query('SELECT COALESCE(SUM(views), 0) FROM page_hits WHERE day >= CURDATE() - INTERVAL 6 DAY')->fetchColumn();
    $byDay = [];
    foreach ($pdo->query(
        'SELECT day, SUM(views) AS views FROM page_hits
         WHERE day >= CURDATE() - INTERVAL 13 DAY
         GROUP BY day'
    )->fetchAll() as $row) {
        $byDay[substr((string) $row['day'], 0, 10)] = (int) $row['views'];
    }
    $series = [];
    $start = new DateTimeImmutable('today');
    for ($i = 13; $i >= 0; $i--) {
        $day = $start->modify('-' . $i . ' days')->format('Y-m-d');
        $series[] = ['day' => $day, 'views' => $byDay[$day] ?? 0];
    }
    $topSql = 'SELECT h.path, SUM(h.views) AS views, MAX(p.title) AS title
         FROM page_hits h
         LEFT JOIN site_pages p ON p.path = h.path';
    $top = $pdo->query($topSql . ' WHERE h.day >= CURDATE() - INTERVAL 6 DAY GROUP BY h.path ORDER BY views DESC LIMIT 8')->fetchAll();
    $topToday = $pdo->query($topSql . ' WHERE h.day = CURDATE() GROUP BY h.path ORDER BY views DESC LIMIT 8')->fetchAll();
    $visitLocales = [];
    foreach ($pdo->query(
        "SELECT p.locale, SUM(h.views) AS views
         FROM page_hits h
         INNER JOIN site_pages p ON p.path = h.path
         WHERE h.day >= CURDATE() - INTERVAL 6 DAY
         GROUP BY p.locale"
    )->fetchAll() as $row) {
        $visitLocales[(string) $row['locale']] = (int) $row['views'];
    }
    $visitsAll = (int) $pdo->query('SELECT COALESCE(SUM(views), 0) FROM page_hits')->fetchColumn();
    $areaOrder = ['company', 'services', 'articles', 'supply', 'catalog', 'tools'];
    $areaCounts = [];
    foreach ($sections as $row) {
        $area = bizhub_page_area($row['section']);
        if (!isset($areaCounts[$area])) {
            $areaCounts[$area] = ['area' => $area, 'count' => 0, 'views' => 0];
        }
        $areaCounts[$area]['count'] += $row['count'];
        $areaCounts[$area]['views'] += $row['views'];
    }
    $areas = [];
    foreach ($areaOrder as $name) {
        if (isset($areaCounts[$name])) {
            $areas[] = $areaCounts[$name];
        }
    }
    $content = [];
    foreach ($pdo->query("SELECT path, section, title, summary FROM site_pages WHERE locale = 'fa' AND section NOT IN ('motorcycle', '404') ORDER BY path ASC")->fetchAll() as $row) {
        $content[] = [
            'path' => (string) $row['path'],
            'section' => (string) $row['section'],
            'area' => bizhub_page_area((string) $row['section']),
            'title' => (string) $row['title'],
            'summary' => (string) $row['summary'],
        ];
    }
    $rank = array_flip($areaOrder);
    usort($content, static function (array $a, array $b) use ($rank): int {
        $byArea = ($rank[$a['area']] ?? 9) <=> ($rank[$b['area']] ?? 9);
        return $byArea !== 0 ? $byArea : strcmp($a['path'], $b['path']);
    });
    return [
        'pages' => $pages,
        'locales' => $locales,
        'sections' => $sections,
        'areas' => $areas,
        'content' => $content,
        'visits_today' => $today,
        'visits_week' => $week,
        'visits_all' => $visitsAll,
        'visit_locales' => $visitLocales,
        'series' => $series,
        'top_pages' => array_map(static function ($row) {
            return [
                'path' => (string) $row['path'],
                'views' => (int) $row['views'],
                'title' => (string) ($row['title'] ?? ''),
            ];
        }, $top),
        'top_today' => array_map(static function ($row) {
            return [
                'path' => (string) $row['path'],
                'views' => (int) $row['views'],
                'title' => (string) ($row['title'] ?? ''),
            ];
        }, $topToday),
    ];
}
