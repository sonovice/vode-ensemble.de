import type { Component } from "solid-js";
import { useI18n } from "../i18n";

const Support: Component = () => {
    const { t } = useI18n();

    return (
        <section
            id="support"
            class="py-16 md:py-24 bg-[var(--color-dark-alt)] text-[var(--color-light-text)]"
        >
            <div class="container mx-auto px-4">
                {/* Row 1: Intro Text and Image */}
                <div class="flex flex-col md:flex-row items-start gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16">
                    {/* Column 1.2: Image */}
                    <div class="w-full md:w-5/12">
                        <img
                            src="/images/ensemble_01b.jpg" // Placeholder image for support
                            alt={t('support.imageAlt', {}, 'Unterstützung Impression')}
                            class="rounded-lg shadow-xl w-full h-auto object-cover aspect-video"
                        />
                    </div>
                    {/* Column 1.1: Intro Text */}
                    <div class="w-full md:w-7/12 text-left">
                        <p class="font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                            {t('support.sectionTag', {}, 'Support')}
                        </p>
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[var(--color-light-text)]">
                            {t('support.title', {}, 'Unterstütze uns')}
                        </h1>
                        <p class="text-lg md:text-xl text-gray-300 mb-4">
                            {t('support.introParagraph1', {}, 'Als gemeinnütziger Verein sind wir auf deine Unterstützung angewiesen, um unsere musikalischen Projekte, Konzerte und die Academy weiterzuentwickeln.')}
                        </p>
                        <p class="text-gray-400">
                            {t('support.introParagraph2', {}, 'Jeder Beitrag hilft uns, Probenphasen zu finanzieren, neue Arrangements zu ermöglichen und unsere Reichweite zu vergrößern. Werde Teil der vode-Familie und hilf uns, Klang zu bewegen!')}
                        </p>
                    </div>
                </div>

                {/* Row 2: Cards and Danke message */}
                <div class="w-full">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Card 1: Freunde und Förderer */}
                        <div class="p-6 bg-[var(--color-surface-alt)] rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl ring-1 ring-[var(--color-light-text)]/20">
                            <h3 class="text-2xl font-semibold text-[var(--color-accent)] mb-3">{t('support.friendsTitle', {}, 'Freunde und Förderer')}</h3>
                            <p class="text-gray-300 mb-3">
                                {t('support.friendsParagraph1', {}, 'Werde Teil der vode-community, indem du als förderndes Mitglied dem Verein vode e. V. beitrittst. Mit einem selbst festgelegten regelmäßigen Beitrag kannst du unsere Arbeit unterstützen. Hierdurch hast du Zugang zu unseren Community-Updates, bist hautnah dabei, wie hinter den Kulissen neue Projekt-Ideen gesponnen werden und bekommst Einblicke in unsere Probenarbeit und natürlich weißt du dadurch als erstes über neue Konzerte Bescheid. Diese Form der Unterstützung ermöglicht uns eine langfristige Planung und ist deshalb sehr wertvoll für uns. Eine Abbuchung kann bequem über ein SEPA-Lastschriftmandat erfolgen.')}
                            </p>
                            <p
                                class="text-gray-300"
                                innerHTML={t('support.friendsParagraph2', {}, 'Für weitere Infos hierzu schreib uns unter <a href="mailto:mail@vode–ensemble.de" class="text-[var(--color-accent)] hover:underline">mail@vode–ensemble.de</a>.')}
                            />
                        </div>

                        {/* Card 2: Spenden */}
                        <div class="p-6 bg-[var(--color-surface-alt)] rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl ring-1 ring-[var(--color-light-text)]/20">
                            <h3 class="text-2xl font-semibold text-[var(--color-accent)] mb-3">{t('support.donationsTitle', {}, 'Spenden')}</h3>
                            <p class="text-gray-300 mb-4">
                                {t('support.donationsParagraph1', {}, 'Wenn du uns unterstützen möchtest, dir ein Vereinsbeitritt aber nicht zusagt, freuen wir uns sehr über eine Spende per Überweisung. Als gemeinnütziger Verein stellen wir dir gerne eine Spendenquittung aus.')}
                            </p>
                            <div class="text-gray-300 mt-4">
                                <p class="font-semibold">vode e.V.</p>
                                <p>IBAN: DE45 4765 0130 1010 1647 03</p>
                                <p>Sparkasse Paderborn-Detmold-Höxter</p>
                                <p>{t('support.donationsReferenceLabel', {}, 'Stichwort:')} "{t('support.donationsReferenceValue', {}, 'Spende')}"</p>
                            </div>
                            <div class="mt-6">
                                <a
                                    href="http://paypal.me/vodeensemble"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-opacity-80 transition-colors text-base"
                                >
                                    <svg class="w-5 h-5 mr-2" viewBox="0 0 435.505 435.505" fill="currentColor">
                                        <title>PayPal Logo</title>
                                        <path d="M403.496,101.917c-4.104-5.073-8.877-9.705-14.166-13.839c0.707,13.117-0.508,27.092-3.668,41.884
                                            c-8.627,40.413-29.256,74.754-59.656,99.304c-30.375,24.533-68.305,37.502-109.686,37.502h-60.344l-19.533,91.512
                                            c-3.836,17.959-19.943,30.99-38.303,30.99H70.938l-4.898,22.484c-1.258,5.79,0.17,11.839,3.887,16.453
                                            c3.715,4.614,9.324,7.298,15.25,7.298h66.498c9.24,0,17.225-6.459,19.152-15.495L193.667,313h76.188
                                            c36.854,0,70.527-11.464,97.384-33.152c26.869-21.697,45.129-52.186,52.807-88.162
                                            C427.822,155.309,422.253,125.106,403.496,101.917z"/>
                                        <path d="M117.292,354.191l22.84-107.008h76.188c36.852,0,70.527-11.465,97.383-33.154c26.867-21.697,45.129-52.186,52.809-88.161
                                            c7.773-36.378,2.207-66.58-16.553-89.769C331.952,13.832,301.17,0,269.633,0H103.639c-9.209,0-17.174,6.417-19.135,15.414
                                            L12.505,345.938c-1.26,5.789,0.168,11.838,3.887,16.453c3.713,4.613,9.32,7.296,15.248,7.296h66.5
                                            C107.38,369.687,115.36,363.229,117.292,354.191z M178.235,75.291h52.229c12.287,0,23.274,5.149,30.145,14.129
                                            c7.297,9.539,9.431,22.729,5.853,36.188c-0.047,0.171-0.088,0.342-0.131,0.516c-6.57,27.73-33.892,50.291-60.898,50.291h-50.05
                                            L178.235,75.291z"/>
                                    </svg>
                                    {t('support.paypalButtonText', {}, 'Über PayPal spenden')}
                                </a>
                            </div>
                        </div>

                        {/* Card 3: Sponsoren */}
                        <div class="p-6 bg-[var(--color-surface-alt)] rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl ring-1 ring-[var(--color-light-text)]/20">
                            <h3 class="text-2xl font-semibold text-[var(--color-accent)] mb-3">{t('support.sponsorsTitle', {}, 'Sponsoren')}</h3>
                            <p class="text-gray-300">
                                {t('support.sponsorsParagraph1', {}, 'Um die Wertschätzung sichtbar zu machen, möchten wir auch etwas zurückgeben und uns öffentlich für das kulturelle Engagement bedanken. Dafür werden Sponsor:innen auf Konzertplakaten, Flyern oder Programmheften genannt, indem wir Logos oder Namen platzieren. Darüber hinaus bewerben wir unsere Sponsor:innen auch über unsere digitalen Kanäle.')}
                            </p>
                        </div>
                    </div>

                    {/* Closing Paragraph */}
                    <p class="mt-6 pt-4 text-gray-300 text-center text-xl font-semibold text-balance">
                        {t('support.closingParagraph', {}, 'Danke, dass durch eure finanziellen Beiträge Kultur ermöglicht wird und wir so gemeinsam musikalische Begegnungen schaffen können!')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Support; 