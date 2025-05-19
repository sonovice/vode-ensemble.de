import type { Component } from "solid-js";

const Footer: Component = () => {
    return (
        <div class="w-full text-sm bg-[var(--color-dark)] text-[var(--color-light-text)]">
            <div class="flex sm:flex-row flex-col items-center justify-center py-2">
                <div>Copyright © {new Date().getFullYear()} vode e.V.</div>
                <div class="hidden sm:block">&nbsp;|&nbsp;</div>
                <div>
                    <a href="impressum" class="underline">Impressum</a>
                </div>
            </div>

            <div class="mb-2 text-xs text-gray-500 text-center">
                Made with <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="inline-block w-3 h-3 mx-0.5 fill-red-400/70" aria-hidden="true">
                    <title>Heart Icon</title>
                    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg> by Simon Waloschek
            </div>
        </div>
    );
};

export default Footer;

