import { Heart, Shield, Users, MessageCircle, Clock, CheckCircle } from "lucide-react";

export default function OverOns() {
  return (
    <div className="bg-purple-primary">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Subtiele achtergrond pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-orange-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Users className="w-5 h-5 text-orange-light" />
              <span className="text-white/90 font-medium">Ons team</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Wie zijn <span className="text-orange-light">wij</span>?
            </h1>
          </div>

          {/* Premium glassmorphism content box */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-10 lg:p-16 border border-white/30 shadow-2xl">
              {/* Decoratieve header met icoon */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-orange-100 rounded-full px-8 py-4 mb-8">
                  <Users className="w-6 h-6 text-purple-primary" />
                  <span className="text-purple-primary font-semibold text-lg">Ons verhaal</span>
                </div>
              </div>

              {/* Elegante tekstblokken met iconen */}
              <div className="space-y-10 text-lg lg:text-xl leading-relaxed">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-primary to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-warm-gray">
                    Achter Xenra Nazorghulp staat een klein, betrokken team van professionele begeleiders. 
                    We hebben ruime ervaring in het ondersteunen van mensen na het verlies van een dierbare – 
                    <strong className="text-purple-primary">zowel volwassenen als jongeren en kinderen tot 17 jaar</strong>.
                  </p>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-primary to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-warm-gray">
                    Voor elk kind of volwassene is passende begeleiding beschikbaar. 
                    <strong className="text-orange-primary">Kinderen worden opgevangen door gespecialiseerde begeleiders</strong> die 
                    weten hoe rouw bij jonge mensen anders kan verlopen.
                  </p>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-primary to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-warm-gray">
                    Omdat sommige mensen liever anoniem contact hebben, tonen we op deze website bewust 
                    <strong className="text-purple-primary">geen foto's of namen van onze begeleiders</strong>. 
                    Zo respecteren we ook de privacy van onze cliënten.
                  </p>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-primary to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-warm-gray">
                    Of je nu behoefte hebt aan een kort lijntje via WhatsApp of liever belt of mailt – 
                    <strong className="text-orange-primary">wij passen ons aan</strong>. 
                    Jouw tempo, jouw keuze, jouw moment.
                  </p>
                </div>
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

          <div className="mt-12">
            <a 
              href="/contact" 
              className="bg-orange-primary text-white px-12 py-5 rounded-2xl font-semibold hover:bg-orange-600 transition-colors duration-300 text-lg shadow-lg"
            >
              Neem contact op
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}