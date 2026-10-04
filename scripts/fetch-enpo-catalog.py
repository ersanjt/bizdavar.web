# -*- coding: utf-8 -*-
"""Crawl enpo.net product tree, save images, and extract catalog facts."""
import json
import re
import time
import urllib.request
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import quote, urlsplit, urlunsplit

import fitz
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
IMG_DIR = ROOT / "assets" / "images" / "enpo"
OUT = ROOT / "assets" / "data" / "enpo" / "catalog-source.json"
BASE = "http://www.enpo.net/"
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
ROOTS = [
    "1758528905",
    "1758529434",
    "1758529463",
    "1758530071",
    "1758700727",
]
CODE_RE = re.compile(
    r"\b(?:[A-Z]{2,6}\d[A-Z0-9][A-Z0-9./-]{0,22}|[A-Z]{1,5}(?:-[A-Z0-9]{2,}){1,5})\b"
)
PRESS_RE = re.compile(r"\b\d+(?:[.,]\d+)?\s*bar\b", re.I)
TEMP_RE = re.compile(r"-?\d+\s*(?:÷|to|–|-)\s*\+?-?\d+\s*°?\s*C", re.I)
PORT_RE = re.compile(r"\bG\d+(?:/\d+)?\b")


def safe_url(url):
    parts = urlsplit(url)
    path = quote(parts.path, safe="/%")
    query = quote(parts.query, safe="=&%")
    return urlunsplit((parts.scheme, parts.netloc, path, query, parts.fragment))


def fetch(url):
    req = urllib.request.Request(safe_url(url), headers={"User-Agent": UA, "Referer": BASE})
    last = None
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=45) as res:
                return res.read()
        except Exception as exc:
            last = exc
            time.sleep(1.2 * (attempt + 1))
    raise last


def fetch_text(url):
    return fetch(url).decode("utf-8", "replace")


def abs_url(src):
    if not src:
        return ""
    if src.startswith("http"):
        return src
    return BASE + src.lstrip("/")


class CardParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.cards = []
        self._in_card = False
        self._depth = 0
        self._href = ""
        self._bg = ""
        self._in_h3 = False
        self._name = []
        self.h2 = ""
        self._in_h2 = False
        self._h2_depth_ok = True
        self.pdf = ""
        self.hero = ""

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "h2" and not self.h2:
            self._in_h2 = True
        if tag == "div" and "card" in (a.get("class") or "").split():
            self._in_card = True
            self._depth = 1
            self._href = ""
            self._bg = ""
            self._name = []
            return
        if self._in_card and tag == "div":
            self._depth += 1
        if self._in_card and tag == "a" and not self._href:
            self._href = a.get("href") or ""
        if self._in_card and tag == "div" and "card-image" in (a.get("class") or ""):
            m = re.search(r"url\('([^']+)'\)", a.get("style") or "")
            if m:
                self._bg = m.group(1)
        if self._in_card and tag == "h3":
            self._in_h3 = True
        if tag == "img":
            src = a.get("src") or ""
            if "yuklenen/kategoriler/" in src and not self.hero:
                self.hero = src
        if tag == "a":
            href = a.get("href") or ""
            if ".pdf" in href.lower() and not self.pdf:
                self.pdf = href

    def handle_endtag(self, tag):
        if tag == "h2":
            self._in_h2 = False
        if tag == "h3":
            self._in_h3 = False
        if self._in_card and tag == "div":
            self._depth -= 1
            if self._depth <= 0:
                kid = ""
                m = re.search(r"kid=(\d+)", self._href)
                if m:
                    kid = m.group(1)
                name = re.sub(r"\s+", " ", "".join(self._name)).strip()
                if kid and name:
                    self.cards.append({"kid": kid, "name": name, "img": self._bg})
                self._in_card = False

    def handle_data(self, data):
        if self._in_h2 and not self.h2:
            text = data.strip()
            if text:
                self.h2 = text
        if self._in_h3:
            self._name.append(data)


def parse_page(html):
    p = CardParser()
    p.feed(html)
    return {"title": p.h2, "cards": p.cards, "pdf": p.pdf, "hero": p.hero}


def save_image(url, kid):
    if not url:
        return ""
    dest_jpg = IMG_DIR / f"{kid}.jpg"
    dest_webp = IMG_DIR / f"{kid}.webp"
    dest_800 = IMG_DIR / f"{kid}-800.webp"
    rel = f"assets/images/enpo/{kid}.webp"
    if dest_webp.exists() and dest_800.exists():
        return rel
    try:
        data = fetch(abs_url(url))
    except Exception as exc:
        print("img fail", kid, exc)
        return ""
    dest_jpg.write_bytes(data)
    try:
        im = Image.open(dest_jpg).convert("RGB")
        im.save(dest_webp, "WEBP", quality=82)
        im.thumbnail((800, 800))
        im.save(dest_800, "WEBP", quality=80)
        dest_jpg.unlink(missing_ok=True)
    except Exception as exc:
        print("webp fail", kid, exc)
        return f"assets/images/enpo/{kid}.jpg"
    return rel


def series_head(title):
    return re.split(r"\bSeri", title or "", maxsplit=1)[0].strip()


