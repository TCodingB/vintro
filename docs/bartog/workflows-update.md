Spodaj je združena verzija: **celoten Vintro workflow katalog**, ohranjen na nivoju end-to-end scenarijev in organiziran po scenarijih, ne po stakeholderjih.

# Vintro — End-to-End Workflow Catalogue

## A. Onboarding in digitalni profil vozila

### WF01 — Dodajanje in identifikacija vozila
**Primarni akter:** Voznik  
**Sprožilec:** Voznik želi dodati vozilo.

**Potek:** VIN/registracija → identifikacija vozila → pridobitev tehničnih podatkov → potrditev uporabnika → digitalni profil vozila.

**Rezultat:** Enoten digitalni profil avtomobila.  
**Voznik:** Ni ročnega zbiranja podatkov.  
**Servis:** Zanesljiv vehicle context.  
**Bartog:** Osnova za povezavo s katalogom, podatki in lifecycleom.  
**Povezuje:** voznik ↔ Vintro ↔ podatkovni sistemi  
**Tip:** acquisition/onboarding

### WF02 — Uvoz obstoječe servisne zgodovine
**Primarni akter:** Voznik
**Sprožilec:** Dodano rabljeno/obstoječe vozilo.

Računi, servisna knjižica ali podatki servisa → strukturiranje posegov → potrditev → servisni timeline.

**Rezultat:** Digitalizirana zgodovina vozila.  
**Voznik:** Celotna zgodovina na enem mestu.  
**Servis:** Pozna pretekle posege.  
**Bartog:** Kakovostnejši lifecycle podatki.  
**Povezuje:** voznik ↔ servis  
**Tip:** acquisition/onboarding

### WF03 — Povezava vozila z obstoječim servisom
**Primarni akter:** Voznik/servis
**Sprožilec:** Voznik želi povezati vozilo z obstoječim servisom.

Identifikacija stranke → povezava profila → dovoljenja → servis pridobi relevantni vehicle context.

**Rezultat:** Obstoječ odnos servis–stranka se nadaljuje digitalno.  
**Povezuje:** voznik ↔ servis  
**Tip:** acquisition/onboarding

### WF04 — Dodajanje dokumentacije vozila
**Primarni akter:** Voznik
**Sprožilec:** Voznik želi shraniti dokument vozila.

Dokument → prepoznava vrste → pridobitev relevantnih podatkov/datumov → shranjevanje → po potrebi opomnik.

**Rezultat:** Digitalni vehicle wallet.  
**Povezuje:** voznik ↔ Vintro  
**Tip:** vehicle management

---

# B. Moj avto — centralno stičišče informacij

### WF05 — Vehicle Information Hub
**Primarni akter:** Voznik
**Sprožilec:** Voznik potrebuje informacijo o svojem avtomobilu.

Vozilo → Vintro združi tehnične podatke, VIN, motor, servisno zgodovino, prihodnje potrebe, pnevmatike, olje, dokumente, zavarovanje itd. → uporabnik dobi odgovor.

**Rezultat:** Vintro postane **prvo mesto za vprašanja o lastnem avtomobilu**.  
**Voznik:** Vse na enem mestu.  
**Servis:** Bolj informirana stranka in boljši podatki.  
**Bartog:** Engagement tudi zunaj servisnih dogodkov.  
**Povezuje:** voznik ↔ Vintro ↔ zunanji podatki  
**Tip:** vehicle management

### WF06 — Katero olje in tekočine potrebuje vozilo?
**Primarni akter:** Voznik
**Sprožilec:** Voznik želi preveriti ustrezne tekočine za svoje vozilo.

Vozilo → motor/specifikacija → ustrezno olje/hladilna/zavorna tekočina + količina → DIY nakup ali servis.

**Rezultat:** Voznik dobi preverjeno specifikacijo in naslednji korak, brez ugibanja o tekočini ali količini.

**Povezuje:** voznik ↔ Bartog/servis  
**Tip:** vehicle management

### WF07 — Katere pnevmatike in platišča ustrezajo vozilu?
**Primarni akter:** Voznik
**Sprožilec:** Voznik želi izbrati pnevmatike ali platišča za konkretno vozilo.

Vozilo → homologirane dimenzije → kompatibilne konfiguracije → nakup ali booking.

**Rezultat:** Voznik izbere kompatibilno konfiguracijo za nakup ali servis.

**Povezuje:** voznik ↔ servis ↔ Bartog  
**Tip:** vehicle management

### WF08 — Kateri potrošni material ustreza vozilu?
**Primarni akter:** Voznik
**Sprožilec:** Voznik želi zamenjati potrošni material.

Brisalci, žarnice, filtri, akumulator itd. → vehicle matching → kompatibilni izdelki → DIY ali servis.

**Rezultat:** Voznik dobi seznam kompatibilnih izdelkov in možnost nakupa ali rezervacije servisa.

**Povezuje:** voznik ↔ Bartog ↔ servis  
**Tip:** vehicle management

---

# C. Preventivno vzdrževanje

### WF09 — Prihajajoči redni servis
**Primarni akter:** Vintro/voznik
**Sprožilec:** Vintro zazna, da se približuje servisni interval.

Servisni interval → Vintro zazna potrebo → opozorilo → booking → servis prejme kontekst → pripravi dele → servis → posodobitev zgodovine.

**Rezultat:** Pravočasen servis.  
**Voznik:** Ni treba spremljati intervalov.  
**Servis:** Pravočasna rezervacija.  
**Bartog:** Predvidljivo povpraševanje po delih.  
**Povezuje:** **voznik ↔ servis ↔ Bartog**  
**Tip:** preventive maintenance

### WF10 — Servis glede na kilometrino
**Primarni akter:** Vintro/voznik
**Sprožilec:** Zabeležena kilometrina doseže prag za servis.

Kilometrina → preračun intervala → zaznana potreba → opozorilo → servisni workflow.

**Rezultat:** Kilometrina sproži pravočasno servisno priporočilo in nadaljnji servisni proces.

**Tip:** preventive maintenance

### WF11 — Časovno pogojeno vzdrževanje
**Primarni akter:** Vintro/voznik
**Sprožilec:** Preteče časovni interval za vzdrževanje.

Časovni interval → zaznana zapadlost → opozorilo → booking → izvedba → nov interval.

Primer: zavorna tekočina.

**Rezultat:** Časovno zapadlo vzdrževanje je izvedeno in naslednji interval je nastavljen.

**Tip:** preventive maintenance

### WF12 — Združevanje več prihodnjih servisnih potreb
**Primarni akter:** Vintro/servis
**Sprožilec:** Vintro zazna več potreb v podobnem obdobju.

Več potreb v podobnem obdobju → Vintro predlaga združitev → servis preveri → skupna ponudba → en obisk.

**Rezultat:** Več potreb je združenih v en potrjen servisni obisk.

**Voznik:** Manj obiskov.  
**Servis:** Višja vrednost delovnega naloga.  
**Bartog:** Več delov na naročilo.  
**Tip:** preventive maintenance

