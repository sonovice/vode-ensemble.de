import { type Component, Show, createSignal, For } from "solid-js";
import { useI18n } from "../i18n";

const Academy2025: Component = () => {
    const { t } = useI18n();
    const [expertOpen, setExpertOpen] = createSignal(false);
    const [collectiveOpen, setCollectiveOpen] = createSignal(false);

    const toggleExpert = () => setExpertOpen(!expertOpen());
    const toggleCollective = () => setCollectiveOpen(!collectiveOpen());

    const scheduleSaturday = [
        { time: "ab 10:30", event: "Ankommen" },
        { time: "11:00", event: "gemeinsames Kennenlernen & Warm-Up" },
        { time: "12:00", event: "Repertoireprobe" },
        { time: "13:00", event: "Mittagspause" },
        { time: "14:00", event: "Workshop I" },
        { time: "15:15", event: "Probe mit allen" },
        { time: "15:45", event: "PAUSE" },
        { time: "16:00", event: "Workshop II" },
        { time: "17:00", event: "Warm-Up Konzert" },
        { time: "17:45", event: "Werkstattkonzert" },
        { time: "18:30", event: "Rückfahrt" },
    ];

    const scheduleSunday = [
        { time: "15:00", event: "Ankommen" },
        { time: "15:15", event: "Warm-Up mit Euch" },
        { time: "16:00", event: "Soundcheck vode" },
        { time: "16:30", event: "PAUSE" },
        { time: "17:00", event: "Konzert vode" },
        { time: "18:00", event: "Beisammensein nach dem Konzert" },
        { time: "19:00", event: "Rückfahrt" },
    ];

    return (
        <div class="bg-[var(--color-dark-alt)] text-[var(--color-light-text)]">
            <div class="container mx-auto px-4 py-16 md:py-24 space-y-24">

                {/* --- Hero Section --- */}
                <section id="project-intro" class="text-center">
                    <h1 class="text-4xl md:text-6xl font-bold mb-4">Unser aktuelles Projekt: <span class="text-[var(--color-accent)]">Chor macht Schule</span></h1>
                    <p class="md:text-lg max-w-3xl mx-auto mb-8">
                        Schön, dass du den Weg zu uns gefunden hast! Hier findest du alle wichtigen Infos zum Projekt.
                    </p>
                    <div class="text-left max-w-2xl mx-auto bg-[var(--color-dark)] p-6 rounded-lg shadow-lg">
                        <p class="mb-2"><strong>Zeitraum:</strong> 30. & 31. August</p>
                        <p class="mb-2"><strong>Ort:</strong> St. Ida in Herzfeld – Treffpunkt Haus Idenrast</p>
                        <p class="mb-4"><strong>Adresse:</strong> Lippstädter Str. 10 59510 Herzfeld oder <a href="https://what3words.com/langer.eintreten.vorab" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] hover:underline">///langer.eintreten.vorab</a></p>
                        <p class="mb-4">Die Anreise erfolgt umweltfreundlich über Shuttlebusse! Dazu gibt es zwei Linien, die euch aus der Region zu uns nach Herzfeld fahren. Die genauen Abfahrtszeiten findest du demnächst hier auf der Seite.</p>
                        <p>Die Anmeldung, egal ob einzeln oder als ganzes Ensemble, erfolgt digital über <a href="/anmeldung-chor-macht-schule" class="text-[var(--color-accent)] font-bold hover:underline">dieses Formular!</a></p>
                    </div>
                </section>

                {/* --- What to Expect Section --- */}
                <section id="expectations" class="max-w-4xl mx-auto">
                    <h2 class="text-3xl md:text-4xl font-bold mb-10 text-center">Was erwartet dich bei unserem Projekt?</h2>
                    <ul class="space-y-6">
                        <li class="bg-[var(--color-dark)] p-6 rounded-lg shadow-lg">
                            <h3 class="font-bold text-xl text-[var(--color-accent)] mb-2">Teamgefühl</h3>
                            <p>Du probst gemeinsam mit anderen Jugendlichen aus der Region Lippe-Möhnesee und lernst neue Leute kennen – ganz ohne Leistungsdruck!</p>
                        </li>
                        <li class="bg-[var(--color-dark)] p-6 rounded-lg shadow-lg">
                            <h3 class="font-bold text-xl text-[var(--color-accent)] mb-2">Profi-Coaching</h3>
                            <p>Katharina Gärtner und ihre Coaches von <strong>vode</strong> zeigen dir in lockeren Workshops, wie du deine Stimme richtig einsetzt und souverän auf der Bühne stehst.</p>
                        </li>
                        <li class="bg-[var(--color-dark)] p-6 rounded-lg shadow-lg">
                            <h3 class="font-bold text-xl text-[var(--color-accent)] mb-2">Workshop-Konzert</h3>
                            <p>Am Ende des ersten Tages präsentierst du live im Workshop-Chor ein Werkstatt-Konzert. Gute Vibes und Fun garantiert!</p>
                        </li>
                        <li class="bg-[var(--color-dark)] p-6 rounded-lg shadow-lg">
                            <h3 class="font-bold text-xl text-[var(--color-accent)] mb-2">Profi-Konzert</h3>
                            <p>Am zweiten Tag erlebst du <strong>vode</strong> hautnah, wenn sie die Basilika mit ihrem A-cappella-Mix aus Pop und Jazz in neue Klänge eintauchen.</p>
                        </li>
                    </ul>
                </section>

                {/* --- Why Join Section --- */}
                <section id="why-join" class="max-w-4xl mx-auto">
                    <h2 class="text-3xl md:text-4xl font-bold mb-10 text-center">Warum solltest du dabei sein?</h2>
                    <ul class="space-y-6">
                        <li class="bg-[var(--color-dark)] p-6 rounded-lg shadow-lg">
                            <h3 class="font-bold text-xl text-[var(--color-accent)] mb-2">Spaß am Singen</h3>
                            <p>Gemeinsam Lieder lernen, die perfekt zu dir und deinen aktuellen "Vocal Skills" passen.</p>
                        </li>
                        <li class="bg-[var(--color-dark)] p-6 rounded-lg shadow-lg">
                            <h3 class="font-bold text-xl text-[var(--color-accent)] mb-2">Neue Songs</h3>
                            <p>Viele Songs kannst du dir selbst erarbeiten und später auch mit deinem Chor an deiner Schule singen – so kannst du aus den Projekttagen noch lange etwas mitnehmen.</p>
                        </li>
                        <li class="bg-[var(--color-dark)] p-6 rounded-lg shadow-lg">
                            <h3 class="font-bold text-xl text-[var(--color-accent)] mb-2">Unvergessliche Erfahrung</h3>
                            <p>Neue Freunde, magische Konzertstimmung und jede Menge Applaus!</p>
                        </li>
                    </ul>
                </section>

                {/* --- Schedule Section --- */}
                <section id="schedule" class="max-w-4xl mx-auto">
                    <h2 class="text-3xl md:text-4xl font-bold mb-10 text-center">Wie ist der Ablauf an den beiden Tagen?</h2>
                    <div class="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 class="text-2xl font-bold mb-6 text-center text-[var(--color-accent)]">SAMSTAG</h3>
                            <div class="bg-[var(--color-dark)] rounded-lg shadow-lg overflow-hidden">
                                <For each={scheduleSaturday}>{(item, i) =>
                                    <div class="flex border-b border-gray-700 last:border-b-0">
                                        <p class="w-1/3 bg-[var(--color-accent)]/20 p-3 font-semibold">{item.time}</p>
                                        <p class="w-2/3 p-3">{item.event}</p>
                                    </div>
                                }</For>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold mb-6 text-center text-[var(--color-accent)]">SONNTAG</h3>
                            <div class="bg-[var(--color-dark)] rounded-lg shadow-lg overflow-hidden">
                                <For each={scheduleSunday}>{(item, i) =>
                                    <div class="flex border-b border-gray-700 last:border-b-0">
                                        <p class="w-1/3 bg-[var(--color-accent)]/20 p-3 font-semibold">{item.time}</p>
                                        <p class="w-2/3 p-3">{item.event}</p>
                                    </div>
                                }</For>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Additional Info Section --- */}
                <section id="additional-info" class="text-center">
                    <div class="grid md:grid-cols-2 gap-12 items-center">
                        <div class="max-w-sm mx-auto">
                            <img src="/images/chor_macht_schule_2025.png" alt="Chor macht Schule Poster" class="rounded-lg shadow-lg w-full" />
                            <p class="text-sm mt-2 text-gray-400">Bitte füge das Plakat unter `public/images/chor_macht_schule_2025.png` ein.</p>
                        </div>
                        <div class="text-left">
                            <h2 class="text-3xl md:text-4xl font-bold mb-6">Was du noch wissen musst...</h2>
                            <ul class="space-y-4 list-disc list-inside">
                                <li>Das Projekt ist mit Mitteln aus dem LEADER-Programm gefördert und daher für dich komplett kostenfrei.</li>
                                <li>An beiden Tagen gibt es Snacks und etwas zu Trinken für dich.</li>
                                <li>Aktuell komponieren und arrangieren wir noch fleißig für dich. Sobald wir alles zusammen haben, findest du den Zugang zu den Songs hier auf dieser Seite.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* --- Video Section --- */}
                <section id="video" class="text-center">
                    <div class="bg-black w-full max-w-4xl mx-auto aspect-video rounded-lg shadow-lg flex items-center justify-center">
                        <p class="text-gray-400">Video-Player Platzhalter</p>
                    </div>
                </section>

                {/* --- Formate Section (moved to bottom) --- */}
                <section id="formate">
                    <div class="mb-16 md:mb-24">
                        <h2 class="text-3xl md:text-4xl font-bold mb-10 text-center">{t('academy.formatsTitle', {}, 'Unsere Formate')}</h2>
                        <div class="grid lg:grid-cols-2 gap-8 md:items-start max-w-4xl mx-auto">
                            {/* Vode:Expert Card */}
                            <div class="bg-[var(--color-dark)] rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden flex flex-col">
                                <button type="button"
                                    onClick={toggleExpert}
                                    class="w-full flex justify-between items-center px-6 py-5 text-left text-2xl font-semibold text-[var(--color-light-text)] hover:bg-gray-800 focus:outline-none transition-colors"
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
                            <div class="bg-[var(--color-dark)] rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden flex flex-col">
                                <button type="button"
                                    onClick={toggleCollective}
                                    class="w-full flex justify-between items-center px-6 py-5 text-left text-2xl font-semibold text-[var(--color-light-text)] hover:bg-gray-800 focus:outline-none transition-colors"
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