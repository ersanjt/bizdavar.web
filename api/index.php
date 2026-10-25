<?php

declare(strict_types=1);

require __DIR__ . '/lib/core.php';
require __DIR__ . '/lib/site-index.php';
require __DIR__ . '/lib/partners.php';
require __DIR__ . '/lib/mail.php';

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
bizhub_ensure_session_epoch($pdo);
try {
    $tzOffset = (new DateTimeImmutable('now'))->format('P');
    if (preg_match('/^[+-]\d{2}:\d{2}$/', $tzOffset)) {
        $pdo->exec("SET time_zone = '" . $tzOffset . "'");
    }
} catch (Throwable $e) {
    // Keep the database clock if the account cannot set a session time zone.
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
    $ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
    $sec = $cfg['security'] ?? [];
    $loginMax = (int) ($sec['login_rate_limit'] ?? 5);
    $loginWindow = (int) ($sec['login_rate_window'] ?? 900);
    if (!RateLimit::check($pdo, $ip, 'login', $loginMax, $loginWindow)) {
        Response::error('Too many login attempts. Try again later.', 429);
    }

    $body = bizhub_json_body();
    $email = trim($body['email'] ?? '');
    $password = $body['password'] ?? '';
    if ($email === '' || $password === '') {
        Response::error('Email and password required', 422);
    }
    $emailKey = strtolower($email);
    if (!RateLimit::check($pdo, $emailKey, 'login_email', $loginMax, $loginWindow)) {
        Response::error('Too many login attempts. Try again later.', 429);
    }
    Auth::requireAdminIp($cfg);
    $row = Auth::verifyPassword($pdo, $email, $password);
    if (!$row) {
        bizhub_log_login($pdo, $emailKey, false, null, null);
        Response::error('Invalid credentials', 401);
    }
    $requireMfa = Auth::mfaRequired($cfg) && (($row['role'] ?? '') !== 'partner');
    $enrolled = !empty($row['totp_enabled']);
    if ($enrolled) {
        session_regenerate_id(true);
        $_SESSION['mfa_pending_uid'] = (int) $row['id'];
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
        unset($_SESSION['user'], $_SESSION['mfa_ok']);
        Response::json(['ok' => true, 'mfaRequired' => true, 'csrfToken' => Auth::csrfToken()]);
    }
    $user = Auth::establishSession($pdo, $row, !$requireMfa);
    Response::json([
        'ok' => true,
        'user' => $user,
        'mfaEnroll' => $requireMfa,
        'csrfToken' => Auth::csrfToken(),
    ]);
}

if ($method === 'POST' && $uri === '/auth/mfa/verify') {
    Auth::requireAdminIp($cfg);
    $body = bizhub_json_body();
    $code = (string) ($body['code'] ?? '');
    $uid = (int) ($_SESSION['mfa_pending_uid'] ?? 0);
    if ($uid < 1) {
        Response::error('MFA challenge expired', 401);
    }
    $ip = (string) ($_SERVER['REMOTE_ADDR'] ?? '0.0.0.0');
    if (!RateLimit::check($pdo, $ip . ':mfa:' . $uid, 'mfa_verify', 8, 900)) {
        unset($_SESSION['mfa_pending_uid']);
        Response::error('تلاش برای کد زیاد بود. دوباره با رمز وارد شوید.', 429);
    }
    $row = Auth::loadUser($pdo, $uid);
    $secret = (string) ($row['totp_secret'] ?? '');
    if (!$row || $secret === '' || !Totp::verify($secret, $code)) {
        Response::error('Invalid MFA code', 401);
    }
    $user = Auth::establishSession($pdo, $row, true);
    Response::json(['ok' => true, 'user' => $user, 'csrfToken' => Auth::csrfToken()]);
}

if ($method === 'POST' && $uri === '/auth/logout') {
    Auth::logout();
    Response::json(['ok' => true]);
}