### WF13 — Preventivni pregled pred potovanjem
**Primarni akter:** Voznik
**Sprožilec:** Voznik načrtuje daljšo pot.

Načrtovana daljša pot → pregled → odkrite potrebe → ponudba → izvedba.

**Rezultat:** Vozilo je pregledano in nujne potrebe so odpravljene pred potovanjem.

**Tip:** preventive maintenance

---

# D. Pnevmatike in sezonske potrebe

### WF14 — Sezonska menjava pnevmatik
**Primarni akter:** Voznik/servis
**Sprožilec:** Približuje se sezona menjave pnevmatik.

Sezona → opomnik → booking → priprava pnevmatik → menjava → zapis.

**Rezultat:** Pnevmatike so pravočasno pripravljene, zamenjane in evidentirane.

**Povezuje:** voznik ↔ servis ↔ Bartog  
**Tip:** preventive maintenance

### WF15 — Pnevmatike + prihajajoči servis
**Ključni Vintro scenarij.**

**Primarni akter:** Servisni svetovalec
**Sprožilec:** Voznik rezervira menjavo pnevmatik, sistem pa zazna bližnji servis.

Booking menjave pnevmatik → Vintro ugotovi, da čez 1.500 km sledi servis → servis vidi priložnost → predlaga združitev → voznik potrdi → Bartog dobavi dele → vse opravljeno v enem obisku.

**Rezultat:** Menjava pnevmatik in bližnji servis sta izvedena v enem obisku.

**Voznik:** Prihranek časa.  
**Servis:** Več dela na obisk.  
**Bartog:** Več prodanih delov/materiala.  
**Povezuje:** **voznik ↔ servis ↔ Bartog**  
**Tip:** workshop operations

### WF16 — Nakup novih pnevmatik
**Primarni akter:** Voznik/servis
**Sprožilec:** Vozilo potrebuje nov komplet pnevmatik.

Obraba/potreba → pravilna dimenzija → ponudba → izbira → Bartog dobavi → servis montira.

**Rezultat:** Kompatibilen komplet je dobavljen in nameščen na vozilo.

**Tip:** parts/logistics

### WF17 — Hramba pnevmatik
**Primarni akter:** Servis
**Sprožilec:** Po sezonski menjavi voznik ponudi oziroma sprejme hrambo kompleta.

Menjava → ponudba hrambe → evidenca kompleta/stanja → naslednjo sezono avtomatsko povabilo.

**Rezultat:** Komplet je varno evidentiran in ponovno aktiviran ob naslednji sezoni.

**Tip:** retention

### WF18 — Zaznana iztrošenost pnevmatik
**Primarni akter:** Servis
**Sprožilec:** Meritev ali starost pnevmatike pokaže potrebo po zamenjavi.

Meritev/starost → zaznana potreba → priporočilo → ponudba → dobava → montaža.

**Rezultat:** Iztrošene pnevmatike so zamenjane s kompatibilnim kompletom.

**Tip:** preventive maintenance

---

# E. DIY in rezervni deli za voznika

### WF19 — Identifikacija rezervnega dela za DIY
**Primarni akter:** Voznik
**Sprožilec:** Voznik želi nekaj zamenjati sam.

Vozilo → komponenta → Vintro uporabi vehicle context → kompatibilni deli → izbira.

**Voznik:** Ni ugibanja o kompatibilnosti.  
**Bartog:** Neposreden demand-generation kanal.  
**Rezultat:** Voznik izbere kompatibilen del za konkretno vozilo.
**Povezuje:** voznik ↔ Bartog  
**Tip:** parts/logistics

### WF20 — Nakup DIY rezervnega dela
**Primarni akter:** Voznik/Bartog
**Sprožilec:** Voznik je identificiral kompatibilen DIY del in ga želi kupiti.

Identificiran del → cena/dobavljivost → naročilo → Bartog fulfillment → prevzem/dostava.

**Rezultat:** Voznik prejme pravilen rezervni del na izbran način prevzema ali dostave.

**Povezuje:** **voznik ↔ Bartog**  
**Tip:** parts/logistics

### WF21 — DIY vzdrževanje
**Primarni akter:** Voznik
**Sprožilec:** Voznik želi poseg opraviti sam.

Voznik želi poseg opraviti sam → ustrezen material/specifikacije → izvedba → uporabnik zabeleži poseg in kilometrino → lifecycle se posodobi.

**Rezultat:** DIY poseg je zabeležen v digitalni zgodovini vozila.

**Tip:** vehicle management

### WF22 — DIY potreba postane servisni primer
**Primarni akter:** Voznik
**Sprožilec:** Voznik ugotovi, da DIY posega ne želi ali ne more izvesti sam.

Voznik raziskuje popravilo → presodi, da ga ne želi opraviti sam → »Rezerviraj servis« → vehicle/problem context se prenese servisu → booking.

**Voznik:** Enostaven prehod na strokovno pomoč.  
**Servis:** Nova stranka/delo.  
**Bartog:** DIY engagement generira servisno povpraševanje.  
**Rezultat:** Problem in vehicle context sta prenesena v servisni booking.
**Tip:** customer relationship

---

# F. Okvara in pomoč na cesti

### WF23 — Voznik zazna težavo
**Primarni akter:** Voznik
**Sprožilec:** Voznik zazna lučko, zvok, vibracijo ali drugo težavo.

Lučka/zvok/vibracija → opis simptoma → strukturiranje problema → servis prejme kontekst → triage → diagnostika → popravilo.

**Rezultat:** Težava je klasificirana in predana v ustrezen diagnostični ali servisni proces.

**Tip:** reactive maintenance

### WF24 — Warning light / diagnostična napaka
**Primarni akter:** Voznik/servis
**Sprožilec:** Vozilo prikaže opozorilno lučko ali diagnostično kodo.

Opozorilo/DTC → interpretacija → ocena nujnosti → servis → diagnostika → deli → popravilo.

**Rezultat:** Diagnostična napaka je ocenjena po nujnosti in rešena ali predana servisu.

**Povezuje:** vozilo ↔ voznik ↔ servis ↔ Bartog  
**Tip:** reactive maintenance

### WF25 — Potrebujem pomoč na cesti
**Primarni akter:** Voznik
**Sprožilec:** Vozilo se pokvari na cesti in voznik potrebuje pomoč.

Okvara → Vintro pokaže uporabnikovo assistance kritje → pravilna telefonska številka/kontakt → podatki vozila in police → pomoč.

**Rezultat:** Vozniku ni treba ugotavljati, *»Koga moram sploh poklicati?«*  
**Tip:** reactive maintenance

### WF26 — Potrebujem avtovleko
**Primarni akter:** Voznik/assistance partner
**Sprožilec:** Vozilo ni vozno in ga je treba prepeljati.

Vozilo ni vozno → assistance/avtovleka → izbor primernega partnerskega servisa → vehicle context → vleka → diagnostika/popravilo.

**Rezultat:** Vozilo je prepeljano v primeren servis z že prenesenim kontekstom.

