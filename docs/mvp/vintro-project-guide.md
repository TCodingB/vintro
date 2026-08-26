# Vintro — MVP Product Guide

> **Brand idea:** *Every car has a story. Keep the record.*

## 1. Namen MVP-ja

Vintro MVP mora odgovoriti na eno ključno vprašanje:

> **Ali uporabniki želijo vzdrževati digitalen servisni zapis svojega avtomobila in so za to pripravljeni plačati?**

MVP ni namenjen temu, da že reši celoten avtomobilski ekosistem. Namenjen je temu, da uporabniku omogoči **celoten osnovni workflow od registracije vozila do uporabne servisne zgodovine in naslednjega servisa**.

### Osnovna produktna hipoteza

Če uporabniku omogočimo, da:

1. doda svoj avtomobil,
2. hitro zabeleži servis,
3. vidi celotno zgodovino vozila,
4. dobi opozorilo na naslednji servis,
5. zgodovino lahko deli ali izvozi,

bo Vintro postal **digitalna servisna knjižica, ki ostane z avtom skozi njegovo življenjsko dobo**.

---

# 2. MVP Scope

## 2.1 Garage

Uporabnik lahko ustvari račun in doda eno ali več vozil.

### Vehicle profile

Minimalni podatki:

- VIN *(opcijsko v prvi verziji)*
- znamka
- model
- letnik
- motor / različica
- registrska oznaka *(opcijsko)*
- trenutni kilometri
- fotografija vozila *(opcijsko)*

### Cilj

Uporabnik mora imeti občutek, da je ustvaril **digitalni profil svojega avtomobila**, ne samo generičen zapis v tabeli.

---

## 2.2 Digital Service Book

Uporabnik lahko doda servisni dogodek.

### Podatki servisnega dogodka

- datum
- kilometrina
- tip servisa
- opis
- strošek
- izvajalec / servis *(opcijsko)*
- račun ali fotografija dokumenta *(opcijsko)*

### Osnovni tipi dogodkov

- menjava olja
- servis
- zavore
- pnevmatike
- tehnični pregled
- popravilo
- drugo

---

## 2.3 Vehicle Timeline

Vsako vozilo ima kronološko zgodovino.

Primer:

```text
102.350 km
Oil + filter
€179

94.120 km
Front brake pads
€340

82.400 km
Major service
€620
```

Timeline je eden osrednjih delov produkta.

Vintro mora uporabniku dati občutek:

> **To je zgodba mojega avtomobila.**

---

## 2.4 Service Reminders

Uporabnik lahko določi naslednje servise glede na:

- datum,
- kilometrino,
- ali kombinacijo obojega.

### Osnovni reminderji

- olje
- filtri
- zavore
- pnevmatike
- tehnični pregled
- custom reminder

Primer:

```text
NEXT

Oil change
3.200 km

Brake fluid
4 months

Inspection
7 months
```

V prvi verziji ni potrebno imeti popolne baze servisnih intervalov proizvajalcev.

Uporabnik lahko interval določi sam.

---

## 2.5 Documents

Uporabnik lahko servisnemu dogodku ali vozilu pripne:

- račun,
- servisni zapis,
- fotografijo,
- drug dokument.
- Zavarovanje / leasing in ostale dokumente *(opcijsko)*

Cilj je, da Vintro postane **centralni digitalni arhiv vozila**.

---

## 2.6 Shareable Vehicle History

Uporabnik lahko zgodovino vozila deli.

Možne oblike:

- javni/private web link,
- PDF export,
- QR koda.

Uporabno za:

- prodajo avtomobila,
- obisk servisa,
- dokazovanje vzdrževanja,
- novega lastnika vozila.

To je pomemben del dolgoročnega value propositiona:

> **Servisna zgodovina lahko ostane z avtomobilom tudi ob menjavi lastnika.**
> Ob menjavi lastnika, drugi lastnik dobi dovoljenje upravljanje zgodovine vozila in lahko nadaljuje z dodajanjem servisnih dogodkov - To mora potrditi prejšnji lastnik.

