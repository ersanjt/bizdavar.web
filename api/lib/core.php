<?php

declare(strict_types=1);

class Response
{
    public static function json(mixed $data, int $status = 200): void
    {
        http_response_code($status);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        exit;
    }

    public static function error(string $message, int $status = 400, array $extra = []): void
    {
        self::json(array_merge(['ok' => false, 'error' => $message], $extra), $status);
    }
}

class Database
{
    private static ?PDO $pdo = null;

    public static function connect(array $cfg): PDO
    {
        if (self::$pdo) {
            return self::$pdo;
        }

        $db = $cfg['db'];
        if (($db['driver'] ?? 'mysql') === 'sqlite') {
            $path = $db['sqlite_path'] ?? (__DIR__ . '/../storage/bizhub.sqlite');
            $dir = dirname($path);
            if (!is_dir($dir)) {
                mkdir($dir, 0750, true);
            }
            self::$pdo = new PDO('sqlite:' . $path, null, null, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            ]);
            self::$pdo->exec('PRAGMA foreign_keys = ON');
            return self::$pdo;
        }

        $dsn = sprintf(
            'mysql:host=%s;port=%d;dbname=%s;charset=%s',
            $db['host'],
            $db['port'] ?? 3306,
            $db['database'],
            $db['charset'] ?? 'utf8mb4'
        );
        self::$pdo = new PDO($dsn, $db['username'], $db['password'], [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]);
        return self::$pdo;
    }
}

class Auth
{
    public static function startSession(array $cfg): void
    {
        if (session_status() === PHP_SESSION_ACTIVE) {
            return;
        }
        $s = $cfg['session'] ?? [];
        session_name($s['name'] ?? 'bizhub_session');
        session_set_cookie_params([
            'lifetime' => $s['lifetime'] ?? 604800,
            'path' => '/',
            'secure' => (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off'),
            'httponly' => true,
            'samesite' => 'Lax',
        ]);
        session_start();
    }

    public static function user(): ?array
    {
        return $_SESSION['user'] ?? null;
    }

    public static function requireUser(): array
    {
        $user = self::user();
        if (!$user) {
            Response::error('Unauthorized', 401);
        }
        return $user;
    }

    public static function login(PDO $pdo, string $email, string $password): ?array
    {
        $stmt = $pdo->prepare('SELECT * FROM users WHERE email = ? AND is_active = 1 LIMIT 1');
        $stmt->execute([strtolower(trim($email))]);
        $row = $stmt->fetch();
        if (!$row || !password_verify($password, $row['password_hash'])) {
            return null;
        }
        unset($row['password_hash']);
        $_SESSION['user'] = $row;
        $pdo->prepare('UPDATE users SET last_login_at = NOW() WHERE id = ?')->execute([$row['id']]);
        return $row;
    }

    public static function logout(): void
    {
        $_SESSION = [];
        if (ini_get('session.use_cookies')) {
            $p = session_get_cookie_params();
            setcookie(session_name(), '', time() - 42000, $p['path'], $p['domain'] ?? '', $p['secure'], $p['httponly']);
        }
        session_destroy();
    }
}

class RateLimit
{
    public static function check(PDO $pdo, string $ip, string $action, int $max, int $windowSec): bool
    {
        $hash = hash('sha256', $ip . '|' . $action);
        $stmt = $pdo->prepare('SELECT * FROM rate_limits WHERE ip_hash = ? AND action = ? LIMIT 1');
        $stmt->execute([$hash, $action]);
        $row = $stmt->fetch();
        $now = time();

        if (!$row) {
            $pdo->prepare('INSERT INTO rate_limits (ip_hash, action, hits, window_start) VALUES (?, ?, 1, NOW())')
                ->execute([$hash, $action]);
            return true;
        }

        $start = strtotime($row['window_start']);
        if ($now - $start > $windowSec) {
            $pdo->prepare('UPDATE rate_limits SET hits = 1, window_start = NOW() WHERE id = ?')
                ->execute([$row['id']]);
            return true;
        }

        if ((int)$row['hits'] >= $max) {
            return false;
        }

        $pdo->prepare('UPDATE rate_limits SET hits = hits + 1 WHERE id = ?')->execute([$row['id']]);
        return true;
    }
}

function bizhub_json_body(): array
{
    $raw = file_get_contents('php://input') ?: '';
    if ($raw === '') {
        return [];
    }
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}

function bizhub_slugify(string $text): string
{
    $text = trim(mb_strtolower($text, 'UTF-8'));
    $text = preg_replace('/[^\p{L}\p{N}\s-]/u', '', $text) ?? '';
    $text = preg_replace('/[\s-]+/', '-', $text) ?? '';
    return trim($text, '-') ?: 'post-' . time();
}

function bizhub_cors(array $cfg): void
{
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    $allowed = $cfg['security']['allowed_origins'] ?? [];
    if ($origin && in_array($origin, $allowed, true)) {
        header('Access-Control-Allow-Origin: ' . $origin);
        header('Access-Control-Allow-Credentials: true');
        header('Vary: Origin');
    }
    header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
}
