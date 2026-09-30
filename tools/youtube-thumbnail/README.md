# YouTube thumbnails

Renders 1280×720 thumbnails in the website's look: photo with a dark gradient, vode logo with a label, an accent pill and a large Nanospaceland title. Fonts and logo come from the repo, so the output matches the site.

Requires macOS (`sips`), Node and `npm install` (for the Space Grotesk font). Playwright is fetched through `npx` on first use.

```sh
tools/youtube-thumbnail/render.sh <image> <kicker> <title> <out.jpg> [position] [brightness] [brand]
```

## Getting a still from a video

```sh
ffmpeg -ss 7.6 -i video.mp4 -frames:v 1 -vf scale=1920:-1 -q:v 2 still.jpg
```

Pick a frame with faces in the upper half; the title sits bottom left and the bottom-right corner stays free for YouTube's duration badge.

## Examples (Chor macht Schule, September 2026)

```sh
tools/youtube-thumbnail/render.sh still-best-of.jpg "Best of Workshops" "Chor macht<br>Schule" best-of-workshops.jpg "50% 20%"
tools/youtube-thumbnail/render.sh still-film.jpg "Der Film" "Chor macht<br>Schule" der-film.jpg "50% 25%" 1.25
```

The stills came from `chormachtschule_bestofworkshops_v03.mp4` at 7.6 s and `chormachtschule_derfilmv03.mp4` at 420.3 s.
