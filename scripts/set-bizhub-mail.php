<?php

declare(strict_types=1);

/**
 * One-time, on the server only. Writes SMTP into api/config.php and sends a test.
 * Password comes from BIZHUB_MAIL_PASS. Never commit config.php.
 *
 *   BIZHUB_MAIL_PASS='mailbox-password' php scripts/set-bizhub-mail.php
 */
if (PHP_SAPI !== 'cli') {
    http_response_code(404);
    exit;
}

$pass = (string) getenv('BIZHUB_MAIL_PASS');
if ($pass === '' || strpbrk($pass, "\r\n") !== false) {
    fwrite(STDERR, "Set BIZHUB_MAIL_PASS to the info@bizdavar.com mailbox password.\n");
    exit(1);
}

$configPath = getenv('BIZHUB_CONFIG') ?: '/home/bizdavar/public_html/api/config.php';
if (!is_file($configPath)) {
    fwrite(STDERR, "config.php was not found at {$configPath}\n");
    exit(1);
}

$cfg = require $configPath;
if (!is_array($cfg)) {
    fwrite(STDERR, "config.php did not return an array.\n");
    exit(1);
}

require dirname(__DIR__) . '/api/lib/mail.php';

$attempts = [
    ['host' => 'mail.bizdavar.com', 'port' => 587, 'encryption' => 'tls', 'verify' => true],
    ['host' => 'mail.bizdavar.com', 'port' => 465, 'encryption' => 'ssl', 'verify' => true],
    ['host' => 'mail.bizdavar.com', 'port' => 587, 'encryption' => 'tls', 'verify' => false],
    ['host' => 'localhost', 'port' => 587, 'encryption' => 'tls', 'verify' => false],
    ['host' => 'localhost', 'port' => 465, 'encryption' => 'ssl', 'verify' => false],
];

$chosen = null;
$last = 'no attempt';
foreach ($attempts as $smtp) {
    $smtp['username'] = 'info@bizdavar.com';
    $smtp['password'] = $pass;
    $try = $cfg;
    $try['mail'] = [
        'from' => 'info@bizdavar.com',
        'from_name' => 'BizHub',
        'notify' => 'info@bizdavar.com',
        'smtp' => $smtp,
    ];
    try {
        bizhub_mail_send(
            $try,
            'info@bizdavar.com',
            'آزمایش ایمیل BizHub',
            "ارسال BizHub با SMTP وصل شد.\nفرستنده: info@bizdavar.com\n" . $smtp['host'] . ':' . $smtp['port']
        );
        $cfg = $try;
        $chosen = $smtp;
        break;
    } catch (Throwable $e) {
        $last = str_replace($pass, '***', $e->getMessage());
        fwrite(STDERR, $smtp['host'] . ':' . $smtp['port'] . ' failed: ' . $last . "\n");
    }
}

if ($chosen === null) {
    fwrite(STDERR, "SMTP could not send. Last error: {$last}\n");
    exit(1);
}

$php = "<?php\n\nreturn " . var_export($cfg, true) . ";\n";
$tmp = $configPath . '.tmp';
if (file_put_contents($tmp, $php) === false) {
    fwrite(STDERR, "Could not write {$tmp}\n");
    exit(1);
}
if (!rename($tmp, $configPath)) {
    @unlink($tmp);
    fwrite(STDERR, "Could not replace config.php\n");
    exit(1);
}
@chmod($configPath, 0640);
if (function_exists('posix_geteuid') && posix_geteuid() === 0) {
    @chown($configPath, 'bizdavar');
    @chgrp($configPath, 'bizdavar');
}

echo "Mail saved. Test sent to info@bizdavar.com via {$chosen['host']}:{$chosen['port']}\n";
