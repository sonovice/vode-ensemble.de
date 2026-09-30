#!/usr/bin/env bash
# Builds the press kit downloads into public/presse from src/data/pressKit.ts:
# vode-pressekit-de.pdf, vode-presskit-en.pdf and vode-pressekit.zip.
# Requires typst, python3 with fonttools + brotli, node ≥ 23 and `npm install`.
set -euo pipefail

root="$(cd "$(dirname "$0")/../.." && pwd)"
out="$root/public/presse"
work="$(mktemp -d)"
trap 'rm -rf "$work"' EXIT

node "$root/tools/presskit/export.mjs" "$work"
python3 "$root/tools/presskit/fonts.py" "$root" "$work/fonts"

for lang in de en; do
    name=$([ "$lang" = de ] && echo vode-pressekit-de || echo vode-presskit-en)
    typst compile --root / --font-path "$work/fonts" --ignore-system-fonts \
        --input lang="$lang" --input data="$work/data.json" --input repo="$root" \
        "$root/tools/presskit/presskit.typ" "$out/$name.pdf"
    echo "$out/$name.pdf"
done

# Download package: PDFs, print-resolution photos, logos and plain texts.
pkg="$work/vode-pressekit"
mkdir -p "$pkg/fotos" "$pkg/logos"
cp "$out/vode-pressekit-de.pdf" "$out/vode-presskit-en.pdf" "$pkg/"
find "$out/fotos" -name '*.jpg' ! -name '*_vorschau.jpg' -exec cp {} "$pkg/fotos/" \;
cp "$out/logos/"* "$pkg/logos/"
cp -r "$work/texte" "$pkg/"
rm -f "$out/vode-pressekit.zip"
(cd "$work" && zip -qr -X "$out/vode-pressekit.zip" vode-pressekit)
echo "$out/vode-pressekit.zip"
