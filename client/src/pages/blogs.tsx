import { useState } from "react";
import { ChevronDown, ChevronUp, Clock, User, Calendar, BookOpen, Sparkles, Home } from "lucide-react";
import HeadMeta from "@/components/seo/head-meta";
import blogImagePath from "@assets/gezin zonder man 2_1754326544869_optimized.png";
import marjanBlogImagePath from "@assets/man_1754850552660.png";
import secondBlogImagePath from "@assets/image_1754353490936_optimized.png";
import thirdBlogImagePath from "@assets/image_1754354797503_optimized.png";

// Blog data interface
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  isPinned?: boolean;
}

// Blog data - eerste blog wordt gepinned (vast)
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Welkom bij Xenra Nazorghulp – Rouw kent geen script",
    excerpt: "Bij Xenra Nazorghulp geloven we dat rouw geen handleiding volgt. Er is geen 'standaardtraject' dat begint bij verdriet en eindigt bij verwerking. Iedereen beleeft verlies op zijn eigen manier. Soms heftig, soms stil. Soms direct, en soms… pas een jaar later, midden in de supermarkt bij het zien van een blik bruine bonen dat aan oma doet denken.",
    content: `
      <p>Bij Xenra Nazorghulp geloven we dat rouw geen handleiding volgt. Er is geen "standaardtraject" dat begint bij verdriet en eindigt bij verwerking. Iedereen beleeft verlies op zijn eigen manier. Soms heftig, soms stil. Soms direct, en soms… pas een jaar later, midden in de supermarkt bij het zien van een blik bruine bonen dat aan oma doet denken.</p>

      <p>Wij zijn er voor al die vormen van rouw. Voor de ouder die worstelt met schuldgevoelens na een overlijden. Voor het kind dat niet begrijpt waarom iedereen "doorgaat met leven". Voor de volwassene die ineens in paniek raakt bij het horen van een liedje. En ja, zelfs voor de persoon die zich afvraagt of het oké is om blij te zijn ná een begrafenis.</p>

      <p>Xenra Nazorghulp is opgezet om een laagdrempelige, persoonlijke en flexibele vorm van begeleiding te bieden. Geen wachtlijsten. Geen volle wachtkamers. Geen verwijzingen. Bij ons kun je gewoon beginnen. Via WhatsApp, telefoon of beeldbellen. Op jouw manier. In jouw tempo.</p>

      <h3>Wat doen we?</h3>
      <p>We bieden begeleiding op maat, op afstand en afgestemd op de behoefte van de klant. Voor volwassenen werken we met maandpakketten, van één keer per week contact tot intensievere begeleiding.</p>

      <p>Voor kinderen en jongeren hebben we ook een maatpakket en maken we een eigen plan, waarbij ze indien gewenst anoniem contact kunnen houden met hun vaste begeleider.</p>

      <p>We werken met vaste contactmomenten, korte lijnen en praktische middelen zoals op maat gemaakt behandelplan, rouwkalenders en opdrachten die passen bij de situatie van de klant.</p>

      <p>Soms praten we over verlies. Soms juist niet. Soms gaat het gesprek over hoe je je brood weer proeft zonder schuldgevoel. Of over wat je zegt als iemand vraagt: "Ben je er al een beetje overheen?" Bij Xenra mag alles besproken worden, ook de dingen die je denkt dat 'niet normaal' zijn om te voelen.</p>

      <h3>Waarom een blog-pagina?</h3>
      <p>De wereld van rouw is vaak stil. Onzichtbaar. En tegelijkertijd leeft het overal.</p>

      <p>Met deze blog willen we die stilte een beetje doorbreken. Niet met grote theorieën of belerende teksten, maar met verhalen. Verhalen van mensen zoals jij en ik. Verhalen over gemis, verwarring, troost, en soms zelfs een glimlach.</p>

      <p>Elke blog geeft een inkijkje in situaties die wij in onze begeleiding tegenkomen. Niet om in de schijnwerpers te staan, maar om te laten zien: je bent niet gek. En je bent zeker niet alleen.</p>

      <h3>Wat je moet weten over de verhalen</h3>
      <p>Alle namen, leeftijden en situaties in onze blogs zijn aangepast om de privacy van onze klanten te waarborgen. Soms combineren we meerdere ervaringen tot één verhaal. Soms veranderen we het decor, het geslacht of de leeftijd.</p>

      <p>Wat altijd echt blijft, is de emotie, de worsteling en de stapjes vooruit. We doen dit met zorg en toestemming, en waar mogelijk in overleg. Want vertrouwelijkheid is voor ons geen regel, maar een vanzelfsprekendheid.</p>

      <h3>En jij?</h3>
      <p>Misschien herken je jezelf in de verhalen. Misschien juist niet. Misschien ben je op zoek naar hulp, voor jezelf, of voor iemand anders. Misschien lees je dit gewoon uit nieuwsgierigheid.</p>

      <p>Wat je reden ook is: je bent welkom. En als jij ooit tegen iets aanloopt, groot of klein, weet dan dat je bij Xenra Nazorghulp terecht kunt. Ook als het gaat om dingen waarvan je denkt: "Zal ik me hier nou echt druk om maken?"</p>

      <p><strong>Dat is precies waarom we bestaan.</strong></p>

      <p><em>Welkom bij Xenra Nazorg.</em></p>
    `,
    author: "Xenra Team",
    date: "Juli 2025",
    readTime: "5 min",
    image: blogImagePath,
    isPinned: true
  },
  {
    id: "2",
    title: "\"Een leven in uren\" – het verhaal van Marjan",
    excerpt: "Een huwelijk met tijdtekort. Marjan (47) en Peter (49) waren al meer dan twintig jaar getrouwd. Peter was ondernemer in hart en nieren, een workaholic in de puurste vorm. Zes dagen per week werkte hij van 's ochtends zeven uur tot soms tien uur 's avonds.",
    content: `
      <h3>Een huwelijk met tijdtekort</h3>
      <p>Marjan (47) en Peter (49) waren al meer dan twintig jaar getrouwd. In die jaren hadden ze al veel meegemaakt: een klein appartement, de eerste jaren van financiële krapte, het opbouwen van een bedrijf, de eerste successen.</p>

      <p>Peter was ondernemer in hart en nieren. Niet zo'n ondernemer die het ook rustig aan kon doen, hij was een workaholic in de puurste vorm. Zes dagen per week werkte hij van 's ochtends zeven uur tot soms tien uur 's avonds. En dat zonder pauze, zonder avondwandeling of zonder zomaar eens samen op de bank zitten.</p>

      <p>Eten deed hij vaak op kantoor, met een stapel papieren naast zijn bord. Als Marjan vroeg of hij op tijd thuis kwam, was het antwoord meestal voorspelbaar: "Als ik dat doe, ligt het werk morgen nog hoger opgestapeld."</p>

      <p>Marjan probeerde het soms voorzichtig aan te kaarten. Ze miste hem, ze miste de man met wie ze ooit lange fietstochten maakte, die spontaan een terrasje pakte. Maar die gesprekken liepen bijna altijd uit op ruzie. "Je eet er toch ook van?" en "Wie betaalt jouw kleren?" Het waren harde woorden, maar ze kwamen van een man die nooit leerde stilstaan. Een man die dacht dat liefde tonen hetzelfde was als zorgen voor een volle koelkast en een veilig dak boven hun hoofd.</p>

      <h3>Kleine momenten, groot geluk</h3>
      <p>Toch hield Marjan intens veel van Peter. Juist omdat ze wist dat achter die harde werkmentaliteit een man zat die haar, op zijn manier, liefhad. In de schaarse vrije uren, vaak op zondagmiddag, deden ze kleine dingen. Samen koken, een film kijken of een wandeling in het park. Die momenten waren zeldzaam, maar Marjan koesterde ze.</p>

      <p>Ze had stiekem de hoop dat Peter ooit tot het inzicht zou komen dat het leven meer was dan facturen en vergaderingen. Dat hij op een dag tegen haar zou zeggen: "Weet je wat? Ik neem vrij. Gewoon, omdat ik bij je wil zijn.", maar dat moment kwam nooit.</p>

      <h3>Februari – het eerste teken</h3>
      <p>Het was een koude ochtend in februari. Peter was al vroeg vertrokken, zoals altijd. Om iets na tienen ging de telefoon. Marjan zag de naam van een collega van Peter in het scherm. Dat was ongewoon. "Marjan, je moet meteen komen, Peter is onwel geworden. Hij is onderweg naar het ziekenhuis."</p>

      <p>Toen ze hem eindelijk zag, lag hij bleek en aangesloten op allerlei slangen in een ziekenhuisbed. De arts vertelde dat hij een hartaanval had gehad en dat het kantje boord was geweest. Hij moest gedotterd worden en kreeg later ook nog een bypass-operatie. De oorzaak? Jarenlange stress, weinig rust, te veel werken, slechte eetgewoonten. Het was een confronterende lijst.</p>

      <h3>Een belofte… half gebroken</h3>
      <p>Na enkele weken revalidatie kwam Peter thuis. Hij zei dat hij het rustiger aan zou doen, hij zou minder gaan werken en beter op zichzelf letten. In het begin leek het te lukken, Marjan zag hem vaker aan tafel en hij ging zelfs een keer mee wandelen, zonder telefoon in zijn zak.</p>

      <p>Maar de oude patronen zijn hardnekkig en na een paar weken begon hij weer langer te werken. Eerst tot zes uur en later weer tot acht uur. Marjan voelde een mengeling van frustratie en bezorgdheid. Ze wilde hem vasthouden, hem beschermen tegen zichzelf. Maar hij wuifde haar zorgen weg. "Ik let wel op," zei hij dan.</p>

      <h3>Juli – de tweede slag</h3>
      <p>Op een warme dag in juli gebeurde het ondenkbare. Peter was op kantoor toen hij zich opnieuw onwel voelde. De ambulance was snel ter plaatse, maar deze keer mocht het niet baten. Nog voordat Marjan hem kon zien, was hij overleden aan een tweede, fatale hartaanval.</p>

      <p>Het nieuws sloeg in als een mokerslag. Marjan was op slag weduwe. Alle ruzies, alle gesprekken die ze nog wilden voeren, alle stille hoop op een ander leven samen, in één seconde was het weg.</p>

      <h3>De eerste weken – een leeg huis</h3>
      <p>De dagen na zijn overlijden waren een waas van telefoontjes, regelzaken, en een onwerkelijk gevoel. Marjan liep door hun huis en zag overal sporen van Peters leven: zijn jasje over de stoel, zijn halfgelezen krant, het koffiekopje op het aanrecht.</p>

      <p>De avonden waren het ergst, waar ze vroeger de hoop had dat hij misschien nog binnen zou komen lopen, wist ze nu zeker dat de stoel naast haar leeg zou blijven.</p>

      <h3>Het contact met Xenra Nazorg</h3>
      <p>Na een paar weken vond Marjan de moed om hulp te zoeken. Ze kwam online op onze website terecht en stuurde een kort bericht: "Mijn man is net overleden. Ik weet niet hoe ik hiermee om moet gaan."</p>

      <p>Binnen een dag spraken we elkaar telefonisch. Niet om haar direct te overladen met vragen, maar om te luisteren, om te horen waar ze tegenaan liep. Marjan gaf aan dat ze het moeilijk vond om over Peter te praten met familie, omdat ze bang was dat ze hem steeds moesten verdedigen tegen opmerkingen als "Hij had ook minder moeten werken." Ze wilde steun zonder oordeel.</p>

      <h3>De begeleiding – stap voor stap</h3>
      <p>We begonnen met wekelijkse online sessies en enkele berichten tussendoor, als zij daar behoefte aan had, gericht op rouwverwerking maar ook op de dagelijkse praktische uitdagingen.</p>

      <p>Rouwen is niet alleen verdriet om het gemis; het is ook leren omgaan met de leegte die het verlies achterlaat in de structuur van je leven.</p>

      <p>Met Marjan werkten we onder andere aan:</p>
      <ul>
        <li>Het doorbreken van de stilte in huis op een manier die haar goed deed.</li>
        <li>Het vinden van nieuwe rituelen op momenten die vroeger door Peter werden ingevuld.</li>
        <li>Het herkennen en accepteren van schuldgevoelens ("Had ik hem harder moeten pushen om te stoppen?").</li>
      </ul>

      <h3>Terug naar het leven</h3>
      <p>Het was geen snel proces, er waren dagen dat Marjan vooruit leek te gaan, om vervolgens weer hard terug te vallen. Rouw kent geen rechte lijn. Maar langzaam, heel langzaam, vond ze een manier om Peters plek in haar hart te behouden, zonder dat het haar verlamde.</p>

      <p>Ze begon op zondag, hun oude vrije dag samen, een wandeling te maken. Soms alleen, soms met een vriendin. Ze ging weer koken voor zichzelf. Kleine stappen, maar ze betekenden veel.</p>

      <h3>Een boodschap</h3>
      <p>Marjan deelde later met ons dat de begeleiding haar niet alleen door het ergste verdriet hielp, maar ook leerde dat liefde niet altijd betekent dat je elkaar elke dag ziet. Soms betekent het dat je elkaar op je eigen manier loslaat, maar toch bij je draagt.</p>

      <p>En terwijl haar verhaal uniek is, zit er een boodschap in die veel mensen zullen herkennen: Het leven is meer dan werken. En tijd samen is niet oneindig.</p>
    `,
    author: "Xenra Team",
    date: "Augustus 2025",
    readTime: "7 min",
    image: marjanBlogImagePath,
    isPinned: false
  },
  {
    id: "4",
    title: "Een kopje koffie voor twee, over rouw op leeftijd en hoe we toch nabij konden zijn",
    excerpt: "Ze waren zussen, maar eigenlijk meer dan dat. Maatjes, kameraden en vertrouwde elkaars zwijgen net zo goed als elkaars verhalen. Mevrouw Catharina was 78 toen haar oudere zus overleed. 81 was ze geworden. Niet onverwacht, maar daarom niet minder hard.",
    content: `
      <p>Ze waren zussen, maar eigenlijk meer dan dat. Maatjes, kameraden en vertrouwde elkaars zwijgen net zo goed als elkaars verhalen.</p>

      <p>Mevrouw Catharina (laten we haar zo noemen) was 78 toen haar oudere zus overleed. 81 was ze geworden. Niet onverwacht, maar daarom niet minder hard.</p>

      <p>Want niemand had gezegd dat je op je bijna-tachtigste nog zo'n immens gat kon voelen. Dat je ineens niet meer wist waar je op dinsdagmiddag moest zijn, of met wie je stilletjes kon lachen om andermans bingo-tactieken.</p>

      <p>"Ze was er gewoon. Altijd. Al m'n hele leven," vertelde Catharina met die droge stem die oude mensen soms gebruiken als hun keel het begeeft voordat hun tranen dat doen.</p>

      <h3>Samen was het leven minder stil</h3>
      <p>Ze deden het rustig aan hoor, zeiden ze altijd. Geen verre reizen of drukke dagen. Maar samen naar het buurthuis, samen naar de markt en soms pakten ze zelfs de scootmobiel naar de dierentuin. Niet voor de dieren, zei Catharina, "maar omdat m'n zus altijd net als een aapje lachte bij de pinguïns."</p>

      <p>En toen was ze er niet meer.</p>

      <p>Catharina woonde nog zelfstandig. Geen kinderen. Geen partner. "We waren met z'n tweeën. En nu is het ineens stil," zei ze. De koffie smaakte nergens naar. De televisie werd harder. En de dagen langer.</p>

      <p>"Ik weet niet of ik dit goed doe, maar ik heb hulp nodig". Ze had ons nummer via een buurvrouw gekregen. Een aantekening op een briefje: Xenra Nazorghulp, hulp bij verdriet, ook via telefoon. Geen WhatsApp, want daar snapte ze niks van. Geen e-mail, want "ik weet wel waar de knopjes zitten, maar niet wat ze doen."</p>

      <p>Ze belde. Rechtstreeks. "Ben ik bij de mensen van het verdriet?" vroeg ze voorzichtig. "Want ik zit er een beetje mee, geloof ik. Maar ik weet niet hoe dat moet, verwerken op mijn leeftijd. Het voelt zo… kinderachtig.". Dat was het begin.</p>

      <h3>Gewoon luisteren – geen apps, geen formulieren</h3>
      <p>We regelden dat één van onze begeleiders haar zou bellen. Elke week, op dinsdagmiddag. Dat vond ze prettig. Niet te vroeg, want "dan moet ik nog aankleden." En niet op maandag, want "dan is m'n hoofd altijd nog wat suf."</p>

      <p>Ze wilde geen gesprekken met grote woorden, geen therapie, geen zelfhulpboek. Ze wilde alleen praten over hoe gek het is om boodschappen te doen voor één persoon, over hoe de pinguïns in de dierentuin ineens niet meer grappig waren. En hoe stom ze zichzelf vond omdat ze ineens tegen de lege stoel in haar huiskamer begon te praten.</p>

      <p>We luisterden. Soms vroegen we iets, soms lieten we een stilte vallen waarin zij verder sprak. Soms was ze intens verdrietig en soms lachte ze ineens hardop, om iets kleins, iets wat haar zus vroeger zei. En elke week sloot ze af met: "Nou, ik weet niet wat je met al m'n gezwets moet, maar het lucht toch een beetje op."</p>

      <h3>Rouw kent geen leeftijdsgrens</h3>
      <p>Na een paar maanden zei ze ineens: "Ik ben nog steeds verdrietig hoor. Maar het is minder scherp. Alsof het verdriet niet meer overal tussen zit, maar gewoon z'n eigen stoel heeft gekregen in huis.", Ze begon af en toe weer naar het buurthuis te gaan. Zei dat ze één keer per week naar de markt moest van 'die app-mensen', daarmee bedoelde ze ons.</p>

      <p>We vroegen of ze wilde stoppen met de begeleiding. "Nou nee, nog niet hoor," zei ze. "Jullie zijn een beetje m'n klankbord en eerlijk gezegd... ook een beetje m'n vrienden.". We lieten haar weten dat we nog net zo lang naast haar blijven staan als zij wil.</p>

      <h3>Iemand om tegen aan te praten</h3>
      <p>Deze blog is voor haar. En voor alle mensen op leeftijd die wel rouwen, maar geen woorden meer vinden. Voor wie digitaal contact lastig is. Voor wie zich afvraagt of het nog 'mag', om zo intens verdriet te voelen op een leeftijd waarop anderen vooral bezig zijn met kleinkinderen en rust.</p>

      <p>Bij Xenra Nazorghulp helpen we ook hen. Niet met druk, schema's of eisen. Maar met een rustige stem aan de telefoon. Met een vast aanspreekpunt en vooral met oprechte aandacht, zonder oordeel. Want of je nou 13 bent of 78, rouw vraagt altijd om iemand die blijft, zonder haast en zonder script. Gewoon iemand die luistert als jij het even niet meer weet.</p>
    `,
    author: "Xenra Team",
    date: "Juli 2025",
    readTime: "5 min",
    image: secondBlogImagePath,
    isPinned: false
  },
  {
    id: "5",
    title: "\"Ik wil helemaal niks\", een meisje, een scherm en een stille verbinding",
    excerpt: "Soms komt hulp niet binnen via een schoolpsycholoog, een verwijzing of een intakegesprek. Soms komt het binnen via een appje, geen naam, geen gezicht en geen druk. Gewoon een scherm en de vrijheid om te reageren, of niet. Dat was het begin van ons contact met haar.",
    content: `
      <p>Soms komt hulp niet binnen via een schoolpsycholoog, een verwijzing of een intakegesprek. Soms komt het binnen via een appje, geen naam, geen gezicht en geen druk. Gewoon een scherm en de vrijheid om te reageren, of niet.</p>

      <p>Dat was het begin van ons contact met haar. We noemen haar hier Laura, ze was dertien jaar en volledig op slot sinds haar vader onverwacht overleed.</p>

      <h3>Alles en iedereen was fout</h3>
      <p>Laura was volgens haar moeder altijd een gevoelig kind geweest. Stil, maar niet gesloten en serieus, maar warm. Tot het moment waarop haar vader, haar held, van de ene op de andere dag niet meer thuiskwam.</p>

      <p>Van verdriet was op het eerste gezicht nauwelijks sprake. In plaats daarvan kwam er boosheid. Laura was áltijd boos. Op haar moeder, op school, op vriendinnen die iets verkeerd zeiden of op zichzelf.</p>

      <p>"Ze schreeuwt, slaat met deuren, weigert naar school te gaan," vertelde haar moeder later. "Ik ben met school, huisarts, de praktijkondersteuner en jeugdzorg in gesprek… maar hoe harder ik aan de bel trek, hoe harder zij zich afsluit."</p>

      <p>De moeder wilde dat Laura professionele hulp zou krijgen. Maar Laura wilde niks, "Ze zei letterlijk: 'Als je iemand naar me toe stuurt, praat ik nooit meer.'" En dat meende ze.</p>

      <h3>Vanuit wanhoop kwam ze bij Xenra</h3>
      <p>De moeder vond ons via internet en ze bekeek de website van Xenra Nazorghulp en merkte dat we ook op afstand werken, via WhatsApp, zonder verplicht sessies. Ze stuurde ons een lange mail, vol frustratie en verdriet. Niet voor zichzelf, maar omdat ze haar dochter niet meer herkende.</p>

      <p>"Ik weet niet of dit mag, of dit werkt… maar kunnen jullie contact leggen met haar, zonder dat ze weet wie of wat jullie zijn?". We stelden voor om het volledig anoniem te doen. Geen openlijke sessies, geen 'dit is Xenra', gewoon neutraal, een anoniem appmaatje.</p>

      <p>Een onbekende die niks van haar wilde, maar wél altijd bereikbaar was. We gaven geen valse informatie, maar zeiden ook niet wie we waren. Alleen dat we 'iemand' waren die even naast haar wilde staan. Dat ze niks hoefde. Alleen lezen was al oké.</p>

      <h3>De stilte die maanden duurde</h3>
      <p>We stuurden een eerste bericht, toen nog één en een derde. Niet dwingend, geen vragen. Gewoon korte berichtjes: "Ik weet dat je geen zin hebt in mensen. Maar soms is het oké als iemand gewoon even stil bij je zit."</p>

      <p>Dagen gingen voorbij en weken verstreken. We hadden afgesproken: we sturen alleen om de paar dagen iets, nooit opdringerig maar wel trouw. Een keer stuurden we: "Soms is het fijn als iemand even niks zegt, maar wél blijft."</p>

      <p>En toen, uit het niets, kwam er een antwoord: "Je bent irritant, maar minder irritant dan de rest.". Het was het begin.</p>

      <h3>Stap voor stap, in haar tempo</h3>
      <p>Na die eerste reactie bleef het stil, echter wij stopten niet. Steeds weer kleine berichtjes, soms iets over hoe moeilijk boosheid is en een andere keer iets luchtigs. Soms een vraag: "Wat zou jij doen als je even onzichtbaar kon zijn?"</p>

      <p>Langzaam veranderde de toon van haar berichten. Eerst alleen korte woorden en toen wat zinnen. Later kwamen de emoticons. En toen, ineens, stuurde ze: "Ik weet niet waarom ik nog leef. Maar ik wil niet dood zijn. Alleen gewoon weg."</p>

      <p>We schrokken niet, dat was belangrijk. We gingen er niet bovenop zitten en gingen geen zwaar gesprek aan. Wel gaven we erkenning en vooral: blijven, blijven, blijven. We luisterden en gaven woorden waar zij ze nog niet had. Vingen haar woede op zonder terug te slaan en toen ze ineens vroeg: "Wie ben jij eigenlijk?" zeiden we: "Ik ben iemand die het oké vindt dat jij je niet oké voelt, iemand die even blijft. Meer hoef je niet te weten.". Ze accepteerde het.</p>

      <h3>De eerste barstjes</h3>
      <p>Na een paar maanden vertelde haar moeder dat het gedrag van Laura begon te veranderen. Niet ineens, maar geleidelijk. Ze wilde zelf naar school, ze schold minder en er kwamen momenten waarop ze haar moeder zelfs een knuffel gaf, zomaar, uit zichzelf.</p>

      <p>En op een dag stuurde ze ons: "Ik denk dat ik het een beetje kan, niet praten over alles. Maar wel snappen dat ik niet gek ben."</p>

      <p>Ze begon vragen te stellen. Over rouw, over boosheid, over waarom mensen zeggen dat het 'beter wordt', terwijl dat nergens op slaat. We gaven geen grote antwoorden, alleen kleine stukjes houvast. "Je hoeft het niet beter te maken. Alleen leefbaar."</p>

      <h3>Een relatie zonder gezicht, maar met vertrouwen</h3>
      <p>Uiteindelijk bouwden we een band op, zonder onze echte namen te delen en zonder dat zij wist wie wij waren. En dat hoefde ook niet, voor haar was het genoeg dat we er waren. Op haar tempo, zonder oordeel en zonder plan.</p>

      <p>Langzaam kreeg ze woorden voor wat ze voelde. Ze durfde te zeggen: "Ik ben bang dat ik ook ga verdwijnen." en kon daarna lachen om haar eigen opmerking. We leerden haar niks nieuws, maar we hielpen haar herinneren dat emoties ruimte mogen hebben, ook als je dertien bent en boos bent op de hele wereld.</p>

      <h3>De les van Laura</h3>
      <p>Wat Laura ons liet zien, is dat begeleiding niet altijd begint met een intakeformulier of een zorgplan. Soms begint het met een berichtje zonder afzender, zonder eisen en zonder verwachtingen.</p>

      <p>Dat is waarom we bij Xenra Nazorghulp ook dit soort trajecten doen. Niet alles hoeft in hokjes te passen en zeker niet als het gaat om kinderen en jongeren die rouwen op hun eigen, ongrijpbare manier.</p>

      <p>We zien het als onze taak om erbij te zijn, desnoods in stilte en desnoods anoniem. Zolang het maar bijdraagt aan dat ene doel: dat iemand op een dag zegt, zoals Laura zei: "Het is nog steeds rot. Maar ik ben niet meer alleen."</p>
    `,
    author: "Xenra Team",
    date: "Augustus 2025",
    readTime: "7 min",
    image: thirdBlogImagePath,
    isPinned: false
  }
];

