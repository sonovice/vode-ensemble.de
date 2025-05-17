export const AllLocales = ["de", "en"] as const;
export type Locale = (typeof AllLocales)[number];

export const DefaultLocale: Locale = "de";

export const LocaleStorageKey = "vode-locale";

export const LocalesLabels: Record<Locale, string> = {
  de: "DE",
  en: "EN",
};

// This type defines the expected SHAPE of your raw, nested dictionary objects.
// The actual values can be strings or functions returning strings.
export type DictionaryModule = {
  [key: string]: string | DictionaryModule | ((...args: any[]) => string);
};

export type BaseDictionary = {
  nav: DictionaryModule;
  hero?: DictionaryModule;
  ensemble?: DictionaryModule;
  concerts?: DictionaryModule;
  academy?: DictionaryModule;
  media?: DictionaryModule;
  contact?: DictionaryModule;
  support?: DictionaryModule;
  // Add other sections as needed
  [key: string]: DictionaryModule | undefined;
}; 