---

# 3. Idealni Activation Flow

Uporabnik mora biti sposoben v približno nekaj minutah opraviti:

```text
Sign up
   ↓
Add car
   ↓
Enter current mileage
   ↓
Add previous / latest service
   ↓
See timeline
   ↓
Set next service reminder
```

Po tem mora razumeti osnovno vrednost produkta:

> **Če bom to uporabljal skozi leta, bom imel popolno zgodovino svojega avtomobila.**

---

# 4. Monetizacija že v MVP-ju

MVP mora omogočiti preverjanje **willingness to pay**.

## Free

- 1 vozilo
- osnovna servisna zgodovina
- osnovni reminderji

## Vintro Plus

Okvirno:

**€2.99–€4.99 / mesec**

Možne premium funkcije:

- več vozil
- neomejena servisna zgodovina
- dokumenti in računi
- napredni reminderji
- export / share vehicle history
- cloud backup / sync

### Ključni cilj

Ni pomemben absolutni prihodek v prvih mesecih.

Pomembno je ugotoviti:

> **Ali del aktivnih uporabnikov dejansko plača za produkt?**

---

# 5. MVP Success Metrics

## Acquisition

Koliko obiskovalcev začne uporabljati produkt?

```text
Visitors
↓
Registrations
```

## Activation

Koliko registriranih uporabnikov:

- doda vozilo,
- vnese kilometrino,
- doda vsaj en servis?

### Core activation event

> **User adds a car + first service record.**

---

## Retention

Vintro ni daily-use aplikacija.

Zato DAU ni glavni indikator uspeha.

Pomembnejše vprašanje je:

> **Ko se nekaj zgodi z avtomobilom, ali uporabnik pomisli na Vintro?**

Primeri:

- servis,
- menjava gum,
- tehnični pregled,
- popravilo,
- prodaja avtomobila.

Meriti:

- 30-day return
- 90-day return
- število novih servisnih dogodkov na vozilo
- odziv na reminderje

---

## Monetization

Meriti:

```text
Active users
↓
Trial / paywall exposure
↓
Subscription
```

Posebej pomemben KPI:

> **Paid conversion med aktiviranimi uporabniki.**

---

# 6. Vehicle Record Completeness

Koristna zgodnja growth/engagement funkcija:

## Vehicle Record Score

Primer:

```text
Vehicle Record

87% complete
```

Vintro lahko uporabnika spodbuja, da doda:

- stare servise,
- račune,
- popravila,
- menjave pnevmatik,
- tehnične preglede.

Cilj:

> ustvariti čim bolj popolno življenjsko zgodovino vozila.

To lahko dolgoročno postane eden najvrednejših assetov platforme.

---

# 7. Kaj NAMERNO ni del MVP-ja

Naslednje funkcije so zanimive, vendar ne smejo blokirati prve validacije:

- popoln VIN decoder
- avtomatske OEM specifikacije
- katalog rezervnih delov
- kompatibilnost delov
- dimenzije pnevmatik
- OEM dimenzije platišč
- količina in specifikacija olja
- celotna baza servisnih intervalov proizvajalcev
- booking servisa
- marketplace serviserjev
- OBD integracija
- AI diagnostika
- avtomatski OCR računov
- fleet management
- insurance integrations
- leasing integrations
- kompleksen B2B workshop dashboard

### Pravilo

Nova funkcija pride v core produkt šele, ko:

1. rešuje dokazano težavo uporabnika,
2. bistveno poveča activation, retention ali revenue,
3. ali predstavlja jasen differentiator.

---

# 8. Razvojne faze

## MVP 0 — UX Validation

Cilj:

> preveriti, ali uporabnik razume produkt.

Workflow:

```text
Add car
→ Add service
→ Timeline
→ Reminder
```

Lahko uporablja delno statične ali simulirane podatke.

---

## MVP 1 — First Real Product

Prva verzija za približno 50–200 dejanskih uporabnikov.

Vključuje:

