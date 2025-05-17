import { type Component } from "solid-js";
import { useI18n } from "../i18n";

const Kontakt: Component = () => {
    const { t } = useI18n();

    return (
        <section
            id="kontakt"
            class="py-16 md:py-24 bg-[var(--color-dark)] text-[var(--color-light-text)]"
        >
            <div class="container mx-auto px-4">
                <p class="font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                    {t('contact.sectionTag', {}, 'Kontakt')}
                </p>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[var(--color-light-text)]">
                    {t('contact.title', {}, 'So kannst du uns erreichen')}
                </h1>

                <div class="md:flex md:space-x-12 lg:space-x-16 mt-12">
                    <div class="md:w-1/2">
                        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-light-text)]">
                            {t('contact.subtitle1', {}, 'Bleib informiert')}
                        </h2>
                        <p
                            class="text-lg text-[var(--color-light-text)]/80 mb-4"
                            innerHTML={t('contact.paragraph1', {}, 'Möchtest du regelmäßig über unsere Musik und Auftritte erfahren? Hier kannst du dich für unseren Newsletter anmelden oder uns auf <a href="#media" class="text-[var(--color-accent)] hover:underline">Social Media</a> folgen.')}
                        />
                        <a
                            href="https://pm.us13.list-manage.com/subscribe?u=88da1d474c715e33ded59c5d2&id=7b07f806b1"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center px-6 py-3 mb-4 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-opacity-80 transition-colors text-base"
                        >
                            {t('contact.newsletterButton', {}, 'Zum Newsletter')}
                        </a>
                        <p
                            class="text-lg text-[var(--color-light-text)]/80 mb-4"
                            innerHTML={t('contact.paragraph2', {}, "Und wenn's noch etwas mehr sein darf und du mit exklusiven Einblicken, Backstage-News und der Möglichkeit, uns aktiv zu unterstützen dabei sein möchtest, dann kommst du hier zu unseren <a href=\"#support\" class=\"text-[var(--color-accent)] hover:underline\">Community-Updates</a>.")}
                        />
                    </div>

                    <div class="md:w-1/2 mt-12 md:mt-0">
                        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-light-text)]">
                            {t('contact.subtitle2', {}, 'Booking & Anfragen')}
                        </h2>
                        <p
                            class="text-lg text-[var(--color-light-text)]/80 mb-4"
                            innerHTML={t('contact.paragraph3', {}, 'Für Buchungsanfragen oder sonstige Anliegen erreichst du Maria Waloschek und Felicitas Ammer über <a href="mailto:mail@vode-ensemble.de" class="text-[var(--color-accent)] hover:underline">mail@vode-ensemble.de</a>.')}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Kontakt;