<?php

declare(strict_types=1);

/** RFC 6238 TOTP (SHA-1, 30s, 6 digits) — no Composer dependency. */
class Totp
{
    public static function secret(): string
    {
        return self::base32Encode(random_bytes(20));
    }

    public static function verify(string $secret, string $code, int $window = 1): bool
    {
        $code = preg_replace('/\s+/', '', $code) ?? '';
        if (!preg_match('/^\d{6}$/', $code)) {
            return false;
        }
        $t = intdiv(time(), 30);
        for ($i = -$window; $i <= $window; $i++) {
            if (hash_equals(self::at($secret, $t + $i), $code)) {
                return true;
            }
        }
        return false;
    }

    public static function otpauthUri(string $secret, string $account, string $issuer = 'BizHub'): string
    {
        $label = rawurlencode($issuer . ':' . $account);
        $q = http_build_query([
            'secret' => $secret,
            'issuer' => $issuer,
            'algorithm' => 'SHA1',
            'digits' => 6,
            'period' => 30,
        ], '', '&', PHP_QUERY_RFC3986);
        return 'otpauth://totp/' . $label . '?' . $q;
    }

    private static function at(string $secret, int $counter): string
    {
        $bin = self::base32Decode($secret);
        $msg = pack('N*', 0, $counter);
        $hash = hash_hmac('sha1', $msg, $bin, true);
        $offset = ord($hash[19]) & 0x0f;
        $truncated = unpack('N', substr($hash, $offset, 4))[1] & 0x7fffffff;
        return str_pad((string) ($truncated % 1000000), 6, '0', STR_PAD_LEFT);
    }

    private static function base32Encode(string $data): string
    {
        $alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
        $bits = '';
        foreach (str_split($data) as $c) {
            $bits .= str_pad(decbin(ord($c)), 8, '0', STR_PAD_LEFT);
        }
        $out = '';
        foreach (str_split($bits, 5) as $chunk) {
            if (strlen($chunk) < 5) {
                $chunk = str_pad($chunk, 5, '0');
            }
            $out .= $alphabet[bindec($chunk)];
        }
        return $out;
    }

    private static function base32Decode(string $secret): string
    {
        $alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
        $secret = strtoupper(preg_replace('/[^A-Z2-7]/', '', $secret) ?? '');
        $bits = '';
        for ($i = 0, $n = strlen($secret); $i < $n; $i++) {
            $pos = strpos($alphabet, $secret[$i]);
            if ($pos === false) {
                continue;
            }
            $bits .= str_pad(decbin($pos), 5, '0', STR_PAD_LEFT);
        }
        $out = '';
        foreach (str_split($bits, 8) as $chunk) {
            if (strlen($chunk) === 8) {
                $out .= chr(bindec($chunk));
            }
        }
        return $out;
    }
}
