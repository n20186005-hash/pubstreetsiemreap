#!/usr/bin/env python3
"""Download placeholder gallery photos for Pub Street Siem Reap.

Images are fetched from LoremFlickr (302-redirected to live.staticflickr.com),
tagged with Cambodia / Siem Reap / nightlife keywords. They are GENERIC
placeholder photos and should be replaced with real Pub Street photos
before launch (keep the same filenames pub-street-siem-reap-1..10.jpg).
"""
import os
import urllib.request

TAGS = [
    "siemreap,night",      # 1 night street
    "cambodia,market",     # 2 local life
    "cambodia,streetfood", # 3 food culture
    "cambodia,street",     # 4 street view
    "nightmarket",         # 5 night street
    "cambodia,people",     # 6 local life
    "cambodia,food",       # 7 food culture
    "asia,street",         # 8 street view
    "siemreap",            # 9 night street
    "cambodia,travel",     # 10 local life
]

OUT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public", "gallery"))
os.makedirs(OUT_DIR, exist_ok=True)

UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}

for i, tag in enumerate(TAGS, start=1):
    url = f"https://loremflickr.com/800/600/{tag}"
    dest = os.path.join(OUT_DIR, f"pub-street-siem-reap-{i}.jpg")
    try:
        req = urllib.request.Request(url, headers=UA)
        with urllib.request.urlopen(req, timeout=60) as r, open(dest, "wb") as f:
            f.write(r.read())
        print(f"OK  saved {dest}")
    except Exception as e:
        print(f"FAIL {tag}: {e}")
