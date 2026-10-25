<?php

declare(strict_types=1);

function bizhub_ensure_partner_tables(PDO $pdo): void
{
    static $ready = false;
    if ($ready) {
        return;
    }
    $role = $pdo->query("SHOW COLUMNS FROM users LIKE 'role'")->fetch();
    $type = (string) ($role['Type'] ?? '');
    if ($type !== '' && !str_contains($type, 'partner')) {
        $pdo->exec("ALTER TABLE users MODIFY COLUMN role ENUM('admin','editor','sales','partner') NOT NULL DEFAULT 'admin'");
    }
    $leadCol = $pdo->query("SHOW COLUMNS FROM leads LIKE 'partner_code'")->fetch();
    if (!$leadCol) {
        $pdo->exec("ALTER TABLE leads ADD COLUMN partner_code VARCHAR(32) NULL AFTER source, ADD INDEX idx_leads_partner (partner_code)");
    }
    $pdo->exec(
        "CREATE TABLE IF NOT EXISTS partners (
          user_id INT UNSIGNED NOT NULL PRIMARY KEY,
          code VARCHAR(32) NOT NULL,
          phone VARCHAR(40) NULL,
          company VARCHAR(120) NULL,
          UNIQUE KEY uk_partner_code (code)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci"
    );
    $pdo->exec(
        "CREATE TABLE IF NOT EXISTS price_items (
          id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
          title VARCHAR(180) NOT NULL,
          category VARCHAR(80) NOT NULL DEFAULT 'services',
          summary VARCHAR(500) NOT NULL DEFAULT '',
          price_label VARCHAR(80) NOT NULL,
          amount DECIMAL(12,2) NULL,
          is_active TINYINT(1) NOT NULL DEFAULT 1,
          sort_order INT NOT NULL DEFAULT 0
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci"
    );
    $pdo->exec(
        "CREATE TABLE IF NOT EXISTS partner_orders (
          id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
          partner_id INT UNSIGNED NOT NULL,
          price_item_id INT UNSIGNED NULL,
          client_name VARCHAR(160) NOT NULL,
          client_phone VARCHAR(40) NULL,
          client_email VARCHAR(190) NULL,
          service_title VARCHAR(180) NOT NULL,
          details TEXT NOT NULL,
          status ENUM('new','quoted','accepted','rejected','done') NOT NULL DEFAULT 'new',
          quote_note TEXT NULL,
          created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
          INDEX idx_partner_orders_partner (partner_id),
          INDEX idx_partner_orders_status (status)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci"
    );
    $pdo->exec(
        "CREATE TABLE IF NOT EXISTS tickets (
          id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
          partner_id INT UNSIGNED NOT NULL,
          subject VARCHAR(180) NOT NULL,
          status ENUM('open','answered','closed') NOT NULL DEFAULT 'open',
          created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
          INDEX idx_tickets_partner (partner_id),
          INDEX idx_tickets_status (status)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci"
    );
    $pdo->exec(
        "CREATE TABLE IF NOT EXISTS ticket_messages (
          id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
          ticket_id INT UNSIGNED NOT NULL,
          user_id INT UNSIGNED NOT NULL,
          body TEXT NOT NULL,
          created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          INDEX idx_ticket_messages_ticket (ticket_id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci"
    );
    $count = (int) $pdo->query('SELECT COUNT(*) FROM price_items')->fetchColumn();
    if ($count === 0) {
        $seed = $pdo->prepare('INSERT INTO price_items (title, category, summary, price_label, amount, sort_order) VALUES (?, ?, ?, ?, ?, ?)');
        $rows = [
            ['Fast Studio — پلن پایه', 'طراحی سایت', 'سایت معرفی، نسخه موبایل، فرم تماس و واتساپ.', 'از ۹۹ دلار', 99, 1],
            ['Fast Studio — فروشگاهی', 'طراحی سایت', 'پلن پایه به‌علاوه فروشگاه و سبد خرید.', 'از ۱۹۹ دلار', 199, 2],
            ['Fast Studio — حرفه‌ای', 'طراحی سایت', 'طراحی اختصاصی‌تر، تا ۱۵ صفحه، درگاه و یک ماه پشتیبانی.', 'از ۲۹۹ دلار', 299, 3],
            ['وب‌اپ اختصاصی', 'نرم‌افزار', 'پنل و منطق اختصاصی. قیمت بعد از بررسی نیاز مشخص می‌شود.', 'استعلام', null, 4],
            ['بازاریابی دیجیتال', 'بازاریابی', 'سئو، محتوا و تبلیغات. قیمت بعد از بررسی بازار.', 'استعلام', null, 5],
            ['تأمین صنعتی', 'تأمین', 'درخواست قیمت کالا. عدد نهایی بعد از استعلام تأمین‌کننده.', 'استعلام', null, 6],
        ];
        foreach ($rows as $row) {
            $seed->execute($row);
        }
    }
    $ready = true;
}

function bizhub_partner_code(PDO $pdo): string
{
    for ($i = 0; $i < 6; $i++) {
        $code = 'b' . substr(bin2hex(random_bytes(4)), 0, 7);
        $stmt = $pdo->prepare('SELECT user_id FROM partners WHERE code = ?');
        $stmt->execute([$code]);
        if (!$stmt->fetch()) {
            return $code;
        }
    }
    return 'b' . bin2hex(random_bytes(5));
}

function bizhub_app_origin(array $cfg): string
{
    $url = rtrim((string) ($cfg['app_url'] ?? 'https://bizdavar.com'), '/');
    return $url !== '' ? $url : 'https://bizdavar.com';
}

function bizhub_active_partner_id(PDO $pdo, string $code): ?int
{
    $code = strtolower(preg_replace('/[^a-z0-9]/', '', $code) ?? '');
    if ($code === '' || strlen($code) > 32) {
        return null;
    }
    $stmt = $pdo->prepare(
        "SELECT p.user_id FROM partners p
         INNER JOIN users u ON u.id = p.user_id
         WHERE p.code = ? AND u.is_active = 1 AND u.role = 'partner'
         LIMIT 1"
    );
    $stmt->execute([$code]);
    $id = $stmt->fetchColumn();
    return $id ? (int) $id : null;
}
