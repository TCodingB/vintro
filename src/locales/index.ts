import { readonly, ref } from "vue";
import { sl, slPatterns } from "./sl";

export type AppLocale = "sl" | "en";
const stored = localStorage.getItem("vintro-locale");
const locale = ref<AppLocale>(stored === "en" ? "en" : "sl");
const originals = new WeakMap<Text, string>();
const attributeOriginals = new WeakMap<Element, Map<string, string>>();
const translatedAttributes = ["placeholder", "aria-label", "title"];
const months: Record<string, string> = {
  January: "januar",
  February: "februar",
  March: "marec",
  April: "april",
  May: "maj",
  June: "junij",
  July: "julij",
  August: "avgust",
  September: "september",
  October: "oktober",
  November: "november",
  December: "december",
  Monday: "ponedeljek",
  Tuesday: "torek",
  Wednesday: "sreda",
  Thursday: "četrtek",
  Friday: "petek",
  Saturday: "sobota",
  Sunday: "nedelja",
  Mon: "pon",
  Tue: "tor",
  Wed: "sre",
  Thu: "čet",
  Fri: "pet",
  Sat: "sob",
  Sun: "ned",
  Jan: "jan",
  Feb: "feb",
  Mar: "mar",
  Apr: "apr",
  Jun: "jun",
  Jul: "jul",
  Aug: "avg",
  Sep: "sep",
  Oct: "okt",
  Nov: "nov",
  Dec: "dec",
};

function translate(value: string) {
  if (locale.value === "en") return value;
  const exact = sl[value];
  if (exact) return exact;
  for (const [pattern, replacement] of slPatterns) {
    const match = value.match(pattern);
    if (match) return replacement(...match.slice(1));
  }
  let result = value;
  for (const [word, replacement] of Object.entries(months))
    result = result.replace(new RegExp(`\\b${word}\\b`, "g"), replacement);
  return result;
}

function applyText(node: Text) {
  if (!originals.has(node)) originals.set(node, node.data);
  const source = originals.get(node)!;
  const trimmed = source.trim();
  if (!trimmed) return;
  node.data = source.replace(trimmed, translate(trimmed));
}

function applyElement(element: Element) {
  if (element.matches("script, style")) return;
  let saved = attributeOriginals.get(element);
  if (!saved) {
    saved = new Map();
    attributeOriginals.set(element, saved);
  }
  for (const attribute of translatedAttributes) {
    const current = element.getAttribute(attribute);
    if (current !== null && !saved.has(attribute))
      saved.set(attribute, current);
    const source = saved.get(attribute);
    if (source !== undefined)
      element.setAttribute(attribute, translate(source));
  }
}

function applyLocale(root: ParentNode = document.body) {
  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
  );
  let node: Node | null = root as Node;
  while (node) {
    if (node.nodeType === Node.TEXT_NODE) applyText(node as Text);
    else applyElement(node as Element);
    node = walker.nextNode();
  }
}

let observer: MutationObserver | undefined;
let queued = false;
function refresh() {
  if (!document.body) return;
  observer?.disconnect();
  applyLocale();
  observer?.observe(document.body, {
    childList: true,
    characterData: true,
    subtree: true,
  });
}

export function installLocale() {
  document.documentElement.lang = locale.value === "sl" ? "sl-SI" : "en";
  observer = new MutationObserver((mutations) => {
    // Vue can reuse an existing text node when a status or value changes. Treat
    // that new value as the source text so localization never restores stale UI.
    for (const mutation of mutations) {
      if (mutation.type === "characterData")
        originals.set(
          mutation.target as Text,
          mutation.target.textContent ?? "",
        );
    }
    if (queued) return;
    queued = true;
    queueMicrotask(() => {
      queued = false;
      refresh();
    });
  });
  refresh();
}

export function useLocale() {
  const setLocale = (value: AppLocale) => {
    locale.value = value;
    localStorage.setItem("vintro-locale", value);
    document.documentElement.lang = value === "sl" ? "sl-SI" : "en";
    refresh();
  };
  return { locale: readonly(locale), setLocale, translate };
}
