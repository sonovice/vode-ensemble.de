import { type Component, For } from "solid-js";
import { useI18n } from "../i18n";

const Academy: Component = () => {
    const { t } = useI18n();

    // Data for past projects (can be expanded or moved to a separate data file later)
    const pastProjects = [
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
                    <div class="w-full lg:w-7/12 text-left lg:mt-12">
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
                            <p class="md:text-lg leading-relaxed text-[var(--color-light-text)]/80 mt-4"
                                innerHTML={t('academy.paragraph3', {}, 'Paragraph 3') || ''}>
                            </p>
                            <div class="mt-8">
                                <a href="/academy-2025"
                                    class="inline-block bg-[var(--color-accent)] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-all duration-300">
                                    {t('academy.learnMore', {}, 'Mehr erfahren')}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Image Column (Right) */}
                    <a href="/academy-2025"
                        class="w-full lg:w-5/12">
                        <img
                            src="/images/academy_2025.jpg"
                            alt="Academy Workshop Impression"
                            class="max-h-[500px] lg:max-h-full lg:w-full object-contain lg:h-full mx-auto rounded-lg"
                        />
                    </a>
                </div>

                {/* Bottom part: Past Projects - full or inset width */}
                <div class="mx-auto">
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
            </div>
        </section>
    );
};

export default Academy; 