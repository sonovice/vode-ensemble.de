import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import type { Plugin } from "vite";
import { pageMeta, pages, siteUrl } from "../src/data/pages.ts";

// Fills the <!-- page-meta --> block in index.html with the German title,
// description and share tags of a route (src/data/pages.ts), and after the
// build writes one copy of index.html per route, e.g. dist/academy/material.html.
// GitHub Pages serves /academy/material from that file with status 200, where
// it would otherwise answer with 404.html and a 404 status.

const block = /<!-- page-meta -->[\s\S]*?<!-- \/page-meta -->/;

const escape = (value: string) =>
    value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const headFor = (path: string) => {
    const meta = pageMeta(path);
    const title = escape(meta.title.de);
    const description = escape(meta.description.de);
    const url = siteUrl + (path === "/" ? "/" : path);
    return [
        "<!-- page-meta -->",
        `<title>${title}</title>`,
        `<meta name="description" content="${description}" />`,
        `<link rel="canonical" href="${url}" />`,
        `<meta property="og:title" content="${title}" />`,
        `<meta property="og:description" content="${description}" />`,
        `<meta property="og:image" content="${siteUrl}${meta.image}" />`,
        `<meta property="og:url" content="${url}" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:site_name" content="vode" />`,
        `<meta property="og:locale" content="de_DE" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        "<!-- /page-meta -->",
    ].join("\n  ");
};

export const sitemapRoutes = Object.keys(pages).filter(path => path !== "/" && pages[path].sitemap);

export default function pageMetaPlugin(): Plugin {
    let outDir = "dist";
    return {
        name: "vode-page-meta",
        configResolved(config) {
            outDir = config.build.outDir;
        },
        transformIndexHtml: html => html.replace(block, headFor("/")),
        async closeBundle() {
            const index = await readFile(join(outDir, "index.html"), "utf8");
            for (const path of Object.keys(pages)) {
                if (path === "/") continue;
                const file = join(outDir, `${path}.html`);
                await mkdir(dirname(file), { recursive: true });
                await writeFile(file, index.replace(block, headFor(path)));
            }
        },
    };
}
