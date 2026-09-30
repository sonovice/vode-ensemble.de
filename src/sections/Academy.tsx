import { type Component } from "solid-js";
import { useI18n } from "../i18n";
import AcademyFilm from "../components/AcademyFilm";
import "../styles/academy.css";

const Academy: Component = () => {
    const { t } = useI18n();
    return (
        <section id="academy" class="academy-surface academy-section">
            <div class="container mx-auto px-4 academy-intro-grid">
                <div>
                    <h2 class="academy-display">{t('academy.title')}</h2>
                    <p class="academy-lead">{t('academyPage.homeIntro')}</p>
                    <div class="academy-actions">
                        <a href="/academy" class="academy-button">{t('academy.learnMore')}</a>
                        <a href="/academy/material" class="academy-button academy-button-secondary">{t('academyPage.toMaterial')}</a>
                    </div>
                </div>
                <AcademyFilm kind="teaser" sizes="(min-width: 768px) 45vw, 100vw" caption />
            </div>
        </section>
    );
};

export default Academy;
