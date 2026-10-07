import { type Component, For, Show } from "solid-js";
import { useI18n } from "../i18n";
import AcademyFilm from "../components/AcademyFilm";
import AcademyStill from "../components/AcademyStill";
import "../styles/academy.css";

// The notice disappears on its own after the event.
const appearance = {
    url: "https://www.chor.com/veranstaltung/vode-academy-das-chor-macht-schule-projekt",
    endsAt: new Date("2026-10-03T18:00:00+02:00"),
};

const formats = [
    { key: "expert", label: "vode:expert" },
    { key: "collective", label: "vode:collective" },
    { key: "intensiv", label: "vode:intensiv" },
    { key: "talks" },
];

// Project names are proper nouns; descriptive titles are translated.
const pastProjects: { year: number; name?: string; titleKey?: string; noteKey?: string; href?: string }[] = [
    { year: 2026, titleKey: "marienmuenster", noteKey: "marienmuensterFunding", href: "https://www.radiohochstift.de/service/veranstaltungstipps/122148.html" },
    { year: 2025, name: "Chor macht Schule", href: "/academy-2025" },
    { year: 2023, titleKey: "vechta", href: "https://www.mynewsdesk.com/de/universitaet-vechta/pressreleases/konzerte-musikstudierende-der-uni-vechta-treten-bei-aussergewoehnlichen-kooperationsprojekten-auf-3239461" },
];

const AcademyPage: Component = () => {
    const { t } = useI18n();
    const projectTitle = (project: typeof pastProjects[number]) => project.name ?? t(`academyPage.${project.titleKey}`);
    return (
        <main class="academy-surface min-h-screen">
            <section class="academy-hero">
                <AcademyStill class="academy-hero-image" name="hero" widths={[1200, 2400]} sizes="100vw" alt={t('academyPage.heroImageAlt')} eager />
                <div class="container mx-auto px-4 academy-hero-content">
                    <h1 class="academy-display">{t('academyPage.title')}</h1>
                    <p class="academy-claim">{t('academyPage.claim')}</p>
                    <p class="academy-lead">{t('academyPage.intro')}</p>
                    <div class="academy-actions">
                        <a class="academy-button" href="#angebote">{t('academyPage.planProject')}</a>
                        <a class="academy-button academy-button-secondary" href="/academy/material">{t('academyPage.materialTitle')}</a>
                    </div>
                </div>
            </section>

            <Show when={new Date() < appearance.endsAt}>
                <aside class="container mx-auto px-4">
                    <p class="academy-appearance">
                        <strong>{t('academyPage.appearanceDate')}</strong>
                        <span>{t('academyPage.appearanceText')}</span>
                        <a href={appearance.url} target="_blank" rel="noopener noreferrer" class="academy-text-link">{t('academyPage.appearanceLink')}</a>
                    </p>
                </aside>
            </Show>

            <section id="motivation" class="academy-section">
                <div class="container mx-auto px-4 academy-motivation">
                    <div>
                        <h2 class="academy-heading">{t('academyPage.motivationTitle')}</h2>
                        <div class="academy-copy academy-prose">
                            <p>{t('academyPage.motivationText')}</p>
                            <p>{t('academyPage.audienceText')}</p>
                        </div>
                        <a href="/#media" class="academy-text-link">{t('academyPage.hearEnsemble')}</a>
                    </div>
                    <div class="academy-collage">
                        <AcademyStill name="motivation-singing" sizes="(min-width: 768px) 45vw, 100vw" alt={t('academyPage.motivationSingingAlt')} />
                        <AcademyStill name="motivation-ukulele" sizes="(min-width: 768px) 25vw, 60vw" alt={t('academyPage.motivationUkuleleAlt')} />
                    </div>
                </div>
                <div class="container mx-auto px-4">
                    <figure class="academy-quote">
                        <blockquote>{t('academyPage.participantQuote')}</blockquote>
                        <figcaption>{t('academyPage.participantQuoteSource')}</figcaption>
                    </figure>
                    <aside class="academy-radio" aria-label={t('academyPage.radioTitle')}>
                        <img src="/audio/dlf-kultur_2025-11-11.png" alt={t('academy.audioCoverAlt')} loading="lazy" width="768" height="768" />
                        <div>
                            <h3>{t('academyPage.radioTitle')}</h3>
                            <p class="academy-copy">
                                <a href="https://www.deutschlandfunkkultur.de/chor-der-woche-100.html" target="_blank" rel="noopener noreferrer" class="academy-text-link">Deutschlandfunk Kultur · {t('academy.audioSubtitleLinkText')}</a>
                                {t('academy.audioSubtitlePostLink')}
                            </p>
                        </div>
                        <audio preload="none" controls aria-label={t('academy.audioTitle')}>
                            <source src="/audio/dlf-kultur_2025-11-11.mp3" type="audio/mpeg" />
                            {t('academy.audioFallback')}
                        </audio>
                    </aside>
                </div>
            </section>

            <section id="film" class="academy-section academy-section-alt">
                <div class="container mx-auto px-4 academy-film-feature">
                    <AcademyFilm kind="documentary" sizes="(min-width: 768px) 60vw, 100vw" />
                    <div>
                        <h2 class="academy-heading">{t('academyPage.documentary')}</h2>
                        <p class="academy-film-context">{t('academyPage.filmContext')}</p>
                        <p class="academy-copy">{t('academyPage.filmText')}</p>
                    </div>
                </div>
            </section>

            <section id="angebote" class="academy-section">
                <div class="container mx-auto px-4">
                    <h2 class="academy-heading">{t('academyPage.offerTitle')}</h2>
                    <p class="academy-copy text-lg">{t('academyPage.offerIntro')}</p>
                    <div class="academy-formats">
                        <For each={formats}>{format => (
                            <article class="academy-format">
                                <AcademyStill name={`format-${format.key}`} sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" alt={t(`academyPage.${format.key}ImageAlt`)} />
                                <div class="academy-format-body">
                                    <h3>{t(`academyPage.${format.key}Title`)}</h3>
                                    <Show when={format.label}>
                                        <p class="academy-format-name">{format.label}</p>
                                    </Show>
                                    <p class="academy-copy">{t(`academyPage.${format.key}`)}</p>
                                </div>
                            </article>
                        )}</For>
                    </div>
                    <div class="academy-contact">
                        <div>
                            <h3>{t('academyPage.contact')}</h3>
                            <p class="academy-copy">{t('academyPage.contactShort')}</p>
                        </div>
                        <a class="academy-button" href="mailto:mail@vode-ensemble.de">{t('academyPage.contactButton')}</a>
                    </div>
                </div>
            </section>

            <section id="projekte" class="academy-section">
                <div class="container mx-auto px-4 academy-archive-row">
                    <h2>{t('academy.pastProjectsTitle')}</h2>
                    <ul class="academy-archive">
                        <For each={pastProjects}>{project => (
                            <li>
                                <span>{project.year}</span>
                                <div>
                                    <Show when={project.href} fallback={projectTitle(project)}>
                                        {href => (
                                            <a href={href()} {...(href().startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                                                {projectTitle(project)}
                                            </a>
                                        )}
                                    </Show>
                                    <Show when={project.noteKey}>
                                        {noteKey => <p class="academy-archive-note">{t(`academyPage.${noteKey()}`)}</p>}
                                    </Show>
                                </div>
                            </li>
                        )}</For>
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default AcademyPage;
