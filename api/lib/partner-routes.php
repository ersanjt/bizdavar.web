<?php

declare(strict_types=1);

bizhub_ensure_partner_tables($pdo);
$actor = Auth::user();
$actorRole = (string) ($actor['role'] ?? '');
$isAdmin = $actorRole === 'admin';
$isStaff = in_array($actorRole, ['admin', 'sales'], true);
$isPartner = $actorRole === 'partner';
$origin = bizhub_app_origin($cfg);

if ($method === 'GET' && $uri === '/partner/home') {
    Auth::requireRole(['partner']);
    $profile = $pdo->prepare('SELECT code, phone, company FROM partners WHERE user_id = ?');
    $profile->execute([(int) $actor['id']]);
    $row = $profile->fetch() ?: ['code' => '', 'phone' => '', 'company' => ''];
    $orders = $pdo->prepare("SELECT status, COUNT(*) AS c FROM partner_orders WHERE partner_id = ? GROUP BY status");
    $orders->execute([(int) $actor['id']]);
    $byStatus = [];
    foreach ($orders->fetchAll() as $item) {
        $byStatus[(string) $item['status']] = (int) $item['c'];
    }
    $openTickets = $pdo->prepare("SELECT COUNT(*) FROM tickets WHERE partner_id = ? AND status <> 'closed'");
    $openTickets->execute([(int) $actor['id']]);
    $docCounts = $pdo->prepare('SELECT kind, COUNT(*) AS c FROM documents WHERE partner_id = ? GROUP BY kind');
    $docCounts->execute([(int) $actor['id']]);
    $docs = ['proforma' => 0, 'invoice' => 0];
    foreach ($docCounts->fetchAll() as $item) {
        $docs[(string) $item['kind']] = (int) $item['c'];
    }
    $recentOrders = $pdo->prepare('SELECT id, client_name, service_title, status, created_at FROM partner_orders WHERE partner_id = ? ORDER BY id DESC LIMIT 5');
    $recentOrders->execute([(int) $actor['id']]);
    $recentTickets = $pdo->prepare('SELECT id, subject, status, updated_at FROM tickets WHERE partner_id = ? ORDER BY updated_at DESC LIMIT 5');
    $recentTickets->execute([(int) $actor['id']]);
    Response::json([
        'ok' => true,
        'name' => (string) ($actor['name'] ?? ''),
        'code' => (string) $row['code'],
        'referralUrl' => $origin . '/?ref=' . rawurlencode((string) $row['code']),
        'loginUrl' => $origin . '/admin/',
        'orders' => $byStatus,
        'recentOrders' => $recentOrders->fetchAll(),
        'recentTickets' => $recentTickets->fetchAll(),
        'ticketsOpen' => (int) $openTickets->fetchColumn(),
        'documents' => $docs,
    ]);
}

if ($method === 'POST' && ($p = route_match($uri, '/users/{id}/reset-mail'))) {
    Auth::requireRole(['admin']);
    if (!bizhub_send_password_reset($pdo, $cfg, (int) $p['id'])) {
        Response::error('این کاربر فعال نیست', 422);
    }
    Response::json(['ok' => true, 'message' => 'ایمیل بازیابی، با لینک و کد تأیید، فرستاده شد.']);
}

if ($method === 'POST' && ($p = route_match($uri, '/users/{id}/mail'))) {
    Auth::requireRole(['admin']);
    $body = bizhub_json_body();
    $subject = str_replace(["\r", "\n"], ' ', bizhub_clip(trim((string) ($body['subject'] ?? '')), 180));
    $text = bizhub_clip(trim((string) ($body['body'] ?? '')), 4000);
    if ($subject === '' || $text === '') {
        Response::error('موضوع و متن ایمیل لازم است', 422);
    }
    $email = bizhub_user_email($pdo, (int) $p['id']);
    if ($email === '') {
        Response::error('این کاربر ایمیل فعال ندارد', 422);
    }
    bizhub_mail($cfg, $email, $subject, $text, [
        'heading' => $subject,
        'button_label' => 'باز کردن BizHub',
        'button_url' => $origin . '/admin/',
    ]);
    Response::json(['ok' => true, 'message' => 'ایمیل فرستاده شد.']);
}

