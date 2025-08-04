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