import { type Component, type JSX, createSignal, Show, onCleanup } from "solid-js"

const ImageLightbox: Component<{ children: JSX.Element; src: string; alt: string }> = (props) => {
    const [open, setOpen] = createSignal(false)

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false)
    }

    return (
        <>
            <div onClick={() => setOpen(true)} class="cursor-pointer">
                {props.children}
            </div>
            <Show when={open()}>
                {(() => {
                    document.addEventListener("keydown", onKeyDown)
                    onCleanup(() => document.removeEventListener("keydown", onKeyDown))
                    return (
                        <div
                            class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-8 cursor-pointer animate-lightbox-in"
                            onClick={() => setOpen(false)}
                        >
                            <img
                                src={props.src}
                                alt={props.alt}
                                class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            />
                        </div>
                    )
                })()}
            </Show>
        </>
    )
}

export default ImageLightbox
