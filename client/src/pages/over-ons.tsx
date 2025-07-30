import { Heart, Shield, Users, MessageCircle, Clock, CheckCircle, Sparkles, Star } from "lucide-react";
import teamPhotoPath from "@assets/zittend zonder gezicht_1753737536522.png";
import therapiePhotoPath from "@assets/therapie kind_1753803329995.png";

export default function OverOns() {
  return (
    <div>
      {/* New Hero Section - Similar to Contact Page */}
      <section className="relative overflow-hidden">
        <div 
          className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(91, 33, 182, 0.8), rgba(251, 146, 60, 0.6)), url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200')`
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

          <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 mb-8">
              <Heart className="w-6 h-6 text-orange-light animate-pulse" />
              <span className="text-white/95 font-medium text-lg">Ons verhaal van zorg</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Wie Zijn <span className="text-orange-light">Wij</span>?
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12 max-w-4xl mx-auto">
              Een toegewijd team van professionals dat begrijpt wat je doormaakt. 
              We combineren jarenlange ervaring met warme, persoonlijke begeleiding voor elke leeftijd.
            </p>

            {/* Scroll down indicator */}
            <div className="flex flex-col items-center">
              <p className="text-white/80 mb-4">Ontdek ons verhaal</p>
              <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center animate-bounce">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behandeltraject Section */}
      <section className="relative py-16 bg-gradient-to-br from-slate-50 to-purple-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-20 w-72 h-72 bg-orange-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-purple-primary mb-4 leading-tight">
              Hoe wij werken met een <span className="text-orange-primary">behandeltraject</span>
            </h2>
            
            <p className="text-lg text-warm-gray max-w-2xl mx-auto leading-relaxed">
              <strong>Bij Xenra Nazorghulp geloven we dat rouw geen lineair proces is. Iedereen beleeft het op zijn of haar eigen manier.</strong> Daarom werken wij met behandeltrajecten die volledig zijn afgestemd op de situatie, het tempo en de wensen van de persoon die we begeleiden.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            {/* Left Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src={therapiePhotoPath}
                  alt="Rustige gesprekssetting met professionele begeleider"
                  className="w-full h-[280px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-primary/60 to-transparent"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
                <h3 className="text-xl font-bold text-purple-primary mb-3">Eerste fase: Rust brengen</h3>
                <p className="text-warm-gray leading-relaxed mb-3">
                  In de eerste fase van het traject richten we ons vooral op veiligheid en vertrouwen. 
                  Veel mensen die zich aanmelden, zitten op dat moment diep in de put. Ze voelen zich 
                  overweldigd door emoties en hebben het gevoel dat de wereld om hen heen is ingestort.
                </p>
                <p className="text-warm-gray leading-relaxed">
                  Het is dan onze taak om eerst rust te brengen. We luisteren, zonder oordeel, en zorgen 
                  dat er een plek ontstaat waar alles gezegd mag worden.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row - Reversed */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            {/* Left Content */}
            <div className="space-y-4 lg:order-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
                <h3 className="text-xl font-bold text-orange-primary mb-3">Stap voor stap verder</h3>
                <p className="text-warm-gray leading-relaxed mb-3">
                  Vanuit dat fundament bouwen we stap voor stap verder. We helpen om de pijn en het verlies 
                  niet weg te stoppen, maar juist te erkennen. Dat is vaak confronterend, maar het is ook 
                  de enige manier om te voorkomen dat verdriet later als een boemerang terugkomt.
                </p>
                <p className="text-warm-gray leading-relaxed">
                  Onze psychologen en begeleiders gebruiken hiervoor verschillende werkvormen en technieken, 
                  variërend van gesprekken en praktische opdrachten tot reflectieoefeningen en begeleiding 
                  bij dagelijkse uitdagingen.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:order-2">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src={teamPhotoPath}
                  alt="Begeleiding en ondersteuning in therapeutische omgeving"
                  className="w-full h-[280px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-orange-primary/60 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-primary to-orange-primary rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Het doel van ons traject</h3>
              <p className="text-lg leading-relaxed mb-4 max-w-3xl mx-auto">
                Naarmate het traject vordert, verschuift de focus. We kijken vooruit: hoe kun je, met het verlies 
                als onderdeel van je leven, weer grip krijgen op je dagelijks bestaan? Samen werken we aan het 
                hervinden van energie, zelfvertrouwen en zingeving.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 inline-block">
                <p className="text-base">
                  Het doel is nooit dat iemand zijn dierbare vergeet. Verlies hoort bij het leven en mag er zijn. 
                  Wel willen we bereiken dat mensen hun verdriet een plek kunnen geven, zodat ze op een gezonde manier verder kunnen. 
                  Niet door het los te laten, maar door het mee te nemen op een manier die draaglijk is.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-purple-primary">
      {/* Ons Team Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Subtiele achtergrond pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-orange-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
              Ons <span className="text-orange-light">Team</span>
            </h2>
          </div>

          {/* Premium glassmorphism content box */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden border border-white/30 shadow-2xl">
              
              {/* Foto sectie */}
              <div className="relative h-80 lg:h-96">
                <img 
                  src={teamPhotoPath}
                  alt="Professioneel gesprek tussen begeleider en cliënt, gezichten niet zichtbaar ter bescherming van privacy" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-primary/80 via-purple-primary/40 to-transparent"></div>
                
                {/* Overlay tekst */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-4">
                    <Users className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold">Ons verhaal</span>
                  </div>
                </div>
              </div>

              {/* Tekst sectie */}
              <div className="p-10 lg:p-16">
                <div className="space-y-8 text-lg lg:text-xl leading-relaxed">
                  <p className="text-warm-gray">
                    Achter Xenra Nazorghulp staat een klein, betrokken team van professionele begeleiders. 
                    We hebben ruime ervaring in het ondersteunen van mensen na het verlies van een dierbare – 
                    <strong className="text-purple-primary">zowel volwassenen als jongeren en kinderen tot 17 jaar</strong>.
                  </p>

                  <p className="text-warm-gray">
                    Voor elk kind of volwassene is passende begeleiding beschikbaar. <strong className="text-orange-primary">Kinderen worden opgevangen door gespecialiseerde begeleiders</strong> die weten hoe rouw bij jonge mensen anders kan verlopen.
                  </p>

                  <p className="text-warm-gray">
                    Omdat sommige mensen liever anoniem contact hebben, tonen we op deze website bewust <strong className="text-purple-primary">geen foto's of namen van onze begeleiders</strong>. Zo respecteren we ook de privacy van onze cliënten.
                  </p>

                  <p className="text-warm-gray">
                    Of je nu behoefte hebt aan een kort lijntje via WhatsApp of liever belt of mailt, 
                    <strong className="text-orange-primary">wij passen ons aan</strong>. 
                    Jouw tempo, jouw keuze, jouw moment.
                  </p>
                </div>

                {/* Subtiele decoratieve lijn */}
                <div className="mt-12 pt-8 border-t border-purple-100">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-4 text-purple-primary">
                      <div className="w-2 h-2 bg-purple-primary rounded-full"></div>
                      <span className="font-medium">Professionele ondersteuning met persoonlijke aandacht</span>
                      <div className="w-2 h-2 bg-orange-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onze aanpak sectie */}
      <section className="py-24 bg-gradient-to-b from-purple-primary to-purple-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Onze <span className="text-orange-light">aanpak</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Professionele ondersteuning die zich aanpast aan jouw unieke situatie en behoeften
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-primary to-orange-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Persoonlijk contact</h3>
                <p className="text-white/90 leading-relaxed text-center">
                  Kleine organisatie met korte lijntjes en directe, warme betrokkenheid bij jouw situatie
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Gespecialiseerde zorg</h3>
                <p className="text-white/90 leading-relaxed text-center">
                  Aparte begeleiders voor kinderen en volwassenen, elk met specifieke expertise
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-primary to-orange-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Jouw tempo</h3>
                <p className="text-white/90 leading-relaxed text-center">
                  Flexibele ondersteuning die aansluit bij jouw behoeften en beschikbaarheid
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Vertrouwen sectie */}
      <section className="py-24 bg-purple-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-100 rounded-3xl p-8 lg:p-12 border border-purple-200 shadow-xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-purple-200 rounded-full px-6 py-3 mb-6">
                <Shield className="w-5 h-5 text-purple-primary" />
                <span className="text-purple-primary font-medium">Privacy & Vertrouwen</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-purple-primary mb-6">
                Anonimiteit en privacy centraal
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-purple-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-purple-primary mb-2">Geen foto's of namen</h4>
                    <p className="text-purple-700">
                      We respecteren dat sommige mensen liever anoniem contact hebben en tonen daarom bewust 
                      geen persoonlijke informatie van onze begeleiders.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-purple-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-purple-primary mb-2">Cliënt privacy</h4>
                    <p className="text-purple-700">
                      Door deze aanpak beschermen we ook automatisch de privacy van alle mensen 
                      die bij ons ondersteuning zoeken.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-orange-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-orange-primary mb-2">Veilige omgeving</h4>
                    <p className="text-purple-700">
                      Deze werkwijze creëert een veilige, beschermde omgeving waarin je je kwetsbaar 
                      kunt opstellen zonder zorgen over je privacy.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-orange-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-orange-primary mb-2">Persoonlijk contact</h4>
                    <p className="text-purple-700">
                      Ondanks de anonimiteit krijg je altijd te maken met dezelfde begeleider 
                      voor continuïteit en vertrouwen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact opties */}
      <section className="py-24 bg-gradient-to-b from-purple-primary to-purple-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Klaar voor het eerste contact?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Kies de manier die voor jou het prettigst voelt
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <MessageCircle className="w-12 h-12 text-orange-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
              <p className="text-white/80">Snel en direct contact</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <Heart className="w-12 h-12 text-orange-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Telefonisch</h3>
              <p className="text-white/80">Persoonlijk gesprek</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 sm:col-span-2 lg:col-span-1">
              <Users className="w-12 h-12 text-orange-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">E-mail</h3>
              <p className="text-white/80">Op jouw tempo</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}