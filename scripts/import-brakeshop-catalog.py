# -*- coding: utf-8 -*-
"""Build assets/data/brakes/catalog.json from the Brakeshop public archive.

Images are not inside this JSON. Extract brakeshop_public_images_2026-09-19.zip
to media/catalog/brakeshop/ so local_path assets/aa/<hash>.png is served at
/media/catalog/brakeshop/assets/aa/<hash>.png.

Source prices stay TRY. priceUsd is only the site's published Iran-delivery
display amount: (TRY / 48) * 1.20. Missing prices are left empty.
"""
import csv
import io
import json
import re
import sys
import zipfile
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA_ZIP = Path(
    r"C:\Users\ersan\Documents\Codex\2026-09-18\referenced-chatgpt-conversation-this-is-an-2\outputs\brakeshop_data_2026-09-19.zip"
)
OUT = ROOT / "assets" / "data" / "brakes" / "catalog.json"
BACKUP = ROOT / "work" / "brakeshop-import" / "catalog.prev.json"
REPORT = ROOT / "work" / "brakeshop-import" / "import-report.json"

TRY_PER_USD = 48
MARKUP = 1.2
GALLERY_CAP = 12

# id, display name, handle keys (longest match wins)
BRANDS = [
    ("bmw", "BMW", ["bmw"]),
    ("mercedes", "Mercedes-Benz", ["mercedes-benz", "mercedes"]),
    ("opel", "Opel", ["opel"]),
    ("volkswagen", "Volkswagen", ["volkswagen", "vw-ticari", "vw"]),
    ("audi", "Audi", ["audi"]),
    ("peugeot", "Peugeot", ["peugeot"]),
    ("renault", "Renault", ["renault-ticari", "renault"]),
    ("ford", "Ford", ["ford-ticari", "ford"]),
    ("citroen", "Citroën", ["citroen"]),
    ("toyota", "Toyota", ["toyota"]),
    ("land-rover", "Land Rover", ["land-rover", "range-rover"]),
    ("hyundai", "Hyundai", ["hyundai"]),
    ("kia", "Kia", ["kia"]),
    ("honda", "Honda", ["honda"]),
    ("chevrolet", "Chevrolet", ["chevrolet"]),
    ("fiat", "Fiat", ["fiat"]),
    ("skoda", "Škoda", ["skoda"]),
    ("seat", "Seat", ["seat"]),
    ("nissan", "Nissan", ["nissan"]),
    ("porsche", "Porsche", ["porsche"]),
    ("mazda", "Mazda", ["mazda"]),
    ("mini", "Mini", ["mini-cooper", "mini"]),
    ("dacia", "Dacia", ["dacia"]),
    ("jeep", "Jeep", ["jeep"]),
    ("mitsubishi", "Mitsubishi", ["mitsubishi"]),
    ("subaru", "Subaru", ["subaru"]),
    ("suzuki", "Suzuki", ["suzuki"]),
    ("alfa-romeo", "Alfa Romeo", ["alfa-romeo"]),
    ("jaguar", "Jaguar", ["jaguar"]),
    ("lexus", "Lexus", ["lexus"]),
    ("infiniti", "Infiniti", ["infiniti"]),
    ("cupra", "Cupra", ["cupra"]),
    ("ds", "DS", ["ds-automobiles", "ds"]),
    ("smart", "Smart", ["smart"]),
    ("tesla", "Tesla", ["tesla"]),
    ("volvo", "Volvo", ["volvo"]),
    ("byd", "BYD", ["byd"]),
    ("aston-martin", "Aston Martin", ["aston-martin"]),
    ("maserati", "Maserati", ["maserati"]),
    ("ssangyong", "SsangYong", ["ssangyong"]),
    ("isuzu", "Isuzu", ["isuzu"]),
    ("ferrari", "Ferrari", ["ferrari"]),
    ("chrysler", "Chrysler", ["chrysler"]),
    ("lincoln", "Lincoln", ["lincoln"]),
    ("chery", "Chery", ["chery"]),
    ("lancia", "Lancia", ["lancia"]),
    ("rolls-royce", "Rolls-Royce", ["rolls-royce"]),
    ("lotus", "Lotus", ["lotus"]),
    ("bentley", "Bentley", ["bentley"]),
    ("dodge", "Dodge", ["dodge"]),
    ("daihatsu", "Daihatsu", ["daihatsu"]),
    ("cadillac", "Cadillac", ["cadillac"]),
    ("hummer", "Hummer", ["hummer"]),
    ("maybach", "Maybach", ["maybach"]),
    ("saab", "Saab", ["saab"]),
    ("lamborghini", "Lamborghini", ["lamborghini"]),
    ("vauxhall", "Vauxhall", ["vauxhall"]),
]