if ($method === 'GET' && $uri === '/partners') {
    Auth::requireRole(['admin']);
    $rows = $pdo->query(
        "SELECT u.id, u.name, u.email, u.is_active, u.last_login_at, u.created_at,
                p.code, p.phone, p.company,
                (SELECT COUNT(*) FROM partner_orders o WHERE o.partner_id = u.id) AS orders_count,
                (SELECT COUNT(*) FROM tickets t WHERE t.partner_id = u.id AND t.status <> 'closed') AS tickets_open
         FROM users u
         INNER JOIN partners p ON p.user_id = u.id
         WHERE u.role = 'partner'
         ORDER BY u.created_at DESC"
    )->fetchAll();
    Response::json(['ok' => true, 'partners' => $rows, 'origin' => $origin]);
}

if ($method === 'POST' && $uri === '/partners') {
    Auth::requireRole(['admin']);
    $body = bizhub_json_body();
    $name = bizhub_clip(trim((string) ($body['name'] ?? '')), 120);
    $email = strtolower(bizhub_clip(trim((string) ($body['email'] ?? '')), 190));
    $password = (string) ($body['password'] ?? '');
    $phone = bizhub_clip(trim((string) ($body['phone'] ?? '')), 40);
    $company = bizhub_clip(trim((string) ($body['company'] ?? '')), 120);
    $code = strtolower(preg_replace('/[^a-z0-9]/', '', (string) ($body['code'] ?? '')) ?? '');
    if ($name === '' || $email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        Response::error('نام و ایمیل معتبر لازم است', 422);
    }
    if (strlen($password) < 10) {
        Response::error('رمز حداقل ۱۰ کاراکتر باشد', 422);
    }
    if ($code !== '' && (strlen($code) < 3 || strlen($code) > 32)) {
        Response::error('کد بازاریاب باید ۳ تا ۳۲ حرف انگلیسی یا عدد باشد', 422);
    }
    $exists = $pdo->prepare('SELECT id FROM users WHERE email = ?');
    $exists->execute([$email]);
    if ($exists->fetch()) {
        Response::error('این ایمیل قبلاً ثبت شده', 422);
    }
    if ($code === '') {
        $code = bizhub_partner_code($pdo);
    } else {
        $taken = $pdo->prepare('SELECT user_id FROM partners WHERE code = ?');
        $taken->execute([$code]);
        if ($taken->fetch()) {
            Response::error('این کد معرفی قبلاً استفاده شده', 422);
        }
    }
    $pdo->beginTransaction();
    try {
        $pdo->prepare("INSERT INTO users (email, password_hash, name, role) VALUES (?, ?, ?, 'partner')")
            ->execute([$email, password_hash($password, PASSWORD_DEFAULT), $name]);
        $id = (int) $pdo->lastInsertId();
        $pdo->prepare('INSERT INTO partners (user_id, code, phone, company) VALUES (?, ?, ?, ?)')
            ->execute([$id, $code, $phone !== '' ? $phone : null, $company !== '' ? $company : null]);
        $pdo->commit();
    } catch (Throwable $e) {
        if ($pdo->inTransaction()) {
            $pdo->rollBack();
        }
        throw $e;
    }
    Response::json([
        'ok' => true,
        'id' => $id,
        'code' => $code,
        'loginUrl' => $origin . '/admin/',
        'referralUrl' => $origin . '/?ref=' . rawurlencode($code),
    ], 201);
}

