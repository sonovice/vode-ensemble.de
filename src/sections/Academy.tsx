import { Component, Show, createSignal, For } from "solid-js";

const Academy: Component = () => {
    const [expertOpen, setExpertOpen] = createSignal(false);
    const [collectiveOpen, setCollectiveOpen] = createSignal(false);

    const toggleExpert = () => setExpertOpen(!expertOpen());
    const toggleCollective = () => setCollectiveOpen(!collectiveOpen());

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
                            Education
                        </p>
                        <h1 class="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 text-[var(--color-light-text)]">
                            vode academy
                        </h1>
                        <div class="max-w-none">
                            <p class="md:text-lg leading-relaxed text-[var(--color-light-text)]/80">
                                Musik entsteht bei uns im Miteinander. Damit unsere Konzerte zu etwas Besonderem werden, bringen wir in unseren Proben ein, was jede:r von uns am besten kann: Einige Mitglieder von vode arbeiten als Vocal Coaches und unterstützen bei der stimmlichen Umsetzung musikalischer Ideen. Andere unterrichten an Schulen und entwickeln innovative Probenformate für Gruppen. Wieder andere sind als Tonmeister:innen tätig und haben ein feines Gespür für Klang und Details.
                            </p>
                            <p class="md:text-lg leading-relaxed text-[var(--color-light-text)]/80 mt-4">
                                Diese vielfältigen Erfahrungen und Stärken fließen in unsere gemeinsame Probenarbeit ein – und davon profitieren wir alle. Dieses Wissen geben wir aber nicht nur intern weiter: Wir teilen es auch mit anderen Chören. Dafür haben wir verschiedene Workshop- und Coachingformate entwickelt.
                            </p>
                            <p class="md:text-lg leading-relaxed text-[var(--color-light-text)]/80 mt-4">
                                Unser diesjähriges Education-Projekt richtet sich an Jugendchöre.
                            </p>
                        </div>
                    </div>

                    {/* Image Column (Right) */}
                    <div class="w-full lg:w-5/12">
                        <img
                            src="/images/academy_2025.jpg"
                            alt="Academy Workshop Impression"
                            class="max-h-[500px] lg:max-h-full lg:w-full object-contain lg:h-full mx-auto rounded-lg"
                        />
                    </div>
                </div>

                {/* Middle part: Expandable Cards - full or inset width */}
                <div class="mb-16 md:mb-24">
                    <h2 class="text-3xl md:text-4xl font-bold mb-10 text-[var(--color-light-text)]">Unsere Formate</h2>
                    <div class="grid lg:grid-cols-2 gap-8 md:items-start">
                        {/* Vode:Expert Card */}
                        <div class="bg-[var(--color-surface-alt)] rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl ring-1 ring-[var(--color-light-text)]/20 overflow-hidden flex flex-col">
                            <button
                                onClick={toggleExpert}
                                class="w-full flex justify-between items-center px-6 py-5 text-left text-2xl font-semibold text-[var(--color-light-text)] hover:bg-[var(--color-surface-alt)] hover:bg-opacity-50 focus:outline-none transition-colors"
                            >
                                <span>vode:expert</span>
                                <svg class={`w-6 h-6 text-[var(--color-accent)] transform transition-transform duration-300 ${expertOpen() ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <Show when={expertOpen()}>
                                <div class="px-6 pb-6 pt-2 border-t border-[var(--color-accent)]">
                                    <p class="text-base leading-relaxed text-[var(--color-light-text)]/80">
                                        In <em>vode:expert</em> geben einzelne Mitglieder des Ensembles ihr Spezialwissen weiter und bieten themenspezifische Coachings an, die tief in musikalische oder technische Themen eintauchen. Die Inhalte reichen von Groove/Timing oder Atmung/Körperarbeit bis hin zu praktischen Fragen der Mikrofonierung und Beschallung bei Live-Auftritten oder Mitschnitte. Ziel ist es, individuelles Know-how aus dem Ensemble zugänglich zu machen und konkrete Impulse für die stimmliche und musikalische Entwicklung zu bieten.
                                    </p>
                                </div>
                            </Show>
                        </div>
                        {/* Vode:Collective Card */}
                        <div class="bg-[var(--color-surface-alt)] rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl ring-1 ring-[var(--color-light-text)]/20 overflow-hidden flex flex-col">
                            <button
                                onClick={toggleCollective}
                                class="w-full flex justify-between items-center px-6 py-5 text-left text-2xl font-semibold text-[var(--color-light-text)] hover:bg-[var(--color-surface-alt)] hover:bg-opacity-50 focus:outline-none transition-colors"
                            >
                                <span>vode:collective</span>
                                <svg class={`w-6 h-6 text-[var(--color-accent)] transform transition-transform duration-300 ${collectiveOpen() ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <Show when={collectiveOpen()}>
                                <div class="px-6 pb-6 pt-2 border-t border-[var(--color-accent)]">
                                    <p class="text-base leading-relaxed text-[var(--color-light-text)]/80">
                                        <em>vode:collective</em> ist ein Workshopformat, das auf kollektives Lernen, gegenseitiges Coaching und kreative Selbstverantwortung setzt. Mehrere Personen aus einer Stimmgruppe erarbeiten hier eigenständig Klangvorstellungen und üben, mit spezifischen Herausforderungen umzugehen. Dabei geben die Mitglieder von vode auch stimmbildnerische Impulse, wodurch die Arbeit nicht nur musikalisch, sondern auch stimmlich bereichert wird. Die Chorleitung koordiniert anschließend die verschiedenen Ansätze zu einem stimmigen Gesamtkonzept. Dieses Format stärkt die Eigenverantwortung, das kreative Potenzial jeder Stimmgruppe und fördert ein kooperatives, gleichberechtigtes Miteinander im musikalischen Gestaltungsprozess.
                                    </p>
                                </div>
                            </Show>
                        </div>
                    </div>
                </div>

                {/* Bottom part: Past Projects - full or inset width */}
                <div class="mx-auto">
                    <h2 class="text-3xl md:text-4xl font-bold mb-10 text-[var(--color-light-text)]">Vergangene Projekte</h2>
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
                                                <div class="text-xs uppercase text-[var(--color-accent)] font-medium tracking-wider">JAHR</div>
                                                <div class="font-bold text-xl text-[var(--color-light-text)]">{project.year}</div>
                                            </div>
                                            <h3 class="text-lg font-semibold text-[var(--color-light-text)] group-hover:text-[var(--color-accent)] transition-colors duration-300 leading-tight">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <p class="text-sm text-gray-400 flex-grow">{project.description}</p>
                                        <div class="mt-auto pt-3 text-right">
                                            <span class="text-xs text-[var(--color-accent)] group-hover:underline">Mehr erfahren →</span>
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