import { Link } from "wouter";
import { Check, Plus, Info, Sparkles, Heart, Shield, Clock, MessageCircle, Star, Zap, Crown, Users, CheckCircle, ArrowRight, Target, TrendingUp } from "lucide-react";
import therapieKindImage from "@assets/therapie kind_1753803329995.png";
import familyImagePath from "@assets/gezin zonder man 2_1753906889142.png";
import therapyImagePath from "@assets/therapie 2_1753907123918.png";

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
          <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-primary via-purple-light to-orange-primary bg-clip-text text-transparent mb-8 leading-tight">
            Onze Diensten
          </h2>
        </div>

        {/* Waarom onze aanpak beter werkt - Spectacular Section */}
        <div className="relative mb-24">
          <div className="bg-gradient-to-br from-white via-purple-50/50 to-orange-50/30 rounded-[3rem] p-8 lg:p-16 shadow-2xl border border-white/60 backdrop-blur-sm overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-primary/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-primary/10 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Images Section */}
              <div className="relative lg:order-1 space-y-6 -mt-8">
                {/* First Image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                  <img 
                    src={familyImagePath}
                    alt="Familie ondersteuning - Warme begeleiding voor nabestaanden"
                    className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Second Image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                  <img 
                    src={therapyImagePath}
                    alt="Online therapie sessie - Flexibele ondersteuning op maat"
                    className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Floating accent card */}
                <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-primary to-orange-light rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-purple-primary">Samen sterk</p>
                      <p className="text-sm text-warm-gray">Nooit alleen</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content Section */}
              <div className="space-y-8 lg:order-2">
                {/* Header with animated icon */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-primary to-purple-light rounded-2xl flex items-center justify-center shadow-lg">
                    <Target className="w-8 h-8 text-white animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-4xl lg:text-5xl font-bold text-purple-primary leading-tight">
                      Waarom onze aanpak <span className="text-orange-primary">beter werkt</span>
                    </h3>
                  </div>
                </div>

                {/* Content blocks with beautiful styling */}
                <div className="space-y-6">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <p className="text-warm-gray leading-relaxed">
                      Veel mensen die rouwen worden doorverwezen naar een eerstelijns psycholoog. Vaak betekent dit één sessie van drie kwartier per week, met wachttijden die kunnen oplopen tot maanden. Tussen die afspraken zit veel tijd waarin je er alleen voor staat. Dat kan zwaar voelen, zeker in een periode waarin het verdriet je soms overspoelt.
                    </p>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <p className="text-warm-gray leading-relaxed">
                      Bij Xenra Nazorghulp doen we het anders. Onze pakketten zijn betaalbaar en bieden veel meer contactmomenten dan een klassiek traject. Je kiest zelf hoeveel contact je wilt: één, twee of drie keer per week. En dat kan op de manier die voor jou prettig voelt – via WhatsApp, e-mail, (beeld)bellen of een combinatie daarvan.
                    </p>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <p className="text-warm-gray leading-relaxed">
                      Onze ervaring is dat deze intensievere en flexibele aanpak sneller werkt. Rouw komt in golven, en die komen niet altijd netjes op de dag dat je een afspraak hebt. Door vaker contact te hebben, kunnen we direct inspelen op wat er op dat moment speelt.
                    </p>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <p className="text-warm-gray leading-relaxed">
                      Ook belangrijk: we werken niet vanuit een strak protocol, maar passen het traject aan op jouw situatie. We nemen de tijd om jou en je verhaal te leren kennen. Dat zorgt voor een vertrouwensband, en juist die band maakt dat je de stappen kunt zetten die nodig zijn om verder te komen.
                    </p>
                  </div>
                </div>

                {/* Call to action highlight */}
                <div className="bg-gradient-to-r from-purple-primary to-orange-primary rounded-2xl p-6 text-white shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xl font-semibold mb-1">Kortom: bij ons sta je er nooit alleen voor.</p>
                      <p className="text-white/90">We zijn er écht, precies wanneer jij ons nodig hebt.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-20">
          
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

          <div className="relative grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
            {/* Basis Pakket - Elevated Glass Design */}
            <div className="group relative">
              {/* Floating background element */}
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-primary/20 to-purple-light/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-2 lg:p-3 border border-white/60 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:rotate-1 min-h-[157px] h-full flex flex-col">
                {/* Premium header with icon */}
                <div className="text-center mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-primary to-purple-light rounded-3xl flex items-center justify-center mx-auto mb-1 shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold bg-gradient-to-r from-purple-primary to-purple-light bg-clip-text text-transparent mb-1">
                    Basis Pakket
                  </h3>
                  
                  <div className="relative">
                    <div className="text-2xl lg:text-3xl font-bold text-purple-primary mb-1">€79,99</div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">€</span>
                    </div>
                  </div>
                  <p className="text-warm-gray font-medium">per maand</p>
                </div>
                
                {/* Premium content section */}
                <div className="space-y-1 flex-grow">
                  <div className="bg-purple-primary/10 rounded-2xl p-2">
                    <h4 className="font-bold text-purple-primary text-sm mb-1 flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      Voor wie?
                    </h4>
                    <p className="text-black text-xs leading-relaxed">
                      Voor mensen die vooral behoefte hebben aan een luisterend oor en af en toe advies.
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="font-bold text-black text-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-orange-primary" />
                      Wat krijg je?
                    </h4>
                    <div className="space-y-1">
                      {[
                        "1x per week gepland contactmoment (30 min)",
                        "Doorlopend WhatsApp/e-mail contact (max 10 berichten/week)",
                        "Reactie binnen 1 uur tijdens kantooruren",
                        "Toegang tot inlogomgeving en e-books"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-3 h-3 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-2 h-2 text-white" />
                          </div>
                          <span className="text-black text-xs leading-relaxed">{feature}</span>
                        </div>
                      ))}
                      <div className="flex items-start gap-2 pt-1 border-t border-gray-200">
                        <div className="w-3 h-3 bg-gradient-to-br from-orange-primary to-orange-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Plus className="w-2 h-2 text-white" />
                        </div>
                        <span className="text-black text-xs leading-relaxed">
                          <strong>Extra sessies:</strong> €19,99 per 30 min
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                

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
              
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-2 lg:p-3 border-2 border-orange-primary/50 shadow-3xl hover:shadow-4xl transition-all duration-500 hover:scale-110 hover:-rotate-1 ring-4 ring-orange-primary/20 min-h-[157px] h-full flex flex-col">
                {/* Premium header with icon */}
                <div className="text-center mb-2 pt-1">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-primary to-orange-light rounded-3xl flex items-center justify-center mx-auto mb-1 shadow-2xl group-hover:scale-125 transition-transform duration-500 relative">
                    <Zap className="w-5 h-5 text-white" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                      <Star className="w-2 h-2 text-orange-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold bg-gradient-to-r from-orange-primary to-orange-light bg-clip-text text-transparent mb-1">
                    Plus Pakket
                  </h3>
                  
                  <div className="relative">
                    <div className="text-2xl lg:text-3xl font-bold text-orange-primary mb-1">€119,99</div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse">
                      <Crown className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p className="text-warm-gray font-medium">per maand</p>
                </div>
                
                {/* Premium content section */}
                <div className="space-y-1 flex-grow">
                  <div className="bg-gradient-to-br from-orange-primary/10 to-orange-light/10 rounded-2xl p-2 border border-orange-primary/20">
                    <h4 className="font-bold text-orange-primary text-sm mb-1 flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      Voor wie?
                    </h4>
                    <p className="text-black text-xs leading-relaxed">
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
                        "Doorlopend WhatsApp/e-mail contact (max 15 berichten/week)",
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
                

              </div>
            </div>

            {/* Intensief Pakket - Premium Design */}
            <div className="group relative">
              {/* Floating background element */}
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-light/20 to-purple-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-2 lg:p-3 border border-white/60 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-rotate-1 min-h-[157px] h-full flex flex-col">
                {/* Premium header with icon */}
                <div className="text-center mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-light to-purple-primary rounded-3xl flex items-center justify-center mx-auto mb-1 shadow-xl group-hover:scale-110 transition-transform duration-500 relative">
                    <Zap className="w-4 h-4 text-white" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">⚡</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold bg-gradient-to-r from-purple-light to-purple-primary bg-clip-text text-transparent mb-1">
                    Intensief Pakket
                  </h3>
                  
                  <div className="relative">
                    <div className="text-2xl lg:text-3xl font-bold text-purple-primary mb-1">€169,99</div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-light rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">⚡</span>
                    </div>
                  </div>
                  <p className="text-warm-gray font-medium">per maand</p>
                </div>
                
                {/* Premium content section */}
                <div className="space-y-1 flex-grow">
                  <div className="bg-purple-light/10 rounded-2xl p-2">
                    <h4 className="font-bold text-purple-primary text-sm mb-1 flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      Voor wie?
                    </h4>
                    <p className="text-black text-xs leading-relaxed">
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
                        "Doorlopend WhatsApp/e-mail contact (max 20 berichten/week)",
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
                

              </div>
            </div>
          </div>

          {/* Specialisatie Kinderen - Orange Block met Kinderpakket */}
          <div className="col-span-full mt-16">
            <div className="relative group">
              {/* Premium subtle background with enhanced depth */}
              <div className="absolute -inset-3 bg-gradient-to-br from-orange-primary/15 via-orange-light/10 to-orange-primary/20 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition-all duration-700"></div>
              
              <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-3xl p-6 lg:p-8 text-white border border-orange-400/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] backdrop-blur-sm">
                {/* Header Section */}
                <div className="text-center mb-4">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-white/15 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border border-white/20 group-hover:scale-105 transition-transform duration-500">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-white drop-shadow-lg">
                    Kinderen Pakket
                  </h3>
                  
                  {/* Voor wie? beschrijving */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-white/20 max-w-4xl mx-auto">
                    <p className="text-sm text-white/95 leading-relaxed font-medium mb-3">
                      Voor kinderen en jongeren (t/m 17 jaar) die iemand zijn verloren en behoefte hebben aan steun, uitleg of gewoon iemand die écht luistert.
                    </p>
                    <p className="text-sm text-white/90 leading-relaxed">
                      Het kind/jongere bepaald zelf wat voor soort contact er is. Dit kan gewoon via beeldbellen zijn, telefonisch of anoniem via WhatsApp of e-mail. Wij dringen nergens op aan, het gaat erom dat uw kind/jongere zich het prettigst voelt.
                    </p>
                  </div>
                  
                  {/* Price */}
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1 drop-shadow-lg">€129,99</div>
                  <p className="text-lg text-white/90 mb-4">per maand</p>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
                  {/* Foto */}
                  <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/25 flex items-center justify-center shadow-lg">
                    <div className="rounded-xl overflow-hidden shadow-lg border border-white/20">
                      <img 
                        src={therapieKindImage} 
                        alt="Therapie voor kinderen - online sessies"
                        className="w-full h-auto max-w-xs object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Wat krijg je? */}
                  <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/25 shadow-lg">
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2 border-b border-white/20 pb-2">
                      <CheckCircle className="w-5 h-5" />
                      Wat krijg je?
                    </h4>
                    <div className="space-y-2">
                      {[
                        "2x per week gepland contactmoment (30 min)",
                        "Doorlopend WhatsApp/e-mail contact (max 30 berichten/week)",
                        "Kind bepaalt zelf het type contact",
                        "Speciale begeleiders voor kinderen",
                        "Behandeltraject aangepast aan leeftijd",
                        "Vertrouwelijkheid gegarandeerd",
                        "Voorrang bij wachttijden",
                        "Kindvriendelijke werkvormen"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 bg-white/10 rounded-lg p-2 border border-white/15">
                          <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                            <Check className="w-2.5 h-2.5 text-white" />
                          </div>
                          <span className="text-white/95 text-xs leading-relaxed font-medium">{feature}</span>
                        </div>
                      ))}
                      <div className="flex items-start gap-3 pt-2 border-t border-white/25 bg-white/10 rounded-lg p-2 border border-white/15">
                        <div className="w-4 h-4 bg-orange-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                          <Plus className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span className="text-white/95 text-xs leading-relaxed font-medium">
                          <strong>Extra sessies:</strong> €19,99 per 30 min
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}