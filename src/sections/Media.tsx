import { type Component, For, createMemo } from "solid-js";
import { useI18n } from "../i18n";

const Media: Component = () => {
    const { t } = useI18n();

    const recordings = createMemo(() => [
        {
            cover: "/images/media/human_heart_cover.jpg",
            coverAlt: "Cover of Human Heart by vode",
            title: "Human Heart",
            credits: [
                `Original: Coldplay feat. We Are KING & Jacob Collier`,
                `Arrangement: Manuel Grunden`,
                `${t('media.credits.musicalDirection', {}, 'Musikalische Leitung')}: Simon Herten`,
                `${t('media.credits.recordingMaster', {}, 'Aufnahme/Master')}: Julius Gass`,
            ],
            src: "/audio/vode-human_heart.mp3",
        },
        {
            cover: "/images/media/i_was_brought_cover.jpeg",
            coverAlt: "Cover of I Was Brought to My Senses by vode",
            title: "I Was Brought to My Senses",
            credits: [
                `Original: Sting`,
                `Arrangement: Manuel Grunden`,
                `${t('media.credits.musicalDirection', {}, 'Musikalische Leitung')}: Katharina Gärtner`,
                `${t('media.credits.soloVocalsRecording', {}, 'Aufnahme Solo Vocals')}: Lars Henrik`,
                `${t('media.credits.recordingMaster', {}, 'Aufnahme/Master')}: Julius Gass`,
                `Edit/Mix: Martin Pilger`,
            ],
            src: "/audio/vode-i_was_brought.mp3",
        },
        {
            cover: "/images/media/runaway_cover.jpg",
            coverAlt: "Cover of Runaway by vode",
            title: "Runaway",
            credits: [
                `Original: OneRepublic`,
                `Arrangement: Stefan Flügel`,
                `${t('media.credits.musicalDirection', {}, 'Musikalische Leitung')}: Simon Herten`,
                `${t('media.credits.recordingMix', {}, 'Aufnahme/Mix')}: Julius Gass`,
            ],
            src: "/audio/vode-runaway.mp3",
        },
    ]);

    const videos = createMemo(() => [
        {
            src: "https://www.youtube.com/embed/UWVHe51-kG8",
            title: "Bli-Blip (vode & New York Voices)",
            description: [
                "Original Arrangement: Darmon Meader & Michael Abene",
                `A cappella Arrangement: Manuel Grunden`,
                `${t('media.credits.musicalDirection', {}, 'Musikalische Leitung')}: Katharina Gärtner`,
                `${t('media.credits.productionMixVideoEdit', {}, 'Produktion/Mix/Video Edit')}: Manuel Grunden`,
                `${t('media.credits.recordingMaster', {}, 'Aufnahme/Master')}: Julius Gass`,
                `${t('media.credits.videoConceptProduction', {}, 'Video Konzept & Produktion')}: Lars Henrik & Manuel Grunden`,
            ]
        },
        {
            src: "https://www.youtube.com/embed/GxzoyGThUiQ",
            title: "Back in the High Life Again (Steve Winwood Cover)",
            description: [
                "Arrangement: Julia Dollison & Kerry Marsh",
                `${t('media.credits.musicalDirection', {}, 'Musikalische Leitung')}: Katharina Gärtner`,
                `Video: Dominik Moos`,
                `${t('media.credits.recording', {}, 'Aufnahme')}: Feli Ammer & Manuel Grunden`,
                `Mix: Julius Gass`,
            ]
        },
        {
            src: "https://www.youtube.com/embed/qs1Xteyb9j4",
            title: "In My Life (The Beatles Cover)",
            description: [
                "Arrangement: Darmon Meader",
                `${t('media.credits.musicalDirection', {}, 'Musikalische Leitung')}: Katharina Gärtner`,
                `Video: Dominik Moos`,
                `${t('media.credits.sound', {}, 'Ton')}: Martin Pilger`,
            ]
        }
    ]);

    return (
        <section
            id="media"
            class="bg-[var(--color-dark-alt)] text-[var(--color-light-text)] py-16 md:py-24"
        >
            <div class="container mx-auto px-4">
                <p class="font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                    {t('media.sectionTag', {}, 'Medien')}
                </p>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[var(--color-light-text)]">
                    {t('media.title', {}, 'Einblicke und Pressematerial')}
                </h1>
                <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
                    <div class="w-full text-left">
                        <p class="text-lg md:text-xl text-gray-300 mb-4">
                            {t('media.paragraph1', {}, 'Hier findest du eine Auswahl unserer neuesten Aufnahmen, Videos und unser Presse-Kit.')}
                        </p>
                        <p class="text-gray-400">
                            {t('media.paragraph2', {}, 'Wir arbeiten ständig an neuem Material. Besuch uns bald wieder, um nichts zu verpassen.')}
                        </p>
                    </div>
                </div>

                {/* Recordings Section */}
                <div class="mt-16">
                    <h2 class="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-light-text)]">
                        {t('media.recordingsTitle', {}, 'Aufnahmen')}
                    </h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <For each={recordings()}>{(rec) =>
                            <div class="bg-[var(--color-surface-alt)] rounded-lg shadow-lg p-5 ring-1 ring-[var(--color-light-text)]/20 flex flex-col">
                                <img
                                    src={rec.cover}
                                    alt={rec.coverAlt}
                                    class="w-full h-auto rounded-md mb-4"
                                />
                                <h3 class="text-lg font-bold text-[var(--color-light-text)] mb-1">{rec.title}</h3>
                                <p class="text-sm text-[var(--color-light-text)]/70 mb-3 flex-grow">
                                    <For each={rec.credits}>{(line, i) =>
                                        <>{i() > 0 && <br />}{line}</>
                                    }</For>
                                </p>
                                <audio controls class="w-full mt-auto">
                                    <source src={rec.src} type="audio/mpeg" />
                                    <track kind="captions" />
                                    {t('media.audioFallback', {}, 'Dein Browser unterstützt das Audio-Element nicht.')}
                                </audio>
                            </div>
                        }</For>
                    </div>
                </div>

                {/* Videos Section */}
                <div class="mt-16">
                    <h2 class="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-light-text)]">
                        {t('media.videosTitle', {}, 'Videos')}
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                        <For each={videos()}>{(video) =>
                            <div class="bg-[var(--color-surface-alt)] rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl ring-1 ring-[var(--color-light-text)]/20">
                                <div class="aspect-video mb-4">
                                    <iframe
                                        class="w-full h-full rounded-t-lg"
                                        src={video.src}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerpolicy="strict-origin-when-cross-origin"
                                        allowfullscreen
                                    />
                                </div>
                                <div class="p-6">
                                    <h3 class="text-xl font-semibold mb-2 text-[var(--color-light-text)]">
                                        {video.title}
                                    </h3>
                                    <p class="text-sm text-gray-400">
                                        <For each={video.description}>{(line, i) =>
                                            <>{i() > 0 && <br />}{line}</>
                                        }</For>
                                    </p>
                                </div>
                            </div>
                        }</For>
                    </div>
                </div>

                {/* Press Kit & Rider Section */}
                <div class="mt-16">
                    <h2 class="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-light-text)]">
                        {t('media.pressKitTitle', {}, 'Presse-Kit & Rider')}
                    </h2>
                    <p class="text-lg md:text-xl text-gray-300">
                        {t('media.pressKitParagraph', {}, 'Das Presse-Kit sowie unser Technical Rider werden gerade überarbeitet und in Kürze hier zur Verfügung gestellt.')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Media;
