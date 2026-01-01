import type { Component } from "solid-js";
import { useI18n } from "../i18n";

const Feature: Component = () => {
    const { t } = useI18n();

    return (
        <section
            id="feature"
            class="bg-[var(--color-dark)] text-[var(--color-light-text)] py-16 md:py-24 relative overflow-hidden"
        >
            {/* Subtle background accent */}
            <div class="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 via-transparent to-transparent pointer-events-none" />
            
            <div class="container mx-auto px-4 relative z-10">
                <p class="font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                    {t('feature.sectionTag')}
                </p>
                
                <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-[var(--color-light-text)]">
                    {t('feature.title')}
                </h2>

                <div class="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                    {/* Video */}
                    <div class="w-full lg:w-7/12">
                        <div class="aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                            <iframe
                                class="w-full h-full"
                                src="https://www.youtube.com/embed/UWVHe51-kG8"
                                title="Bli-Blip | vode & New York Voices"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            />
                        </div>
                    </div>

                    {/* Story Content */}
                    <div class="w-full lg:w-5/12 space-y-6">
                        <div>
                            <h3 class="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-light-text)]">
                                {t('feature.songTitle')}
                            </h3>
                            <p class="text-lg md:text-xl text-[var(--color-light-text)]/80 leading-relaxed"
                                innerHTML={t('feature.intro') || ''}>
                            </p>
                        </div>

                        <div class="space-y-4 text-[var(--color-light-text)]/70">
                            <p innerHTML={t('feature.story1') || ''}>
                            </p>
                            <p>
                                {t('feature.story2')}
                            </p>
                            <p innerHTML={t('feature.story3') || ''}>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