SKIP_ROOT = {
    "fren-sistemleri",
    "motor-yagi",
    "outlet-indirimli-uygun-fiyatli-oto-yedek-parca-urunleri",
    "excel-varsayilan-kategori",
    "oto-aksesuar-urunleri",
}

PARENT_ALIAS = {
    "vw-ticari-yedek-parca": "volkswagen",
    "ford-ticari-yedek-parca": "ford",
    "renault-ticari-oto-yedek-parca": "renault",
    "mini-cooper-yedek-parca": "mini",
    "mini-yedek-parca": "mini",
    "ds-automobiles": "ds",
    "fiat-marka-oto-yedek-parca": "fiat",
    "fiat-yedek-parca": "fiat",
}

FIT = {
    "bmw": {
        "1 serisi": ["e81", "e82", "e87", "e88", "f20", "f21", "f40", "f52"],
        "2 serisi": ["f22", "f23", "f44", "f45", "f46", "g42", "f87", "g87", "m2"],
        "3 serisi": ["e30", "e36", "e46", "e90", "e91", "e92", "e93", "f30", "f31", "f34", "f35", "g20", "g21", "f80", "g80", "g81", "m3"],
        "4 serisi": ["f32", "f33", "f36", "g22", "g23", "g26", "f82", "f83", "g82", "g83", "m4"],
        "5 serisi": ["e34", "e39", "e60", "e61", "f07", "f10", "f11", "g30", "g31", "g60", "m5"],
        "6 serisi": ["e63", "e64", "f06", "f12", "f13", "g32", "m6"],
        "7 serisi": ["e38", "e65", "e66", "f01", "f02", "g11", "g12"],
        "8 serisi": ["e31", "g14", "g15", "g16"],
        "x1": ["e84", "f48", "u11"],
        "x2": ["f39", "u10"],
        "x3": ["e83", "f25", "g01"],
        "x4": ["f26", "g02"],
        "x5": ["e53", "e70", "f15", "g05"],
        "x6": ["e71", "e72", "f16", "g06"],
        "x7": ["g07"],
        "xm": ["g09"],
        "z4": ["e85", "e86", "e89", "g29"],
        "i3": ["i01"],
        "i8": ["i12", "i15"],
        "ix": ["i20"],
    },
    "mercedes": {
        "a serisi": ["w176", "w177", "v177"],
        "b serisi": ["w246", "w247"],
        "c serisi": ["w202", "w203", "w204", "w205", "w206", "s203", "s204", "s205"],
        "e serisi": ["w210", "w211", "w212", "w213", "s211", "s212", "s213"],
        "s serisi": ["w220", "w221", "w222", "w223"],
        "cla": ["c117", "c118"],
        "cls": ["c218", "c219", "c257"],
        "gla": ["x156", "h247"],
        "glc": ["x253", "c253"],
        "gle": ["w166", "c292", "v167"],
        "glk": ["x204"],
        "ml": ["w163", "w164"],
    },
}

JUNK = {
    "yedek", "parca", "parcalari", "urunleri", "oto", "fren", "balata", "balatasi",
    "balatalari", "disk", "diski", "diskleri", "ve", "marka", "otomobil", "icin",
}

KEYS = []
for bid, _name, keys in BRANDS:
    for key in keys:
        KEYS.append((key, bid))
KEYS.sort(key=lambda row: len(row[0]), reverse=True)
BRAND_NAME = {bid: name for bid, name, _keys in BRANDS}
BRAND_KEYS = {bid: keys for bid, _name, keys in BRANDS}


def member(zip_file, suffix):
    for name in zip_file.namelist():
        if name.endswith(suffix):
            return name
    raise KeyError(suffix)


