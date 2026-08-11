#!/usr/bin/env python3
"""Scrape Liqui Moly Turkey product cards (.product-card) + category pages."""
from __future__ import annotations

import json
import re
import time
import urllib.parse
import urllib.request
from collections import Counter
from html import unescape
from pathlib import Path

BASE = "https://www.liquimolyturkey.com"
SHOP = "https://shop.egemot.com.tr"
UA = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Accept-Language": "tr-TR,tr;q=0.9",
}
TRY_PER_USD = 47.0
ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "scripts" / "config" / "liqui-moly-products-data.json"


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=45) as r:
        return r.read().decode("utf-8", "replace")


def abs_url(href: str, base: str = BASE) -> str:
    if not href:
        return ""
    if href.startswith("//"):
        return "https:" + href
    return urllib.parse.urljoin(base.rstrip("/") + "/", href.lstrip("/"))


def parse_try(s: str) -> float | None:
    s = s.strip().replace("\xa0", "")
    m = re.search(r"([\d.]+,\d{2})", s)
    if not m:
        return None
    raw = m.group(1).replace(".", "").replace(",", ".")
    try:
        return float(raw)
    except ValueError:
        return None


def parse_product_cards(html: str, page_url: str = BASE) -> list[dict]:
    products = []
    # Each product-card block
    for block in re.findall(
        r'<div class="product-card">([\s\S]*?)</div>\s*</div>\s*(?:</div>\s*)?(?=<div class="product-slider-item"|<div class="col|</div>\s*<button|$)',
        html,
        re.I,
    ):
        products.extend(_parse_one_card(block, page_url))

    # Fallback: split by product-card openings
    if len(products) < 3:
        parts = re.split(r'<div class="product-card">', html, flags=re.I)[1:]
        for part in parts:
            chunk = part[:3500]
            products.extend(_parse_one_card(chunk, page_url))
    return dedupe(products)


def _parse_one_card(block: str, page_url: str) -> list[dict]:
    name_m = re.search(
        r'class="product-name[^"]*"[^>]*>\s*([\s\S]*?)\s*</div>',
        block,
        re.I,
    )
    if not name_m:
        name_m = re.search(r'alt="([^"]{8,200})"', block)
    if not name_m:
        return []
    name = unescape(re.sub(r"\s+", " ", name_m.group(1))).strip()
    price_m = re.search(r'class="price-new"[^>]*>\s*([\d.]+,\d{2})\s*TL', block, re.I)
    if not price_m:
        price_m = re.search(r"([\d.]+,\d{2})\s*TL", block)
    if not price_m:
        return []
    price = parse_try(price_m.group(1))
    if price is None:
        return []
    cat_m = re.search(r'class="product-category"[^>]*>\s*([^<]+)', block, re.I)
    cat_tr = unescape(cat_m.group(1).strip()) if cat_m else ""
    img_m = re.search(r'<img[^>]+src="([^"]+)"', block, re.I)
    img = abs_url(img_m.group(1), BASE) if img_m else None
    href_m = re.search(r'href="([^"]+)"', block)
    href = abs_url(href_m.group(1), SHOP if href_m and href_m.group(1).startswith("/") else BASE) if href_m else ""
    sku_m = re.search(r"(\d{3,5})\s*$", name) or re.search(r"-(\d{3,5})(?:-|\.|$)", href or name)
    sku = sku_m.group(1) if sku_m else None
    return [
        {
            "name": name,
            "nameTr": name,
            "nameFa": name,  # filled later
            "url": href or page_url,
            "priceTry": round(price, 2),
            "priceUsd": round(price / TRY_PER_USD, 2),
            "image": img,
            "sku": sku,
            "categoryTr": cat_tr,
            "category": map_category(cat_tr, name),
        }
    ]


def map_category(cat_tr: str, name: str) -> str:
    c = (cat_tr or "").lower()
    n = (name or "").lower()
    table = [
        ("روغن موتور", ["motor yağ", "0w", "5w", "10w", "15w", "20w", "top tec", "leichtlauf", "special tec", "molygen", "synthoil"]),
        ("موتور سیکلت", ["motosiklet", "motorbike", "4t", "scooter"]),
        ("افزودنی سوخت بنزین", ["benzin", "octane", "speed tec", "enjektör", "valve", "lspi", "injector"]),
        ("افزودنی سوخت دیزل", ["dizel", "diesel", "dpf", "adblue"]),
        ("افزودنی روغن / موتور", ["katkı", "engine flush", "motor clean", "motor protect", "ceratec", "mos2", "yağ katkı"]),
        ("گیربکس و هیدرولیک", ["şanzıman", "atf", "fren", "direksiyon", "hidrolik", "dot"]),
        ("ضدیخ و رادیاتور", ["antifriz", "radyatör", "kfs", "cam suyu"]),
        ("مراقبت و نظافت خودرو", ["kokpit", "lastik", "jant", "temiz", "parlat", "care", "döşeme"]),
        ("مارین", ["marine", "marin"]),
        ("چسب و مواد مصرفی سرویس", ["yapıştır", "macun", "gres", "servis"]),
    ]
    blob = c + " " + n
    for fa, keys in table:
        if any(k in blob for k in keys):
            return fa
    if "yakit" in c or "yakıt" in c:
        return "افزودنی سوخت"
    if "yağ" in c or "yag" in c:
        return "روغن موتور"
    return cat_tr.strip() or "سایر محصولات"


