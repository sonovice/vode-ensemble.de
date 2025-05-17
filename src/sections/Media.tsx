import { Component, For } from "solid-js";

const Media: Component = () => {
    const videos = [
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
                    Medien
                </p>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[var(--color-light-text)]">
                    Einblicke und Pressematerial
                </h1>
                <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
                    {/* Left Column: Text Content */}

                    <div class="w-full  text-left">

                        <p class="text-lg md:text-xl text-gray-300 mb-4">
                            Hier findest du eine Auswahl unserer neuesten Aufnahmen, Videos und unser Presse-Kit.
                        </p>
                        <p class="text-gray-400">
                            Wir arbeiten ständig an neuem Material. Besuch uns bald wieder, um nichts zu verpassen.
                        </p>
                        {/* Add buttons or links to media platforms if available */}
                        <div class="mt-8 flex space-x-4">
                            <a href="https://www.instagram.com/vode.ensemble" target="_blank" rel="noopener noreferrer" aria-label="Vode Ensemble auf Instagram" class="inline-flex items-center px-4 py-2 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-opacity-80 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 mr-2" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                Instagram
                            </a>
                            <a href="https://www.facebook.com/vode.ensemble/" target="_blank" rel="noopener noreferrer" aria-label="Vode Ensemble auf Facebook" class="inline-flex items-center px-4 py-2 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-opacity-80 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-5 h-5 mr-2" fill="currentColor"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                                Facebook
                            </a>
                        </div>
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
                        Videos
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
                                    ></iframe>
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
                        Presse-Kit & Rider
                    </h2>
                    <p class="text-lg md:text-xl text-gray-300">
                        Das Presse-Kit sowie unser Technical Rider werden gerade überarbeitet und in Kürze hier zur Verfügung gestellt.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Media; 