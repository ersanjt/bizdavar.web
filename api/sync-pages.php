<?php

declare(strict_types=1);

/**
 * Load the site catalog into BizHub. CLI only.
 *
 *   php api/sync-pages.php
 */

if (PHP_SAPI !== 'cli') {
    http_response_code(403);
    header('Content-Type: text/plain; charset=utf-8');
    echo "Catalog sync is CLI-only.\n";
    exit;
}

require __DIR__ . '/lib/core.php';
require __DIR__ . '/lib/site-index.php';

$configPath = __DIR__ . '/config.php';
if (!is_file($configPath)) {
    fwrite(STDERR, "api/config.php is missing.\n");
    exit(1);
}

$cfg = require $configPath;
date_default_timezone_set($cfg['timezone'] ?? 'UTC');

try {
    $pdo = Database::connect($cfg);
    try {
        $offset = (new DateTimeImmutable('now'))->format('P');
        if (preg_match('/^[+-]\d{2}:\d{2}$/', $offset)) {
            $pdo->exec("SET time_zone = '" . $offset . "'");
        }
    } catch (Throwable $e) {
        // Catalog import does not depend on the session time zone.
    }
    $count = bizhub_import_site_index($pdo, true);
    $editorial = bizhub_import_editorial($pdo);
} catch (Throwable $e) {
    fwrite(STDERR, "Catalog sync failed: " . $e->getMessage() . "\n");
    exit(1);
}

$postCount = (int) $pdo->query('SELECT COUNT(*) FROM posts')->fetchColumn();
$faqCount = (int) $pdo->query('SELECT COUNT(*) FROM faqs')->fetchColumn();
echo "Site pages in CRM: {$count}\n";
echo "Articles in CRM: {$postCount} (added {$editorial['posts']})\n";
echo "FAQs in CRM: {$faqCount} (added {$editorial['faqs']})\n";
