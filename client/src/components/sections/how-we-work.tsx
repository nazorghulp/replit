import { CalendarCheck, MessageCircle, Clock } from "lucide-react";

export default function HowWeWork() {
  return (
    <section className="py-20 bg-purple-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Hoe wij werken</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-white leading-relaxed">
              Bij ons geen lange wachttijden of vaste abonnementen. Jij bepaalt zelf wat je nodig hebt en wanneer. 
              Onze pakketten zijn per maand af te nemen – aan het einde van elke maand vragen we of je wilt verlengen. 
              Zo houd jij de regie.
            </p>
            <p className="text-xl text-white leading-relaxed">
              Contact verloopt op de manier die voor jou het prettigst voelt: via (beeld)bellen, WhatsApp of e-mail. 
              Wil je liever wat meer afstand of anoniem blijven? Geen probleem. We passen ons aan jouw tempo en wensen aan.
            </p>
            <p className="text-xl text-white leading-relaxed">
              Of u nou man, vrouw of kind bent, voor iedereen maken wij een passend behandelingstraject.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-natural-white rounded-2xl p-8 shadow-sm">
            <div className="w-20 h-20 bg-orange-soft rounded-full flex items-center justify-center mx-auto mb-6">
              <CalendarCheck className="w-10 h-10 text-orange-primary" />
            </div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">Direct starten</h3>
            <p className="text-warm-gray leading-relaxed">Binnen één werkdag krijg je reactie en kun je direct beginnen</p>
          </div>
          <div className="text-center bg-natural-white rounded-2xl p-8 shadow-sm">
            <div className="w-20 h-20 bg-purple-soft rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-purple-primary" />
            </div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">Jouw keuze</h3>
            <p className="text-warm-gray leading-relaxed">WhatsApp, telefoon of beeldbellen - wat voor jou het prettigst voelt</p>
          </div>
          <div className="text-center bg-natural-white rounded-2xl p-8 shadow-sm">
            <div className="w-20 h-20 bg-orange-soft rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-orange-primary" />
            </div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">Jouw tempo</h3>
            <p className="text-warm-gray leading-relaxed">Per maand opzegbaar, geen verplichtingen of automatische incasso</p>
          </div>
        </div>
      </div>
    </section>
  );
}