def read_csv(zip_file, suffix):
    csv.field_size_limit(min(sys.maxsize, 20_000_000))
    raw = zip_file.read(member(zip_file, suffix)).decode("utf-8-sig")
    return csv.DictReader(io.StringIO(raw))


def detect(slug):
    text = str(slug or "").lower()
    for key, bid in KEYS:
        if text == key or text.startswith(key + "-"):
            return bid
    return ""


def brand_from_parent(slug):
    slug = str(slug or "").strip().lower()
    if not slug or slug in SKIP_ROOT:
        return ""
    if slug in PARENT_ALIAS:
        return PARENT_ALIAS[slug]
    found = detect(slug)
    if found:
        return found
    trimmed = re.sub(r"-(yedek-parca.*|oto-yedek-parca.*|marka-oto-yedek.*|marka-otomobil.*)$", "", slug)
    return detect(trimmed) or ""


def part_of(slug, title):
    text = (str(slug or "") + " " + str(title or "")).lower()
    if re.search(r"fren-siv|fren siv|brake-fluid|dot-?4|fren hidroli", text):
        return "fluids"
    if re.search(r"balata|brake-pad|(^|[^a-z])pad([^a-z]|$)", text):
        return "pads"
    if re.search(r"disk|rotor", text):
        return "discs"
    if re.search(r"performans|stoptech|slotted|big-brake|fren-kiti|brake-kit", text):
        return "performance"
    return "other"


def to_usd(try_price):
    return int((try_price / TRY_PER_USD) * MARKUP * 100 + 0.5) / 100


def finite_price(value):
    text = str(value or "").strip().replace(",", "")
    if not text:
        return None
    try:
        number = float(text)
    except ValueError:
        return None
    if number <= 0:
        return None
    return number


def has_arabic(text):
    return any("\u0600" <= ch <= "\u06FF" for ch in str(text or ""))


def pretty_token(token):
    if re.fullmatch(r"i\d+", token):
        return "i" + token[1:]
    if re.fullmatch(r"[a-z]\d+", token):
        return token.upper()
    if token.isdigit():
        return token
    if len(token) <= 2:
        return token.upper()
    return token[:1].upper() + token[1:]


def pretty_name(name):
    return " ".join(pretty_token(part) for part in str(name).split() if part)


def family_from_slug(slug, brand_id):
    text = str(slug or "").lower()
    for key in sorted(BRAND_KEYS.get(brand_id, []), key=len, reverse=True):
        if text.startswith(key + "-"):
            text = text[len(key) + 1:]
            break
    text = re.split(r"-(yedek-parca|oto-yedek|fren-balata|fren-disk)", text)[0]
    tokens = [token for token in text.split("-") if token and token not in JUNK]
    if not tokens:
        return ""
    if len(tokens) >= 2 and tokens[1] in ("serisi", "seri", "class"):
        return tokens[0] + " " + tokens[1]
    if tokens[0] in JUNK or len(tokens[0]) < 2 and not tokens[0].isdigit():
        return ""
    return tokens[0]


def has_token(hay, token):
    if not token:
        return False
    if " " in token:
        return (" " + token + " ") in (" " + hay + " ")
    start = 0
    while True:
        index = hay.find(token, start)
        if index < 0:
            return False
        before = hay[index - 1] if index else " "
        after_at = index + len(token)
        after = hay[after_at] if after_at < len(hay) else " "
        if not before.isalnum() and not after.isalnum():
            return True
        start = index + 1


def slug_id(brand_id, family):
    return brand_id + "-" + re.sub(r"[^a-z0-9]+", "-", family.lower()).strip("-")


