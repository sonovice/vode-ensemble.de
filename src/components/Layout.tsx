import type { Component, JSX } from "solid-js";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: Component<{ children: JSX.Element }> = (props) => {
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