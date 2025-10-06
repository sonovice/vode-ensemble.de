import { type Component, For, type JSX, createSignal, Show, createMemo } from "solid-js";
import { useI18n } from "../i18n";

// Define ConcertEntry type based on existing structure
type ConcertEntry = {
    datetime: Date;
    location: string;
    address: string;
    title: string;
    description: JSX.Element;
};

// Original concert data structure
const concerts: Record<string, ConcertEntry[]> = {
    "2025": [
        {
            datetime: new Date("2025-05-10 20:00"),
            location: "Kleve",
            address: "Stadthalle | Lohstätte 7 | 47533 Kleve",
            title: "A cappella Konzert",
            description: <>Konzerteinführung um 19:00 Uhr. <a href="https://www.reservix.de/tickets-true-colours-vode-ensemble-in-kleve-stadthalle-am-10-5-2025/e2268821" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] hover:underline">Tickets</a></>
        },
        {
            datetime: new Date("2025-08-31 17:00"),
            location: "Herzfeld",
            address: "Wallfahrtskirche St. Ida | Kirchplatz 3 | 59510 Lippetal",
            title: "A cappella Konzert",
            description: <></>
        },
        {
            datetime: new Date("2025-10-03 19:00"),
            location: "Kastellaun",
            address: "",
            title: "Doppelkonzert mit dem Jugendchor der Chorakademie Kastellaun",
            description: <></>
        },
        {
            datetime: new Date("2025-10-04 19:00"),
            location: "Wiesbaden",
            address: "Aula der Elly-Heuss-Schule Wiesbaden | Platz der Deutschen Einheit 2 | 65185 Wiesbaden",
            title: "Doppelkonzert mit perlemor",
            description: <><a href="https://eventfrog.de/de/p/konzert/a-cappella-vocal/vocal-elements-zwei-ensembles-ein-leuchten-7351880902861939160.html" target="_blank" rel="noopener noreferrer"><button type="button" class="bg-[var(--color-accent)] cursor-pointer text-white font-bold px-4 py-2 rounded-md">Tickets</button></a></>
        }
    ],
    "2024": [
        {
            datetime: new Date("2024-03-28 19:00"),
            location: "Hannover",
            address: "Goetheschule | Franziusweg 43, 30167 Hannover",
            title: "Doppelkonzert mit dem Jazzchor Hannover",
            description: <>Der Eintritt ist frei</>
        },
        {
            datetime: new Date("2024-04-13 20:00"),
            location: "Berlin",
            address: "Cafe Theater Schalotte | Behaimstraße 22, 10585 Berlin",
            title: "Doppelkonzert mit dem Feature Chor Berlin",
            description: <><a href="https://www.ticketino.com/de/Event/Feature-Chor-Berlin-vode-Total-Choral/187300" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] hover:underline">Tickets</a></>
        },
        {
            datetime: new Date("2024-05-03 20:00"),
            location: "Jever",
            address: "Stadtkirche | Am Kirchplatz 13, 26441 Jever",
            title: "Doppelkonzert mit CantaMare",
            description: <>Tickets (15/10€) sind bestellbar unter <a href="mailto:info@popchor-cantamare.com" class="text-[var(--color-accent)] hover:underline">info@popchor-cantamare.com</a> und telefonisch unter 0170 823 5530 oder 04422 4383.</>
        },
        {
            datetime: new Date("2024-05-04 19:30"),
            location: "Hamburg",
            address: "St. Pauli-Kirche | Pinnasberg 80, 20359 Hamburg",
            title: "Doppelkonzert mit SISTAHH",
            description: <><a href="https://www.tixforgigs.com/de-de/Event/53133" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] hover:underline">Tickets</a></>
        },
        {
            datetime: new Date("2024-06-14 20:00"),
            location: "Kirchzarten",
            address: "", // Address not provided, festival location might vary
            title: "Konzert im Rahmen des Black Forest Voices Festivals",
            description: <>Weitere Informationen und Tickets unter <a href="https://blackforestvoices.com/" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] hover:underline">https://blackforestvoices.com/</a></>
        },
        {
            datetime: new Date("2024-09-06 19:00"),
            location: "Büren",
            address: "Jesuitenkirche Maria Immaculata | Burgstraße 2/4, 33142 Büren",
            title: "Eröffnungskonzert Bürener Kantoreikonzerte 2024",
            description: <>Weitere Informationen beim Pastoralverbund Büren</>
        },
        {
            datetime: new Date("2024-09-07 19:00"),
            location: "Bielefeld",
            address: "Johanniskirche | Johanniskirchplatz 1, 33615 Bielefeld",
            title: "A cappella Konzert",
            description: <>Eintritt ist frei, Spenden sind erwünscht</>
        }
    ],
    "2023": [
        {
            datetime: new Date("2023-02-11 20:00"),
            location: "Bielefeld",
            address: "Oetkerhalle",
            title: "Nacht der Chöre",
            description: <></>
        },
        {
            datetime: new Date("2023-02-12 11:30"),
            location: "Detmold",
            address: "Sommertheater",
            title: "Doppelwumms Konzert mit Pop-Up",
            description: <></>
        },
        {
            datetime: new Date("2023-04-15 19:00"),
            location: "Daverden",
            address: "",
            title: "Green Lights",
            description: <></>
        },
        {
            datetime: new Date("2023-04-16 19:30"),
            location: "Vechta",
            address: "Klosterkirche",
            title: "Green Lights mit dem Chor der Universität Vechta",
            description: <></>
        },
        {
            datetime: new Date("2023-07-01 20:00"),
            location: "Hamburg",
            address: "Elbphilharmonie",
            title: "Konzert in der Elbphilharmonie",
            description: <></>
        },
        {
            datetime: new Date("2023-08-03 20:00"),
            location: "Detmold",
            address: "Marktplatz",
            title: "Sommerbühne",
            description: <></>
        },
        {
            datetime: new Date("2023-08-04 19:30"),
            location: "Bielefeld",
            address: "Johanniskirche",
            title: "Konzert Johanniskirche",
            description: <></>
        },
        {
            datetime: new Date("2023-12-22 19:00"),
            location: "Bielefeld",
            address: "Altstädter Nikolaikirche",
            title: "Musikalischer Adventskalender",
            description: <></>
        },
        {
            datetime: new Date("2023-12-23 19:30"),
            location: "Oerlinghausen",
            address: "",
            title: "Kerzenscheinkonzert",
            description: <></>
        }
    ],
    "2022": [
        {
            datetime: new Date("2022-08-20 19:30"),
            location: "Bielefeld",
            address: "Zionskirche",
            title: "Konzert Zionskirche",
            description: <></>
        },
        {
            datetime: new Date("2022-08-21 11:30"),
            location: "Horn-Bad Meinberg",
            address: "Red Horn District",
            title: "Konzert Red Horn District",
            description: <></>
        },
        {
            datetime: new Date("2022-12-17 19:30"),
            location: "Bielefeld",
            address: "Nicolaikirche",
            title: "Musikalischer Adventskalender",
            description: <></>
        }
    ]
};

