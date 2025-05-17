import { type Component } from "solid-js";
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
                    <p class="mt-6 pt-4 text-gray-300 text-center text-xl font-semibold">
                        {t('support.closingParagraph', {}, 'Danke, dass durch eure finanziellen Beiträge Kultur ermöglicht wird und wir so gemeinsam musikalische Begegnungen schaffen können!')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Support; 