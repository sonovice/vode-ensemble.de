import { type Component, Show } from "solid-js";
import { useI18n } from "../i18n";
import AcademyStill from "./AcademyStill";
import YouTubeEmbed from "./YouTubeEmbed";
import { documentary, teaser } from "../data/films";

type Film = { youtubeId?: string; releaseAt?: Date; poster: string };

// Until a film has a YouTube ID and its release time has passed, only the poster
// is shown with a "coming soon" note. IDs and release times live in data/films.ts.
// The ID of an unreleased film is still part of the bundle, so keep the video
// itself unlisted or private until then.
export const academyFilms: Record<"teaser" | "documentary", Film> = {
    teaser: { ...teaser, poster: "home-teaser" },
    documentary: { ...documentary, poster: "film-poster" },
};

const releasedId = (film: Film) =>
    film.releaseAt && Date.now() < film.releaseAt.getTime() ? undefined : film.youtubeId;

const AcademyFilm: Component<{ kind: keyof typeof academyFilms; sizes: string; caption?: boolean }> = (props) => {
    const { t, locale } = useI18n();
    const film = () => academyFilms[props.kind];
    const title = () => t(`academyPage.${props.kind}`);
    const soonNote = () => {
        const releaseAt = film().releaseAt;
        if (!releaseAt) return t('academyPage.filmSoon');
        const date = releaseAt.toLocaleString(locale(), {
            day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "2-digit",
            timeZone: "Europe/Berlin", timeZoneName: "short",
        });
        return `${t('academyPage.filmReleaseOn')} ${date}`;
    };
    return (
        <figure class="academy-film">
            <Show
                when={releasedId(film())}
                fallback={
                    <div class="video-frame">
                        <AcademyStill name={film().poster} alt={t(`academyPage.${props.kind}PosterAlt`)} sizes={props.sizes} />
                        <p class="academy-video-soon">{soonNote()}</p>
                    </div>
                }
            >
                {id => <YouTubeEmbed id={id()} title={title()} poster={<AcademyStill name={film().poster} alt="" sizes={props.sizes} />} />}
            </Show>
            <Show when={props.caption}>
                <figcaption>{title()}</figcaption>
            </Show>
        </figure>
    );
};

export default AcademyFilm;
