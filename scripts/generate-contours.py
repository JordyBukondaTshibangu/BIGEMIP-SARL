import numpy as np, json, sys
from scipy.ndimage import gaussian_filter
import matplotlib; matplotlib.use("Agg")
import matplotlib.pyplot as plt

def terrain(w, h, seed, peaks):
    rng = np.random.default_rng(seed)
    y, x = np.mgrid[0:h, 0:w].astype(float)
    z = np.zeros((h, w))
    for (cx, cy, s, a) in peaks:
        z += a * np.exp(-(((x - cx * w) ** 2 + (y - cy * h) ** 2) / (2 * (s * w) ** 2)))
    z += gaussian_filter(rng.normal(size=(h, w)), sigma=min(w, h) / 9) * 9
    z += gaussian_filter(rng.normal(size=(h, w)), sigma=min(w, h) / 30) * 1.2
    return z

def paths(z, w, h, levels, scale):
    fig, ax = plt.subplots()
    cs = ax.contour(z, levels=levels)
    out = []
    for i, segs in enumerate(cs.allsegs):
        for seg in segs:
            if len(seg) < 8: continue
            seg = seg[::3] if len(seg) > 30 else seg
            d = "M" + "L".join(f"{p[0]*scale:.0f} {p[1]*scale:.0f}" for p in seg)
            out.append({"d": d, "major": (i + 3) % 5 == 0})
    plt.close(fig)
    return out

def make(name, W, H, seed, peaks, n):
    s = 4
    z = terrain(W // s, H // s, seed, peaks)
    lv = np.linspace(z.min() + 0.5, z.max() - 0.2, n)
    return name, {"w": W, "h": H, "paths": paths(z, W // s, H // s, lv, s)}

res = dict([
    make("hero", 1600, 1000, 7, [(0.78, 0.42, 0.13, 38), (0.95, 0.85, 0.1, 22), (0.55, 0.15, 0.08, 14)], 26),
    make("panel", 900, 600, 21, [(0.7, 0.5, 0.18, 30), (0.2, 0.9, 0.12, 12)], 18),
])
for k, v in res.items(): print(k, len(v["paths"]), sum(len(p["d"]) for p in v["paths"]))
ts = "// Generated from a synthetic elevation model (see contour script). Do not edit by hand.\n"
ts += "export type ContourSet = { w: number; h: number; paths: { d: string; major: boolean }[] };\n"
for k, v in res.items():
    ts += f"export const {k}Contours: ContourSet = {json.dumps(v, separators=(',', ':'))};\n"
open(sys.argv[1], "w").write(ts)
