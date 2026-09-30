"""Converts the website fonts (WOFF2) into TTFs Typst can use.

    python3 tools/presskit/fonts.py <repo-root> <out-dir>

Nanospaceland ships as a variable font; Typst gets a static Bold instance, which it
lists under the family name "NaN Spaceland".
"""
import sys
from pathlib import Path

from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

root, out = Path(sys.argv[1]), Path(sys.argv[2])
out.mkdir(parents=True, exist_ok=True)

display = instancer.instantiateVariableFont(TTFont(root / "public/fonts/NaNSpaceland-VF.woff2"), {"wght": 700})
display["OS/2"].usWeightClass = 700
display.flavor = None
display.save(out / "Nanospaceland-Bold.ttf")

files = root / "node_modules/@fontsource/space-grotesk/files"
for weight in (400, 700):
    font = TTFont(files / f"space-grotesk-latin-{weight}-normal.woff2")
    font.flavor = None
    font.save(out / f"SpaceGrotesk-{weight}.ttf")
