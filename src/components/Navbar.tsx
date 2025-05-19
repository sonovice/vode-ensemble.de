import {
	type Component,
	For,
	createEffect,
	createSignal,
	createMemo,
	onCleanup,
	Show,
} from "solid-js";
import { useLocation, useNavigate } from "@solidjs/router";
import { useI18n } from "../i18n";
import type { Locale } from "../i18n/config";
import { LocalesLabels } from "../i18n/config";

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
	const { t, locale, setLocale, allLocales } = useI18n();

	const isRootPath = createMemo(() => location.pathname === '/');

	const baseNavLinksConfig = createMemo(() => [
		{ id: "ensemble", key: "nav.ensemble", defaultLabel: "Ensemble" },
		{ id: "konzerte", key: "nav.konzerte", defaultLabel: "Konzerte" },
		{ id: "academy", key: "nav.academy", defaultLabel: "Academy" },
		{ id: "media", key: "nav.media", defaultLabel: "Medien" },
		{ id: "kontakt", key: "nav.kontakt", defaultLabel: "Kontakt" },
		{ id: "support", key: "nav.supportAction", defaultLabel: "Support →" },
	]);

	const navLinks = createMemo(() =>
		baseNavLinksConfig().map((link) => ({
			id: link.id,
			label: t(link.key, {}, link.defaultLabel),
			href: `#${link.id}`,
		})),
	);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen());
	const closeMenu = () => setIsMenuOpen(false);

	createEffect(() => {
		const currentHash = location.hash;

		if (!isRootPath()) {
			setActiveLinkHref(null);
			return;
		}

		if (currentHash) {
			setActiveLinkHref(currentHash);
		} else {
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
			return;
		}

		const sectionIdToHrefMap = new Map<string, string>();
		for (const link of navLinks()) {
			const id = link.href.substring(1);
			if (document.getElementById(id)) {
				sectionIdToHrefMap.set(id, link.href);
			}
		}

		const observerOptions: IntersectionObserverInit = {
			root: null,
			rootMargin: "-50% 0px -50% 0px",
			threshold: 0,
		};

		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			const intersectingEntries = entries.filter(entry => entry.isIntersecting);

			if (intersectingEntries.length > 0) {
				intersectingEntries.sort((a, b) => {
					const rectA = a.target.getBoundingClientRect();
					const rectB = b.target.getBoundingClientRect();
					return rectA.top - rectB.top;
				});

				const currentSectionEntry = intersectingEntries[0];

				if (currentSectionEntry) {
					const href = sectionIdToHrefMap.get(currentSectionEntry.target.id);
					if (href && activeLinkHref() !== href) {
						setActiveLinkHref(href);
					}
				}
			}
		};

		const observer = new IntersectionObserver(observerCallback, observerOptions);
		for (const section of validObservedSections) {
			observer.observe(section);
		}

		onCleanup(() => {
			for (const section of validObservedSections) {
				observer.unobserve(section);
			}
			observer.disconnect();
		});
	});

	const handleNavLinkClick = (event: MouseEvent, href: string) => {
		event.preventDefault();
		closeMenu();

		if (isRootPath()) {
			const targetId = href.substring(1);
			const targetElement = document.getElementById(targetId);
			if (targetElement) {
				setActiveLinkHref(href);
				targetElement.scrollIntoView({ behavior: "smooth" });
			} else if (href === "#home" || href === "/") {
				setActiveLinkHref(href);
				window.scrollTo({ top: 0, behavior: "smooth" });
			}
		} else {
			const targetId = href.substring(1);
			navigate(`/#${targetId}`, { resolve: false });
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
				navigate('/', { resolve: false });
				window.scrollTo({ top: 0, behavior: "smooth" });
			}
		} else {
			navigate('/', { resolve: false });
		}
	};

	return (
		<div class="w-full sticky top-0 z-50 bg-[var(--color-dark)] text-[var(--color-light-text)] shadow-md">
			<div class="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
				<a href="/" onClick={handleLogoClick} class="text-3xl font-bold tracking-tight hover:text-[var(--color-accent)] transition-colors">
					vode
				</a>

				<nav class="hidden lg:flex flex-grow justify-center items-center">
					<div class="flex space-x-6 items-baseline">
						<For each={navLinks()}>
							{(link) => (
								<a
									href={link.href}
									class={
										link.id === 'support'
											? `text-lg bg-[var(--color-surface-alt)] hover:text-[var(--color-accent)] hover:filter hover:brightness-110 rounded-md px-3 py-1 transition-colors flex items-center ${activeLinkHref() === link.href ? 'text-[var(--color-accent)]' : ''
											}`
											: `text-lg hover:text-[var(--color-accent)] transition-colors pb-1 ${activeLinkHref() === link.href
												? "text-[var(--color-accent)]"
												: ""
											}`
									}
									onClick={(e) => handleNavLinkClick(e, link.href)}
								>
									{link.label}
									<Show when={link.id === 'support'}>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 ml-2 fill-red-400" aria-hidden="true">
											<title>Support Heart Icon</title>
											<path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
										</svg>

									</Show>
								</a>
							)}
						</For>
					</div>
				</nav>
				<div class="hidden lg:flex items-center ml-4">
					<div class="">
						<div class="flex flex-col h-9 rounded-md overflow-hidden">
							<For each={allLocales}>
								{(loc) => (
									<button
										type="button"
										onClick={() => {
											const currentIndex = allLocales.indexOf(locale());
											const nextIndex = (currentIndex + 1) % allLocales.length;
											setLocale(allLocales[nextIndex]);
										}}
										class={`w-full h-1/2 flex items-center justify-center px-3 text-sm font-medium transition-colors focus:outline-none
											${locale() === loc
												? "bg-[var(--color-accent)] text-white font-semibold"
												: "bg-[var(--color-surface-alt)] text-[var(--color-light-text)]/70 hover:filter hover:brightness-110 hover:text-[var(--color-accent)]"
											}`}
									>
										{LocalesLabels[loc as Locale]}
									</button>
								)}
							</For>
						</div>
					</div>
				</div>

				<div class="lg:hidden flex items-center">
					<button
						class="p-2 rounded-md hover:bg-[var(--color-surface-alt)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
						type="button"
						onClick={toggleMenu}
						aria-label={isMenuOpen() ? t('nav.closeMenu', {}, 'Close menu') : t('nav.openMenu', {}, 'Open menu')}
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
							<title>{isMenuOpen() ? t('nav.closeMenu', {}, 'Close menu') : t('nav.openMenu', {}, 'Open menu')}</title>
							{isMenuOpen() ? (
								<>
									<path d="M18 6 6 18" />
									<path d="m6 6 12 12" />
								</>
							) : (
								<>
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
				<div class="lg:hidden absolute top-16 left-0 right-0 bg-[var(--color-dark)] shadow-lg pb-4">
					<nav class="flex flex-col items-center space-y-3 pt-3">
						<For each={navLinks()}>
							{(link) => (
								<a
									href={link.href}
									class={
										link.id === 'support'
											? `text-lg bg-[var(--color-surface-alt)] hover:text-[var(--color-accent)] hover:filter hover:brightness-110 rounded-md px-4 py-1.5 transition-colors flex items-baseline ${activeLinkHref() === link.href ? 'text-[var(--color-accent)]' : ''
											}`
											: `text-lg py-1 hover:text-[var(--color-accent)] transition-colors ${activeLinkHref() === link.href ? "text-[var(--color-accent)]" : ""
											}`
									}
									onClick={(e) => {
										handleNavLinkClick(e, link.href);
									}}
								>
									{link.label}
									{link.id === 'support' && (
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 ml-2 fill-red-400" aria-hidden="true">
											<title>Support Heart Icon</title>
											<path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
										</svg>
									)}
								</a>
							)}
						</For>
						<div class="mt-4 flex items-center justify-center border-t border-[var(--color-surface)] pt-4">
							<div class="flex items-center rounded-md overflow-hidden">
								<For each={allLocales}>
									{(loc) => (
										<button
											type="button"
											onClick={() => {
												const currentIndex = allLocales.indexOf(locale());
												const nextIndex = (currentIndex + 1) % allLocales.length;
												setLocale(allLocales[nextIndex]);
												closeMenu();
											}}
											class={`px-4 py-1.5 text-sm font-medium transition-colors focus:outline-none
												${locale() === loc
													? "bg-[var(--color-accent)] text-white font-semibold"
													: "bg-[var(--color-surface-alt)] text-[var(--color-light-text)]/70 hover:filter hover:brightness-110 hover:text-[var(--color-accent)]"
												}`}
										>
											{LocalesLabels[loc as Locale]}
										</button>
									)}
								</For>
							</div>
						</div>
					</nav>
				</div>
			)}
		</div>
	);
};

export default Header;