- authentication
- garage
- vehicle profile
- service records
- timeline
- reminders
- documents
- share/export
- subscription

To je prvi pravi Vintro produkt.

---

## MVP 2 — Smart Vehicle Layer

Ko je core vedenje potrjeno:

### VIN → Vehicle Intelligence

Iz VIN-a ali vehicle database:

- točna različica vozila,
- motor,
- servisni intervali,
- oil specification,
- oil capacity,
- tyre dimensions,
- wheel dimensions,
- drugi tehnični podatki.

Takrat se value proposition premakne iz:

> **“Vintro je prostor, kjer zapisujem servise.”**

v:

> **“Vintro ve, kaj moj avtomobil potrebuje.”**

To je potencialno najpomembnejši produktni preskok po MVP-ju.

---

# 9. Produktno načelo

Pri vsaki novi ideji se vprašaj:

> **Ali to potrebujemo, da preverimo glavno hipotezo produkta?**

Če je odgovor **ne**, gre ideja v backlog / appendix.

Cilj prve faze ni zgraditi največ funkcij.

Cilj je najhitreje dokazati:

```text
Problem
→ Usage
→ Retention
→ Willingness to pay
```

---

# Appendix A — Vehicle Intelligence

Dolgoročna vizija je, da Vintro iz digitalne servisne knjižice postane **digitalni twin avtomobila**.

## VIN decoding

VIN lahko avtomatsko določi:

- znamko
- model
- modelno leto
- motor
- menjalnik
- različico
- pogon
- proizvodne podatke

---

## Technical Specifications

Za posamezno vozilo:

- priporočena motorna olja
- količina olja
- hladilna tekočina
- zavorna tekočina
- akumulator
- filtri
- dimenzije pnevmatik
- dovoljene dimenzije platišč
- tlaki pnevmatik
- drugi servisni podatki

---

## Manufacturer Service Schedule

Avtomatski servisni načrt glede na:

- proizvajalca,
- motor,
- starost,
- kilometrino.

Primer:

```text
120.000 km

✓ Engine oil
✓ Oil filter
✓ Air filter
✓ Cabin filter
✓ Brake fluid
○ Timing belt inspection
```

---

# Appendix B — Parts Ecosystem

## Compatible Parts

Vintro lahko uporabniku pokaže dele, ki ustrezajo njegovemu vozilu.

Primer:

```text
BMW 320d 2019

Oil filter
MANN HU 6014 z

Brake pads
ATE ...
Bosch ...
Brembo ...
```

Možni prihodki:

- affiliate fee,
- referral fee,
- marketplace take-rate.

---

## Parts Marketplace

Integracije z:

- distributerji avtodelov,
- spletno prodajo,
- lokalnimi trgovinami,
- OEM ponudniki.

Vintro bi lahko postal:

> **“Shop by your actual car.”**

---

# Appendix C — Workshop / B2B Product

## Vintro for Workshops

Serviser lahko vodi:

- profile strank,
- vozila,
- servisno zgodovino,
- prihajajoče servise,
- dokumentacijo.

Serviser po končanem delu servis zapiše neposredno v Vintro.

Stranka avtomatsko prejme posodobljeno zgodovino.

---

## Workshop CRM

Možne funkcije:

- reminderji strankam,
- priporočeni prihajajoči servisi,
- booking,
- ponudbe,
- računi,
- customer retention.

Monetizacija:

- mesečni SaaS subscription,
- cena glede na število mehanikov ali lokacij.

---

# Appendix D — Verified Service Records

Servisni dogodek bi lahko imel različne nivoje zaupanja:

```text
USER ADDED
WORKSHOP VERIFIED
OEM VERIFIED
```

To bi lahko povečalo vrednost servisne zgodovine pri prodaji vozila.

Dolgoročno lahko nastane:

> **Car history record built throughout ownership.**

---

# Appendix E — Ownership Transfer

Ob prodaji avtomobila lahko lastnik:

1. ustvari shareable history,
2. kupcu pokaže celotno vzdrževanje,
3. prenese digitalni profil vozila na novega lastnika.