if ($method === 'POST' && $uri === '/auth/forgot') {
    $ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
    if (!RateLimit::check($pdo, $ip, 'forgot', 8, 3600)) {
        Response::error('تعداد درخواست زیاد است. کمی بعد دوباره تلاش کنید.', 429);
    }
    $email = strtolower(trim((string) (bizhub_json_body()['email'] ?? '')));
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        Response::error('ایمیل معتبر نیست', 422);
    }
    if (!RateLimit::check($pdo, 'email:' . $email, 'forgot_email', 5, 3600)) {
        Response::error('تعداد درخواست زیاد است. کمی بعد دوباره تلاش کنید.', 429);
    }
    bizhub_ensure_mail_tables($pdo);
    $stmt = $pdo->prepare('SELECT id, email FROM users WHERE email = ? AND is_active = 1 LIMIT 1');
    $stmt->execute([$email]);
    $user = $stmt->fetch();
    if ($user) {
        $pdo->prepare('DELETE FROM password_resets WHERE user_id = ? OR expires_at < NOW()')->execute([(int) $user['id']]);
        $token = bin2hex(random_bytes(32));
        $code = str_pad((string) random_int(0, 999999), 6, '0', STR_PAD_LEFT);
        $pdo->prepare('INSERT INTO password_resets (user_id, token_hash, code_hash, expires_at) VALUES (?, ?, ?, DATE_ADD(NOW(), INTERVAL 1 HOUR))')
            ->execute([(int) $user['id'], hash('sha256', $token), hash('sha256', $code)]);
        $link = bizhub_app_origin($cfg) . '/admin/?reset=' . $token;
        bizhub_mail(
            $cfg,
            (string) $user['email'],
            'بازیابی رمز بیزداور',
            '',
            [
                'heading' => 'بازیابی رمز',
                'intro' => 'درخواست عوض کردن رمز برای این ایمیل ثبت شد. لینک و کد، هر دو یک ساعت معتبرند.',
                'code' => $code,
                'button_label' => 'باز کردن صفحه بازیابی',
                'button_url' => $link,
                'note' => 'اگر شما این درخواست را نداده‌اید، این ایمیل را نادیده بگیرید. رمز فعلی عوض نمی‌شود.',
            ]
        );
    }
    Response::json(['ok' => true, 'message' => 'اگر این ایمیل در BizHub باشد، کد تأیید و لینک بازیابی ارسال شد. پوشه هرزنامه را هم ببینید.']);
}

if ($method === 'POST' && $uri === '/auth/reset') {
    $ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
    if (!RateLimit::check($pdo, $ip, 'reset', 10, 3600)) {
        Response::error('تعداد درخواست زیاد است. کمی بعد دوباره تلاش کنید.', 429);
    }
    bizhub_ensure_mail_tables($pdo);
    $body = bizhub_json_body();
    $token = strtolower(trim((string) ($body['token'] ?? '')));
    $password = (string) ($body['password'] ?? '');
    $code = preg_replace('/\D/', '', (string) ($body['code'] ?? '')) ?? '';
    if (!preg_match('/^[a-f0-9]{64}$/', $token)) {
        Response::error('لینک بازیابی نامعتبر است', 422);
    }
    if (!preg_match('/^\d{6}$/', $code)) {
        Response::error('کد تأیید شش رقم است', 422);
    }
    if (strlen($password) < 10) {
        Response::error('رمز حداقل ۱۰ کاراکتر باشد', 422);
    }
    $stmt = $pdo->prepare('SELECT id, user_id, code_hash, expires_at, used_at FROM password_resets WHERE token_hash = ? LIMIT 1');
    $stmt->execute([hash('sha256', $token)]);
    $row = $stmt->fetch();
    if (!$row || !empty($row['used_at']) || strtotime((string) $row['expires_at']) < time()) {
        Response::error('لینک بازیابی نامعتبر یا منقضی شده است', 422);
    }
    $storedCode = (string) ($row['code_hash'] ?? '');
    if ($storedCode === '' || !hash_equals($storedCode, hash('sha256', $code))) {
        Response::error('کد تأیید نادرست است. همان کدی را وارد کنید که در ایمیل آمده.', 422);
    }
    $active = $pdo->prepare('SELECT id FROM users WHERE id = ? AND is_active = 1');
    $active->execute([(int) $row['user_id']]);
    if (!$active->fetch()) {
        Response::error('این کاربر فعال نیست', 422);
    }
    if (bizhub_ensure_session_epoch($pdo)) {
        $pdo->prepare('UPDATE users SET password_hash = ?, session_epoch = session_epoch + 1 WHERE id = ?')
            ->execute([password_hash($password, PASSWORD_DEFAULT), (int) $row['user_id']]);
    } else {
        $pdo->prepare('UPDATE users SET password_hash = ? WHERE id = ?')
            ->execute([password_hash($password, PASSWORD_DEFAULT), (int) $row['user_id']]);
    }
    $pdo->prepare('UPDATE password_resets SET used_at = NOW() WHERE user_id = ? AND used_at IS NULL')
        ->execute([(int) $row['user_id']]);
    Response::json(['ok' => true, 'message' => 'رمز عوض شد. با رمز جدید وارد شوید.']);
}

