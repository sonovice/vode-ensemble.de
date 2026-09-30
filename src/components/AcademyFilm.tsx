import { type Component, Show, createSignal } from "solid-js";
import { useI18n } from "../i18n";
import AcademyStill from "./AcademyStill";

type Film = { youtubeId?: string; poster: string };

// A film without a YouTube ID shows its poster with a "coming soon" note.
// Add the ID once the video is uploaded.
export const academyFilms: Record<"teaser" | "documentary", Film> = {
    teaser: { youtubeId: "m5BTiZ8ACjo", poster: "home-teaser" },
    documentary: { poster: "film-poster" },
};

const AcademyFilm: Component<{ kind: keyof typeof academyFilms; sizes: string; caption?: boolean }> = (props) => {
    const { t } = useI18n();
    const [playing, setPlaying] = createSignal(false);
    const film = () => academyFilms[props.kind];
    const title = () => t(`academyPage.${props.kind}`);
    return (
        <figure class="academy-film">
            <Show
                when={film().youtubeId}
                fallback={
                    <div class="academy-video-frame">
                        <AcademyStill name={film().poster} alt={t(`academyPage.${props.kind}PosterAlt`)} sizes={props.sizes} />
                        <p class="academy-video-soon">{t('academyPage.filmSoon')}</p>
                    </div>
                }
            >
                {id => (
                    <Show
                        when={playing()}
                        fallback={
                            <button type="button" class="academy-video-frame academy-video-button" onClick={() => setPlaying(true)} aria-label={`${t('academyPage.play')}: ${title()}`}>
                                <AcademyStill name={film().poster} alt="" sizes={props.sizes} />
                                <span class="academy-video-play" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 4v16l13-8z" /></svg>
                                </span>
                            </button>
                        }
                    >
                        <iframe
                            class="academy-video-frame"
                            src={`https://www.youtube.com/embed/${id()}?enablejsapi=1&autoplay=1`}
                            title={title()}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        />
                    </Show>
                )}
            </Show>
            <Show when={props.caption}>
                <figcaption>{title()}</figcaption>
            </Show>
        </figure>
    );
};

export default AcademyFilm;