Vintro profil tako ostane povezan z vozilom, ne samo z uporabnikom.

To ustvarja potencialen **network effect na ravni posameznega avtomobila**.

---

# Appendix F — Creator / Influencer Ecosystem

Partnerstva z:

- automotive influencerji,
- car enthusiast ustvarjalci,
- restavratorji,
- YouTube mehaniki,
- workshop creatorji.

Primer profila:

> ustvarjalci v slogu Matta Armstronga.

Možnosti:

### Referral program

Creator dobi provizijo za nove Vintro Plus uporabnike.

### Creator garages

Javni profili projektnih avtomobilov.

Primer:

```text
BMW M3 Restoration

Episode 01 — Purchase
Episode 02 — Engine removal
Episode 03 — Suspension rebuild
Episode 04 — First drive
```

Vintro tako postane tudi **digitalna zgodba projektnega avtomobila**.

---

# Appendix G — AI

Možne prihodnje AI funkcije:

## Receipt / Invoice Parsing

Uporabnik fotografira račun.

Vintro avtomatsko prepozna:

- datum,
- kilometrino,
- servis,
- dele,
- ceno.

---

## Service Assistant

Primer:

> “Pri 95.000 km sem menjal olje in zavore. Kaj me čaka naslednje?”

Vintro odgovori na podlagi dejanskega vozila in njegove zgodovine.

---

## Maintenance Risk Detection

Vintro lahko zazna:

- zamujen servis,
- nenavadno pogoste menjave,
- potencialno manjkajoče servisne dogodke.

---

# Appendix H — OBD / Connected Car

Integracija z OBD ali vehicle API-ji lahko omogoči:

- avtomatsko kilometrino,
- fault codes,
- battery status,
- določene telemetrične podatke.

S tem bi bilo vedno manj ročnega vnosa.

---

# Appendix I — Fleet Management

Kasnejši B2B segment:

- manjša podjetja,
- delivery fleets,
- rent-a-car,
- službena vozila,
- taxi / transport.

Vintro omogoči:

- servisne intervale,
- stroške,
- downtime,
- zgodovino,
- dokumentacijo,
- dashboard flote.

---

# Appendix J — Insurance / Leasing / Resale

Strukturirana in preverjena servisna zgodovina ima potencialno vrednost za:

- zavarovalnice,
- leasing hiše,
- dealerje,
- used-car marketplace,
- vehicle inspection,
- financing.

Možen dolgoročni produkt:

## Vintro Vehicle Report

Poročilo lahko vsebuje:

- ownership history,
- maintenance history,
- mileage records,
- verified services,
- completeness score.

---

# Appendix K — Possible Revenue Streams

## B2C

- Vintro Plus subscription
- family / multi-car plan
- premium vehicle report

## Workshops

- workshop SaaS subscription
- CRM
- customer reminder tools
- booking

## Marketplace

- parts affiliate revenue
- tyre affiliate revenue
- workshop referrals
- service booking commission

## Automotive industry

- dealer integrations
- leasing integrations
- insurance integrations
- fleet SaaS

## Data / API

Če nastane dovolj velika in pravno ustrezno obdelana podatkovna baza:

- vehicle maintenance API
- aggregated reliability insights
- servicing benchmarks
- anonymized market intelligence

---

# Appendix L — North Star Vision

Vintro se lahko razvije po naslednji poti:

```text
Digital Service Book
        ↓
Vehicle Maintenance Assistant
        ↓
Vehicle Digital Twin
        ↓
Verified Vehicle History
        ↓
Automotive Ownership Platform
```

Jedro pa ostaja enako:

> **Every car has a story. Keep the record.**

---

# MVP Definition — One Sentence

> **Vintro MVP omogoča uporabniku, da ustvari digitalni profil avtomobila, beleži njegovo servisno zgodovino, hrani dokumentacijo, prejema reminderje in zgodovino deli z drugimi — ter preveri, ali je za to pripravljen plačevati subscription.**
