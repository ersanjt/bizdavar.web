#!/usr/bin/env python3
"""Build liqui-moly-products.js from scraped JSON + Persian catalog shell."""
from __future__ import annotations

import json
import re
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "assets" / "scripts" / "config" / "liqui-moly-products-data.json"
OUT = ROOT / "assets" / "scripts" / "config" / "liqui-moly-products.js"
IMG = "assets/images/liqui-moly/"

CAT_MAP = {
    "ARAÇ BAKIM / TÜKETİCİ ÜRÜNLERİ": "مراقبت و نظافت خودرو",
    "MOTOSİKLET BAKIM ÜRÜNLERİ": "موتور سیکلت",
    "SERVİS ÜRÜNLERİ": "سرویس و مواد مصرفی",
    "Civata Sabitleyici": "سرویس و مواد مصرفی",
    "Pas Sökücü": "مراقبت و نظافت خودرو",
    "Çok Amaçlı Spreyler": "مراقبت و نظافت خودرو",
    "Klima Sistemi": "مراقبت و نظافت خودرو",
    "Cam Kesme Teli": "سرویس و مواد مصرفی",
    "Egzoz Montajı": "سرویس و مواد مصرفی",
    "Elektronik": "سرویس و مواد مصرفی",
    "Galvaniz - Kaporta": "سرویس و مواد مصرفی",
    "Genel Kategoriler": "سایر محصولات",
    "Genel": "سایر محصولات",
    "KIŞ MEVSİMİ ÜRÜNLERİ": "ضدیخ و رادیاتور",
    "SİLAH BAKIM ÜRÜNLERİ": "سایر محصولات",
    "افزودنی روغن / موتور": "افزودنی روغن موتور",
}

CAT_META = {
    "روغن موتور": {"id": "engine-oil", "icon": "droplet", "titleTr": "Motor Yağları"},
    "افزودنی سوخت بنزین": {"id": "fuel-petrol", "icon": "gas-station", "titleTr": "Benzin Katkıları"},
    "افزودنی سوخت دیزل": {"id": "fuel-diesel", "icon": "gas-station", "titleTr": "Dizel Katkıları"},
    "افزودنی روغن موتور": {"id": "oil-additive", "icon": "flask", "titleTr": "Yağ Katkıları"},
    "گیربکس و هیدرولیک": {"id": "gear-hydraulic", "icon": "cog", "titleTr": "Şanzıman / Hidrolik"},
    "ضدیخ و رادیاتور": {"id": "coolant", "icon": "snowflake", "titleTr": "Antifriz"},
    "مراقبت و نظافت خودرو": {"id": "car-care", "icon": "sparkles", "titleTr": "Car Care"},
    "موتور سیکلت": {"id": "motorcycle", "icon": "bike", "titleTr": "Motosiklet"},
    "مارین": {"id": "marine", "icon": "ship", "titleTr": "Marine"},
    "سرویس و مواد مصرفی": {"id": "service", "icon": "wrench", "titleTr": "Servis"},
    "سایر محصولات": {"id": "other", "icon": "box", "titleTr": "Diğer"},
}


def clean_fa(name: str) -> str:
    reps = [
        (r"(?i)Motor Yağı", "روغن موتور"),
        (r"(?i)Motor Yagi", "روغن موتور"),
        (r"(?i)Motosiklet", "موتورسیکلت"),
        (r"(?i)Tam Sentetik", "تمام‌سنتتیک"),
        (r"(?i)Sentetik", "سنتتیک"),
        (r"(?i)Mineral", "مینرال"),
        (r"(?i)\bLitre\b", "لیتر"),
        (r"(?i)\bLt\b", "لیتر"),
        (r"(?i)Yakıt Katkısı", "افزودنی سوخت"),
        (r"(?i)Yakit Katkisi", "افزودنی سوخت"),
        (r"(?i)Dizel", "دیزل"),
        (r"(?i)Benzin", "بنزین"),
        (r"(?i)Temizleyici", "پاک‌کننده"),
        (r"(?i)Fren Hidroliği", "هیدرولیک ترمز"),
        (r"(?i)Radyatör Antifrizi", "ضدیخ رادیاتور"),
        (r"(?i)Antifriz", "ضدیخ"),
        (r"(?i)Parlatıcı", "براق‌کننده"),
        (r"(?i)Temizleme", "تمیزکننده"),
        (r"(?i)Spreyi?", "اسپری"),
        (r"(?i)Katkısı?", "افزودنی"),
        (r"(?i)Katki", "افزودنی"),
        (r"(?i)Gresi", "گریس"),
        (r"(?i)Yağlayıcı|Kaydirici", "روان‌کننده"),
        (r"(?i)Pas Sokucu|Pas Sökücü", "ضدزنگ"),
        (r"(?i)Enjektör", "انژکتور"),
        (r"(?i)Oto Kokusu", "خوشبوکننده خودرو"),
        (r"(?i)Bakım Ürünü", "محصول نگهداری"),
        (r"(?i)Şanzıman Yağı", "روغن گیربکس"),
        (r"(?i)Octane Plus", "اکتان پلاس"),
    ]
    out = name
    for a, b in reps:
        out = re.sub(a, b, out)
    return re.sub(r"\s{2,}", " ", out).strip()


