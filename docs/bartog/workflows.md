# Vintro — Katalog celovitih delovnih tokov

---

## Uvod in pregled dokumenta

### Kaj je ta dokument?

Ta dokument predstavlja **katalog delovnih tokov (end-to-end workflows)** platforme **Vintro**. Popisuje predvidene ključne situacije, scenarije in procese, ki povezujejo tri glavne deležnike:
1. **Voznika** (lastnika ali uporabnika vozila),
2. **Servisni center / serviser** (partnerske delavnice v mreži),
3. **Bartog** (ponudnika delov, logistično hrbtenico, kataloge in upravljavca mreže).

### Ključna vizija platforme Vintro

Vintro ni zgolj spletna aplikacija za opomnike o servisih, temveč **osrednje digitalno stičišče vozila skozi celoten življenjski cikel**.
Glavni cilj je ustvariti vrednost tudi v času, ko vozilo ni na servisu (spremljanje tekočin, pnevmatik, dokumentacije, zavarovanj, reševanje nesreč in okvar ter samostojni nakupi), ob servisnih dogodkih pa zagotoviti brezhibno digitalno izkušnjo od rezervacije do naročila delov in vpisa v servisno knjižico.

**Osnova je spletna aplikacija:** Voznik, servis in Bartog jo uporabljajo v spletnem brskalniku na telefonu ali računalniku, brez nameščanja aplikacije. Dostopna je prek spleta ne glede na lokacijo, ob prijavi, ustreznih dovoljenjih in zaščiti osebnih ter poslovnih podatkov. Ta način dostopa velja za vse spodaj opisane tokove; namenska mobilna aplikacija lahko sledi pozneje, vendar ni pogoj za njihovo uporabo.

### Trikotnik deležnikov in ustvarjena vrednost

- **Za voznika:** Vse informacije o avtu na enem mestu, transparentno vzdrževanje, brez ugibanja o pravilnih delih/olju, hitra pomoč ob okvari/nesreči, ohranjanje vrednosti vozila prek preverljive digitalne zgodovine.  
- **Za servis:** Vnaprej znan kontekst vozila in zgodovina, hitrejši sprejem, preprosta digitalna odobritev dodatnih del s strani stranke, manj napak pri naročanju delov, avtomatizirano ohranjanje strank (retention) in pa na splošno boljši in bolj transparenten odnos s stranko.  
- **Za Bartog:** Digitalizacija in krepitev partnerske servisne mreže ter večja prodaja originalnih in nadomestnih delov, povezava lastnega kataloga neposredno v točke odločanja (tako pri vozniku kot mehaniku) in v neki točki napovedovanje povpraševanja po delih in pnevmatikah.  

---

## Navodila za pregled in uporabo kataloga

Namen tega pregleda je **validacija procesov, uskladitev z realnim poslovanjem Bartoga ter priprava prioritet za razvoj (MVP in nadaljnje faze)**.

### Kaj potrebujem od vas?

