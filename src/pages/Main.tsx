import type { Component } from "solid-js"
import Hero from "../sections/Hero"
import Ensemble from "../sections/Ensemble";
import Concerts from "../sections/Konzerte";
import Media from "../sections/Media";
import Academy from "../sections/Academy";
import Support from "../sections/Support";
import Kontakt from "../sections/Kontakt";

const Main: Component = () => {
    return (
        <>
            <Hero />
            <Ensemble />
            <Concerts />
            <Academy />
            <Media />
            <Kontakt />
            <Support />
        </>
    )
}

export default Main;