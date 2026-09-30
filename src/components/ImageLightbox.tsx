import { type Component, type JSX, createSignal, Show, onCleanup } from "solid-js"
import { useI18n } from "../i18n"

// Opens `src` full screen. Clicking the image toggles between fitting the screen
// and its natural size, centred on the clicked point, so large group photos can
// be inspected face by face.
const ImageLightbox: Component<{ children: JSX.Element; src: string; alt: string }> = (props) => {
    const { t } = useI18n()
    const [open, setOpen] = createSignal(false)
    const [zoomed, setZoomed] = createSignal(false)
    let scroller: HTMLDivElement | undefined

    const close = () => {
        setOpen(false)
        setZoomed(false)
    }

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") close()
    }

    const toggleZoom = (e: MouseEvent) => {
        e.stopPropagation()
        const img = e.currentTarget as HTMLImageElement
        const rect = img.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        setZoomed(!zoomed())
        if (!zoomed() || !scroller) return
        const view = scroller
        requestAnimationFrame(() => {
            view.scrollLeft = x * img.offsetWidth - view.clientWidth / 2
            view.scrollTop = y * img.offsetHeight - view.clientHeight / 2
        })
    }

    return (
        <>
            <button type="button" onClick={() => setOpen(true)} class="block w-full cursor-zoom-in">
                {props.children}
            </button>
            <Show when={open()}>
                {(() => {
                    document.addEventListener("keydown", onKeyDown)
                    onCleanup(() => document.removeEventListener("keydown", onKeyDown))
                    return (
                        <div
                            ref={scroller}
                            role="dialog"
                            aria-modal="true"
                            aria-label={props.alt}
                            class="fixed inset-0 z-50 flex overflow-auto bg-black/90 p-4 md:p-8 animate-lightbox-in"
                            onClick={close}
                        >
                            <img
                                src={props.src}
                                alt={props.alt}
                                onClick={toggleZoom}
                                class={zoomed()
                                    ? "m-auto max-w-none cursor-zoom-out"
                                    : "m-auto max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-zoom-in"}
                            />
                            <button
                                type="button"
                                onClick={close}
                                aria-label={t('lightbox.close')}
                                class="fixed top-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-black/70 text-2xl text-white hover:bg-black"
                            >
                                ×
                            </button>
                        </div>
                    )
                })()}
            </Show>
        </>
    )
}

export default ImageLightbox