if ($method === 'GET' && $uri === '/auth/me') {
    $user = Auth::user();
    if (!$user) {
        Response::error('Unauthorized', 401);
    }
    Auth::requireFreshSession($pdo);
    Response::json([
        'ok' => true,
        'user' => $user,
        'mfaOk' => !empty($_SESSION['mfa_ok']),
        'mfaEnroll' => ($user['role'] ?? '') !== 'partner' && Auth::mfaRequired($cfg) && empty($user['totp_enabled']),
        'csrfToken' => Auth::csrfToken(),
    ]);
}

// ─── Public: submit lead (contact form) ───
if ($method === 'POST' && $uri === '/public/leads') {
    $ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
    $sec = $cfg['security'] ?? [];
    if (!RateLimit::check($pdo, $ip, 'lead_submit', (int)($sec['lead_rate_limit'] ?? 8), (int)($sec['lead_rate_window'] ?? 3600))) {
        Response::error('Too many requests. Try again later.', 429);
    }

    $body = bizhub_json_body();
    $honeypot = trim((string) ($body['website'] ?? $body['company_url'] ?? ''));
    if ($honeypot !== '') {
        Response::json(['ok' => true, 'message' => 'Lead created'], 201);
    }

    $first = bizhub_clip(trim($body['firstName'] ?? $body['first_name'] ?? ''), 80);
    $last = bizhub_clip(trim($body['lastName'] ?? $body['last_name'] ?? ''), 80);
    $email = bizhub_clip(trim($body['email'] ?? ''), 190);
    $phone = bizhub_clip(trim($body['phone'] ?? ''), 40);
    $service = bizhub_clip(trim($body['service'] ?? ''), 80);
    $message = bizhub_clip(trim($body['message'] ?? ''), 5000);

    if ($first === '' || $last === '' || $service === '' || $message === '') {
        Response::error('Required fields missing', 422);
    }
    if ($email === '' && $phone === '') {
        Response::error('Email or phone required', 422);
    }
    if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        Response::error('Invalid email', 422);
    }

    bizhub_ensure_partner_tables($pdo);
    $partnerCode = strtolower(preg_replace('/[^a-z0-9]/', '', (string) ($body['partnerCode'] ?? '')) ?? '');
    $partnerCode = substr($partnerCode, 0, 32);
    $partnerId = $partnerCode !== '' ? bizhub_active_partner_id($pdo, $partnerCode) : null;
    $stmt = $pdo->prepare('INSERT INTO leads (first_name, last_name, email, phone, service, message, source, partner_code, locale, page_url, ip_address, assigned_to)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
    $stmt->execute([
        $first,
        $last,
        $email,
        $phone !== '' ? $phone : null,
        $service,
        $message,
        $partnerId ? 'partner' : bizhub_clip(trim($body['source'] ?? 'website'), 60),
        $partnerId ? $partnerCode : null,
        bizhub_locale($body['locale'] ?? null),
        bizhub_clip(trim($body['pageUrl'] ?? $body['page_url'] ?? ''), 500) ?: null,
        $ip,
        $partnerId,
    ]);

    bizhub_notify_staff(
        $pdo,
        $cfg,
        'سرنخ جدید BizHub',
        "نام: {$first} {$last}\nایمیل: {$email}\nتلفن: {$phone}\nخدمت: {$service}\nمنبع: " . ($partnerId ? $partnerCode : 'website') . "\n\n" . bizhub_clip($message, 800) . "\n\n" . bizhub_app_origin($cfg) . '/admin/'
    );

    Response::json(['ok' => true, 'message' => 'Lead created'], 201);
}