**Povezuje:** **voznik ↔ avtovleka ↔ servis ↔ Bartog**  
**Tip:** reactive maintenance

### WF27 — Manjša težava na cesti
**Primarni akter:** Voznik
**Sprožilec:** Voznik na cesti zazna manjšo težavo, kot so prazen akumulator, pnevmatika ali ključ.

Prazen akumulator/pnevmatika/ključ ipd. → klasifikacija problema → DIY navodilo, assistance ali servis → rešitev.

**Rezultat:** Voznik dobi primeren naslednji korak in se vrne v varno oziroma vozno stanje.

**Tip:** reactive maintenance

### WF28 — Ponovljena okvara
**Primarni akter:** Voznik/servis
**Sprožilec:** Po preteklem posegu se pojavi soroden ali ponovljen problem.

Soroden problem po preteklem posegu → Vintro poveže dogodke → servis vidi zgodovino → ciljna diagnostika → rešitev/reklamacija.

**Rezultat:** Ponovljena okvara je obravnavana kot povezan primer z možnostjo reklamacije.

**Tip:** reactive maintenance

---

# G. Nesreča in škodni primer

### WF29 — Imel sem prometno nesrečo – kaj zdaj?
**Primarni akter:** Voznik
**Sprožilec:** Nesreča.

Accident Mode → varnost/nujna pomoč → navodila → podatki udeležencev → dokumentiranje → zapisnik → zavarovalnica → assistance/popravilo.

**Rezultat:** Vintro vodi voznika skozi stresen dogodek.  
**Tip:** other

### WF30 — Izpolnitev poročila o prometni nesreči
**Primarni akter:** Voznik
**Sprožilec:** Po nesreči je treba pripraviti poročilo.

Nesreča → podatki vozila/lastnika/zavarovanja se predizpolnijo → podatki drugega udeleženca → okoliščine → pripravljen zapisnik.

**Rezultat:** Pripravljen je popolnejši zapisnik z manj ročnega vnosa.

**Tip:** other

### WF31 — Dokumentiranje škode
**Primarni akter:** Voznik
**Sprožilec:** Po nesreči je treba zbrati dokaze o škodi.

Vintro vodi uporabnika skozi fotografije vozil, registracij, poškodb, lokacije, dokumentov, prič in okoliščin → accident case.

**Rezultat:** Accident case vsebuje strukturirano dokumentacijo za nadaljnjo obravnavo.

**Tip:** other

### WF32 — Prijava škode zavarovalnici
**Primarni akter:** Voznik/zavarovalnica
**Sprožilec:** Accident case je dovolj dokumentiran za prijavo škode.

Accident case → polica → fotografije/dokumentacija → kontakt ali digitalna prijava → spremljanje primera.

**Rezultat:** Škoda je prijavljena in njen status je mogoče spremljati.

**Povezuje:** voznik ↔ zavarovalnica  
**Tip:** other

### WF33 — Od nesreče do popravljenega avtomobila
**Primarni akter:** Voznik/zavarovalnica/servis
**Sprožilec:** Po prometni nesreči je treba vozilo oceniti in popraviti.

Nesreča → zavarovalnica → avtovleka → servis → ocena → odobritev → Bartog/deli → popravilo → zgodovina.

**Rezultat:** Škodni primer je zaključen, vozilo popravljeno in poseg vpisan v zgodovino.

**Povezuje:** **voznik ↔ zavarovalnica ↔ avtovleka ↔ servis ↔ Bartog**  
**Tip:** reactive maintenance

---

# H. Zavarovanje in administracija

### WF34 — Insurance Wallet
**Primarni akter:** Voznik
**Sprožilec:** Voznik želi shraniti ali pregledati podatke o zavarovanju vozila.

Voznik → Vintro → zavarovalnica, številka police, dokument, veljavnost, kritja, assistance in kontakt.

**Rezultat:** Zavarovanje je del digitalnega profila avtomobila.  
**Tip:** vehicle management

### WF35 — Zavarovanje se izteka
**Primarni akter:** Vintro/voznik
**Sprožilec:** Vintro zazna bližajoči se datum poteka police.

Expiry → opozorilo → pregled obstoječe police → podaljšanje/menjava → nova polica se shrani.

**Rezultat:** Zavarovanje je pravočasno podaljšano ali zamenjano in nova polica shranjena.

**Tip:** vehicle ownership lifecycle

### WF36 — Tehnični pregled
**Primarni akter:** Voznik/servis
**Sprožilec:** Približuje se rok tehničnega pregleda.

Rok → opozorilo → možnost predhodnega pregleda servisa → odprava težav → tehnični pregled → nov datum.

**Rezultat:** Vozilo opravi tehnični pregled in nov rok je zabeležen.

**Povezuje:** voznik ↔ servis ↔ izvajalec pregleda  
**Tip:** vehicle ownership lifecycle

### WF37 — Registracija, vinjeta in drugi roki
**Primarni akter:** Voznik
**Sprožilec:** Približuje se relevantni administrativni rok.

Relevantni rok → Vintro opozori → uporabnik opravi obveznost → nov datum/status.

**Rezultat:** Administrativna obveznost je opravljena in njen novi status zabeležen.

**Tip:** vehicle ownership lifecycle

### WF38 — Recall / servisna akcija
**Primarni akter:** Proizvajalec/Bartog/servis
**Sprožilec:** Za konkretno vozilo je objavljen recall ali servisna akcija.

Recall za konkretno vozilo → matching → obvestilo → navodila → izvajalec → izvedba → zaprt status.

**Rezultat:** Prizadeto vozilo je identificirano, obravnavano in servisna akcija zaprta.

**Tip:** vehicle ownership lifecycle

---

# I. Booking in priprava servisa

### WF39 — Voznik sam rezervira servis
**Primarni akter:** Voznik
**Sprožilec:** Voznik želi rezervirati servis za konkretno potrebo.

Potreba → servis → storitev → prost termin → booking → potrditev.

**Rezultat:** Ustvarjen je booking z izbranim servisom, storitvijo in terminom.

**Tip:** booking

### WF40 — Servis proaktivno povabi stranko
**Primarni akter:** Servisni svetovalec
**Sprožilec:** Vintro zazna relevantno prihodnjo potrebo pri stranki brez bookinga.

Vintro zazna potrebo → servis vidi relevantno stranko → personalizirano povabilo → booking.

**Rezultat:** Relevantna stranka prejme povabilo in lahko ustvari booking.

**Voznik:** Pravočasna informacija.  
**Servis:** Retention + workload.  
**Bartog:** Več potreb realiziranih znotraj mreže.  
**Tip:** customer relationship

### WF41 — Izbira drugega servisa v mreži
**Primarni akter:** Voznik
**Sprožilec:** Preferirani servis nima primernega termina ali storitve.

Preferiran servis nima termina → alternative znotraj mreže → izbira → prenos konteksta → booking.

**Rezultat:** Voznik rezervira drug servis v mreži brez izgube vehicle contexta.

