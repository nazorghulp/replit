import { CalendarCheck, MessageCircle, Clock, ArrowRight, Shield, Heart } from "lucide-react";

export default function HowWeWork() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-purple-900 via-purple-primary to-purple-800 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-orange-primary rounded-full blur-3xl"></div>
      </div>
      
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
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
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
                    Of u nou <strong className="text-white">man, vrouw of kind</strong> bent, voor iedereen maken wij een 
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
