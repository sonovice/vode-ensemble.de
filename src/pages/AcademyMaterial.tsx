import { type Component, For, Show, createSignal, onMount } from "solid-js";
import { useI18n } from "../i18n";
import { youtubeEmbedUrl } from "../components/YouTubeEmbed";
import "../styles/academy.css";

// The material is a growing pool used across workshops, so it is organised by
// category rather than by project. Anchors (`id`) and file names are shared
// publicly; keep them stable.
type Score = { file: string; pages: number; versionKey?: string };
type Piece = {
    id: string;
    key: string;
    title: string;
    credit: string;
    tutorial?: string;
    scores: Score[];
    usedIn?: { name: string; href: string };
};

const chorMachtSchule = { name: "Chor macht Schule 2025", href: "/academy-2025" };

const categories: { key: string; pieces: Piece[] }[] = [
    {
        key: "rounds",
        pieces: [
            { id: "cloudy-day", key: "cloudyDay", title: "Cloudy Day", credit: "vode academy / Katharina Gärtner", tutorial: "uq88tT1HozU", scores: [{ file: "Cloudy Day - vode academy 2025.pdf", pages: 1 }], usedIn: chorMachtSchule },
            { id: "the-voice-inside", key: "voiceInside", title: "The Voice Inside", credit: "vode academy / Katharina Gärtner", tutorial: "P-acKt7PhW8", scores: [{ file: "The Voice Inside - vode academy 2025.pdf", pages: 1 }], usedIn: chorMachtSchule },
            { id: "quodlibet-lion", key: "lion", title: "Quodlibet Lion", credit: "Saint Mesa / Manuel Grunden / Felicitas Ammer / Aurora", tutorial: "wvnHlf83Oz8", scores: [{ file: "Quodlibet Lion - vode academy 2025.pdf", pages: 1 }], usedIn: chorMachtSchule },
        ],
    },
    {
        key: "songs",
        pieces: [
            { id: "lovely-day", key: "lovelyDay", title: "Lovely Day", credit: "vode academy / Katharina Gärtner", scores: [{ file: "Lovely Day - vode academy.pdf", pages: 1 }] },
            { id: "on-your-way", key: "onYourWay", title: "On Your Way", credit: "vode academy / Felicitas Ammer", scores: [{ file: "On Your Way - vode academy.pdf", pages: 1 }] },
        ],
    },
    {
        key: "arrangements",
        pieces: [
            {
                id: "whenever-i-sing", key: "wheneverISing", title: "Whenever I sing", credit: "vode academy / Felicitas Ammer",
                scores: [
                    { file: "Whenever I sing - a cappella - vode academy.pdf", pages: 11, versionKey: "aCappella" },
                    { file: "Whenever I sing - SA und Klavier - vode academy.pdf", pages: 5, versionKey: "saPiano" },
                    { file: "Whenever I sing - Klavierstimme - vode academy.pdf", pages: 5, versionKey: "pianoPart" },
                ],
            },
        ],
    },
];