**Bartog:** Stranka ostane v mreži.  
**Tip:** booking

### WF42 — Predhodna priprava delovnega naloga
**Primarni akter:** Servisni svetovalec
**Sprožilec:** Booking je potrjen in servis začne pripravo obiska.

Booking → zgodovina + razlog + prihodnje potrebe → servis določi scope → work order.

**Rezultat:** Pred obiskom je pripravljen delovni nalog z jasnim obsegom dela.

**Tip:** workshop operations

### WF43 — Prednaročilo potrebnih delov
**Primarni akter:** Servis/Bartog
**Sprožilec:** Potrjen booking in scope nakazujeta potrebo po delih pred obiskom.

Booking → zahtevana dela → parts mapping → zaloga → naročilo → dostava pred obiskom.

**Rezultat:** Potrebni deli so naročeni in dostavljeni pred terminom.

**Povezuje:** servis ↔ Bartog  
**Tip:** parts/logistics

---

# J. Servisni obisk

### WF44 — Digitalni sprejem vozila
**Primarni akter:** Sprejem/servisni svetovalec
**Sprožilec:** Vozilo prispe na potrjen servisni termin.

Prihod → identifikacija → kilometri/stanje → dogovorjena dela → dodatne opombe → work order.

**Rezultat:** Vozilo je digitalno prevzeto in work order lahko preide v izvedbo.

**Tip:** workshop operations

### WF45 — Pregled vozila ob sprejemu
**Primarni akter:** Servisni svetovalec/serviser
**Sprožilec:** Vozilo je prevzeto in treba je potrditi stanje ob sprejemu.

Pregled → meritve/fotografije → dodatne potrebe → dokumentiranje.

**Rezultat:** Začetno stanje vozila in morebitne dodatne potrebe so dokumentirani.

**Tip:** workshop operations

### WF46 — Dodatno delo odkrito med servisom
**Primarni akter:** Serviser/servisni svetovalec
**Sprožilec:** Med pregledom ali izvedbo je odkrito delo, ki ni bilo v prvotnem scopeu.

Serviser odkrije problem → dokumentira → deli + delo + cena → digitalna ponudba → voznik approve/reject → izvedba.

**Rezultat:** Dodatno delo je izvedeno samo po odobritvi voznika in zabeleženo v work orderju.

**Povezuje:** **serviser ↔ servisni svetovalec ↔ voznik ↔ Bartog**  
**Tip:** workshop operations

### WF47 — Preverjanje servisnega načrta proizvajalca
**Primarni akter:** Servisni svetovalec
**Sprožilec:** Za vozilo je treba določiti scope rednega servisa.

Vozilo + kilometrina/starost → maintenance plan → zahtevane operacije → scope → izvedba.

**Rezultat:** Scope servisa temelji na ustreznem načrtu proizvajalca.

**Tip:** workshop operations

### WF48 — Dostop serviserja do tehničnih navodil
**Primarni akter:** Serviser
**Sprožilec:** Serviser pri work orderju potrebuje navodila ali specifikacijo.

Work order → operacija → relevantna navodila/specifikacije → izvedba.

**Rezultat:** Serviser izvede operacijo na podlagi relevantne tehnične informacije.

**Tip:** workshop operations

### WF49 — Izračun dela in časa
**Primarni akter:** Servisni svetovalec
**Sprožilec:** Za potrjeni scope je treba pripraviti oceno dela in trajanja.

Scope → normativi → operacije → labour estimate → ponudba/work order.

**Rezultat:** Work order ali ponudba vsebuje ocenjen čas, delo in strošek.

**Tip:** workshop operations

### WF50 — Status servisa za voznika
**Primarni akter:** Servis
**Sprožilec:** Status booking-a ali work orderja se spremeni.

Sprejeto → v delu → čakanje na dele → zaključeno → pripravljeno za prevzem.

**Rezultat:** Voznik prejme aktualen status in ve, kateri naslednji korak sledi.

**Voznik:** Transparentnost.  
**Servis:** Manj telefonskih klicev.  
**Tip:** customer relationship

---

# K. Rezervni deli in logistika servisa

### WF51 — Identifikacija pravilnega rezervnega dela
**Primarni akter:** Servis/Bartog
**Sprožilec:** Work order zahteva konkretno komponento.

Work order + VIN → zahtevana komponenta → kompatibilni artikli → izbira → naročilo.

**Rezultat:** Izbran je pravilen kompatibilen artikel za konkretno vozilo in delo.

**Servis:** Manj napačnih delov.  
**Bartog:** Višja konverzija in manj vračil.  
**Tip:** parts/logistics

### WF52 — Alternativni deli / cenovni razredi
**Primarni akter:** Servisni svetovalec
**Sprožilec:** Za potreben del obstaja več OE ali equivalent možnosti.

Potreben del → OE/equivalent alternative → izbor → ponudba/naročilo.

**Rezultat:** Stranka ali servis izbere ustrezno alternativo in jo vključi v ponudbo ali naročilo.

**Tip:** parts/logistics

### WF53 — Del ni na zalogi
**Primarni akter:** Servisni svetovalec
**Sprožilec:** Potreben artikel ni takoj na zalogi.

Artikel unavailable → alternative/ETA → servis prilagodi ponudbo ali termin → voznik obveščen.

**Rezultat:** Termin ali ponudba sta prilagojena znani dobavljivosti, voznik pa je obveščen.

**Tip:** parts/logistics

### WF54 — Urgentna dobava med popravilom
**Primarni akter:** Servis/Bartog
**Sprožilec:** Med popravilom se pokaže nujna potreba po dodatnem delu.

Serviser odkrije potrebo → Bartog zaloga → urgent order → dostava → nadaljevanje popravila.

**Rezultat:** Popravilo se nadaljuje z urgentno dobavo brez nepotrebnega čakanja.

**Tip:** parts/logistics

### WF55 — Vračilo napačnega/neuporabljenega dela
**Primarni akter:** Servis/Bartog
**Sprožilec:** Del je napačen, neuporabljen ali ga work order ne potrebuje več.

Neuporabljen del → return → Bartog potrditev → logistika → dobropis/status.

**Rezultat:** Vračilo je potrjeno, zaloga in finančni status pa sta posodobljena.

**Tip:** parts/logistics

### WF56 — Napoved prihodnjega povpraševanja po delih
**Primarni akter:** Bartog
**Sprožilec:** Bartog želi planirati prihodnjo zalogo na podlagi lifecycle podatkov.

Agregirane prihodnje maintenance potrebe → forecast → tipi delov/pnevmatik, lokacije in obdobja → prilagoditev zaloge/logistike.

**Rezultat:** Lifecycle podatki postanejo input za Bartogovo demand planning.  
**Povezuje:** vozila ↔ servisi ↔ Bartog  
**Tip:** parts/logistics

---

# L. Zaključek servisa in servisna zgodovina

### WF57 — Digitalni zaključek servisnega obiska
**Primarni akter:** Servis
**Sprožilec:** Dogovorjena dela so zaključena.

