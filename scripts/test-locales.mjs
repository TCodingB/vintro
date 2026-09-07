import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createServer } from 'vite';
import { computed, createSSRApp } from 'vue';
import { createMemoryHistory, createRouter } from 'vue-router';
import { renderToString } from '@vue/server-renderer';

// Exercise the actual Vue templates without relying on DOM text replacement.
const storage = new Map([['vintro-locale', 'de']]);
globalThis.localStorage = {
  getItem: key => storage.get(key) ?? null,
  setItem: (key, value) => storage.set(key, value),
};
globalThis.document = { documentElement: { lang: '' } };
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { useLocale } = await server.ssrLoadModule('/src/locales/index.ts');
  const { locale, translate, setLocale } = useLocale();
  assert.equal(locale.value, 'de', 'Restores the saved German locale');
  assert.equal(translate('Maintenance'), 'Wartung');
  const { sl } = await server.ssrLoadModule('/src/locales/sl.ts');
  const { de } = await server.ssrLoadModule('/src/locales/de.ts');
  assert.deepEqual(Object.keys(de).sort(), Object.keys(sl).sort(), 'German catalog covers every Slovenian key');
  for (const [key, value] of Object.entries(de)) assert.ok(value.trim(), `Empty German translation: ${key}`);
  setLocale('sl');
  assert.equal(translate('2 vehicles. Every story in one place.'), '2 vozili. Vse zgodbe na enem mestu.');
  assert.equal(translate('1 awaiting review'), '1 ponudba čaka na pregled');
  assert.equal(translate('2 awaiting review'), '2 ponudbi čakata na pregled');
  assert.equal(translate('5 awaiting review'), '5 ponudb čaka na pregled');
  for (const [count, noun] of [[0,'vozil'], [1,'vozilo'], [2,'vozili'], [3,'vozila'], [4,'vozila'], [5,'vozil'], [101,'vozilo'], [102,'vozili']])
    assert.equal(translate(`${count} vehicles`), `${count} ${noun}`);
  assert.equal(translate('Quote approved'), 'Ponudba odobrena');
  assert.equal(translate('Policy expires 31 December 2026'), 'Polica poteče 31. 12. 2026');
  assert.equal(translate('BMW 320d Touring · Oil service'), 'BMW 320d Touring · Menjava olja');
  assert.equal(translate(undefined), '');
  assert.equal(translate('Jan Kos'), 'Jan Kos');
  assert.equal(translate('Jan'), 'jan');
  assert.equal(translate('Mon–Fri · 07:30–17:00'), 'pon–pet · 07:30–17:00');
  const reactiveLabel = computed(() => translate('Garage'));
  assert.equal(reactiveLabel.value, 'Garaža');
  setLocale('en');
  assert.equal(translate('2 awaiting review'), '2 awaiting review');
  assert.equal(document.documentElement.lang, 'en');
  assert.equal(reactiveLabel.value, 'Garage');
  setLocale('sl');
  assert.equal(document.documentElement.lang, 'sl-SI');
  assert.equal(reactiveLabel.value, 'Garaža');

  setLocale('de');
  assert.equal(document.documentElement.lang, 'de-DE');
  assert.equal(storage.get('vintro-locale'), 'de');
  const germanLabel = computed(() => translate('Maintenance'));
  assert.equal(germanLabel.value, 'Wartung');
  for (const [source, expected] of [
    ['2 vehicles. Every story in one place.', '2 Fahrzeuge. Jede Geschichte an einem Ort.'],
    ['0 vehicles', '0 Fahrzeuge'],
    ['1 vehicle', '1 Fahrzeug'],
    ['1 awaiting review', '1 Angebot wartet auf Prüfung'],
    ['2 awaiting review', '2 Angebote warten auf Prüfung'],
    ['1 active request', '1 aktive Anfrage'],
    ['3 active requests', '3 aktive Anfragen'],
    ['2 waiting approval', '2 Angebote warten auf Freigabe'],
    ['Photos (2)', 'Fotos (2)'],
    ['(128 reviews)', '(128 Bewertungen)'],
    ['Quote approved', 'Angebot freigegeben'],
    ['BMW 320d Touring · Oil service', 'BMW 320d Touring · Ölservice'],
    ['Policy expires 31 December 2026', 'Police gültig bis 31. 12. 2026'],
    ['Wednesday, 26 August 2026', 'Mittwoch, 26. 8. 2026'],
    ['Mon–Fri · 07:30–17:00', 'Mo–Fr · 07:30–17:00'],
    ['Jan Kos', 'Jan Kos'],
    ['Step 2 of 4', 'Schritt 2 von 4'],
    ['64 of 80 storage positions', '64 von 80 Lagerplätzen'],
    ['1 documents', '1 Dokument'],
    ['4 photos', '4 Fotos'],
    ['2 new', '2 neue Benachrichtigungen'],
    ['Estimated opportunity €1,050', 'Geschätztes Potenzial €1,050'],
    ['15,000 km / 12 months', '15,000 km / 12 Monate'],
    ['8-speed automatic', '8-Gang-Automatik'],
    ['Service due in 1 days', 'Service in 1 Tag fällig'],
    ['Service due in 30 days', 'Service in 30 Tagen fällig'],
    ['Due in 30 days', 'Fällig in 30 Tagen'],
    ['Due in 1 month', 'Fällig in 1 Monat'],
    ['Service due in 30 days reminder prepared', 'Erinnerung vorbereitet: Service in 30 Tagen fällig'],
    ['Reminder added for Oil service', 'Erinnerung hinzugefügt: Ölservice'],
    ['BMW 320d · due within 30 days', 'BMW 320d · innerhalb von 30 Tagen fällig'],
    ['Member benefit · 10% off labour for Vintro members', 'Mitgliedervorteil · 10 % Rabatt auf Arbeitskosten für Vintro-Mitglieder'],
    ['Your decision will be shared with Servis Ljubljana. This remains a local prototype action.', 'Ihre Entscheidung wird Servis Ljubljana mitgeteilt. Dies bleibt eine lokale Aktion im Prototyp.'],
    ['This quote is approved. The workshop can see your decision.', 'Dieses Angebot ist freigegeben. Die Werkstatt kann Ihre Entscheidung sehen.'],
    ['Servis Ljubljana will confirm Tue 1 Sep · 08:00. We’ll notify you when they respond.', 'Servis Ljubljana wird den Termin Di 1 Sep · 08:00 bestätigen. Wir benachrichtigen Sie, sobald eine Antwort vorliegt.'],
  ]) assert.equal(translate(source), expected, source);
  setLocale('en');
  assert.equal(germanLabel.value, 'Maintenance');
  setLocale('sl');
  assert.equal(germanLabel.value, 'Vzdrževanje');
  setLocale('de');
  assert.equal(germanLabel.value, 'Wartung');

  const main = await readFile(new URL('../src/main.ts', import.meta.url), 'utf8');
  const imports = new Map([...main.matchAll(/import (\w+) from '(\.\/pages\/[^']+)'/g)].map(m => [m[1], '/src/' + m[2].slice(2)]));
  let rendered = 0;
  const unchanged = { sl: new Set(), de: new Set() };
  for (const match of main.matchAll(/\{path:'([^']+)',component:(\w+)([^}]*)(?:\}|$)/g)) {
    const [, routePath, name, rest] = match;
    const { default: component } = await server.ssrLoadModule(imports.get(name));
    const id = routePath.startsWith('/workshop/orders') ? 'WO-1048' : routePath.startsWith('/workshop/customers') ? 'c1' : routePath.startsWith('/workshops/') ? 'garage-jerala' : routePath.startsWith('/quotes/') ? 'q1' : 'bmw-320d';
    const url = routePath.replace(':id', id).replace(':workshopId', 'garage-jerala');
    const props = rest.includes("mode:") ? { mode: rest.match(/mode:'([^']+)'/)[1] } : {};
    const router = createRouter({ history: createMemoryHistory(), routes: [{ path: routePath, component, props }, { path: "/:pathMatch(.*)*", component: { render: () => null } }] });
    await router.push(url);
    await router.isReady();
    const html = {};
    for (const language of ['en', 'sl', 'de']) {
      setLocale(language);
      html[language] = await renderToString(createSSRApp(component, props).use(router));
      assert.ok(!html[language].includes('&amp;quot;'), `${url}: escaped expression`);
    }
    if (url === '/') assert.ok(html.sl.includes('2 vozili. Vse zgodbe na enem mestu.'));
    if (url === '/activity') assert.ok(html.sl.includes('ponudba čaka na pregled'));
    if (url === '/') assert.ok(html.de.includes('2 Fahrzeuge. Jede Geschichte an einem Ort.'));
    if (url === '/activity') assert.ok(html.de.includes('Angebot wartet auf Prüfung'));
    if (url === '/profile') {
      assert.ok(html.de.includes('value="de">Deutsch</option>'));
      assert.match(html.de, /<select[^>]*value="de"/);
      assert.ok(html.en.includes('value="de">German</option>'));
      assert.ok(html.sl.includes('value="de">Nemščina</option>'));
    }
    if (url === '/workshop/orders') {
      assert.ok(html.sl.includes('value="Booked"'));
      assert.ok(html.sl.includes('Rezervirano'));
      assert.ok(html.de.includes('value="Booked"'));
      assert.ok(html.de.includes('Gebucht'));
    }
    const english = new Set([...html.en.matchAll(/>([^<>]+)</g)].map(m => m[1].trim()));
    for (const language of ['sl', 'de']) {
      for (const [, text] of html[language].matchAll(/>([^<>]+)</g)) {
        if (/[a-zA-Z]{3}/.test(text) && english.has(text.trim())) unchanged[language].add(text.trim());
      }
    }
    rendered++;
  }
  if (process.env.LOCALE_AUDIT) for (const language of ['sl', 'de']) console.log(language + '\n' + [...unchanged[language]].sort().join('\n'));
  console.log(`Locale checks passed; rendered ${rendered} routes in all three languages.`);
} finally {
  await server.close();
}