Pri vsakem delovnem toku v razdelku [Pregled in prioritizacija delovnih tokov](#q-pregled-in-prioritizacija-delovnih-tokov) označite prioriteto: **N** – nujno, **P** – pomembno, **K** – koristno za pozneje, **Z** – za zdaj ne potrebujemo ali **?** – to naj oceni servis, uporabnik oziroma drug deležnik. Če proces v praksi poteka drugače ali kaj manjka, dopišite kratek komentar.

**Za prvi pregled ni treba prebrati celotnega dokumenta.** Začnite s tabelo v razdelku [Pregled in prioritizacija delovnih tokov](#q-pregled-in-prioritizacija-delovnih-tokov) in podroben opis posameznega toka odprite le, kadar potrebujete več konteksta. Ocenjujte predvsem, ali je poslovni scenarij potreben in kakšen rezultat mora omogočiti; ni treba presojati tehnične izvedbe ali integracij.

Opisi potekov so ponazoritev možnega procesa, ne predlog končne izvedbe. Posamezne korake lahko spremenimo; pomembno je, ali je potreba resnična in ali je predlagani rezultat pravi.

### Pomen kratic in izrazov
- **MVP (Minimum Viable Product; najmanjša uporabna različica):** Prva različica spletne aplikacije Vintro, s katero lahko voznik in servis opravita osnovne naloge od profila vozila do rezervacije in servisnega zapisa. Ne pomeni, da so v njej že vsi spodaj opisani tokovi; obseg se določi s prioritizacijo.  
- **WF (workflow; delovni tok):** Oštevilčen opis poslovnega scenarija, na primer WF-A-01; ni isto kot posamezna funkcija aplikacije.  
- **N / P / K / Z / ?:** Ocena prioritete delovnega toka: **N** – nujno za prvo uporabno različico, **P** – pomembno kmalu po začetku, **K** – koristno, a lahko počaka, **Z** – za zdaj ni potrebno, **?** – oceniti mora drug deležnik. Oznaka ne pomeni zaveze glede datuma izvedbe.
- **DIY (Do It Yourself):** Vzdrževanje ali popravilo, ki ga voznik opravi sam.  
- **GDPR (General Data Protection Regulation):** Splošna uredba EU o varstvu osebnih podatkov.  

### 1. Struktura posameznega delovnega toka (WF)
Vsak delovni tok v dokumentu ima standardizirano strukturo:
- **Oznaka in naziv (npr. WF-C-01):** Enolična koda sklopa in zaporedna številka.  
- **Kdo sodeluje:** Vpletene vloge (Voznik, Servis, Bartog, zunanji sistemi).  
- **Povod:** Dogodek ali stanje, ki sproži tok (npr. pretečen čas, prag kilometrov, okvara, želja po nakupu).  
- **Potek:** Zaporedje korakov od začetka do zaključka.  
- **Rezultat:** Kaj je končni izid in kakšno korist prinaša vsakemu deležniku.  
- *(Opcijsko)* **Alternativni poteki / posebnosti:** Robni primeri (npr. stranka brez računa, stranka ne sprejme ponudbe itd.).  

### 2. Vsebinski sklopi v dokumentu (Kazalo)

Katalog je razdeljen na 16 logičnih sklopov:
  
- **A. Začetek in digitalni profil vozila:** Uvajanje, identifikacija preko VIN/registracije, uvoz zgodovine in dokumentov.  
- **B. Moj avto — osrednje mesto za informacije:** Hitri odgovori o tekočinah, dimenzijah pnevmatik in potrošnem materialu.  
- **C. Preventivno vzdrževanje:** Intervalni servisi (čas/kilometri), prediktivni opomniki in združevanje servisnih potreb.  
- **D. Pnevmatike in sezonske potrebe:** Menjava, hramba (hotel pnevmatik), zaznava iztrošenosti in nakup novih pnevmatik.  
- **E. DIY – Domači mojstri:** Samostojno vzdrževanje in nakup ustreznih delov za domača popravila.  
- **F. Okvara in pomoč na cesti:** Zaznava napak, asistenčne storitve, avtovleka in obravnava ponovljenih okvar.  
- **G. Nesreča in škodni primer:** Vodenje skozi nesrečo, evropsko poročilo, foto-dokumentiranje škode in popravilo.  
- **H. Zavarovanje in administracija:** Opomniki za tehnični pregled, podaljšanje registracije, vinjeto, zavarovanja in vpoklice.  
- **I. Rezervacija in priprava servisa:** Proaktivna vabila, samostojne rezervacije, predpriprava delovnih nalogov in prednaročilo delov.  
- **J. Servisni obisk:** Digitalni sprejem, pregled vozila, potrjevanje dodatnih del, vpogled v tehnična navodila in normativi.  
- **K. Rezervni deli in logistika servisa:** Identifikacija v katalogu, alternativni cenovni razredi, urgentna dostava in vračila.  
- **L. Zaključek servisa in servisna zgodovina:** Digitalni zaključek, račun, vpis v servisno knjižico in izračun prihodnjih servisov.  
- **M. Odnos s stranko in ohranjanje strank:** Reaktivacija neaktivnih strank, poprodajni stiki in ciljane ponudbe.  
- **N. Nakup, prodaja in življenjski cikel vozila:** Poročilo o stanju, varen prenos digitalne zgodovine na novega lastnika.  
- **O. Podatki, integracije in servisna mreža:** Povezave z Bartog ERP/B2B sistemi, CRM, analitika mreže in uvajanje servisov.  

### 3. Vprašanja za pregledovalca

Pri ocenjevanju se osredotočite na tri stvari:
1. Ali je ta poslovni scenarij potreben in kako pomemben je v primerjavi z drugimi?
2. Ali se potreba ali pričakovani rezultat v praksi razlikujeta od opisa?
3. Ali manjka pomemben scenarij ali mora oceno podati drug deležnik?

Pri tokovih za servis in Bartog lahko po potrebi dodate tudi opombo o skladnosti z načinom dela, logistiko ali zmožnostmi mreže. Podrobnosti tehnične izvedbe so zunaj obsega tega pregleda.


### Integracija CRM in ERP sistema
Tokovi v sklopih A–O opisujejo ciljno izkušnjo, ne obveznih integracij prve različice. Za osnovno delovanje Vintro vodi profile, kontakte in soglasja, rezervacije, servisne zapise, statuse ter podatke o partnerjih samostojno. Kjer tok omenja zalogo, naročilo, račun ali podatke o stranki iz drugih sistemov, je v prvi fazi mogoč vnos oziroma potrditev podatkov v Vintru; CRM in ERP nista pogoj za izvedbo toka. Integracija z obstoječim CRM in ERP podjetja Bartog sta lahko vključena v kasnejši fazi, ko osnovni tokovi delujejo in so znani sistemi partnerjev, lastništvo podatkov ter smiselnost povezovanja.

---

# Q. Pregled in prioritizacija delovnih tokov

Spodnja tabela je namenjena prvemu, hitremu pregledu. V stolpec **Ocena** vpišite **N**, **P**, **K**, **Z** ali **?**. Kratek opis pove, kaj naj bi posamezen tok omogočil; ne določa končne izvedbe. Podrobnosti so v razdelkih A–O.

| Oznaka | Delovni tok | Poslovna potreba / pričakovani rezultat | Ocena |
| --- | --- | --- | --- |
| WF-A-01 | Registracija in dodajanje vozila | Uporabnik ali servis vzpostavi potrjen profil vozila z ustreznimi podatki in dovoljenji. |  |
| WF-A-02 | Uvoz obstoječe servisne zgodovine | Pretekli posegi se zberejo v digitalni časovnici vozila. |  |
| WF-A-03 | Povezava vozila z obstoječim servisom | Vozilo in stranka se povežeta z izbranim servisom, ki dobi dovoljen kontekst. |  |
| WF-A-04 | Dodajanje dokumentacije vozila | Dokumenti in pomembni roki so shranjeni ob profilu vozila. |  |
| WF-B-01 | Osrednje mesto za informacije o vozilu | Voznik na enem mestu najde ključne podatke, zgodovino in prihodnje potrebe vozila. |  |
| WF-B-02 | Olje in tekočine za vozilo | Voznik dobi ustrezno specifikacijo in količino tekočin. |  |
| WF-B-03 | Ustrezne pnevmatike in platišča | Voznik prepozna združljive, homologirane dimenzije za nakup ali servis. |  |
| WF-B-04 | Ustrezen potrošni material | Voznik najde združljive brisalce, žarnice, filtre, akumulator in podobno. |  |
| WF-C-01 | Prihajajoči redni servis | Voznik je pravočasno opozorjen in lahko načrtuje servis. |  |
| WF-C-02 | Servis glede na časovni interval | Časovno zapadlo vzdrževanje je opravljeno in naslednji interval zabeležen. |  |
| WF-C-03 | Servis glede na kilometrino | Dosežena kilometrina sproži ustrezno servisno priporočilo. |  |
| WF-C-04 | Združevanje prihodnjih servisnih potreb | Več bližnjih potreb se združi v en potrjen obisk. |  |
| WF-C-05 | Preventivni pregled pred potovanjem | Težave se odkrijejo in po potrebi odpravijo pred daljšo potjo. |  |
| WF-D-01 | Sezonska menjava pnevmatik | Voznik pravočasno rezervira menjavo, pnevmatike pa so pripravljene in evidentirane. |  |
| WF-D-02 | Pnevmatike in prihajajoči servis | Menjava pnevmatik in bližnji servis se po dogovoru združita ali uskladita. |  |
| WF-D-03 | Nakup novih pnevmatik | Ustrezen komplet pnevmatik je izbran, dobavljen in po potrebi nameščen. |  |
| WF-D-04 | Hramba pnevmatik in stanje kompleta | Shranjeni komplet je sledljiv in pripravljen za naslednjo sezono. |  |
| WF-D-05 | Zaznana iztrošenost pnevmatik | Obrabljene pnevmatike se pravočasno zamenjajo z ustreznim kompletom. |  |
| WF-E-01 | Identifikacija dela za samostojno popravilo | Voznik najde združljiv rezervni del za izbrano popravilo. |  |
| WF-E-02 | Nakup rezervnih delov | Voznik naroči ustrezen del in izbere prevzem ali dostavo. |  |
| WF-E-03 | Vzdrževanje za domače mojstre | Samostojno izveden poseg in kilometrina se zabeležita v zgodovino vozila. |  |
| WF-F-01 | Voznik zazna težavo | Opisana težava se usmeri v ustrezen diagnostični ali servisni postopek. |  |
| WF-F-02 | Pomoč na cesti | Voznik hitro najde pravi kontakt glede na svoje kritje in polico. |  |
| WF-F-03 | Avtovleka | Nevozno vozilo se prepelje v primeren servis s potrebnim kontekstom. |  |
| WF-F-04 | Ponovljena okvara | Ponavljajoča se težava se poveže s prejšnjim posegom in obravnava sledljivo. |  |
| WF-G-01 | Prometna nesreča: kaj zdaj? | Voznik dobi jasne naslednje korake za varnost, dokumentiranje in pomoč. |  |
| WF-G-02 | Poročilo o prometni nesreči | Podatki za zapisnik se zberejo in pripravijo za predajo pristojnim. |  |
| WF-G-03 | Dokumentiranje škode | Dokazi in okoliščine škodnega primera se zberejo na enem mestu. |  |
| WF-G-04 | Popravilo po nesreči | Popravilo in zavarovalniški primer se uskladita ter zabeležita v zgodovino. |  |
| WF-H-01 | Zbirka zavarovalnih podatkov | Podatki o polici, kritju in kontaktih so dostopni ob vozilu. |  |
| WF-H-02 | Iztek zavarovanja | Voznik je pravočasno opozorjen, nova oziroma podaljšana polica pa shranjena. |  |
| WF-H-03 | Tehnični pregled | Voznik spremlja rok in lahko pred pregledom odpravi ugotovljene težave. |  |
| WF-H-04 | Registracija, vinjeta in drugi roki | Administrativni roki so zabeleženi, obveznosti pa pravočasno urejene. |  |
| WF-H-05 | Vpoklic ali servisna akcija | Prizadeta vozila in izvedeni popravki so prepoznani ter sledljivo obravnavani. |  |
| WF-I-01 | Samostojna rezervacija servisa | Voznik zahteva, potrdi ali spremeni termin z upoštevanjem kapacitete servisa. |  |
| WF-I-02 | Proaktivno povabilo servisa | Stranka prejme relevantno povabilo za zaznano potrebo in se lahko naroči. |  |
| WF-I-03 | Izbira drugega servisa v mreži | Voznik najde alternativo in nadaljuje z rezervacijo brez izgube konteksta vozila. |  |
| WF-I-04 | Predhodna priprava delovnega naloga | Pred obiskom sta razlog in predvideni obseg dela zabeležena za servis. |  |
| WF-I-05 | Prednaročilo potrebnih delov | Pravi deli so pravočasno naročeni ali prerazporejeni za načrtovano delo. |  |
| WF-J-01 | Digitalni sprejem vozila | Ob prihodu se potrdijo podatki in odpre delovni nalog. |  |
| WF-J-02 | Pregled vozila ob sprejemu | Začetno stanje, meritve in morebitne dodatne potrebe so dokumentirani. |  |
| WF-J-03 | Dodatno delo med servisom | Dodatna dela so opisana, ocenjena in izvedena šele po odobritvi stranke. |  |
| WF-J-04 | Servisni načrt proizvajalca | Obseg rednega servisa temelji na načrtu, ustreznem vozilu in kilometrini. |  |
| WF-J-05 | Tehnična navodila za serviserja | Serviser dobi ustrezne specifikacije za izvedbo konkretnega dela. |  |
| WF-J-06 | Izračun dela in časa | Ponudba oziroma delovni nalog vsebujeta oceno časa in stroška dela. |  |
| WF-J-07 | Status servisa za voznika | Voznik spremlja stanje obiska in ve, kateri korak sledi. |  |
| WF-K-01 | Identifikacija pravilnega rezervnega dela | Za konkretno vozilo in delo se izbere združljiv artikel. |  |
| WF-K-02 | Alternativni deli in cenovni razredi | Servis lahko predstavi ustrezne alternative, stranka pa izbere možnost. |  |
| WF-K-03 | Del ni na zalogi | Znana dobavljivost se upošteva pri ponudbi, terminu in obvestilu vozniku. |  |
| WF-K-04 | Urgentna dobava med popravilom | Nujno potreben del prispe tako, da se popravilo lahko nadaljuje. |  |
| WF-K-05 | Vračilo napačnega ali neuporabljenega dela | Vračilo, potrditev in finančni status dela so sledljivi. |  |
| WF-K-06 | Napoved povpraševanja po delih | Agregirane prihodnje potrebe podprejo načrtovanje Bartogove zaloge. |  |
| WF-L-01 | Digitalni zaključek servisnega obiska | Dela, obračun, plačilo, servisni zapis in naslednji intervali se zaključijo. |  |
| WF-L-02 | Vpis v originalno digitalno servisno knjižico | Opravljen servis se vpiše v proizvajalčev sistem in referencira v Vintru. |  |
| WF-L-03 | Račun in servisna dokumentacija | Voznik dobi dostop do računa in dokumentacije ob profilu vozila. |  |
| WF-L-04 | Izračun naslednjih potreb | Zaključen poseg posodobi servisne intervale in prihodnja priporočila. |  |
| WF-M-01 | Stranka se ne vrača | Servis prepozna pričakovano potrebo in lahko stranko ponovno kontaktira. |  |
| WF-M-02 | Nadaljnji stik po servisu | Povratna informacija potrdi zadovoljstvo ali sproži obravnavo težave. |  |
| WF-M-03 | Ponudba glede na dejansko potrebo | Ciljano obvestilo doseže stranke, katerih vozila dejansko potrebujejo storitev. |  |
| WF-M-04 | Sprememba preferiranega servisa | Vozilo in njegov življenjski cikel se preneseta k drugemu servisu v mreži. |  |
| WF-N-01 | Poročilo o stanju pred prodajo | Prodajalec lahko deli pregledno, dokazljivo zgodovino in stanje vozila. |  |
| WF-N-02 | Prodaja vozila in prenos zgodovine | Zgodovina ostane z vozilom, osebni podatki pa se ločijo od novega lastnika. |  |
| WF-N-03 | Prevzem rabljenega vozila | Novi lastnik prevzame profil, pregleda zgodovino in nadaljuje vzdrževanje. |  |
| WF-O-01 | Integracija s CRM (poznejša faza) | Dogovorjeni podatki o strankah se usklajujejo z CRM brez izgube izvornih zapisov. |  |
| WF-O-02 | Enoten pogled na stranko in vozilo | Servisni svetovalec dobi kontekst vozila, zgodovine, rezervacij in potreb. |  |
| WF-O-03 | Vpogled v servisno mrežo za Bartog | Bartog spremlja potrebe in rezultate lokacij ter usmerja izboljšave mreže. |  |
| WF-O-04 | Uvajanje partnerskega servisa | Preverjen partner dobi nastavljene lokacije, storitve, uporabnike in dostope. |  |
| WF-O-05 | Kakovost partnerske delavnice | Pritožbe in odstopanja dobijo dokumentirano obravnavo in preverjen ukrep. |  |
| WF-O-06 | Zmogljivost in usmerjanje povpraševanja | Povpraševanje se usmeri k ustreznemu servisu z razpoložljivo kapaciteto. |  |
| WF-O-07 | Začasna prekinitev ali izstop servisa | Nove rezervacije se ustavijo, odprti primeri in obveznosti pa uredijo. |  |
| WF-O-08 | Integracija z ERP (poznejša faza) | Dogovorjeni nalogi, naročila in finančni statusi se izmenjajo brez dvojnega vnosa. |  |

**Opombe ali manjkajoči scenariji:**

________________________________________________________________________________

________________________________________________________________________________

# A. Začetek in digitalni profil vozila

### WF-A-01 — Registracija in dodajanje vozila  
**Kdo sodeluje:** Voznik/servisni center  
**Povod:** Voznik želi začeti uporabljati Vintro ali servisni center ob obisku ustvari profil vozila.

**Potek:** Registracija računa → potrditev identitete → osnovni profil in kontaktni podatki → nastavitev komunikacijskih kanalov ter ločena izbira soglasij za trženje in deljenje podatkov → VIN/registracija → identifikacija vozila → pridobitev tehničnih podatkov → potrditev uporabnika → digitalni profil vozila.

**Rezultat:** Aktiven uporabniški račun z nadzorom nad soglasji in enoten digitalni profil avtomobila.

**Voznik:** Enostaven vstop, nadzor nad zasebnostjo in brez ročnega zbiranja podatkov.  
**Servis:** Zanesljiv kontekst vozila.  
**Bartog:** Osnova za povezavo s katalogom, podatki in življenjskim ciklom vozila.  

**Alternativni potek — profil začne servisni center:** Servis ob obisku vnese kontakt stranke, VIN/registracijo, identificira vozilo ter doda razpoložljive tehnične podatke, dokumente in servisno zgodovino, enako kot v WF-A-01, WF-A-02 in WF-A-04 → stranki pošlje povabilo za prevzem profila → stranka ob sprejemu potrdi povezavo z vozilom, preveri podatke, po želji dopolni informacije o vozilu in preteklih posegih ter nastavi komunikacijske kanale in soglasja. Uporaba računa ni pogoj za servisiranje.

**Brez računa:** Če stranka povabila ne sprejme ali računa ne želi, servis še naprej vodi servisne zapise vozila in stranko o posegih obvešča po telefonu ali e-pošti na dogovorjeni kontakt. Profil ostane neprevzet; trženje in deljenje podatkov nista samodejno dovoljena (GDPR - varovanje podatkov). Stranka lahko povabilo sprejme pozneje in prevzame obstoječo zgodovino po potrditvi povezave z vozilom.

**Če profil že obstaja:** Servis pred ustvarjanjem novega profila preveri ujemanje vozila. Servisna zgodovina in informacije o avtomobilu so vezani na avto in ne na lastnika avtomobila (Možnost večih uporabnikov istega avtomobila). Obstoječi profil poveže šele po potrditvi upravičene osebe in ustreznih dovoljenj, da ne nastaneta podvojena zgodovina ali nepooblaščen dostop.

### WF-A-02 — Uvoz obstoječe servisne zgodovine  
**Kdo sodeluje:** Voznik  
**Povod:** Dodano rabljeno/obstoječe vozilo.

**Potek:** Računi, servisna knjižica ali podatki servisa → strukturiranje posegov → potrditev → servisna časovnica.  
**Alternativni vnos:** Fotografiranje dokumentov s telefonom ali nalaganje datotek prek brskalnika. Vintro dokument prebere in uvozi podatke.

**Če zgodovina ni na voljo:** Zgodovina v Vintru se začne ob vključitvi uporabnika.

**Rezultat:** Digitalizirana zgodovina vozila.  
**Voznik:** Celotna zgodovina na enem mestu.  
**Servis:** Pozna pretekle posege.  
**Bartog:** Kakovostnejši podatki o življenjskem ciklu vozila.  

### WF-A-03 — Povezava vozila z obstoječim servisom  
**Kdo sodeluje:** Voznik/servis  
**Povod:** Voznik želi povezati vozilo z obstoječim servisom znotraj servisne verige.

**Potek:** Identifikacija stranke → povezava profila → dovoljenja → servis pridobi ustrezni kontekst vozila.

**Rezultat:** Obstoječ odnos servis–stranka se nadaljuje digitalno.  

### WF-A-04 — Dodajanje dokumentacije vozila  
**Kdo sodeluje:** Voznik  
**Povod:** Voznik želi shraniti dokument (homologacija, trenutna zavarovalna polica ...) vozila.

**Potek:** Dokument → prepoznavanje vrste dokumenta → pridobitev ustreznih podatkov/datumov → shranjevanje → po potrebi opomnik.

**Rezultat:** Digitalna zbirka dokumentov in podatkov o vozilu.  

---

# B. Moj avto — osrednje mesto za informacije

### WF-B-01 — osrednje mesto za informacije o vozilu  
**Kdo sodeluje:** Voznik  
**Povod:** Voznik potrebuje informacijo o svojem avtomobilu.

**Potek:** Vozilo → Vintro združi tehnične podatke, VIN, motor, servisno zgodovino, prihodnje potrebe, pnevmatike, olje, dokumente, zavarovanje itd. → uporabnik dobi odgovor.

**Rezultat:** Vintro postane **prvo mesto za informacije o lastnem avtomobilu**.  
**Voznik:** Vse na enem mestu.  
**Servis:** Bolj informirana stranka in boljši podatki.  
**Bartog:** Vključenost tudi zunaj servisnih dogodkov.  

### WF-B-02 — Katero olje in tekočine potrebuje vozilo?  
**Kdo sodeluje:** Voznik  
**Povod:** Voznik želi preveriti ustrezne tekočine za svoje vozilo - na zaslonu vozniku piše, da mora dotočiti 1 liter ustreznega motornega olja.

**Potek:** Vozilo → motor/specifikacija → ustrezno olje/hladilna/zavorna tekočina + količina → nakup za samostojno vzdrževanje ali servis.

**Rezultat:** Voznik dobi preverjeno specifikacijo in naslednji korak, brez ugibanja o tekočini ali količini.

### WF-B-03 — Katere pnevmatike in platišča ustrezajo vozilu?  
**Kdo sodeluje:** Voznik  
**Povod:** Voznik želi izbrati standardne pnevmatike ali platišča za konkretno vozilo.

**Potek:** Vozilo → homologirane dimenzije → združljive konfiguracije → nakup ali rezervacija.

**Rezultat:** Voznik izbere združljivno konfiguracijo za nakup ali servis.

### WF-B-04 — Kateri potrošni material ustreza vozilu?  
**Kdo sodeluje:** Voznik  
**Povod:** Voznik želi sam zamenjati potrošni material.

**Potek:** Brisalci, žarnice, filtri, akumulator itd. → ujemanje z vozilom → združljivni izdelki → samostojno ali s pomočjo servisa.

**Rezultat:** Voznik dobi seznam združljivnih izdelkov in možnost nakupa pri Bartog ali rezervacije servisa.

---

# C. Preventivno vzdrževanje

### WF-C-01 — Prihajajoči redni servis  
**Kdo sodeluje:** Vintro/voznik  
**Povod:** Vintro zazna, da se približuje servisni interval.

**Potek:** Servisni interval blizu → Vintro zazna potrebo → opozorilo → rezervacija → servis prejme pripravi dele → opravljanje servisa → posodobitev zgodovine.

**Rezultat:** Pravočasen servis.  
**Voznik:** Ni treba spremljati intervalov.  
**Servis:** Pravočasna rezervacija.  
**Bartog:** Predvidljivo povpraševanje po delih.  

### WF-C-02 — Servis glede na časovni interval  
**Kdo sodeluje:** Vintro/voznik  
**Povod:** Preteče časovni interval za vzdrževanje.

**Potek:** Časovni interval → zaznana zapadlost → opozorilo → rezervacija → izvedba → nov interval.

Primer: zavorna tekočina.

**Rezultat:** Časovno zapadlo vzdrževanje je izvedeno in naslednji interval je nastavljen.

### WF-C-03 — Servis glede na kilometrino  
**Kdo sodeluje:** Vintro/voznik  
**Povod:** Zabeležena kilometrina doseže prag za servis.

**Potek:** Kilometrina → preračun intervala → zaznana potreba → opozorilo → servisni postopek.

**Rezultat:** Kilometrina sproži pravočasno servisno priporočilo in nadaljnji servisni proces.  
**Pogoj:** Vintro mora imeti dostop do zabeležene kilometrine vozila prek uporabnikovega vnosa.
   - Vintro bi čez čas lahko predvideval kilometrino na podlagi preteklih podatkov, vendar je to manj zanesljivo in ne upošteva dejanskega stanja vozila.  

### WF-C-04 — Združevanje več prihodnjih servisnih potreb  
**Kdo sodeluje:** Vintro/servis  
**Povod:** Vintro zazna več potreb v podobnem obdobju (Potrebe znotraj npr. 10 ali 20% časovnega ali kilometrinskega intervala).

**Potek:** Več potreb v podobnem obdobju → Vintro predlaga združitev → servis preveri → skupna ponudba → en obisk.

**Rezultat:** Več potreb je združenih v en potrjen servisni obisk.

**Voznik:** Manj obiskov.  
**Servis:** Višja vrednost delovnega naloga.  
**Bartog:** Več delov na naročilo.  

### WF-C-05 — Preventivni pregled pred potovanjem  
**Kdo sodeluje:** Voznik  
**Povod:** Voznik načrtuje daljšo pot.

**Potek:** Načrtovana daljša pot → pregled → odkrite potrebe → ponudba → izvedba.

**Rezultat:** Vozilo je pregledano in nujne potrebe so odpravljene pred potovanjem.

---

# D. Pnevmatike in sezonske potrebe

### WF-D-01 — Sezonska menjava pnevmatik  
**Kdo sodeluje:** Voznik/servis  
**Povod:** Približuje se sezona menjave pnevmatik.

**Potek:** Sezona → opomnik → rezervacija → priprava pnevmatik → menjava → zapis.

**Rezultat:** Voznik prevočasno opomnjen o potrebi za menjavo pnevmatik. Pnevmatike so pravočasno pripravljene, zamenjane in evidentirane.

### WF-D-02 — Pnevmatike + prihajajoči servis  
**Kdo sodeluje:** Servisni svetovalec  
**Povod:** Voznik rezervira menjavo pnevmatik, sistem pa zazna bližnji servis.

**Potek:** Rezervacija menjave pnevmatik → Vintro ugotovi, da čez 1.500 km sledi servis → servis vidi priložnost → predlaga združitev → voznik potrdi → Bartog dobavi dele → vse opravljeno v enem obisku ali pa po dogovoru v naslednjem obisku (potencialno z dodatnim popustom).

**Rezultat:** Menjava pnevmatik in bližnji servis sta izvedena v enem obisku ali pa razporejena tako, da ima servis dobro organiziran delovni proces.

**Voznik:** Prihranek časa.  
**Servis:** Bolje organiziran delovni proces in več dela/dobička.  
**Bartog:** Več prodanih delov/materiala.  

### WF-D-03 — Nakup novih pnevmatik  
**Kdo sodeluje:** Voznik/servis  
**Povod:** Vozilo potrebuje nov komplet pnevmatik.

**Potek:** Obraba/potreba → pravilna dimenzija → ponudba → izbira → Bartog dobavi → servis montira.

**Rezultat:** Kompatibilen komplet je dobavljen in nameščen na vozilo.

### WF-D-04 — Hramba pnevmatik in aktualno stanje kompleta  
**Kdo sodeluje:** Servis  
**Povod:** Po sezonski menjavi voznik ponudi oziroma sprejme hrambo kompleta.

**Potek:** Menjava → ponudba hrambe → identifikacija kompleta in vozila → zapis dimenzij, DOT, profila, stanja ter lokacije v skladišču → hramba → sezonski opomnik in ponudba termina → priprava kompleta → montaža → posodobitev stanja in servisne evidence.

**Rezultat:** Komplet pnevmatik je sledljiv med hrambo in ponovno aktiviran ob naslednji sezoni.

### WF-D-05 — Zaznana iztrošenost pnevmatik  
**Kdo sodeluje:** Servis  
**Povod:** Meritev ali starost pnevmatike pokaže potrebo po zamenjavi.

**Potek:** Meritev/starost → zaznana potreba → priporočilo → ponudba → dobava → montaža.

**Rezultat:** Iztrošene pnevmatike so zamenjane z združljivim kompletom, ki ga voznik ali servis identificira v spletni aplikaciji Vintro.

---

# E. DIY - Domači mojstri in rezervni deli za voznika

### WF-E-01 — Identifikacija rezervnega dela za naredi sam  
**Kdo sodeluje:** Voznik  
**Povod:** Voznik želi nekaj zamenjati sam.

**Potek:** Vozilo → komponenta → Vintro → združljivni deli → izbira.

**Voznik:** Ni ugibanja o združljivosti.  
**Bartog:** Neposreden kanal za ustvarjanje povpraševanja.  
**Rezultat:** Voznik izbere združljiv del za konkretno vozilo.

### WF-E-02 — Nakup rezervnih delov  
**Kdo sodeluje:** Voznik/Bartog  
**Povod:** Voznik je identificiral združljiv del in ga želi kupiti.

**Potek:** Identificiran del → cena/dobavljivost → naročilo → Bartog → prevzem/dostava.

**Rezultat:** Voznik prejme pravilen rezervni del na izbran način prevzema ali dostave.

### WF-E-03 — Vzdrževanje za domače mojstre  
**Kdo sodeluje:** Voznik  
**Povod:** Voznik želi servis opraviti sam.

**Potek:** Voznik želi servis opraviti sam → ustrezen material/specifikacije pridobi v vintro → izvedba → uporabnik zabeleži poseg in kilometrino → življenjski cikel vozila se posodobi.

**Rezultat:** naredi sam poseg je zabeležen v digitalni zgodovini vozila.

---

# F. Okvara in pomoč na cesti

### WF-F-01 — Voznik zazna težavo  
**Kdo sodeluje:** Voznik  
**Povod:** Voznik zazna lučko, zvok, vibracijo ali drugo težavo.

**Potek:** Lučka/zvok/vibracija → opis simptoma v spletnem brskalniku in po potrebi naložena slika → servis prejme povpraševanje za popravilo → diagnostika → popravilo.

**Rezultat:** Težava je klasificirana in predana v ustrezen diagnostični ali servisni proces.

### WF-F-02 — Potrebujem pomoč na cesti  
**Kdo sodeluje:** Voznik  
**Povod:** Vozilo se pokvari na cesti in voznik potrebuje pomoč.

**Potek:** Okvara → Vintro pokaže uporabnikovo kritje pomoči na cesti → pravilna telefonska številka za vlečno službo ali zavarovalniškega agenta → podatki vozila in zavarovalne police → pomoč.

**Rezultat:** Vozniku ni treba ugotavljati, *»Koga moram sploh poklicati?«*  

### WF-F-03 — Potrebujem avtovleko  
**Kdo sodeluje:** Voznik/partner za pomoč na cesti  
**Povod:** Vozilo ni vozno in ga je treba prepeljati.

**Potek:** Vozilo ni vozno → izbor partnerske avtovleke → pomoč na cesti → izbor primernega partnerskega servisa → kontekst vozila → vleka → diagnostika/popravilo.

**Rezultat:** Vozilo je prepeljano v primeren servis z že pridobljenimi informacijami.


### WF-F-04 — Ponovljena okvara  
**Kdo sodeluje:** Voznik/servis  
**Povod:** Po preteklem posegu se pojavi soroden ali ponovljen problem.

**Potek:** Nova prijava → povezava s prejšnjim delovnim nalogom, deli, meritvami in odobritvami → preverjanje garancije ali reklamacije → diagnostika in presoja odgovornosti → popravek, dobropis ali obrazložena zavrnitev → posodobitev servisne zgodovine.

**Rezultat:** Ponovljena okvara je obravnavana kot sledljiv garancijski ali reklamacijski primer, ne kot nepovezan obisk.


---

# G. Nesreča in škodni primer

### WF-G-01 — Imel sem prometno nesrečo – kaj zdaj?  
**Kdo sodeluje:** Voznik  
**Povod:** Nesreča.

**Potek:** način za primer nesreče → varnost/nujna pomoč → navodila → podatki udeležencev → dokumentiranje → zapisnik → zavarovalnica → pomoč na cesti/popravilo.

**Rezultat:** Vintro vodi voznika z jasnimi navodili skozi dogodek.  

### WF-G-02 — Izpolnitev poročila o prometni nesreči  
**Kdo sodeluje:** Voznik  
**Povod:** Po nesreči je treba pripraviti poročilo.

**Potek:** Nesreča → podatki vozila/lastnika/zavarovanja se predizpolnijo → podatki drugega udeleženca → okoliščine → pripravljen pisni ali digitalni zapisnik v primeru da ga nihče od udeležencev nima fizično pri sebi.

**Rezultat:** Pripravljen je veljaven zapisnik o prometni nesreči, ki ga je mogoče predati zavarovalnici ali policiji.


### WF-G-03 — Dokumentiranje škode  
**Kdo sodeluje:** Voznik  
**Povod:** Po nesreči je treba zbrati dokaze o škodi.

**Potek:** Vintro vodi uporabnika skozi proces dokumentiranja škode, poškodb, lokacije, dokumentov, prič in okoliščin → škodni primer.

**Rezultat:** Škodni primer vsebuje strukturirano dokumentacijo za nadaljnjo obravnavo.


### WF-G-04 — Popravilo vozila po nesreči  
**Kdo sodeluje:** Voznik/zavarovalnica/servis  
**Povod:** Po prometni nesreči je treba vozilo oceniti in popraviti.

**Potek:** Popravilo se rezervira v spletni aplikaciji Vintro z oznako zavarovalnega primera → servis opravi popravilo → zavarovalnica potrdi stroške → Vintro posodobi zgodovino vozila.

**Rezultat:** Škodni primer je zaključen, vozilo popravljeno in poseg vpisan v zgodovino.

---

# H. Zavarovanje in administracija

### WF-H-01 — digitalna zbirka zavarovalnih podatkov  
**Kdo sodeluje:** Voznik  
**Povod:** Voznik želi shraniti ali pregledati podatke o zavarovanju vozila.

**Potek:** Voznik → Vintro → zavarovalnica, številka police, dokument, veljavnost, kritja, pomoč na cesti in kontakt.

**Rezultat:** Zavarovanje je del digitalnega profila avtomobila.  

### WF-H-02 — Zavarovanje se izteka  
**Kdo sodeluje:** Vintro/voznik  
**Povod:** Vintro zazna bližajoči se datum poteka police.

**Potek:** Potek veljavnosti → opozorilo → pregled obstoječe police → podaljšanje/menjava → nova polica se shrani.

**Rezultat:** Zavarovanje je pravočasno podaljšano ali zamenjano in nova polica shranjena.


### WF-H-03 — Tehnični pregled  
**Kdo sodeluje:** Voznik/servis  
**Povod:** Približuje se rok tehničnega pregleda.

**Potek:** Rok → opozorilo → možnost predhodnega pregleda servisa → odprava težav → tehnični pregled → nov datum.

**Rezultat:** Vozilo opravi tehnični pregled in nov rok je zabeležen.


### WF-H-04 — Registracija, vinjeta in drugi roki  
**Kdo sodeluje:** Voznik  
**Povod:** Približuje se ustrezni administrativni rok.

**Potek:** Relevantni rok → Vintro opozori → uporabnik opravi obveznost → nov datum/status.

**Rezultat:** Administrativna obveznost je opravljena in njen novi status zabeležen.


### WF-H-05 — Vpoklic / servisna akcija  
**Kdo sodeluje:** Proizvajalec/Bartog/servis  
**Povod:** Za konkretno vozilo ali serijo vozil je objavljen vpoklic ali servisna akcija. V kolikor je vpoklic nujno odpravljen pri pooblaščenem seriserju, se lastnikom avtomobila izda le opozorilo, da obstaja vpoklic za vozilo.

**Potek:** Vir vpoklica → ujemanje po VIN/modelu/letniku → določitev prizadetih vozil in lokacij → obvestilo lastnikom → rezervacija termina → priprava potrebnih delov → izvedba in dokazilo → zaprtje statusa ter poročilo o izvedbi.

**Rezultat:** Vpoklic ali servisna akcija je koordinirana od identifikacije vozil do potrjenega zaključka na posamezni lokaciji in v mreži.


---

# I. Rezervacija in priprava servisa

### WF-I-01 — Voznik sam rezervira servis  
**Kdo sodeluje:** Voznik  
**Povod:** Voznik želi rezervirati servis za konkretno potrebo.

**Potek:** Potreba → izbor servisa in storitve → preverjanje razpoložljivih serviserjev, delovnih mest in trajanja → predlog prostih terminov → zahteva za rezervacijo → potrditev, zavrnitev ali predlog drugega termina → sprememba ali preklic → opomnik in potrditev prihoda → prihod oziroma no-show → zaključek rezervacije.

**Rezultat:** Rezervacija ima usklajen status od zahteve do zaključka, kapaciteta servisa pa je upoštevana pri ponujenih terminih.


### WF-I-02 — Servis proaktivno povabi stranko  
**Kdo sodeluje:** Servisni svetovalec  
**Povod:** Vintro zazna ustrezno prihodnjo potrebo pri stranki brez rezervacije.

**Potek:** Vintro zazna potrebo → servis vidi ustrezno stranko → personalizirano povabilo → rezervacija.

**Rezultat:** Relevantna stranka prejme povabilo in lahko ustvari rezervacija.

**Voznik:** Pravočasna informacija za servisiranje vozila, lažja rezervacija.  
**Servis:** Potreba po delu, ko je manj gužve, hranjanje strank  
**Bartog:** Več potreb realiziranih znotraj mreže.  

### WF-I-03 — Izbira drugega servisa v mreži  
**Kdo sodeluje:** Voznik  
**Povod:** Preferirani servis nima primernega termina ali storitve.

**Potek:** Preferiran servis nima termina → ponujena alternative znotraj Bartog mreže → izbira → prenos konteksta → rezervacija.

**Rezultat:** Voznik rezervira drug servis v mreži brez izgube kontekst vozilaa.

**Bartog:** Stranka ostane v mreži.  

### WF-I-04 — Predhodna priprava delovnega naloga  
**Kdo sodeluje:** Servisni svetovalec  
**Povod:** Rezervacija je potrjen in servis začne pripravo obiska.

**Potek:** Potrjena rezervacija → opomnik in potrditev prihoda → potrditev razloga obiska, kilometrov, opomb in kontaktnih podatkov → servis določi obseg del → priprava delovnega naloga pred prihodom vozila.

**Rezultat:** Pred obiskom je pripravljen delovni nalog z jasnim obsegom dela.


### WF-I-05 — Prednaročilo potrebnih delov  
**Kdo sodeluje:** Servis/Bartog  
**Povod:** Potrjena rezervacija in obseg del pokažeta potrebo po naročilu ali dopolnitvi zaloge.

**Potek:** Delovni nalog/VIN → identifikacija ustreznega originalnega ali enakovrednega dela → preverjanje cene, razpoložljivosti in minimalne zaloge → rezervacija obstoječe zaloge ali premik z druge lokacije → naročilo pri Bartogu/dobavitelju → predvideni čas dobave → prejem in povezava z delovnim nalogom → posodobitev zaloge; po potrebi vračilo neuporabljenega dela.

**Rezultat:** Pravi deli so naročeni ali prerazporejeni, sledljivi in na voljo za načrtovano izvedbo.

**Brez integracije ERP:** Servis preveri zalogo in odda naročilo po obstoječem postopku, potrjen status ter predvideni čas dobave pa vnese v Vintro. Samodejna izmenjava statusov se uvede šele v WF-O-08.

---


Tadej - Pregled do tukaj


---

# J. Servisni obisk

### WF-J-01 — Digitalni sprejem in vnos vozila  
**Kdo sodeluje:** Servis - sprejem/servisni svetovalec  
**Povod:** Vozilo prispe na potrjen servisni termin.

**Potek:** Predhodno potrjeni podatki rezervacije → prihod in identifikacija vozila → potrditev razloga obiska, kilometrov, kontaktnih podatkov in opomb → pregled zunanjega stanja ter fotografije → potrditev sprejema → odprtje delovnega naloga.

**Rezultat:** Digitalni sprejem je zaključen, podatki so potrjeni, delovni nalog pa pripravljen za izvedbo.


### WF-J-02 — Pregled vozila ob sprejemu  
**Kdo sodeluje:** Servis  
**Povod:** Vozilo je prevzeto in treba je potrditi stanje ob sprejemu.

**Potek:** Pregled → standardiziran kontrolni seznam → meritve/fotografije in stanje → dodatne potrebe ter priporočila → predaja ugotovitev servisnemu svetovalcu in povezava z delovnim nalogom.

**Rezultat:** Začetno stanje in priporočila so dokumentirani ter pripravljeni za pregled in odobritev.


### WF-J-03 — Dodatno delo odkrito med servisom  
**Kdo sodeluje:** Serviser, Lastnk avtomobila  
**Povod:** Med pregledom ali izvedbo je odkrito delo, ki ni bilo v prvotnem obseg delu.

**Potek:** Serviser odkrije težavo → dokumentira ugotovitev, meritve in fotografije → določi potrebne dele, delo, čas in ceno → pripravi digitalno ponudbo → lastnik prejme ponudbo ter jo odobri ali zavrne → odobritev se zabeleži v delovnem nalogu → izvedba samo odobrenih del.

**Rezultat:** Dodatno delo je izvedeno samo po odobritvi voznika in zabeleženo v delovnemu nalogu.


### WF-J-04 — Preverjanje servisnega načrta proizvajalca  
**Kdo sodeluje:** Servisni svetovalec  
**Povod:** Za vozilo je treba določiti obseg del rednega servisa.

**Potek:** Vozilo + kilometrina/starost → načrt vzdrževanja → zahtevane operacije → obseg del → izvedba.

**Rezultat:** Obseg del servisa temelji na ustreznem načrtu proizvajalca avtomobila.


### WF-J-05 — Dostop serviserja do tehničnih navodil  
**Kdo sodeluje:** Serviser  
**Povod:** Serviser pri delovnemu nalogu potrebuje navodila ali specifikacijo.

**Potek:** Delovni nalog → servis → ustrezna navodila/specifikacije → izvedba.

**Rezultat:** Serviser izvede operacijo na podlagi ustrezne tehnične informacije.


### WF-J-06 — Izračun dela in časa  
**Kdo sodeluje:** Servisni svetovalec  
**Povod:** Za potrjeni obseg del je treba pripraviti oceno dela in trajanja.

**Potek:** Obseg del → normativi → operacije → ocena dela → ponudba/delovni nalog.

**Rezultat:** Delovni nalog ali ponudba vsebuje ocenjen čas, delo in strošek.


### WF-J-07 — Status servisa za voznika  
**Kdo sodeluje:** Servis, Lastnik vozila  
**Povod:** Status vozila ali delovni nalog se spremeni.

**Potek:** Rezervacija potrjena → vozilo sprejeto → v delu → čakanje na dele ali odobritev → dela zaključena → obračun in plačilo → vozilo pripravljeno za prevzem → prevzem in zaključek obiska. Spremembe statusa se sproti sporočijo vozniku.

**Rezultat:** Voznik vidi aktualni status, prejme informacijo o plačilu in prevzemu ter ve, kateri naslednji korak sledi.

**Voznik:** Transparentnost.  
**Servis:** Manj telefonskih klicev.

---

# K. Rezervni deli in logistika servisa

### WF-K-01 — Identifikacija pravilnega rezervnega dela  
**Kdo sodeluje:** Servis/Bartog  
**Povod:** Delovni nalog zahteva konkretno komponento.

**Potek:** Delovni nalog + VIN → zahtevana komponenta → združljivni artikli → izbira → naročilo.

**Rezultat:** Izbran je pravilen združljiv artikel za konkretno vozilo in delo.

**Servis:** Manj napačnih delov.  
**Bartog:** Višja konverzija in manj vračil.  

### WF-K-02 — Alternativni deli / cenovni razredi  
**Kdo sodeluje:** Servisni svetovalec  
**Povod:** Za potreben del obstaja več originalni del ali enakovreden možnosti.

**Potek:** Potreben del → alternative originalnega ali enakovrednega dela → izbor → ponudba v Vintro aplikacija za obe verziji → Stranka potrdi

**Rezultat:** Stranka ali servis izbere ustrezno alternativo in jo vključi v ponudbo ali naročilo.


### WF-K-03 — Del ni na zalogi  
**Kdo sodeluje:** Servisni svetovalec  
**Povod:** Potreben artikel ni takoj na zalogi.

**Potek:** Artikel ni na voljo → alternative/predvideni čas dobave → servis prilagodi ponudbo ali termin → voznik obveščen.

**Rezultat:** Termin ali ponudba sta prilagojena znani dobavljivosti, voznik pa je obveščen.

**Brez integracije ERP:** Servis pred obvestilom stranki preveri dejansko dobavljivost pri dobavitelju in ročno posodobi termin ali ponudbo v Vintru.


### WF-K-04 — Urgentna dobava med popravilom  
**Kdo sodeluje:** Servis/Bartog  
**Povod:** Med popravilom se pokaže nujna potreba po dodatnem delu.

**Potek:** Serviser odkrije potrebo → Bartog zaloga → nujno naročilo → dostava → nadaljevanje popravila.

**Rezultat:** Popravilo se nadaljuje z urgentno dobavo brez nepotrebnega čakanja.


### WF-K-05 — Vračilo napačnega/neuporabljenega dela  
**Kdo sodeluje:** Servis/Bartog  
**Povod:** Del je napačen, neuporabljen ali ga delovni nalog ne potrebuje več.

**Potek:** Neuporabljen del → vračilo → Bartog potrditev → logistika → dobropis/status.

**Rezultat:** Vračilo je potrjeno, zaloga in finančni status pa sta posodobljena.


### WF-K-06 — Napoved prihodnjega povpraševanja po delih  
**Kdo sodeluje:** Bartog  
**Povod:** Bartog želi planirati prihodnjo zalogo na podlagi podatkov o življenjskem ciklu vozila.

**Potek:** Agregirane prihodnje potrebe po vzdrževanju → napoved → tipi delov/pnevmatik, lokacije in obdobja → prilagoditev zaloge/logistike.

**Rezultat:** Življenjski cikel podatki postanejo vhodni podatek za Bartogovo načrtovanje povpraševanja.  

---

# L. Zaključek servisa in servisna zgodovina

### WF-L-01 — Digitalni zaključek servisnega obiska  
**Kdo sodeluje:** Servis  
**Povod:** Dogovorjena dela so zaključena.

**Potek:** Zaključena dela → preverjanje opravljenih operacij in uporabljenih delov → obračun dela, delov, popustov in davkov → izdaja računa in evidentiranje plačila → obvestilo, da je vozilo pripravljeno za prevzem → zaključek delovnega naloga in servisni zapis → preračun prihodnjih intervalov.

**Rezultat:** Servisni obisk je operativno in finančno zaključen, vozilo pa dobi preverjen servisni zapis.

**Brez integracije ERP:** Servis izda račun po svojem obstoječem postopku, v Vintro pa shrani račun oziroma referenco in potrdi status plačila. Prenos finančnih dokumentov v ERP je poznejši del WF-O-08.


### WF-L-02 — Vpis v originalni delM digitalno servisno knjižico  
**Kdo sodeluje:** Servis/originalni delM sistem  
**Povod:** Zaključen servis zahteva vpis v originalni delM digitalno knjižico.

**Potek:** Zaključen servis → priprava podatkov → originalni delM zapis → potrditev → referenca v Vintru.

**Rezultat:** Servis je vpisan v originalni delM sistem in referenciran v Vintru.


### WF-L-03 — Digitalni račun in servisna dokumentacija  
**Kdo sodeluje:** Servis  
**Povod:** Servisni obisk je zaključen in dokumentacija je pripravljena.

**Potek:** Zaključek → račun v PDF, posegi, uporabljeni deli in spremljajoča dokumentacija → shranjevanje ter pripenjanje dokumentov vozilu → voznik prejme dostop do dokumentacije v Vintru.

**Rezultat:** Voznik prejme preverjen servisni zapis in račun, shranjena pri digitalnem profilu vozila.


### WF-L-04 — Izračun naslednjih potreb  
**Kdo sodeluje:** Vintro  
**Povod:** V vozilo je vpisan nov zaključen servisni zapis.

**Potek:** Nov servisni zapis → Vintro razume opravljene posege → reset intervalov → izračun naslednjih potreb.

**Rezultat:** **Vsak zaključen servis postane vhodni podatek za naslednji servis.**  

---

# M. Odnos s stranko in ohranjanje strank

### WF-M-01 — Stranka se ne vrača  
**Kdo sodeluje:** Servisni svetovalec  
**Povod:** Pričakovana potreba obstaja, vendar stranka nima novega rezervacijaa.

**Potek:** Pričakovana potreba obstaja, rezervacijaa ni → servis vidi neaktivna stranka → kontakt → ponudba → rezervacija.

**Rezultat:** Stranka dobi relevanten kontakt in možnost ponovne rezervacije.


### WF-M-02 — Nadaljnji stik po servisu  
**Kdo sodeluje:** Servis  
**Povod:** Servisni obisk je zaključen in nastopi čas za nadaljnji stik.

**Potek:** Zaključek → čez X dni potrditev prihoda → feedback → zadovoljstvo ali problem → po potrebi ponoven servisni primer.

**Rezultat:** Servis potrdi zadovoljstvo ali odpre nov primer za rešitev težave.


### WF-M-03 — Ponudba glede na dejansko potrebo vozila  
**Kdo sodeluje:** Servisni svetovalec  
**Povod:** Življenjski cikel podatki pokažejo konkretno potrebo pri skupini vozil.

**Potek:** Podatki o vozilih in njihovem življenjskem ciklu → segment strank s konkretno potrebo → razlog, ponudba in komunikacijski kanal → priprava ter pošiljanje kampanje → spremljanje dostave, odprtij in klikov → rezervacija → izveden obisk → pripis prihodka in konverzije.

**Rezultat:** Relevantne stranke prejmejo ponudbo za dejansko potrebo, servis pa lahko meri pot od kampanje do izvedenega in ovrednotenega obiska.

**Brez integracije CRM:** Servis uporabi podatke in dovoljenja za komunikacijo v Vintru ter zabeleži odziv in rezervacijo; povezovanje s CRM se uvede po potrebi v WF-O-01.

**Primer:** Namesto *“20 % popusta na filtre vsem”* lahko servis komunicira s strankami, katerih vozila filter dejansko potrebujejo.


### WF-M-04 — Sprememba preferiranega servisa  
**Kdo sodeluje:** Voznik/servisna mreža  
**Povod:** Voznik se preseli, je nezadovoljen ali preferirani servis ni dostopen.

**Potek:** Selitev/nezadovoljstvo/nedostopnost → drug partnerski servis → prenos kontekst vozilaa → nadaljevanje življenjskega cikla vozila.

**Rezultat:** Življenjski cikel vozila se nadaljuje pri drugem servisu znotraj mreže.

**Bartog:** Stranka zapusti posamezen servis, ne pa nujno Bartogove mreže.  

---

# N. Nakup, prodaja in življenjski cikel vozila

### WF-N-01 — poročilo o stanju vozila pred prodajo  
**Kdo sodeluje:** Lastnik vozila  
**Povod:** Lastnik pripravlja vozilo na prodajo.

**Potek:** Prodaja → Vintro sestavi servisno zgodovino + stanje vzdrževanja + dokumentacijo → deljiv poročilo o vozilu.

**Rezultat:** Dokazljiva zgodovina poveča transnadrejeninost vozila.  

### WF-N-02 — Prodaja vozila in prenos zgodovine  
**Kdo sodeluje:** Trenutni lastnik  
**Povod:** Vozilo je prodano in ga bo prevzel nov lastnik.

**Potek:** Prodaja → ločitev osebnih podatkov → servisna zgodovina ostane z vozilom → novi lastnik prevzame profil.

**Rezultat:** **Avto ohrani svojo zgodbo, lastnik pa svoje osebne podatke.**  

### WF-N-03 — Prevzem kupljenega rabljenega vozila  
**Kdo sodeluje:** Novi lastnik  
**Povod:** Novi lastnik sprejme prenos profila kupljenega vozila.

**Potek:** Novi lastnik → prevzame profil vozila → Vintro pokaže zgodovino → identificira prihodnje potrebe → izbira servisa → nadaljevanje življenjskega cikla vozila.

**Rezultat:** Novi lastnik prevzame digitalni profil in nadaljuje življenjski cikel vozila.


---

# O. Podatki, integracije in servisna mreža

Delovni tokovi kjer je Vintro zamišljen kot povezovalna plast, pomembna za B2B aspekt.

### WF-O-01 — Integracija Vintro s CRM (poznejša faza)  
**Kdo sodeluje:** Servis/Bartog, skrbnik CRM  
**Povod:** Po vzpostavitvi osnovnega dela aplikacije je treba povezati podatke o strankah in stikih z obstoječim CRM.

**Potek:** Dogovor o dovoljenih podatkih, viru resnice in povezavi identitet → začetno ujemanje strank → prenos dovoljenih sprememb kontaktov in interakcij → preverjanje prenosa → ob podvojitvah ali konfliktu pregled in razrešitev brez izgube izvornih podatkov.

**Rezultat:** Po uvedbi integracije so dovoljeni podatki o strankah usklajeni s CRM; profili in komunikacija v Vintru delujejo tudi brez nje.

### WF-O-02 — Enoten pogled na stranko in vozilo  
**Kdo sodeluje:** Servisni svetovalec  
**Povod:** Stranka kontaktira servis in svetovalec potrebuje celoten kontekst.

**Potek:** Stranka kontaktira servis → identifikacija → Vintro združi svoje podatke o stranki in vozilu, servisno zgodovino, rezervacije in prihodnje potrebe → servisni svetovalec dobi enoten kontekst; podatki iz CRM se vključijo šele po uvedbi WF-O-01.

**Rezultat:** Namesto petih sistemov obstaja **en kontekst za odločanje**.  

### WF-O-03 — Vpogled v servisno mrežo za Bartog  
**Kdo sodeluje:** Bartog  
**Povod:** Bartog želi razumeti stanje in potencialne potrebe partnerske mreže.

**Potek:** Podatki partnerske mreže → agregacija potreb, rezervacij, povpraševanja, zaloge in rezultatov lokacij → primerjava storitev, kapacitete, kakovosti in ključnih kazalnikov → določitev skupnih standardov in področij za izboljšave → podpora ali korektivni ukrepi → spremljanje napredka po lokacijah.

**Rezultat:** Bartog vidi sedanje in prihodnje potrebe mreže, primerja lokacije ter usmerja izboljšave ob ohranitvi njihove lokalne operativne avtonomije.

**Brez integracij CRM/ERP:** Začetni pregled temelji na dogodkih in statusih, zabeleženih v Vintru; podatki o zalogi ali strankah iz drugih sistemov se dodajo šele po uvedbi ustrezne integracije.

### WF-O-04 — Uvajanje partnerskega servisa  
**Kdo sodeluje:** Servis/Bartog  
**Povod:** Nov servis se želi vključiti v Vintro mrežo.

**Potek:** Registracija podjetja → preverjanje poslovnih in davčnih podatkov → nastavitev lokacij, odpiralnega časa, storitev, znamk, cenika in kapacitete → določitev kontaktnih oseb → povabila zaposlenim ter dodelitev vlog in dovoljenj → preverjanje partnerja → aktivacija profila.

**Rezultat:** Preverjen servis z nastavljenimi lokacijami in uporabniki je pripravljen za sprejem strank, rezervacij in konteksta vozil.  
**Servis:** Standardiziran začetek uporabe z jasnimi vlogami in dostopi.  
**Bartog:** Razširljiva in kakovostno opisana partnerska mreža.

### WF-O-05 — Obravnava kakovosti partnerske delavnice  
**Kdo sodeluje:** Bartog/partnerski servis  
**Povod:** Pritožba stranke, ponavljajoča se reklamacija ali odstopanje od dogovorjenih standardov pokaže težavo pri partnerju.

**Potek:** Prijava ali zaznava odstopanja → zbiranje povezanih servisnih primerov in dokazil → pregled Bartoga ter možnost pojasnila partnerja → odločitev o ukrepu in roku za odpravo → spremljanje izvedbe in ponovni pregled → zaključek primera ali začasna omejitev novih rezervacij, če težava ni odpravljena.

**Rezultat:** Težava na ravni partnerja ima odgovorno osebo, dokumentirano odločitev in preverjen zaključek; pri neodpravljenem tveganju mreža omeji nove rezervacije, odprte obiske pa obravnava posebej.

### WF-O-06 — Upravljanje zmogljivosti in usmerjanje povpraševanja  
**Kdo sodeluje:** Partnerski servis/Bartog  
**Povod:** Spremenijo se razpoložljivi termini, osebje, oprema ali storitve partnerja oziroma povpraševanje preseže njegove zmogljivosti.

**Potek:** Partner posodobi storitve in razpoložljivost po lokaciji → Vintro preveri ustreznost storitve, lokacijo in proste termine → stranki ponudi primerne delavnice ob upoštevanju njene izbire → izbrani servis potrdi ali zavrne zahtevo v dogovorjenem roku → ob zavrnitvi ali neodzivu stranka izbere drug primeren termin ali partnerja → Bartog spremlja neodzive in preobremenjenost mreže.

**Rezultat:** Stranka prejme izvedljivo možnost servisa, partner ne dobi rezervacij zunaj svojih zmogljivosti, Bartog pa vidi, kje je treba okrepiti mrežo.

### WF-O-07 — Začasna prekinitev ali izstop partnerske delavnice  
**Kdo sodeluje:** Bartog/partnerski servis  
**Povod:** Partner začasno zapre delavnico, ne izpolnjuje pogojev sodelovanja ali se odloči zapustiti mrežo.

**Potek:** Odločitev in datum prekinitve → ustavitev novih rezervacij za prizadete storitve ali lokacije → pregled potrjenih terminov, odprtih delovnih nalogov, reklamacij, naročenih delov in neporavnanih obveznosti → obvestilo strankam in dogovor o dokončanju obiska ali ponudba druge delavnice ob ustreznih dovoljenjih za prenos podatkov → ureditev vračil ter dostopov, hrambe podatkov in pogodbenih obveznosti → potrditev zaključka ali pogojev za ponovno vključitev.

**Rezultat:** Nove rezervacije se ustavijo, odprti primeri dobijo odgovornega izvajalca, stranke so obveščene, dostopi in obveznosti partnerja pa so urejeni.

### WF-O-08 — Integracija Vintro z ERP (poznejša faza)  
**Kdo sodeluje:** Servis/Bartog, skrbnik ERP  
**Povod:** Po vzpostavitvi osnovnega dela aplikacije je treba povezati delovne naloge, naročila delov, račune ali zalogo z obstoječim ERP.

**Potek:** Dogovor o poslovnih dogodkih, identifikatorjih in viru resnice za posamezen podatek → prenos dogovorjenih delovnih nalogov, naročil in finančnih dokumentov → potrditev prenosa ter vrnitev statusov v Vintro → ob napaki ponovni poskus ali ročna razrešitev → preverjanje, da zapisi in zneski niso podvojeni.

**Rezultat:** Po uvedbi integracije so poslovni dogodki sledljivi v obeh sistemih brez dvojnega vnosa; rezervacije in servisni zapisi v Vintru delujejo tudi brez ERP.

---

# Celotna slika

Katalog povezuje 16 vsebinskih sklopov:

**Uvajanje uporabnika / vozila → Moj avto → Preventiva → Pnevmatike → naredi sam (DIY)→ Okvara → Nesreča → Zavarovanje/administracija → Rezervacija → Servisni obisk → Deli/logistika → Zaključek servisa → Ohranjanje strank → življenjski cikel lastništva vozila → Podatki in povezovanje sistemov → delovanje servisne mreže**

Ključna produktna logika je:

> **Vintro želi postati osrednje digitalno mesto avtomobila skozi celoten življenjski cikel vozila — ne samo takrat, ko je avtomobil na servisu.**

Zavarovanje, dokumenti, vzdrževanje, olje, pnevmatike, nesreča, avtovleka in administrativni roki povečujejo uporabnost Vintra tudi zunaj servisnih obiskov.

Poslovni krog rasti:

**več uporabnosti za voznika → več aktivnih uporabnikov → več vozil in podatkov o življenjskem ciklu vozila → pravočasnejše prepoznavanje potreb → več ustreznih interakcij s servisom → več dela v partnerski mreži → več povpraševanja po Bartogovih delih in pnevmatikah → močnejša servisna mreža**

Delovni tokovi ostajajo ločeni od seznama funkcionalnosti. Ko so prioritete znane, se izbran tok razčleni na konkretne funkcionalnosti, podatke, integracije in obseg razvoja.
