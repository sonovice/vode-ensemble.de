import { type Component, createSignal, For, Show } from "solid-js"
import { useI18n } from "../i18n"

// Member data and types
interface Singer {
    name: string;
    image: string;
    description?: string;
    website?: string;
}

const members: Record<string, Singer[]> = {
    "Sopran": [
        { name: "Felicitas Grunden", image: "/images/portraits/f_grunden_1.jpg", website: "https://instagram.com/feliammer", description: "Sängerin, Musikpädagogin" },
        { name: "Kristin Herten", image: "/images/portraits/k_herten_1.jpg" },
        { name: "Liane Prager", image: "/images/portraits/l_prager_1.jpg" },
        { name: "Kristina Hügel", image: "/images/members/placeholder.jpg" },
    ],
    "Mezzosopran": [
        { name: "Henriette Sauerwald", image: "/images/portraits/h_sauerwald_1.jpg", website: "https://instagram.com/frausauerwald", description: "Eis am Stiel, Speiseeis" },
        { name: "Karin Peters", image: "/images/portraits/k_peters_1.jpg" },
        { name: "Sümeyye Ergün-Langer", image: "/images/portraits/s_erguen-langer_1.jpg", website: "https://www.sumeyye-ergun.de/", description: "Gitarristin, Musikpädagogin" },
        { name: "Tabea Sawatzki", image: "/images/portraits/t_sawatzki_1.jpg" },
        { name: "Maria Anna Waloschek", image: "/images/portraits/m_waloschek_1.jpg", website: "https://www.maria-anna-waloschek.de", description: "Pianistin, Musikpädagogin, Musik|hoch|schuldidaktikerin" },
    ],
    "Alt": [
        { name: "Kristina Matthies", image: "/images/portraits/k_matthies_1.jpg", description: "Musiklehrerin" },
        { name: "Anne-Fleur Cremers", image: "/images/portraits/a_cremers_1.jpg", website: "www.musik-in-muenster.de", description: "Sängerin, Musikpädagogin, Chorleiterin" },
        { name: "Clara Fabian", image: "/images/portraits/c_fabian_1.jpg", description: "Psychologische Beraterin, Sängerin, Gesangslehrerin" },
        { name: "Thea Henken", image: "/images/portraits/t_henken_1.jpg" },
        { name: "Katharina Gärtner", image: "/images/portraits/k_gaertner_1.jpg", description: "Dirigentin" },
    ],
    "Tenor": [
        { name: "Niklas Genschel", image: "/images/members/placeholder.jpg" },
        { name: "Philipp Kaiser", image: "/images/portraits/ph_kaiser_1.jpg", description: "Musiklehrer, Trompeter, Dirigent" },
        { name: "Sebastian Meyer", image: "/images/portraits/s_meyer_1.jpg" },
        { name: "Simon Herten", image: "/images/portraits/s_herten_1.jpg", description: "Sänger, Musikpädagoge, Dirigent" },
        { name: "Tobias Hägele", image: "/images/portraits/t_haegele_1.jpg" },
    ],
    "Bariton": [
        { name: "Christoph Stutzinger", image: "/images/portraits/ch_stutzinger_1.jpg", description: "Musiklehrer, Blockflötist, Chorleiter" },
        { name: "Martin Dreßler", image: "/images/portraits/m_dressler_1.jpg", website: "https://instagram.com/woodyturner92", description: "Tonmeister" },
        { name: "Martin Pilger", image: "/images/portraits/m_pilger_1.jpg" },
    ],
    "Bass": [
        { name: "Lukas Kuhlmann", image: "/images/portraits/l_kuhlmann_1.jpg", description: "Tonmeister" },
        { name: "Manuel Grunden", image: "/images/portraits/m_grunden_1.jpg", website: "https://instagram.com/manuelgrunden", description: "Tonmeister, Arrangeur" },
        { name: "Simon Waloschek", image: "/images/portraits/s_waloschek_1.jpg", description: "(Musik-)Softwaregingenieur" },
    ],
};

const voicePartOrder: string[] = ["Sopran", "Mezzosopran", "Alt", "Tenor", "Bariton", "Bass"];