Zaključena dela → uporabljeni deli → potrditev → račun → servisni zapis → preračun prihodnjih intervalov.

**Rezultat:** Servisni obisk je zaključen, vozilo pa dobi preverjen servisni zapis.

**Tip:** vehicle management

### WF58 — Vpis v OEM digitalno servisno knjižico
**Primarni akter:** Servis/OEM sistem
**Sprožilec:** Zaključen servis zahteva vpis v OEM digitalno knjižico.

Zaključen servis → priprava podatkov → OEM zapis → potrditev → referenca v Vintru.

**Rezultat:** Servis je vpisan v OEM sistem in referenciran v Vintru.

**Tip:** data/integration

### WF59 — Digitalni račun in servisna dokumentacija
**Primarni akter:** Servis
**Sprožilec:** Servisni obisk je zaključen in dokumentacija je pripravljena.

Zaključek → račun + posegi + deli + dokumentacija → avtomatsko pripenjanje vozilu.

**Rezultat:** Voznik prejme dokumentiran servisni zapis in račun, pripet na vozilo.

**Tip:** vehicle management

### WF60 — Izračun naslednjih potreb
**Primarni akter:** Vintro
**Sprožilec:** V vozilo je vpisan nov zaključen servisni zapis.

Nov servisni zapis → Vintro razume opravljene posege → reset intervalov → izračun naslednjih potreb.

**Rezultat:** **Vsak zaključen servis postane input za naslednji servis.**  
**Tip:** preventive maintenance

---

# M. Odnos s stranko in retention

### WF61 — Stranka se ne vrača
**Primarni akter:** Servisni svetovalec
**Sprožilec:** Pričakovana potreba obstaja, vendar stranka nima novega bookinga.

Pričakovana potreba obstaja, bookinga ni → servis vidi dormant customer → kontakt → ponudba → booking.

**Rezultat:** Dormant stranka dobi relevanten kontakt in možnost ponovnega bookinga.

**Tip:** retention

### WF62 — Follow-up po servisu
**Primarni akter:** Servis
**Sprožilec:** Servisni obisk je zaključen in nastopi čas za follow-up.

Zaključek → čez X dni check-in → feedback → zadovoljstvo ali problem → po potrebi ponoven servisni primer.

**Rezultat:** Servis potrdi zadovoljstvo ali odpre nov primer za rešitev težave.

**Tip:** customer relationship

### WF63 — Ponudba glede na dejansko potrebo vozila
**Primarni akter:** Servisni svetovalec
**Sprožilec:** Lifecycle podatki pokažejo konkretno potrebo pri skupini vozil.

Vehicle data/lifecycle → konkretna potreba → relevantne stranke → personalizirana ponudba → booking.

**Rezultat:** Relevantne stranke prejmejo ponudbo za dejansko potrebo in lahko rezervirajo termin.

Namesto *“20 % popusta na filtre vsem”* lahko servis komunicira s strankami, katerih vozila filter dejansko potrebujejo.

**Tip:** retention

### WF64 — Sprememba preferiranega servisa
**Primarni akter:** Voznik/servisna mreža
**Sprožilec:** Voznik se preseli, je nezadovoljen ali preferirani servis ni dostopen.

Selitev/nezadovoljstvo/nedostopnost → drug partnerski servis → prenos vehicle contexta → nadaljevanje lifecyclea.

**Rezultat:** Lifecycle vozila se nadaljuje pri drugem servisu znotraj mreže.

**Bartog:** Stranka zapusti posamezen servis, ne pa nujno Bartogove mreže.  
**Tip:** retention

---

# N. Nakup, prodaja in življenjski cikel vozila

### WF65 — Vehicle Health Report pred prodajo
**Primarni akter:** Lastnik vozila
**Sprožilec:** Lastnik pripravlja vozilo na prodajo.

Prodaja → Vintro sestavi servisno zgodovino + stanje vzdrževanja + dokumentacijo → deljiv vehicle report.

**Rezultat:** Dokazljiva zgodovina poveča transparentnost vozila.  
**Tip:** vehicle ownership lifecycle

### WF66 — Prodaja vozila in prenos zgodovine
**Primarni akter:** Trenutni lastnik
**Sprožilec:** Vozilo je prodano in ga bo prevzel nov lastnik.

Prodaja → ločitev osebnih podatkov → servisna zgodovina ostane z vozilom → novi lastnik prevzame profil.

**Rezultat:** **Avto ohrani svojo zgodbo, lastnik pa svoje osebne podatke.**  
**Tip:** vehicle ownership lifecycle

### WF67 — Prevzem kupljenega rabljenega vozila
**Primarni akter:** Novi lastnik
**Sprožilec:** Novi lastnik sprejme prenos profila kupljenega vozila.

Novi lastnik → prevzame vehicle profile → Vintro pokaže zgodovino → identificira prihodnje potrebe → izbira servisa → nadaljevanje lifecyclea.

**Rezultat:** Novi lastnik prevzame digitalni profil in nadaljuje lifecycle vozila.

**Povezuje:** novi lastnik ↔ servis ↔ Bartog  
**Tip:** vehicle ownership lifecycle

---

# O. Podatki, integracije in servisna mreža

Dodajam še tri workflowe, ker je Vintro zamišljen kot povezovalna plast in brez njih manjka pomemben B2B del zgodbe.

### WF68 — Sinhronizacija Vintro ↔ CRM/ERP
**Primarni akter:** Servis/Bartog  
**Sprožilec:** Nastane ali se spremeni podatek o stranki, vozilu, rezervaciji ali servisu.

Sprememba → Vintro identificira relevantne sisteme → podatki se sinhronizirajo → konflikt/dvojnik se razreši → sistemi ostanejo usklajeni.

**Rezultat:** Vintro ne zahteva dvojnega vnosa podatkov.  
**Servis:** Manj administracije.  
**Bartog:** Obstoječi sistemi ostanejo uporabni.  
**Tip:** data/integration

### WF69 — Enoten pogled na stranko in vozilo
**Primarni akter:** Servisni svetovalec
**Sprožilec:** Stranka kontaktira servis in svetovalec potrebuje celoten kontekst.

Stranka kontaktira servis → identifikacija → Vintro združi CRM + vehicle data + servisno zgodovino + booking + prihodnje potrebe → servisni svetovalec dobi enoten kontekst.

**Rezultat:** Namesto petih sistemov obstaja **en kontekst za odločanje**.  
**Tip:** data/integration

### WF70 — Mrežni vpogled za Bartog
**Primarni akter:** Bartog
**Sprožilec:** Bartog želi razumeti stanje in prihodnje potrebe partnerske mreže.

Podatki partnerske mreže → agregacija → prihajajoče servisne potrebe, booking demand, pnevmatike, deli, retention itd. → Bartog prepozna potrebe/trende → podpora servisom.

**Rezultat:** Bartog ne vidi samo, **kaj so servisi naročili včeraj**, ampak potencialno tudi **kaj bodo vozila v mreži potrebovala jutri**.  
**Tip:** data/integration

