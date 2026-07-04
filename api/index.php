<?php

declare(strict_types=1);

require __DIR__ . '/lib/core.php';

$configPath = __DIR__ . '/config.php';
if (!is_file($configPath)) {
    Response::error('API not configured. Copy api/config.sample.php to api/config.php', 503);
}

$cfg = require $configPath;
date_default_timezone_set($cfg['timezone'] ?? 'UTC');

try {
    $pdo = Database::connect($cfg);
} catch (Throwable $e) {
    Response::error('Database connection failed', 503);
}

Auth::startSession($cfg);
bizhub_cors($cfg);

$method = $_SERVER['REQUEST_METHOD'];
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?: '/';
$uri = preg_replace('#^/api#', '', $uri) ?: '/';
$uri = rtrim($uri, '/') ?: '/';

function route_match(string $uri, string $pattern): ?array
{
    $regex = '#^' . preg_replace('#\{(\w+)\}#', '([^/]+)', $pattern) . '$#';
    if (!preg_match($regex, $uri, $m)) {
        return null;
    }
    preg_match_all('#\{(\w+)\}#', $pattern, $keys);
    $params = [];
    foreach ($keys[1] as $i => $key) {
        $params[$key] = $m[$i + 1] ?? null;
    }
    return $params;
}

// ─── Auth ───
if ($method === 'POST' && $uri === '/auth/login') {
    $body = bizhub_json_body();
    $email = trim($body['email'] ?? '');
    $password = $body['password'] ?? '';
    if ($email === '' || $password === '') {
        Response::error('Email and password required', 422);
    }
    $user = Auth::login($pdo, $email, $password);
    if (!$user) {
        Response::error('Invalid credentials', 401);
    }
    Response::json(['ok' => true, 'user' => $user]);
}

if ($method === 'POST' && $uri === '/auth/logout') {
    Auth::logout();
    Response::json(['ok' => true]);
}

if ($method === 'GET' && $uri === '/auth/me') {
    $user = Auth::user();
    if (!$user) {
        Response::error('Unauthorized', 401);
    }
    Response::json(['ok' => true, 'user' => $user]);
}