def translate_name_fa(name: str) -> str:
    """Light Turkish→Persian product title cleanup (keep SKU/specs)."""
    reps = [
        ("Motor Yağı", "روغن موتور"),
        ("Motor Yagi", "روغن موتور"),
        ("Motosiklet", "موتورسیکلت"),
        ("Tam Sentetik", "تمام‌سنتتیک"),
        ("Sentetik", "سنتتیک"),
        ("Mineral", "مینرال"),
        ("Litre", "لیتر"),
        ("Litara", "لیتر"),
        ("Yakit Katkisi", "افزودنی سوخت"),
        ("Yakıt Katkısı", "افزودنی سوخت"),
        ("Dizel", "دیزل"),
        ("Benzin", "بنزین"),
        ("Temizleyici", "پاک‌کننده"),
        ("Sistem", "سیستم"),
        ("Fren Hidroliği", "هیدرولیک ترمز"),
        ("Radyatör Antifrizi", "ضدیخ رادیاتور"),
        ("Antifriz", "ضدیخ"),
        ("Parlatıcı", "براق‌کننده"),
        ("Temizleme", "تمیزکننده"),
        ("Spreyi", "اسپری"),
        ("Sprey", "اسپری"),
        ("Katki", "افزودنی"),
        ("Katkısı", "افزودنی"),
        ("Katkı", "افزودنی"),
        ("Gresi", "گریس"),
        ("Yağlayıcı", "روان‌کننده"),
        ("Kaydirici", "روان‌کننده"),
        ("Pas Sokucu", "ضدزنگ"),
        ("Enjektör", "انژکتور"),
        ("Emisyon", "آلایندگی"),
        ("İyileştirici", "بهبوددهنده"),
        ("Önleyici", "پیشگیرانه"),
        ("Kristalleşme", "بلورشدگی"),
        ("Konsantre", "کنسانتره"),
        ("Genel", ""),
    ]
    out = name
    for a, b in reps:
        out = re.sub(re.escape(a), b, out, flags=re.I)
    return re.sub(r"\s{2,}", " ", out).strip()


def dedupe(products: list[dict]) -> list[dict]:
    seen = set()
    out = []
    for p in products:
        key = (p.get("sku") or "") + "|" + re.sub(r"\W+", "", (p.get("name") or "").lower())
        if key in seen:
            continue
        seen.add(key)
        out.append(p)
    return out


def discover_category_links(home_html: str) -> list[str]:
    urls = set()
    # premium-cat-card links: urunler.php?kategori[]=...
    for m in re.finditer(r'href="([^"]*urunler\.php\?[^"]+)"', home_html, re.I):
        urls.add(abs_url(unescape(m.group(1)), BASE))
    for m in re.finditer(r'href="([^"]*kategori[^"]*)"', home_html, re.I):
        urls.add(abs_url(unescape(m.group(1)), BASE))
    # Also try common category query values from homepage text
    for label in re.findall(r'kategori\[\]=([^"&]+)', home_html):
        urls.add(f"{BASE}/urunler.php?kategori[]={urllib.parse.unquote(label)}")
    urls.add(f"{BASE}/urunler.php")
    urls.add(f"{BASE}/")
    return sorted(urls)


def crawl() -> list[dict]:
    print("Fetch home…")
    home = fetch(BASE + "/")
    Path("scripts/_lm_home.html").write_text(home, encoding="utf-8")
    products = parse_product_cards(home)
    print("home products", len(products))

    cat_urls = discover_category_links(home)
    print("category urls", len(cat_urls))
    for u in cat_urls[:40]:
        print(" ", u.encode("ascii", "backslashreplace").decode("ascii"))

    for url in cat_urls:
        try:
            html = fetch(url)
        except Exception as e:
            print("fail", url, e)
            continue
        batch = parse_product_cards(html, url)
        print(f"{url} -> {len(batch)}")
        products.extend(batch)
        # pagination
        for page in range(2, 40):
            sep = "&" if "?" in url else "?"
            page_url = f"{url}{sep}sayfa={page}"
            try:
                html2 = fetch(page_url)
            except Exception:
                break
            batch2 = parse_product_cards(html2, page_url)
            print(f"  page {page} -> {len(batch2)}")
            if not batch2:
                # try page=
                page_url2 = f"{url}{sep}page={page}"
                try:
                    html3 = fetch(page_url2)
                except Exception:
                    break
                batch2 = parse_product_cards(html3, page_url2)
                print(f"  pagealt {page} -> {len(batch2)}")
                if not batch2:
                    break
            products.extend(batch2)
            time.sleep(0.2)
        time.sleep(0.25)

    products = dedupe(products)
    for p in products:
        p["nameFa"] = translate_name_fa(p["name"])
    return products


def main():
    products = crawl()
    products.sort(key=lambda p: (p.get("category") or "", p.get("priceUsd") or 0, p.get("name") or ""))
    payload = {
        "source": BASE,
        "shop": SHOP,
        "rate": {"tryPerUsd": TRY_PER_USD, "note": "1 USD = 47 TRY (کاربر)"},
        "fetchedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "count": len(products),
        "products": products,
    }
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print("Wrote", OUT, "count", len(products))
    print(Counter(p["category"] for p in products))
    print(json.dumps(products[:5], ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
