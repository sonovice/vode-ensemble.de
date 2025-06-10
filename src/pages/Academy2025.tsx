import { type Component, Show, createSignal, For } from "solid-js";
import { useI18n } from "../i18n";

const Academy2025: Component = () => {
    const { t } = useI18n();
    const [expertOpen, setExpertOpen] = createSignal(false);
    const [collectiveOpen, setCollectiveOpen] = createSignal(false);

    const toggleExpert = () => setExpertOpen(!expertOpen());
    const toggleCollective = () => setCollectiveOpen(!collectiveOpen());

    return (
        <div class="bg-[var(--color-dark-alt)] text-[var(--color-light-text)]">
            <div class="container mx-auto px-4 py-8 lg:py-16 space-y-12">
                <section id="formate">
                    <div class="mb-16 md:mb-24">
                        <h2 class="text-3xl md:text-4xl font-bold mb-10 text-[var(--color-light-text)]">{t('academy.formatsTitle', {}, 'Unsere Formate')}</h2>
                        <div class="grid lg:grid-cols-2 gap-8 md:items-start">
                            {/* Vode:Expert Card */}
                            <div class="bg-[var(--color-surface-alt)] rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl ring-1 ring-[var(--color-light-text)]/20 overflow-hidden flex flex-col">
                                <button type="button"
                                    onClick={toggleExpert}
                                    class="w-full flex justify-between items-center px-6 py-5 text-left text-2xl font-semibold text-[var(--color-light-text)] hover:bg-[var(--color-surface-alt)] hover:bg-opacity-50 focus:outline-none transition-colors"
                                >
                                    <span>vode:expert</span>
                                    <svg class={`w-6 h-6 text-[var(--color-accent)] transform transition-transform duration-300 ${expertOpen() ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <title>Toggle expert section</title>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <Show when={expertOpen()}>
                                    <div class="px-6 pb-6 pt-2 border-t border-[var(--color-accent)]">
                                        <p class="text-base leading-relaxed text-[var(--color-light-text)]/80"
                                            innerHTML={t('academy.expertDescription', {}, 'Expert desc.') || ''}>
                                        </p>
                                    </div>
                                </Show>
                            </div>
                            {/* Vode:Collective Card */}
                            <div class="bg-[var(--color-surface-alt)] rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl ring-1 ring-[var(--color-light-text)]/20 overflow-hidden flex flex-col">
                                <button type="button"
                                    onClick={toggleCollective}
                                    class="w-full flex justify-between items-center px-6 py-5 text-left text-2xl font-semibold text-[var(--color-light-text)] hover:bg-[var(--color-surface-alt)] hover:bg-opacity-50 focus:outline-none transition-colors"
                                >
                                    <span>{t('academy.collectiveTitle', {}, 'vode:collective')}</span>
                                    <svg class={`w-6 h-6 text-[var(--color-accent)] transform transition-transform duration-300 ${collectiveOpen() ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <title>Toggle collective section</title>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <Show when={collectiveOpen()}>
                                    <div class="px-6 pb-6 pt-2 border-t border-[var(--color-accent)]">
                                        <p class="text-base leading-relaxed text-[var(--color-light-text)]/80"
                                            innerHTML={t('academy.collectiveDescription', {}, 'Collective desc.') || ''}>
                                        </p>
                                    </div>
                                </Show>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Academy2025; 