def js_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def main():
    data = json.loads(DATA.read_text(encoding="utf-8"))
    products = []
    for p in data.get("products") or []:
        price = float(p.get("priceUsd") or 0)
        if price <= 0:
            continue
        name = p.get("name") or ""
        # skip non-product promos
        if name.lower() in {"anahtarlik", "liqui moly sticker"}:
            continue
        cat = CAT_MAP.get(p.get("category") or "", p.get("category") or "سایر محصولات")
        if cat not in CAT_META:
            cat = "سایر محصولات"
        sku = p.get("sku")
        local = None
        if sku:
            for ext in (".jpg", ".jpeg", ".png", ".webp"):
                cand = ROOT / "assets" / "images" / "liqui-moly" / f"product-{sku}{ext}"
                if cand.exists():
                    local = f"assets/images/liqui-moly/product-{sku}{ext}"
                    break
        products.append(
            {
                "id": sku or re.sub(r"[^a-z0-9]+", "-", name.lower())[:48],
                "name": name,
                "nameFa": clean_fa(p.get("nameFa") or name),
                "nameTr": p.get("nameTr") or name,
                "sku": sku,
                "priceTry": p.get("priceTry"),
                "priceUsd": round(price, 2),
                "image": local or p.get("image"),
                "url": p.get("url"),
                "category": cat,
            }
        )

    by_cat = defaultdict(list)
    for p in products:
        by_cat[p["category"]].append(p)

    # Prefer Octane Plus highlight if present
    octane = next((p for p in products if "octane" in p["name"].lower()), None)

    highlights = []
    if octane:
        highlights.append(
            {
                "id": "octane-plus",
                "title": "Octane Plus — اکتان پلاس",
                "titleTr": "Octane Plus",
                "desc": "افزودنی بنزین ساخت آلمان — افزایش عدد اکتان، بهبود قدرت موتور و احتراق نرم‌تر",
                "useCaseFa": "خودروهای بنزینی · افزودن به باک سوخت",
                "badge": "پرفروش",
                "inquiryName": "Liqui Moly Octane Plus",
                "image": IMG + "octane-plus.jpg",
                "imageAlt": "Liqui Moly Octane Plus fuel additive Made in Germany",
                "priceUsd": octane["priceUsd"],
            }
        )

    # Top priced/popular highlights from each major category
    for cat in ["روغن موتور", "افزودنی سوخت بنزین", "افزودنی سوخت دیزل", "مراقبت و نظافت خودرو", "گیربکس و هیدرولیک", "ضدیخ و رادیاتور"]:
        items = sorted(by_cat.get(cat, []), key=lambda x: x["priceUsd"]) 
        if not items:
            continue
        pick = items[len(items) // 3]  # mid-low popular
        if any(h.get("inquiryName") == pick["name"] for h in highlights):
            continue
        highlights.append(
            {
                "title": pick["nameFa"][:60],
                "titleTr": pick["nameTr"][:60],
                "desc": f"قیمت تقریبی ${pick['priceUsd']} — تامین اصل Liqui Moly از ترکیه",
                "useCaseFa": cat,
                "badge": cat.split()[0],
                "inquiryName": pick["name"],
                "image": pick["image"] or (IMG + "octane-plus.jpg"),
                "imageAlt": pick["name"],
                "priceUsd": pick["priceUsd"],
            }
        )
        if len(highlights) >= 8:
            break

    categories_js = []
    for cat, meta in CAT_META.items():
        items = by_cat.get(cat) or []
        if not items:
            continue
        items = sorted(items, key=lambda x: x["nameFa"])
        series = [
            {
                "name": it["nameFa"],
                "note": f"${it['priceUsd']} · SKU {it['sku'] or '—'}",
                "priceUsd": it["priceUsd"],
                "priceTry": it["priceTry"],
                "sku": it["sku"],
                "image": it["image"],
                "featured": "octane" in it["name"].lower() or it["priceUsd"] >= 50,
            }
            for it in items
        ]
        categories_js.append(
            {
                "id": meta["id"],
                "title": cat,
                "titleTr": meta["titleTr"],
                "icon": meta["icon"],
                "image": (items[0]["image"] if items else None) or (IMG + "octane-plus.jpg"),
                "desc": f"{len(items)} محصول — قیمت به دلار (نرخ ۱ دلار = ۴۷ لیر)",
                "series": series,
            }
        )

    # Embed full products array for dynamic grid
    products_sorted = sorted(products, key=lambda x: (x["category"], x["nameFa"]))

    lines = []
    lines.append("/**")
    lines.append(" * Liqui Moly — catalog with USD prices")
    lines.append(f" * Source: liquimolyturkey.com / shop.egemot.com.tr | rate 1 USD = 47 TRY | {data.get('fetchedAt')}")
    lines.append(f" * Products: {len(products_sorted)}")
    lines.append(" */")
    lines.append("(function () {")
    lines.append(f"  const LM = {js_str(IMG)};")
    lines.append("  const logo = 'assets/images/partners/liqui-moly.svg';")
    lines.append("  const rate = { tryPerUsd: 47, label: '۱ دلار = ۴۷ لیر' };")
    lines.append("")
    lines.append("  window.LIQUI_MOLY_CATALOG = {")
    lines.append("    rate,")
    lines.append("    brand: {")
    lines.append("      name: 'Liqui Moly',")
    lines.append("      nameFa: 'لیکی‌مالی',")
    lines.append("      logo,")
    lines.append("      logoAlt: 'Liqui Moly — German automotive oils and additives',")
    lines.append(f"      heroImage: LM + 'octane-plus.jpg',")
    lines.append("      heroImageAlt: 'Liqui Moly Octane Plus — Made in Germany',")
    lines.append("      heroEyebrow: 'تامین اصل Liqui Moly از ترکیه برای فارسی‌زبانان',")
    lines.append("      heroHeadline: 'روغن و افزودنی Liqui Moly',")
    lines.append("      heroHeadlineSub: 'روغن موتور، افزودنی سوخت، ضدیخ و مراقبت خودرو — قیمت دلاری شفاف + مشاوره فارسی',")
    lines.append("      tagline: 'Made in Germany',")
    lines.append("      taglineFa: 'روغن و افزودنی خودرو — ساخت آلمان',")
    lines.append("      since: 'برند آلمانی · توزیع ترکیه',")
    lines.append("      origin: 'آلمان — تامین از ترکیه',")
    lines.append("      officialUrl: 'https://www.liquimolyturkey.com/',")
    lines.append("      descriptionFa: 'بیزدوار گروپ تامین‌کننده محصولات اصل Liqui Moly است: روغن موتور، افزودنی بنزین و دیزل، ضدیخ، گیربکس و محصولات مراقبت خودرو. قیمت‌ها بر اساس لیست ترکیه با نرخ ۱ دلار = ۴۷ لیر به دلار نمایش داده می‌شود — استعلام و سفارش از واتساپ فارسی.',")
    lines.append("      heroStats: [")
    lines.append(f"        {{ value: '{len(products_sorted)}+', label: 'محصول در کاتالوگ' }},")
    lines.append("        { value: '۱$=۴۷₺', label: 'نرخ تبدیل نمایشی' },")
    lines.append("        { value: 'DE', label: 'ساخت آلمان' }")
    lines.append("      ]")
    lines.append("    },")
    lines.append("    trustSignals: [")
    lines.append("      { icon: 'target', label: 'محصول اصل', desc: 'تامین از کانال توزیع Liqui Moly ترکیه — کد محصول و مشخصات فنی' },")
    lines.append("      { icon: 'globe', label: 'قیمت دلاری شفاف', desc: 'تبدیل از لیر ترکیه با نرخ اعلام‌شده — پیش‌فاکتور قبل از پرداخت' },")
    lines.append("      { icon: 'mail', label: 'مشاوره فارسی', desc: 'انتخاب روغن، ویسکوزیته و افزودنی مناسب خودرو — واتساپ فارسی' },")
    lines.append("      { icon: 'factory', label: 'لجستیک بین‌المللی', desc: 'هماهنگی خرید و حمل از ترکیه تا مقصد پروژه شما' }")
    lines.append("    ],")
    lines.append("    whyBuyFromUs: [")
    lines.append("      { icon: 'target', title: 'انتخاب درست روغن و افزودنی', desc: 'اگر نمی‌دانید 5W-30 یا 5W-40، یا Octane Plus مناسب است — مدل خودرو و نوع سوخت را بگویید.' },")
    lines.append("      { icon: 'document', title: 'قیمت قابل مقایسه', desc: 'قیمت تقریبی دلاری روی هر محصول نمایش داده می‌شود. مبلغ نهایی در پیش‌فاکتور با موجودی روز تایید می‌شود.' },")
    lines.append("      { icon: 'handshake', title: 'سفارش تکی یا عمده', desc: 'برای مصرف شخصی، تعمیرگاه یا خرید سازمانی — یک نقطه تماس فارسی.' },")
    lines.append("      { icon: 'factory', title: 'برند جهانی آلمان', desc: 'Liqui Moly در روغن موتور، افزودنی سوخت و مراقبت خودرو شناخته‌شده است — ساخت آلمان.' }")
    lines.append("    ],")
    lines.append("    purchaseSteps: [")
    lines.append("      { num: '۱', title: 'انتخاب محصول', desc: 'از کاتالوگ زیر یا نام/کد محصول را در واتساپ بفرستید' },")
    lines.append("      { num: '۲', title: 'تایید قیمت', desc: 'قیمت دلاری نمایشی را با موجودی روز چک می‌کنیم و پیش‌فاکتور می‌دهیم' },")
    lines.append("      { num: '۳', title: 'پیش‌فاکتور', desc: 'مبلغ، تعداد، زمان ارسال و شرایط پرداخت — شفاف' },")
    lines.append("      { num: '۴', title: 'تامین و حمل', desc: 'سفارش از ترکیه و هماهنگی لجستیک بین‌المللی' },")
    lines.append("      { num: '۵', title: 'تحویل', desc: 'تحویل در مقصد — پشتیبانی فارسی پس از خرید' }")
    lines.append("    ],")
    lines.append("    quoteChecklist: {")
    lines.append("      title: 'برای استعلام دقیق این موارد را بفرستید',")
    lines.append("      desc: 'حتی نام محصول یا کد SKU کافی است — یا مدل خودرو را بگویید تا پیشنهاد دهیم.',")
    lines.append("      items: [")
    lines.append("        'نام محصول یا کد Liqui Moly (مثلاً Octane Plus / 5W-30 Top Tec)',")
    lines.append("        'تعداد مورد نیاز (تکی / کارتن / عمده)',")
    lines.append("        'نوع خودرو و سوخت (بنزین / دیزل / موتورسیکلت)',")
    lines.append("        'شهر یا کشور تحویل'")
    lines.append("      ],")
    lines.append("      tip: 'قیمت‌های صفحه تقریبی‌اند (لیر ÷ ۴۷). مبلغ نهایی در پیش‌فاکتور اعلام می‌شود.'")
    lines.append("    },")
    lines.append("    quickSeries: [")
    lines.append("      { id: 'engine-oil', name: 'روغن موتور', tag: '5W / 0W', hint: 'Top Tec · Molygen · Special Tec', anchor: 'cat' },")
    lines.append("      { id: 'fuel-petrol', name: 'افزودنی بنزین', tag: 'Octane', hint: 'اکتان پلاس · Speed Tec', anchor: 'cat' },")
    lines.append("      { id: 'fuel-diesel', name: 'افزودنی دیزل', tag: 'DPF', hint: 'سیستم دیزل · DPF', anchor: 'cat' },")
    lines.append("      { id: 'car-care', name: 'مراقبت خودرو', tag: 'Care', hint: 'تمیزکننده · براق‌کننده', anchor: 'cat' }")
    lines.append("    ],")
    lines.append(f"    highlights: {json.dumps(highlights, ensure_ascii=False, indent=6)},")
    lines.append(f"    categories: {json.dumps(categories_js, ensure_ascii=False, indent=6)},")
    lines.append(f"    products: {json.dumps(products_sorted, ensure_ascii=False, indent=6)},")
    lines.append("    iranIndustries: [")
    lines.append("      { name: 'تعمیرگاه و سرویس خودرو', desc: 'روغن، افزودنی سوخت و محصولات مراقبت', image: LM + 'octane-plus.jpg', icon: 'wrench', models: 'Top Tec · Octane Plus' },")
    lines.append("      { name: 'ناوگان و تاکسی', desc: 'روغن موتور و افزودنی دیزل/بنزین عمده', image: LM + 'octane-plus.jpg', icon: 'truck', models: '5W-30 · Diesel Additive' },")
    lines.append("      { name: 'موتورسیکلت', desc: 'روغن 4T و محصولات نگهداری', image: LM + 'octane-plus.jpg', icon: 'bike', models: '4T · Motorbike' },")
    lines.append("      { name: 'مصرف‌کننده شخصی', desc: 'اکتان پلاس، ضدیخ و car care', image: LM + 'octane-plus.jpg', icon: 'user', models: 'Octane Plus · Antifreeze' }")
    lines.append("    ],")
    lines.append("    faq: [")
    lines.append("      { q: 'قیمت‌ها به دلار است یا لیر؟', a: 'قیمت نمایشی به دلار است و از قیمت لیر ترکیه با نرخ ۱ دلار = ۴۷ لیر محاسبه شده. مبلغ نهایی سفارش در پیش‌فاکتور تایید می‌شود.' },")
    lines.append("      { q: 'محصول اصل Liqui Moly است؟', a: 'بله — تامین از کانال توزیع ترکیه. کد محصول (SKU) روی هر آیتم مشخص است.' },")
    lines.append("      { q: 'Octane Plus چیست؟', a: 'افزودنی بنزین ساخت آلمان برای افزایش عدد اکتان و بهبود قدرت موتور. طبق دستورالعمل روی قوطی به باک اضافه می‌شود.' },")
    lines.append("      { q: 'آیا برای خارج از ایران هم ارسال می‌کنید؟', a: 'بله — مشاوره واتساپ فارسی برای فارسی‌زبانان در سراسر جهان فعال است. مقصد تحویل در پیش‌فاکتور مشخص می‌شود.' },")
    lines.append("      { q: 'حداقل سفارش چقدر است؟', a: 'از سفارش تکی تا عمده امکان‌پذیر است. برای تعمیرگاه و ناوگان، تعداد را بگویید تا قیمت بهتر پیشنهاد شود.' },")
    lines.append("      { q: 'زمان تحویل چقدر است؟', a: 'بسته به موجودی ترکیه و مقصد، معمولاً چند روز تا چند هفته. زمان دقیق در پیش‌فاکتور اعلام می‌شود.' }")
    lines.append("    ],")
    lines.append("    inquiryTemplate: 'سلام، درخواست استعلام Liqui Moly — {product}\\n\\nتعداد:\\nمدل خودرو / سوخت:\\nشهر / کشور تحویل:\\n',")
    lines.append("    services: [")
    lines.append("      { title: 'مشاوره انتخاب روغن', desc: 'ویسکوزیته و استاندارد مناسب خودرو شما' },")
    lines.append("      { title: 'تامین اصل', desc: 'سفارش از توزیع Liqui Moly ترکیه' },")
    lines.append("      { title: 'پیش‌فاکتور دلاری', desc: 'قیمت شفاف قبل از پرداخت' },")
    lines.append("      { title: 'سفارش عمده', desc: 'تعمیرگاه، ناوگان و فروشگاهی' },")
    lines.append("      { title: 'لجستیک', desc: 'حمل بین‌المللی تا مقصد' },")
    lines.append("      { title: 'پشتیبانی فارسی', desc: 'واتساپ و فرم تماس' }")
    lines.append("    ],")
    lines.append("    officialUrl: 'https://www.liquimolyturkey.com/'")
    lines.append("  };")
    lines.append("})();")
    lines.append("")

    OUT.write_text("\n".join(lines), encoding="utf-8")
    print("Wrote", OUT, "products", len(products_sorted), "categories", len(categories_js))


if __name__ == "__main__":
    main()
