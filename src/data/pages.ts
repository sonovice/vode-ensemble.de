// Title, description and share image of every route, in both languages.
// vite.config.ts writes one HTML file per route with these tags (so links to
// subpages are not answered with GitHub Pages' 404 status and get their own
// preview when shared), and components/Layout.tsx keeps them up to date while
// the visitor navigates or switches the language. App.tsx holds the routes.

// Explicit extension: vite.config.ts loads this file with Node.
import type { Locale } from "../i18n/config.ts";

export const siteUrl = "https://www.vode-ensemble.de";

type PageMeta = {
    title: Record<Locale, string>;
    description: Record<Locale, string>;
    // Share preview, 1200 × 630 or larger.
    image: string;
    // Listed in sitemap.xml.
    sitemap: boolean;
};

const ensembleImage = "/images/ensemble/action_06.jpg";
const academyImage = "/images/academy/hero-1200.jpg";

export const pages: Record<string, PageMeta> = {
    "/": {
        title: { de: "vode – Vokalensemble für Vocal Jazz & Pop", en: "vode – vocal ensemble for vocal jazz & pop" },
        description: {
            de: "vode ist ein Vokalensemble mit rund 20 Sänger:innen zwischen Jazz, Pop und zeitgenössischer Vokalmusik. Konzerte, Aufnahmen, Booking und die vode academy.",
            en: "vode is a vocal ensemble of around 20 singers moving between jazz, pop and contemporary vocal music. Concerts, recordings, booking and the vode academy.",
        },
        image: ensembleImage,
        sitemap: true,
    },
    "/academy": {
        title: { de: "vode academy – Workshops und Chorprojekte mit vode", en: "vode academy – workshops and choir projects with vode" },
        description: {
            de: "Mit der vode academy holen Chöre und Schulen unser Ensemble in ihre Proben: Coachings, Stimmgruppenarbeit, gemeinsame Chorprojekte und Fortbildungen.",
            en: "With the vode academy, choirs and schools bring our ensemble into their rehearsals: coaching, section work, joint choir projects and training.",
        },
        image: academyImage,
        sitemap: true,
    },
    "/academy/material": {
        title: { de: "Noten & Tutorials – vode academy", en: "Scores & tutorials – vode academy" },
        description: {
            de: "Kanons, Songs und Chorsätze aus den Workshops der vode academy – mit Noten zum Herunterladen und Video-Tutorials. Kopieren und Aufführen ausdrücklich erlaubt.",
            en: "Rounds, songs and choral arrangements from vode academy workshops, with downloadable scores and video tutorials. Free to copy and perform.",
        },
        image: academyImage,
        sitemap: true,
    },
    "/academy-2025": {
        title: { de: "vode academy 2025: Chor macht Schule", en: "vode academy 2025: Chor macht Schule" },
        description: {
            de: "Rückblick auf die vode academy 2025 in St. Ida in Herzfeld: ein Wochenende mit Workshops und Abschlusskonzert für Jugendliche aus Schulchören.",
            en: "Looking back at the vode academy 2025 in St. Ida, Herzfeld: a weekend of workshops and a final concert for young singers from school choirs.",
        },
        image: academyImage,
        sitemap: true,
    },
    "/presse": {
        title: { de: "Pressekit – vode", en: "Press kit – vode" },
        description: {
            de: "Pressetexte in drei Längen, druckfähige Fotos, Logos und das Pressekit von vode als PDF.",
            en: "Press texts in three lengths, print-ready photos, logos and the vode press kit as PDF.",
        },
        image: ensembleImage,
        sitemap: true,
    },
    "/impressum": {
        title: { de: "Impressum & Datenschutz – vode", en: "Legal notice & privacy – vode" },
        description: {
            de: "Impressum und Datenschutzerklärung des vode e.V.",
            en: "Legal notice and privacy policy of vode e.V.",
        },
        image: ensembleImage,
        sitemap: true,
    },
    "/adventskalender": {
        title: { de: "Adventsgruß von vode", en: "Advent greetings from vode" },
        description: {
            de: "Herzliche Adventsgrüße von vode – mit unserem Song „Human Heart“.",
            en: "Warm Advent greetings from vode – with our song “Human Heart”.",
        },
        image: "/images/media/human_heart_cover.jpg",
        sitemap: false,
    },
};

// Unknown paths render the home page (see App.tsx).
export const pageMeta = (path: string): PageMeta =>
    pages[path.replace(/(.)\/+$/, "$1")] ?? pages["/"];
