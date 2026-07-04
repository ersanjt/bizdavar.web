<?php

declare(strict_types=1);

/**
 * One-time installer — DELETE after successful setup!
 * Visit: https://bizdavar.com/api/install.php?key=YOUR_INSTALL_KEY
 */

require __DIR__ . '/lib/core.php';

$configPath = __DIR__ . '/config.php';
if (!is_file($configPath)) {
    http_response_code(503);
    echo 'Copy config.sample.php to config.php first.';
    exit;
}

$cfg = require $configPath;
$installKey = $cfg['install_key'] ?? '';
$provided = $_GET['key'] ?? '';

if ($installKey === '' || !hash_equals($installKey, $provided)) {
    http_response_code(403);
    echo 'Forbidden';
    exit;
}

header('Content-Type: text/plain; charset=utf-8');

try {
    $pdo = Database::connect($cfg);
} catch (Throwable $e) {
    echo 'DB error: ' . $e->getMessage();
    exit;
}

$schemaFile = dirname(__DIR__) . '/database/schema.sql';
if (!is_file($schemaFile)) {
    echo 'schema.sql not found';
    exit;
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
if ($pass === '') {
    echo "Set admin_password in config.php and re-run install.\n";
    exit;
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

echo "\nDone. DELETE api/install.php and remove install_key from config.\n";