// ─── Public: published posts ───
if ($method === 'GET' && $uri === '/public/posts') {
    $locale = bizhub_locale($_GET['locale'] ?? 'fa') ?? 'fa';
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
    $locale = bizhub_locale($_GET['locale'] ?? 'fa') ?? 'fa';
    $stmt = $pdo->query('SELECT * FROM faqs WHERE is_published = 1 ORDER BY sort_order ASC, id ASC');
    $rows = $stmt->fetchAll();
    $out = array_map(function ($r) use ($locale) {
        $q = $r['question_' . $locale] ?? $r['question_fa'];
        $a = $r['answer_' . $locale] ?? $r['answer_fa'];
        return ['id' => (int)$r['id'], 'question' => $q, 'answer' => $a];
    }, $rows);
    Response::json(['ok' => true, 'faqs' => $out]);
}

// ─── Public: page view (aggregated, no personal data) ───
if ($method === 'POST' && $uri === '/public/hit') {
    $ua = (string) ($_SERVER['HTTP_USER_AGENT'] ?? '');
    $fetchSite = strtolower((string) ($_SERVER['HTTP_SEC_FETCH_SITE'] ?? ''));
    $bot = (bool) preg_match('/bot|crawl|spider|slurp|preview|facebookexternalhit|wget|curl/i', $ua);
    $crossSite = $fetchSite !== '' && $fetchSite !== 'same-origin';
    if (!$bot && !$crossSite) {
        $ip = (string) ($_SERVER['REMOTE_ADDR'] ?? '0.0.0.0');
        if (!empty($cfg['security']['trust_cloudflare']) && !empty($_SERVER['HTTP_CF_CONNECTING_IP'])) {
            $candidate = trim((string) $_SERVER['HTTP_CF_CONNECTING_IP']);
            if (filter_var($candidate, FILTER_VALIDATE_IP)) {
                $ip = $candidate;
            }
        }
        if (RateLimit::check($pdo, $ip, 'page_hit', 240, 60)) {
            $body = bizhub_json_body();
            bizhub_record_hit($pdo, (string) ($body['path'] ?? ''));
        }
    }
    Response::json(['ok' => true]);
}

// ─── Protected routes below ───
Auth::requireAdminIp($cfg);
Auth::requireUser();
Auth::requireFreshSession($pdo);
Auth::verifyCsrf();

if ($method === 'GET' && $uri === '/auth/mfa/setup') {
    $user = Auth::user();
    if (!empty($user['totp_enabled'])) {
        Response::error('MFA already enabled', 409);
    }
    $secret = (string) ($_SESSION['mfa_enroll_secret'] ?? '');
    if ($secret === '') {
        $secret = Totp::secret();
        $_SESSION['mfa_enroll_secret'] = $secret;
    }
    $email = (string) ($user['email'] ?? 'admin');
    Response::json([
        'ok' => true,
        'secret' => $secret,
        'otpauth' => Totp::otpauthUri($secret, $email, (string) ($cfg['app_name'] ?? 'BizHub')),
    ]);
}

if ($method === 'POST' && $uri === '/auth/mfa/enable') {
    $user = Auth::user();
    $secret = (string) ($_SESSION['mfa_enroll_secret'] ?? '');
    $body = bizhub_json_body();
    $code = (string) ($body['code'] ?? '');
    if ($secret === '' || !Totp::verify($secret, $code)) {
        Response::error('Invalid MFA code', 422);
    }
    $pdo->prepare('UPDATE users SET totp_secret = ?, totp_enabled = 1 WHERE id = ?')
        ->execute([$secret, (int) $user['id']]);
    unset($_SESSION['mfa_enroll_secret']);
    $_SESSION['user']['totp_enabled'] = true;
    $_SESSION['mfa_ok'] = true;
    Response::json(['ok' => true, 'user' => Auth::user(), 'csrfToken' => Auth::csrfToken()]);
}

