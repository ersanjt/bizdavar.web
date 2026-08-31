<?php

declare(strict_types=1);

/**
 * One-time installer — CLI only. HTTP access is denied.
 *
 *   php api/install.php
 *   php api/install.php --key=YOUR_INSTALL_KEY
 *
 * Then remove install_key and admin_password from config.php.
 */

if (PHP_SAPI !== 'cli') {
    http_response_code(403);
    header('Content-Type: text/plain; charset=utf-8');
    echo "Installer is CLI-only.\nRun: php api/install.php\n";
    exit;
}

require __DIR__ . '/lib/core.php';

$configPath = __DIR__ . '/config.php';
if (!is_file($configPath)) {
    fwrite(STDERR, "Copy config.sample.php to config.php first.\n");
    exit(1);
}

$cfg = require $configPath;
$installKey = (string) ($cfg['install_key'] ?? '');
$provided = '';
foreach (array_slice($argv, 1) as $arg) {
    if (str_starts_with($arg, '--key=')) {
        $provided = substr($arg, 6);
    }
}

if ($installKey === '' || $installKey === 'CHANGE_ME_RANDOM_STRING') {
    fwrite(STDERR, "Set a real install_key in config.php first.\n");
    exit(1);
}
if ($provided !== '' && !hash_equals($installKey, $provided)) {
    fwrite(STDERR, "Forbidden: invalid install key.\n");
    exit(1);
}

try {
    $pdo = Database::connect($cfg);
} catch (Throwable $e) {
    fwrite(STDERR, 'DB error: ' . $e->getMessage() . "\n");
    exit(1);
}

$schemaFile = dirname(__DIR__) . '/database/schema.sql';
if (!is_file($schemaFile)) {
    fwrite(STDERR, "schema.sql not found\n");
    exit(1);
}

$sql = file_get_contents($schemaFile);
$statements = array_filter(array_map('trim', preg_split('/;\s*\n/', $sql)));
foreach ($statements as $stmt) {
    if ($stmt !== '') {
        $pdo->exec($stmt);
    }
}
echo "Schema OK\n";

$email = $cfg['admin_email'] ?? 'admin@bizdavar.com';
$pass = $cfg['admin_password'] ?? '';
if ($pass === '' || $pass === 'CHANGE_ME_STRONG_PASSWORD') {
    fwrite(STDERR, "Set a real admin_password in config.php and re-run install.\n");
    exit(1);
}

$hash = password_hash($pass, PASSWORD_DEFAULT);
$check = $pdo->prepare('SELECT id FROM users WHERE email = ?');
$check->execute([strtolower($email)]);
if ($check->fetch()) {
    echo "Admin user already exists: $email\n";
} else {
    $pdo->prepare('INSERT INTO users (email, password_hash, name, role) VALUES (?, ?, ?, ?)')
        ->execute([strtolower($email), $hash, 'Admin', 'admin']);
    echo "Admin created: $email\n";
}

echo "\nDone. Remove install_key and admin_password from config.php.\n";
echo "HTTP access to this file is blocked; keep it off the public tree if you can.\n";
