import { type Component, For, createSignal, onCleanup, onMount } from "solid-js";
import { useI18n } from "../i18n";

// `position` is the CSS object-position. On portrait phones only about a third
// of each photo's width is visible, so it keeps the faces in that slice.
const heroImages = [
    { src: "/images/ensemble/action_06.jpg", position: "42% 50%" },
    { src: "/images/ensemble/action_04.jpg", position: "18% 30%" },
    { src: "/images/ensemble/action_02.jpg", position: "58% 30%" },
    { src: "/images/ensemble/action_05.jpg", position: "50% 50%" },
    { src: "/images/ensemble/action_01.jpg", position: "47% 30%" },
    { src: "/images/ensemble/action_03.jpg", position: "52% 30%" },
];

const slideDuration = 8000;

const Hero: Component = () => {
    const { t } = useI18n();
    const [current, setCurrent] = createSignal(0);
    // An image gets its src once it is shown or next in line, so the page does
    // not download all six up front and each one is ready before it fades in.
    const [requested, setRequested] = createSignal(1);
    const next = (index: number) => (index + 1) % heroImages.length;

    onMount(() => {
        const timer = setInterval(() => {
            const shown = next(current());
            setCurrent(shown);
            setRequested(r => Math.max(r, Math.min(shown + 1, heroImages.length - 1)));
        }, slideDuration);
        onCleanup(() => clearInterval(timer));
    });

    return (
        <div
            id="home"
            class="relative flex items-center justify-center min-h-[calc(100vh-4rem)] w-full text-white overflow-hidden"
        >
            <For each={heroImages}>{(image, index) => (
                <img
                    src={index() <= requested() ? image.src : undefined}
                    alt=""
                    decoding="async"
                    fetchpriority={index() === 0 ? "high" : "auto"}
                    class="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out"
                    style={{ "object-position": image.position, opacity: index() === current() ? 1 : 0 }}
                />
            )}</For>

            {/* Overlay for better text readability */}
            <div class="absolute inset-0 bg-black opacity-30" />

            <div class="relative text-center p-4">
                <h1 class="font-bold leading-tight tracking-tight">
                    <span class="block text-6xl md:text-8xl lg:text-9xl">{t('hero.mainTitle', {}, 'Vocal Jazz')}</span>
                    <span class="block text-6xl md:text-8xl lg:text-9xl mt-1 md:mt-2">{t('hero.subTitle', {}, '& Pop')}</span>
                </h1>
            </div>
        </div>
    );
};

export default Hero;