if ($method === 'POST' && $uri === '/auth/mfa/disable') {
    Auth::requireRole(['admin']);
    Auth::requireMfaOk($cfg);
    $body = bizhub_json_body();
    $row = Auth::loadUser($pdo, (int) Auth::user()['id']);
    $secret = (string) ($row['totp_secret'] ?? '');
    if ($secret === '' || !Totp::verify($secret, (string) ($body['code'] ?? ''))) {
        Response::error('Invalid MFA code', 422);
    }
    $pdo->prepare('UPDATE users SET totp_secret = NULL, totp_enabled = 0 WHERE id = ?')
        ->execute([(int) $row['id']]);
    $_SESSION['user']['totp_enabled'] = false;
    $_SESSION['mfa_ok'] = !Auth::mfaRequired($cfg);
    Response::json(['ok' => true]);
}

Auth::requireMfaOk($cfg);

if ($method === 'POST' && $uri === '/mail/test') {
    Auth::requireRole(['admin']);
    $email = (string) (Auth::user()['email'] ?? '');
    try {
        bizhub_mail_send(
            $cfg,
            $email,
            'آزمایش ایمیل BizHub',
            "این یک ایمیل آزمایشی از BizHub است.\nاگر این نامه را می‌بینید، ارسال ایمیل کار می‌کند.\n" . bizhub_app_origin($cfg) . '/admin/'
        );
    } catch (Throwable $e) {
        $msg = $e->getMessage();
        $secret = (string) ($cfg['mail']['smtp']['password'] ?? '');
        if ($secret !== '') {
            $msg = str_replace($secret, '***', $msg);
        }
        Response::error(bizhub_clip($msg, 300), 502);
    }
    Response::json(['ok' => true, 'message' => 'ایمیل آزمایشی به ' . $email . ' ارسال شد']);
}

// ─── Dashboard ───
if ($method === 'GET' && $uri === '/dashboard/stats') {
    Auth::requireRole(['admin', 'editor', 'sales']);
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
    $site = bizhub_site_stats($pdo);
    $activity = (Auth::user()['role'] ?? '') === 'admin' ? bizhub_activity_snapshot($pdo, 20) : null;
    Response::json(['ok' => true, 'stats' => $stats, 'recentLeads' => $recent, 'site' => $site, 'activity' => $activity]);
}

if ($method === 'GET' && $uri === '/activity') {
    Auth::requireRole(['admin']);
    Response::json(['ok' => true, 'activity' => bizhub_activity_snapshot($pdo, 200)]);
}

if ($method === 'GET' && $uri === '/site-pages') {
    Auth::requireRole(['admin', 'editor', 'sales']);
    bizhub_import_site_index($pdo);
    $section = substr(trim((string) ($_GET['section'] ?? '')), 0, 40);
    $area = substr(trim((string) ($_GET['area'] ?? '')), 0, 20);
    $locale = substr(trim((string) ($_GET['locale'] ?? '')), 0, 5);
    $q = trim((string) ($_GET['q'] ?? ''));
    $offset = max(0, (int) ($_GET['offset'] ?? 0));
    $limit = 40;
    $where = ' WHERE 1=1';
    $params = [];
    if ($section !== '') {
        $where .= ' AND section = ?';
        $params[] = $section;
    }
    $areaFilter = bizhub_area_filter($area);
    if ($areaFilter) {
        $where .= $areaFilter[0];
        foreach ($areaFilter[1] as $param) {
            $params[] = $param;
        }
    }
    if ($locale !== '') {
        $where .= ' AND locale = ?';
        $params[] = $locale;
    }
    if ($q !== '') {
        $where .= ' AND (path LIKE ? OR title LIKE ? OR summary LIKE ?)';
        $like = '%' . str_replace(['\\', '%', '_'], ['\\\\', '\\%', '\\_'], $q) . '%';
        $params[] = $like;
        $params[] = $like;
        $params[] = $like;
    }
    $countStmt = $pdo->prepare('SELECT COUNT(*) FROM site_pages' . $where);
    $countStmt->execute($params);
    $total = (int) $countStmt->fetchColumn();
    $sql = 'SELECT path, locale, section, title, summary FROM site_pages' . $where . ' ORDER BY path ASC LIMIT ' . $limit . ' OFFSET ' . $offset;
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    Response::json(['ok' => true, 'total' => $total, 'offset' => $offset, 'pages' => $stmt->fetchAll()]);
}

