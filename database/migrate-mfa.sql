-- Existing BizHub DBs: add TOTP columns (run once via mysql client).
ALTER TABLE users
  ADD COLUMN totp_secret VARCHAR(64) NULL AFTER is_active,
  ADD COLUMN totp_enabled TINYINT(1) NOT NULL DEFAULT 0 AFTER totp_secret;
