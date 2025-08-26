import { type Component, Show, For, createMemo } from "solid-js";
import { useI18n } from "../i18n";

const Academy2025: Component = () => {
    const { t, locale } = useI18n();

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
                                        <p class="text-base leading-relaxed text-[var(--color-light-text)]/80 mb-6">
                                            {t('academy.academy2025.transportText', {}, 'Die Anreise erfolgt umweltfreundlich über Shuttlebusse! Hier findest du die genauen Abfahrtszeiten für die beiden Linien, die euch aus der Region zu uns nach Herzfeld fahren.')}
                                        </p>
                                        <div class="grid md:grid-cols-2 gap-x-6 gap-y-8">
                                            {/* Line 1 */}
                                            <div>
                                                <h4 class="font-bold text-lg text-[var(--color-accent)] mb-3">{t('academy.academy2025.bus.line1.title', {}, 'Linie 1: Delbrück – Lippstadt – Wadersloh')}</h4>
                                                <div class="space-y-4">
                                                    <div>
                                                        <p class="font-semibold text-[var(--color-light-text)]/90">{t('academy.academy2025.saturdayTitle', {}, 'SAMSTAG')}, 30.08.2025</p>
                                                        <ul class="list-none text-[var(--color-light-text)]/80 mt-1 space-y-1 pl-2">
                                                            <li><span class="text-[var(--color-accent)] mr-2">›</span>{t('academy.academy2025.bus.line1.sat.stop1', {}, '09:30 Uhr Delbrück, Hst. Lange Str.')}</li>
                                                            <li><span class="text-[var(--color-accent)] mr-2">›</span>{t('academy.academy2025.bus.line1.sat.stop2', {}, '10:00 Uhr Lippstadt, Busbahnhof')}</li>
                                                            <li><span class="text-[var(--color-accent)] mr-2">›</span>{t('academy.academy2025.bus.line1.sat.stop3', {}, '10:25 Uhr Wadersloh, Kirche')}</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p class="font-semibold text-[var(--color-light-text)]/90">{t('academy.academy2025.sundayTitle', {}, 'SONNTAG')}, 31.08.2025</p>
                                                        <ul class="list-none text-[var(--color-light-text)]/80 mt-1 space-y-1 pl-2">
                                                            <li><span class="text-[var(--color-accent)] mr-2">›</span>{t('academy.academy2025.bus.line1.sun.stop1', {}, '14:00 Uhr Delbrück, Hst. Lange Str.')}</li>
                                                            <li><span class="text-[var(--color-accent)] mr-2">›</span>{t('academy.academy2025.bus.line1.sun.stop2', {}, '14:30 Uhr Lippstadt, Busbahnhof')}</li>
                                                            <li><span class="text-[var(--color-accent)] mr-2">›</span>{t('academy.academy2025.bus.line1.sun.stop3', {}, '14:55 Uhr Wadersloh, Kirche')}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Line 2 */}
                                            <div>
                                                <h4 class="font-bold text-lg text-[var(--color-accent)] mb-3">{t('academy.academy2025.bus.line2.title', {}, 'Linie 2: Körbecke – Soest')}</h4>
                                                <div class="space-y-4">
                                                    <div>
                                                        <p class="font-semibold text-[var(--color-light-text)]/90">{t('academy.academy2025.saturdayTitle', {}, 'SAMSTAG')}, 30.08.2025</p>
                                                        <ul class="list-none text-[var(--color-light-text)]/80 mt-1 space-y-1 pl-2">
                                                            <li><span class="text-[var(--color-accent)] mr-2">›</span>{t('academy.academy2025.bus.line2.sat.stop1', {}, '09:45 Uhr Körbecke, Haus des Gastes')}</li>
                                                            <li><span class="text-[var(--color-accent)] mr-2">›</span>{t('academy.academy2025.bus.line2.sat.stop2', {}, '10:05 Uhr Soest, Stadthalle')}</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p class="font-semibold text-[var(--color-light-text)]/90">{t('academy.academy2025.sundayTitle', {}, 'SONNTAG')}, 31.08.2025</p>
                                                        <ul class="list-none text-[var(--color-light-text)]/80 mt-1 space-y-1 pl-2">
                                                            <li><span class="text-[var(--color-accent)] mr-2">›</span>{t('academy.academy2025.bus.line2.sun.stop1', {}, '14:15 Uhr Körbecke, Haus des Gastes')}</li>
                                                            <li><span class="text-[var(--color-accent)] mr-2">›</span>{t('academy.academy2025.bus.line2.sun.stop2', {}, '14:35 Uhr Soest, Stadthalle')}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

                        {/* Centered Call-to-Action */}
                        <div class="text-center mt-12">
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
                                {t('academy.academy2025.registerButton', {}, 'Jetzt kostenlos anmelden!')}
                            </a>
                            <p class="text-sm text-[var(--color-light-text)]/60 mt-3">
                                {t('academy.academy2025.registerSubtext', {}, 'Einzeln oder als ganzes Ensemble')}
                            </p>
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

            {/* --- Workshops Section --- */}
            <section class="py-16 md:py-24 bg-[var(--color-dark-alt)] text-[var(--color-light-text)]">
                <div class="container mx-auto px-4">
                    <div class="max-w-6xl mx-auto">
                        <div class="text-center mb-12">
                            <p class="font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                                {t('academy.academy2025.workshops.sectionTag', {}, 'Unsere Workshops')}
                            </p>
                            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                {t('academy.academy2025.workshops.title', {}, 'Wähle deinen Workshop')}
                            </h2>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {/* Card 1: Drums & Voice */}
                            <div
                                class="rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center md:min-h-[350px] transition-all duration-300 transform hover:scale-105"
                                style={{ "background-color": "#5a7d76" }}
                            >
                                <h3
                                    class="text-3xl md:text-4xl font-bold uppercase text-balance"
                                    style={{ "line-height": "1.2" }}
                                >
                                    {t('academy.academy2025.workshops.rows.4.topic', {}, 'Drums & Voice – all in your body')}
                                </h3>
                                <p class="mt-4 text-lg max-w-sm">
                                    {t('academy.academy2025.workshops.rows.4.learn', {}, 'Wie man Rhythmusgefühl und Body Percussion mit der eigenen Stimme kombiniert.')}
                                </p>
                                <p class="mt-6 font-semibold text-sm uppercase tracking-wider opacity-80">
                                    {t('academy.academy2025.workshops.headers.leitung', {}, 'Leitung')}: {t('academy.academy2025.workshops.rows.4.leaders', {}, 'Liane und Niklas')}
                                </p>
                            </div>

                            {/* Card 2: Sing 'n Dance */}
                            <div
                                class="rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center md:min-h-[350px] transition-all duration-300 transform hover:scale-105"
                                style={{ "background-color": "#d883b3" }}
                            >
                                <h3
                                    class="text-3xl md:text-4xl font-bold uppercase text-balance"
                                    style={{ "line-height": "1.2" }}
                                >
                                    {t('academy.academy2025.workshops.rows.1.topic', {}, "Sing 'n Dance with Dua Lipa")}
                                </h3>
                                <p class="mt-4 text-lg max-w-sm">
                                    {t('academy.academy2025.workshops.rows.1.learn', {}, 'Du lernst einen bekannten Song von Dua Lipa und eine nice Choreo gleich mit.')}
                                </p>
                                <p class="mt-6 font-semibold text-sm uppercase tracking-wider opacity-80">
                                    {t('academy.academy2025.workshops.headers.leitung', {}, 'Leitung')}: {t('academy.academy2025.workshops.rows.1.leaders', {}, 'Simon und Krissi')}
                                </p>
                            </div>

                            {/* Card 3: Ukulele */}
                            <div
                                class="rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center md:min-h-[350px] transition-all duration-300 transform hover:scale-105"
                                style={{ "background-color": "#458ac6" }}
                            >
                                <h3
                                    class="text-3xl md:text-4xl font-bold uppercase text-balance"
                                    style={{ "line-height": "1.2" }}
                                >
                                    {t('academy.academy2025.workshops.rows.3.topic', {}, 'Ukulele meets voice')}
                                </h3>
                                <p class="mt-4 text-lg max-w-sm">
                                    {t('academy.academy2025.workshops.rows.3.learn', {}, 'Wie man Gesang und Ukulele-Spiel miteinander verbindet.')}
                                </p>
                                <p class="mt-6 font-semibold text-sm uppercase tracking-wider opacity-80">
                                    {t('academy.academy2025.workshops.headers.leitung', {}, 'Leitung')}: {t('academy.academy2025.workshops.rows.3.leaders', {}, 'Sümeye und Thea')}
                                </p>
                            </div>

                            {/* Card 4: Impro */}
                            <div
                                class="rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center md:min-h-[350px] transition-all duration-300 transform hover:scale-105"
                                style={{ "background-color": "#e07632" }}
                            >
                                <h3
                                    class="text-3xl md:text-4xl font-bold uppercase text-balance"
                                    style={{ "line-height": "1.2" }}
                                >
                                    {t('academy.academy2025.workshops.rows.2.topic', {}, 'Catch the Sound of Impro')}
                                </h3>
                                <p class="mt-4 text-lg max-w-sm">
                                    {t('academy.academy2025.workshops.rows.2.learn', {}, 'Wie man spontane, musikalische Ideen improvisiert und diese mit Aufnahmetechnik festhält.')}
                                </p>
                                <p class="mt-6 font-semibold text-sm uppercase tracking-wider opacity-80">
                                    {t('academy.academy2025.workshops.headers.leitung', {}, 'Leitung')}: {t('academy.academy2025.workshops.rows.2.leaders', {}, 'Christoph und Martin')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- News and Sheets Section --- */}
            <section class="py-16 md:py-24 bg-[var(--color-dark)] text-[var(--color-light-text)]">
                <div class="container mx-auto px-4">
                    <div class="max-w-4xl mx-auto">
                        <div class="text-center mb-12">
                            <p class="font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                                {t('academy.academy2025.newsSectionTag', {}, 'News & Sheets')}
                            </p>
                            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t('academy.academy2025.newsTitle', {}, 'Material & Tutorials')}</h2>
                            <p class="text-lg md:text-xl leading-relaxed text-[var(--color-light-text)]/80 max-w-3xl mx-auto">
                                {t('academy.academy2025.newsIntro', {}, 'Hier laden wir nach und nach neues Material für euch hoch. Schaut also immer mal wieder vorbei!')}
                            </p>
                        </div>
                        <div class="space-y-12">
                            {/* --- Cloudy Day --- */}
                            <div class="bg-[var(--color-surface-alt)] rounded-2xl shadow-xl overflow-hidden p-6 md:p-8">
                                <h3 class="text-2xl font-bold mb-4 text-[var(--color-accent)]">{t('academy.academy2025.cloudyDayTitle', {}, 'Cloudy Day - Tutorial')}</h3>
                                <div class="aspect-w-16 aspect-h-9 mb-6">
                                    <iframe
                                        class="w-full h-full rounded-lg aspect-video"
                                        src="https://www.youtube.com/embed/uq88tT1HozU"
                                        title="Cloudy Day - Tutorial"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen
                                    />
                                </div>
                                <p class="text-lg leading-relaxed text-center text-[var(--color-light-text)]/80 mb-8">
                                    {t('academy.academy2025.cloudyDayText', {}, 'Neu am Start: Unser Tutorial zu "Cloudy Day"! Der Song ist ein Kanon – ideal zum gemeinsamen Singen und zum Warmwerden. Die Noten gibt’s hier als Download. Viel Spaß beim Ausprobieren!')}
                                </p>
                                <div class="text-center">
                                    <a
                                        href="/material/Cloudy Day - vode academy 2025.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-accent)] text-white font-bold text-md rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                    >
                                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <title>Download Icon</title>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        {t('academy.academy2025.downloadButton', {}, 'Noten herunterladen')}
                                    </a>
                                </div>
                            </div>

                            {/* --- Lion (Saint Mesa) - Vocal Lines --- */}
                            <div class="bg-[var(--color-surface-alt)] rounded-2xl shadow-xl overflow-hidden p-6 md:p-8">
                                <h3 class="text-2xl font-bold mb-4 text-[var(--color-accent)]">{t('academy.academy2025.lionLinesTitle', {}, 'Quodlibet Lion - Tutorial')}</h3>
                                <div class="aspect-w-16 aspect-h-9 mb-6">
                                    <iframe
                                        class="w-full h-full rounded-lg aspect-video"
                                        src="https://www.youtube.com/embed/wvnHlf83Oz8"
                                        title="Lion (Saint Mesa) – Vocal Lines"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen
                                    />
                                </div>
                                <p class="text-lg leading-relaxed text-center text-[var(--color-light-text)]/80 mb-8">
                                    {t('academy.academy2025.lionLinesText', {}, 'Heute nimmt euch Feli mit, um mit ihr zwei kleine Lines aus verschiedenen Songs zu lernen. Am Ende soll alles zu dem Song „Lion“ von Saint Mesa passen, sodass wir damit gemeinsam eine ganz neue Live-Version bei unserem Workshop kreieren können. Viel Spaß beim Mitsingen!')}
                                </p>
                                <div class="text-center">
                                    <a
                                        href="/material/Quodlibet Lion - vode academy 2025.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-accent)] text-white font-bold text-md rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                    >
                                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <title>Download Icon</title>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        {t('academy.academy2025.downloadButton', {}, 'Noten herunterladen')}
                                    </a>
                                </div>
                            </div>

                            {/* --- The Voice Inside --- */}
                            <div class="bg-[var(--color-surface-alt)] rounded-2xl shadow-xl overflow-hidden p-6 md:p-8">
                                <h3 class="text-2xl font-bold mb-4 text-[var(--color-accent)]">{t('academy.academy2025.voiceInsideTitle', {}, 'The Voice Inside - Tutorial')}</h3>
                                <div class="aspect-w-16 aspect-h-9 mb-6">
                                    <iframe
                                        class="w-full h-full rounded-lg aspect-video"
                                        src="https://www.youtube.com/embed/P-acKt7PhW8"
                                        title="The Voice Inside - Tutorial"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen
                                    />
                                </div>
                                <p class="text-lg leading-relaxed text-center text-[var(--color-light-text)]/80 mb-8">
                                    {t('academy.academy2025.newsText', {}, 'Hey, habt ihr schon das "The Voice Inside" Tutorial gecheckt? Die Noten dazu findet ihr jetzt hier bei uns als Download! Perfekt, um schon mal reinzukommen und euch auf den Workshop vorzubereiten. Viel Spaß beim Üben!')}
                                </p>
                                <div class="text-center">
                                    <a
                                        href="/material/The Voice Inside - vode academy 2025.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-accent)] text-white font-bold text-md rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                    >
                                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <title>Download Icon</title>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        {t('academy.academy2025.downloadButton', {}, 'Noten herunterladen')}
                                    </a>
                                </div>
                            </div>

                            {/* More items can be added here in the future */}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Additional Info Section --- */}
            <section class="py-16 md:py-24 bg-[var(--color-dark)] text-[var(--color-light-text)]">
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
                                {/* <li class="flex items-start">
                                    <div class="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-3 mr-4 flex-shrink-0" />
                                    <p class="text-lg md:text-xl leading-relaxed"
                                        innerHTML={t('academy.academy2025.songsText', {}, 'Aktuell komponieren und arrangieren wir noch fleißig für dich. Sobald wir alles zusammen haben, findest du den <strong>Zugang zu den Songs hier auf dieser Seite</strong>.') || ''}>
                                    </p>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Academy2025;