def main():
    if not DATA_ZIP.exists():
        raise SystemExit("missing " + str(DATA_ZIP))

    old_products = {}
    old_shell = {}
    if OUT.exists():
        BACKUP.parent.mkdir(parents=True, exist_ok=True)
        BACKUP.write_bytes(OUT.read_bytes())
        try:
            old_shell = json.loads(OUT.read_text(encoding="utf-8"))
            for item in old_shell.get("products") or []:
                if item.get("id"):
                    old_products[item["id"]] = item
        except json.JSONDecodeError:
            old_shell = {}

    stats = {
        "inserted": 0,
        "updated": 0,
        "skipped": 0,
        "failed": 0,
        "no_price": 0,
        "no_image": 0,
        "out_of_stock": 0,
        "gallery_images": 0,
        "preserved_fa_titles": 0,
    }

    with zipfile.ZipFile(DATA_ZIP) as archive:
        print("reading images", flush=True)
        galleries = defaultdict(list)
        bad_hash = set()
        for row in read_csv(archive, "brakeshop_image_assets_2026-09-19.csv"):
            if row.get("classification") != "product_gallery":
                if row.get("sha256"):
                    bad_hash.add(row["sha256"])
        for row in read_csv(archive, "brakeshop_product_images_2026-09-19.csv"):
            if row.get("download_status") != "downloaded":
                continue
            path = (row.get("local_path") or "").replace("\\", "/").lstrip("./")
            if not path or row.get("sha256") in bad_hash:
                continue
            try:
                position = int(float(row.get("gallery_position") or "0"))
            except ValueError:
                position = 0
            if position < 1:
                continue
            galleries[row.get("bizdavar_sku") or ""].append((position, path))

        print("reading categories", flush=True)
        families = defaultdict(dict)
        for row in read_csv(archive, "brakeshop_categories_2026-09-19.csv"):
            if row.get("depth") != "2":
                continue
            parent = (row.get("category_path_slugs") or "").split(">")[0].strip()
            brand_id = brand_from_parent(parent)
            if not brand_id:
                continue
            family = family_from_slug(row.get("category_slug") or "", brand_id)
            if not family or len(family) < 2:
                continue
            model_id = slug_id(brand_id, family)
            families[brand_id][model_id] = family

        print("reading products", flush=True)
        seen_internal = set()
        seen_product = set()
        seen_url = set()
        products = []
        missing_price = []
        for row in read_csv(archive, "brakeshop_products_2026-09-19.csv"):
            try:
                internal = (row.get("source_internal_id") or "").strip()
                source_product = (row.get("source_product_id") or "").strip()
                source_url = (row.get("source_url") or "").strip()
                if internal and internal in seen_internal:
                    stats["skipped"] += 1
                    continue
                if source_product and source_product in seen_product:
                    stats["skipped"] += 1
                    continue
                if source_url and source_url in seen_url:
                    stats["skipped"] += 1
                    continue
                handle = (row.get("handle") or "").strip()
                sku_code = (row.get("bizdavar_sku") or "").strip()
                product_id = handle or sku_code.lower()
                if not product_id:
                    stats["failed"] += 1
                    continue
                if internal:
                    seen_internal.add(internal)
                if source_product:
                    seen_product.add(source_product)
                if source_url:
                    seen_url.add(source_url)

                title = re.sub(r"\s+", " ", row.get("title_tr") or "").strip()
                title_fa = re.sub(r"\s+", " ", row.get("title_fa") or "").strip()
                previous = old_products.get(product_id)
                if previous and not title_fa and has_arabic(previous.get("title") or ""):
                    title_fa = previous["title"]
                    stats["preserved_fa_titles"] += 1
                if not title:
                    title = title_fa or product_id

                brand_id = detect(handle) or detect(re.sub(r"[^a-z0-9]+", "-", title.lower()))
                shots = []
                seen_paths = set()
                for _pos, path in sorted(galleries.get(sku_code, [])):
                    if path in seen_paths:
                        continue
                    seen_paths.add(path)
                    shots.append(path)
                    if len(shots) >= GALLERY_CAP:
                        break
                price_try = finite_price(row.get("current_price"))
                currency = (row.get("currency") or "TRY").strip().upper()
                price_usd = None
                if price_try is None:
                    missing_price.append(sku_code)
                elif currency in ("TRY", "TL"):
                    price_usd = to_usd(price_try)
                stock = (row.get("availability") or "").strip() == "in_stock"
                item = {
                    "id": product_id,
                    "title": title[:240],
                    "brand": brand_id,
                    "maker": re.sub(r"\s+", " ", row.get("brand") or "").strip()[:80],
                    "mpn": (row.get("mpn") or "")[:48],
                    "sku": (row.get("sku") or sku_code)[:48],
                    "part": part_of(handle, title),
                    "stock": stock,
                }
                if title_fa and title_fa != title:
                    item["titleFa"] = title_fa[:240]
                if price_try is not None:
                    item["priceTry"] = price_try
                if price_usd is not None:
                    item["priceUsd"] = price_usd
                else:
                    stats["no_price"] += 1
                if shots:
                    item["img"] = shots[0]
                    if len(shots) > 1:
                        item["gallery"] = shots
                    stats["gallery_images"] += len(shots)
                else:
                    stats["no_image"] += 1
                if not stock:
                    stats["out_of_stock"] += 1
                if previous:
                    stats["updated"] += 1
                else:
                    stats["inserted"] += 1
                item["_sku"] = sku_code
                products.append(item)
            except Exception:
                stats["failed"] += 1

        if missing_price:
            print("filling", len(missing_price), "prices from variants", flush=True)
            needed = set(missing_price)
            filled = {}
            for row in read_csv(archive, "brakeshop_product_variants_2026-09-19.csv"):
                code = row.get("bizdavar_sku") or ""
                if code not in needed or code in filled:
                    continue
                amount = finite_price(row.get("current_price"))
                currency = (row.get("currency") or "TRY").strip().upper()
                if amount is not None and currency in ("TRY", "TL", ""):
                    filled[code] = amount
            for item in products:
                amount = filled.get(item.get("_sku"))
                if amount is None or item.get("priceTry"):
                    continue
                item["priceTry"] = amount
                item["priceUsd"] = to_usd(amount)
                stats["no_price"] -= 1

    print("matching models", flush=True)
    model_hits = defaultdict(int)
    for item in products:
        brand_id = item.get("brand") or ""
        options = families.get(brand_id) or {}
        if not options:
            continue
        hay = re.sub(r"[^a-z0-9]+", " ", (item["id"] + " " + item["title"]).lower())
        hay = " " + re.sub(r"\s+", " ", hay).strip() + " "
        matched = []
        fit = FIT.get(brand_id, {})
        for model_id, family in options.items():
            codes = list(fit.get(family, []))
            if has_token(hay, family) or any(has_token(hay, code) for code in codes):
                matched.append((len(family), model_id))
        matched.sort(reverse=True)
        chosen = []
        for _length, model_id in matched:
            if model_id not in chosen:
                chosen.append(model_id)
            if len(chosen) >= 8:
                break
        if chosen:
            item["models"] = chosen
            for model_id in chosen:
                model_hits[model_id] += 1

    brand_counts = defaultdict(int)
    for item in products:
        if item.get("brand"):
            brand_counts[item["brand"]] += 1
        item.pop("_sku", None)

    brands_out = []
    for bid, name, _keys in BRANDS:
        if not brand_counts.get(bid):
            continue
        models = []
        for model_id, family in sorted((families.get(bid) or {}).items(), key=lambda pair: pair[1]):
            count = model_hits.get(model_id, 0)
            if count < 1:
                continue
            models.append((count, model_id, pretty_name(family)))
        models.sort(key=lambda row: (-row[0], row[2]))
        brands_out.append({
            "id": bid,
            "name": name,
            "models": [{"id": model_id, "name": label} for _count, model_id, label in models[:80]],
        })

    products.sort(key=lambda item: (not item.get("stock"), not item.get("img"), item.get("title") or ""))
    catalog = {
        "fx": old_shell.get("fx") or {"tryPerUsd": TRY_PER_USD, "markup": MARKUP},
        "video": old_shell.get("video") or "/assets/video/porsche-997-gt3rs.mp4",
        "imageRoot": "/media/catalog/brakeshop/",
        "brands": brands_out,
        "products": products,
    }
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(catalog, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    stats["products"] = len(products)
    stats["brands"] = len(brands_out)
    stats["bytes"] = OUT.stat().st_size
    stats["old_products"] = len(old_products)
    REPORT.parent.mkdir(parents=True, exist_ok=True)
    REPORT.write_text(json.dumps(stats, indent=2), encoding="utf-8")
    print(json.dumps(stats))


if __name__ == "__main__":
    main()
