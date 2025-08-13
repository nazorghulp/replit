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

// Blog data with SEO optimization
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "welkom-bij-xenra-nazorghulp-rouw-kent-geen-script",
    title: "Welkom bij Xenra Nazorghulp – Rouw kent geen script",
    metaTitle: "Welkom bij Xenra Nazorghulp - Persoonlijke Rouwbegeleiding | Nazorghulp.nl",
    metaDescription: "Ontdek Xenra Nazorghulp: flexibele en laagdrempelige rouwbegeleiding zonder wachtlijsten. Voor volwassenen en kinderen, op jouw manier en in jouw tempo.",
    excerpt: "Bij Xenra Nazorghulp geloven we dat rouw geen handleiding volgt. Er is geen 'standaardtraject' dat begint bij verdriet en eindigt bij verwerking. Iedereen beleeft verlies op zijn eigen manier.",
    content: `
      <h2>Wat betekent rouwbegeleiding bij Xenra?</h2>
      <p>Bij Xenra Nazorghulp geloven we dat rouw geen handleiding volgt. Er is geen "standaardtraject" dat begint bij verdriet en eindigt bij verwerking. Iedereen beleeft verlies op zijn eigen manier. Soms heftig, soms stil. Soms direct, en soms… pas een jaar later, midden in de supermarkt bij het zien van een blik bruine bonen dat aan oma doet denken.</p>

      <p>Wij zijn er voor al die vormen van rouw. Voor de ouder die worstelt met schuldgevoelens na een overlijden. Voor het kind dat niet begrijpt waarom iedereen "doorgaat met leven". Voor de volwassene die ineens in paniek raakt bij het horen van een liedje. En ja, zelfs voor de persoon die zich afvraagt of het oké is om blij te zijn ná een begrafenis.</p>

      <h2>Onze aanpak: flexibel en laagdrempelig</h2>
      <p>Xenra Nazorghulp is opgezet om een laagdrempelige, persoonlijke en flexibele vorm van begeleiding te bieden. Geen wachtlijsten. Geen volle wachtkamers. Geen verwijzingen. Bij ons kun je gewoon beginnen. Via WhatsApp, telefoon of beeldbellen. Op jouw manier. In jouw tempo.</p>

      <h3>Wat doen we precies?</h3>
      <p>We bieden begeleiding op maat, op afstand en afgestemd op de behoefte van de klant. Voor volwassenen werken we met maandpakketten, van één keer per week contact tot intensievere begeleiding.</p>

      <p>Voor kinderen en jongeren hebben we ook een maatpakket en maken we een eigen plan, waarbij ze indien gewenst anoniem contact kunnen houden met hun vaste begeleider.</p>

      <p>We werken met vaste contactmomenten, korte lijnen en praktische middelen zoals op maat gemaakt behandelplan, rouwkalenders en opdrachten die passen bij de situatie van de klant.</p>

      <p>Soms praten we over verlies. Soms juist niet. Soms gaat het gesprek over hoe je je brood weer proeft zonder schuldgevoel. Of over wat je zegt als iemand vraagt: "Ben je er al een beetje overheen?" Bij Xenra mag alles besproken worden, ook de dingen die je denkt dat 'niet normaal' zijn om te voelen.</p>

      <h2>Waarom deze blog-pagina?</h2>
      <p>De wereld van rouw is vaak stil. Onzichtbaar. En tegelijkertijd leeft het overal.</p>

      <p>Met deze blog willen we die stilte een beetje doorbreken. Niet met grote theorieën of belerende teksten, maar met verhalen. Verhalen van mensen zoals jij en ik. Verhalen over gemis, verwarring, troost, en soms zelfs een glimlach.</p>

      <p>Elke blog geeft een inkijkje in situaties die wij in onze begeleiding tegenkomen. Niet om in de schijnwerpers te staan, maar om te laten zien: je bent niet gek. En je bent zeker niet alleen.</p>

      <h3>Privacy en vertrouwelijkheid</h3>
      <p>Alle namen, leeftijden en situaties in onze blogs zijn aangepast om de privacy van onze klanten te waarborgen. Soms combineren we meerdere ervaringen tot één verhaal. Soms veranderen we het decor, het geslacht of de leeftijd.</p>

      <p>Wat altijd echt blijft, is de emotie, de worsteling en de stapjes vooruit. We doen dit met zorg en toestemming, en waar mogelijk in overleg. Want vertrouwelijkheid is voor ons geen regel, maar een vanzelfsprekendheid.</p>

      <h2>Ben jij er ook?</h2>
      <p>Misschien herken je jezelf in de verhalen. Misschien juist niet. Misschien ben je op zoek naar hulp, voor jezelf, of voor iemand anders. Misschien lees je dit gewoon uit nieuwsgierigheid.</p>

      <p>Wat je reden ook is: je bent welkom. En als jij ooit tegen iets aanloopt, groot of klein, weet dan dat je bij Xenra Nazorghulp terecht kunt. Ook als het gaat om dingen waarvan je denkt: "Zal ik me hier nou echt druk om maken?"</p>

      <p><strong>Dat is precies waarom we bestaan.</strong></p>

      <p><em>Welkom bij Xenra Nazorg.</em></p>
    `,
    author: "Xenra Team",
    date: "Juli 2025",
    publishedDate: "2025-07-15",
    readTime: "5 min",
    image: blogImagePath,
    alt: "Familie ondersteuning en rouwbegeleiding - Xenra Nazorghulp biedt warme begeleiding voor nabestaanden",
    isPinned: true,
    tags: ["rouwbegeleiding", "welkom", "flexibele aanpak", "laagdrempelig"]
  },
  {
    id: "2",
    slug: "de-stilte-na-het-lachen-het-verhaal-van-sanne",
    title: "\"De stilte na het lachen\" – Het verhaal van Sanne",
    metaTitle: "De stilte na het lachen - Het verhaal van Sanne | Rouwbegeleiding voor Jongeren",
    metaDescription: "Het verhaal van 16-jarige Sanne na het verlies van haar zus. Lees hoe Xenra Nazorghulp jongeren helpt met rouwverwerking en steun biedt in moeilijke tijden.",
    excerpt: "Het was een druilerige dinsdagmiddag in november, de lucht hing zwaar, alsof hij op elk moment zou scheuren. Binnen, in een klein rijtjeshuis in een rustige woonwijk, rook het nog naar warme chocolademelk.",
    content: `
      <h2>Een gewone dinsdagmiddag die alles veranderde</h2>
      <p>Het was een druilerige dinsdagmiddag in november, de lucht hing zwaar, alsof hij op elk moment zou scheuren. Binnen, in een klein rijtjeshuis in een rustige woonwijk, rook het nog naar warme chocolademelk. Het geluid van kinderstemmen had er die ochtend nog geklonken, toen twee zussen giechelend hun schoenen zochten om op tijd naar school te gaan. Nu was het stil. Onwerkelijk stil.</p>

      <p>Sanne (16) zat op de bank en staarde naar de lege mok op de salontafel. Die van haar zusje Lisa (13). De mok met de eenhoorn erop, waar Lisa altijd zo trots op was. "Ik begrijp het niet," fluisterde ze tegen haar moeder, die naast haar zat met rode ogen. "We hebben vanmorgen nog gelachen. Over dat stomme TikTok-filmpje. Ze deed die rare dans na, en ik zei dat ze eruitzag als een robot met kortsluiting."</p>

      <h2>Wanneer lachen plotseling voelt als verraad</h2>
      <p>Haar moeder knikte, maar zei niets. Wat viel er ook te zeggen? Een verkeersongeluk op weg naar school. Een vrachtwagen die door rood reed. Lisa had geen pijn gehad, zeiden ze in het ziekenhuis. Maar dat maakte het voor Sanne niet beter. Want hoe kun je nu nog lachen als je zusje er niet meer is? Hoe kun je ooit nog naar TikTok kijken zonder te denken aan haar laatste glimlach?</p>

      <p>De dagen erna was het huis vol mensen. Tantes, ooms, buren, klasgenoten. Iedereen wilde helpen, iedereen had iets lievs te zeggen. Maar Sanne voelde zich alleen. Want niemand begreep waarom ze zich zo schuldig voelde. Schuldig omdat zij wél veilig op school was aangekomen. Schuldig omdat ze die ochtend geïrriteerd was geweest toen Lisa weer te lang onder de douche stond.</p>

      <h3>De druk om "sterk" te zijn</h3>
      <p>"Je moet sterk zijn voor je ouders," zeiden mensen. "Je bent nu de enige dochter." Maar Sanne wilde helemaal niet de enige zijn. Ze wilde gewoon dat Lisa terugkwam, zodat ze konden ruziën over wie er het laatst televisie mocht kijken. Ze wilde schelden omdat Lisa weer haar favoriete trui had geleend zonder te vragen.</p>

      <p>Op school waren haar vrienden lief, maar onhandig. Ze wisten niet wat ze moesten zeggen, dus zeiden ze vaak niets. Of juist te veel. "Het komt wel goed," zei haar beste vriendin Emma. "De tijd heelt alle wonden." Sanne wilde schreeuwen: waarom zou ik willen dat het 'goed komt'? Waarom zou ik willen vergeten hoe ze eruitzag als ze lachte?</p>

      <h2>Hulp zoeken voor jongeren in rouw</h2>
      <p>Sannes moeder zocht hulp. De huisarts verwees naar een psycholoog, maar daar was een wachtlijst van vier maanden. "Ze moet nu hulp hebben," zei haar moeder tegen de praktijkassistente. "Ze eet bijna niet, ze slaapt niet, ze praat nauwelijks." Via internet vond ze Xenra Nazorghulp.</p>

      <p>Het eerste contact was via WhatsApp. Sanne mocht gewoon typen wat ze voelde, zonder afspraak, zonder dat ze haar verhaal aan een vreemde in een witte jas hoefde te vertellen. Haar begeleider, Marjan, stuurde geen lege zinnen terug zoals "het komt wel goed". In plaats daarvan schreef ze: "Wat naar dat je je zo alleen voelt. En wat logisch dat je je schuldig voelt. Dat hoort bij rouw, maar dat maakt het niet minder zwaar."</p>

      <h3>Anoniem contact: veiligheid om eerlijk te zijn</h3>
      <p>Voor Sanne was het belangrijk dat ze anoniem kon zijn. Ze hoefde haar echte naam niet te gebruiken, ze hoefde haar camera niet aan tijdens videogesprekken. Dat gaf haar de ruimte om eerlijk te zijn over de donkere gedachten die ze had. Over hoe ze soms wilde dat zij in plaats van Lisa in die auto had gezeten.</p>

      <p>Marjan nam die gedachten serieus, zonder Sanne het gevoel te geven dat ze "fout" was. Ze legde uit dat schuldgevoelens normaal zijn na zo'n verlies. En dat het oké is om boos te zijn – op Lisa, op het leven, op die vrachtwagenchauffeur die door rood reed.</p>

      <h2>Kleine stapjes naar vooruit</h2>
      <p>De begeleiding ging langzaam. Geen grote doorbraken, geen moment waarop Sanne ineens "beter" was. Maar er waren wel kleine dingen. De eerste keer dat ze kon lachen om een grapje zonder daarna te huilen. De eerste keer dat ze aan Lisa dacht zonder direct in paniek te raken.</p>

      <p>Marjan gaf Sanne opdrachten die pasten bij haar leeftijd en situatie. Ze mocht een brief schrijven aan Lisa met alles wat ze nog wilde zeggen. Ze maakte een fotoboek met hun mooiste herinneringen. En heel belangrijk: ze leerde dat rouw niet "over" gaat, maar dat je leert ermee te leven.</p>

      <h3>Contact met andere jongeren</h3>
      <p>Via Xenra kwam Sanne ook in contact met andere jongeren die verlies hadden meegemaakt. Niet in groepstherapie – daar was ze nog niet klaar voor – maar via een besloten chatgroep. Daar las ze verhalen van leeftijdsgenoten die hun vader, moeder of broer hadden verloren. Verhalen die haar lieten zien dat ze niet de enige was die worstelde met schuldgevoelens en boosheid.</p>

      <h2>Verder leven, niet vergeten</h2>
      <p>Een jaar later gaat het beter met Sanne. Ze gaat weer naar school, heeft weer contact met vrienden, kan soms zelfs lachen zonder zich schuldig te voelen. De mok van Lisa staat nog steeds op de salontafel, maar nu voelt dat niet meer als een mes in haar hart. Het voelt als een herinnering aan iemand die ze voor altijd zal missen, maar van wie ze de liefde mee mag nemen.</p>

      <p>Ze heeft nog steeds contact met Marjan, maar minder intensief. Een berichtje als het moeilijk is, een gesprekje rond Lisa's verjaardag of sterfdag. En dat voelt goed: weten dat er iemand is die haar verhaal kent en begrijpt.</p>

      <p>"Ik heb geleerd dat rouw niet linear is," vertelt Sanne. "Soms denk je dat het beter gaat, en dan huil je ineens omdat je haar parfum ruikt in de winkel. Maar dat is oké. Lisa hoort bij mij, en dat zal altijd zo blijven."</p>

      <h2>Rouwbegeleiding voor jongeren</h2>
      <p>Sannes verhaal laat zien waarom gespecialiseerde rouwbegeleiding voor jongeren zo belangrijk is. Tieners hebben andere behoeften dan volwassenen. Ze hebben behoefte aan:</p>
      
      <ul>
        <li>Laagdrempelig contact (WhatsApp, chat)</li>
        <li>Mogelijkheid tot anonimiteit</li>
        <li>Begeleiding die aansluit bij hun wereld</li>
        <li>Contact met leeftijdsgenoten</li>
        <li>Flexibiliteit in tempo en intensiteit</li>
      </ul>

      <p>Bij Xenra Nazorghulp begrijpen we dat jongeren anders rouwen dan volwassenen. We bieden daarom speciale begeleiding aan voor kinderen en tieners tot 18 jaar, altijd afgestemd op hun eigen tempo en behoeften.</p>
    `,
    author: "Xenra Team",
    date: "December 2024",
    publishedDate: "2024-12-15",
    readTime: "8 min",
    image: sanneBlogImagePath,
    alt: "Jonge vrouw in rouw - ondersteuning voor jongeren die een verlies hebben meegemaakt",
    tags: ["jongeren", "verlies zus", "schuldgevoelens", "anonieme begeleiding", "rouwverwerking"]
  }
  // More blog posts will be added here
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