---

# P. Dopolnilni workflowi za popolno sliko

Naslednji workflowi dopolnjujejo WF01–WF70 na mestih, kjer so v feature definicijah ali prototipu že prisotni pomembni procesi, vendar še nimajo dovolj jasnega end-to-end scenarija. Ne predstavljajo nove feature liste; vsak ima svoj trigger, proces in poslovni rezultat.

Nekateri so namerno **operativne poglobitve** obstoječih workflowov, ne popolnoma neodvisni procesi. To je označeno spodaj, da jih stakeholderji pri MoSCoW ne bodo pomotoma razumeli kot podvojene produktne cilje:

- WF74 poglobi WF39 in WF50 v celoten booking lifecycle.
- WF75 poglobi WF44 z digitalno pripravo in check-inom pred delovnim nalogom.
- WF76 poveže WF45 in WF46 v technician-to-approval handoff.
- WF79 je operativna razširitev WF17 za tyre hotel.
- WF80 poglobi WF61 in WF63 v merljivo kampanjo.
- WF82 poveže WF43 in WF51–WF55 v parts procurement lifecycle.
- WF84 poglobi WF70 v governance in standardizacijo mreže.
- WF85 je integracijska izvedba WF57, WF59 in WF68.
- WF86 je mrežna izvedba WF38.

### WF71 — Registracija uporabnika, profil in soglasja
**Primarni akter:** Voznik
**Sprožilec:** Uporabnik želi ustvariti ali aktivirati Vintro račun.

Registracija → potrditev identitete → osnovni profil in kontaktni podatki → komunikacijski kanali → marketing in data-sharing soglasja → pripravljen Garage.

**Rezultat:** Uporabnik ima aktiven račun z jasnim nadzorom nad podatki in komunikacijo.
**Voznik:** Enostaven vstop in nadzor nad zasebnostjo.
**Servis:** Zanesljiv kontakt in veljavna soglasja.
**Bartog:** Aktiviran uporabnik in dovoljena komunikacija v mreži.
**Povezuje:** voznik ↔ Vintro ↔ servis
**Tip:** acquisition/onboarding

### WF72 — Onboarding partnerskega servisa
**Primarni akter:** Servis/Bartog
**Sprožilec:** Nov servis se želi vključiti v Vintro mrežo.

Registracija podjetja → VAT in poslovni podatki → lokacije, odpiralni čas, storitve in znamke → cenik → kontaktna oseba → preverjanje partnerja → aktivacija profila.

**Rezultat:** Servis je pripravljen za sprejem strank, bookingov in vehicle contexta.
**Servis:** Standardiziran in hitrejši začetek uporabe.
**Bartog:** Razširljiva in kakovostno opisana partnerska mreža.
**Povezuje:** servis ↔ Bartog ↔ Vintro
**Tip:** acquisition/onboarding

### WF73 — Nastavitev zaposlenih, vlog in lokacij
**Primarni akter:** Vodja servisa
**Sprožilec:** Servis začne uporabljati Vintro ali spremeni organizacijo.

Povabilo zaposlenega → dodelitev vloge → dovoljenja → lokacija → aktivacija uporabnika → po potrebi deaktivacija ali sprememba vloge.

**Rezultat:** Vsak uporabnik vidi in spreminja samo podatke, ki jih potrebuje za svoje delo.
**Servis:** Jasna odgovornost med vodjo, svetovalcem, sprejemom in serviserjem.
**Bartog:** Skalabilno upravljanje mreže in manjša podatkovna izpostavljenost.
**Povezuje:** servis ↔ zaposleni ↔ Vintro
**Tip:** workshop operations

### WF74 — Celoten lifecycle rezervacije
**Primarni akter:** Servisni svetovalec
**Sprožilec:** Voznik pošlje booking request ali servis ustvari termin ročno.

Zahteva → preverjanje kapacitete → potrditev, zavrnitev ali predlog drugega termina → sprememba ali preklic → prihod oziroma no-show → zaključek rezervacije.

**Rezultat:** Booking ima jasen status od zahteve do zaključka in je usklajen med Garage in Workshop.
**Voznik:** Ve, ali je termin potrjen, spremenjen ali preklican.
**Servis:** Manj praznih terminov in administracije.
**Bartog:** Več realiziranega povpraševanja v mreži.
**Povezuje:** voznik ↔ servis ↔ koledar
**Tip:** booking

### WF75 — Predhodna potrditev in digitalni sprejem vozila
**Primarni akter:** Voznik/servisni svetovalec
**Sprožilec:** Približuje se potrjen termin.

Opomnik → potrditev prihoda → potrditev razloga obiska, kilometrov, opomb in kontaktnih podatkov → prihod → pregled stanja → digitalni check-in → odprtje delovnega naloga.

**Rezultat:** Delovni nalog je pripravljen, ko vozilo prispe v servis.
**Voznik:** Krajši in bolj pregleden sprejem.
**Servis:** Manj ročnega vnosa in manj napačno razumljenih zahtev.
**Bartog:** Kakovostnejši vehicle context za nadaljnje delo.
**Povezuje:** voznik ↔ sprejem ↔ work order
**Tip:** workshop operations

### WF76 — Tehnična izvedba pregleda in predaja priporočila
**Primarni akter:** Serviser
**Sprožilec:** Vozilo je prevzeto in delovni nalog je odprt.

Serviser odpre današnje delo → pregleda vehicle context in relevantno zgodovino → izvede digitalni pregled → vnese meritve, fotografije in stanje → doda priporočilo → servisni svetovalec pregleda ugotovitve → stranka prejme ponudbo.

**Rezultat:** Ugotovitev serviserja postane sledljiv in odobritvi pripravljen customer case.
**Voznik:** Razume problem na podlagi meritev in fotografij.
**Servis:** Standardiziran pregled in hitrejša predaja svetovalcu.
**Bartog:** Več relevantnih delov in manj spregledanih potreb.
**Povezuje:** serviser ↔ servisni svetovalec ↔ voznik ↔ Bartog
**Tip:** workshop operations

### WF77 — Plačilo, račun in prevzem vozila
**Primarni akter:** Servis
**Sprožilec:** Dogovorjena dela so zaključena.

Zaključek del → preverjanje opravljenih operacij in delov → obračun dela, delov, popustov in davkov → račun/plačilo → obvestilo o pripravljenem vozilu → prevzem → zaključek obiska in dokumentacija.

**Rezultat:** Servisni obisk se zaključi finančno, operativno in podatkovno.
**Voznik:** Jasna cena, dokumenti in informacija o prevzemu.
**Servis:** Zaključen work order in plačan obisk.
**Bartog:** Popolnejši transakcijski in parts podatki.
**Povezuje:** servis ↔ voznik ↔ računovodstvo/plačila
**Tip:** workshop operations

### WF78 — Garancija, reklamacija in ponovljena okvara
**Primarni akter:** Voznik/servis
**Sprožilec:** Po servisu se pojavi ista ali povezana težava.

