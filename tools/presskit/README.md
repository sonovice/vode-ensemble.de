# Press kit

`/presse` on the website and the downloads in `public/presse` share one source: `src/data/pressKit.ts` (texts in German and English, photo, logo and video lists, contact).

After changing that file, a photo or a logo, rebuild the downloads:

```sh
tools/presskit/build.sh
```

This writes

- `public/presse/vode-pressekit-de.pdf` and `vode-presskit-en.pdf`, typeset with Typst from `presskit.typ`,
- `public/presse/vode-pressekit.zip` with both PDFs, the print-resolution photos, the logos and the texts as `.txt`.

Requirements: `typst`, `python3` with `fonttools` and `brotli`, Node 23 or newer, and `npm install` (for the Space Grotesk font). The script converts the website fonts for Typst on each run, so no font files live in the repo.

## Assets

- Photos: `public/presse/fotos/<name>.jpg` (long edge 4000 px, 300 dpi) and `<name>_vorschau.jpg` (1200 px). Originals are in `raw/pr/Pressefotos` (not versioned). Add new photos to `pressPhotos` in `pressKit.ts`.
- Logos: `public/presse/logos/vode-logo-hell|dunkel.svg|png`, derived from `public/images/logo.svg`.
- A film with `releaseAt` appears on the press page once that date has passed. The PDFs list it right away, so keep the video unlisted on YouTube until then.
