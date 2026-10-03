import { type Component, type JSX, createSignal } from "solid-js";
import { useI18n } from "../i18n";

const email = "mail@vode-ensemble.de";
const iban = "DE45 4765 0130 1010 1647 03";
// The PayPal donate button is switched off while the PayPal account is blocked;
// it is in the git history of this file.

const mailto = (subject: string | undefined) =>
    `mailto:${email}?subject=${encodeURIComponent(subject ?? "")}`;

const Way: Component<{ number: string; title: string; text: string; children: JSX.Element }> = (props) => (
    <div class="flex flex-col border-t border-[var(--color-light-text)]/15 pt-6">
        <p class="text-sm font-bold tracking-wider text-[var(--color-accent)]">{props.number}</p>
        <h3 class="mt-2 text-2xl font-bold text-[var(--color-light-text)]">{props.title}</h3>
        <p class="mt-3 mb-6 max-w-[42ch] leading-relaxed text-[var(--color-light-text)]/75">{props.text}</p>
        <div class="mt-auto">{props.children}</div>
    </div>
);

const buttonClass = "inline-flex items-center min-h-12 px-6 rounded-lg font-bold transition-colors";

const Support: Component = () => {
    const { t } = useI18n();
    const [copied, setCopied] = createSignal(false);

    const copyIban = async () => {
        await navigator.clipboard.writeText(iban.replace(/ /g, ""));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="support" class="py-16 md:py-24 bg-[var(--color-dark-alt)] text-[var(--color-light-text)]">
            <div class="container mx-auto px-4">
                <div class="grid gap-6 md:grid-cols-2 md:gap-16 items-end">
                    <div>
                        <p class="font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">{t('support.sectionTag')}</p>
                        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold">{t('support.title')}</h2>
                    </div>
                    <p class="text-lg md:text-xl leading-relaxed text-[var(--color-light-text)]/85 max-w-[52ch]">{t('support.intro')}</p>
                </div>

                <div class="mt-12 md:mt-16 grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
                    <Way number="01" title={t('support.friendsTitle') ?? ""} text={t('support.friendsText') ?? ""}>
                        <a href={mailto(t('support.friendsSubject'))} class={`${buttonClass} bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]`}>
                            {t('support.friendsAction')}
                        </a>
                    </Way>

                    <Way number="02" title={t('support.donationsTitle') ?? ""} text={t('support.donationsText') ?? ""}>
                        <dl class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
                            <dt class="text-[var(--color-light-text)]/55">{t('support.recipient')}</dt>
                            <dd>vode e.V.</dd>
                            <dt class="text-[var(--color-light-text)]/55">IBAN</dt>
                            <dd class="font-bold tabular-nums">{iban}</dd>
                            <dt class="text-[var(--color-light-text)]/55">{t('support.bank')}</dt>
                            <dd>Sparkasse Paderborn-Detmold-Höxter</dd>
                            <dt class="text-[var(--color-light-text)]/55">{t('support.reference')}</dt>
                            <dd>{t('support.referenceValue')}</dd>
                        </dl>
                        <button
                            type="button"
                            onClick={copyIban}
                            class={`${buttonClass} mt-5 border border-[var(--color-light-text)]/40 hover:bg-[var(--color-surface-alt)] cursor-pointer`}
                        >
                            <span aria-live="polite">{t(copied() ? 'support.ibanCopied' : 'support.copyIban')}</span>
                        </button>
                    </Way>

                    <Way number="03" title={t('support.sponsorsTitle') ?? ""} text={t('support.sponsorsText') ?? ""}>
                        <a href={mailto(t('support.sponsorsSubject'))} class={`${buttonClass} border border-[var(--color-light-text)]/40 hover:bg-[var(--color-surface-alt)]`}>
                            {t('support.sponsorsAction')}
                        </a>
                    </Way>
                </div>

                <p class="mt-14 md:mt-20 border-t border-[var(--color-light-text)]/15 pt-6 text-[var(--color-light-text)]/70" innerHTML={t('support.receipt')} />
            </div>
        </section>
    );
};

export default Support;
