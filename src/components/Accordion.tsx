import { type Component, createSignal, type JSX } from "solid-js";

type AccordionProps = {
    title: JSX.Element | string;
    children: JSX.Element;
    isOpenDefault?: boolean;
};

const Accordion: Component<AccordionProps> = (props) => {
    const [isOpen, setIsOpen] = createSignal(props.isOpenDefault || false);

    return (
        <div class="border border-[var(--color-light-text)]/20 rounded-lg overflow-hidden transition-all duration-300">
            <button
                type="button"
                class="w-full flex justify-between items-center text-left p-4 md:p-5 bg-[var(--color-surface-alt)] hover:bg-[var(--color-surface-alt)]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                onClick={() => setIsOpen(!isOpen())}
            >
                <span class="text-xl font-bold text-[var(--color-light-text)]">{props.title}</span>
                <svg
                    class="w-6 h-6 text-[var(--color-accent)] transform transition-transform duration-300 flex-shrink-0"
                    classList={{ "rotate-180": isOpen() }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <title>Accordion Toggle Icon</title>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                class="transition-all duration-500 ease-in-out overflow-hidden"
                style={{
                    "max-height": isOpen() ? "2000px" : "0px", // Use a large enough max-height for content
                }}
            >
                {props.children}
            </div>
        </div>
    );
};

export default Accordion;