if ($method === 'PATCH' && ($p = route_match($uri, '/partners/{id}'))) {
    Auth::requireRole(['admin']);
    $id = (int) $p['id'];
    $body = bizhub_json_body();
    $user = $pdo->prepare("SELECT id FROM users WHERE id = ? AND role = 'partner'");
    $user->execute([$id]);
    if (!$user->fetch()) {
        Response::error('بازاریاب پیدا نشد', 404);
    }
    if (array_key_exists('active', $body)) {
        $pdo->prepare('UPDATE users SET is_active = ? WHERE id = ?')->execute([!empty($body['active']) ? 1 : 0, $id]);
    }
    if (array_key_exists('password', $body)) {
        $password = (string) $body['password'];
        if (strlen($password) < 10) {
            Response::error('رمز حداقل ۱۰ کاراکتر باشد', 422);
        }
        $pdo->prepare('UPDATE users SET password_hash = ? WHERE id = ?')
            ->execute([password_hash($password, PASSWORD_DEFAULT), $id]);
    }
    if (array_key_exists('phone', $body) || array_key_exists('company', $body)) {
        $pdo->prepare('UPDATE partners SET phone = ?, company = ? WHERE user_id = ?')->execute([
            bizhub_clip(trim((string) ($body['phone'] ?? '')), 40) ?: null,
            bizhub_clip(trim((string) ($body['company'] ?? '')), 120) ?: null,
            $id,
        ]);
    }
    Response::json(['ok' => true]);
}

if ($method === 'GET' && $uri === '/prices') {
    Auth::requireRole(['admin', 'sales', 'partner']);
    $sql = 'SELECT id, title, category, summary, price_label, amount, is_active, sort_order FROM price_items';
    if ($isPartner) {
        $sql .= ' WHERE is_active = 1';
    }
    $sql .= ' ORDER BY sort_order ASC, id ASC';
    Response::json(['ok' => true, 'prices' => $pdo->query($sql)->fetchAll()]);
}

if ($method === 'POST' && $uri === '/prices') {
    Auth::requireRole(['admin']);
    $body = bizhub_json_body();
    $title = bizhub_clip(trim((string) ($body['title'] ?? '')), 180);
    $label = bizhub_clip(trim((string) ($body['price_label'] ?? '')), 80);
    if ($title === '' || $label === '') {
        Response::error('عنوان و قیمت لازم است', 422);
    }
    $amount = $body['amount'] ?? null;
    $amount = ($amount === '' || $amount === null) ? null : (float) $amount;
    $pdo->prepare('INSERT INTO price_items (title, category, summary, price_label, amount, is_active, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?)')
        ->execute([
            $title,
            bizhub_clip(trim((string) ($body['category'] ?? '')), 80) ?: 'عمومی',
            bizhub_clip(trim((string) ($body['summary'] ?? '')), 500),
            $label,
            $amount,
            !isset($body['is_active']) || !empty($body['is_active']) ? 1 : 0,
            (int) ($body['sort_order'] ?? 0),
        ]);
    Response::json(['ok' => true, 'id' => (int) $pdo->lastInsertId()], 201);
}

if ($method === 'PATCH' && ($p = route_match($uri, '/prices/{id}'))) {
    Auth::requireRole(['admin']);
    $body = bizhub_json_body();
    $title = bizhub_clip(trim((string) ($body['title'] ?? '')), 180);
    $label = bizhub_clip(trim((string) ($body['price_label'] ?? '')), 80);
    if ($title === '' || $label === '') {
        Response::error('عنوان و قیمت لازم است', 422);
    }
    $amount = array_key_exists('amount', $body) && $body['amount'] !== '' && $body['amount'] !== null ? (float) $body['amount'] : null;
    $pdo->prepare('UPDATE price_items SET title = ?, category = ?, summary = ?, price_label = ?, amount = ?, is_active = ?, sort_order = ? WHERE id = ?')
        ->execute([
            $title,
            bizhub_clip(trim((string) ($body['category'] ?? '')), 80) ?: 'عمومی',
            bizhub_clip(trim((string) ($body['summary'] ?? '')), 500),
            bizhub_clip(trim((string) ($body['price_label'] ?? '')), 80),
            $amount,
            !empty($body['is_active']) ? 1 : 0,
            (int) ($body['sort_order'] ?? 0),
            (int) $p['id'],
        ]);
    Response::json(['ok' => true]);
}

