import type { Component } from "solid-js";

// Stills from the "Chor macht Schule" footage live in public/images/academy as
// `<name>-<width>.jpg`, all 16:9.
const AcademyStill: Component<{
    name: string;
    alt: string;
    sizes: string;
    widths?: [number, number];
    eager?: boolean;
    class?: string;
}> = (props) => {
    const widths = () => props.widths ?? [800, 1600];
    const url = (width: number) => `/images/academy/${props.name}-${width}.jpg`;
    return (
        <img
            class={props.class}
            src={url(widths()[0])}
            srcset={widths().map(w => `${url(w)} ${w}w`).join(", ")}
            sizes={props.sizes}
            width={widths()[0]}
            height={Math.round(widths()[0] * 9 / 16)}
            alt={props.alt}
            loading={props.eager ? "eager" : "lazy"}
            decoding="async"
        />
    );
};

export default AcademyStill;
