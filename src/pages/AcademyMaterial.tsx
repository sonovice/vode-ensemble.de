import { type Component, For } from "solid-js";
import { useI18n } from "../i18n";
import "../styles/academy.css";

const materials = [
    { id: "cloudy-day", title: "Cloudy Day", description: "cloudy", video: "uq88tT1HozU", file: "Cloudy Day - vode academy 2025.pdf" },
    { id: "quodlibet-lion", title: "Quodlibet Lion", description: "lion", video: "wvnHlf83Oz8", file: "Quodlibet Lion - vode academy 2025.pdf" },
    { id: "the-voice-inside", title: "The Voice Inside", description: "voice", video: "P-acKt7PhW8", file: "The Voice Inside - vode academy 2025.pdf" },
];

const AcademyMaterial: Component = () => {
    const { t } = useI18n();
    return (
        <main class="academy-surface min-h-screen">
            <section id="material" class="academy-section">
                <div class="container mx-auto px-4">
                    <a href="/academy" class="academy-text-link academy-back-link">{t('academyPage.backToAcademy')}</a>
                    <h1 class="academy-heading">{t('academyPage.materialTitle')}</h1>
                    <p class="academy-copy text-lg">{t('academyPage.materialNote')}</p>
                    <div class="academy-material-list">
                        <For each={materials}>{piece => (
                            <article id={piece.id} class="academy-material">
                                <iframe src={`https://www.youtube.com/embed/${piece.video}?enablejsapi=1`} title={`${piece.title} – Tutorial`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
                                <div class="academy-material-body">
                                    <h2>{piece.title}</h2>
                                    <p class="academy-copy">{t(`academyPage.${piece.description}`)}</p>
                                    <div class="academy-material-actions">
                                        <a class="academy-button" href={`/material/${encodeURIComponent(piece.file)}`} target="_blank" rel="noopener noreferrer" aria-label={`${t('academyPage.pdf')}: ${piece.title}`}>{t('academyPage.pdf')}</a>
                                        <a class="academy-text-link" href={`/academy/material#${piece.id}`} aria-label={`${t('academyPage.pieceLink')}: ${piece.title}`}>{t('academyPage.pieceLink')}</a>
                                    </div>
                                </div>
                            </article>
                        )}</For>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default AcademyMaterial;
