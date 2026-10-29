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
      code_hash CHAR(64) NULL,
      expires_at DATETIME NOT NULL,
      used_at DATETIME NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      UNIQUE KEY uk_reset_token (token_hash),
      INDEX idx_reset_user (user_id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");
    $col = $pdo->query("SHOW COLUMNS FROM password_resets LIKE 'code_hash'")->fetch();
    if (!$col) {
        try {
            $pdo->exec('ALTER TABLE password_resets ADD COLUMN code_hash CHAR(64) NULL AFTER token_hash');
        } catch (Throwable $e) {
            $again = $pdo->query("SHOW COLUMNS FROM password_resets LIKE 'code_hash'")->fetch();
            if (!$again) {
                throw $e;
            }
        }
    }
    $ready = true;
}

function bizhub_send_password_reset(PDO $pdo, array $cfg, int $userId): bool
{
    bizhub_ensure_mail_tables($pdo);
    $stmt = $pdo->prepare('SELECT id, email FROM users WHERE id = ? AND is_active = 1 LIMIT 1');
    $stmt->execute([$userId]);
    $user = $stmt->fetch();
    if (!$user || !filter_var((string) $user['email'], FILTER_VALIDATE_EMAIL)) {
        return false;
    }
    $pdo->prepare('DELETE FROM password_resets WHERE user_id = ? OR expires_at < NOW()')->execute([(int) $user['id']]);
    $token = bin2hex(random_bytes(32));
    $code = str_pad((string) random_int(0, 999999), 6, '0', STR_PAD_LEFT);
    $pdo->prepare('INSERT INTO password_resets (user_id, token_hash, code_hash, expires_at) VALUES (?, ?, ?, DATE_ADD(NOW(), INTERVAL 1 HOUR))')
        ->execute([(int) $user['id'], hash('sha256', $token), hash('sha256', $code)]);
    $link = bizhub_app_origin($cfg) . '/admin/?reset=' . $token;
    bizhub_mail(
        $cfg,
        (string) $user['email'],
        'بازیابی رمز بیزدوار',
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
    return true;
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

function bizhub_mail(array $cfg, string $to, string $subject, string $text, array $view = []): void
{
    try {
        bizhub_mail_send($cfg, $to, $subject, $text, $view);
    } catch (Throwable $e) {
    }
}

function bizhub_notify_staff(PDO $pdo, array $cfg, string $subject, string $text): void
{
    foreach (bizhub_staff_emails($pdo, $cfg) as $email) {
        bizhub_mail($cfg, $email, $subject, $text);
    }
}

function bizhub_mail_send(array $cfg, string $to, string $subject, string $text, array $view = []): void
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
    $fromName = str_replace(["\r", "\n"], '', trim((string) ($mail['from_name'] ?? '')));
    if ($fromName === '' || strcasecmp($fromName, 'BizHub') === 0) {
        $fromName = 'بیزدوار';
    }
    $subject = str_replace(["\r", "\n"], ' ', $subject);
    [$plain, $html] = bizhub_mail_render($cfg, $subject, $text, $view);
    $smtp = is_array($mail['smtp'] ?? null) ? $mail['smtp'] : [];
    if (trim((string) ($smtp['host'] ?? '')) !== '') {
        bizhub_smtp_send($smtp, $from, $fromName, $to, $subject, $plain, $html);
        return;
    }
    $encodedName = '=?UTF-8?B?' . base64_encode($fromName) . '?=';
    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    [$contentType, $body] = bizhub_mail_bundle($plain, $html);
    $headers = "MIME-Version: 1.0\r\nContent-Type: {$contentType}\r\nFrom: {$encodedName} <{$from}>\r\nReply-To: {$from}\r\n";
    $ok = @mail($to, $encodedSubject, $body, $headers, '-f' . $from);
    if (!$ok) {
        throw new RuntimeException('mail() ارسال نکرد. SMTP را در api/config.php تنظیم کنید.');
    }
}

function bizhub_smtp_send(array $smtp, string $from, string $fromName, string $to, string $subject, string $text, string $html): void
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
        [$contentType, $body] = bizhub_mail_bundle($text, $html);
        $payload = implode("\r\n", [
            'Date: ' . date('r'),
            'From: ' . $encodedName . ' <' . $from . '>',
            'To: <' . $to . '>',
            'Reply-To: <' . $from . '>',
            'Message-ID: <' . bin2hex(random_bytes(16)) . '@bizdavar.com>',
            'Subject: ' . $encodedSubject,
            'MIME-Version: 1.0',
            'Content-Type: ' . $contentType,
            '',
            $body,
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

function bizhub_mail_bundle(string $plain, string $html): array
{
    $boundary = 'bizhub_' . bin2hex(random_bytes(12));
    $plain = str_replace("\n", "\r\n", str_replace(["\r\n", "\r"], "\n", $plain));
    $html = str_replace("\n", "\r\n", str_replace(["\r\n", "\r"], "\n", $html));
    $body = '--' . $boundary . "\r\n"
        . "Content-Type: text/plain; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($plain), 76, "\r\n")
        . '--' . $boundary . "\r\n"
        . "Content-Type: text/html; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($html), 76, "\r\n")
        . '--' . $boundary . "--\r\n";
    return ['multipart/alternative; boundary="' . $boundary . '"', $body];
}

function bizhub_mail_h(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function bizhub_mail_safe_url(string $url): string
{
    $url = str_replace(["\r", "\n", "\0", ' '], '', trim($url));
    if (!preg_match('#^https://bizdavar\.com(?:/[^\s<>"]*)?$#', $url)) {
        return '';
    }
    return $url;
}

function bizhub_mail_render(array $cfg, string $subject, string $text, array $view): array
{
    $origin = rtrim((string) ($cfg['app_url'] ?? ''), '/');
    $origin = bizhub_mail_safe_url($origin !== '' ? $origin : 'https://bizdavar.com') ?: 'https://bizdavar.com';
    $heading = trim((string) ($view['heading'] ?? ''));
    if ($heading === '') {
        $heading = $subject;
    }
    $intro = trim((string) ($view['intro'] ?? ''));
    $code = trim((string) ($view['code'] ?? ''));
    if (!preg_match('/^\d{6}$/', $code)) {
        $code = '';
    }
    $note = trim((string) ($view['note'] ?? ''));
    $buttonUrl = bizhub_mail_safe_url((string) ($view['button_url'] ?? ''));
    $buttonLabel = trim((string) ($view['button_label'] ?? ''));

    $lines = preg_split("/\r\n|\n|\r/", str_replace("\r\n", "\n", $text)) ?: [];
    $bodyLines = [];
    foreach ($lines as $line) {
        $trim = trim($line);
        $asUrl = bizhub_mail_safe_url($trim);
        if ($buttonUrl === '' && $asUrl !== '') {
            $buttonUrl = $asUrl;
            if ($buttonLabel === '') {
                $buttonLabel = str_contains($asUrl, '/admin/') ? 'باز کردن BizHub' : 'مشاهده در سایت';
            }
            continue;
        }
        if ($buttonUrl !== '' && $trim === $buttonUrl) {
            continue;
        }
        $bodyLines[] = rtrim($line);
    }
    if ($buttonLabel === '' && $buttonUrl !== '') {
        $buttonLabel = 'باز کردن';
    }

    $plain = [$heading, ''];
    if ($intro !== '') {
        $plain[] = $intro;
        $plain[] = '';
    }
    if ($code !== '') {
        $plain[] = 'گام ۱: صفحه را باز کنید.';
        $plain[] = 'گام ۲: این کد تأیید را وارد کنید و بعد رمز جدید را ذخیره کنید.';
        $plain[] = 'کد تأیید: ' . $code;
        $plain[] = '';
    }
    $rest = trim(implode("\n", $bodyLines));
    if ($rest !== '') {
        $plain[] = $rest;
        $plain[] = '';
    }
    if ($buttonUrl !== '') {
        $plain[] = $buttonLabel . ': ' . $buttonUrl;
        $plain[] = '';
    }
    if ($note !== '') {
        $plain[] = $note;
        $plain[] = '';
    }
    $plain[] = 'بیزدوار — تکنولوژی پردازان توسعه خاورمیانه';
    $plain[] = 'info@bizdavar.com · +98 930 588 0135 · +90 501 067 6486 · +98 936 411 5151';
    $plain[] = 'ایران · ترکیه · ارمنستان · دبی';
    $plain[] = $origin;

    $htmlLines = '';
    foreach ($bodyLines as $line) {
        if (trim($line) === '') {
            $htmlLines .= '<div style="height:12px;line-height:12px;">&nbsp;</div>';
            continue;
        }
        $htmlLines .= '<p style="margin:0 0 10px;font-size:15px;line-height:1.8;color:#1d1d1b;">' . bizhub_mail_h($line) . '</p>';
    }
    $steps = '';
    $codeBox = '';
    if ($code !== '') {
        $steps = '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 18px;">'
            . '<tr><td style="width:28px;vertical-align:top;font-size:14px;font-weight:700;color:#e3191f;">۱</td>'
            . '<td style="font-size:14px;line-height:1.7;color:#1d1d1b;padding-bottom:6px;">صفحه را با دکمه زیر باز کنید.</td></tr>'
            . '<tr><td style="width:28px;vertical-align:top;font-size:14px;font-weight:700;color:#e3191f;">۲</td>'
            . '<td style="font-size:14px;line-height:1.7;color:#1d1d1b;">کد تأیید را در همان صفحه وارد کنید، بعد رمز جدید را ذخیره کنید.</td></tr>'
            . '</table>';
        $codeBox = '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 18px;">'
            . '<tr><td align="center" style="background:#f6f6f6;border:1px solid #ececec;border-radius:12px;padding:16px 12px;">'
            . '<div style="font-size:12px;letter-spacing:0.08em;color:#6b7280;margin-bottom:6px;">کد تأیید</div>'
            . '<div dir="ltr" style="font-family:Consolas,Courier New,monospace;font-size:32px;font-weight:700;letter-spacing:8px;color:#1d1d1b;">' . bizhub_mail_h($code) . '</div>'
            . '<div style="font-size:12px;color:#6b7280;margin-top:6px;">یک ساعت معتبر است</div>'
            . '</td></tr></table>';
    }
    $introHtml = $intro !== ''
        ? '<p style="margin:0 0 16px;font-size:15px;line-height:1.8;color:#1d1d1b;">' . bizhub_mail_h($intro) . '</p>'
        : '';
    $button = '';
    if ($buttonUrl !== '') {
        $button = '<table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px 0 14px;"><tr><td bgcolor="#e3191f" style="border-radius:8px;">'
            . '<a href="' . bizhub_mail_h($buttonUrl) . '" style="display:inline-block;padding:12px 22px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;">' . bizhub_mail_h($buttonLabel) . '</a>'
            . '</td></tr></table>'
            . '<p dir="ltr" style="margin:0 0 12px;font-size:12px;line-height:1.6;color:#6b7280;word-break:break-all;">' . bizhub_mail_h($buttonUrl) . '</p>';
    }
    $noteHtml = $note !== ''
        ? '<p style="margin:8px 0 0;font-size:13px;line-height:1.7;color:#6b7280;">' . bizhub_mail_h($note) . '</p>'
        : '';
    $year = date('Y');
    $html = '<!DOCTYPE html><html lang="fa" dir="rtl"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
        . '<title>' . bizhub_mail_h($heading) . '</title></head>'
        . '<body style="margin:0;padding:0;background:#f3f3f3;">'
        . '<div style="display:none;max-height:0;overflow:hidden;opacity:0;">' . bizhub_mail_h($heading) . ' — بیزدوار</div>'
        . '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f3f3;padding:24px 12px;"><tr><td align="center">'
        . '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e8e8e8;">'
        . '<tr><td style="background:#1d1d1b;padding:22px 28px 18px;">'
        . '<table role="presentation" cellpadding="0" cellspacing="0"><tr>'
        . '<td style="padding-left:12px;"><img src="https://bizdavar.com/assets/images/brand/favicon-48.png" width="36" height="36" alt="" style="display:block;border:0;"></td>'
        . '<td><div style="font-size:20px;font-weight:700;color:#ffffff;line-height:1.2;">بیزدوار</div>'
        . '<div style="font-size:12px;color:#d0d0d0;margin-top:3px;">BizHub · bizdavar.com</div></td>'
        . '</tr></table></td></tr>'
        . '<tr><td style="height:3px;background:#e3191f;font-size:0;line-height:0;">&nbsp;</td></tr>'
        . '<tr><td style="padding:28px 28px 8px;font-family:Tahoma,Arial,sans-serif;">'
        . '<h1 style="margin:0 0 14px;font-size:20px;line-height:1.5;color:#1d1d1b;font-weight:700;">' . bizhub_mail_h($heading) . '</h1>'
        . $introHtml . $steps . $codeBox . $htmlLines . $button . $noteHtml
        . '</td></tr>'
        . '<tr><td style="padding:18px 28px 22px;background:#fafafa;border-top:1px solid #eeeeee;font-family:Tahoma,Arial,sans-serif;">'
        . '<p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#1d1d1b;">تکنولوژی پردازان توسعه خاورمیانه</p>'
        . '<p style="margin:0 0 8px;font-size:12px;line-height:1.7;color:#4b4b4b;">آژانس دیجیتال مارکتینگ بیزدوار</p>'
        . '<p style="margin:0 0 4px;font-size:12px;line-height:1.8;color:#4b4b4b;">'
        . '<a href="mailto:info@bizdavar.com" style="color:#1d1d1b;text-decoration:none;">info@bizdavar.com</a></p>'
        . '<p dir="ltr" style="margin:0 0 4px;font-size:12px;line-height:1.8;color:#4b4b4b;text-align:right;">'
        . '<a href="tel:+989305880135" style="color:#1d1d1b;text-decoration:none;">+98 930 588 0135</a>'
        . ' · <a href="tel:+905010676486" style="color:#1d1d1b;text-decoration:none;">+90 501 067 6486</a>'
        . ' · <a href="tel:+989364115151" style="color:#1d1d1b;text-decoration:none;">+98 936 411 5151</a></p>'
        . '<p style="margin:0 0 8px;font-size:12px;line-height:1.7;color:#4b4b4b;">ایران · ترکیه · ارمنستان · دبی</p>'
        . '<p style="margin:0;font-size:12px;line-height:1.7;color:#6b7280;">این نامه خودکار است. برای پاسخ به info@bizdavar.com بنویسید.'
        . ' · <a href="' . bizhub_mail_h($origin) . '" style="color:#1d1d1b;text-decoration:none;">bizdavar.com</a>'
        . ' · ' . bizhub_mail_h($year) . '</p>'
        . '</td></tr></table></td></tr></table></body></html>';

    return [implode("\n", $plain), $html];
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
        bizhub_mail($cfg, $client, $subject . ' — Bizdavar', $summary . "\n\nاین سند از طرف بیزدوار صادر شده است.\n" . bizhub_app_origin($cfg));
    }
}