if ($method === 'GET' && $uri === '/orders') {
    Auth::requireRole(['admin', 'sales', 'partner']);
    if ($isPartner) {
        $stmt = $pdo->prepare('SELECT * FROM partner_orders WHERE partner_id = ? ORDER BY created_at DESC LIMIT 200');
        $stmt->execute([(int) $actor['id']]);
        Response::json(['ok' => true, 'orders' => $stmt->fetchAll()]);
    }
    $rows = $pdo->query(
        "SELECT o.*, u.name AS partner_name, p.code AS partner_code
         FROM partner_orders o
         INNER JOIN users u ON u.id = o.partner_id
         LEFT JOIN partners p ON p.user_id = o.partner_id
         ORDER BY o.created_at DESC LIMIT 200"
    )->fetchAll();
    Response::json(['ok' => true, 'orders' => $rows]);
}

if ($method === 'POST' && $uri === '/orders') {
    Auth::requireRole(['partner']);
    if (!RateLimit::check($pdo, 'user:' . (int) $actor['id'], 'partner_order', 40, 3600)) {
        Response::error('تعداد درخواست‌ها زیاد است. کمی بعد دوباره تلاش کنید.', 429);
    }
    $body = bizhub_json_body();
    $client = bizhub_clip(trim((string) ($body['client_name'] ?? '')), 160);
    $details = bizhub_clip(trim((string) ($body['details'] ?? '')), 5000);
    $itemId = (int) ($body['price_item_id'] ?? 0);
    if ($client === '' || $details === '' || $itemId < 1) {
        Response::error('نام مشتری، خدمت و توضیح لازم است', 422);
    }
    $item = $pdo->prepare('SELECT id, title FROM price_items WHERE id = ? AND is_active = 1');
    $item->execute([$itemId]);
    $price = $item->fetch();
    if (!$price) {
        Response::error('این خدمت در فهرست قیمت نیست', 422);
    }
    $phone = bizhub_clip(trim((string) ($body['client_phone'] ?? '')), 40);
    $email = bizhub_clip(trim((string) ($body['client_email'] ?? '')), 190);
    if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        Response::error('ایمیل مشتری معتبر نیست', 422);
    }
    if ($phone === '' && $email === '') {
        Response::error('تلفن یا ایمیل مشتری لازم است', 422);
    }
    $pdo->prepare('INSERT INTO partner_orders (partner_id, price_item_id, client_name, client_phone, client_email, service_title, details) VALUES (?, ?, ?, ?, ?, ?, ?)')
        ->execute([
            (int) $actor['id'],
            $itemId,
            $client,
            $phone !== '' ? $phone : null,
            $email !== '' ? $email : null,
            (string) $price['title'],
            $details,
        ]);
    $orderId = (int) $pdo->lastInsertId();
    bizhub_notify_staff(
        $pdo,
        $cfg,
        'سفارش جدید: ' . (string) $price['title'],
        "بازاریاب: " . (string) ($actor['name'] ?? '') . "\nمشتری: {$client}\nتلفن: {$phone}\nایمیل: {$email}\nجزئیات:\n" . bizhub_clip($details, 800) . "\n\n" . bizhub_app_origin($cfg) . '/admin/'
    );
    Response::json(['ok' => true, 'id' => $orderId], 201);
}

