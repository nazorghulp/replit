import { CalendarCheck, MessageCircle, Clock } from "lucide-react";

export default function HowWeWork() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">Hoe wij werken</h2>
          <p className="text-lg text-warm-gray max-w-3xl mx-auto">
            Geen lange wachttijden, geen ingewikkelde trajecten. Je kiest een pakket dat bij jou past 
            en kunt direct starten. We werken via WhatsApp, telefoon of beeldbellen - wat voor jou het prettigst voelt.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CalendarCheck className="w-8 h-8 text-orange-primary" />
            </div>
            <h3 className="text-xl font-semibold text-dark-gray mb-2">Direct starten</h3>
            <p className="text-warm-gray">Binnen één werkdag krijg je reactie en kun je direct beginnen</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-purple-primary" />
            </div>
            <h3 className="text-xl font-semibold text-dark-gray mb-2">Jouw keuze</h3>
            <p className="text-warm-gray">WhatsApp, telefoon of beeldbellen - wat voor jou het prettigst voelt</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-orange-primary" />
            </div>
            <h3 className="text-xl font-semibold text-dark-gray mb-2">Jouw tempo</h3>
            <p className="text-warm-gray">Per maand opzegbaar, geen verplichtingen of automatische incasso</p>
          </div>
        </div>
      </div>
    </section>
  );
}
