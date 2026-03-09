import { type Component } from "solid-js";
import { useI18n } from "../i18n";

const AcademyPage: Component = () => {
    const { t } = useI18n();

    return (
        <div class="bg-[var(--color-dark)] text-[var(--color-light-text)] min-h-screen">
            {/* Hero Section */}
            <section class="py-16 md:py-24 bg-[var(--color-dark)]">
                <div class="container mx-auto px-4">
                    <div class="max-w-4xl">
                        <p class="font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                            {t('academyPage.sectionTag', {}, 'Education')}
                        </p>
                        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-[var(--color-light-text)]">
                            {t('academyPage.title', {}, 'vode academy')}
                        </h1>
                        <p class="text-xl md:text-2xl leading-relaxed text-[var(--color-light-text)]/80 mb-6"
                            innerHTML={t('academyPage.heroIntro', {}, '') || ''}>
                        </p>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section class="py-16 md:py-24 bg-[var(--color-dark-alt)]">
                <div class="container mx-auto px-4">
                    <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
                        <div class="w-full lg:w-7/12">
                            <p class="font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                                {t('academyPage.philosophyTag', {}, 'Philosophie')}
                            </p>
                            <h2 class="text-3xl md:text-5xl font-bold mb-8 text-[var(--color-light-text)]">
                                {t('academyPage.philosophyTitle', {}, 'Warum wir das tun')}
                            </h2>
                            <div class="space-y-5">
                                <p class="md:text-lg leading-relaxed text-[var(--color-light-text)]/80"
                                    innerHTML={t('academyPage.philosophyP1', {}, '') || ''}>
                                </p>
                                <p class="md:text-lg leading-relaxed text-[var(--color-light-text)]/80"
                                    innerHTML={t('academyPage.philosophyP2', {}, '') || ''}>
                                </p>
                                <p class="md:text-lg leading-relaxed text-[var(--color-light-text)]/80"
                                    innerHTML={t('academyPage.philosophyP3', {}, '') || ''}>
                                </p>
                            </div>
                        </div>
                        {/* Audio Player Column */}
                        <div class="w-full lg:w-5/12">
                            <div class="bg-[var(--color-surface-alt)] rounded-lg shadow-lg p-6 lg:mt-12">
                                <img
                                    src="/audio/dlf-kultur_2025-11-11.png"
                                    alt={t('academy.audioCoverAlt', {}, "Cover für den Podcast 'Chor der Woche'")}
                                    class="w-full h-auto rounded-md mb-4"
                                />
                                <h3 class="text-xl font-bold text-[var(--color-light-text)] mb-2">
                                    {t('academy.audioTitle', {}, 'Sendungsmitschnitt')}
                                </h3>
                                <p class="text-sm text-[var(--color-light-text)]/70 mb-4">
                                    {t('academy.audioSubtitlePreLink', {}, 'Aus dem Podcast ')}
                                    <a href="https://www.deutschlandfunkkultur.de/chor-der-woche-100.html" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] hover:underline">
                                        {t('academy.audioSubtitleLinkText', {}, '"Chor der Woche"')}
                                    </a>
                                    {t('academy.audioSubtitlePostLink', {}, ' von Nicolas Hansen')}
                                </p>
                                <audio controls class="w-full">
                                    <source src="/audio/dlf-kultur_2025-11-11.mp3" type="audio/mpeg" />
                                    <track kind="captions" />
                                    {t('academy.audioFallback', {}, 'Dein Browser unterstützt das Audio-Element nicht.')}
                                </audio>
                            </div>
                        </div>
                    </div>
                    {/* Pull Quote - centered below */}
                    <div class="mt-16 max-w-3xl mx-auto">
                        <blockquote class="border-l-4 border-[var(--color-accent)] pl-6 py-2">
                            <p class="text-lg md:text-xl italic text-[var(--color-light-text)]/70 leading-relaxed"
                                innerHTML={t('academyPage.pullQuote', {}, '') || ''}>
                            </p>
                            <footer class="mt-3 text-sm text-[var(--color-accent)]">
                                — {t('academyPage.pullQuoteSource', {}, 'Deutschlandfunk Kultur, Chor der Woche')}
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* Formats Section */}
            <section class="py-16 md:py-24 bg-[var(--color-dark)]">
                <div class="container mx-auto px-4">
                    <p class="font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                        {t('academyPage.formatsTag', {}, 'Formate')}
                    </p>
                    <h2 class="text-3xl md:text-5xl font-bold mb-4 text-[var(--color-light-text)]">
                        {t('academyPage.formatsTitle', {}, 'Unsere Angebote')}
                    </h2>
                    <p class="md:text-lg leading-relaxed text-[var(--color-light-text)]/80 mb-12 max-w-3xl"
                        innerHTML={t('academyPage.formatsIntro', {}, '') || ''}>
                    </p>

                    <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* vode:expert */}
                        <div class="bg-[var(--color-surface-alt)] rounded-lg shadow-lg ring-1 ring-[var(--color-light-text)]/20 overflow-hidden flex flex-col">
                            <div class="p-6 border-b border-[var(--color-accent)]">
                                <h3 class="text-2xl font-semibold text-[var(--color-light-text)]">vode:expert</h3>
                            </div>
                            <div class="p-6 flex-grow">
                                <p class="text-base leading-relaxed text-[var(--color-light-text)]/80"
                                    innerHTML={t('academyPage.expertDescription', {}, '') || ''}>
                                </p>
                            </div>
                            <div class="px-6 pb-6">
                                <div class="flex flex-wrap gap-2">
                                    <span class="text-xs bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-full px-3 py-1">
                                        {t('academyPage.tagCoaching', {}, 'Coaching')}
                                    </span>
                                    <span class="text-xs bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-full px-3 py-1">
                                        {t('academyPage.tagIndividual', {}, 'Individuell')}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* vode:collective */}
                        <div class="bg-[var(--color-surface-alt)] rounded-lg shadow-lg ring-1 ring-[var(--color-light-text)]/20 overflow-hidden flex flex-col">
                            <div class="p-6 border-b border-[var(--color-accent)]">
                                <h3 class="text-2xl font-semibold text-[var(--color-light-text)]">vode:collective</h3>
                            </div>
                            <div class="p-6 flex-grow">
                                <p class="text-base leading-relaxed text-[var(--color-light-text)]/80"
                                    innerHTML={t('academyPage.collectiveDescription', {}, '') || ''}>
                                </p>
                            </div>
                            <div class="px-6 pb-6">
                                <div class="flex flex-wrap gap-2">
                                    <span class="text-xs bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-full px-3 py-1">
                                        {t('academyPage.tagWorkshop', {}, 'Workshop')}
                                    </span>
                                    <span class="text-xs bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-full px-3 py-1">
                                        {t('academyPage.tagGroup', {}, 'Gruppe')}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Eintägige Workshops */}
                        <div class="bg-[var(--color-surface-alt)] rounded-lg shadow-lg ring-1 ring-[var(--color-light-text)]/20 overflow-hidden flex flex-col">
                            <div class="p-6 border-b border-[var(--color-accent)]">
                                <h3 class="text-2xl font-semibold text-[var(--color-light-text)]">
                                    {t('academyPage.workshopDayTitle', {}, 'vode:intensiv')}
                                </h3>
                            </div>
                            <div class="p-6 flex-grow">
                                <p class="text-base leading-relaxed text-[var(--color-light-text)]/80"
                                    innerHTML={t('academyPage.workshopDayDescription', {}, '') || ''}>
                                </p>
                            </div>
                            <div class="px-6 pb-6">
                                <div class="flex flex-wrap gap-2">
                                    <span class="text-xs bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-full px-3 py-1">
                                        {t('academyPage.tagIntensive', {}, 'Intensiv')}
                                    </span>
                                    <span class="text-xs bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-full px-3 py-1">
                                        {t('academyPage.tagProject', {}, 'Projekt')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Groups & Approach */}
            <section class="py-16 md:py-24 bg-[var(--color-dark-alt)]">
                <div class="container mx-auto px-4">
                    <div class="max-w-4xl mx-auto">
                        <p class="font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                            {t('academyPage.approachTag', {}, 'Unser Ansatz')}
                        </p>
                        <h2 class="text-3xl md:text-5xl font-bold mb-8 text-[var(--color-light-text)]">
                            {t('academyPage.approachTitle', {}, 'Für wen wir da sind')}
                        </h2>
                        <div class="space-y-5">
                            <p class="md:text-lg leading-relaxed text-[var(--color-light-text)]/80"
                                innerHTML={t('academyPage.approachP1', {}, '') || ''}>
                            </p>
                            <p class="md:text-lg leading-relaxed text-[var(--color-light-text)]/80"
                                innerHTML={t('academyPage.approachP2', {}, '') || ''}>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Material & Tutorials Section */}
            <section class="py-16 md:py-24 bg-[var(--color-dark)]">
                <div class="container mx-auto px-4">
                    <div class="max-w-4xl mx-auto">
                        <div class="text-center mb-12">
                            <p class="font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                                {t('academyPage.materialTag', {}, 'Material')}
                            </p>
                            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                {t('academyPage.materialTitle', {}, 'Material & Tutorials')}
                            </h2>
                            <p class="text-lg md:text-xl leading-relaxed text-[var(--color-light-text)]/80 max-w-3xl mx-auto">
                                {t('academyPage.materialIntro', {}, '')}
                            </p>
                        </div>
                        <div class="space-y-12">
                            {/* Cloudy Day */}
                            <div class="bg-[var(--color-surface-alt)] rounded-lg overflow-hidden ring-1 ring-[var(--color-light-text)]/20">
                                <div class="p-6 md:p-8">
                                    <h3 class="text-xl font-bold text-[var(--color-light-text)] mb-6">
                                        {t('academy.academy2025.cloudyDayTitle', {}, 'Cloudy Day - Tutorial')}
                                    </h3>
                                    <div class="aspect-w-16 aspect-h-9 mb-6">
                                        <iframe
                                            class="w-full h-full rounded-lg aspect-video"
                                            src="https://www.youtube.com/embed/uq88tT1HozU"
                                            title="Cloudy Day - Tutorial"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen
                                        />
                                    </div>
                                    <p class="text-lg leading-relaxed text-center text-[var(--color-light-text)]/80 mb-8">
                                        {t('academy.academy2025.cloudyDayText', {}, '')}
                                    </p>
                                    <div class="text-center">
                                        <a
                                            href="/material/Cloudy Day - vode academy 2025.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-accent)] text-white font-bold text-md rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                        >
                                            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <title>Download Icon</title>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            {t('academy.academy2025.downloadButton', {}, 'Noten herunterladen')}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Quodlibet Lion */}
                            <div class="bg-[var(--color-surface-alt)] rounded-lg overflow-hidden ring-1 ring-[var(--color-light-text)]/20">
                                <div class="p-6 md:p-8">
                                    <h3 class="text-xl font-bold text-[var(--color-light-text)] mb-6">
                                        {t('academy.academy2025.lionLinesTitle', {}, 'Quodlibet Lion - Tutorial')}
                                    </h3>
                                    <div class="aspect-w-16 aspect-h-9 mb-6">
                                        <iframe
                                            class="w-full h-full rounded-lg aspect-video"
                                            src="https://www.youtube.com/embed/wvnHlf83Oz8"
                                            title="Lion (Saint Mesa) – Vocal Lines"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen
                                        />
                                    </div>
                                    <p class="text-lg leading-relaxed text-center text-[var(--color-light-text)]/80 mb-8">
                                        {t('academy.academy2025.lionLinesText', {}, '')}
                                    </p>
                                    <div class="text-center">
                                        <a
                                            href="/material/Quodlibet Lion - vode academy 2025.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-accent)] text-white font-bold text-md rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                        >
                                            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <title>Download Icon</title>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            {t('academy.academy2025.downloadButton', {}, 'Noten herunterladen')}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* The Voice Inside */}
                            <div class="bg-[var(--color-surface-alt)] rounded-lg overflow-hidden ring-1 ring-[var(--color-light-text)]/20">
                                <div class="p-6 md:p-8">
                                    <h3 class="text-xl font-bold text-[var(--color-light-text)] mb-6">
                                        {t('academy.academy2025.voiceInsideTitle', {}, 'The Voice Inside - Tutorial')}
                                    </h3>
                                    <div class="aspect-w-16 aspect-h-9 mb-6">
                                        <iframe
                                            class="w-full h-full rounded-lg aspect-video"
                                            src="https://www.youtube.com/embed/P-acKt7PhW8"
                                            title="The Voice Inside - Tutorial"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen
                                        />
                                    </div>
                                    <p class="text-lg leading-relaxed text-center text-[var(--color-light-text)]/80 mb-8">
                                        {t('academy.academy2025.newsText', {}, '')}
                                    </p>
                                    <div class="text-center">
                                        <a
                                            href="/material/The Voice Inside - vode academy 2025.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-accent)] text-white font-bold text-md rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                        >
                                            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <title>Download Icon</title>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            {t('academy.academy2025.downloadButton', {}, 'Noten herunterladen')}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section class="py-16 md:py-24 bg-[var(--color-dark-alt)]">
                <div class="container mx-auto px-4 text-center">
                    <h2 class="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-light-text)]">
                        {t('academyPage.ctaTitle', {}, 'Interesse?')}
                    </h2>
                    <p class="md:text-lg leading-relaxed text-[var(--color-light-text)]/80 mb-8 max-w-2xl mx-auto"
                        innerHTML={t('academyPage.ctaText', {}, '') || ''}>
                    </p>
                    <a
                        href="mailto:mail@vode-ensemble.de"
                        class="inline-block bg-[var(--color-accent)] text-white font-semibold px-8 py-3 rounded-lg hover:filter hover:brightness-110 transition-all duration-300 text-lg"
                    >
                        {t('academyPage.ctaButton', {}, 'Kontakt aufnehmen')}
                    </a>
                </div>
            </section>
        </div>
    );
};

export default AcademyPage;
