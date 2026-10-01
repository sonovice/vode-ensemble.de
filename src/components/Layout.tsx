import { type Component, type JSX, createEffect, onMount, onCleanup } from "solid-js";
import { useLocation } from "@solidjs/router";
import { pageMeta, siteUrl } from "../data/pages";
import { useI18n } from "../i18n";
import Footer from "./Footer";
import Navbar from "./Navbar";

const setMeta = (selector: string, content: string) =>
    document.head.querySelector(selector)?.setAttribute("content", content);

const Layout: Component<{ children: JSX.Element }> = (props) => {
    const location = useLocation();
    const { locale } = useI18n();

    // The prerendered HTML carries the German tags of its route (vite.config.ts);
    // this keeps them right after client-side navigation or a language switch.
    createEffect(() => {
        const meta = pageMeta(location.pathname);
        const lang = locale();
        document.documentElement.lang = lang;
        document.title = meta.title[lang];
        setMeta('meta[name="description"]', meta.description[lang]);
        setMeta('meta[property="og:title"]', meta.title[lang]);
        setMeta('meta[property="og:description"]', meta.description[lang]);
        setMeta('meta[property="og:url"]', siteUrl + location.pathname);
        setMeta('meta[property="og:image"]', siteUrl + meta.image);
    });

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
                if (iframe.src.startsWith("https://www.youtube-nocookie.com/")) {
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