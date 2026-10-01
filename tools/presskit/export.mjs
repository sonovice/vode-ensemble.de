// Writes the press kit data from src/data/pressKit.ts as JSON for Typst, and the
// ensemble texts as plain-text files for the download package.
//   node tools/presskit/export.mjs <out-dir>
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { plainText, pressContact, pressKit, pressLogos, pressPhotos, pressVideos } from "../../src/data/pressKit.ts";

const out = process.argv[2];
if (!out) throw new Error("usage: node tools/presskit/export.mjs <out-dir>");
mkdirSync(join(out, "texte"), { recursive: true });

const texts = Object.fromEntries(Object.entries(pressKit).map(([lang, k]) => [lang, {
    ...k,
    shortChars: plainText(k.short).length,
    standardChars: plainText(k.standard).length,
    longChars: plainText(k.long).length,
}]));

writeFileSync(join(out, "data.json"), JSON.stringify({
    year: new Date().getFullYear(),
    texts,
    photos: pressPhotos,
    logos: pressLogos,
    // The kit lists films before their release; only the website waits for `releaseAt`.
    videos: pressVideos.map(({ id, title }) => ({ id, title })),
    contact: pressContact,
}, null, 2));

for (const [lang, k] of Object.entries(pressKit)) {
    const section = (title, paragraphs) => `${title}\n${"=".repeat(title.length)}\n\n${plainText(paragraphs)}\n`;
    const leadership = k.leadership.map(p => section(`${p.name} (${p.role})`, [p.text])).join("\n");
    writeFileSync(join(out, "texte", `vode-pressetexte-${lang}.txt`), [
        section(k.texts.short, k.short),
        section(k.texts.standard, k.standard),
        section(k.texts.long, k.long),
        leadership,
        section(k.academyTitle, k.academy),
        `${k.contactTitle}\n${"=".repeat(k.contactTitle.length)}\n\n${pressContact.name} · ${pressContact.email} · ${pressContact.website}\n`,
    ].join("\n"));
}
