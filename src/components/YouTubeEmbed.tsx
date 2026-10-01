import { type Component, type JSX, Show, createSignal } from "solid-js";
import { useI18n } from "../i18n";

// The player comes from youtube-nocookie.com and is only loaded after a click,
// so visitors do not contact YouTube until they choose to (see the privacy
// policy in pages/Impressum.tsx). Layout.tsx pauses playing players.
export const youtubeEmbedUrl = (id: string) =>
    `https://www.youtube-nocookie.com/embed/${id}?enablejsapi=1&autoplay=1&rel=0`;

const YouTubeEmbed: Component<{
    id: string;
    title: string;
    // Defaults to the local copy of the YouTube thumbnail, public/images/video/<id>.jpg.
    poster?: JSX.Element;
    // Extra classes for the frame, e.g. a different aspect ratio than 16:9.
    class?: string;
}> = (props) => {
    const { t } = useI18n();
    const [playing, setPlaying] = createSignal(false);
    const frameClass = () => `video-frame ${props.class ?? ""}`;
    return (
        <Show
            when={playing()}
            fallback={
                <button type="button" class={`${frameClass()} video-button`} onClick={() => setPlaying(true)} aria-label={`${t('video.play')}: ${props.title}`}>
                    {props.poster ?? <img src={`/images/video/${props.id}.jpg`} alt="" loading="lazy" decoding="async" />}
                    <span class="video-play" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 4v16l13-8z" /></svg>
                    </span>
                </button>
            }
        >
            <iframe
                class={frameClass()}
                src={youtubeEmbedUrl(props.id)}
                title={props.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            />
        </Show>
    );
};

export default YouTubeEmbed;