const MaterialPiece: Component<{ piece: Piece }> = (props) => {
    const { t } = useI18n();
    const [showTutorial, setShowTutorial] = createSignal(false);
    const [copied, setCopied] = createSignal(false);
    const text = (field: string) => t(`academyMaterial.pieces.${props.piece.key}.${field}`);
    const pages = (n: number) => `${n} ${t(n === 1 ? 'academyMaterial.page' : 'academyMaterial.pages')}`;

    const share = async (e: MouseEvent) => {
        const url = `${location.origin}/academy/material#${props.piece.id}`;
        if (!navigator.clipboard) return; // the plain anchor still works
        e.preventDefault();
        history.replaceState(null, "", `#${props.piece.id}`);
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const scoreUrl = (score: Score) => `/material/${encodeURIComponent(score.file)}`;

    return (
        <article id={props.piece.id} class="academy-piece">
            <a class="academy-piece-preview" href={scoreUrl(props.piece.scores[0])} target="_blank" rel="noopener noreferrer" tabindex="-1" aria-hidden="true">
                <img src={`/images/material/${props.piece.id}.jpg`} alt="" width="640" height="480" loading="lazy" decoding="async" />
            </a>
            <div class="academy-piece-info">
                <h3>{props.piece.title}</h3>
                <p class="academy-piece-credit">{props.piece.credit}</p>
                <ul class="academy-piece-tags" aria-label={t('academyMaterial.voicing')}>
                    <For each={text('voicing').split(' · ')}>{tag => <li>{tag}</li>}</For>
                </ul>
                <p class="academy-copy">{text('text')}</p>
                <Show when={props.piece.usedIn}>
                    {usedIn => (
                        <p class="academy-piece-used">
                            {t('academyMaterial.usedIn')} <a href={usedIn().href}>{usedIn().name}</a>
                        </p>
                    )}
                </Show>
            </div>
            <div class="academy-piece-actions">
                <For each={props.piece.scores}>{score => (
                    <a class="academy-score" href={scoreUrl(score)} target="_blank" rel="noopener noreferrer">
                        <span class="academy-score-icon" aria-hidden="true">PDF</span>
                        <span>
                            <strong>{score.versionKey ? t(`academyMaterial.versions.${score.versionKey}`) : t('academyMaterial.score')}</strong>
                            <small>{pages(score.pages)}</small>
                        </span>
                    </a>
                )}</For>
                <Show when={props.piece.tutorial}>
                    <button type="button" class="academy-tutorial-button" aria-expanded={showTutorial()} onClick={() => setShowTutorial(!showTutorial())}>
                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={showTutorial() ? "M6 6h12v12H6z" : "M8 5v14l11-7z"} /></svg>
                        {t(showTutorial() ? 'academyMaterial.hideTutorial' : 'academyMaterial.showTutorial')}
                    </button>
                </Show>
                <a class="academy-share-link" href={`#${props.piece.id}`} onClick={share}>
                    {t(copied() ? 'academyMaterial.linkCopied' : 'academyMaterial.shareLink')}
                </a>
            </div>
            <Show when={showTutorial() && props.piece.tutorial}>
                {id => (
                    <div class="academy-piece-tutorial">
                        <iframe
                            src={youtubeEmbedUrl(id())}
                            title={`${props.piece.title} – Tutorial`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        />
                    </div>
                )}
            </Show>
        </article>
    );
};

const AcademyMaterial: Component = () => {
    const { t } = useI18n();

    // The pieces render after the browser's own hash scroll and the router resets
    // the scroll position on navigation, so shared links are resolved a frame later.
    onMount(() => {
        const id = decodeURIComponent(location.hash.slice(1));
        if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    });

    const pieceCount = (n: number) => `${n} ${t(n === 1 ? 'academyMaterial.pieceCountOne' : 'academyMaterial.pieceCount')}`;
    const pieces = categories.flatMap(category => category.pieces);
    const tutorials = pieces.filter(piece => piece.tutorial).length;

    return (
        <main class="academy-surface min-h-screen">
            <header class="academy-material-header">
                <div class="container mx-auto px-4">
                    <a href="/academy" class="academy-text-link academy-back-link">{t('academyPage.backToAcademy')}</a>
                    <h1 class="academy-display">{t('academyPage.materialTitle')}</h1>
                    <p class="academy-lead">{t('academyMaterial.intro')}</p>
                    <ul class="academy-material-facts">
                        <li><strong>{pieces.length}</strong> {t('academyMaterial.pieceCount')}</li>
                        <li><strong>{tutorials}</strong> {t('academyMaterial.tutorialCount')}</li>
                        <li class="academy-material-license">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                            {t('academyMaterial.license')}
                        </li>
                    </ul>
                </div>
            </header>

            <div class="container mx-auto px-4 academy-archive-layout">
                <nav class="academy-tree" aria-label={t('academyMaterial.contents')}>
                    <p class="academy-tree-title">{t('academyMaterial.contents')}</p>
                    <ul>
                        <For each={categories}>{category => (
                            <li>
                                <a href={`#${category.key}`} class="academy-tree-category">
                                    {t(`academyMaterial.categories.${category.key}.title`)}
                                    <span>{category.pieces.length}</span>
                                </a>
                                <ul>
                                    <For each={category.pieces}>{piece => (
                                        <li><a href={`#${piece.id}`}>{piece.title}</a></li>
                                    )}</For>
                                </ul>
                            </li>
                        )}</For>
                    </ul>
                </nav>

                <div>
                    <For each={categories}>{category => (
                        <section id={category.key} class="academy-category" aria-labelledby={`${category.key}-title`}>
                            <header class="academy-category-header">
                                <p class="academy-category-count">{pieceCount(category.pieces.length)}</p>
                                <h2 id={`${category.key}-title`}>{t(`academyMaterial.categories.${category.key}.title`)}</h2>
                                <p class="academy-copy">{t(`academyMaterial.categories.${category.key}.text`)}</p>
                            </header>
                            <div class="academy-piece-list">
                                <For each={category.pieces}>{piece => <MaterialPiece piece={piece} />}</For>
                            </div>
                        </section>
                    )}</For>
                </div>
            </div>
        </main>
    );
};

export default AcademyMaterial;
