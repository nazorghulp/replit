import { CalendarCheck, MessageCircle, Clock, ArrowRight, Shield, Heart, Baby, Handshake } from "lucide-react";

export default function HowWeWork() {
  return (
    <section className="relative py-24 bg-purple-primary overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Heart className="w-5 h-5 text-orange-light" />
            <span className="text-white/90 font-medium">Onze werkwijze</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Hoe wij <span className="text-orange-light">werken</span>
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-black/60 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/50 shadow-2xl">
              <div className="space-y-8 text-lg lg:text-xl text-white/95 leading-relaxed">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-orange-light mt-1 flex-shrink-0" />
                  <p>
                    Bij ons <strong className="text-white">geen lange wachttijden</strong> of vaste abonnementen. 
                    Jij bepaalt zelf wat je nodig hebt en wanneer. Onze pakketten zijn per maand af te nemen – 
                    aan het einde van elke maand vragen we of je wilt verlengen. <strong className="text-orange-light">Zo houd jij de regie.</strong>
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-orange-light mt-1 flex-shrink-0" />
                  <p>
                    Contact verloopt op de manier die voor jou het prettigst voelt: via <strong className="text-white">(beeld)bellen, 
                    WhatsApp of e-mail</strong>. Wil je liever wat meer afstand of anoniem blijven? Geen probleem. 
                    We passen ons aan jouw tempo en wensen aan.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-orange-light mt-1 flex-shrink-0" />
                  <p>
                    Of u nu een <strong className="text-white">man, vrouw of kind</strong> bent, voor iedereen maken wij een 
                    <strong className="text-orange-light"> passend behandelingstraject</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="group">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300 h-full">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-primary to-orange-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <CalendarCheck className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Direct starten</h3>
              <p className="text-white/90 leading-relaxed text-center text-lg">
                Binnen <strong className="text-orange-light">één werkdag</strong> krijg je reactie en kun je direct beginnen
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300 h-full">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Jouw keuze</h3>
              <p className="text-white/90 leading-relaxed text-center text-lg">
                <strong className="text-orange-light">WhatsApp, telefoon of beeldbellen</strong> - wat voor jou het prettigst voelt
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300 h-full">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-primary to-orange-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Jouw tempo</h3>
              <p className="text-white/90 leading-relaxed text-center text-lg">
                Per maand opzegbaar, <strong className="text-orange-light">geen verplichtingen</strong> of automatische incasso
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{/* Hulp aan Kinderen & Jongeren sectie */}
export function ChildrenYouthHelp() {
  return (
    <section 
      className="relative py-24 overflow-hidden bg-yellow-100"
    >
      {/* Subtiele achtergrond pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-orange-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-purple-100 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Baby className="w-5 h-5 text-purple-primary" />
            <span className="text-purple-primary font-medium">Speciale zorg</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-dark-gray mb-8 leading-tight">
            Hulp aan <span className="text-purple-primary">Kinderen</span> & Jongeren
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-orange-50 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-purple-100 shadow-2xl">
              <div className="space-y-8 text-lg lg:text-xl text-warm-gray leading-relaxed">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-purple-primary mt-1 flex-shrink-0" />
                  <p>
                    <strong className="text-purple-primary">Rouw raakt ook kinderen</strong> – diep, maar vaak anders dan bij volwassenen. 
                    Ze begrijpen verlies nog niet altijd volledig en uiten gevoelens op hun eigen manier. Bij Xenra Nazorghulp 
                    bieden we daarom begeleiding speciaal gericht op <strong className="text-orange-primary">kinderen en jongeren tot 17 jaar</strong>.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-orange-primary mt-1 flex-shrink-0" />
                  <p>
                    Veel kinderen/jongeren kiezen in het begin voor <strong className="text-purple-primary">anoniem contact via WhatsApp of e-mail</strong>. 
                    Dat is helemaal prima. Als ze daar later aan toe zijn, kunnen we ook bellen of beeldbellen. 
                    <strong className="text-orange-primary">Ze bepalen zelf het tempo.</strong>
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-purple-primary mt-1 flex-shrink-0" />
                  <p>
                    We werken met een <strong className="text-purple-primary">speciaal behandeltraject</strong>, afgestemd op leeftijd en situatie. 
                    Wat tijdens de gesprekken wordt gedeeld, blijft tussen het kind en de begeleider. Alleen met toestemming van het kind 
                    betrekken we ouders of verzorgers.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <Baby className="w-6 h-6 text-orange-primary mt-1 flex-shrink-0" />
                  <p>
                    <strong className="text-orange-primary">Mocht er een wachtlijst zijn, dan krijgen kinderen altijd voorrang.</strong> 
                    Want juist zij verdienen tijdige, veilige en passende ondersteuning als ze te maken krijgen met verlies.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <Handshake className="w-6 h-6 text-purple-primary mt-1 flex-shrink-0" />
                  <p>
                    We hebben een <strong className="text-purple-primary">speciaal jeugdpakket</strong> (zie diensten). Ook dit pakket neemt u per maand af 
                    en als de maand bijna om is, wordt de ouders/verzorgers gevraagd of ze met een maand willen verlengen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