// ─── Public: submit lead (contact form) ───
if ($method === 'POST' && $uri === '/public/leads') {
    $ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
    $sec = $cfg['security'] ?? [];
    if (!RateLimit::check($pdo, $ip, 'lead_submit', (int)($sec['lead_rate_limit'] ?? 8), (int)($sec['lead_rate_window'] ?? 3600))) {
        Response::error('Too many requests. Try again later.', 429);
    }

    $body = bizhub_json_body();
    $first = trim($body['firstName'] ?? $body['first_name'] ?? '');
    $last = trim($body['lastName'] ?? $body['last_name'] ?? '');
    $email = trim($body['email'] ?? '');
    $service = trim($body['service'] ?? '');
    $message = trim($body['message'] ?? '');

    if ($first === '' || $last === '' || $email === '' || $service === '' || $message === '') {
        Response::error('Required fields missing', 422);
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        Response::error('Invalid email', 422);
    }

    $stmt = $pdo->prepare('INSERT INTO leads (first_name, last_name, email, phone, service, message, source, locale, page_url, ip_address)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
    $stmt->execute([
        $first,
        $last,
        $email,
        trim($body['phone'] ?? '') ?: null,
        $service,
        $message,
        trim($body['source'] ?? 'website'),
        trim($body['locale'] ?? '') ?: null,
        trim($body['pageUrl'] ?? $body['page_url'] ?? '') ?: null,
        $ip,
    ]);

    Response::json(['ok' => true, 'id' => (int)$pdo->lastInsertId(), 'message' => 'Lead created'], 201);
}

// ─── Public: published posts ───
if ($method === 'GET' && $uri === '/public/posts') {
    $locale = $_GET['locale'] ?? 'fa';
    $limit = min(50, max(1, (int)($_GET['limit'] ?? 20)));
    $stmt = $pdo->prepare("SELECT id, slug, category, title_fa, title_tr, title_en, excerpt_fa, excerpt_tr, excerpt_en, thumb, published_at
      FROM posts WHERE status = 'published' ORDER BY published_at DESC LIMIT $limit");
    $stmt->execute();
    $rows = $stmt->fetchAll();
    $out = array_map(function ($r) use ($locale) {
        $t = fn($k) => $r[$k . '_' . $locale] ?? $r[$k . '_fa'] ?? '';
        return [
            'slug' => $r['slug'],
            'category' => $r['category'],
            'title' => $t('title'),
            'excerpt' => $t('excerpt'),
            'thumb' => $r['thumb'],
            'publishedAt' => $r['published_at'],
            'url' => 'pages/articles/' . $r['slug'],
        ];
    }, $rows);
    Response::json(['ok' => true, 'posts' => $out]);
}

// ─── Public: FAQs ───
if ($method === 'GET' && $uri === '/public/faqs') {
    $locale = $_GET['locale'] ?? 'fa';
    $stmt = $pdo->query('SELECT * FROM faqs WHERE is_published = 1 ORDER BY sort_order ASC, id ASC');
    $rows = $stmt->fetchAll();
    $out = array_map(function ($r) use ($locale) {
        $q = $r['question_' . $locale] ?? $r['question_fa'];
        $a = $r['answer_' . $locale] ?? $r['answer_fa'];
        return ['id' => (int)$r['id'], 'question' => $q, 'answer' => $a];
    }, $rows);
    Response::json(['ok' => true, 'faqs' => $out]);
}

// ─── Protected routes below ───
Auth::requireUser();

// ─── Dashboard ───
if ($method === 'GET' && $uri === '/dashboard/stats') {
    $stats = [];
    $stats['leads_total'] = (int)$pdo->query('SELECT COUNT(*) FROM leads')->fetchColumn();
    $stats['leads_new'] = (int)$pdo->query("SELECT COUNT(*) FROM leads WHERE status = 'new'")->fetchColumn();
    $stats['posts_published'] = (int)$pdo->query("SELECT COUNT(*) FROM posts WHERE status = 'published'")->fetchColumn();
    $stats['posts_draft'] = (int)$pdo->query("SELECT COUNT(*) FROM posts WHERE status = 'draft'")->fetchColumn();
    $byStatus = $pdo->query("SELECT status, COUNT(*) AS c FROM leads GROUP BY status")->fetchAll();
    $stats['pipeline'] = [];
    foreach ($byStatus as $row) {
        $stats['pipeline'][$row['status']] = (int)$row['c'];
    }
    $recent = $pdo->query('SELECT id, first_name, last_name, email, service, status, created_at FROM leads ORDER BY created_at DESC LIMIT 8')->fetchAll();
    Response::json(['ok' => true, 'stats' => $stats, 'recentLeads' => $recent]);
}

// ─── Leads CRM ───
if ($method === 'GET' && $uri === '/leads') {
    $status = $_GET['status'] ?? '';
    $q = trim($_GET['q'] ?? '');
    $sql = 'SELECT l.*, u.name AS assigned_name FROM leads l LEFT JOIN users u ON u.id = l.assigned_to WHERE 1=1';
    $params = [];
    if ($status !== '') {
        $sql .= ' AND l.status = ?';
        $params[] = $status;
    }
    if ($q !== '') {
        $sql .= ' AND (l.first_name LIKE ? OR l.last_name LIKE ? OR l.email LIKE ? OR l.message LIKE ?)';
        $like = '%' . $q . '%';
        array_push($params, $like, $like, $like, $like);
    }
    $sql .= ' ORDER BY l.created_at DESC LIMIT 200';
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    Response::json(['ok' => true, 'leads' => $stmt->fetchAll()]);
}

if ($method === 'GET' && ($p = route_match($uri, '/leads/{id}'))) {
    $stmt = $pdo->prepare('SELECT l.*, u.name AS assigned_name FROM leads l LEFT JOIN users u ON u.id = l.assigned_to WHERE l.id = ?');
    $stmt->execute([(int)$p['id']]);
    $lead = $stmt->fetch();
    if (!$lead) {
        Response::error('Lead not found', 404);
    }
    $notes = $pdo->prepare('SELECT n.*, u.name AS author_name FROM lead_notes n LEFT JOIN users u ON u.id = n.user_id WHERE n.lead_id = ? ORDER BY n.created_at DESC');
    $notes->execute([(int)$p['id']]);
    Response::json(['ok' => true, 'lead' => $lead, 'notes' => $notes->fetchAll()]);
}

if ($method === 'PATCH' && ($p = route_match($uri, '/leads/{id}'))) {
    $body = bizhub_json_body();
    $allowed = ['status', 'priority', 'assigned_to'];
    $sets = [];
    $vals = [];
    foreach ($allowed as $field) {
        if (array_key_exists($field, $body)) {
            $sets[] = "$field = ?";
            $vals[] = $body[$field];
        }
    }
    if (!$sets) {
        Response::error('Nothing to update', 422);
    }
    $vals[] = (int)$p['id'];
    $pdo->prepare('UPDATE leads SET ' . implode(', ', $sets) . ' WHERE id = ?')->execute($vals);
    Response::json(['ok' => true]);
}

if ($method === 'POST' && ($p = route_match($uri, '/leads/{id}/notes'))) {
    $body = bizhub_json_body();
    $text = trim($body['body'] ?? '');
    if ($text === '') {
        Response::error('Note body required', 422);
    }
    $user = Auth::user();
    $pdo->prepare('INSERT INTO lead_notes (lead_id, user_id, body) VALUES (?, ?, ?)')
        ->execute([(int)$p['id'], $user['id'], $text]);
    Response::json(['ok' => true, 'id' => (int)$pdo->lastInsertId()], 201);
}

if ($method === 'DELETE' && ($p = route_match($uri, '/leads/{id}'))) {
    $user = Auth::user();
    if ($user['role'] !== 'admin') {
        Response::error('Forbidden', 403);
    }
    $pdo->prepare('DELETE FROM leads WHERE id = ?')->execute([(int)$p['id']]);
    Response::json(['ok' => true]);
}

// ─── Posts CMS ───
if ($method === 'GET' && $uri === '/posts') {
    $stmt = $pdo->query('SELECT id, slug, category, title_fa, status, published_at, updated_at FROM posts ORDER BY updated_at DESC');
    Response::json(['ok' => true, 'posts' => $stmt->fetchAll()]);
}

if ($method === 'GET' && ($p = route_match($uri, '/posts/{id}'))) {
    $stmt = $pdo->prepare('SELECT * FROM posts WHERE id = ?');
    $stmt->execute([(int)$p['id']]);
    $post = $stmt->fetch();
    if (!$post) {
        Response::error('Not found', 404);
    }
    Response::json(['ok' => true, 'post' => $post]);
}

if ($method === 'POST' && $uri === '/posts') {
    $body = bizhub_json_body();
    $title = trim($body['title_fa'] ?? '');
    if ($title === '') {
        Response::error('title_fa required', 422);
    }
    $slug = trim($body['slug'] ?? '') ?: bizhub_slugify($title);
    $user = Auth::user();
    $status = ($body['status'] ?? 'draft') === 'published' ? 'published' : 'draft';
    $pub = $status === 'published' ? date('Y-m-d H:i:s') : null;
    $stmt = $pdo->prepare('INSERT INTO posts (slug, category, title_fa, title_tr, title_en, excerpt_fa, excerpt_tr, excerpt_en, content_fa, content_tr, content_en, thumb, status, published_at, author_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
    $stmt->execute([
        $slug,
        trim($body['category'] ?? 'general'),
        $title,
        $body['title_tr'] ?? null,
        $body['title_en'] ?? null,
        $body['excerpt_fa'] ?? null,
        $body['excerpt_tr'] ?? null,
        $body['excerpt_en'] ?? null,
        $body['content_fa'] ?? null,
        $body['content_tr'] ?? null,
        $body['content_en'] ?? null,
        $body['thumb'] ?? null,
        $status,
        $pub,
        $user['id'],
    ]);
    Response::json(['ok' => true, 'id' => (int)$pdo->lastInsertId()], 201);
}

if ($method === 'PUT' && ($p = route_match($uri, '/posts/{id}'))) {
    $body = bizhub_json_body();
    $stmt = $pdo->prepare('SELECT * FROM posts WHERE id = ?');
    $stmt->execute([(int)$p['id']]);
    if (!$stmt->fetch()) {
        Response::error('Not found', 404);
    }
    $status = ($body['status'] ?? 'draft') === 'published' ? 'published' : 'draft';
    $pub = $status === 'published' ? ($body['published_at'] ?? date('Y-m-d H:i:s')) : null;
    $pdo->prepare('UPDATE posts SET slug=?, category=?, title_fa=?, title_tr=?, title_en=?, excerpt_fa=?, excerpt_tr=?, excerpt_en=?, content_fa=?, content_tr=?, content_en=?, thumb=?, status=?, published_at=? WHERE id=?')
        ->execute([
            trim($body['slug'] ?? ''),
            trim($body['category'] ?? 'general'),
            trim($body['title_fa'] ?? ''),
            $body['title_tr'] ?? null,
            $body['title_en'] ?? null,
            $body['excerpt_fa'] ?? null,
            $body['excerpt_tr'] ?? null,
            $body['excerpt_en'] ?? null,
            $body['content_fa'] ?? null,
            $body['content_tr'] ?? null,
            $body['content_en'] ?? null,
            $body['thumb'] ?? null,
            $status,
            $pub,
            (int)$p['id'],
        ]);
    Response::json(['ok' => true]);
}

if ($method === 'DELETE' && ($p = route_match($uri, '/posts/{id}'))) {
    $pdo->prepare('DELETE FROM posts WHERE id = ?')->execute([(int)$p['id']]);
    Response::json(['ok' => true]);
}

// ─── FAQs CMS ───
if ($method === 'GET' && $uri === '/faqs') {
    $stmt = $pdo->query('SELECT * FROM faqs ORDER BY sort_order ASC, id ASC');
    Response::json(['ok' => true, 'faqs' => $stmt->fetchAll()]);
}

if ($method === 'POST' && $uri === '/faqs') {
    $body = bizhub_json_body();
    if (trim($body['question_fa'] ?? '') === '' || trim($body['answer_fa'] ?? '') === '') {
        Response::error('question_fa and answer_fa required', 422);
    }
    $pdo->prepare('INSERT INTO faqs (question_fa, question_tr, question_en, answer_fa, answer_tr, answer_en, sort_order, is_published) VALUES (?,?,?,?,?,?,?,?)')
        ->execute([
            trim($body['question_fa']),
            $body['question_tr'] ?? null,
            $body['question_en'] ?? null,
            trim($body['answer_fa']),
            $body['answer_tr'] ?? null,
            $body['answer_en'] ?? null,
            (int)($body['sort_order'] ?? 0),
            !empty($body['is_published']) ? 1 : 0,
        ]);
    Response::json(['ok' => true, 'id' => (int)$pdo->lastInsertId()], 201);
}

if ($method === 'PUT' && ($p = route_match($uri, '/faqs/{id}'))) {
    $body = bizhub_json_body();
    $pdo->prepare('UPDATE faqs SET question_fa=?, question_tr=?, question_en=?, answer_fa=?, answer_tr=?, answer_en=?, sort_order=?, is_published=? WHERE id=?')
        ->execute([
            trim($body['question_fa'] ?? ''),
            $body['question_tr'] ?? null,
            $body['question_en'] ?? null,
            trim($body['answer_fa'] ?? ''),
            $body['answer_tr'] ?? null,
            $body['answer_en'] ?? null,
            (int)($body['sort_order'] ?? 0),
            !empty($body['is_published']) ? 1 : 0,
            (int)$p['id'],
        ]);
    Response::json(['ok' => true]);
}

if ($method === 'DELETE' && ($p = route_match($uri, '/faqs/{id}'))) {
    $pdo->prepare('DELETE FROM faqs WHERE id = ?')->execute([(int)$p['id']]);
    Response::json(['ok' => true]);
}

Response::error('Not found', 404);
