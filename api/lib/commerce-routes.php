<?php

declare(strict_types=1);

bizhub_ensure_partner_tables($pdo);
$actor = Auth::user();
$role = (string) ($actor['role'] ?? '');
$isPartner = $role === 'partner';
$staff = in_array($role, ['admin', 'sales'], true);

if ($method === 'GET' && $uri === '/commerce/summary') {
    Auth::requireRole(['admin', 'sales']);
    $one = static function (PDO $pdo, string $sql): int {
        return (int) $pdo->query($sql)->fetchColumn();
    };
    Response::json([
        'ok' => true,
        'orders_open' => $one($pdo, "SELECT COUNT(*) FROM partner_orders WHERE status IN ('new','quoted','accepted')"),
        'proformas_open' => $one($pdo, "SELECT COUNT(*) FROM documents WHERE kind = 'proforma' AND status IN ('draft','sent')"),
        'invoices_unpaid' => $one($pdo, "SELECT COUNT(*) FROM documents WHERE kind = 'invoice' AND status = 'issued'"),
        'invoices_paid' => $one($pdo, "SELECT COUNT(*) FROM documents WHERE kind = 'invoice' AND status = 'paid'"),
        'purchases_open' => $one($pdo, "SELECT COUNT(*) FROM purchases WHERE status IN ('planned','ordered')"),
        'tickets_open' => $one($pdo, "SELECT COUNT(*) FROM tickets WHERE status <> 'closed'"),
        'leads_new' => $one($pdo, "SELECT COUNT(*) FROM leads WHERE status = 'new'"),
    ]);
}

if ($method === 'GET' && $uri === '/inbox') {
    Auth::requireRole(['admin', 'sales']);
    $items = [];
    foreach ($pdo->query("SELECT id, first_name, last_name, message, service, partner_code, created_at FROM leads ORDER BY created_at DESC LIMIT 25") as $row) {
        $items[] = [
            'kind' => 'lead',
            'id' => (int) $row['id'],
            'title' => trim($row['first_name'] . ' ' . $row['last_name']),
            'body' => bizhub_clip((string) $row['message'], 180),
            'meta' => (string) $row['service'],
            'at' => (string) $row['created_at'],
        ];
    }
    foreach ($pdo->query("SELECT t.id, t.subject, t.status, t.updated_at, u.name AS partner_name FROM tickets t INNER JOIN users u ON u.id = t.partner_id ORDER BY t.updated_at DESC LIMIT 25") as $row) {
        $items[] = [
            'kind' => 'ticket',
            'id' => (int) $row['id'],
            'title' => (string) $row['subject'],
            'body' => (string) $row['partner_name'],
            'meta' => (string) $row['status'],
            'at' => (string) $row['updated_at'],
        ];
    }
    foreach ($pdo->query(
        "SELECT m.id, m.body, m.created_at, o.id AS order_id, o.client_name, u.name AS author_name
         FROM order_messages m
         INNER JOIN partner_orders o ON o.id = m.order_id
         INNER JOIN users u ON u.id = m.user_id
         ORDER BY m.created_at DESC LIMIT 25"
    ) as $row) {
        $items[] = [
            'kind' => 'order',
            'id' => (int) $row['order_id'],
            'title' => 'سفارش ' . $row['client_name'],
            'body' => bizhub_clip((string) $row['author_name'] . ': ' . $row['body'], 180),
            'meta' => 'order',
            'at' => (string) $row['created_at'],
        ];
    }
    usort($items, static function ($a, $b) {
        return strcmp((string) $b['at'], (string) $a['at']);
    });
    Response::json(['ok' => true, 'items' => array_slice($items, 0, 40)]);
}

if ($method === 'GET' && $uri === '/documents') {
    Auth::requireRole(['admin', 'sales', 'partner']);
    $kind = (string) ($_GET['kind'] ?? '');
    $where = ' WHERE 1=1';
    $params = [];
    if ($kind === 'proforma' || $kind === 'invoice') {
        $where .= ' AND d.kind = ?';
        $params[] = $kind;
    }
    if ($isPartner) {
        $where .= ' AND d.partner_id = ?';
        $params[] = (int) $actor['id'];
    }
    $sql = "SELECT d.*, u.name AS partner_name,
            (SELECT COALESCE(SUM(l.qty * l.unit_price), 0) FROM document_lines l WHERE l.document_id = d.id) AS total
            FROM documents d
            LEFT JOIN users u ON u.id = d.partner_id" . $where . ' ORDER BY d.issued_at DESC LIMIT 200';
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    Response::json(['ok' => true, 'documents' => $stmt->fetchAll()]);
}