if ($method === 'PATCH' && ($p = route_match($uri, '/orders/{id}'))) {
    Auth::requireRole(['admin', 'sales']);
    $body = bizhub_json_body();
    $status = (string) ($body['status'] ?? '');
    $allowed = ['new', 'quoted', 'accepted', 'rejected', 'done'];
    if (!in_array($status, $allowed, true)) {
        Response::error('وضعیت نامعتبر است', 422);
    }
    $note = bizhub_clip(trim((string) ($body['quote_note'] ?? '')), 4000);
    $info = $pdo->prepare('SELECT partner_id, client_name, service_title FROM partner_orders WHERE id = ?');
    $info->execute([(int) $p['id']]);
    $order = $info->fetch();
    $pdo->prepare('UPDATE partner_orders SET status = ?, quote_note = ? WHERE id = ?')
        ->execute([$status, $note !== '' ? $note : null, (int) $p['id']]);
    if ($order) {
        $labels = ['new' => 'جدید', 'quoted' => 'قیمت داده شد', 'accepted' => 'پذیرفته', 'rejected' => 'رد شد', 'done' => 'انجام شد'];
        $email = bizhub_user_email($pdo, (int) $order['partner_id']);
        if ($email !== '') {
            bizhub_mail(
                $cfg,
                $email,
                'وضعیت سفارش ' . (string) $order['client_name'],
                "سفارش " . $order['service_title'] . " برای " . $order['client_name'] . "\nوضعیت: " . ($labels[$status] ?? $status) . "\n" . ($note !== '' ? $note . "\n" : '') . "\n" . bizhub_app_origin($cfg) . '/admin/'
            );
        }
    }
    Response::json(['ok' => true]);
}

if ($method === 'GET' && $uri === '/tickets') {
    Auth::requireRole(['admin', 'sales', 'partner']);
    if ($isPartner) {
        $stmt = $pdo->prepare('SELECT id, subject, status, created_at, updated_at FROM tickets WHERE partner_id = ? ORDER BY updated_at DESC LIMIT 200');
        $stmt->execute([(int) $actor['id']]);
        Response::json(['ok' => true, 'tickets' => $stmt->fetchAll()]);
    }
    $rows = $pdo->query(
        "SELECT t.id, t.subject, t.status, t.created_at, t.updated_at, u.name AS partner_name, p.code AS partner_code
         FROM tickets t
         INNER JOIN users u ON u.id = t.partner_id
         LEFT JOIN partners p ON p.user_id = t.partner_id
         ORDER BY t.updated_at DESC LIMIT 200"
    )->fetchAll();
    Response::json(['ok' => true, 'tickets' => $rows]);
}

if ($method === 'POST' && $uri === '/tickets') {
    Auth::requireRole(['admin', 'sales', 'partner']);
    if (!RateLimit::check($pdo, 'user:' . (int) $actor['id'], 'partner_ticket', 20, 3600)) {
        Response::error('تعداد تیکت‌ها زیاد است. کمی بعد دوباره تلاش کنید.', 429);
    }
    $body = bizhub_json_body();
    $subject = str_replace(["\r", "\n"], ' ', bizhub_clip(trim((string) ($body['subject'] ?? '')), 180));
    $text = bizhub_clip(trim((string) ($body['body'] ?? '')), 4000);
    if ($subject === '' || $text === '') {
        Response::error('موضوع و متن تیکت لازم است', 422);
    }
    $partnerId = (int) $actor['id'];
    if (!$isPartner) {
        $partnerId = (int) ($body['partner_id'] ?? 0);
        $who = $pdo->prepare("SELECT id FROM users WHERE id = ? AND role = 'partner' AND is_active = 1");
        $who->execute([$partnerId]);
        if (!$who->fetch()) {
            Response::error('بازاریاب پیدا نشد', 422);
        }
    }
    $pdo->beginTransaction();
    try {
        $pdo->prepare('INSERT INTO tickets (partner_id, subject) VALUES (?, ?)')->execute([$partnerId, $subject]);
        $id = (int) $pdo->lastInsertId();
        $pdo->prepare('INSERT INTO ticket_messages (ticket_id, user_id, body) VALUES (?, ?, ?)')
            ->execute([$id, (int) $actor['id'], $text]);
        $pdo->commit();
    } catch (Throwable $e) {
        if ($pdo->inTransaction()) {
            $pdo->rollBack();
        }
        throw $e;
    }
    if ($isPartner) {
        bizhub_notify_staff(
            $pdo,
            $cfg,
            'تیکت جدید: ' . $subject,
            (string) ($actor['name'] ?? '') . " نوشت:\n\n" . bizhub_clip($text, 800) . "\n\n" . $origin . '/admin/'
        );
    } else {
        $email = bizhub_user_email($pdo, $partnerId);
        if ($email !== '') {
            bizhub_mail($cfg, $email, 'تیکت: ' . $subject, $text, [
                'heading' => $subject,
                'intro' => 'یک تیکت تازه از بیزدوار برای شما ثبت شد.',
                'button_label' => 'دیدن تیکت',
                'button_url' => $origin . '/admin/',
            ]);
        }
    }
    Response::json(['ok' => true, 'id' => $id], 201);
}

