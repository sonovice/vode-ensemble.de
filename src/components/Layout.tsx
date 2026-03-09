import { type Component, type JSX, onMount, onCleanup } from "solid-js";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: Component<{ children: JSX.Element }> = (props) => {
    onMount(() => {
        const handlePlay = (e: Event) => {
            const target = e.target;
            if (!(target instanceof HTMLMediaElement)) return;

            // Pause all other audio/video elements
            document.querySelectorAll("audio, video").forEach((el) => {
                if (el !== target && el instanceof HTMLMediaElement) {
                    el.pause();
                }
            });

            // Pause YouTube iframes
            document.querySelectorAll("iframe").forEach((iframe) => {
                if (iframe.src.includes("youtube.com")) {
                    iframe.contentWindow?.postMessage(
                        '{"event":"command","func":"pauseVideo","args":""}',
                        "*"
                    );
                }
            });
        };

        document.addEventListener("play", handlePlay, true);
        onCleanup(() => document.removeEventListener("play", handlePlay, true));
    });

    return (
        <div class="flex h-dvh flex-col">
            <Navbar />
            <div class="grow overflow-y-auto scroll-smooth">
                {props.children}
                <Footer />
            </div>

        </div>
    );
};

export default Layout; 