if ($method === 'POST' && $uri === '/documents') {
    Auth::requireRole(['admin', 'sales']);
    $body = bizhub_json_body();
    $kind = (string) ($body['kind'] ?? 'proforma');
    if (!in_array($kind, ['proforma', 'invoice'], true)) {
        Response::error('نوع سند نامعتبر است', 422);
    }
    $client = bizhub_clip(trim((string) ($body['client_name'] ?? '')), 160);
    $lines = is_array($body['lines'] ?? null) ? $body['lines'] : [];
    if ($client === '' || $lines === []) {
        Response::error('نام مشتری و حداقل یک ردیف لازم است', 422);
    }
    $clean = [];
    foreach ($lines as $line) {
        if (!is_array($line)) {
            continue;
        }
        $title = bizhub_clip(trim((string) ($line['title'] ?? '')), 180);
        $qty = round((float) ($line['qty'] ?? 0), 2);
        $price = round((float) ($line['unit_price'] ?? 0), 2);
        if ($title === '' || $qty <= 0 || $price < 0) {
            continue;
        }
        $clean[] = [$title, $qty, $price];
    }
    if ($clean === []) {
        Response::error('ردیف‌های سند معتبر نیستند', 422);
    }
    $orderId = (int) ($body['order_id'] ?? 0);
    $partnerId = (int) ($body['partner_id'] ?? 0);
    if ($orderId > 0) {
        $order = $pdo->prepare('SELECT partner_id FROM partner_orders WHERE id = ?');
        $order->execute([$orderId]);
        $found = $order->fetch();
        if (!$found) {
            Response::error('سفارش پیدا نشد', 404);
        }
        if ($partnerId < 1) {
            $partnerId = (int) $found['partner_id'];
        }
    }
    $status = $kind === 'invoice' ? 'issued' : 'draft';
    $valid = (string) ($body['valid_until'] ?? '');
    $valid = preg_match('/^\d{4}-\d{2}-\d{2}$/', $valid) ? $valid : null;
    $currency = strtoupper(substr(preg_replace('/[^A-Za-z]/', '', (string) ($body['currency'] ?? 'USD')) ?? 'USD', 0, 3));
    if (strlen($currency) !== 3) {
        $currency = 'USD';
    }
    $pdo->beginTransaction();
    try {
        $number = bizhub_next_doc_number($pdo, $kind);
        $pdo->prepare('INSERT INTO documents (kind, number, partner_id, order_id, client_name, client_phone, client_email, status, currency, notes, valid_until) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
            ->execute([
                $kind,
                $number,
                $partnerId > 0 ? $partnerId : null,
                $orderId > 0 ? $orderId : null,
                $client,
                bizhub_clip(trim((string) ($body['client_phone'] ?? '')), 40) ?: null,
                bizhub_clip(trim((string) ($body['client_email'] ?? '')), 190) ?: null,
                $status,
                $currency,
                bizhub_clip(trim((string) ($body['notes'] ?? '')), 4000) ?: null,
                $valid,
            ]);
        $id = (int) $pdo->lastInsertId();
        $lineStmt = $pdo->prepare('INSERT INTO document_lines (document_id, title, qty, unit_price) VALUES (?, ?, ?, ?)');
        foreach ($clean as $line) {
            $lineStmt->execute([$id, $line[0], $line[1], $line[2]]);
        }
        if ($orderId > 0 && $kind === 'proforma') {
            $pdo->prepare("UPDATE partner_orders SET status = 'quoted' WHERE id = ? AND status = 'new'")->execute([$orderId]);
        }
        $pdo->commit();
    } catch (Throwable $e) {
        if ($pdo->inTransaction()) {
            $pdo->rollBack();
        }
        throw $e;
    }
    bizhub_mail_document_notice($pdo, $cfg, $id);
    Response::json(['ok' => true, 'id' => $id, 'number' => $number], 201);
}

if ($method === 'GET' && ($p = route_match($uri, '/documents/{id}'))) {
    Auth::requireRole(['admin', 'sales', 'partner']);
    $stmt = $pdo->prepare('SELECT d.*, u.name AS partner_name FROM documents d LEFT JOIN users u ON u.id = d.partner_id WHERE d.id = ?');
    $stmt->execute([(int) $p['id']]);
    $doc = $stmt->fetch();
    if (!$doc) {
        Response::error('سند پیدا نشد', 404);
    }
    if ($isPartner && (int) ($doc['partner_id'] ?? 0) !== (int) $actor['id']) {
        Response::error('Forbidden', 403);
    }
    Response::json(['ok' => true, 'document' => bizhub_document_with_lines($pdo, $doc)]);
}

if ($method === 'PATCH' && ($p = route_match($uri, '/documents/{id}'))) {
    Auth::requireRole(['admin', 'sales']);
    $body = bizhub_json_body();
    $status = (string) ($body['status'] ?? '');
    $stmt = $pdo->prepare('SELECT kind FROM documents WHERE id = ?');
    $stmt->execute([(int) $p['id']]);
    $kind = (string) $stmt->fetchColumn();
    if ($kind === '') {
        Response::error('سند پیدا نشد', 404);
    }
    $allowed = $kind === 'invoice'
        ? ['issued', 'paid', 'void']
        : ['draft', 'sent', 'accepted', 'rejected'];
    if (!in_array($status, $allowed, true)) {
        Response::error('وضعیت این سند نامعتبر است', 422);
    }
    $pdo->prepare('UPDATE documents SET status = ? WHERE id = ?')->execute([$status, (int) $p['id']]);
    bizhub_mail_document_notice($pdo, $cfg, (int) $p['id']);
    Response::json(['ok' => true]);
}

if ($method === 'POST' && ($p = route_match($uri, '/documents/{id}/invoice'))) {
    Auth::requireRole(['admin', 'sales']);
    $stmt = $pdo->prepare('SELECT * FROM documents WHERE id = ?');
    $stmt->execute([(int) $p['id']]);
    $doc = $stmt->fetch();
    if (!$doc || (string) $doc['kind'] !== 'proforma') {
        Response::error('فقط پیش‌فاکتور به فاکتور تبدیل می‌شود', 422);
    }
    if ((string) $doc['status'] === 'rejected') {
        Response::error('پیش‌فاکتور رد شده را نمی‌شود فاکتور کرد', 422);
    }
    $existing = $pdo->prepare("SELECT id, number FROM documents WHERE source_id = ? AND kind = 'invoice' LIMIT 1");
    $existing->execute([(int) $doc['id']]);
    $already = $existing->fetch();
    if ($already) {
        Response::json(['ok' => true, 'id' => (int) $already['id'], 'number' => (string) $already['number']]);
    }
    $full = bizhub_document_with_lines($pdo, $doc);
    $pdo->beginTransaction();
    try {
        $number = bizhub_next_doc_number($pdo, 'invoice');
        $pdo->prepare('INSERT INTO documents (kind, number, partner_id, order_id, source_id, client_name, client_phone, client_email, status, currency, notes, valid_until) VALUES (\'invoice\', ?, ?, ?, ?, ?, ?, ?, \'issued\', ?, ?, NULL)')
            ->execute([
                $number,
                $doc['partner_id'],
                $doc['order_id'],
                (int) $doc['id'],
                $doc['client_name'],
                $doc['client_phone'],
                $doc['client_email'],
                $doc['currency'],
                $doc['notes'],
            ]);
        $id = (int) $pdo->lastInsertId();
        $lineStmt = $pdo->prepare('INSERT INTO document_lines (document_id, title, qty, unit_price) VALUES (?, ?, ?, ?)');
        foreach ($full['lines'] as $line) {
            $lineStmt->execute([$id, $line['title'], $line['qty'], $line['unit_price']]);
        }
        $pdo->prepare("UPDATE documents SET status = 'accepted' WHERE id = ?")->execute([(int) $doc['id']]);
        if (!empty($doc['order_id'])) {
            $pdo->prepare("UPDATE partner_orders SET status = 'accepted' WHERE id = ? AND status IN ('new','quoted')")->execute([(int) $doc['order_id']]);
        }
        $pdo->commit();
    } catch (Throwable $e) {
        if ($pdo->inTransaction()) {
            $pdo->rollBack();
        }
        throw $e;
    }
    bizhub_mail_document_notice($pdo, $cfg, $id);
    Response::json(['ok' => true, 'id' => $id, 'number' => $number], 201);
}

if ($method === 'GET' && ($p = route_match($uri, '/orders/{id}'))) {
    Auth::requireRole(['admin', 'sales', 'partner']);
    $id = (int) $p['id'];
    $stmt = $pdo->prepare('SELECT o.*, u.name AS partner_name, pr.code AS partner_code FROM partner_orders o INNER JOIN users u ON u.id = o.partner_id LEFT JOIN partners pr ON pr.user_id = o.partner_id WHERE o.id = ?');
    $stmt->execute([$id]);
    $order = $stmt->fetch();
    if (!$order) {
        Response::error('سفارش پیدا نشد', 404);
    }
    if ($isPartner && (int) $order['partner_id'] !== (int) $actor['id']) {
        Response::error('Forbidden', 403);
    }
    $msgs = $pdo->prepare('SELECT m.id, m.user_id, m.body, m.created_at, u.name AS author_name, u.role AS author_role FROM order_messages m INNER JOIN users u ON u.id = m.user_id WHERE m.order_id = ? ORDER BY m.created_at ASC');
    $msgs->execute([$id]);
    $docs = $pdo->prepare('SELECT id, kind, number, status, currency FROM documents WHERE order_id = ? ORDER BY id DESC');
    $docs->execute([$id]);
    Response::json([
        'ok' => true,
        'order' => $order,
        'messages' => $msgs->fetchAll(),
        'documents' => $docs->fetchAll(),
        'files' => bizhub_order_file_rows($pdo, $id),
    ]);
}

if ($method === 'POST' && ($p = route_match($uri, '/orders/{id}/messages'))) {
    Auth::requireRole(['admin', 'sales', 'partner']);
    $id = (int) $p['id'];
    $stmt = $pdo->prepare('SELECT id, partner_id, client_name FROM partner_orders WHERE id = ?');
    $stmt->execute([$id]);
    $order = $stmt->fetch();
    if (!$order) {
        Response::error('سفارش پیدا نشد', 404);
    }
    if ($isPartner && (int) $order['partner_id'] !== (int) $actor['id']) {
        Response::error('Forbidden', 403);
    }
    $text = bizhub_clip(trim((string) (bizhub_json_body()['body'] ?? '')), 4000);
    if ($text === '') {
        Response::error('متن پیام لازم است', 422);
    }
    $pdo->prepare('INSERT INTO order_messages (order_id, user_id, body) VALUES (?, ?, ?)')
        ->execute([$id, (int) $actor['id'], $text]);
    $preview = bizhub_clip($text, 800);
    $panel = bizhub_app_origin($cfg) . '/admin/';
    if ($isPartner) {
        bizhub_notify_staff($pdo, $cfg, 'پیام سفارش #' . $id, "بازاریاب روی سفارش " . $order['client_name'] . " نوشت:\n\n{$preview}\n\n{$panel}");
    } else {
        $email = bizhub_user_email($pdo, (int) $order['partner_id']);
        if ($email !== '') {
            bizhub_mail($cfg, $email, 'پاسخ سفارش #' . $id, "پاسخ جدید روی سفارش " . $order['client_name'] . ":\n\n{$preview}\n\n{$panel}");
        }
    }
    Response::json(['ok' => true]);
}

if ($method === 'GET' && $uri === '/purchases') {
    Auth::requireRole(['admin', 'sales']);
    $rows = $pdo->query('SELECT * FROM purchases ORDER BY created_at DESC LIMIT 200')->fetchAll();
    Response::json(['ok' => true, 'purchases' => $rows]);
}

if ($method === 'POST' && $uri === '/purchases') {
    Auth::requireRole(['admin', 'sales']);
    $body = bizhub_json_body();
    $supplier = bizhub_clip(trim((string) ($body['supplier'] ?? '')), 160);
    $title = bizhub_clip(trim((string) ($body['title'] ?? '')), 180);
    if ($supplier === '' || $title === '') {
        Response::error('تأمین‌کننده و عنوان لازم است', 422);
    }
    $status = (string) ($body['status'] ?? 'planned');
    if (!in_array($status, ['planned', 'ordered', 'received', 'cancelled'], true)) {
        $status = 'planned';
    }
    $orderId = (int) ($body['order_id'] ?? 0);
    $currency = strtoupper(substr(preg_replace('/[^A-Za-z]/', '', (string) ($body['currency'] ?? 'USD')) ?? 'USD', 0, 3));
    if (strlen($currency) !== 3) {
        $currency = 'USD';
    }
    $pdo->prepare('INSERT INTO purchases (order_id, supplier, title, amount, currency, status, notes) VALUES (?, ?, ?, ?, ?, ?, ?)')
        ->execute([
            $orderId > 0 ? $orderId : null,
            $supplier,
            $title,
            round((float) ($body['amount'] ?? 0), 2),
            $currency,
            $status,
            bizhub_clip(trim((string) ($body['notes'] ?? '')), 2000) ?: null,
        ]);
    Response::json(['ok' => true, 'id' => (int) $pdo->lastInsertId()], 201);
}

if ($method === 'PATCH' && ($p = route_match($uri, '/purchases/{id}'))) {
    Auth::requireRole(['admin', 'sales']);
    $status = (string) (bizhub_json_body()['status'] ?? '');
    if (!in_array($status, ['planned', 'ordered', 'received', 'cancelled'], true)) {
        Response::error('وضعیت نامعتبر است', 422);
    }
    $pdo->prepare('UPDATE purchases SET status = ? WHERE id = ?')->execute([$status, (int) $p['id']]);
    Response::json(['ok' => true]);
}