if ($method === 'POST' && ($p = route_match($uri, '/orders/{id}/files'))) {
    Auth::requireRole(['admin', 'sales', 'partner']);
    $id = (int) $p['id'];
    $stmt = $pdo->prepare('SELECT id, partner_id FROM partner_orders WHERE id = ?');
    $stmt->execute([$id]);
    $order = $stmt->fetch();
    if (!$order) {
        Response::error('سفارش پیدا نشد', 404);
    }
    if ($isPartner && (int) $order['partner_id'] !== (int) $actor['id']) {
        Response::error('Forbidden', 403);
    }
    $saved = bizhub_store_order_uploads($pdo, $id, (int) $actor['id']);
    if ($saved === []) {
        Response::error('فایلی انتخاب نشده', 422);
    }
    Response::json(['ok' => true, 'files' => $saved], 201);
}

if ($method === 'GET' && ($p = route_match($uri, '/orders/{id}/files/{fileId}'))) {
    Auth::requireRole(['admin', 'sales', 'partner']);
    $id = (int) $p['id'];
    $fileId = (int) $p['fileId'];
    $stmt = $pdo->prepare('SELECT f.*, o.partner_id FROM order_files f INNER JOIN partner_orders o ON o.id = f.order_id WHERE f.id = ? AND f.order_id = ?');
    $stmt->execute([$fileId, $id]);
    $file = $stmt->fetch();
    if (!$file) {
        Response::error('فایل پیدا نشد', 404);
    }
    if ($isPartner && (int) $file['partner_id'] !== (int) $actor['id']) {
        Response::error('Forbidden', 403);
    }
    if (!preg_match('/^[a-f0-9]{32}\.(pdf|jpg|png|webp|gif)$/', (string) $file['stored_name'])) {
        Response::error('فایل پیدا نشد', 404);
    }
    $root = realpath(bizhub_order_files_root());
    $path = realpath(bizhub_order_files_root() . '/' . $id . '/' . $file['stored_name']);
    if ($root === false || $path === false || !str_starts_with($path, $root . DIRECTORY_SEPARATOR)) {
        Response::error('فایل پیدا نشد', 404);
    }
    $mime = (string) $file['mime'];
    if (!in_array($mime, ['application/pdf', 'image/jpeg', 'image/png', 'image/webp', 'image/gif'], true)) {
        Response::error('فایل پیدا نشد', 404);
    }
    header('Content-Type: ' . $mime);
    header('X-Content-Type-Options: nosniff');
    header('Content-Length: ' . (string) filesize($path));
    $original = str_replace(["\r", "\n", '"'], '', (string) $file['original_name']);
    $ascii = preg_replace('/[^A-Za-z0-9._-]+/', '_', $original) ?: 'file';
    header('Content-Disposition: inline; filename="' . $ascii . '"; filename*=UTF-8\'\'' . rawurlencode($original));
    readfile($path);
    exit;
}

