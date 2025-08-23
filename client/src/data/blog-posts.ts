import blogImagePath from "@assets/gezin zonder man 2_1754326544869_optimized.png";
import marjanBlogImagePath from "@assets/marjan-scherp-2024.png";
import sanneBlogImagePath from "@assets/sanne-blog-foto-optimized.png";
import secondBlogImagePath from "@assets/image_1754353490936_optimized.png";
import thirdBlogImagePath from "@assets/image_1754354797503_optimized.png";

// Blog data interface
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  alt: string;
  metaTitle: string;
  metaDescription: string;
  isPinned?: boolean;
  tags?: string[];
  publishedDate: string;
}

// CORRECTE VOLGORDE: Welkom (vast #1), Ik wil helemaal niks (uitgelicht #2), Sanne (#3), Marjan (#4), Koffie (#5)
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "welkom-bij-cenra-nederland-rouw-kent-geen-script",
    title: "Welkom bij Cenra Nederland – Rouw kent geen script",
    metaTitle: "Welkom bij Cenra Nederland - Persoonlijke Rouwbegeleiding | Nazorghulp.nl",
    metaDescription: "Ontdek Cenra Nederland: flexibele en laagdrempelige rouwbegeleiding zonder wachtlijsten. Voor volwassenen en kinderen, op jouw manier en in jouw tempo.",
    excerpt: "Bij Cenra Nederland geloven we dat rouw geen handleiding volgt. Er is geen 'standaardtraject' dat begint bij verdriet en eindigt bij verwerking. Iedereen beleeft verlies op zijn eigen manier.",
    content: `
      <h1>Welkom bij Cenra Nederland: Rouw kent geen script</h1>
      
      <h2>Wat betekent rouwbegeleiding bij Cenra Nederland?</h2>
      <p>Bij Cenra Nederland geloven we dat rouw geen handleiding volgt. Er is geen "standaardtraject" dat begint bij verdriet en eindigt bij verwerking. Iedereen beleeft verlies op zijn eigen manier. Soms heftig, soms stil. Soms direct, en soms… pas een jaar later, midden in de supermarkt bij het zien van een blik bruine bonen dat aan oma doet denken.</p>

      <p>Wij zijn er voor al die vormen van rouw. Voor de ouder die worstelt met schuldgevoelens na een overlijden. Voor het kind dat niet begrijpt waarom iedereen "doorgaat met leven". Voor de volwassene die ineens in paniek raakt bij het horen van een liedje. En ja, zelfs voor de persoon die zich afvraagt of het oké is om blij te zijn ná een begrafenis.</p>

      <h2>Onze aanpak: flexibel en laagdrempelig</h2>
      <p>Cenra Nederland is opgezet om een laagdrempelige, persoonlijke en flexibele vorm van begeleiding te bieden. Geen wachtlijsten. Geen volle wachtkamers. Geen verwijzingen. Bij ons kun je gewoon beginnen. Via WhatsApp, telefoon of beeldbellen. Op jouw manier. In jouw tempo.</p>

      <h3>Wat doen we precies?</h3>
      <p>We bieden begeleiding op maat, op afstand en afgestemd op de behoefte van de klant. Voor volwassenen werken we met maandpakketten, van één keer per week contact tot intensievere begeleiding.</p>

      <p>Voor kinderen en jongeren hebben we ook een maatpakket en maken we een eigen plan, waarbij ze indien gewenst anoniem contact kunnen houden met hun vaste begeleider.</p>

      <p>We werken met vaste contactmomenten, korte lijnen en praktische middelen zoals op maat gemaakt behandelplan, rouwkalenders en opdrachten die passen bij de situatie van de klant.</p>

      <p>Soms praten we over verlies. Soms juist niet. Soms gaat het gesprek over hoe je je brood weer proeft zonder schuldgevoel. Of over wat je zegt als iemand vraagt: "Ben je er al een beetje overheen?" Bij Cenra Nederland mag alles besproken worden, ook de dingen die je denkt dat 'niet normaal' zijn om te voelen.</p>

      <h2>Waarom deze blog-pagina?</h2>
      <p>De wereld van rouw is vaak stil. Onzichtbaar. En tegelijkertijd leeft het overal.</p>

      <p>Met deze blog willen we die stilte een beetje doorbreken. Niet met grote theorieën of belerende teksten, maar met verhalen. Verhalen van mensen zoals jij en ik. Verhalen over gemis, verwarring, troost, en soms zelfs een glimlach.</p>

      <p>Elke blog geeft een inkijkje in situaties die wij in onze begeleiding tegenkomen. Niet om in de schijnwerpers te staan, maar om te laten zien: je bent niet gek. En je bent zeker niet alleen.</p>

      <h3>Privacy en vertrouwelijkheid</h3>
      <p>Alle verhalen die je hier leest, zijn gebaseerd op echte situaties. Namen zijn uiteraard veranderd en details aangepast om de privacy van onze cliënten te waarborgen. We delen deze verhalen met toestemming en alleen om anderen te helpen herkenning te vinden.</p>

      <h2>Wil je meer weten over onze begeleiding?</h2>
      <p>Heb je vragen over onze manier van werken? Wil je weten of onze begeleiding iets voor jou of jouw kind kan betekenen? Neem gerust contact met ons op. Een eerste gesprek is altijd vrijblijvend en helpt ons allebei om te ontdekken of we bij elkaar passen.</p>

      <p>Want dat is waar het uiteindelijk om gaat: niet de perfecte begeleiding, maar de begeleiding die bij jou past. In jouw leven. Op jouw moment.</p>

      <p>Je bent welkom, precies zoals je bent. Met al je vragen, twijfels en ja, ook met je verdriet.</p>
    `,
    author: "Cenra Nederland Team",
    date: "Juli 2025",
    publishedDate: "2025-07-15",
    readTime: "6 min",
    image: blogImagePath,
    alt: "Welkom bij Cenra Nederland - persoonlijke en flexibele rouwbegeleiding op afstand",
    tags: ["rouwbegeleiding", "nazorg", "verliesverwerking", "flexibele zorg", "laagdrempelig"],
    isPinned: true
  },
  {
    id: "5",
    slug: "ik-wil-helemaal-niks-anonieme-verbinding",
    title: "\"Ik wil helemaal niks\", een meisje, een scherm en een stille verbinding",
    metaTitle: "Ik wil helemaal niks - Anonieme Begeleiding voor Jongeren | Cenra Nederland",
    metaDescription: "Het verhaal van Laura (13) die na het verlies van haar vader hulp kreeg via anonieme chat. Ontdek hoe digitale rouwbegeleiding jongeren kan helpen.",
    excerpt: "Soms komt hulp niet binnen via een schoolpsycholoog, een verwijzing of een intakegesprek. Soms komt het binnen via een appje, geen naam, geen gezicht en geen druk.",
    content: `
      <h1>Ik wil helemaal niks: Laura's verhaal over anonieme verbinding</h1>
      
      <h2>Wanneer traditionele hulp niet werkt</h2>
      <p>Soms komt hulp niet binnen via een schoolpsycholoog, een verwijzing of een intakegesprek. Soms komt het binnen via een appje, geen naam, geen gezicht en geen druk. Gewoon een scherm en de vrijheid om te reageren, of niet.</p>

      <p>Dat was het begin van ons contact met haar. We noemen haar hier Laura, ze was dertien jaar en volledig op slot sinds haar vader onverwacht overleed.</p>

      <h2>Alles en iedereen was fout</h2>
      <p>Laura was volgens haar moeder altijd een gevoelig kind geweest. Stil, maar niet gesloten en serieus, maar warm. Tot het moment waarop haar vader, haar held, van de ene op de andere dag niet meer thuiskwam.</p>

      <p>Van verdriet was op het eerste gezicht nauwelijks sprake. In plaats daarvan kwam er boosheid. Laura was áltijd boos. Op haar moeder, op school, op vriendinnen die iets verkeerd zeiden of op zichzelf.</p>

      <p>"Ze schreeuwt, slaat met deuren, weigert naar school te gaan," vertelde haar moeder later. "Ik ben met school, huisarts, de praktijkondersteuner en jeugdzorg in gesprek… maar hoe harder ik aan de bel trek, hoe harder zij zich afsluit."</p>

      <p>De moeder wilde dat Laura professionele hulp zou krijgen. Maar Laura wilde niks, "Ze zei letterlijk: 'Als je iemand naar me toe stuurt, praat ik nooit meer.'" En dat meende ze.</p>

      <h2>Vanuit wanhoop kwam ze bij Cenra Nederland</h2>
      <p>De moeder vond ons via internet en ze bekeek de website van Cenra Nederland en merkte dat we ook op afstand werken, via WhatsApp, zonder verplicht sessies. Ze stuurde ons een lange mail, vol frustratie en verdriet. Niet voor zichzelf, maar omdat ze haar dochter niet meer herkende.</p>

      <p>"Ik weet niet of dit mag, of dit werkt… maar kunnen jullie contact leggen met haar, zonder dat ze weet wie of wat jullie zijn?". We stelden voor om het volledig anoniem te doen. Geen openlijke sessies, geen 'dit is Cenra Nederland', gewoon neutraal, een anoniem appmaatje.</p>

      <p>Een onbekende die niks van haar wilde, maar wél altijd bereikbaar was. We gaven geen valse informatie, maar zeiden ook niet wie we waren. Alleen dat we 'iemand' waren die even naast haar wilde staan. Dat ze niks hoefde. Alleen lezen was al oké.</p>

      <h2>De stilte die maanden duurde</h2>
      <p>We stuurden een eerste bericht, toen nog één en een derde. Niet dwingend, geen vragen. Gewoon korte berichtjes: "Ik weet dat je geen zin hebt in mensen. Maar soms is het oké als iemand gewoon even stil bij je zit."</p>

      <p>Dagen gingen voorbij en weken verstreken. We hadden afgesproken: we sturen alleen om de paar dagen iets, nooit opdringerig maar wel trouw. Een keer stuurden we: "Soms is het fijn als iemand even niks zegt, maar wél blijft."</p>

      <p>En toen, uit het niets, kwam er een antwoord: "Je bent irritant, maar minder irritant dan de rest.". Het was het begin.</p>

      <h3>Stap voor stap, in haar tempo</h3>
      <p>Na die eerste reactie bleef het stil, echter wij stopten niet. Steeds weer kleine berichtjes, soms iets over hoe moeilijk boosheid is en een andere keer iets luchtigs. Soms een vraag: "Wat zou jij doen als je even onzichtbaar kon zijn?"</p>

      <p>Langzaam veranderde de toon van haar berichten. Eerst alleen korte woorden en toen wat zinnen. Later kwamen de emoticons. En toen, ineens, stuurde ze: "Ik weet niet waarom ik nog leef. Maar ik wil niet dood zijn. Alleen gewoon weg."</p>

      <p>We schrokken niet, dat was belangrijk. We gingen er niet bovenop zitten en gingen geen zwaar gesprek aan. Wel gaven we erkenning en vooral: blijven, blijven, blijven. We luisterden en gaven woorden waar zij ze nog niet had.</p>

      <h2>De eerste barstjes</h2>
      <p>Na een paar maanden vertelde haar moeder dat het gedrag van Laura begon te veranderen. Niet ineens, maar geleidelijk. Ze wilde zelf naar school, ze schold minder en er kwamen momenten waarop ze haar moeder zelfs een knuffel gaf, zomaar, uit zichzelf.</p>

      <p>En op een dag stuurde ze ons: "Ik denk dat ik het een beetje kan, niet praten over alles. Maar wel snappen dat ik niet gek ben."</p>

      <p>Ze begon vragen te stellen. Over rouw, over boosheid, over waarom mensen zeggen dat het 'beter wordt', terwijl dat nergens op slaat. We gaven geen grote antwoorden, alleen kleine stukjes houvast. "Je hoeft het niet beter te maken. Alleen leefbaar."</p>

      <h2>Een relatie zonder gezicht, maar met vertrouwen</h2>
      <p>Uiteindelijk bouwden we een band op, zonder onze echte namen te delen en zonder dat zij wist wie wij waren. En dat hoefde ook niet, voor haar was het genoeg dat we er waren. Op haar tempo, zonder oordeel en zonder plan.</p>

      <p>Langzaam kreeg ze woorden voor wat ze voelde. Ze durfde te zeggen: "Ik ben bang dat ik ook ga verdwijnen." en kon daarna lachen om haar eigen opmerking. We leerden haar niks nieuws, maar we hielpen haar herinneren dat emoties ruimte mogen hebben, ook als je dertien bent en boos bent op de hele wereld.</p>

      <h2>De les van Laura</h2>
      <p>Wat Laura ons liet zien, is dat begeleiding niet altijd begint met een intakeformulier of een zorgplan. Soms begint het met een berichtje zonder afzender, zonder eisen en zonder verwachtingen.</p>

      <p>Dat is waarom we bij Cenra Nederland ook dit soort trajecten doen. Niet alles hoeft in hokjes te passen en zeker niet als het gaat om kinderen en jongeren die rouwen op hun eigen, ongrijpbare manier.</p>

      <p>We zien het als onze taak om erbij te zijn, desnoods in stilte en desnoods anoniem. Zolang het maar bijdraagt aan dat ene doel: dat iemand op een dag zegt, zoals Laura zei: "Het is nog steeds rot. Maar ik ben niet meer alleen."</p>
    `,
    author: "Cenra Nederland Team",
    date: "Augustus 2025",
    publishedDate: "2025-08-25",
    readTime: "7 min",
    image: thirdBlogImagePath,
    alt: "Jonge tiener krijgt anonieme digitale ondersteuning na verlies van vader",
    tags: ["jongeren", "anonieme begeleiding", "verlies vader", "digitale hulp", "boosheid"],
    isPinned: true
  },
  {
    id: "2",
    slug: "de-stilte-na-het-lachen-het-verhaal-van-sanne",
    title: "\"De stilte na het lachen\" – Het verhaal van Sanne",
    metaTitle: "De stilte na het lachen - Het verhaal van Sanne | Rouwbegeleiding voor Jongeren",
    metaDescription: "Het verhaal van 16-jarige Sanne na het verlies van haar zusje Fleur. Lees hoe rouwbegeleiding jongeren kan helpen omgaan met verlies en schuldgevoelens.",
    excerpt: "Het was een druilerige dinsdagmiddag in november, de lucht hing zwaar, alsof hij op elk moment zou scheuren. Het verhaal van Sanne na het verlies van haar zusje Fleur.",
    content: `
      <h1>Het verhaal van Sanne: Van verlies naar herstel</h1>
      
      <p>Het was een druilerige dinsdagmiddag in november, de lucht hing zwaar, alsof hij op elk moment zou scheuren. Binnen, in een klein rijtjeshuis in een rustige woonwijk, rook het nog naar warme chocolademelk. Het geluid van kinderstemmen had er die ochtend nog geklonken, toen twee zussen giechelend hun schoenen zochten om op tijd naar school te gaan.</p>

      <p>Nu was het stil. Onwerkelijk stil.</p>

      <p>Sanne, zestien jaar oud, zat roerloos aan de keukentafel. Haar handen omklemden een mok, maar de chocolademelk was allang koud. Haar ogen staarden naar één plek op het tafelblad, een vlek in het hout die er al jaren zat. Ze hoorde haar moeder praten, ergens in de verte, maar de woorden kwamen niet meer aan.</p>

      <p>Een paar uur eerder was alles ingestort.</p>

      <h2>Het ongeluk en de eerste reacties</h2>

      <h3>De dag van het ongeluk</h3>
      <p>Het was een gewone dag geweest, haar jongere zusje, Fleur, elf jaar, had bij een vriendin gespeeld. Een vrolijk, levendig meisje dat altijd alles vertelde in honderd woorden per minuut.</p>

      <p>Ze zou rond vijf uur thuis zijn en Sanne had zich verheugd op hun vaste ritueel: samen op de bank, warme dekens en een serie die ze eigenlijk nog niet mocht kijken van hun ouders, maar waar ze stiekem samen toch aan begonnen waren.</p>

      <p>De bel ging niet en het geluid van de sleutel in het slot bleef uit.</p>

      <p>In plaats daarvan klonk de telefoon, haar vader nam op. Eerst stil, toen gefluister en toen dat ene geluid dat Sanne nooit meer zou vergeten: een diepe, rauwe kreet van pure wanhoop.</p>

      <p>Een automobilist had niet op tijd geremd. Fleur stak de straat over en…</p>

      <p>Het volgende wat Sanne zich herinnerde was dat ze in de auto zat. Haar moeder hield haar hand vast maar Sanne voelde niets. Geen tranen, geen woorden, alleen een leegte die dreigde haar op te slokken.</p>

      <h3>De eerste dagen: verstikking</h3>
      <p>De dagen na het ongeluk verliepen in een waas. Er kwamen veel mensen over de vloer, schalen met eten, buren die te hulp schoten, maar Sanne hoorde nauwelijks wat er werd gezegd.</p>

      <p>Haar kamer voelde kil, alles herinnerde haar aan Fleur: het dekbed dat naar haar rook, de schoenen die nog in de gang stonden, een elastiekje dat op haar bureau lag.</p>

      <p>Sanne's ouders deden hun best om haar te troosten, maar zaten zelf gevangen in hun eigen verdriet. Elke poging tot gesprek eindigde in stilte of in tranen. Er was geen houvast.</p>

      <p>Ze ging niet meer naar school en haar telefoon lag ongebruikt naast haar bed. Alleen soms, diep in de nacht, scrolde ze gedachteloos door oude foto's en filmpjes van haar zusje. Soms glimlachte ze even en soms trok het verdriet haar zo hard naar beneden dat ze letterlijk naar adem moest happen.</p>

      <h2>De zoektocht naar ondersteuning</h2>

      <h3>Het zoeken naar hulp</h3>
      <p>Na een week of drie, waarin de dagen in elkaar overliepen, begon de spanning in huis te groeien. Sanne reageerde kortaf of helemaal niet en haar ouders, bang om haar kwijt te raken, voelden zich machteloos.</p>

      <p>Op een avond, terwijl haar vader al naar bed was, zat haar moeder achter de laptop. Ze typte zoekwoorden in die ze liever niet hardop wilde zeggen: rouwtherapie kinderen, online hulp na overlijden, rouwbegeleiding tieners.</p>

      <p>Zo kwam ze op de website van Cenra Nederland terecht en de woorden op de pagina leken precies te omschrijven waar hun gezin in zat: rauw verdriet, verlies dat alles verlamt en de mogelijkheid om niet alleen als ouder, maar ook als kind hulp te krijgen, juist als je geen zin hebt om ergens heen te gaan.</p>

      <p>De volgende ochtend vertelde ze Sanne erover en Sanne haalde haar schouders op. "Het zal toch niks helpen." Maar er zat een kleine aarzeling in haar stem en haar moeder greep die kans.</p>

      <h3>De eerste stap</h3>
      <p>We maakten kennis via een videogesprek en Sanne zat erbij, hoodie over haar hoofd en nauwelijks oogcontact. Toch liet ze ons binnen, al was het voorzichtig.</p>

      <p>We stelden geen lange vragen. Geen zware woorden. Gewoon: "Hoe gaat het nu, op dit moment?". Haar antwoord was simpel: "K*t."</p>

      <p>Dat was genoeg om te beginnen. In overleg met Sanne en haar ouders besloten we de therapie rustig en flexibel op te bouwen: sommige sessies met het hele gezin, andere alleen met haar.</p>

      <p>Daarnaast spraken we af dat ze ons altijd kon appen, ook 's avonds. Geen automatische berichten, maar echte, menselijke reacties, soms binnen een minuut, soms midden in de nacht.</p>

      <h2>Het begeleidingsproces</h2>

      <h3>De appgesprekken: een lifeline</h3>
      <p>In het begin kwamen er vooral korte, droge antwoorden terug:</p>
      <p>"Hoi."<br>"Ik haat dit."<br>"Waarom zij?"</p>

      <p>Soms bleef het stil en soms stuurde ze drie berichten achter elkaar. Het maakte niet uit, we reageerden altijd. Soms met een tegenvraag, soms gewoon met: "Ik lees je."</p>

      <p>Langzaam groeide er vertrouwen. Ze begon te vertellen over de schuldgevoelens die haar wakker hielden: dat ze die middag eigenlijk met Fleur mee had willen gaan, maar had gekozen om thuis te blijven. "Misschien was het dan niet gebeurd," schreef ze.</p>

      <p>We hielpen haar om te begrijpen dat schuldgevoel een wrede schaduw is van rouw, dat het niets te maken had met de werkelijkheid, maar alles met het verlangen om de uitkomst te veranderen.</p>

      <h3>Samen en apart</h3>
      <p>Met haar ouders werkten we aan manieren om het gesprek open te houden zonder elkaar te verstikken. We oefenden met luisteren zonder meteen advies te geven en met Sanne zelf gingen we dieper in op haar herinneringen aan Fleur, niet om de pijn te vergroten, maar om de liefde en verbondenheid levend te houden.</p>

      <p>Er waren sessies waarin niemand sprak. Alleen samen zijn, soms in stilte, was al genoeg.</p>

      <p>Andere keren lachten we onverwachts om een grappig verhaal over Fleur. Dan schrok Sanne bijna van zichzelf, alsof lachen verraad was. We stelden haar gerust: ook in rouw mag er licht zijn.</p>

      <h2>Vooruitgang en acceptatie</h2>

      <h3>De omslagmomenten</h3>
      <p>Na een paar maanden merkten haar ouders dat ze weer soms muziek luisterde. Dat ze weer eens naar buiten ging zonder dat iemand het vroeg.</p>

      <p>Het echte keerpunt kwam op een avond in mei. Ze stuurde een appje: "Ik wil morgen misschien iets vertellen wat ik nog nooit gezegd heb."</p>

      <p>De volgende dag, in een één-op-één sessie, kwam het eruit. Hoe bang ze was geweest om haar zusje te vergeten. Hoe ze zichzelf dwong om elke herinnering vast te houden, uit angst dat de liefde zou verdwijnen.</p>

      <p>We spraken over hoe liefde niet verdwijnt met de dood en dat herinneringen vervagen, maar dat de band blijft, anders, maar aanwezig.</p>

      <h3>Nog steeds onderweg</h3>
      <p>Het is nu bijna een jaar later en Sanne is inmiddels 17, maar voelt soms ouder. De rauwheid is minder scherp, maar de leegte blijft. Ze gaat weer naar school, heeft weer wat contact met vriendinnen, maar er zijn dagen dat alles te zwaar voelt.</p>

      <p>We zijn er nog steeds via de app en met één op één gesprekken. Niet omdat rouw een project is dat je afrondt, maar omdat het leven met verlies leren leven een langzaam proces is.</p>

      <p>Haar ouders zeggen dat ze Cenra Nederland zien als een reddingslijn, niet alleen voor hun dochter, maar ook voor henzelf.</p>

      <p>En zo blijft Sanne, stap voor stap, lopen op een weg die ze nooit had willen kennen. Maar ze loopt hem niet meer alleen.</p>

      <p>Het was het begin van een voorzichtig contact. Sanne begon langzaam te vertellen over Fleur, over hun band, over hoe leeg alles nu voelde. We luisterden, zonder oordeel, zonder adviezen. Soms stelden we voorzichtige vragen: "Wat zou Fleur ervan vinden als ze je nu zo zag?"</p>

      <h2>Kleine stapjes naar het licht</h2>
      <p>Langzaam kwam Sanne tot het inzicht dat Fleur niet zou willen dat zij zichzelf wegcijferde. "Ze zou me uitlachen en zeggen dat ik een drama queen ben," zei ze op een dag, en voor het eerst in maanden verscheen er een klein glimlachje op haar gezicht.</p>

      <p>We werkten aan kleine, haalbare doelen. Eerst weer een dag per week naar school. Toen een wandeling met een vriendin. Kleine stapjes die voor Sanne voelden als bergen, maar die ze één voor één beklom.</p>

      <p>Het belangrijkste was dat ze leerde dat rouwen om Fleur niet betekende dat ze haar eigen leven moest opgeven. Dat liefde voor iemand niet stopt als diegene er niet meer is, maar dat je die liefde kunt eren door zelf te blijven leven.</p>

      <h3>Samen en apart</h3>
      <p>Met haar ouders werkten we aan manieren om het gesprek open te houden zonder elkaar te verstikken. We oefenden met luisteren zonder meteen advies te geven en met Sanne zelf gingen we dieper in op haar herinneringen aan Fleur, niet om de pijn te vergroten, maar om de liefde en verbondenheid levend te houden.</p>

      <p>Er waren sessies waarin niemand sprak. Alleen samen zijn, soms in stilte, was al genoeg.</p>

      <p>Andere keren lachten we onverwachts om een grappig verhaal over Fleur. Dan schrok Sanne bijna van zichzelf, alsof lachen verraad was. We stelden haar gerust: ook in rouw mag er licht zijn.</p>

      <h3>De omslagmomenten</h3>
      <p>Na een paar maanden merkten haar ouders dat ze weer soms muziek luisterde. Dat ze weer eens naar buiten ging zonder dat iemand het vroeg.</p>

      <p>Het echte keerpunt kwam op een avond in mei. Ze stuurde een appje: "Ik wil morgen misschien iets vertellen wat ik nog nooit gezegd heb."</p>

      <p>De volgende dag, in een één-op-één sessie, kwam het eruit. Hoe bang ze was geweest om haar zusje te vergeten. Hoe ze zichzelf dwong om elke herinnering vast te houden, uit angst dat de liefde zou verdwijnen.</p>

      <p>We spraken over hoe liefde niet verdwijnt met de dood en dat herinneringen vervagen, maar dat de band blijft, anders, maar aanwezig.</p>

      <h3>Nog steeds onderweg</h3>
      <p>Het is nu bijna een jaar later en Sanne is inmiddels 17, maar voelt soms ouder. De rauwheid is minder scherp, maar de leegte blijft. Ze gaat weer naar school, heeft weer wat contact met vriendinnen, maar er zijn dagen dat alles te zwaar voelt.</p>

      <p>We zijn er nog steeds via de app en met één op één gesprekken. Niet omdat rouw een project is dat je afrondt, maar omdat het leven met verlies leren leven een langzaam proces is.</p>

      <p>Haar ouders zeggen dat ze Cenra Nederland zien als een reddingslijn, niet alleen voor hun dochter, maar ook voor henzelf.</p>

      <p>En zo blijft Sanne, stap voor stap, lopen op een weg die ze nooit had willen kennen.<br>Maar ze loopt hem niet meer alleen.</p>

      <h2>Wat dit verhaal ons leert</h2>
      <p>Sanne's verhaal laat zien dat rouw bij jongeren vaak anders verloopt dan bij volwassenen. Waar volwassenen soms kunnen rationaliseren en contextualiseren, ervaren jongeren verlies vaak totaler en intenser.</p>

      <p>Bij Cenra Nederland begrijpen we dat jongeren anders rouwen dan volwassenen. We bieden daarom speciale begeleiding aan voor kinderen en tieners tot 18 jaar, altijd afgestemd op hun eigen tempo en behoeften.</p>
    `,
    author: "Cenra Nederland Team",
    date: "Augustus 2025",
    publishedDate: "2025-08-15",
    readTime: "8 min",
    image: sanneBlogImagePath,
    alt: "Jonge vrouw in rouw - ondersteuning voor jongeren die een verlies hebben meegemaakt",
    tags: ["jongeren", "verlies zus", "schuldgevoelens", "anonieme begeleiding", "rouwverwerking"],
    isPinned: false
  },
  {
    id: "3",
    slug: "een-leven-in-uren-het-verhaal-van-marjan",
    title: "\"Een leven in uren\" – het verhaal van Marjan",
    metaTitle: "Een leven in uren - Het verhaal van Marjan | Rouwbegeleiding na Verlies Partner",
    metaDescription: "Het verhaal van Marjan na het verlies van haar werkverslaafde man Peter. Lees hoe rouwbegeleiding kan helpen bij het verwerken van plotseling verlies en schuldgevoelens.",
    excerpt: "Een huwelijk met tijdtekort. Marjan (47) en Peter (49) waren al meer dan twintig jaar getrouwd. Peter was ondernemer in hart en nieren, een workaholic in de puurste vorm.",
    content: `
      <h2>Een huwelijk met tijdtekort</h2>
      <p>Marjan (47) en Peter (49) waren al meer dan twintig jaar getrouwd. In die jaren hadden ze al veel meegemaakt: een klein appartement, de eerste jaren van financiële krapte, het opbouwen van een bedrijf, de eerste successen.</p>

      <p>Peter was ondernemer in hart en nieren. Niet zo'n ondernemer die het ook rustig aan kon doen, hij was een workaholic in de puurste vorm. Zes dagen per week werkte hij van 's ochtends zeven uur tot soms tien uur 's avonds. En dat zonder pauze, zonder avondwandeling of zonder zomaar eens samen op de bank zitten.</p>

      <p>Eten deed hij vaak op kantoor, met een stapel papieren naast zijn bord. Als Marjan vroeg of hij op tijd thuis kwam, was het antwoord meestal voorspelbaar: "Als ik dat doe, ligt het werk morgen nog hoger opgestapeld."</p>

      <p>Marjan probeerde het soms voorzichtig aan te kaarten. Ze miste hem, ze miste de man met wie ze ooit lange fietstochten maakte, die spontaan een terrasje pakte. Maar die gesprekken liepen bijna altijd uit op ruzie. "Je eet er toch ook van?" en "Wie betaalt jouw kleren?" Het waren harde woorden, maar ze kwamen van een man die nooit leerde stilstaan.</p>

      <h2>Kleine momenten, groot geluk</h2>
      <p>Toch hield Marjan intens veel van Peter. Juist omdat ze wist dat achter die harde werkmentaliteit een man zat die haar, op zijn manier, liefhad. In de schaarse vrije uren, vaak op zondagmiddag, deden ze kleine dingen. Samen koken, een film kijken of een wandeling in het park. Die momenten waren zeldzaam, maar Marjan koesterde ze.</p>

      <p>Ze had stiekem de hoop dat Peter ooit tot het inzicht zou komen dat het leven meer was dan facturen en vergaderingen. Dat hij op een dag tegen haar zou zeggen: "Weet je wat? Ik neem vrij. Gewoon, omdat ik bij je wil zijn.", maar dat moment kwam nooit.</p>

      <h3>Februari – het eerste teken</h3>
      <p>Het was een koude ochtend in februari. Peter was al vroeg vertrokken, zoals altijd. Om iets na tienen ging de telefoon. Marjan zag de naam van een collega van Peter in het scherm. Dat was ongewoon. "Marjan, je moet meteen komen, Peter is onwel geworden. Hij is onderweg naar het ziekenhuis."</p>

      <p>Toen ze hem eindelijk zag, lag hij bleek en aangesloten op allerlei slangen in een ziekenhuisbed. De arts vertelde dat hij een hartaanval had gehad en dat het kantje boord was geweest. Hij moest gedotterd worden en kreeg later ook nog een bypass-operatie. De oorzaak? Jarenlange stress, weinig rust, te veel werken, slechte eetgewoonten.</p>

      <h3>Een belofte… half gebroken</h3>
      <p>Na enkele weken revalidatie kwam Peter thuis. Hij zei dat hij het rustiger aan zou doen, hij zou minder gaan werken en beter op zichzelf letten. In het begin leek het te lukken, Marjan zag hem vaker aan tafel en hij ging zelfs een keer mee wandelen, zonder telefoon in zijn zak.</p>

      <p>Maar de oude patronen zijn hardnekkig en na een paar weken begon hij weer langer te werken. Eerst tot zes uur en later weer tot acht uur. Marjan voelde een mengeling van frustratie en bezorgdheid. Ze wilde hem vasthouden, hem beschermen tegen zichzelf. Maar hij wuifde haar zorgen weg. "Ik let wel op," zei hij dan.</p>

      <h2>Juli – de tweede slag</h2>
      <p>Op een warme dag in juli gebeurde het ondenkbare. Peter was op kantoor toen hij zich opnieuw onwel voelde. De ambulance was snel ter plaatse, maar deze keer mocht het niet baten. Nog voordat Marjan hem kon zien, was hij overleden aan een tweede, fatale hartaanval.</p>

      <p>Het nieuws sloeg in als een mokerslag. Marjan was op slag weduwe. Alle ruzies, alle gesprekken die ze nog wilden voeren, alle stille hoop op een ander leven samen, in één seconde was het weg.</p>

      <h3>De eerste weken – een leeg huis</h3>
      <p>De dagen na zijn overlijden waren een waas van telefoontjes, regelzaken, en een onwerkelijk gevoel. Marjan liep door hun huis en zag overal sporen van Peters leven: zijn jasje over de stoel, zijn halfgelezen krant, het koffiekopje op het aanrecht.</p>

      <p>De avonden waren het ergst, waar ze vroeger de hoop had dat hij misschien nog binnen zou komen lopen, wist ze nu zeker dat de stoel naast haar leeg zou blijven.</p>

      <h2>Het contact met Cenra Nederland</h2>
      <p>Na een paar weken vond Marjan de moed om hulp te zoeken. Ze kwam online op onze website terecht en stuurde een kort bericht: "Mijn man is net overleden. Ik weet niet hoe ik hiermee om moet gaan."</p>

      <p>Binnen een dag spraken we elkaar telefonisch. Niet om haar direct te overladen met vragen, maar om te luisteren, om te horen waar ze tegenaan liep. Marjan gaf aan dat ze het moeilijk vond om over Peter te praten met familie, omdat ze bang was dat ze hem steeds moesten verdedigen tegen opmerkingen als "Hij had ook minder moeten werken." Ze wilde steun zonder oordeel.</p>

      <h3>De begeleiding – stap voor stap</h3>
      <p>We begonnen met wekelijkse online sessies en enkele berichten tussendoor, als zij daar behoefte aan had, gericht op rouwverwerking maar ook op de dagelijkse praktische uitdagingen.</p>

      <p>Rouwen is niet alleen verdriet om het gemis; het is ook leren omgaan met de leegte die het verlies achterlaat in de structuur van je leven.</p>

      <p>Met Marjan werkten we onder andere aan:</p>
      <ul>
        <li>Het doorbreken van de stilte in huis op een manier die haar goed deed</li>
        <li>Het vinden van nieuwe rituelen op momenten die vroeger door Peter werden ingevuld</li>
        <li>Het herkennen en accepteren van schuldgevoelens ("Had ik hem harder moeten pushen om te stoppen?")</li>
      </ul>

      <h2>Terug naar het leven</h2>
      <p>Het was geen snel proces, er waren dagen dat Marjan vooruit leek te gaan, om vervolgens weer hard terug te vallen. Rouw kent geen rechte lijn. Maar langzaam, heel langzaam, vond ze een manier om Peters plek in haar hart te behouden, zonder dat het haar verlamde.</p>

      <p>Ze begon op zondag, hun oude vrije dag samen, een wandeling te maken. Soms alleen, soms met een vriendin. Ze ging weer koken voor zichzelf. Kleine stappen, maar ze betekenden veel.</p>

      <h2>Een boodschap voor anderen</h2>
      <p>Marjan deelde later met ons dat de begeleiding haar niet alleen door het ergste verdriet hielp, maar ook leerde dat liefde niet altijd betekent dat je elkaar elke dag ziet. Soms betekent het dat je elkaar op je eigen manier loslaat, maar toch bij je draagt.</p>

      <p>En terwijl haar verhaal uniek is, zit er een boodschap in die veel mensen zullen herkennen: Het leven is meer dan werken. En tijd samen is niet oneindig.</p>
    `,
    author: "Cenra Nederland Team",
    date: "Augustus 2025",
    publishedDate: "2025-08-20",
    readTime: "7 min",
    image: marjanBlogImagePath,
    alt: "Vrouw rouwt om verlies van partner - ondersteuning bij verwerking van plotseling verlies",
    tags: ["verlies partner", "werkverslaving", "schuldgevoelens", "weduwe", "rouwbegeleiding"],
    isPinned: false
  },
  {
    id: "4",
    slug: "een-kopje-koffie-voor-twee-rouw-op-leeftijd",
    title: "Een kopje koffie voor twee, over rouw op leeftijd en hoe we toch nabij konden zijn",
    metaTitle: "Een kopje koffie voor twee - Rouw op leeftijd | Nazorghulp voor Ouderen",
    metaDescription: "Het verhaal van 78-jarige Catharina na het verlies van haar zus. Ontdek hoe telefonische rouwbegeleiding ook op latere leeftijd waardevol kan zijn.",
    excerpt: "Ze waren zussen, maar eigenlijk meer dan dat. Maatjes, kameraden en vertrouwde elkaars zwijgen net zo goed als elkaars verhalen. Mevrouw Catharina was 78 toen haar oudere zus overleed.",
    content: `
      <h2>Zussen, maatjes en vertrouwelingen</h2>
      <p>Ze waren zussen, maar eigenlijk meer dan dat. Maatjes, kameraden en vertrouwde elkaars zwijgen net zo goed als elkaars verhalen.</p>

      <p>Mevrouw Catharina (laten we haar zo noemen) was 78 toen haar oudere zus overleed. 81 was ze geworden. Niet onverwacht, maar daarom niet minder hard.</p>

      <p>Want niemand had gezegd dat je op je bijna-tachtigste nog zo'n immens gat kon voelen. Dat je ineens niet meer wist waar je op dinsdagmiddag moest zijn, of met wie je stilletjes kon lachen om andermans bingo-tactieken.</p>

      <p>"Ze was er gewoon. Altijd. Al m'n hele leven," vertelde Catharina met die droge stem die oude mensen soms gebruiken als hun keel het begeeft voordat hun tranen dat doen.</p>

      <h2>Samen was het leven minder stil</h2>
      <p>Ze deden het rustig aan hoor, zeiden ze altijd. Geen verre reizen of drukke dagen. Maar samen naar het buurthuis, samen naar de markt en soms pakten ze zelfs de scootmobiel naar de dierentuin. Niet voor de dieren, zei Catharina, "maar omdat m'n zus altijd net als een aapje lachte bij de pinguïns."</p>

      <p>En toen was ze er niet meer.</p>

      <p>Catharina woonde nog zelfstandig. Geen kinderen. Geen partner. "We waren met z'n tweeën. En nu is het ineens stil," zei ze. De koffie smaakte nergens naar. De televisie werd harder. En de dagen langer.</p>

      <h3>Hulp zoeken op latere leeftijd</h3>
      <p>"Ik weet niet of ik dit goed doe, maar ik heb hulp nodig". Ze had ons nummer via een buurvrouw gekregen. Een aantekening op een briefje: Cenra Nederland, hulp bij verdriet, ook via telefoon. Geen WhatsApp, want daar snapte ze niks van. Geen e-mail, want "ik weet wel waar de knopjes zitten, maar niet wat ze doen."</p>

      <p>Ze belde. Rechtstreeks. "Ben ik bij de mensen van het verdriet?" vroeg ze voorzichtig. "Want ik zit er een beetje mee, geloof ik. Maar ik weet niet hoe dat moet, verwerken op mijn leeftijd. Het voelt zo… kinderachtig.". Dat was het begin.</p>

      <h2>Gewoon luisteren – geen apps, geen formulieren</h2>
      <p>We regelden dat één van onze begeleiders haar zou bellen. Elke week, op dinsdagmiddag. Dat vond ze prettig. Niet te vroeg, want "dan moet ik nog aankleden." En niet op maandag, want "dan is m'n hoofd altijd nog wat suf."</p>

      <p>Ze wilde geen gesprekken met grote woorden, geen therapie, geen zelfhulpboek. Ze wilde alleen praten over hoe gek het is om boodschappen te doen voor één persoon, over hoe de pinguïns in de dierentuin ineens niet meer grappig waren. En hoe stom ze zichzelf vond omdat ze ineens tegen de lege stoel in haar huiskamer begon te praten.</p>

      <p>We luisterden. Soms vroegen we iets, soms lieten we een stilte vallen waarin zij verder sprak. Soms was ze intens verdrietig en soms lachte ze ineens hardop, om iets kleins, iets wat haar zus vroeger zei. En elke week sloot ze af met: "Nou, ik weet niet wat je met al m'n gezwets moet, maar het lucht toch een beetje op."</p>

      <h2>Rouw kent geen leeftijdsgrens</h2>
      <p>Na een paar maanden zei ze ineens: "Ik ben nog steeds verdrietig hoor. Maar het is minder scherp. Alsof het verdriet niet meer overal tussen zit, maar gewoon z'n eigen stoel heeft gekregen in huis.", Ze begon af en toe weer naar het buurthuis te gaan. Zei dat ze één keer per week naar de markt moest van 'die app-mensen', daarmee bedoelde ze ons.</p>

      <p>We vroegen of ze wilde stoppen met de begeleiding. "Nou nee, nog niet hoor," zei ze. "Jullie zijn een beetje m'n klankbord en eerlijk gezegd... ook een beetje m'n vrienden.". We lieten haar weten dat we nog net zo lang naast haar blijven staan als zij wil.</p>

      <h2>Iemand om tegen aan te praten</h2>
      <p>Deze blog is voor haar. En voor alle mensen op leeftijd die wel rouwen, maar geen woorden meer vinden. Voor wie digitaal contact lastig is. Voor wie zich afvraagt of het nog 'mag', om zo intens verdriet te voelen op een leeftijd waarop anderen vooral bezig zijn met kleinkinderen en rust.</p>

      <p>Bij Cenra Nederland helpen we ook hen. Niet met druk, schema's of eisen. Maar met een rustige stem aan de telefoon. Met een vast aanspreekpunt en vooral met oprechte aandacht, zonder oordeel. Want of je nou 13 bent of 78, rouw vraagt altijd om iemand die blijft, zonder haast en zonder script. Gewoon iemand die luistert als jij het even niet meer weet.</p>
    `,
    author: "Cenra Nederland Team",
    date: "Juli 2025",
    publishedDate: "2025-07-25",
    readTime: "5 min",
    image: secondBlogImagePath,
    alt: "Oudere vrouw in rouw - telefonische begeleiding voor ouderen die verdriet verwerken",
    tags: ["ouderen", "verlies zus", "telefonische begeleiding", "eenzaamheid", "rouw op leeftijd"],
    isPinned: false
  }
];

// Helper functions
export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map(post => post.slug);
}

export function getRelatedBlogs(currentBlogId: string, count: number = 2): BlogPost[] {
  return blogPosts
    .filter(post => post.id !== currentBlogId)
    .slice(0, count);
}