// Helper to map original voice part key to a translation key
const getVoicePartTKey = (voicePartKey: string): string => {
    switch (voicePartKey) {
        case "Sopran": return "ensemble.voiceSoprano";
        case "Mezzosopran": return "ensemble.voiceMezzo";
        case "Alt": return "ensemble.voiceAlto";
        case "Tenor": return "ensemble.voiceTenor";
        case "Bariton": return "ensemble.voiceBaritone";
        case "Bass": return "ensemble.voiceBass";
        default: return voicePartKey; // Fallback, should not happen with voicePartOrder
    }
};

const Ensemble: Component = () => {
    const { t } = useI18n();
    const [selectedVoicePart, setSelectedVoicePart] = createSignal<string | null>(voicePartOrder[0] || null);
    const [isDropdownOpen, setIsDropdownOpen] = createSignal(false);

    const selectVoicePart = (part: string) => {
        setSelectedVoicePart(part);
        setIsDropdownOpen(false);
    }

    return (
        <section
            id="ensemble"
            class="py-16 md:py-24 bg-[var(--color-dark)] text-[var(--color-light-text)]"
        >
            <div class="container mx-auto px-4">
                {/* "Eine Familie" Section */}
                <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 lg:mb-24">
                    <div class="w-full lg:w-1/2">
                        <img
                            src="/images/ensemble/ensemble_portrait_01.jpg"
                            alt="Ensemble Gruppe"
                            class="w-full object-cover aspect-square object-bottom lg:aspect-auto lg:h-full lg:object-center rounded-lg"
                        />
                    </div>
                    <div class="w-full lg:w-1/2 text-left xl:px-12 lg:mt-12">
                        <p class="font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                            {t('ensemble.sectionTag', {}, 'Eine Familie')}
                        </p>
                        <h2 class="lg:-ml-38 xl:-ml-48 text-4xl md:text-6xl lg:text-8xl font-bold mb-6 text-[var(--color-light-text)]">
                            {/* The <br class="hidden lg:block" /> needs to be handled here if important */}
                            {t('ensemble.title', {}, 'Das Ensemble')}
                        </h2>
                        <p class="md:text-lg leading-relaxed text-[var(--color-light-text)]/80"
                            innerHTML={t('ensemble.paragraph1', {}, 'Paragraph 1 missing') || ''}>
                        </p>
                        <p class="md:text-lg leading-relaxed mt-4 text-[var(--color-light-text)]/80"
                            innerHTML={t('ensemble.paragraph2', {}, 'Paragraph 2 missing') || ''}>
                        </p>
                        {/* <p class="md:text-lg leading-relaxed mt-4">
                            Wir freuen uns darüber, dass wir in der Saison 2024/25 vom Kultursekretariat NRW Gütersloh gefördert werden und bedanken uns für die Unterstützung.
                        </p> */}
                    </div>
                </div>

                {/* Member List Section */}
                <div class="mt-16 md:mt-24">
                    {/* New heading block */}
                    {/* <div class="mb-12 text-left">
                        <p class="font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                            Unsere Stimmen
                        </p>
                        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[var(--color-light-text)]">
                            Das Ensemble im Detail
                        </h2>
                        <p class="md:text-lg leading-relaxed text-[var(--color-light-text)]/80 max-w-2xl">
                            Unser Ensemble besteht aus einer vielfältigen Gruppe von Sänger:innen. Wähle eine Stimmgruppe, um die Mitglieder anzuzeigen.
                        </p>
                    </div> */}

                    {/* Mobile Dropdown Filter - Hidden md and above */}
                    {/* <div class="md:hidden mb-8 relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen())}
                            class="w-full flex justify-between items-center px-6 py-4 bg-[var(--color-surface-alt)] hover:bg-opacity-80 rounded-xl shadow-lg text-left text-lg text-[var(--color-light-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-dark)] transition-all duration-300"
                        >
                            <span class="font-medium">{selectedVoicePart() ?? "Stimmgruppe wählen..."}</span>
                            <svg
                                class={`w-5 h-5 text-[var(--color-accent)] transform transition-transform duration-200 ${isDropdownOpen() ? 'rotate-180' : 'rotate-0'}`}
                                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <Show when={isDropdownOpen()}>
                            <div class="absolute z-20 mt-2 w-full bg-[var(--color-surface-alt)] rounded-xl shadow-2xl border border-[var(--color-light-text)]/20 max-h-72 overflow-y-auto ring-1 ring-black ring-opacity-5">
                                <For each={voicePartOrder}>
                                    {(voicePart) => (
                                        <button
                                            onClick={() => selectVoicePart(voicePart)}
                                            class={`block w-full text-left px-6 py-4 text-lg transition-colors duration-150 ${selectedVoicePart() === voicePart ? 'bg-[var(--color-accent)] text-white font-semibold' : 'text-[var(--color-light-text)]/80 hover:bg-[var(--color-accent)]/20 hover:text-[var(--color-accent)]'}`}
                                        >
                                            {voicePart}
                                        </button>
                                    )}
                                </For>
                            </div>
                        </Show>
                    </div> */}

                    <h2 class="text-3xl md:text-4xl font-bold mb-10 text-[var(--color-light-text)]">{t('ensemble.membersTitle', {}, 'Mitglieder')}</h2>


                    {/* Desktop Tabs Filter - Hidden below md */}
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center gap-3 mb-12">
                        <For each={voicePartOrder}>
                            {(voicePartKey) => (
                                <button type="button"
                                    onClick={() => selectVoicePart(voicePartKey)}
                                    class={`w-full md:w-auto py-2 px-5 md:px-6 text-base md:text-lg text-center rounded-md transition-all duration-300 font-medium border-2  
                                    ${selectedVoicePart() === voicePartKey
                                            ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)]'
                                            : 'bg-transparent border-[var(--color-light-text)]/30 text-[var(--color-light-text)]/70 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                                        }`}
                                >
                                    {t(getVoicePartTKey(voicePartKey), {}, voicePartKey)}
                                </button>
                            )}
                        </For>
                    </div>

                    {/* Member Cards Area */}
                    <div
                        class="rounded-xl p-6 md:p-8 min-h-[200px] bg-[var(--color-surface-alt)] shadow-lg transition-all duration-300 hover:shadow-2xl ring-1 ring-[var(--color-light-text)]/20"
                        classList={{
                            "flex items-center justify-center": !selectedVoicePart(),
                        }}
                    >
                        <Show when={selectedVoicePart()} keyed
                            fallback={<p class="text-[var(--color-light-text)]/60 italic text-center text-lg">{t('ensemble.selectVoiceGroupPrompt', {}, 'Bitte eine Stimmgruppe auswählen.')}</p>}
                        >
                            {(voicePartKey) => {
                                const voicePartMembers = members[voicePartKey];
                                return (
                                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-8 md:gap-x-6 md:gap-y-10">
                                        <For each={voicePartMembers}>
                                            {(singer) => (
                                                <div class="group text-center">
                                                    <div class="aspect-square overflow-hidden rounded-lg shadow-lg mb-3 relative bg-[var(--color-surface-alt)] bg-opacity-80 transition-all duration-300 group-hover:shadow-2xl ring-1 ring-gray-600">
                                                        <Show
                                                            when={singer.image && singer.image !== "/images/members/placeholder.jpg"}
                                                            fallback={
                                                                <div class="w-full h-full flex items-center justify-center bg-[#B4BEB0] bg-opacity-50">
                                                                    <svg class="w-1/2 h-1/2 text-[var(--color-surface-alt)]/40" fill="currentColor" viewBox="0 0 448 512">
                                                                        <title>Placeholder user icon</title>
                                                                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                                                                    </svg>
                                                                </div>
                                                            }
                                                        >
                                                            <img
                                                                src={singer.image}
                                                                alt={`Portrait von ${singer.name}`}
                                                                class="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                                                                loading="lazy"
                                                            />
                                                        </Show>
                                                    </div>
                                                    <h3 class="font-semibold text-lg text-[var(--color-light-text)] group-hover:text-[var(--color-accent)] transition-colors duration-200">{singer.name}</h3>
                                                    <Show when={singer.description}>
                                                        <p class="text-sm text-[var(--color-light-text)]/70 mt-0.5 text-balance">{singer.description}</p>
                                                    </Show>
                                                    <Show when={singer.website}>
                                                        <a
                                                            href={singer.website}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            class="text-xs text-[var(--color-accent)] hover:underline transition-colors duration-200 mt-1 inline-block opacity-80 group-hover:opacity-100"
                                                        >
                                                            {t('ensemble.websiteLinkText', {}, 'Website')}
                                                        </a>
                                                    </Show>
                                                </div>
                                            )}
                                        </For>
                                    </div>
                                );
                            }}
                        </Show>
                    </div>


                    <h2 class="text-3xl md:text-4xl font-bold mt-16 mb-10 text-[var(--color-light-text)]">{t('ensemble.leadershipTitle', {}, 'Leitung')}</h2>

                    <p class="md:text-lg leading-relaxed text-[var(--color-light-text)]/80 mb-10 max-w-3xl text-left"
                        innerHTML={t('ensemble.leadershipParagraph', {}, 'Error loading paragraph.') || ''}>
                    </p>

                    {(() => {
                        const leitungNames = ["Katharina Gärtner", "Simon Herten", "Felicitas Grunden", "Maria Anna Waloschek"];
                        const leitungMembers: Singer[] = [];

                        for (const part of voicePartOrder) {
                            for (const member of members[part]) {
                                if (leitungNames.includes(member.name)) {
                                    leitungMembers.push(member);
                                }
                            }
                        }

                        // Ensure specific order if needed, or sort by name
                        // For now, they will appear in the order they are found
                        // Or, more reliably, sort them according to leitungNames order:
                        leitungMembers.sort((a, b) => leitungNames.indexOf(a.name) - leitungNames.indexOf(b.name));


                        return (
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8 md:gap-x-6 md:gap-y-10 p-6 md:p-8 rounded-xl bg-[var(--color-surface-alt)] shadow-lg transition-all duration-300 hover:shadow-2xl ring-1 ring-[var(--color-light-text)]/20">
                                <For each={leitungMembers}>
                                    {(singer) => (
                                        <div class="group text-center">
                                            <div class="aspect-square overflow-hidden rounded-lg shadow-lg mb-3 relative bg-[var(--color-surface-alt)] bg-opacity-80 transition-all duration-300 group-hover:shadow-2xl ring-1 ring-gray-600">
                                                <Show
                                                    when={singer.image && singer.image !== "/images/members/placeholder.jpg"}
                                                    fallback={
                                                        <div class="w-full h-full flex items-center justify-center bg-[#B4BEB0] bg-opacity-50">
                                                            <svg class="w-1/2 h-1/2 text-[var(--color-surface-alt)]/40" fill="currentColor" viewBox="0 0 448 512">
                                                                <title>Placeholder user icon</title>
                                                                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                                                            </svg>
                                                        </div>
                                                    }
                                                >
                                                    <img
                                                        src={singer.image}
                                                        alt={`Portrait von ${singer.name}`}
                                                        class="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                                                        loading="lazy"
                                                    />
                                                </Show>
                                            </div>
                                            <h3 class="font-semibold text-lg text-[var(--color-light-text)] group-hover:text-[var(--color-accent)] transition-colors duration-200">{singer.name}</h3>
                                            <Show when={singer.description}>
                                                <p class="text-sm text-[var(--color-light-text)]/70 mt-0.5">{singer.description}</p>
                                            </Show>
                                            <Show when={singer.website}>
                                                <a
                                                    href={singer.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    class="text-xs text-[var(--color-accent)] hover:underline transition-colors duration-200 mt-1 inline-block opacity-80 group-hover:opacity-100"
                                                >
                                                    {t('ensemble.websiteLinkText', {}, 'Website')}
                                                </a>
                                            </Show>
                                        </div>
                                    )}
                                </For>
                            </div>
                        );
                    })()}

                </div>
            </div>
        </section>
    )
}

export default Ensemble;