if ($method === 'GET' && ($p = route_match($uri, '/tickets/{id}'))) {
    Auth::requireRole(['admin', 'sales', 'partner']);
    $id = (int) $p['id'];
    $stmt = $pdo->prepare(
        "SELECT t.*, u.name AS partner_name FROM tickets t
         INNER JOIN users u ON u.id = t.partner_id WHERE t.id = ?"
    );
    $stmt->execute([$id]);
    $ticket = $stmt->fetch();
    if (!$ticket) {
        Response::error('تیکت پیدا نشد', 404);
    }
    if ($isPartner && (int) $ticket['partner_id'] !== (int) $actor['id']) {
        Response::error('Forbidden', 403);
    }
    $msgs = $pdo->prepare(
        "SELECT m.id, m.user_id, m.body, m.created_at, u.name AS author_name, u.role AS author_role
         FROM ticket_messages m INNER JOIN users u ON u.id = m.user_id
         WHERE m.ticket_id = ? ORDER BY m.created_at ASC"
    );
    $msgs->execute([$id]);
    Response::json(['ok' => true, 'ticket' => $ticket, 'messages' => $msgs->fetchAll()]);
}

if ($method === 'POST' && ($p = route_match($uri, '/tickets/{id}/messages'))) {
    Auth::requireRole(['admin', 'sales', 'partner']);
    $id = (int) $p['id'];
    $stmt = $pdo->prepare('SELECT id, partner_id, status, subject FROM tickets WHERE id = ?');
    $stmt->execute([$id]);
    $ticket = $stmt->fetch();
    if (!$ticket) {
        Response::error('تیکت پیدا نشد', 404);
    }
    if ($isPartner && (int) $ticket['partner_id'] !== (int) $actor['id']) {
        Response::error('Forbidden', 403);
    }
    if ((string) $ticket['status'] === 'closed') {
        Response::error('این تیکت بسته شده', 422);
    }
    $body = bizhub_json_body();
    $text = bizhub_clip(trim((string) ($body['body'] ?? '')), 4000);
    if ($text === '') {
        Response::error('متن پاسخ لازم است', 422);
    }
    $next = $isPartner ? 'open' : 'answered';
    $pdo->prepare('INSERT INTO ticket_messages (ticket_id, user_id, body) VALUES (?, ?, ?)')
        ->execute([$id, (int) $actor['id'], $text]);
    $pdo->prepare('UPDATE tickets SET status = ? WHERE id = ?')->execute([$next, $id]);
    $preview = bizhub_clip($text, 800);
    $panel = bizhub_app_origin($cfg) . '/admin/';
    if ($isPartner) {
        bizhub_notify_staff($pdo, $cfg, 'پاسخ تیکت: ' . (string) $ticket['subject'], "بازاریاب پاسخ داد:\n\n{$preview}\n\n{$panel}");
    } else {
        $email = bizhub_user_email($pdo, (int) $ticket['partner_id']);
        if ($email !== '') {
            bizhub_mail($cfg, $email, 'پاسخ تیکت: ' . (string) $ticket['subject'], "پاسخ بیزدوار:\n\n{$preview}\n\n{$panel}");
        }
    }
    Response::json(['ok' => true]);
}

if ($method === 'PATCH' && ($p = route_match($uri, '/tickets/{id}'))) {
    Auth::requireRole(['admin', 'sales']);
    $status = (string) (bizhub_json_body()['status'] ?? '');
    if (!in_array($status, ['open', 'answered', 'closed'], true)) {
        Response::error('وضعیت نامعتبر است', 422);
    }
    $pdo->prepare('UPDATE tickets SET status = ? WHERE id = ?')->execute([$status, (int) $p['id']]);
    Response::json(['ok' => true]);
}
