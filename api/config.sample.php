<?php
/**
 * Copy to config.php and fill in credentials.
 * NEVER commit config.php
 */
return [
  'app_name' => 'BizHub',
  'app_url' => 'https://bizdavar.com',
  'timezone' => 'Europe/Istanbul',

  'db' => [
    'driver' => 'mysql',
    'host' => 'localhost',
    'port' => 3306,
    'database' => 'bizdavar_hub',
    'username' => 'CHANGE_ME',
    'password' => 'CHANGE_ME',
    'charset' => 'utf8mb4',
  ],

  'session' => [
    'name' => 'bizhub_session',
    'lifetime' => 86400 * 7,
  ],

  /**
   * Leave smtp.host empty to use the server's local mail().
   * Put the real SMTP password only in config.php on the server.
   */
  'mail' => [
    'from' => 'info@bizdavar.com',
    'from_name' => 'BizHub',
    'notify' => 'info@bizdavar.com',
    'smtp' => [
      'host' => '',
      'port' => 587,
      'encryption' => 'tls',
      'username' => '',
      'password' => '',
      'verify' => true,
    ],
  ],

  'security' => [
    'allowed_origins' => [
      'https://bizdavar.com',
    ],
    'lead_rate_limit' => 8,
    'lead_rate_window' => 3600,
    'login_rate_limit' => 5,
    'login_rate_window' => 900,
    /** Require TOTP after password. First login shows enroll. */
    'require_mfa' => true,
    /**
     * Extra IP allowlist for /admin API (empty = no IP lock).
     * Do not fill with placeholders — only real office/home IPs.
     */
    'admin_allow_ips' => [],
    'trust_cloudflare' => false,
  ],

  /** One-time install — remove after setup */
  'install_key' => 'CHANGE_ME_RANDOM_STRING',
  'admin_email' => 'admin@bizdavar.com',
  'admin_password' => 'CHANGE_ME_STRONG_PASSWORD',
];
