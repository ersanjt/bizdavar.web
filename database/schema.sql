-- BizHub — Bizdavar CMS + CRM schema (MySQL 5.7+ / MariaDB)

CREATE TABLE IF NOT EXISTS users (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(190) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(120) NOT NULL,
  role ENUM('admin','editor','sales','partner') NOT NULL DEFAULT 'admin',
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  totp_secret VARCHAR(64) NULL,
  totp_enabled TINYINT(1) NOT NULL DEFAULT 0,
  last_login_at DATETIME NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS leads (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(80) NOT NULL,
  last_name VARCHAR(80) NOT NULL,
  email VARCHAR(190) NOT NULL,
  phone VARCHAR(40) NULL,
  service VARCHAR(80) NOT NULL,
  message TEXT NOT NULL,
  status ENUM('new','contacted','qualified','proposal','won','lost') NOT NULL DEFAULT 'new',
  priority ENUM('low','normal','high') NOT NULL DEFAULT 'normal',
  source VARCHAR(60) NOT NULL DEFAULT 'website',
  partner_code VARCHAR(32) NULL,
  locale VARCHAR(5) NULL,
  page_url VARCHAR(500) NULL,
  ip_address VARCHAR(45) NULL,
  assigned_to INT UNSIGNED NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_leads_status (status),
  INDEX idx_leads_email (email),
  INDEX idx_leads_created (created_at),
  INDEX idx_leads_partner (partner_code),
  CONSTRAINT fk_leads_assigned FOREIGN KEY (assigned_to) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS lead_notes (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  lead_id INT UNSIGNED NOT NULL,
  user_id INT UNSIGNED NULL,
  body TEXT NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_notes_lead (lead_id),
  CONSTRAINT fk_notes_lead FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE,
  CONSTRAINT fk_notes_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS posts (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(160) NOT NULL UNIQUE,
  category VARCHAR(80) NOT NULL DEFAULT 'general',
  title_fa VARCHAR(255) NOT NULL,
  title_tr VARCHAR(255) NULL,
  title_en VARCHAR(255) NULL,
  excerpt_fa TEXT NULL,
  excerpt_tr TEXT NULL,
  excerpt_en TEXT NULL,
  content_fa MEDIUMTEXT NULL,
  content_tr MEDIUMTEXT NULL,
  content_en MEDIUMTEXT NULL,
  thumb VARCHAR(500) NULL,
  status ENUM('draft','published') NOT NULL DEFAULT 'draft',
  published_at DATETIME NULL,
  author_id INT UNSIGNED NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_posts_status (status),
  CONSTRAINT fk_posts_author FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS faqs (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  question_fa VARCHAR(500) NOT NULL,
  question_tr VARCHAR(500) NULL,
  question_en VARCHAR(500) NULL,
  answer_fa TEXT NOT NULL,
  answer_tr TEXT NULL,
  answer_en TEXT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  is_published TINYINT(1) NOT NULL DEFAULT 1,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_faqs_sort (sort_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS site_pages (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  path VARCHAR(120) NOT NULL,
  locale CHAR(5) NOT NULL,
  section VARCHAR(40) NOT NULL,
  title VARCHAR(255) NOT NULL,
  summary VARCHAR(255) NOT NULL DEFAULT '',
  UNIQUE KEY uk_site_page_path (path),
  INDEX idx_site_page_section (section),
  INDEX idx_site_page_locale (locale)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS page_hits (
  path_hash CHAR(40) NOT NULL,
  path VARCHAR(120) NOT NULL,
  day DATE NOT NULL,
  views INT UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (path_hash, day),
  INDEX idx_page_hits_day (day),
  INDEX idx_page_hits_path (path)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS site_meta (
  name VARCHAR(40) NOT NULL PRIMARY KEY,
  meta_value VARCHAR(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS partners (
  user_id INT UNSIGNED NOT NULL PRIMARY KEY,
  code VARCHAR(32) NOT NULL,
  phone VARCHAR(40) NULL,
  company VARCHAR(120) NULL,
  UNIQUE KEY uk_partner_code (code),
  CONSTRAINT fk_partners_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS price_items (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(180) NOT NULL,
  category VARCHAR(80) NOT NULL DEFAULT 'services',
  summary VARCHAR(500) NOT NULL DEFAULT '',
  price_label VARCHAR(80) NOT NULL,
  amount DECIMAL(12,2) NULL,
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  sort_order INT NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS partner_orders (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS tickets (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  partner_id INT UNSIGNED NOT NULL,
  subject VARCHAR(180) NOT NULL,
  status ENUM('open','answered','closed') NOT NULL DEFAULT 'open',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_tickets_partner (partner_id),
  INDEX idx_tickets_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS ticket_messages (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  ticket_id INT UNSIGNED NOT NULL,
  user_id INT UNSIGNED NOT NULL,
  body TEXT NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_ticket_messages_ticket (ticket_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS rate_limits (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  ip_hash CHAR(64) NOT NULL,
  action VARCHAR(40) NOT NULL,
  hits INT NOT NULL DEFAULT 1,
  window_start DATETIME NOT NULL,
  UNIQUE KEY uk_rate (ip_hash, action)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