Nova prijava → povezava s prejšnjim work orderjem, deli in meritvami → preverjanje garancije ali reklamacije → diagnostika → odločitev o odgovornosti → popravek, dobropis ali zavrnitev → posodobitev zgodovine.

**Rezultat:** Ponovljena okvara je obravnavana kot povezan primer, ne kot nov nepovezan obisk.
**Voznik:** Hitrejša rešitev in bolj transparentna reklamacija.
**Servis:** Manj ročnega iskanja in boljši nadzor kakovosti.
**Bartog:** Traceability delov, reklamacij in kakovosti dobave.
**Povezuje:** voznik ↔ servis ↔ Bartog/dobavitelj
**Tip:** reactive maintenance

### WF79 — Tyre hotel in sezonska reaktivacija kompleta
**Primarni akter:** Servis
**Sprožilec:** Komplet pnevmatik je shranjen ali se približuje nova sezona.

Prevzem kompleta → identifikacija vozila in stranke → zapis dimenzij, DOT, profila, stanja in lokacije rack/bin → hramba → sezonski opomnik → ponudba termina → priprava kompleta → montaža in posodobitev evidence.

**Rezultat:** Komplet je sledljiv od skladiščenja do naslednje montaže.
**Voznik:** Ne išče pnevmatik in pravočasno dobi termin.
**Servis:** Boljša zasedenost tyre hotela in sezonsko planiranje.
**Bartog:** Več ponovnih obiskov, pnevmatik in povezanih storitev.
**Povezuje:** voznik ↔ servis ↔ tyre hotel
**Tip:** retention

### WF80 — Retention kampanja od segmenta do realiziranega obiska
**Primarni akter:** Servisni svetovalec/CRM
**Sprožilec:** Vintro zazna segment strank z isto konkretno potrebo.

Segmentacija → izbor razloga in ponudbe → izbira kanala → priprava kampanje → pošiljanje → odprtje/klik → booking → izvedba → pripis prihodka in konverzije.

**Rezultat:** Kampanja je povezana z dejanskim servisnim obiskom in ne samo s številom poslanih sporočil.
**Voznik:** Relevantno povabilo namesto splošnega oglaševanja.
**Servis:** Merljiva reaktivacija in cross-sell.
**Bartog:** Boljši network demand in dokazljiva vrednost partnerstva.
**Povezuje:** servis ↔ voznik ↔ CRM ↔ Bartog
**Tip:** retention

### WF81 — Upravljanje kapacitete servisa
**Primarni akter:** Vodja servisa
**Sprožilec:** Nastane booking demand ali se spremeni razpoložljivost.

Prihodnje potrebe → razpoložljivi serviserji, bay/lift in trajanje → razporeditev dela → zaznava preobremenitve ali praznega termina → prerazporeditev, ponudba drugega termina ali druge lokacije → spremljanje utilizationa.

**Rezultat:** Povpraševanje je usklajeno z realno kapaciteto servisa.
**Voznik:** Več realno razpoložljivih terminov.
**Servis:** Višja izkoriščenost zaposlenih in delovnih mest.
**Bartog:** Več izvedenega dela znotraj mreže.
**Povezuje:** servis ↔ koledar ↔ serviserji ↔ mreža
**Tip:** workshop operations

### WF82 — Identifikacija, naročilo in dopolnitev zaloge delov
**Primarni akter:** Servis/Bartog parts operations
**Sprožilec:** Work order zahteva del, ki ni na zalogi ali pade pod minimalno zalogo.

Work order/VIN → identifikacija OE ali ekvivalentnega dela → preverjanje zaloge in cene → rezervacija → dobavitelj/Bartog naročilo → ETA → prejem → povezava z work orderjem → posodobitev zaloge.

**Rezultat:** Pravi del je naročen, sledljiv in na voljo pred izvedbo dela.
**Voznik:** Manj prestavljenih terminov.
**Servis:** Manj napačnih naročil in boljša razpoložljivost.
**Bartog:** Več naročil, boljši forecast in manj vračil.
**Povezuje:** servis ↔ Bartog ↔ dobavitelj ↔ work order
**Tip:** parts/logistics

### WF83 — Premik zaloge med lokacijami
**Primarni akter:** Vodja mreže/servisa
**Sprožilec:** Ena lokacija ima potreben del, druga pa ga nima.

Zaznana potreba → preverjanje zaloge po lokacijah → rezervacija → inter-branch transfer → odprema → prejem in potrditev → dodelitev work orderju.

**Rezultat:** Mreža uporabi obstoječo zalogo, preden izvede nov urgentni nakup.
**Voznik:** Hitrejše popravilo.
**Servis:** Manj mrtve zaloge in urgentnih dobav.
**Bartog:** Centralno upravljanje zaloge in večja učinkovitost mreže.
**Povezuje:** lokacije ↔ Bartog ↔ parts/logistics
**Tip:** parts/logistics

### WF84 — Standardizacija in upravljanje servisne mreže
**Primarni akter:** Bartog
**Sprožilec:** Bartog želi vključiti, primerjati ali izboljšati partnerske lokacije.

Profil in KPI lokacij → primerjava storitev, cen, kapacitete, kakovosti in utilizationa → določitev standardov → podpora ali korektivni ukrepi → spremljanje napredka po lokacijah.

**Rezultat:** Mreža deluje po primerljivih standardih, brez izgube lokalne operativne avtonomije.
**Servis:** Jasna pričakovanja in podpora pri izboljšavah.
**Bartog:** Bolj konsistentna partnerska mreža in boljša izkušnja strank.
**Povezuje:** Bartog ↔ servisi ↔ network analytics
**Tip:** data/integration

### WF85 — Plačila, računi in ERP/inventory integracija
**Primarni akter:** Servis/Bartog
**Sprožilec:** Zaključen booking, work order, račun ali premik zaloge.

Dogodek v Vintru → validacija podatkov → prenos v računovodski, plačilni, CRM, ERP ali inventory sistem → potrditev → napaka ali konflikt → retry/razrešitev → status nazaj v Vintro.

**Rezultat:** Vintro povezuje obstoječe sisteme brez dvojnega vnosa in izgube statusa.
**Servis:** Manj administracije in bolj usklajeni računi/zaloga.
**Bartog:** Centralen vpogled v transakcije, dele in mrežo.
**Povezuje:** Vintro ↔ CRM ↔ ERP ↔ računovodstvo ↔ Bartog
**Tip:** data/integration

### WF86 — Mrežna recall in servisna akcija
**Primarni akter:** Bartog/servisna mreža
**Sprožilec:** Za konkretno vozilo ali serijo vozil je objavljen recall oziroma servisna akcija.

Recall source → matching po VIN/modelu/letniku → izbor prizadetih vozil in lokacij → obvestilo lastnikom → booking → priprava delov → izvedba → dokazilo → zaprtje statusa in poročilo mreži.

