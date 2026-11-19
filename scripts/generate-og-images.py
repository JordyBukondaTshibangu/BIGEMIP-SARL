"""Generate the 1200x630 social share images (public/og/og-{fr,en}.jpg).

Usage: python scripts/generate-og-images.py <project root>
Requires: pillow, fonttools, brotli
"""
import json, os, re, sys, tempfile
from PIL import Image, ImageDraw, ImageFont
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

ROOT = sys.argv[1] if len(sys.argv) > 1 else "."

# Static instances of the variable Archivo font (Pillow needs fixed weights/widths).
FONT_DIR = tempfile.mkdtemp()
for name, loc in (("display", {"wght": 750, "wdth": 125}), ("body", {"wght": 450, "wdth": 100}), ("sub", {"wght": 650, "wdth": 112})):
    inst = instancer.instantiateVariableFont(TTFont(f"{ROOT}/src/fonts/archivo-variable.woff2"), loc)
    inst.flavor = None
    inst.save(os.path.join(FONT_DIR, f"archivo-{name}.ttf"))
W, H = 1200, 630
BASALT = (31, 29, 51); ORE = (212, 168, 75)
src = Image.open(f"{ROOT}/public/assets/bigemip-image-3.jpg").convert("RGB")
# cover-crop, favour the right of the photo
r = max(W / src.width, H / src.height); src = src.resize((int(src.width * r) + 1, int(src.height * r) + 1), Image.LANCZOS)
x0 = int((src.width - W) * 0.7); y0 = (src.height - H) // 2
photo = src.crop((x0, y0, x0 + W, y0 + H))
# left-to-right basalt overlay (same stops as the hero)
ov = Image.new("RGBA", (W, H)); px = ov.load()
for x in range(W):
    t = x / W
    a = 0.96 if t < 0 else (0.96 - (0.96 - 0.86) * t / 0.38 if t < 0.38 else (0.86 - (0.86 - 0.55) * (t - 0.38) / 0.32 if t < 0.7 else 0.55 - 0.05 * (t - 0.7) / 0.3))
    for y in range(H): px[x, y] = (*BASALT, int(a * 255))
img = photo.convert("RGBA"); img.alpha_composite(ov)
band = Image.new("RGBA", (W, H)); bp = band.load()
for y in range(H):
    a = max(0.0, (y - H * 0.55) / (H * 0.45)) ** 1.4 * 0.85
    for x in range(W): bp[x, y] = (*BASALT, int(a * 255))
img.alpha_composite(band)
# contour lines from the generated set
ts = open(f"{ROOT}/src/lib/contours.ts").read()
# Read the hero contour set; works whether or not Prettier has reformatted the file.
block = ts[ts.index("heroContours"):]
block = block[: block.index("panelContours")] if "panelContours" in block else block
hero = {
    "w": int(re.search(r'"?w"?\s*:\s*(\d+)', block).group(1)),
    "h": int(re.search(r'"?h"?\s*:\s*(\d+)', block).group(1)),
    "paths": [
        {"d": d, "major": m == "true"}
        for d, m in re.findall(r'"?d"?\s*:\s*"([^"]+)"\s*,\s*"?major"?\s*:\s*(true|false)', block)
    ],
}
lines = Image.new("RGBA", (W * 2, H * 2)); d = ImageDraw.Draw(lines)
sx, sy = W * 2 / hero["w"], H * 2 / hero["h"]; s = max(sx, sy)
for p in hero["paths"]:
    pts = [(float(a) * s, float(b) * s) for a, b in re.findall(r"(-?[\d.]+) (-?[\d.]+)", p["d"])]
    if len(pts) > 1: d.line(pts, fill=(*ORE, 150 if p["major"] else 75), width=3 if p["major"] else 2)
img.alpha_composite(lines.resize((W, H), Image.LANCZOS))
mark = Image.open(f"{ROOT}/public/assets/bigemip-mark.png").convert("RGBA"); mark.thumbnail((86, 70))
F = lambda n, sz: ImageFont.truetype(os.path.join(FONT_DIR, f"archivo-{n}.ttf"), sz)
copy = {
  "fr": ("Investigations géologiques,", "minières et pétrolières en RDC", "Cartographie · Géophysique · Géochimie · SIG"),
  "en": ("Geological, mining and", "petroleum investigations in the DRC", "Mapping · Geophysics · Geochemistry · GIS"),
}
for lang, (l1, l2, sub) in copy.items():
    im = img.copy(); dr = ImageDraw.Draw(im)
    im.alpha_composite(mark, (72, 64))
    dr.text((72 + mark.width + 18, 64 + mark.height // 2), "BIGEMIP SARL", font=F("sub", 30), fill=(255, 255, 255), anchor="lm")
    size = 64
    while max(dr.textlength(l1, font=F("display", size)), dr.textlength(l2, font=F("display", size))) > W - 144: size -= 2
    dr.text((72, 280), l1, font=F("display", size), fill=(255, 255, 255))
    dr.text((72, 280 + int(size * 1.1)), l2, font=F("display", size), fill=(255, 255, 255))
    dr.rectangle((72, 520, 72 + 64, 524), fill=ORE)
    dr.text((72, 545), sub, font=F("body", 26), fill=(255, 255, 255, 215))
    dr.text((W - 72, 545), "Kinshasa, RDC" if lang == "fr" else "Kinshasa, DRC", font=F("sub", 26), fill=ORE, anchor="ra")
    im.convert("RGB").save(f"{ROOT}/public/og/og-{lang}.jpg", quality=86, optimize=True, progressive=True)
    print(lang, size)
