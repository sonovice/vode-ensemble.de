import { type Component, For, Show, createSignal } from "solid-js";
import { useI18n } from "../i18n";

const Academy: Component = () => {
    const { t } = useI18n();
    const [expertOpen, setExpertOpen] = createSignal(false);
    const [collectiveOpen, setCollectiveOpen] = createSignal(false);

    const toggleExpert = () => setExpertOpen(!expertOpen());
    const toggleCollective = () => setCollectiveOpen(!collectiveOpen());

    // Data for past projects (can be expanded or moved to a separate data file later)
    const pastProjects = [
        {
            year: "2025",
            title: "vode academy 2025",
            description: "Intensiv-Workshop für Chorsänger:innen und Chorleiter:innen.",
            link: "/academy-2025"
        },
        {
            year: "2023",
            title: "Projekt mit Studierenden",
            description: "Konzerte: Musikstudierende der Uni Vechta treten bei außergewöhnlichen Kooperationsprojekten auf",
            link: "https://www.mynewsdesk.com/de/universitaet-vechta/pressreleases/konzerte-musikstudierende-der-uni-vechta-treten-bei-aussergewoehnlichen-kooperationsprojekten-auf-3239461"
        }
        // Add more projects here if needed
    ];

    return (
        <section
            id="academy"
            class="py-16 md:py-24 bg-[var(--color-dark)] text-[var(--color-light-text)]"
        >
            <div class="container mx-auto px-4">
                {/* Top part: Two-column for intro - RESTRUCTURED */}
                <div class="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-24">
                    {/* Text Column (Left) */}
                    <div class="w-full lg:w-8/12 text-left">
                        <p class="font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                            {t('academy.sectionTag', {}, 'Education')}
                        </p>
                        <h1 class="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 text-[var(--color-light-text)]">
                            {t('academy.title', {}, 'vode academy')}
                        </h1>
                        <div class="max-w-none">
                            <p class="md:text-lg leading-relaxed text-[var(--color-light-text)]/80"
                                innerHTML={t('academy.paragraph1', {}, 'Paragraph 1') || ''}>
                            </p>
                            <p class="md:text-lg leading-relaxed text-[var(--color-light-text)]/80 mt-4"
                                innerHTML={t('academy.paragraph2', {}, 'Paragraph 2') || ''}>
                            </p>

                        </div>
                    </div>
                    {/* Audio Player Column (Right) */}
                    <div class="w-full lg:w-4/12">
                        <div class="bg-[var(--color-surface-alt)] rounded-lg shadow-lg p-6">
                            <img
                                src="/audio/dlf-kultur_2025-11-11.png"
                                alt={t('academy.audioCoverAlt', {}, "Cover für den Podcast 'Chor der Woche'")}
                                class="w-full h-auto rounded-md mb-4"
                            />
                            <h2 class="text-xl font-bold text-[var(--color-light-text)] mb-2">{t('academy.audioTitle', {}, 'Sendungsmitschnitt')}</h2>
                            <p class="text-sm text-[var(--color-light-text)]/70 mb-4">{t('academy.audioSubtitle', {}, 'Podcast-Untertitel')}</p>
                            <audio controls class="w-full">
                                <source src="/audio/dlf-kultur_2025-11-11.mp3" type="audio/mpeg" />
                                <track kind="captions" />
                                {t('academy.audioFallback', {}, 'Dein Browser unterstützt das Audio-Element nicht.')}
                            </audio>
                        </div>
                    </div>
                </div>

                {/* Bottom part: Past Projects - full or inset width */}
                <div class="mx-auto mb-16 md:mb-24">
                    <h2 class="text-3xl md:text-4xl font-bold mb-10 text-[var(--color-light-text)]">{t('academy.pastProjectsTitle', {}, 'Vergangene Projekte')}</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <For each={pastProjects}>
                            {(project) => (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="block bg-[var(--color-surface-alt)] rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl ring-1 ring-[var(--color-light-text)]/20 no-underline group h-full"
                                >
                                    <div class="p-5 flex flex-col h-full">
                                        <div class="flex items-start mb-3">
                                            <div class="flex flex-col items-center text-center mr-4 shrink-0">
                                                <div class="text-xs uppercase text-[var(--color-accent)] font-medium tracking-wider">{t('academy.pastProjectYearLabel', {}, 'JAHR')}</div>
                                                <div class="font-bold text-xl text-[var(--color-light-text)]">{project.year}</div>
                                            </div>
                                            <h3 class="text-lg font-semibold text-[var(--color-light-text)] group-hover:text-[var(--color-accent)] transition-colors duration-300 leading-tight">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <p class="text-sm text-gray-400 flex-grow">{project.description}</p>
                                        <div class="mt-auto pt-3 text-right">
                                            <span class="text-xs text-[var(--color-accent)] group-hover:underline">{t('academy.pastProjectLearnMore', {}, 'Mehr erfahren →')}</span>
                                        </div>
                                    </div>
                                </a>
                            )}
                        </For>
                    </div>
                </div>

                {/* Workshop Formats Section */}
                <div class="mx-auto">
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
            </div>
        </section>
    );
};

export default Academy; 