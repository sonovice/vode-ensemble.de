import { type Component, Show, createSignal, For, createMemo } from "solid-js";
import { useI18n } from "../i18n";

const Academy2025: Component = () => {
    const { t, locale } = useI18n();
    const [expertOpen, setExpertOpen] = createSignal(false);
    const [collectiveOpen, setCollectiveOpen] = createSignal(false);

    const toggleExpert = () => setExpertOpen(!expertOpen());
    const toggleCollective = () => setCollectiveOpen(!collectiveOpen());

    // Calendar view data with duration in minutes - localized and reactive
    const scheduleData = createMemo(() => {
        const currentLocale = locale();
        if (currentLocale === 'en') {
            return {
                saturday: [
                    { startTime: "10:30", endTime: "11:00", event: "Arrival", duration: 30, isPause: false },
                    { startTime: "11:00", endTime: "12:00", event: "Meet & Greet + Warm-Up", duration: 60, isPause: false },
                    { startTime: "12:00", endTime: "13:00", event: "Repertoire Rehearsal", duration: 60, isPause: false },
                    { startTime: "13:00", endTime: "14:00", event: "Lunch Break", duration: 60, isPause: true },
                    { startTime: "14:00", endTime: "15:15", event: "Workshop I", duration: 75, isPause: false },
                    { startTime: "15:15", endTime: "15:45", event: "Full Group Rehearsal", duration: 30, isPause: false },
                    { startTime: "15:45", endTime: "16:00", event: "Break", duration: 15, isPause: true },
                    { startTime: "16:00", endTime: "17:00", event: "Workshop II", duration: 60, isPause: false },
                    { startTime: "17:00", endTime: "17:45", event: "Concert Warm-Up", duration: 45, isPause: false },
                    { startTime: "17:45", endTime: "18:30", event: "Workshop Performance", duration: 45, isPause: false },
                    { startTime: "18:30", endTime: "19:00", event: "Departure", duration: 30, isPause: false },
                ],
                sunday: [
                    { startTime: "15:00", endTime: "15:15", event: "Arrival", duration: 15, isPause: false },
                    { startTime: "15:15", endTime: "16:00", event: "Warm-Up Together", duration: 45, isPause: false },
                    { startTime: "16:00", endTime: "16:30", event: "vode Soundcheck", duration: 30, isPause: false },
                    { startTime: "16:30", endTime: "17:00", event: "Break", duration: 30, isPause: true },
                    { startTime: "17:00", endTime: "18:00", event: "vode Concert", duration: 60, isPause: false },
                    { startTime: "18:00", endTime: "19:00", event: "Post-Concert Gathering", duration: 60, isPause: false },
                    { startTime: "19:00", endTime: "19:30", event: "Departure", duration: 30, isPause: false },
                ]
            };
        }
        // German default
        return {
            saturday: [
                { startTime: "10:30", endTime: "11:00", event: "Ankommen", duration: 30, isPause: false },
                { startTime: "11:00", endTime: "12:00", event: "gemeinsames Kennenlernen & Warm-Up", duration: 60, isPause: false },
                { startTime: "12:00", endTime: "13:00", event: "Repertoireprobe", duration: 60, isPause: false },
                { startTime: "13:00", endTime: "14:00", event: "Mittagspause", duration: 60, isPause: true },
                { startTime: "14:00", endTime: "15:15", event: "Workshop I", duration: 75, isPause: false },
                { startTime: "15:15", endTime: "15:45", event: "Probe mit allen", duration: 30, isPause: false },
                { startTime: "15:45", endTime: "16:00", event: "Pause", duration: 15, isPause: true },
                { startTime: "16:00", endTime: "17:00", event: "Workshop II", duration: 60, isPause: false },
                { startTime: "17:00", endTime: "17:45", event: "Warm-Up Konzert", duration: 45, isPause: false },
                { startTime: "17:45", endTime: "18:30", event: "Werkstattkonzert", duration: 45, isPause: false },
                { startTime: "18:30", endTime: "19:00", event: "Rückfahrt", duration: 30, isPause: false },
            ],
            sunday: [
                { startTime: "15:00", endTime: "15:15", event: "Ankommen", duration: 15, isPause: false },
                { startTime: "15:15", endTime: "16:00", event: "Warm-Up mit Euch", duration: 45, isPause: false },
                { startTime: "16:00", endTime: "16:30", event: "Soundcheck vode", duration: 30, isPause: false },
                { startTime: "16:30", endTime: "17:00", event: "Pause", duration: 30, isPause: true },
                { startTime: "17:00", endTime: "18:00", event: "Konzert vode", duration: 60, isPause: false },
                { startTime: "18:00", endTime: "19:00", event: "Beisammensein nach dem Konzert", duration: 60, isPause: false },
                { startTime: "19:00", endTime: "19:30", event: "Rückfahrt", duration: 30, isPause: false },
            ]
        };
    });

    const scheduleSaturday = () => scheduleData().saturday;
    const scheduleSunday = () => scheduleData().sunday;

    return (
        <>
            {/* --- Hero Section --- */}
            <section class="py-16 md:py-24 bg-[var(--color-dark-alt)] text-[var(--color-light-text)]">
                <div class="container mx-auto px-4">
                    <div class="text-center max-w-6xl mx-auto">
                        <h1 class="text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
                            {t('academy.academy2025.heroTitle', {}, 'vode academy 2025:')}<span class="text-[var(--color-accent)]"><br />{t('academy.academy2025.heroSubtitle', {}, 'Chor macht Schule')}</span>
                        </h1>
                        <p class="text-lg md:text-xl leading-relaxed text-[var(--color-light-text)]/80 mb-8">
                            {t('academy.academy2025.heroDescription', {}, 'Schön, dass du den Weg zu uns gefunden hast! Hier findest du alle wichtigen Infos zum Projekt.')}
                        </p>
                        <div class="flex flex-col lg:flex-row gap-12 items-start max-w-6xl mx-auto">
                            <div class="w-full lg:w-2/3 text-left">
                                <div class="space-y-6 mb-8">
                                    {/* Projekt Details Card */}
                                    <div class="bg-[var(--color-surface-alt)] rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl ring-1 ring-[var(--color-light-text)]/20 p-6">
                                        <div class="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h3 class="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider mb-2">{t('academy.academy2025.timeLabel', {}, 'Zeitraum')}</h3>
                                                <p class="text-xl font-bold text-[var(--color-light-text)]">{t('academy.academy2025.timeValue', {}, '30. & 31. August')}</p>
                                            </div>
                                            <div>
                                                <h3 class="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider mb-2">{t('academy.academy2025.locationLabel', {}, 'Ort & Adresse')}</h3>
                                                <p class="text-xl font-bold text-[var(--color-light-text)]">{t('academy.academy2025.locationValue', {}, 'St. Ida in Herzfeld')}</p>
                                                <p class="text-sm text-[var(--color-light-text)]/70 mt-1">{t('academy.academy2025.locationDetail', {}, 'Treffpunkt Haus Idenrast')}</p>
                                                <div class="space-y-1 mt-3">
                                                    <p class="text-sm text-[var(--color-light-text)]">
                                                        <a href="https://maps.app.goo.gl/L9tdFC1moUnQHzDf9" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] hover:underline font-medium">
                                                            {t('academy.academy2025.addressValue', {}, 'Lippstädter Str. 10, 59510 Herzfeld')}
                                                        </a>
                                                    </p>
                                                    <p class="text-xs text-[var(--color-light-text)]/70">
                                                        {t('academy.academy2025.addressAlt', {}, 'oder')}{" "}
                                                        <a href="https://what3words.com/langer.eintreten.vorab" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] hover:underline">
                                                            {"///langer.eintreten.vorab"}
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Anreise Info Card */}
                                    <div class="bg-[var(--color-surface-alt)] rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl ring-1 ring-[var(--color-light-text)]/20 p-6">
                                        <h3 class="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider mb-3">{t('academy.academy2025.transportTitle', {}, 'Anreise')}</h3>
                                        <p class="text-base leading-relaxed text-[var(--color-light-text)]/80">
                                            {t('academy.academy2025.transportText', {}, 'Die Anreise erfolgt umweltfreundlich über Shuttlebusse! Dazu gibt es zwei Linien, die euch aus der Region zu uns nach Herzfeld fahren. Die genauen Abfahrtszeiten findest du demnächst hier auf der Seite.')}
                                        </p>
                                    </div>
                                </div>

                                {/* Call-to-Action */}
                                <div class="text-center">
                                    <a
                                        href="https://forms.office.com/e/4r01h2VjYq"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-accent)] text-white font-bold text-lg rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                    >
                                        <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <title>Anmeldung Icon</title>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        {t('academy.academy2025.registerButton', {}, 'Jetzt anmelden!')}
                                    </a>
                                    <p class="text-sm text-[var(--color-light-text)]/60 mt-3">
                                        {t('academy.academy2025.registerSubtext', {}, 'Einzeln oder als ganzes Ensemble')}
                                    </p>
                                </div>
                            </div>
                            <div class="w-full lg:w-1/3 text-center">
                                <div class="max-w-md mx-auto">
                                    <div class="bg-[var(--color-surface-alt)] rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl ring-1 ring-[var(--color-light-text)]/20">
                                        <div class="aspect-[9/16]">
                                            <iframe
                                                class="w-full h-full rounded-t-lg"
                                                src="https://www.youtube.com/embed/m5BTiZ8ACjo"
                                                title="Chor macht Schule - Teaser"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowfullscreen
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- What to Expect Section --- */}
            <section class="py-16 md:py-24 bg-[var(--color-dark)] text-[var(--color-light-text)]">
                <div class="container mx-auto px-4">
                    <div class="max-w-6xl mx-auto">
                        <div class="text-center mb-12">
                            <p class="font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                                {t('academy.academy2025.whatToExpectSectionTag', {}, 'Unser Angebot')}
                            </p>
                            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t('academy.academy2025.whatToExpectTitle', {}, 'Was erwartet dich bei unserem Projekt?')}</h2>
                        </div>
                        <div class="grid md:grid-cols-2 gap-8">
                            <div class="bg-[var(--color-dark)] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div class="w-12 h-12 bg-[var(--color-accent)] rounded-lg flex items-center justify-center mb-4">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <title>Team Icon</title>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 class="font-bold text-xl text-[var(--color-accent)] mb-3">{t('academy.academy2025.teamworkTitle', {}, 'Teamgefühl')}</h3>
                                <p class="text-lg leading-relaxed text-[var(--color-light-text)]/80"
                                    innerHTML={t('academy.academy2025.teamworkText', {}, 'Du probst gemeinsam mit anderen Jugendlichen aus der Region Lippe-Möhnesee und lernst neue Leute kennen – ganz ohne Leistungsdruck!') || ''}>
                                </p>
                            </div>
                            <div class="bg-[var(--color-dark)] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div class="w-12 h-12 bg-[var(--color-accent)] rounded-lg flex items-center justify-center mb-4">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <title>Mikrofon Icon</title>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                    </svg>
                                </div>
                                <h3 class="font-bold text-xl text-[var(--color-accent)] mb-3">{t('academy.academy2025.coachingTitle', {}, 'Profi-Coaching')}</h3>
                                <p class="text-lg leading-relaxed text-[var(--color-light-text)]/80"
                                    innerHTML={t('academy.academy2025.coachingText', {}, 'Katharina Gärtner und ihre Coaches von <strong>vode</strong> zeigen dir in lockeren Workshops, wie du deine Stimme richtig einsetzt und souverän auf der Bühne stehst.') || ''}>
                                </p>
                            </div>
                            <div class="bg-[var(--color-dark)] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div class="w-12 h-12 bg-[var(--color-accent)] rounded-lg flex items-center justify-center mb-4">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <title>Musik Icon</title>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                    </svg>
                                </div>
                                <h3 class="font-bold text-xl text-[var(--color-accent)] mb-3">{t('academy.academy2025.workshopConcertTitle', {}, 'Workshop-Konzert')}</h3>
                                <p class="text-lg leading-relaxed text-[var(--color-light-text)]/80"
                                    innerHTML={t('academy.academy2025.workshopConcertText', {}, 'Am Ende des ersten Tages präsentierst du live im Workshop-Chor ein Werkstatt-Konzert. Gute Vibes und Fun garantiert!') || ''}>
                                </p>
                            </div>
                            <div class="bg-[var(--color-dark)] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div class="w-12 h-12 bg-[var(--color-accent)] rounded-lg flex items-center justify-center mb-4">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <title>Video Icon</title>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 class="font-bold text-xl text-[var(--color-accent)] mb-3">{t('academy.academy2025.proConcertTitle', {}, 'Profi-Konzert')}</h3>
                                <p class="text-lg leading-relaxed text-[var(--color-light-text)]/80"
                                    innerHTML={t('academy.academy2025.proConcertText', {}, 'Am zweiten Tag erlebst du <strong>vode</strong> hautnah, wenn sie die Basilika mit ihrem A-cappella-Mix aus Pop und Jazz in neue Klänge eintauchen.') || ''}>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Why Join Section --- */}
            <section class="py-16 md:py-24 bg-[var(--color-dark-alt)] text-[var(--color-light-text)]">
                <div class="container mx-auto px-4">
                    <div class="max-w-6xl mx-auto">
                        <div class="text-center mb-12">
                            <p class="font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                                {t('academy.academy2025.whyJoinSectionTag', {}, 'Deine Vorteile')}
                            </p>
                            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t('academy.academy2025.whyJoinTitle', {}, 'Warum solltest du dabei sein?')}</h2>
                        </div>
                        <div class="grid md:grid-cols-3 gap-8">
                            <div class="text-center">
                                <div class="w-16 h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <title>Herz Icon</title>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 class="font-bold text-xl text-[var(--color-accent)] mb-4">{t('academy.academy2025.funTitle', {}, 'Spaß am Singen')}</h3>
                                <p class="text-lg leading-relaxed text-[var(--color-light-text)]/80"
                                    innerHTML={t('academy.academy2025.funText', {}, 'Gemeinsam Lieder lernen, die perfekt zu dir und deinen aktuellen "Vocal Skills" passen.') || ''}>
                                </p>
                            </div>
                            <div class="text-center">
                                <div class="w-16 h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <title>Noten Icon</title>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                    </svg>
                                </div>
                                <h3 class="font-bold text-xl text-[var(--color-accent)] mb-4">{t('academy.academy2025.newSongsTitle', {}, 'Neue Songs')}</h3>
                                <p class="text-lg leading-relaxed text-[var(--color-light-text)]/80"
                                    innerHTML={t('academy.academy2025.newSongsText', {}, 'Viele Songs kannst du dir selbst erarbeiten und später auch mit deinem Chor an deiner Schule singen – so kannst du aus den Projekttagen noch lange etwas mitnehmen.') || ''}>
                                </p>
                            </div>
                            <div class="text-center">
                                <div class="w-16 h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <title>Stern Icon</title>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <h3 class="font-bold text-xl text-[var(--color-accent)] mb-4">{t('academy.academy2025.experienceTitle', {}, 'Unvergessliche Erfahrung')}</h3>
                                <p class="text-lg leading-relaxed text-[var(--color-light-text)]/80"
                                    innerHTML={t('academy.academy2025.experienceText', {}, 'Neue Freunde, magische Konzertstimmung und jede Menge Applaus!') || ''}>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Schedule Section --- */}
            <section class="py-16 md:py-24 bg-[var(--color-dark)] text-[var(--color-light-text)]">
                <div class="container mx-auto px-4">
                    <div class="max-w-6xl mx-auto">
                        <div class="text-center mb-12">
                            <p class="font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                                {t('academy.academy2025.scheduleSectionTag', {}, 'Zeitplan')}
                            </p>
                            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t('academy.academy2025.scheduleTitle', {}, 'Wie ist der Ablauf an den beiden Tagen?')}</h2>
                        </div>
                        <div class="grid lg:grid-cols-2 gap-12">
                            {/* Saturday Calendar */}
                            <div>
                                <h3 class="text-2xl font-bold mb-6 text-center text-[var(--color-accent)]">{t('academy.academy2025.saturdayTitle', {}, 'SAMSTAG')}</h3>
                                <div class="bg-[var(--color-surface-alt)] rounded-2xl shadow-xl overflow-hidden p-4">
                                    <div class="space-y-0">
                                        {/* Start time */}
                                        <div class="flex">
                                            <div class="w-12 text-sm text-[var(--color-light-text)]/70 pr-3 text-right font-medium py-0">
                                                {scheduleSaturday()[0].startTime}
                                            </div>
                                            <div class="flex-1" />
                                        </div>

                                        <For each={scheduleSaturday()}>{(item, index) =>
                                            <>
                                                <Show when={!item.isPause}
                                                    fallback={
                                                        <div class="flex" style={{ height: `${Math.max(item.duration * 0.8, 20)}px` }}>
                                                            <div class="w-12" />
                                                            <div class="flex-1 mx-2 flex items-center" style={{ height: `${Math.max(item.duration * 0.8, 20)}px` }}>
                                                                <div class="w-full h-full border-2 border-dashed border-[var(--color-light-text)]/20 rounded flex items-center justify-center">
                                                                    <span class="text-sm text-[var(--color-light-text)]/40 italic">{item.event}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                >
                                                    <div class="flex" style={{ height: `${Math.max(item.duration * 0.8, 24)}px` }}>
                                                        <div class="w-12" />
                                                        <div class="flex-1 mx-2 flex items-center" style={{ height: `${Math.max(item.duration * 0.8, 24)}px` }}>
                                                            <div class="w-full h-full bg-[var(--color-accent)]/90 rounded flex items-center px-3">
                                                                <div class="text-white">
                                                                    <div class="text-md leading-tight">{item.event}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Show>

                                                {/* End time for this event (except for last item) */}
                                                <Show when={index() < scheduleSaturday().length - 1}>
                                                    <div class="flex">
                                                        <div class="w-12 text-sm text-[var(--color-light-text)]/70 pr-3 text-right font-medium py-0">
                                                            {item.endTime}
                                                        </div>
                                                        <div class="flex-1" />
                                                    </div>
                                                </Show>
                                            </>
                                        }</For>
                                    </div>
                                </div>
                            </div>

                            {/* Sunday Calendar */}
                            <div>
                                <h3 class="text-2xl font-bold mb-6 text-center text-[var(--color-accent)]">{t('academy.academy2025.sundayTitle', {}, 'SONNTAG')}</h3>
                                <div class="bg-[var(--color-surface-alt)] rounded-2xl shadow-xl overflow-hidden p-4">
                                    <div class="space-y-0">
                                        {/* Start time */}
                                        <div class="flex">
                                            <div class="w-12 text-sm text-[var(--color-light-text)]/70 pr-3 text-right font-medium py-0">
                                                {scheduleSunday()[0].startTime}
                                            </div>
                                            <div class="flex-1" />
                                        </div>

                                        <For each={scheduleSunday()}>{(item, index) =>
                                            <>
                                                <Show when={!item.isPause}
                                                    fallback={
                                                        <div class="flex" style={{ height: `${Math.max(item.duration * 0.8, 20)}px` }}>
                                                            <div class="w-12" />
                                                            <div class="flex-1 mx-2 flex items-center" style={{ height: `${Math.max(item.duration * 0.8, 20)}px` }}>
                                                                <div class="w-full h-full border-2 border-dashed border-[var(--color-light-text)]/20 rounded flex items-center justify-center">
                                                                    <span class="text-sm text-[var(--color-light-text)]/40 italic">{item.event}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                >
                                                    <div class="flex" style={{ height: `${Math.max(item.duration * 0.8, 24)}px` }}>
                                                        <div class="w-12" />
                                                        <div class="flex-1 mx-2 flex items-center" style={{ height: `${Math.max(item.duration * 0.8, 24)}px` }}>
                                                            <div class="w-full h-full bg-[var(--color-accent)]/90 rounded flex items-center px-3">
                                                                <div class="text-white">
                                                                    <div class="text-md leading-tight">{item.event}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Show>

                                                {/* End time for this event (except for last item) */}
                                                <Show when={index() < scheduleSunday().length - 1}>
                                                    <div class="flex">
                                                        <div class="w-12 text-sm text-[var(--color-light-text)]/70 pr-3 text-right font-medium py-0">
                                                            {item.endTime}
                                                        </div>
                                                        <div class="flex-1" />
                                                    </div>
                                                </Show>
                                            </>
                                        }</For>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Additional Info Section --- */}
            <section class="py-16 md:py-24 bg-[var(--color-dark-alt)] text-[var(--color-light-text)]">
                <div class="container mx-auto px-4">
                    <div class="max-w-6xl mx-auto">
                        <div class="text-center">
                            <p class="font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                                {t('academy.academy2025.additionalInfoSectionTag', {}, 'Wichtige Infos')}
                            </p>
                            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">{t('academy.academy2025.additionalInfoTitle', {}, 'Was du noch wissen musst...')}</h2>
                            <ul class="space-y-6 max-w-4xl mx-auto text-left">
                                <li class="flex items-start">
                                    <div class="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-3 mr-4 flex-shrink-0" />
                                    <p class="text-lg md:text-xl leading-relaxed"
                                        innerHTML={t('academy.academy2025.freeText', {}, 'Das Projekt ist mit Mitteln aus dem LEADER-Programm gefördert und daher für dich <strong>komplett kostenfrei</strong>.') || ''}>
                                    </p>
                                </li>
                                <li class="flex items-start">
                                    <div class="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-3 mr-4 flex-shrink-0" />
                                    <p class="text-lg md:text-xl leading-relaxed"
                                        innerHTML={t('academy.academy2025.snacksText', {}, 'An beiden Tagen gibt es <strong>Snacks und etwas zu Trinken</strong> für dich.') || ''}>
                                    </p>
                                </li>
                                <li class="flex items-start">
                                    <div class="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-3 mr-4 flex-shrink-0" />
                                    <p class="text-lg md:text-xl leading-relaxed"
                                        innerHTML={t('academy.academy2025.songsText', {}, 'Aktuell komponieren und arrangieren wir noch fleißig für dich. Sobald wir alles zusammen haben, findest du den <strong>Zugang zu den Songs hier auf dieser Seite</strong>.') || ''}>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Academy2025;