const Konzerte: Component = () => {
    const { t, locale } = useI18n();
    const sortedYears = Object.keys(concerts).sort((a, b) => Number.parseInt(b) - Number.parseInt(a));
    const [selectedYear, setSelectedYear] = createSignal<string>('');
    const now = new Date();

    const yearConcerts = createMemo(() => {
        const selected = selectedYear();
        if (!selected || !concerts[selected]) return { past: [] };

        const allConcertsInYear = concerts[selected].sort((a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime());
        const past = allConcertsInYear.filter(c => c.datetime <= now).reverse();
        return { past };
    });

    const allUpcomingConcertsGlobal = createMemo(() => {
        const all: ConcertEntry[] = [];
        for (const year in concerts) {
            all.push(...concerts[year].filter(c => c.datetime > now));
        }
        return all.sort((a, b) => a.datetime.getTime() - b.datetime.getTime());
    });

    return (
        <section
            id="konzerte"
            class="bg-[var(--color-dark-alt)] text-[var(--color-light-text)] py-16 md:py-24"
        >
            <div class="container mx-auto px-4">
                <div class="w-full text-left mb-2">
                    <p class="font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                        {t('concerts.sectionTag', {}, 'Konzerte')}
                    </p>
                    <h1 class="text-4xl md:text-6xl lg:text-8xl font-bold mb-2 text-[var(--color-light-text)]">
                        {t('concerts.title', {}, 'Anstehende Events')}
                    </h1>
                </div>
                <div class="flex flex-col md:flex-row items-start gap-10 lg:gap-16">
                    <div class="w-full">
                        {/* <h2 class="text-3xl font-semibold mb-6 text-left text-[var(--color-light-text)]">Alle Kommenden Termine</h2> */}
                        <Show
                            when={allUpcomingConcertsGlobal().length > 0}
                            fallback={<p class="text-center md:text-left text-lg text-[var(--color-light-text)]/60 italic mb-12">{t('concerts.noUpcomingFallback', {}, 'Fallback text')}</p>}
                        >
                            <div class="space-y-6 mb-12">
                                <For each={allUpcomingConcertsGlobal()}>
                                    {(concert) => (
                                        <div class="flex flex-row items-start p-4 bg-[var(--color-surface-alt)] rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl ring-1 ring-[var(--color-light-text)]/20">
                                            <div class="flex flex-col items-center justify-start text-center w-fit md:w-24 mr-5 shrink-0 mb-0">
                                                <div class="text-sm uppercase text-[var(--color-accent)] font-semibold tracking-wider">{concert.datetime.toLocaleDateString(locale(), { month: 'short' })}</div>
                                                <div class="font-black text-3xl text-[var(--color-light-text)] my-0.5">{concert.datetime.getDate().toLocaleString(locale(), { minimumIntegerDigits: 2 })}</div>
                                                <div class="text-sm text-[var(--color-light-text)]/70 font-medium">{concert.datetime.toLocaleDateString(locale(), { weekday: 'short' })}.</div>
                                            </div>
                                            <div class="flex-grow text-left">
                                                <h3 class="text-xl font-bold text-[var(--color-light-text)] mb-2">{concert.title}</h3>
                                                <div class="text-md mb-1">
                                                    <span class="font-semibold mr-2 text-[var(--color-light-text)]/80">{concert.datetime.toLocaleTimeString(locale(), { hour: '2-digit', minute: '2-digit' })} {t('concerts.timeSuffix', {}, 'Uhr')}</span>
                                                    <span class="text-[var(--color-accent)] font-medium">{concert.location}</span>
                                                </div>
                                                <Show when={concert.address}>
                                                    <p class="text-sm text-[var(--color-light-text)]/70 mb-2">{concert.address}</p>
                                                </Show>
                                                <div class="text-sm text-[var(--color-light-text)]/80 prose prose-xs prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:underline">{concert.description}</div>
                                            </div>
                                        </div>
                                    )}
                                </For>
                            </div>
                        </Show>

                        <h2 class="text-3xl font-semibold mt-12 mb-6 text-left text-[var(--color-light-text)]">{t('concerts.pastTitle', {}, 'Vergangene Konzerte')}</h2>

                        <div class="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
                            <For each={sortedYears}>
                                {(year) => (
                                    <button
                                        type="button"
                                        onClick={() => setSelectedYear(year)}
                                        class={`py-2 px-4 text-lg rounded-md transition-all duration-300 font-medium border-2
                                        ${selectedYear() === year
                                                ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)]'
                                                : 'bg-transparent border-[var(--color-light-text)]/30 text-[var(--color-light-text)]/70 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                                            }`}
                                    >
                                        {year}
                                    </button>
                                )}
                            </For>
                        </div>

                        <Show
                            when={selectedYear()}
                        >
                            <Show
                                when={yearConcerts().past.length > 0}
                                fallback={<p class="text-center md:text-left text-lg text-[var(--color-light-text)]/60 italic">Für das Jahr {selectedYear()} sind keine vergangenen Konzerte im Archiv.</p>}
                            >
                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                    <For each={yearConcerts().past}>
                                        {(concert) => (
                                            <div class="flex flex-row items-start p-4 bg-[var(--color-surface-alt)] rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl ring-1 ring-[var(--color-light-text)]/20 w-full">
                                                <div class="flex flex-col items-center justify-center text-center w-fit md:w-24 mr-5 shrink-0">
                                                    <div class="text-sm uppercase text-[var(--color-accent)] font-semibold tracking-wider">{concert.datetime.toLocaleDateString(locale(), { month: 'short' })}</div>
                                                    <div class="font-black text-3xl text-[var(--color-light-text)] my-0.5">{concert.datetime.getDate().toLocaleString(locale(), { minimumIntegerDigits: 2 })}</div>
                                                    <div class="text-sm text-[var(--color-light-text)]/70 font-medium">{concert.datetime.toLocaleDateString(locale(), { weekday: 'short' })}.</div>
                                                </div>
                                                <div class="flex-grow text-left">
                                                    <h3 class="text-xl font-bold text-[var(--color-light-text)] mb-2">{concert.title}</h3>
                                                    <div class="text-md mb-1">
                                                        <span class="font-semibold mr-2 text-[var(--color-light-text)]/80">{concert.datetime.toLocaleTimeString(locale(), { hour: '2-digit', minute: '2-digit' })} {t('concerts.timeSuffix', {}, 'Uhr')}</span>
                                                        <span class="text-[var(--color-accent)] font-medium">{concert.location}</span>
                                                    </div>
                                                    {/* <Show when={concert.address}>
                                                        <p class="text-sm text-[var(--color-light-text)]/70 mb-2">{concert.address}</p>
                                                    </Show> */}
                                                    {/* <div class="text-sm text-[var(--color-light-text)]/80 prose prose-xs prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:underline">{concert.description}</div> */}
                                                </div>
                                            </div>
                                        )}
                                    </For>
                                </div>
                            </Show>
                        </Show>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Konzerte;