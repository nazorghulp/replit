import { useState } from "react";
import { ChevronDown, ChevronUp, Clock, User, Calendar, BookOpen, Sparkles } from "lucide-react";
import HeadMeta from "@/components/seo/head-meta";
import blogImagePath from "@assets/gezin zonder man 2_1754326544869.png";

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

      <p>Wij zijn er voor al die vormen van rouw. Voor de ouder die worstelt met schuldgevoelens na een overlijden. Voor het kind dat niet begrijpt waarom iedereen "doorgaat met leven". Voor de volwassene die ineens in paniek raakt bij het horen van een liedje. En ja — zelfs voor de persoon die zich afvraagt of het oké is om blij te zijn ná een begrafenis.</p>

      <p>Xenra Nazorghulp is opgezet om een laagdrempelige, persoonlijke en flexibele vorm van begeleiding te bieden. Geen wachtlijsten. Geen volle wachtkamers. Geen verwijzingen. Bij ons kun je gewoon beginnen. Via WhatsApp, telefoon of beeldbellen. Op jouw manier. In jouw tempo.</p>

      <h3>Wat doen we?</h3>
      <p>We bieden begeleiding op maat, op afstand en afgestemd op de behoefte van de klant. Voor volwassenen werken we met maandpakketten — van één keer per week contact tot intensievere begeleiding.</p>

      <p>Voor kinderen en jongeren hebben we ook een maatpakket en maken we een eigen plan, waarbij ze indien gewenst anoniem contact kunnen houden met hun vaste begeleider.</p>

      <p>We werken met vaste contactmomenten, korte lijnen en praktische middelen zoals op maat gemaakt behandelplan, rouwkalenders en opdrachten die passen bij de situatie van de klant.</p>

      <p>Soms praten we over verlies. Soms juist niet. Soms gaat het gesprek over hoe je je brood weer proeft zonder schuldgevoel. Of over wat je zegt als iemand vraagt: "Ben je er al een beetje overheen?" Bij Xenra mag alles besproken worden — ook de dingen die je denkt dat 'niet normaal' zijn om te voelen.</p>

      <h3>Waarom een blog-pagina?</h3>
      <p>De wereld van rouw is vaak stil. Onzichtbaar. En tegelijkertijd leeft het overal.</p>

      <p>Met deze blog willen we die stilte een beetje doorbreken. Niet met grote theorieën of belerende teksten, maar met verhalen. Verhalen van mensen zoals jij en ik. Verhalen over gemis, verwarring, troost, en soms zelfs een glimlach.</p>

      <p>Elke blog geeft een inkijkje in situaties die wij in onze begeleiding tegenkomen. Niet om in de schijnwerpers te staan, maar om te laten zien: je bent niet gek. En je bent zeker niet alleen.</p>

      <h3>Wat je moet weten over de verhalen</h3>
      <p>Alle namen, leeftijden en situaties in onze blogs zijn aangepast om de privacy van onze klanten te waarborgen. Soms combineren we meerdere ervaringen tot één verhaal. Soms veranderen we het decor, het geslacht of de leeftijd.</p>

      <p>Wat altijd echt blijft, is de emotie, de worsteling en de stapjes vooruit. We doen dit met zorg en toestemming, en waar mogelijk in overleg. Want vertrouwelijkheid is voor ons geen regel, maar een vanzelfsprekendheid.</p>

      <h3>En jij?</h3>
      <p>Misschien herken je jezelf in de verhalen. Misschien juist niet. Misschien ben je op zoek naar hulp — voor jezelf, of voor iemand anders. Misschien lees je dit gewoon uit nieuwsgierigheid.</p>

      <p>Wat je reden ook is: je bent welkom. En als jij ooit tegen iets aanloopt — groot of klein — weet dan dat je bij Xenra Nazorghulp terecht kunt. Ook als het gaat om dingen waarvan je denkt: "Zal ik me hier nou echt druk om maken?"</p>

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
    title: "Een kopje koffie voor twee – over rouw op leeftijd en hoe we toch nabij konden zijn",
    excerpt: "Ze waren zussen, maar eigenlijk meer dan dat. Maatjes, kameraden en vertrouwde elkaars zwijgen net zo goed als elkaars verhalen. Mevrouw Catharina was 78 toen haar oudere zus overleed. 81 was ze geworden. Niet onverwacht — maar daarom niet minder hard.",
    content: `
      <p>Ze waren zussen, maar eigenlijk meer dan dat. Maatjes, kameraden en vertrouwde elkaars zwijgen net zo goed als elkaars verhalen.</p>

      <p>Mevrouw Catharina (laten we haar zo noemen) was 78 toen haar oudere zus overleed. 81 was ze geworden. Niet onverwacht — maar daarom niet minder hard.</p>

      <p>Want niemand had gezegd dat je op je bijna-tachtigste nog zo'n immens gat kon voelen. Dat je ineens niet meer wist waar je op dinsdagmiddag moest zijn, of met wie je stilletjes kon lachen om andermans bingo-tactieken.</p>

      <p>"Ze was er gewoon. Altijd. Al m'n hele leven," vertelde Catharina met die droge stem die oude mensen soms gebruiken als hun keel het begeeft voordat hun tranen dat doen.</p>

      <h3>Samen was het leven minder stil</h3>
      <p>Ze deden het rustig aan hoor, zeiden ze altijd. Geen verre reizen of drukke dagen. Maar samen naar het buurthuis, samen naar de markt en soms pakten ze zelfs de scootmobiel naar de dierentuin. Niet voor de dieren, zei Catharina, "maar omdat m'n zus altijd net als een aapje lachte bij de pinguïns."</p>

      <p>En toen was ze er niet meer.</p>

      <p>Catharina woonde nog zelfstandig. Geen kinderen. Geen partner. "We waren met z'n tweeën. En nu is het ineens stil," zei ze. De koffie smaakte nergens naar. De televisie werd harder. En de dagen langer.</p>

      <p>"Ik weet niet of ik dit goed doe, maar ik heb hulp nodig". Ze had ons nummer via een buurvrouw gekregen. Een aantekening op een briefje: Xenra Nazorghulp – hulp bij verdriet, ook via telefoon. Geen WhatsApp, want daar snapte ze niks van. Geen e-mail, want "ik weet wel waar de knopjes zitten, maar niet wat ze doen."</p>

      <p>Ze belde. Rechtstreeks. "Ben ik bij de mensen van het verdriet?" vroeg ze voorzichtig. "Want ik zit er een beetje mee, geloof ik. Maar ik weet niet hoe dat moet, verwerken op mijn leeftijd. Het voelt zo… kinderachtig.". Dat was het begin.</p>

      <h3>Gewoon luisteren – geen apps, geen formulieren</h3>
      <p>We regelden dat één van onze begeleiders haar zou bellen. Elke week, op dinsdagmiddag. Dat vond ze prettig. Niet te vroeg, want "dan moet ik nog aankleden." En niet op maandag, want "dan is m'n hoofd altijd nog wat suf."</p>

      <p>Ze wilde geen gesprekken met grote woorden, geen therapie, geen zelfhulpboek. Ze wilde alleen praten over hoe gek het is om boodschappen te doen voor één persoon, over hoe de pinguïns in de dierentuin ineens niet meer grappig waren. En hoe stom ze zichzelf vond omdat ze ineens tegen de lege stoel in haar huiskamer begon te praten.</p>

      <p>We luisterden. Soms vroegen we iets, soms lieten we een stilte vallen waarin zij verder sprak. Soms was ze intens verdrietig en soms lachte ze ineens hardop — om iets kleins, iets wat haar zus vroeger zei. En elke week sloot ze af met: "Nou, ik weet niet wat je met al m'n gezwets moet, maar het lucht toch een beetje op."</p>

      <h3>Rouw kent geen leeftijdsgrens</h3>
      <p>Na een paar maanden zei ze ineens: "Ik ben nog steeds verdrietig hoor. Maar het is minder scherp. Alsof het verdriet niet meer overal tussen zit, maar gewoon z'n eigen stoel heeft gekregen in huis.", Ze begon af en toe weer naar het buurthuis te gaan. Zei dat ze één keer per week naar de markt moest van 'die app-mensen' — daarmee bedoelde ze ons.</p>

      <p>We vroegen of ze wilde stoppen met de begeleiding. "Nou nee, nog niet hoor," zei ze. "Jullie zijn een beetje m'n klankbord en eerlijk gezegd... ook een beetje m'n vrienden.". We lieten haar weten dat we nog net zo lang naast haar blijven staan als zij wil.</p>

      <h3>Iemand om tegen aan te praten</h3>
      <p>Deze blog is voor haar. En voor alle mensen op leeftijd die wel rouwen, maar geen woorden meer vinden. Voor wie digitaal contact lastig is. Voor wie zich afvraagt of het nog 'mag', om zo intens verdriet te voelen op een leeftijd waarop anderen vooral bezig zijn met kleinkinderen en rust.</p>

      <p>Bij Xenra Nazorghulp helpen we ook hen. Niet met druk, schema's of eisen. Maar met een rustige stem aan de telefoon. Met een vast aanspreekpunt en vooral met oprechte aandacht, zonder oordeel. Want of je nou 13 bent of 78 — rouw vraagt altijd om iemand die blijft, zonder haast en zonder script. Gewoon iemand die luistert als jij het even niet meer weet.</p>
    `,
    author: "Xenra Team",
    date: "Juli 2025",
    readTime: "5 min",
    image: blogImagePath,
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
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Image - Left Side on Desktop */}
          <div className="lg:w-1/3 flex-shrink-0">
            <div className="relative h-64 lg:h-80 overflow-hidden rounded-xl">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center text-white text-sm">
                  <span className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content - Right Side on Desktop */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-primary mb-4 leading-tight">
              {post.title}
            </h2>
            
            {/* Preview Content */}
            <div className="text-gray-700 leading-relaxed">
              {!isExpanded ? (
                <>
                  <p className="mb-4">{post.excerpt}</p>
                  <button
                    onClick={toggleExpansion}
                    className="inline-flex items-center space-x-2 text-orange-primary hover:text-orange-dark font-semibold transition-colors duration-200 group"
                  >
                    <span>lees verder</span>
                    <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform duration-200" />
                  </button>
                </>
              ) : (
                <>
                  <div 
                    className="prose prose-lg max-w-none mb-6"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  <button
                    onClick={toggleExpansion}
                    className="inline-flex items-center space-x-2 text-orange-primary hover:text-orange-dark font-semibold transition-colors duration-200 group"
                  >
                    <span>inklapppen</span>
                    <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform duration-200" />
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
    "description": "Inzichten, tips en verhalen over het rouwproces",
    "url": "https://nazorg.nl/blogs",
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
        url="https://nazorg.nl/blogs"
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