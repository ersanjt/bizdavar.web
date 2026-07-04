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

  'security' => [
    'allowed_origins' => [
      'https://bizdavar.com',
      'http://localhost:3456',
      'http://127.0.0.1:3456',
    ],
    'lead_rate_limit' => 8,
    'lead_rate_window' => 3600,
  ],

  /** One-time install — remove after setup */
  'install_key' => 'CHANGE_ME_RANDOM_STRING',
  'admin_email' => 'admin@bizdavar.com',
  'admin_password' => 'CHANGE_ME_STRONG_PASSWORD',
];
