import { type Component, createSignal, onMount, createEffect, on } from "solid-js";
import { useI18n } from "../i18n";

const imagePaths = [
    "/images/ensemble/action_01.jpg",
    "/images/ensemble/action_02.jpg",
    "/images/ensemble/action_03.jpg",
    "/images/ensemble/action_04.jpg",
];

const Hero: Component = () => {
    const [currentIndex, setCurrentIndex] = createSignal(0);
    const { t } = useI18n();

    // Initial state: Layer 1 shows the first image, Layer 2 is hidden (can preload next)
    const [bgLayer1Style, setBgLayer1Style] = createSignal({
        "background-image": `url('${imagePaths[0]}')`,
        "opacity": 1,
        "z-index": 1
    });
    const [bgLayer2Style, setBgLayer2Style] = createSignal({
        "background-image": `url('${imagePaths[1 % imagePaths.length]}')`, // Preload the 'next' image
        "opacity": 0,
        "z-index": 0
    });

    let isLayer1Active = true; // Layer 1 starts as active

    onMount(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
        }, 8000);
        return () => clearInterval(intervalId);
    });

    // Effect runs when currentIndex changes, but NOT for the initial value.
    createEffect(on(currentIndex, (newIdx) => {
        const imageToDisplay = imagePaths[newIdx];

        if (isLayer1Active) {
            // Layer 1 was active, so Layer 2 will become active
            setBgLayer2Style({
                "background-image": `url('${imageToDisplay}')`,
                "opacity": 1,
                "z-index": 1
            });
            setBgLayer1Style(prev => ({ // Fade out Layer 1
                ...prev,
                "opacity": 0,
                "z-index": 0
            }));
            isLayer1Active = false;
        } else {
            // Layer 2 was active, so Layer 1 will become active
            setBgLayer1Style({
                "background-image": `url('${imageToDisplay}')`,
                "opacity": 1,
                "z-index": 1
            });
            setBgLayer2Style(prev => ({ // Fade out Layer 2
                ...prev,
                "opacity": 0,
                "z-index": 0
            }));
            isLayer1Active = true;
        }
    }, { defer: true }));

    return (
        <div
            id="home"
            class="relative flex items-center justify-center min-h-[calc(100vh-4rem)] w-full text-white overflow-hidden"
        >
            {/* Background Image Layer 1 */}
            <div
                class="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out"
                style={bgLayer1Style()}
            ></div>
            {/* Background Image Layer 2 */}
            <div
                class="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out"
                style={bgLayer2Style()}
            ></div>

            {/* Overlay for better text readability */}
            <div class="absolute inset-0 bg-black opacity-30 z-[2]"></div>

            {/* Text Content */}
            <div class="relative z-[3] text-center p-4">
                <h1 class="font-bold leading-tight tracking-tight">
                    <span class="block text-6xl md:text-8xl lg:text-9xl">{t('hero.mainTitle', {}, 'Vocal Jazz')}</span>
                    <span class="block text-6xl md:text-8xl lg:text-9xl mt-1 md:mt-2">{t('hero.subTitle', {}, '& Pop')}</span>
                </h1>
            </div>
        </div>
    );
};

export default Hero;