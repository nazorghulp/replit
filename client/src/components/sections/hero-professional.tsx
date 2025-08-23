import { ArrowRight, Heart, Shield, Users, Phone, Mail, MessageSquare } from "lucide-react";
import { Link } from "wouter";

export default function HeroProfessional() {
  return (
    <>
      {/* Hero Section - Behoud de bosachtergrond */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&h=1200')`
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <span className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
              Professionele nazorg
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">XENRA</span>
            <span className="block text-orange-light">NAZORGHULP</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Professionele begeleiding voor nabestaanden. Warme ondersteuning in de moeilijkste momenten van je leven.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-orange-primary hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Direct contact
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/over-ons" 
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/20"
            >
              Over ons
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Waarom Kiezen Voor Ons - Clean & Professional */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Waarom kiezen voor <span className="text-purple-primary">Kazenra Nederland</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wij bieden professionele ondersteuning met persoonlijke aandacht voor iedereen die te maken heeft met verlies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-purple-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Persoonlijke begeleiding</h3>
              <p className="text-gray-600 leading-relaxed">
                Elke situatie is uniek. Onze ervaren begeleiders bieden maatwerk ondersteuning 
                die aansluit bij jouw specifieke behoeften en rouwproces.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-orange-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Veilige omgeving</h3>
              <p className="text-gray-600 leading-relaxed">
                Bij ons kun je jezelf zijn. Geen oordeel, geen tijdsdruk. 
                Een veilige ruimte waar je gevoelens welkom zijn en gerespecteerd worden.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-purple-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Voor iedereen</h3>
              <p className="text-gray-600 leading-relaxed">
                Van kinderen tot volwassenen - wij hebben gespecialiseerde begeleiders 
                voor elke leeftijdsgroep met passende ondersteuning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Onze Aanpak - Modern & Clean */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Onze <span className="text-orange-primary">aanpak</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-purple-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Jouw tempo, jouw keuze</h4>
                    <p className="text-gray-600">
                      Geen lange wachttijden of vaste abonnementen. Jij bepaalt wat je nodig hebt en wanneer. 
                      Per maand opzegbaar, zodat jij de regie houdt.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-orange-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Flexibel contact</h4>
                    <p className="text-gray-600">
                      Contact via WhatsApp, telefoon, videobellen of e-mail - wat voor jou het prettigst voelt. 
                      Ook anoniem contact is mogelijk.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-purple-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Gespecialiseerde zorg</h4>
                    <p className="text-gray-600">
                      Voor kinderen, jongeren en volwassenen hebben wij aparte begeleiders met 
                      specifieke expertise voor elke leeftijdsgroep.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-first">
              <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-primary mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Beschikbaar voor urgente situaties</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-primary mb-2">1 dag</div>
                    <div className="text-sm text-gray-600">Reactietijd op berichten</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-primary mb-2">100%</div>
                    <div className="text-sm text-gray-600">Vertrouwelijk en veilig</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-primary mb-2">0-17</div>
                    <div className="text-sm text-gray-600">Jaar specialistische jeugdzorg</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA - Professional */}
      <section className="py-20 bg-gradient-to-br from-purple-primary to-purple-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Klaar voor het eerste contact?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Kies de manier die voor jou het prettigst voelt. We reageren altijd binnen één werkdag.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <MessageSquare className="w-12 h-12 text-orange-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
              <p className="text-white/80">Direct en persoonlijk</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Phone className="w-12 h-12 text-orange-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Bellen</h3>
              <p className="text-white/80">Persoonlijk gesprek</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Mail className="w-12 h-12 text-orange-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">E-mail</h3>
              <p className="text-white/80">Op jouw moment</p>
            </div>
          </div>

          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-orange-primary hover:bg-orange-600 text-white px-12 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Start gesprek
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}