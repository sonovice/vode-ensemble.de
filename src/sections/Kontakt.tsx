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
                        <div class="flex flex-wrap gap-4 mb-4">
                            <a
                                href="https://pm.us13.list-manage.com/subscribe?u=88da1d474c715e33ded59c5d2&id=7b07f806b1"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-opacity-80 transition-colors text-base"
                                aria-label={t('contact.newsletterAriaLabel', {}, 'Melde dich für unseren Newsletter an')}
                            >
                                {t('contact.newsletterButton', {}, 'Zum Newsletter')}
                            </a>
                            <a href="https://www.instagram.com/vode.ensemble" target="_blank" rel="noopener noreferrer" aria-label={t('media.instagramAriaLabel', {}, 'Vode Ensemble auf Instagram')} class="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-opacity-80 transition-colors text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 mr-2" fill="currentColor">
                                    <title>{t('media.instagramTitle', {}, 'Instagram Logo')}</title>
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                                Instagram
                            </a>
                            <a href="https://www.facebook.com/vode.ensemble/" target="_blank" rel="noopener noreferrer" aria-label={t('media.facebookAriaLabel', {}, 'Vode Ensemble auf Facebook')} class="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-opacity-80 transition-colors text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-5 h-5 mr-2" fill="currentColor">
                                    <title>{t('media.facebookTitle', {}, 'Facebook Logo')}</title>
                                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                </svg>
                                Facebook
                            </a>
                        </div>
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