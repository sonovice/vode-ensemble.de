#!/usr/bin/env bash
# Renders a 1280×720 YouTube thumbnail in the vode look (see README.md).
#
#   tools/youtube-thumbnail/render.sh <image> <kicker> <title> <out.jpg> [position] [brightness] [brand]
#
#   image       still or photo, ideally ≥ 1920 px wide; faces in the upper half
#   kicker      short label in the accent pill, e.g. "Der Film"
#   title       main title; use <br> for a line break, e.g. "Chor macht<br>Schule"
#   position    CSS background-position of the photo (default "50% 25%")
#   brightness  photo brightness, 1 = unchanged (default 1); ~1.25 for dark footage
#   brand       text next to the logo (default "academy")
set -euo pipefail

if [ $# -lt 4 ]; then
    sed -n '4,12p' "$0" | sed 's/^# \{0,1\}//'
    exit 1
fi

root="$(cd "$(dirname "$0")/../.." && pwd)"
image="$(cd "$(dirname "$1")" && pwd)/$(basename "$1")"
out="$4"
work="$(mktemp -d)"
trap 'rm -rf "$work"' EXIT

esc() { printf '%s' "$1" | sed 's/[&|\\]/\\&/g'; }
sed -e "s|{{ROOT}}|file://$(esc "$root")|g" \
    -e "s|{{IMAGE}}|file://$(esc "$image")|" \
    -e "s|{{KICKER}}|$(esc "$2")|" \
    -e "s|{{TITLE}}|$(esc "$3")|" \
    -e "s|{{POSITION}}|$(esc "${5:-50% 25%}")|" \
    -e "s|{{BRIGHTNESS}}|$(esc "${6:-1}")|" \
    -e "s|{{BRAND}}|$(esc "${7:-academy}")|" \
    "$(dirname "$0")/template.html" > "$work/thumb.html"

npx -y playwright screenshot --viewport-size=1280,720 --wait-for-timeout=800 "file://$work/thumb.html" "$work/thumb.png" >/dev/null
# YouTube caps thumbnails at 2 MB; a JPEG keeps photos well below that.
sips -s format jpeg -s formatOptions 90 "$work/thumb.png" --out "$out" >/dev/null
echo "$out"
