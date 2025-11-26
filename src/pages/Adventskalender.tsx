import type { Component } from "solid-js";
import { useI18n } from "../i18n";

const Adventskalender: Component = () => {
    const { t } = useI18n();

    return (
        <section class="min-h-screen bg-[var(--color-dark)] text-[var(--color-light-text)] relative overflow-hidden">
            {/* Subtle festive background pattern */}
            <div class="absolute inset-0 opacity-5">
                <div class="absolute top-10 left-10 w-2 h-2 bg-[var(--color-accent)] rounded-full" />
                <div class="absolute top-20 right-20 w-1.5 h-1.5 bg-[var(--color-light)] rounded-full" />
                <div class="absolute top-40 left-1/4 w-1 h-1 bg-[var(--color-accent)] rounded-full" />
                <div class="absolute bottom-32 right-1/3 w-2 h-2 bg-[var(--color-light)] rounded-full" />
                <div class="absolute bottom-20 left-20 w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full" />
                <div class="absolute top-1/3 right-10 w-1 h-1 bg-[var(--color-light)] rounded-full" />
            </div>

            {/* Content */}
            <div class="container mx-auto px-4 py-12 md:py-16 flex flex-col items-center justify-center min-h-screen relative z-10">
                {/* Advent greeting header */}
                <p class="font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-4 text-center text-sm md:text-base">
                    {t('adventskalender.sectionTag', {}, 'Advent Calendar')}
                </p>

                {/* Main card */}
                <div class="bg-[var(--color-surface-alt)] rounded-2xl shadow-2xl p-6 md:p-10 max-w-md w-full ring-1 ring-[var(--color-accent)]/30">
                    {/* Cover image */}
                    <div class="relative mb-6">
                        <img
                            src="/images/media/human_heart_cover.jpg"
                            alt={t('adventskalender.coverAlt', {}, 'Cover of Human Heart by vode')}
                            class="w-full h-auto rounded-xl shadow-lg"
                        />
                        {/* Subtle glow effect */}
                        <div class="absolute inset-0 rounded-xl bg-gradient-to-t from-[var(--color-accent)]/10 to-transparent pointer-events-none" />
                    </div>

                    {/* Song title */}
                    <h1 class="text-3xl md:text-4xl font-bold text-center text-[var(--color-light-text)] mb-2">
                        {t('adventskalender.songTitle', {}, 'Human Heart')}
                    </h1>

                    {/* Artist */}
                    <p class="text-center text-[var(--color-accent)] font-medium mb-6">
                        {t('adventskalender.artist', {}, 'vode')}
                    </p>

                    {/* Audio player */}
                    <audio controls class="w-full mb-8">
                        <source src="/audio/vode - Human Heart.mp3" type="audio/mpeg" />
                        <track kind="captions" />
                        {t('adventskalender.audioFallback', {}, 'Your browser does not support the audio element.')}
                    </audio>

                    {/* Divider */}
                    <div class="w-16 h-0.5 bg-[var(--color-accent)]/50 mx-auto mb-6" />

                    {/* Advent greeting */}
                    <div class="text-center">
                        <p class="text-lg md:text-xl leading-relaxed text-[var(--color-light-text)]/90 mb-4"
                            innerHTML={t('adventskalender.greeting', {}, 'Warm advent greetings from <span class="italic">vode</span>!') || ''}>
                        </p>
                        <p class="text-sm md:text-base text-[var(--color-light-text)]/70">
                            {t('adventskalender.message', {}, 'We hope this song brings you a little warmth and joy during this special season.')}
                        </p>
                    </div>
                </div>

                {/* Back to home link */}
                <a
                    href="/"
                    class="mt-8 inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-light)] transition-colors duration-300 group"
                >
                    <svg
                        class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <title>{t('adventskalender.backIconTitle', {}, 'Back arrow')}</title>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span class="font-medium">{t('adventskalender.backLink', {}, 'Back to vode-ensemble.de')}</span>
                </a>
            </div>
        </section>
    );
};

export default Adventskalender;