**Rezultat:** Servisna akcija je obvladovana od identifikacije do potrjenega zaključka.
**Voznik:** Pravočasno obvestilo in jasen naslednji korak.
**Servis:** Organizirano delo in pripravljeni deli.
**Bartog:** Mrežni nadzor, parts planning in dokazljiva izvedba.
**Povezuje:** Bartog ↔ voznik ↔ servis ↔ dobavitelji/OEM
**Tip:** vehicle ownership lifecycle

---

# Q. Klasifikacija workflowov in capabilities

Da katalog ostane uporaben za discovery in MoSCoW, je treba ločiti tri nivoje:

**Samostojen E2E workflow** ima svoj poslovni trigger, več korakov in preverljiv outcome. Stakeholder ga lahko smiselno oceni kot celoto.

**Podworkflow** je pomemben del večjega workflowa, vendar nima nujno samostojnega poslovnega cilja. Prioritizira se skupaj s parent workflowom ali samo, če zahteva ločeno odločitev, integracijo ali ownership.

**Capability** je sposobnost sistema, ki podpira več workflowov. Primeri so vehicle matching, izračun časa dela, permission management ali notification channel. Capability sama po sebi ni uporabniški oziroma poslovni outcome.

## Samostojni workflowi in parent workflowi

Spodaj so vsi zapisi, ki jih lahko stakeholder oceni kot samostojen poslovni cilj. Seznam je neprekrivajoč; vsak WF-ID se v tem registru pojavi samo enkrat.

| Workflowi | Vloga |
|---|---|
| WF01–WF05 | Osnovni onboarding in vehicle information parent workflowi |
| WF09, WF12–WF14, WF16–WF17 | Preventiva, sezona in parts/retention parent workflowi |
| WF19, WF21–WF23, WF25, WF29, WF33–WF34, WF36–WF37 | Samostojni uporabniški oziroma incidentni workflowi |
| WF39–WF40, WF46, WF56–WF57, WF61, WF63–WF70 | Booking, servis, parts, retention, ownership in data parent workflowi |
| WF71–WF72, WF74, WF77–WF78, WF80–WF82, WF84–WF86 | Dopolnilni samostojni oziroma parent workflowi |

## Podworkflowi

| Podworkflow | Parent workflow |
|---|---|
| WF06–WF08 | WF05 — Vehicle Information Hub |
| WF10–WF11 | WF09 — Prihajajoči redni servis |
| WF15 | WF14 + WF09 — združevanje pnevmatik in servisa |
| WF18 | WF16 — Nakup novih pnevmatik |
| WF20 | WF19 — Identifikacija rezervnega dela za DIY |
| WF24, WF27–WF28 | WF23 — Voznik zazna težavo |
| WF26 | WF25 — Pomoč na cesti |
| WF30–WF32 | WF29 — Accident Mode |
| WF35 | WF34 — Insurance Wallet |
| WF38 | WF36–WF37 — administrativni/servisni rok; izvedba mrežne akcije je WF86 |
| WF41, WF42–WF45 | WF39 — booking in priprava/sprejem servisa |
| WF47 | WF09 + WF42 — servisni načrt v pripravi work orderja |
| WF50 | WF74 — booking/service status communication |
| WF51–WF55 | WF82 — parts sourcing and fulfilment |
| WF58–WF60 | WF57 — digitalni zaključek servisa |
| WF62 | WF61 oziroma WF63 — retention/follow-up |
| WF73 | WF72 — workshop onboarding |
| WF75–WF76 | WF39/WF44/WF45/WF46 — servisni obisk in odobritev |
| WF79 | WF17 — tyre hotel |
| WF83 | WF82 — network stock fulfilment |

## Capabilities, ki niso samostojni workflowi

Naslednje zapise je treba pri razbijanju v feature scope obravnavati kot capabilities, ne kot neodvisne MoSCoW cilje:

| Capability | Trenutni zapis |
|---|---|
| Vehicle matching, technical data in compatibility | WF01, WF05–WF08, WF19, WF51–WF52 |
| Maintenance rules, interval calculation in next-needs engine | WF09–WF11, WF47, WF60 |
| Notification, reminder in communication channels | WF04, WF09, WF35–WF37, WF40, WF50, WF62, WF80 |
| Accident documentation and evidence capture | WF30–WF32 |
| Technical instruction access | WF48 |
| Labour/time calculation and pricing logic | WF49, WF77 |
| Quote status and approval state machine | WF46, WF77 |
| Parts catalogue, inventory, ETA and return handling | WF43, WF51–WF55, WF82–WF83 |
| Customer segmentation and campaign attribution | WF61, WF63, WF80 |
| CRM/ERP synchronisation and conflict resolution | WF68, WF85 |
| Network analytics, standards and KPI calculation | WF70, WF81, WF84 |
| Identity, account, roles, permissions and consent | WF03, WF71–WF73 |

## Pravilo za nadaljnje urejanje

Vsak zapis naj pri naslednji redakciji dobi eno od oznak:

`[E2E]` samostojen workflow oziroma parent, ` [SUB]` podworkflow ali ` [CAP]` capability.

Pri MoSCoW se primarno ocenjujejo zapisi `[E2E]`. Zapisi `[SUB]` se ocenijo samo, če imajo ločenega ownerja, integracijo, poslovno odločitev ali pomembno tveganje. Zapisi `[CAP]` se izločijo iz stakeholder prioritizacije in se kasneje izpeljejo iz izbranih workflowov.

---

# Celotna slika

S tem imamo **86 potencialnih workflow zapisov**, od katerih je del samostojnih end-to-end workflowov, del pa operativnih poglobitev večjih workflowov, v 16 smiselnih bundlih:

**Onboarding → Moj avto → Preventiva → Pnevmatike → DIY → Okvara → Nesreča → Zavarovanje/administracija → Booking → Servisni obisk → Deli/logistika → Zaključek servisa → Retention → Ownership lifecycle → Data/integracije → Workshop foundation in network operations**

Ključna produktna logika je:

> **Vintro želi postati centralno digitalno stičišče avtomobila skozi celoten lifecycle — ne samo takrat, ko je avtomobil na servisu.**

To je pomembno, ker workflowi, kot so **zavarovanje, dokumenti, DIY, olje, pnevmatike, nesreča, avtovleka in administrativni roki**, povečujejo pogostost in razlog za uporabo Vintra.

Poslovni flywheel je potem:

**več uporabnosti za voznika → več aktivnih uporabnikov → več vozil in lifecycle podatkov → bolj pravočasno prepoznavanje potreb → več relevantnih interakcij s servisom → več dela ostane v partnerski mreži → več povpraševanja po Bartogovih delih/pnevmatikah → močnejša Bartogova servisna mreža.**

Za naslednji korak bi teh 86 workflowov **še vedno pustil ločene od feature liste**. Alešu bi dal tabelo z `Workflow | Kratek scenarij | Vrednost za voznika | Vrednost za servis | Vrednost za Bartog | Prototype coverage | MoSCoW | Komentar`. Ko dobiva prioritete, lahko vsak **Must/Should workflow razbijeva na konkretne funkcionalnosti, podatke, integracije in development scope**. To bo potem prava osnova za ponudbo.