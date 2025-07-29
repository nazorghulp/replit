import { Link } from "wouter";
import { Check, Plus, Info, Sparkles, Heart, Shield, Clock, MessageCircle, Star, Zap, Crown, Users } from "lucide-react";

export default function PricingPackages() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50 to-orange-50"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-primary/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-primary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-purple-light/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header with Premium Animation */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-primary/10 to-orange-primary/10 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-white/30 shadow-lg">
            <Sparkles className="w-6 h-6 text-orange-primary animate-pulse" />
            <span className="text-purple-primary font-semibold text-lg">Premium Nazorgdiensten</span>
            <Heart className="w-6 h-6 text-purple-primary animate-pulse delay-300" />
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-primary via-purple-light to-orange-primary bg-clip-text text-transparent mb-8 leading-tight">
            Onze Diensten
          </h2>
          
          {/* Beautiful content cards with glassmorphism */}
          <div className="max-w-6xl mx-auto space-y-6 mb-12">
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 text-left">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-primary to-purple-light rounded-2xl flex items-center justify-center shadow-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-lg text-dark-gray leading-relaxed">
                      Bij Xenra Nazorg bieden we <strong className="text-purple-primary">toegankelijke en flexibele behandelingen</strong> aan nabestaanden van alle leeftijden. 
                      Onze pakketten zijn maandelijks verlengbaar, geen automatische incasso's en geen langdurige verplichtingen.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-primary to-orange-light rounded-2xl flex items-center justify-center shadow-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-lg text-dark-gray leading-relaxed">
                      <strong className="text-orange-primary">Je beslist zelf maandelijks</strong> of je doorgaat en pas dan ontvang je een betaalverzoek.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6 text-left">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-light to-purple-primary rounded-2xl flex items-center justify-center shadow-lg">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-lg text-dark-gray leading-relaxed">
                      We bieden drie pakketten voor volwassenen – <strong className="text-purple-primary">Basis, Plus en Intensief</strong> – elk met een afgestemde mix van 
                      geplande behandelingen, WhatsApp- of e-mailcontact en praktische hulp.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-light to-orange-primary rounded-2xl flex items-center justify-center shadow-lg">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-lg text-dark-gray leading-relaxed">
                      Voor kinderen t/m 17 jaar hebben we een <strong className="text-orange-primary">speciaal behandeltraject</strong>, met ruimte voor anoniem contact 
                      en extra aandacht voor hun tempo en beleving.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Premium guarantee badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-primary/20 to-purple-primary/20 backdrop-blur-lg rounded-2xl px-8 py-4 border border-white/40 shadow-xl">
            <Star className="w-6 h-6 text-orange-primary animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-dark-gray font-bold text-lg">Flexibel en zonder verplichtingen</span>
            <Star className="w-6 h-6 text-purple-primary animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
          </div>
        </div>

        {/* Revolutionary Pricing Cards Design */}
        <div className="relative">
          {/* Background decorative grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border-l border-purple-primary/20"></div>
              ))}
            </div>
          </div>

          <div className="relative grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-8xl mx-auto">
            {/* Basis Pakket - Elevated Glass Design */}
            <div className="group relative">
              {/* Floating background element */}
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-primary/20 to-purple-light/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/60 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:rotate-1">
                {/* Premium header with icon */}
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-primary to-purple-light rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-primary to-purple-light bg-clip-text text-transparent mb-4">
                    Basis Pakket
                  </h3>
                  
                  <div className="relative">
                    <div className="text-5xl lg:text-6xl font-bold text-purple-primary mb-2">€79,99</div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">€</span>
                    </div>
                  </div>
                  <p className="text-warm-gray font-medium">per maand</p>
                </div>
                
                {/* Premium content section */}
                <div className="space-y-6 mb-8">
                  <div className="bg-purple-primary/10 rounded-2xl p-6">
                    <h4 className="font-bold text-purple-primary text-lg mb-2 flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Voor wie?
                    </h4>
                    <p className="text-black leading-relaxed">
                      Voor mensen die vooral behoefte hebben aan een luisterend oor en af en toe advies.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-bold text-black text-lg flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-orange-primary" />
                      Wat krijg je?
                    </h4>
                    <div className="space-y-3">
                      {[
                        "1x per week gepland contactmoment (30 min)",
                        "Doorlopend WhatsApp/e-mail contact (max 10 vragen/week)",
                        "Reactie binnen 1 uur tijdens kantooruren",
                        "Toegang tot inlogomgeving en e-books"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-black leading-relaxed">{feature}</span>
                        </div>
                      ))}
                      <div className="flex items-start gap-3 pt-2 border-t border-gray-200">
                        <div className="w-6 h-6 bg-gradient-to-br from-orange-primary to-orange-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Plus className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-black leading-relaxed">
                          <strong>Extra sessies:</strong> €19,99 per 30 min
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-purple-primary to-purple-light text-white py-4 px-8 rounded-2xl font-bold text-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300 group-hover:from-purple-light group-hover:to-purple-primary"
                >
                  Kies Basis Pakket
                </Link>
              </div>
            </div>

            {/* Plus Pakket - Featured with Crown */}
            <div className="group relative">
              {/* Popular badge with crown */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-orange-primary to-orange-light text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl flex items-center gap-2">
                  <Crown className="w-4 h-4" />
                  POPULAIR
                  <Crown className="w-4 h-4" />
                </div>
              </div>
              
              {/* Floating background element */}
              <div className="absolute -inset-6 bg-gradient-to-br from-orange-primary/30 to-orange-light/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-700"></div>
              
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border-2 border-orange-primary/50 shadow-3xl hover:shadow-4xl transition-all duration-500 hover:scale-110 hover:-rotate-1 ring-4 ring-orange-primary/20">
                {/* Premium header with icon */}
                <div className="text-center mb-8 pt-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-primary to-orange-light rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-125 transition-transform duration-500 relative">
                    <Zap className="w-12 h-12 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-orange-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-primary to-orange-light bg-clip-text text-transparent mb-4">
                    Plus Pakket
                  </h3>
                  
                  <div className="relative">
                    <div className="text-5xl lg:text-6xl font-bold text-orange-primary mb-2">€119,99</div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse">
                      <Crown className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p className="text-warm-gray font-medium">per maand</p>
                </div>
                
                {/* Premium content section */}
                <div className="space-y-6 mb-8">
                  <div className="bg-gradient-to-br from-orange-primary/10 to-orange-light/10 rounded-2xl p-6 border border-orange-primary/20">
                    <h4 className="font-bold text-orange-primary text-lg mb-2 flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Voor wie?
                    </h4>
                    <p className="text-black leading-relaxed">
                      Voor mensen die regelmatig begeleiding willen en behoefte hebben aan extra advies.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-bold text-black text-lg flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-orange-primary" />
                      Wat krijg je?
                    </h4>
                    <div className="space-y-3">
                      {[
                        "2x per week gepland contactmoment (30 min)",
                        "Doorlopend WhatsApp/e-mail contact (max 15 vragen/week)",
                        "Reactie binnen 1 uur tijdens kantooruren",
                        "1x per maand sessie over praktische zaken"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-black leading-relaxed">{feature}</span>
                        </div>
                      ))}
                      <div className="flex items-start gap-3 pt-2 border-t border-orange-200">
                        <div className="w-6 h-6 bg-gradient-to-br from-orange-primary to-orange-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Plus className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-black leading-relaxed">
                          <strong>Extra sessies:</strong> €17,49 per 30 min
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-orange-primary to-orange-light text-white py-4 px-8 rounded-2xl font-bold text-lg text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Kies Plus Pakket
                </Link>
              </div>
            </div>

            {/* Intensief Pakket - Premium Design */}
            <div className="group relative">
              {/* Floating background element */}
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-light/20 to-purple-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/60 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-rotate-1">
                {/* Premium header with icon */}
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-light to-purple-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500 relative">
                    <Zap className="w-10 h-10 text-white" />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">⚡</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-light to-purple-primary bg-clip-text text-transparent mb-4">
                    Intensief Pakket
                  </h3>
                  
                  <div className="relative">
                    <div className="text-5xl lg:text-6xl font-bold text-purple-primary mb-2">€169,99</div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-light rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">⚡</span>
                    </div>
                  </div>
                  <p className="text-warm-gray font-medium">per maand</p>
                </div>
                
                {/* Premium content section */}
                <div className="space-y-6 mb-8">
                  <div className="bg-purple-light/10 rounded-2xl p-6">
                    <h4 className="font-bold text-purple-primary text-lg mb-2 flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Voor wie?
                    </h4>
                    <p className="text-black leading-relaxed">
                      Voor nabestaanden die intensieve begeleiding nodig hebben.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-bold text-black text-lg flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-orange-primary" />
                      Wat krijg je?
                    </h4>
                    <div className="space-y-3">
                      {[
                        "3x per week gepland contactmoment (30 min)",
                        "Doorlopend WhatsApp/e-mail contact (max 20 vragen/week)",
                        "Reactie binnen 30 minuten tijdens kantooruren",
                        "1x per maand sessie over praktische zaken"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-black leading-relaxed">{feature}</span>
                        </div>
                      ))}
                      <div className="flex items-start gap-3 pt-2 border-t border-gray-200">
                        <div className="w-6 h-6 bg-gradient-to-br from-orange-primary to-orange-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Plus className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-black leading-relaxed">
                          <strong>Extra sessies:</strong> €14,49 per 30 min
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-purple-light to-purple-primary text-white py-4 px-8 rounded-2xl font-bold text-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300 group-hover:from-purple-primary group-hover:to-purple-light"
                >
                  Kies Intensief Pakket
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}