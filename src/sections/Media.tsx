import { type Component, For } from "solid-js";
import { useI18n } from "../i18n"; // Assuming path to i18n index

const Media: Component = () => {
    const { t } = useI18n();
    const videos = [
        {
            src: "https://www.youtube.com/embed/UWVHe51-kG8",
            title: "Bli-Blip (vode & New York Voices)",
            description: [
                "Original Arrangement: Darmon Meader & Michael Abene",
                "A cappella Arrangement: Manuel Grunden",
                "Produktion/Mix/Video Edit: Manuel Grunden",
                "Aufnahme/Master: Julius Gass",
                "Video Konzept & Produktion: Lars Meyer & Manuel Grunden"
            ]
        },
        {
            src: "https://www.youtube.com/embed/--0YucWnasc",
            title: "Runaway (OneRepublic Cover)",
            description: [
                "Arrangement: Stefan Flügel",
                "Musikalische Leitung: Simon Herten",
                "Solist*innen: Kristina Hügel, Jette Sauerwald, Tobias Hägele, Sebastian Meyer",
                "Produktion: Julius Gass"
            ]
        },
        {
            src: "https://www.youtube.com/embed/GxzoyGThUiQ",
            title: "Back in the High Life Again (Steve Winwood Cover)",
            description: [
                "Arrangement: Julia Dollison & Kerry Marsh",
                "Musikalische Leitung: Katharina Gärtner",
                "Video: Dominik Moos",
                "Aufnahme: Feli Ammer & Manuel Grunden",
                "Mix: Julius Gass"
            ]
        },
        {
            src: "https://www.youtube.com/embed/qs1Xteyb9j4",
            title: "In My Life (The Beatles Cover)",
            description: [
                "Arrangement: Darmon Meader",
                "Musikalische Leitung: Katharina Gärtner",
                "Video: Dominik Moos",
                "Ton: Martin Pilger"
            ]
        }
    ];

    return (
        <section
            id="media" // id for navigation
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
                    {/* Left Column: Text Content */}

                    <div class="w-full  text-left">

                        <p class="text-lg md:text-xl text-gray-300 mb-4">
                            {t('media.paragraph1', {}, 'Hier findest du eine Auswahl unserer neuesten Aufnahmen, Videos und unser Presse-Kit.')}
                        </p>
                        <p class="text-gray-400">
                            {t('media.paragraph2', {}, 'Wir arbeiten ständig an neuem Material. Besuch uns bald wieder, um nichts zu verpassen.')}
                        </p>
                    </div>

                    {/* Right Column: Image */}
                    {/* <div class="w-full md:w-1/2 lg:w-5/12 mt-8 md:mt-0">
                        <img
                            src="/images/ensemble_01b.jpg" // Placeholder image for media
                            alt="Media Impression"
                            class="shadow-xl w-full h-auto object-cover"
                        />
                    </div> */}
                </div>



                {/* Videos Section */}
                <div class="mt-16">
                    <h2 class="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-light-text)]">
                        {t('media.videosTitle', {}, 'Videos')}
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                        <For each={videos}>{(video) =>
                            <div class="bg-[var(--color-surface-alt)] rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl ring-1 ring-[var(--color-light-text)]/20">
                                <div class="aspect-video mb-4">
                                    <iframe
                                        class="w-full h-full rounded-t-lg" // rounded-t-lg to match container
                                        src={video.src}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerpolicy="strict-origin-when-cross-origin"
                                        allowfullscreen
                                    />
                                </div>
                                <div class="p-6"> {/* Add padding here for content inside */}
                                    <h3 class="text-xl font-semibold mb-2 text-[var(--color-light-text)]">
                                        {video.title}
                                    </h3>
                                    <p class="text-sm text-gray-400">
                                        <For each={video.description}>{(line) =>
                                            <> {line} <br /> </>
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