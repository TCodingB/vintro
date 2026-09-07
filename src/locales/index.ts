import { readonly, ref } from "vue";
import { sl, slPatterns, slCalendar } from "./sl";
import { de, dePatterns, deCalendar } from "./de";
import { sourceMonthNumbers } from "./calendar";

export type AppLocale = "sl" | "en" | "de";
const stored = localStorage.getItem("vintro-locale");
const locale = ref<AppLocale>(stored === "en" || stored === "de" ? stored : "sl");

const catalogs = {
  sl: { messages: sl, patterns: slPatterns, calendar: slCalendar },
  de: { messages: de, patterns: dePatterns, calendar: deCalendar },
};
const languageTags: Record<AppLocale, string> = { sl: "sl-SI", en: "en", de: "de-DE" };

function translateMessage(value: string, catalog: typeof catalogs.sl): string {
  const { messages, patterns } = catalog;
  if (messages[value]) return messages[value];
  for (const [pattern, replacement] of patterns) {
    const match = value.match(pattern);
    if (match) {
      const result = replacement(...match.slice(1));
      if (result !== value) return result;
    }
  }
  // Labels in metadata are separated from vehicle names and other stored data.
  return value.split(/( · | × )/).map(part => messages[part] ?? part).join("");
}

/** Source-language keys remain stable in data, filters and form values. */
export function translate(value: unknown): string {
  const source = value == null ? "" : String(value);
  if (locale.value === "en") return source;
  const trimmed = source.trim();
  const catalog = catalogs[locale.value];
  let result = translateMessage(trimmed, catalog);
  result = result.replace(
    /\b(\d{1,2}) ([A-Za-z]+) (\d{4})\b/g,
    (date, day, month, year) => sourceMonthNumbers[month] ? `${Number(day)}. ${sourceMonthNumbers[month]}. ${year}` : date,
  );
  // Translate calendar labels and dates without changing names such as Jan Kos.
  for (const [word, replacement] of Object.entries(catalog.calendar)) {
    if (result === word) result = replacement;
    else result = result.replace(
      new RegExp(`\\b${word}\\b(?= \\d|,|[–—]| ·)|(?<=[–—])\\b${word}\\b`, "g"),
      replacement,
    );
  }
  return source.replace(trimmed, result);
}

export function installLocale() {
  document.documentElement.lang = languageTags[locale.value];
}

export function useLocale() {
  const setLocale = (value: AppLocale) => {
    locale.value = value;
    localStorage.setItem("vintro-locale", value);
    installLocale();
  };
  return { locale: readonly(locale), setLocale, translate };
}
