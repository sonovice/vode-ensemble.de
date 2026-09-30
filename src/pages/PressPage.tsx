import { type Component, For, Show, createSignal } from "solid-js";
import { useI18n } from "../i18n";
import { type PressLocale, plainText, pressContact, pressDownloads, pressKit, pressLogos, pressPhotos, pressVideos } from "../data/pressKit";
import "../styles/press.css";

type TextKey = "short" | "standard" | "long";

const photoUrl = (file: string, preview = false) => `/presse/fotos/${file}${preview ? "_vorschau" : ""}.jpg`;
const photoRows = [...new Set(pressPhotos.map(p => p.row))].map(row => pressPhotos.filter(p => p.row === row));

const PressPage: Component = () => {
    const { locale } = useI18n();
    const lang = (): PressLocale => (locale() === "en" ? "en" : "de");
    const k = () => pressKit[lang()];
    const [textKey, setTextKey] = createSignal<TextKey>("standard");
    const [copied, setCopied] = createSignal(false);
    const text = () => plainText(k()[textKey()]);
    const videos = () => pressVideos.filter(v => !v.releaseAt || Date.now() >= v.releaseAt.getTime());

    const copy = async () => {
        await navigator.clipboard.writeText(text());
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <main class="press min-h-screen">
            <header class="press-header">
                <div class="container mx-auto px-4">
                    <p class="press-kicker">vode · {k().tagline}</p>
                    <h1>{k().title}</h1>
                    <p class="press-lead">{k().intro}</p>
                    <div class="press-actions">
                        <a class="press-button" href={pressDownloads.pdf[lang()]} download="">{k().downloadPdf}</a>
                        <a class="press-button press-button-secondary" href={pressDownloads.zip} download="">{k().downloadZip}</a>
                        <a class="press-link" href={pressDownloads.pdf[lang() === "de" ? "en" : "de"]} download="">{k().otherPdf}</a>
                    </div>
                    <dl class="press-facts">
                        <For each={k().facts}>{([term, value]) => <div><dt>{term}</dt><dd>{value}</dd></div>}</For>
                    </dl>
                </div>
            </header>

            <section class="press-section" id="texte">
                <div class="container mx-auto px-4">
                    <h2>{k().texts.title}</h2>
                    <p class="press-copy">{k().texts.intro}</p>
                    <div class="press-texts">
                        <div class="press-tabs" role="tablist">
                            <For each={["short", "standard", "long"] as TextKey[]}>{key => (
                                <button type="button" role="tab" aria-selected={textKey() === key} onClick={() => setTextKey(key)}>
                                    {k().texts[key]}
                                    <small>{plainText(k()[key]).length} {k().texts.chars}</small>
                                </button>
                            )}</For>
                        </div>
                        <div class="press-text" role="tabpanel">
                            <For each={k()[textKey()]}>{p => <p>{p}</p>}</For>
                            <button type="button" class="press-button press-button-secondary" onClick={copy}>
                                {copied() ? k().texts.copied : k().texts.copy}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="press-section press-section-alt" id="fotos">
                <div class="container mx-auto px-4">
                    <h2>{k().photosTitle}</h2>
                    <p class="press-copy">{k().photosIntro}</p>
                    <div class="press-photos">
                        <For each={photoRows}>{row => (
                            <ul class="press-photo-row">
                                <For each={row}>{p => (
                                    // Tiles grow with the photo's aspect ratio, so a row has one height
                                    // and portrait shots stay recognisably upright.
                                    <li class="press-photo" style={{ "--ratio": String(p.width / p.height) }}>
                                        <a href={photoUrl(p.file)} download="">
                                            <img src={photoUrl(p.file, true)} alt={`${k().photoCredit}: ${p.credit}`} width={p.width} height={p.height} loading="lazy" decoding="async" />
                                        </a>
                                        <p>
                                            <span>{k().photoCredit}: {p.credit}</span>
                                            <span><strong>{p.height > p.width ? k().portrait : k().landscape}</strong> · {p.width} × {p.height} px</span>
                                        </p>
                                        <a class="press-link" href={photoUrl(p.file)} download="">{k().download}</a>
                                    </li>
                                )}</For>
                            </ul>
                        )}</For>
                    </div>

                    <h2 class="press-subsection">{k().logosTitle}</h2>
                    <p class="press-copy">{k().logosIntro}</p>
                    <ul class="press-logos">
                        <For each={pressLogos}>{logo => (
                            <li>
                                <div class={`press-logo press-logo-${logo.tone}`}>
                                    <img src={`/presse/logos/${logo.file}.svg`} alt="vode" />
                                </div>
                                <p>{logo.tone === "light" ? k().logoLight : k().logoDark}</p>
                                <a class="press-link" href={`/presse/logos/${logo.file}.svg`} download="">SVG</a>
                                <a class="press-link" href={`/presse/logos/${logo.file}.png`} download="">PNG</a>
                            </li>
                        )}</For>
                    </ul>
                </div>
            </section>

            <section class="press-section" id="leitung">
                <div class="container mx-auto px-4">
                    <h2>{k().leadershipTitle}</h2>
                    <div class="press-leadership">
                        <img src={photoUrl("vode-leitung-gaertner-herten_foto-dominik-moos", true)} alt="Simon Herten, Katharina Gärtner" loading="lazy" />
                        <For each={k().leadership}>{person => (
                            <article>
                                <h3>{person.name}</h3>
                                <p class="press-role">{person.role}</p>
                                <p class="press-copy">{person.text}</p>
                            </article>
                        )}</For>
                    </div>
                </div>
            </section>

            <section class="press-section press-section-alt" id="programme">
                <div class="container mx-auto px-4">
                    <h2>{k().programmesTitle}</h2>
                    <p class="press-copy">{k().programmesIntro}</p>
                    <div class="press-programmes">
                        <For each={k().programmes}>{programme => (
                            <article>
                                <p class="press-role">{programme.note}</p>
                                <h3>{programme.title}</h3>
                                <p class="press-copy">{programme.text}</p>
                            </article>
                        )}</For>
                    </div>
                </div>
            </section>

            <section class="press-section" id="kontakt-presse">
                <div class="container mx-auto px-4 press-closing">
                    <div>
                        <h2>{k().highlightsTitle}</h2>
                        <ol class="press-timeline">
                            <For each={k().highlights}>{([year, event]) => <li><span>{year}</span>{event}</li>}</For>
                        </ol>
                    </div>
                    <div>
                        <h2>{k().academyTitle}</h2>
                        <p class="press-copy">{k().academy[1]}</p>
                        <a class="press-link" href="/academy">{k().academyLink}</a>

                        <h2 class="press-subsection">{k().videosTitle}</h2>
                        <ul class="press-videos">
                            <For each={videos()}>{v => (
                                <li><a class="press-link" href={`https://youtu.be/${v.id}`} target="_blank" rel="noopener noreferrer">{v.title}</a></li>
                            )}</For>
                        </ul>
                    </div>
                    <div class="press-contact">
                        <h2>{k().contactTitle}</h2>
                        <p class="press-copy">{k().contactText} <a href={`mailto:${pressContact.email}`}>{pressContact.email}</a>.</p>
                        <a class="press-button" href={`mailto:${pressContact.email}`}>{pressContact.email}</a>
                        <h3>{k().technicalTitle}</h3>
                        <p class="press-copy">{k().technical}</p>
                        <Show when={lang() === "de"}>
                            <p class="press-small">vode e.V. · Bielefeld</p>
                        </Show>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PressPage;
