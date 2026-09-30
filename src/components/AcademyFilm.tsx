import { type Component, Show, createSignal } from "solid-js";
import { useI18n } from "../i18n";
import AcademyStill from "./AcademyStill";

type Film = { youtubeId?: string; releaseAt?: Date; poster: string };

// Until a film has a YouTube ID and its release time has passed, only the poster
// is shown with a "coming soon" note. The ID of an unreleased film is still part
// of the bundle, so keep the video itself unlisted or private until then.
export const academyFilms: Record<"teaser" | "documentary", Film> = {
    teaser: { youtubeId: "00_A281qohs", poster: "home-teaser" },
    documentary: { youtubeId: "aCKdSreAPIU", releaseAt: new Date("2026-10-03T00:00:00+02:00"), poster: "film-poster" },
};

const releasedId = (film: Film) =>
    film.releaseAt && Date.now() < film.releaseAt.getTime() ? undefined : film.youtubeId;

const AcademyFilm: Component<{ kind: keyof typeof academyFilms; sizes: string; caption?: boolean }> = (props) => {
    const { t, locale } = useI18n();
    const [playing, setPlaying] = createSignal(false);
    const film = () => academyFilms[props.kind];
    const title = () => t(`academyPage.${props.kind}`);
    const soonNote = () => {
        const releaseAt = film().releaseAt;
        if (!releaseAt) return t('academyPage.filmSoon');
        const date = releaseAt.toLocaleDateString(locale(), { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Berlin" });
        return `${t('academyPage.filmReleaseOn')} ${date}`;
    };
    return (
        <figure class="academy-film">
            <Show
                when={releasedId(film())}
                fallback={
                    <div class="academy-video-frame">
                        <AcademyStill name={film().poster} alt={t(`academyPage.${props.kind}PosterAlt`)} sizes={props.sizes} />
                        <p class="academy-video-soon">{soonNote()}</p>
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
                            src={`https://www.youtube.com/embed/${id()}?enablejsapi=1&autoplay=1&rel=0`}
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