function BlogCard({ post }: { post: BlogPost }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${post.isPinned ? 'border-4 border-orange-primary' : ''}`}>
      {post.isPinned && (
        <div className="bg-orange-primary text-white px-6 py-2 text-center font-bold uppercase tracking-wide">
          📌 Uitgelichte Blog
        </div>
      )}
      
      {/* Blog Content with Side-by-Side Layout */}
      <div className="p-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Blog Image - Left Side */}
          <div className="md:w-1/3 flex-shrink-0">
            <div className="relative h-48 md:h-64 overflow-hidden rounded-xl">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center text-white text-xs">
                  <span className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold text-purple-primary mb-3 leading-tight">
              {post.title}
            </h2>
            
            {/* Preview Content */}
            <div className="text-gray-700 leading-relaxed text-sm md:text-base">
              {!isExpanded ? (
                <>
                  <p className="mb-4">{post.excerpt}</p>
                  <button
                    onClick={toggleExpansion}
                    className="inline-flex items-center space-x-2 text-orange-primary hover:text-orange-dark font-semibold transition-colors duration-200 group"
                  >
                    <span>lees verder</span>
                    <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform duration-200" />
                  </button>
                </>
              ) : (
                <>
                  <div 
                    className="prose prose-sm md:prose-base max-w-none mb-6"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  
                  {/* Homepage Link */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-orange-primary">
                    <a 
                      href="/"
                      className="inline-flex items-center space-x-2 text-purple-primary hover:text-orange-primary font-semibold transition-colors duration-200 group"
                    >
                      <Home size={18} className="group-hover:scale-110 transition-transform duration-200" />
                      <span>www.nazorghulp.nl</span>
                    </a>
                  </div>
                  
                  <button
                    onClick={toggleExpansion}
                    className="inline-flex items-center space-x-2 text-orange-primary hover:text-orange-dark font-semibold transition-colors duration-200 group"
                  >
                    <span>inklapppen</span>
                    <ChevronUp size={18} className="group-hover:-translate-y-1 transition-transform duration-200" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Blogs() {
  const pinnedPosts = blogPosts.filter(post => post.isPinned);
  const regularPosts = blogPosts.filter(post => !post.isPinned).sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Xenra Nazorghulp Blog",
    "description": "Persoonlijke verhalen en inzichten over rouwbegeleiding en verliesverwerking",
    "url": "https://nazorghulp.nl/blogs",
    "inLanguage": "nl-NL",
    "publisher": {
      "@type": "Organization",
      "name": "Xenra Nazorghulp"
    }
  };

  return (
    <div className="min-h-screen">
      <HeadMeta 
        title="Blogs & Verhalen - Xenra Nazorghulp"
        description="Ontdek waardevolle artikelen, persoonlijke verhalen en professionele inzichten die je kunnen helpen tijdens je rouwproces. Praktische ondersteuning en verbondenheid."
        keywords="rouwbegeleiding blog, nazorg verhalen, rouw tips, verlies verwerken, rouwproces inzichten"
        url="https://nazorghulp.nl/blogs"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(91, 33, 182, 0.8), rgba(251, 146, 60, 0.6)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200')`
          }}
        >
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 border border-white/20">
                <BookOpen size={64} className="text-orange-light" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Blogs & <span className="text-orange-light">Verhalen</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Inzichten, tips en verhalen over het rouwproces
            </p>
            
            <div className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
              Ontdek waardevolle artikelen, persoonlijke verhalen en professionele inzichten die je kunnen helpen tijdens je rouwproces. Onze blogs bieden praktische ondersteuning en een gevoel van verbondenheid.
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-8 h-8 text-orange-light/30">
              <Sparkles size={32} />
            </div>
            <div className="absolute bottom-1/3 right-1/4 w-6 h-6 text-white/20">
              <BookOpen size={24} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Pinned Blogs Section */}
        {pinnedPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-purple-primary mb-8 text-center">
              Uitgelichte Blog
            </h2>
            <div className="space-y-12">
              {pinnedPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* Regular Blogs Section */}
        {regularPosts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-purple-primary mb-8 text-center">
              Recente Blogs
            </h2>
            <div className="space-y-12">
              {regularPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {blogPosts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-purple-primary mb-4">
              Binnenkort meer blogs
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We werken aan het toevoegen van meer waardevolle inhoud. 
              Kom binnenkort terug voor nieuwe artikelen en inzichten.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-purple-primary to-purple-soft rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Hulp nodig bij je rouwproces?
          </h3>
          <p className="mb-6 opacity-90">
            Onze professionele rouwbegeleiders staan klaar om je persoonlijk te ondersteunen.
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-primary hover:bg-orange-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-200"
          >
            Neem Contact Op
          </a>
        </div>
      </section>
    </div>
  );
}