def keep_codes(title, codes, pages):
    head = series_head(title).upper()
    token = re.sub(r"[^A-Z0-9]", "", head)
    chunks = [c for c in re.split(r"[^A-Z0-9]+", head) if len(c) >= 2]

    def strict(code):
        compact = re.sub(r"[^A-Z0-9]", "", code.upper())
        if len(compact) < 4:
            return False
        if token and compact.startswith(token):
            return True
        if token.startswith("HZE"):
            want = re.match(r"HZE(\d*)([A-Z])", token)
            got = re.match(r"HZE(\d*)([A-Z])", compact)
            if want and got and want.group(2) == got.group(2):
                size = want.group(1)
                return (not size) or got.group(1).startswith(size)
            return False
        return bool(token) and token in compact

    picked = [c for c in codes if strict(c)]
    if picked:
        return picked[:14]
    if pages and pages <= 16:
        loose = []
        for code in codes:
            compact = re.sub(r"[^A-Z0-9]", "", code.upper())
            if any(compact.startswith(ch) and len(ch) >= 2 for ch in chunks):
                loose.append(code)
        return loose[:14]
    return []


def extract_pdf(pdf_path, title=""):
    try:
        data = fetch(abs_url(pdf_path))
    except Exception as exc:
        print("pdf fail", pdf_path, exc)
        return {"codes": [], "pressure": [], "temp": [], "ports": []}
    doc = fitz.open(stream=data, filetype="pdf")
    text = "\n".join(page.get_text() for page in doc)
    codes = []
    seen = set()
    for token in CODE_RE.findall(text):
        token = token.strip(".-")
        if len(token) < 5 or token in seen:
            continue
        if token.startswith("ISO") or token.startswith("ATEX"):
            continue
        seen.add(token)
        codes.append(token)
        if len(codes) >= 80:
            break
    return {
        "codes": keep_codes(title, codes, doc.page_count),
        "pressure": list(dict.fromkeys(PRESS_RE.findall(text)))[:4],
        "temp": list(dict.fromkeys(TEMP_RE.findall(text)))[:3],
        "ports": list(dict.fromkeys(PORT_RE.findall(text)))[:8],
        "pages": doc.page_count,
        "chars": len(text.strip()),
    }


def main():
    IMG_DIR.mkdir(parents=True, exist_ok=True)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    nodes = []
    if OUT.exists():
        try:
            nodes = json.loads(OUT.read_text(encoding="utf-8"))
        except Exception:
            nodes = []
    by_id = {n["kid"]: n for n in nodes}

    def walk(kid, parent, depth):
        if depth > 6:
            return
        existing = by_id.get(kid)
        if existing:
            for card in existing.get("children") or []:
                walk(card["kid"], kid, depth + 1)
            return
        html = fetch_text(BASE + "kategoriler.php?kid=" + kid)
        if "Erisim reddedildi" in html or len(html) < 200:
            print("blocked", kid)
            return
        page = parse_page(html)
        img = ""
        if page["cards"]:
            pass
        else:
            img = save_image(page["hero"], kid)
        facts = {}
        if page["pdf"]:
            facts = extract_pdf(page["pdf"], page["title"])
            print(kid, "codes", len(facts.get("codes") or []), "pages", facts.get("pages"), flush=True)
        else:
            print(kid, "children", len(page["cards"]), flush=True)
        nodes.append({
            "kid": kid,
            "parent": parent,
            "depth": depth,
            "title": page["title"],
            "img": img,
            "pdf": abs_url(page["pdf"]) if page["pdf"] else "",
            "page": BASE + "kategoriler.php?kid=" + kid,
            "facts": facts,
            "children": page["cards"],
        })
        by_id[kid] = nodes[-1]
        if len(nodes) % 8 == 0:
            OUT.write_text(json.dumps(nodes, ensure_ascii=False, indent=2), encoding="utf-8")
        for card in page["cards"]:
            save_image(card["img"], card["kid"])
            time.sleep(0.05)
            walk(card["kid"], kid, depth + 1)

    for root in ROOTS:
        walk(root, None, 0)
        time.sleep(0.1)

    logo = IMG_DIR / "logo.png"
    if not logo.exists():
        logo.write_bytes(fetch(BASE + "assets/images/logo.png"))
    OUT.write_text(json.dumps(nodes, ensure_ascii=False, indent=2), encoding="utf-8")
    leaves = [n for n in nodes if not n["children"]]
    print("nodes", len(nodes), "leaves", len(leaves), "with codes", sum(1 for n in leaves if (n.get("facts") or {}).get("codes")))


def refresh_facts():
    nodes = json.loads(OUT.read_text(encoding="utf-8"))
    for n in nodes:
        if not n.get("pdf"):
            continue
        try:
            n["facts"] = extract_pdf(n["pdf"], n.get("title") or "")
            print(n["kid"], "codes", len(n["facts"].get("codes") or []), flush=True)
        except Exception as exc:
            print("skip", n["kid"], type(exc).__name__, flush=True)
    OUT.write_text(json.dumps(nodes, ensure_ascii=False, indent=2), encoding="utf-8")


if __name__ == "__main__":
    import sys
    if "--facts" in sys.argv:
        refresh_facts()
    else:
        main()
