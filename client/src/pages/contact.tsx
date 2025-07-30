import { Mail, MessageSquare, Phone, Clock, Heart, Star, Shield, ArrowRight, CheckCircle, Users, Calendar, Send, Globe, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div>
      {/* Hero Section - Emotional Journey Start */}
      <section className="relative overflow-hidden">
        <div 
          className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(91, 33, 182, 0.8), rgba(251, 146, 60, 0.6)), url('https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200')`
          }}
        >
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 mb-8">
              <Heart className="w-6 h-6 text-orange-light animate-pulse" />
              <span className="text-white/95 font-medium text-lg">We zijn er voor je</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Jouw <span className="text-orange-light">Eerste Stap</span><br />
              Naar Genezing
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12 max-w-4xl mx-auto">
              De moeilijkste stap is vaak de eerste. Wij maken het je gemakkelijk door verschillende 
              manieren aan te bieden om contact te maken, precies zoals jij je op dit moment prettig voelt.
            </p>

            {/* Scroll down indicator */}
            <div className="flex flex-col items-center">
              <p className="text-white/80 mb-4">Ontdek hoe je contact kunt maken</p>
              <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center animate-bounce">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Contact Journey */}
      <section className="py-24 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-6">
              Kies Jouw <span className="text-purple-primary">Comfort Zone</span>
            </h2>
            <p className="text-xl text-warm-gray max-w-4xl mx-auto leading-relaxed">
              Iedereen verwerkt verlies anders. Daarom bieden we verschillende manieren om die eerste 
              verbinding te maken - van volledig anoniem tot persoonlijk gesprek.
            </p>
          </div>

          {/* Contact Methods - Interactive Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* WhatsApp Card */}
            <div 
              className={`relative bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-8 text-white overflow-hidden cursor-pointer transform transition-all duration-500 ${
                hoveredCard === 'whatsapp' ? 'scale-105 shadow-2xl' : 'hover:scale-102 shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard('whatsapp')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">WhatsApp Contact</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Start met een simpel berichtje. Geen verplichtingen, gewoon een vriendelijk 
                  "Hallo, ik zou graag willen praten." Wij reageren altijd warm en begripvol.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span className="text-white/90">Direct contact mogelijk</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span className="text-white/90">Reageren binnen 1 uur</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span className="text-white/90">Informeel en laagdrempelig</span>
                  </div>
                </div>

                <a 
                  href="https://wa.me/31612345678?text=Hallo,%20ik%20zou%20graag%20informatie%20willen%20over%20nazorgbegeleiding"
                  className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Open WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            </div>

            {/* Phone Card */}
            <div 
              className={`relative bg-gradient-to-br from-purple-primary to-purple-800 rounded-3xl p-8 text-white overflow-hidden cursor-pointer transform transition-all duration-500 ${
                hoveredCard === 'phone' ? 'scale-105 shadow-2xl' : 'hover:scale-102 shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard('phone')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Persoonlijk Gesprek</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Een warm, persoonlijk telefoongesprek. Neem de tijd die je nodig hebt. 
                  Geen haast, geen druk - gewoon een luisterend oor wanneer je daar klaar voor bent.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span className="text-white/90">Directe menselijke verbinding</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span className="text-white/90">Geen tijdslimiet</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span className="text-white/90">Beschikbaar 07:30-17:30</span>
                  </div>
                </div>

                <a 
                  href="tel:+31612345678"
                  className="inline-flex items-center gap-2 bg-white text-purple-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Bel direct
                  <Phone className="w-5 h-5" />
                </a>
              </div>
              
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/5 rounded-full translate-y-14 -translate-x-14"></div>
            </div>

            {/* Email Card */}
            <div 
              className={`relative bg-gradient-to-br from-orange-primary to-orange-600 rounded-3xl p-8 text-white overflow-hidden cursor-pointer transform transition-all duration-500 ${
                hoveredCard === 'email' ? 'scale-105 shadow-2xl' : 'hover:scale-102 shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard('email')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Op Jouw Moment</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Schrijf je verhaal op jouw tempo. E-mail geeft je de ruimte om je gedachten 
                  te ordenen en te delen wanneer het voor jou voelt als het juiste moment.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span className="text-white/90">Tijd om na te denken</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span className="text-white/90">Reageren binnen 24 uur</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span className="text-white/90">Volledig vertrouwelijk</span>
                  </div>
                </div>

                <a 
                  href="mailto:info@nazorghulp.nl?subject=Informatie over nazorgbegeleiding&body=Hallo,%0D%0A%0D%0AIk zou graag meer informatie willen over jullie nazorgbegeleiding.%0D%0A%0D%0AMet vriendelijke groet,"
                  className="inline-flex items-center gap-2 bg-white text-orange-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Stuur e-mail
                  <Send className="w-5 h-5" />
                </a>
              </div>
              
              <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full -translate-y-18 translate-x-18"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-10 -translate-x-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next - Timeline */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-6">
              Wat Gebeurt Er <span className="text-orange-primary">Daarna?</span>
            </h2>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto">
              We begrijpen je onzekerheid. Hier zie je precies hoe het eerste contact verloopt.
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-purple-primary rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
                    <h3 className="text-2xl font-bold text-dark-gray">Eerste Contact</h3>
                  </div>
                  <p className="text-warm-gray text-lg leading-relaxed">
                    Je neemt contact op via jouw favoriete kanaal. Geen gedoe met lange formulieren - 
                    gewoon een simpel "Hallo, ik zou graag willen praten" is al genoeg om te beginnen.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-24 h-24 text-white" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-orange-primary rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
                    <h3 className="text-2xl font-bold text-dark-gray">Warm Welkom</h3>
                  </div>
                  <p className="text-warm-gray text-lg leading-relaxed">
                    We reageren altijd binnen één werkdag met een warm, begripvol bericht. 
                    Geen standaardteksten, maar persoonlijke aandacht voor jouw situatie.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <Heart className="w-24 h-24 text-white" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
                    <h3 className="text-2xl font-bold text-dark-gray">Kennismaking</h3>
                  </div>
                  <p className="text-warm-gray text-lg leading-relaxed">
                    Een vrijblijvend kennismakingsgesprek van 15-30 minuten. We luisteren naar je verhaal 
                    en leggen uit hoe we je kunnen helpen. Geen verplichtingen, alleen begrip.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <Users className="w-24 h-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Builders */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-6">
              Waarom Je Ons Kunt <span className="text-purple-primary">Vertrouwen</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-b from-purple-50 to-white rounded-3xl p-8 shadow-lg">
              <div className="w-20 h-20 bg-purple-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark-gray mb-4">100% Vertrouwelijk</h3>
              <p className="text-warm-gray leading-relaxed">
                Alles wat je deelt blijft tussen jou en je begeleider. 
                We respecteren je privacy volledig en vragen alleen wat nodig is.
              </p>
            </div>

            <div className="text-center bg-gradient-to-b from-orange-50 to-white rounded-3xl p-8 shadow-lg">
              <div className="w-20 h-20 bg-orange-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark-gray mb-4">Jarenlange Ervaring</h3>
              <p className="text-warm-gray leading-relaxed">
                Hilko Verdult en ons team hebben jaren ervaring in nazorg 
                en begeleiding van mensen in rouw.
              </p>
            </div>

            <div className="text-center bg-gradient-to-b from-green-50 to-white rounded-3xl p-8 shadow-lg">
              <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark-gray mb-4">Altijd Bereikbaar</h3>
              <p className="text-warm-gray leading-relaxed">
                Online of offline, in Nederland of daarbuiten - 
                we zijn er voor je wanneer je ons nodig hebt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Emotional */}
      <section className="py-24 bg-gradient-to-br from-purple-primary via-purple-700 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute w-4 h-4 text-white/20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Je Bent <span className="text-orange-light">Niet Alleen</span>
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed">
            Die eerste stap voelt misschien groot, maar hij brengt je dichter bij genezing. 
            Wij lopen graag een stukje van de weg met je mee.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://wa.me/31612345678?text=Hallo,%20ik%20zou%20graag%20informatie%20willen%20over%20nazorgbegeleiding"
              className="inline-flex items-center gap-3 bg-white text-purple-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <MessageSquare className="w-6 h-6" />
              Start WhatsApp Gesprek
            </a>
            <a 
              href="tel:+31612345678"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
              Bel Direct
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
