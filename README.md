# vode-ensemble.de

Website of the vocal ensemble vode (vode e.V.), built with [SolidJS](https://solidjs.com), Vite and Tailwind CSS.

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # writes dist/
npm run serve    # serves dist/ locally, like GitHub Pages
```

Pushes to `main` are deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## Where things live

| What | Where |
| --- | --- |
| Texts (German and English) | `src/i18n/de.ts`, `src/i18n/en.ts` |
| Concerts | `concerts` in `src/sections/Konzerte.tsx`; a `tickets` URL shows a button while the concert is upcoming |
| Members and directors | `src/sections/Ensemble.tsx`, portraits in `public/images/portraits` |
| Recordings and videos | `src/sections/Media.tsx`, audio in `public/audio` |
| Academy films | `src/data/films.ts` |
| Academy scores and tutorials | `src/pages/AcademyMaterial.tsx`, PDFs in `public/material` |
| Press kit | `src/data/pressKit.ts`, see `tools/presskit/README.md` |
| Routes | `src/App.tsx` |
| Page titles, descriptions, share images | `src/data/pages.ts` |
| Privacy policy and legal notice | `src/pages/Impressum.tsx` |

## Adding a page

Add the route in `src/App.tsx` and an entry in `src/data/pages.ts`. The build writes one HTML file per entry (`tools/page-meta.ts`), so GitHub Pages answers the page with status 200 and its own title and share preview, and the page is added to `sitemap.xml` unless `sitemap` is `false`.

## YouTube videos

Embed videos with `src/components/YouTubeEmbed.tsx`. It shows a local poster and only loads the player from youtube-nocookie.com after a click, as the privacy policy describes. Put the poster at `public/images/video/<id>.jpg`, for example a copy of `https://i.ytimg.com/vi/<id>/maxresdefault.jpg`.

## Tools

- `tools/presskit` builds the press kit PDFs and ZIP.
- `tools/youtube-thumbnail` renders YouTube thumbnails in the site's look.