// ─── Leads CRM ───
if (str_starts_with($uri, '/leads')) {
    Auth::requireRole(['admin', 'editor', 'sales']);
}

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
    $statusOk = ['new', 'contacted', 'qualified', 'proposal', 'won', 'lost'];
    $priorityOk = ['low', 'normal', 'high'];
    $sets = [];
    $vals = [];
    if (array_key_exists('status', $body)) {
        $status = (string) $body['status'];
        if (!in_array($status, $statusOk, true)) {
            Response::error('Invalid status', 422);
        }
        $sets[] = 'status = ?';
        $vals[] = $status;
    }
    if (array_key_exists('priority', $body)) {
        $priority = (string) $body['priority'];
        if (!in_array($priority, $priorityOk, true)) {
            Response::error('Invalid priority', 422);
        }
        $sets[] = 'priority = ?';
        $vals[] = $priority;
    }
    if (array_key_exists('assigned_to', $body)) {
        if ($body['assigned_to'] === null || $body['assigned_to'] === '') {
            $sets[] = 'assigned_to = ?';
            $vals[] = null;
        } else {
            $uid = (int) $body['assigned_to'];
            $chk = $pdo->prepare('SELECT id FROM users WHERE id = ? AND is_active = 1 LIMIT 1');
            $chk->execute([$uid]);
            if (!$chk->fetch()) {
                Response::error('Invalid assignee', 422);
            }
            $sets[] = 'assigned_to = ?';
            $vals[] = $uid;
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
    $text = bizhub_clip(trim($body['body'] ?? ''), 8000);
    if ($text === '') {
        Response::error('Note body required', 422);
    }
    $user = Auth::user();
    $pdo->prepare('INSERT INTO lead_notes (lead_id, user_id, body) VALUES (?, ?, ?)')
        ->execute([(int)$p['id'], $user['id'], $text]);
    Response::json(['ok' => true], 201);
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
    Auth::requireRole(['admin', 'editor', 'sales']);
    $stmt = $pdo->query('SELECT id, slug, category, title_fa, status, published_at, updated_at FROM posts ORDER BY updated_at DESC');
    Response::json(['ok' => true, 'posts' => $stmt->fetchAll()]);
}

if ($method === 'GET' && ($p = route_match($uri, '/posts/{id}'))) {
    Auth::requireRole(['admin', 'editor', 'sales']);
    $stmt = $pdo->prepare('SELECT * FROM posts WHERE id = ?');
    $stmt->execute([(int)$p['id']]);
    $post = $stmt->fetch();
    if (!$post) {
        Response::error('Not found', 404);
    }
    Response::json(['ok' => true, 'post' => $post]);
}

if ($method === 'POST' && $uri === '/posts') {
    Auth::requireRole(['admin', 'editor']);
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
    Auth::requireRole(['admin', 'editor']);
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
    Auth::requireRole(['admin']);
    $pdo->prepare('DELETE FROM posts WHERE id = ?')->execute([(int)$p['id']]);
    Response::json(['ok' => true]);
}

// ─── FAQs CMS ───
if ($method === 'GET' && $uri === '/faqs') {
    Auth::requireRole(['admin', 'editor', 'sales']);
    $stmt = $pdo->query('SELECT * FROM faqs ORDER BY sort_order ASC, id ASC');
    Response::json(['ok' => true, 'faqs' => $stmt->fetchAll()]);
}

if ($method === 'POST' && $uri === '/faqs') {
    Auth::requireRole(['admin', 'editor']);
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
    Auth::requireRole(['admin', 'editor']);
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
    Auth::requireRole(['admin']);
    $pdo->prepare('DELETE FROM faqs WHERE id = ?')->execute([(int)$p['id']]);
    Response::json(['ok' => true]);
}

require __DIR__ . '/lib/partner-routes.php';
require __DIR__ . '/lib/commerce-routes.php';

Response::error('Not found', 404);
