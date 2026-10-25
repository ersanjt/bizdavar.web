<?php

declare(strict_types=1);

function bizhub_ensure_mail_tables(PDO $pdo): void
{
    static $ready = false;
    if ($ready) {
        return;
    }
    $pdo->exec("CREATE TABLE IF NOT EXISTS password_resets (
      id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      user_id INT UNSIGNED NOT NULL,
      token_hash CHAR(64) NOT NULL,
      expires_at DATETIME NOT NULL,
      used_at DATETIME NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      UNIQUE KEY uk_reset_token (token_hash),
      INDEX idx_reset_user (user_id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");
    $ready = true;
}

function bizhub_user_email(PDO $pdo, int $userId): string
{
    $stmt = $pdo->prepare('SELECT email FROM users WHERE id = ? AND is_active = 1');
    $stmt->execute([$userId]);
    $email = strtolower(trim((string) $stmt->fetchColumn()));
    return filter_var($email, FILTER_VALIDATE_EMAIL) ? $email : '';
}

function bizhub_staff_emails(PDO $pdo, array $cfg): array
{
    $list = [];
    $extra = strtolower(trim((string) ($cfg['mail']['notify'] ?? '')));
    if (filter_var($extra, FILTER_VALIDATE_EMAIL)) {
        $list[] = $extra;
    }
    $rows = $pdo->query("SELECT email FROM users WHERE role = 'admin' AND is_active = 1")->fetchAll();
    foreach ($rows as $row) {
        $email = strtolower(trim((string) ($row['email'] ?? '')));
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $list[] = $email;
        }
    }
    return array_values(array_unique($list));
}

function bizhub_mail(array $cfg, string $to, string $subject, string $text): void
{
    try {
        bizhub_mail_send($cfg, $to, $subject, $text);
    } catch (Throwable $e) {
    }
}

function bizhub_notify_staff(PDO $pdo, array $cfg, string $subject, string $text): void
{
    foreach (bizhub_staff_emails($pdo, $cfg) as $email) {
        bizhub_mail($cfg, $email, $subject, $text);
    }
}

function bizhub_mail_send(array $cfg, string $to, string $subject, string $text): void
{
    $to = strtolower(trim($to));
    if (!filter_var($to, FILTER_VALIDATE_EMAIL)) {
        throw new RuntimeException('آدرس گیرنده معتبر نیست');
    }
    $mail = is_array($cfg['mail'] ?? null) ? $cfg['mail'] : [];
    $from = strtolower(trim((string) ($mail['from'] ?? 'info@bizdavar.com')));
    if (!filter_var($from, FILTER_VALIDATE_EMAIL)) {
        throw new RuntimeException('آدرس فرستنده در config معتبر نیست');
    }
    $fromName = str_replace(["\r", "\n"], '', trim((string) ($mail['from_name'] ?? 'BizHub')));
    $subject = str_replace(["\r", "\n"], ' ', $subject);
    $smtp = is_array($mail['smtp'] ?? null) ? $mail['smtp'] : [];
    if (trim((string) ($smtp['host'] ?? '')) !== '') {
        bizhub_smtp_send($smtp, $from, $fromName, $to, $subject, $text);
        return;
    }
    $encodedName = '=?UTF-8?B?' . base64_encode($fromName) . '?=';
    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    $headers = "MIME-Version: 1.0\r\nContent-Type: text/plain; charset=UTF-8\r\nFrom: {$encodedName} <{$from}>\r\n";
    $body = str_replace("\n", "\r\n", str_replace("\r\n", "\n", $text));
    $ok = @mail($to, $encodedSubject, $body, $headers, '-f' . $from);
    if (!$ok) {
        throw new RuntimeException('mail() ارسال نکرد. SMTP را در api/config.php تنظیم کنید.');
    }
}

function bizhub_smtp_send(array $smtp, string $from, string $fromName, string $to, string $subject, string $text): void
{
    $host = trim((string) ($smtp['host'] ?? ''));
    $port = (int) ($smtp['port'] ?? 587);
    $enc = strtolower(trim((string) ($smtp['encryption'] ?? 'tls')));
    $user = str_replace(["\r", "\n", "\0"], '', (string) ($smtp['username'] ?? ''));
    $pass = str_replace(["\r", "\n", "\0"], '', (string) ($smtp['password'] ?? ''));
    $verify = !array_key_exists('verify', $smtp) || !empty($smtp['verify']);
    if (!preg_match('/^[A-Za-z0-9.-]+$/', $host) || $port < 1 || $port > 65535) {
        throw new RuntimeException('SMTP host نامعتبر است');
    }
    $remote = ($enc === 'ssl' ? 'ssl://' : 'tcp://') . $host . ':' . $port;
    $ctx = stream_context_create([
        'ssl' => [
            'verify_peer' => $verify,
            'verify_peer_name' => $verify,
            'peer_name' => $host,
        ],
    ]);
    $errno = 0;
    $errstr = '';
    $fp = @stream_socket_client($remote, $errno, $errstr, 12, STREAM_CLIENT_CONNECT, $ctx);
    if (!$fp) {
        throw new RuntimeException('اتصال SMTP برقرار نشد');
    }
    stream_set_timeout($fp, 12);
    try {
        bizhub_smtp_expect($fp, [220]);
        bizhub_smtp_cmd($fp, 'EHLO bizdavar.com', [250]);
        if ($enc === 'tls') {
            bizhub_smtp_cmd($fp, 'STARTTLS', [220]);
            $crypto = STREAM_CRYPTO_METHOD_TLS_CLIENT;
            if (defined('STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT')) {
                $crypto |= STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT;
            }
            if (!stream_socket_enable_crypto($fp, true, $crypto)) {
                throw new RuntimeException('STARTTLS ناموفق بود');
            }
            bizhub_smtp_cmd($fp, 'EHLO bizdavar.com', [250]);
        }
        if ($user !== '') {
            bizhub_smtp_cmd($fp, 'AUTH LOGIN', [334]);
            bizhub_smtp_cmd($fp, base64_encode($user), [334]);
            bizhub_smtp_cmd($fp, base64_encode($pass), [235]);
        }
        bizhub_smtp_cmd($fp, 'MAIL FROM:<' . $from . '>', [250]);
        bizhub_smtp_cmd($fp, 'RCPT TO:<' . $to . '>', [250, 251]);
        bizhub_smtp_cmd($fp, 'DATA', [354]);
        $encodedName = '=?UTF-8?B?' . base64_encode($fromName) . '?=';
        $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
        $payload = implode("\r\n", [
            'Date: ' . date('r'),
            'From: ' . $encodedName . ' <' . $from . '>',
            'To: <' . $to . '>',
            'Subject: ' . $encodedSubject,
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8',
            'Content-Transfer-Encoding: base64',
            '',
            chunk_split(base64_encode(str_replace("\n", "\r\n", str_replace("\r\n", "\n", $text))), 76, "\r\n"),
        ]);
        fwrite($fp, bizhub_smtp_dot($payload) . "\r\n.\r\n");
        bizhub_smtp_expect($fp, [250]);
        bizhub_smtp_cmd($fp, 'QUIT', [221]);
    } finally {
        fclose($fp);
    }
}

function bizhub_smtp_cmd($fp, string $cmd, array $ok): void
{
    fwrite($fp, $cmd . "\r\n");
    bizhub_smtp_expect($fp, $ok);
}

function bizhub_smtp_expect($fp, array $ok): void
{
    $data = '';
    while (($line = fgets($fp, 515)) !== false) {
        $data .= $line;
        if (isset($line[3]) && $line[3] === ' ') {
            break;
        }
    }
    $code = (int) substr($data, 0, 3);
    if (!in_array($code, $ok, true)) {
        $safe = trim(preg_replace('/\s+/', ' ', $data) ?? '');
        throw new RuntimeException('SMTP ' . substr($safe, 0, 180));
    }
}

function bizhub_smtp_dot(string $message): string
{
    $message = str_replace(["\r\n", "\r"], "\n", $message);
    $lines = explode("\n", $message);
    foreach ($lines as $i => $line) {
        if ($line !== '' && $line[0] === '.') {
            $lines[$i] = '.' . $line;
        }
    }
    return implode("\r\n", $lines);
}

function bizhub_mail_document_notice(PDO $pdo, array $cfg, int $documentId): void
{
    $stmt = $pdo->prepare('SELECT * FROM documents WHERE id = ?');
    $stmt->execute([$documentId]);
    $doc = $stmt->fetch();
    if (!$doc) {
        return;
    }
    $full = bizhub_document_with_lines($pdo, $doc);
    $kind = (string) $full['kind'] === 'invoice' ? 'فاکتور' : 'پیش‌فاکتور';
    $labels = [
        'draft' => 'پیش‌نویس',
        'sent' => 'ارسال شده',
        'accepted' => 'پذیرفته',
        'rejected' => 'رد شده',
        'issued' => 'صادر شده',
        'paid' => 'پرداخت شده',
        'void' => 'باطل',
    ];
    $status = $labels[(string) $full['status']] ?? (string) $full['status'];
    $lines = '';
    foreach ($full['lines'] as $line) {
        $lines .= '- ' . $line['title'] . ' × ' . $line['qty'] . ' = ' . $line['amount'] . ' ' . $full['currency'] . "\n";
    }
    $summary = $kind . ' ' . $full['number'] . "\nمشتری: " . $full['client_name'] . "\nوضعیت: " . $status . "\n" . $lines . 'جمع: ' . $full['total'] . ' ' . $full['currency'];
    $subject = $kind . ' ' . $full['number'];
    $sent = [];
    if (!empty($full['partner_id'])) {
        $email = bizhub_user_email($pdo, (int) $full['partner_id']);
        if ($email !== '') {
            $sent[$email] = true;
            bizhub_mail($cfg, $email, $subject, $summary . "\n\n" . bizhub_app_origin($cfg) . "/admin/");
        }
    }
    $client = strtolower(trim((string) ($full['client_email'] ?? '')));
    $tellClient = ((string) $full['kind'] === 'proforma' && (string) $full['status'] === 'sent')
        || ((string) $full['kind'] === 'invoice' && in_array((string) $full['status'], ['issued', 'paid'], true));
    if ($tellClient && filter_var($client, FILTER_VALIDATE_EMAIL) && empty($sent[$client])) {
        bizhub_mail($cfg, $client, $subject . ' — Bizdavar', $summary . "\n\nاین سند از طرف بیزداور صادر شده است.\n" . bizhub_app_origin($cfg));
    }
}
