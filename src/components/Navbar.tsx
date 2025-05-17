import {
	type Component,
	For,
	createEffect,
	createSignal,
	createMemo,
	onCleanup,
} from "solid-js";
import { useLocation, useNavigate } from "@solidjs/router";

const baseNavLinks = [
	{ id: "ensemble", label: "Ensemble" },
	{ id: "konzerte", label: "Konzerte" },
	{ id: "academy", label: "Academy" },
	{ id: "media", label: "Medien" },
	{ id: "kontakt", label: "Kontakt" },
];

const Header: Component = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = createSignal(false);
	const [activeLinkHref, setActiveLinkHref] = createSignal<string | null>(null);

	const isRootPath = createMemo(() => location.pathname === '/');

	const navLinks = createMemo(() =>
		baseNavLinks.map((link) => ({
			...link,
			href: `#${link.id}`,
		})),
	);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen());
	const closeMenu = () => setIsMenuOpen(false);

	createEffect(() => {
		const currentHash = location.hash;

		if (!isRootPath()) {
			setActiveLinkHref(null);
			// Clean up any existing observers if we were to navigate from root to non-root
			// For this component structure, observer is set up/cleaned up based on isRootPath() check anyway.
			return;
		}

		// On root path:
		if (currentHash) {
			setActiveLinkHref(currentHash);
		} else {
			// If no hash on root, activeLinkHref remains as it was (e.g. null from initial state)
			// The observer will determine the active link based on scroll.
			// Optionally, set a default like the first nav item if desired:
			// setActiveLinkHref(navLinks()[0]?.href || null);
		}

		const navSectionElements = navLinks().map(link => {
			const id = link.href.substring(1);
			return document.getElementById(id);
		});
		const supportSectionElement = document.getElementById('support');

		const sectionsToObserve = [...navSectionElements];
		if (supportSectionElement) {
			sectionsToObserve.push(supportSectionElement);
		}

		const validObservedSections = sectionsToObserve.filter(
			(section): section is HTMLElement => section !== null,
		);

		if (validObservedSections.length === 0) {
			// console.warn("Navbar: No sections (including support) found for IntersectionObserver. Active link on scroll might not work.");
			return;
		}

		const sectionIdToHrefMap = new Map<string, string>();
		for (const link of navLinks()) {
			const id = link.href.substring(1);
			// Ensure the element actually exists before adding to map,
			// though validObservedSections check should cover this.
			if (document.getElementById(id)) {
				sectionIdToHrefMap.set(id, link.href);
			}
		}

		const observerOptions: IntersectionObserverInit = {
			root: null, // Observe intersections relative to the viewport.
			rootMargin: "-50% 0px -50% 0px", // Trigger when the center of the section crosses the center of the viewport.
			threshold: 0, // Trigger as soon as any part of the target element crosses the rootMargin.
		};

		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			const intersectingEntries = entries.filter(entry => entry.isIntersecting);

			if (intersectingEntries.length > 0) {
				// Sort by DOM order or by position. For sections, highest on page is usually preferred.
				intersectingEntries.sort((a, b) => {
					const rectA = a.target.getBoundingClientRect();
					const rectB = b.target.getBoundingClientRect();
					return rectA.top - rectB.top;
				});

				const currentSectionEntry = intersectingEntries[0]; // The highest one on screen that intersects the center line.

				if (currentSectionEntry) {
					if (currentSectionEntry.target.id === 'support') {
						if (activeLinkHref() !== null) {
							setActiveLinkHref(null);
						}
					} else {
						const href = sectionIdToHrefMap.get(currentSectionEntry.target.id);
						if (href && activeLinkHref() !== href) {
							setActiveLinkHref(href);
						}
					}
				}
			}
			// If no entries are intersecting (e.g., in a gap or at the very top/bottom outside all sections),
			// activeLinkHref remains as is, which is often the desired behavior.
		};

		const observer = new IntersectionObserver(observerCallback, observerOptions);
		validObservedSections.forEach(section => observer.observe(section));

		onCleanup(() => {
			validObservedSections.forEach(section => observer.unobserve(section));
			observer.disconnect();
		});
		// location.pathname and location.hash are implicit dependencies through isRootPath() and currentHash
		// navLinks() is also a dependency. SolidJS handles these automatically.
	});

	const handleNavLinkClick = (event: MouseEvent, href: string) => {
		event.preventDefault();
		closeMenu();

		if (isRootPath()) {
			const targetId = href.substring(1); // Remove #
			const targetElement = document.getElementById(targetId);
			if (targetElement) {
				setActiveLinkHref(href);
				targetElement.scrollIntoView({ behavior: "smooth" });
			} else if (href === "#home" || href === "/") {
				// This case might be for a dedicated "Home" link not currently in baseNavLinks.
				// If #home is not a section ID, it might clear the active link or require special handling.
				// For now, we assume actual sections are targeted.
				// If you add a "Home" link that scrolls to top, ensure an ID "home" exists at the top,
				// or adjust this logic.
				setActiveLinkHref(href); // Tentatively set, observer might correct if #home isn't a section.
				window.scrollTo({ top: 0, behavior: "smooth" });
			}
		} else {
			// For non-root paths, navigate to the root and then scroll
			const targetId = href.substring(1);
			navigate(`/#${targetId}`, { resolve: false });
			// Active link will be set by the effect listening to location.hash
		}
	};

	const handleLogoClick = (event: MouseEvent) => {
		event.preventDefault();
		closeMenu();
		if (isRootPath()) {
			const homeElement = document.getElementById('home');
			if (homeElement) {
				homeElement.scrollIntoView({ behavior: 'smooth' });
				setActiveLinkHref("#home");
			} else {
				// If 'home' element not found on root path, navigate to root and scroll to top.
				navigate('/', { resolve: false });
				window.scrollTo({ top: 0, behavior: "smooth" });
			}
		} else {
			navigate('/', { resolve: false });
			// Active link state will be managed by the effect on navigation to root.
		}
	};

	return (
		<div class="w-full sticky top-0 z-50 bg-[var(--color-dark)] text-[var(--color-light-text)] shadow-md">
			<div class="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
				<a href="/" onClick={handleLogoClick} class="text-3xl font-bold tracking-tight hover:text-[var(--color-accent)] transition-colors">
					vode
				</a>

				<nav class="hidden lg:flex flex-grow justify-center items-center">
					<div class="flex space-x-6 items-center">
						<For each={navLinks()}>
							{(link) => (
								<a
									href={link.href}
									class={`text-lg hover:text-[var(--color-accent)] transition-colors pb-1 ${activeLinkHref() === link.href
										? "text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"
										: ""
										}`}
									onClick={(e) => handleNavLinkClick(e, link.href)}
								>
									{link.label}
								</a>
							)}
						</For>
					</div>
				</nav>
				<button
					onClick={() => {
						if (isRootPath()) {
							const supportSection = document.getElementById('support');
							if (supportSection) supportSection.scrollIntoView({ behavior: 'smooth' });
							else console.warn('Support section not found');
						} else {
							navigate('/#support');
						}
					}}
					class="hidden lg:block ml-4 px-4 py-2 text-sm font-medium text-white bg-[var(--color-accent)] hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-opacity-50 rounded-md transition-colors"
				>
					Unterstützen →
				</button>

				<div class="lg:hidden">
					<button
						class="p-2 rounded-md hover:bg-[var(--color-surface-alt)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
						type="button"
						onClick={toggleMenu}
						aria-label="Open menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							{isMenuOpen() ? (
								<>
									<title>Close menu</title>
									<path d="M18 6 6 18" />
									<path d="m6 6 12 12" />
								</>
							) : (
								<>
									<title>Open menu</title>
									<line x1="3" x2="21" y1="6" y2="6" />
									<line x1="3" x2="21" y1="12" y2="12" />
									<line x1="3" x2="21" y1="18" y2="18" />
								</>
							)}
						</svg>
					</button>
				</div>
			</div>

			{isMenuOpen() && (
				<div class="fixed inset-0 bg-[var(--color-dark)] text-[var(--color-light-text)] z-50 lg:hidden flex flex-col items-center justify-center">
					<button
						class="absolute top-7 right-6 p-2"
						type="button"
						onClick={closeMenu}
						aria-label="Close menu"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<title>Close menu</title>
							<path d="M18 6 6 18"></path>
							<path d="m6 6 12 12"></path>
						</svg>
					</button>

					<nav class="flex flex-col items-center space-y-6 text-2xl font-medium">
						<For each={navLinks()}>
							{(link) => (
								<a
									href={link.href}
									class={`hover:text-[var(--color-accent)] transition-colors ${activeLinkHref() === link.href ? "text-[var(--color-accent)]" : ""
										}`}
									onClick={(e) => handleNavLinkClick(e, link.href)}
								>
									{link.label}
								</a>
							)}
						</For>
						<button
							onClick={() => {
								closeMenu();
								if (isRootPath()) {
									const supportSection = document.getElementById('support');
									if (supportSection) supportSection.scrollIntoView({ behavior: 'smooth' });
									else console.warn('Support section not found');
								} else {
									navigate('/#support');
								}
							}}
							class="mt-6 px-6 py-3 text-lg font-medium text-white bg-[var(--color-accent)] hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-opacity-50 rounded-md transition-colors"
						>
							Unterstützen →
						</button>
					</nav>
				</div>
			)}
		</div>
	);
};

export default Header;
