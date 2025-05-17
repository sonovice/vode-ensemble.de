import {
    createContext,
    useContext,
    createSignal,
    createResource,
    type Accessor,
    type Component,
    type JSX,
} from "solid-js";
import {
    translator,
    flatten,
    resolveTemplate,
    type TemplateResolver,
    type Flatten
} from "@solid-primitives/i18n";
import type { Locale, BaseDictionary } from "./config";
import { DefaultLocale, AllLocales, LocaleStorageKey } from "./config";

// Import the raw default dictionary
import de_dict_raw from "./de";

// Type for the raw, potentially nested dictionary structure (matches BaseDictionary)
type RawDictionary = BaseDictionary;

// Use the actual return type of flatten for FlatDictionary
export type FlatDictionary = Flatten<RawDictionary>;

async function fetchDictionary(locale: Locale): Promise<FlatDictionary> {
    let rawDict: RawDictionary;
    switch (locale) {
        case "en":
            rawDict = (await import("./en")).default as RawDictionary;
            break;
        case "de":
            rawDict = (await import("./de")).default as RawDictionary;
            break;
        default:
            // Fallback to default locale if an unsupported locale is somehow selected
            console.warn(`Unsupported locale: ${locale}, falling back to ${DefaultLocale}`);
            rawDict = de_dict_raw as RawDictionary;
            break;
    }
    return flatten(rawDict); // No cast needed if types align
}

// Translator function can accept Record<string, any> for params
type TranslatorFunc = (key: string, params?: Record<string, any>, defaultValue?: string) => string | undefined;

export type I18nContextType = {
    t: TranslatorFunc;
    locale: Accessor<Locale>;
    setLocale: (locale: Locale) => void;
    allLocales: readonly Locale[];
    dict: Accessor<FlatDictionary | undefined>; // Expose dict for debugging or direct use if needed
};

const I18nContext = createContext<I18nContextType>();

export const I18nProvider: Component<{ children: JSX.Element }> = (props) => {
    const savedLocale = typeof window !== 'undefined' ? localStorage.getItem(LocaleStorageKey) as Locale | null : null;
    const initialLocale = savedLocale && AllLocales.includes(savedLocale) ? savedLocale : DefaultLocale;

    const [locale, setLocaleSignal] = createSignal<Locale>(initialLocale);

    const [dictResource] = createResource<FlatDictionary, Locale>(
        locale,
        fetchDictionary,
        {
            initialValue: flatten(de_dict_raw as RawDictionary),
        }
    );

    const t = translator(dictResource, resolveTemplate as TemplateResolver);

    const contextValue: I18nContextType = {
        // Cast t to TranslatorFunc to simplify its usage signature for consumers
        t: t as unknown as TranslatorFunc,
        locale,
        setLocale: (newLocale: Locale) => {
            if (AllLocales.includes(newLocale)) {
                setLocaleSignal(newLocale);
                if (typeof window !== 'undefined') {
                    localStorage.setItem(LocaleStorageKey, newLocale);
                }
            } else {
                console.warn(`Attempted to set unsupported locale: ${newLocale}`);
            }
        },
        allLocales: AllLocales,
        dict: dictResource,
    };

    return (
        <I18nContext.Provider value={contextValue}>
            {props.children}
        </I18nContext.Provider>
    );
};

export const useI18n = () => {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error("useI18n must be used within an I18nProvider");
    }
    return context;
};

// Komponente für den Sprachumschalter
export const LanguageSwitcher: Component = () => {
    const { locale, setLocale } = useI18n();

    const toggleLanguage = () => {
        setLocale(locale() === "de" ? "en" : "de");
    };

    return (
        <button onClick={toggleLanguage}>
            {locale() === "de" ? "EN" : "DE"}
        </button>
    );
}; 