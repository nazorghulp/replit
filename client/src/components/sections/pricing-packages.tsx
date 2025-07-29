import { Link } from "wouter";
import { Check, Plus, Info } from "lucide-react";

export default function PricingPackages() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">Onze Diensten</h2>
          <div className="text-lg text-warm-gray max-w-4xl mx-auto mb-6 space-y-4">
            <p>
              Bij Xenra Nazorg bieden we toegankelijke en flexibele behandelingen aan nabestaanden van alle leeftijden. 
              Onze pakketten zijn maandelijks verlengbaar, geen automatische incasso's en geen langdurige verplichtingen.
            </p>
            <p>
              Je beslist zelf maandelijks of je doorgaat en pas dan ontvang je een betaalverzoek.
            </p>
            <p>
              We bieden drie pakketten voor volwassenen – Basis, Plus en Intensief – elk met een afgestemde mix van 
              geplande behandelingen, WhatsApp- of e-mailcontact en praktische hulp.
            </p>
            <p>
              Voor kinderen t/m 17 jaar hebben we een speciaal behandeltraject, met ruimte voor anoniem contact 
              en extra aandacht voor hun tempo en beleving.
            </p>
          </div>
          <div className="bg-orange-primary bg-opacity-10 rounded-lg p-4 inline-block">
            <p className="text-orange-primary font-medium">
              <Info className="w-4 h-4 inline mr-2" />
              Flexibel en zonder verplichtingen
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Basis Pakket */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-dark-gray mb-2">Basis Pakket</h3>
              <div className="text-4xl font-bold text-purple-primary mb-2">€79,99</div>
              <p className="text-warm-gray">per maand</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-dark-gray mb-2">Voor wie?</h4>
              <p className="text-warm-gray text-sm mb-4">
                Voor mensen die vooral behoefte hebben aan een luisterend oor en af en toe advies.
              </p>
              
              <h4 className="font-semibold text-dark-gray mb-3">Wat krijg je?</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-warm-gray">1x per week gepland contactmoment (30 min)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-warm-gray">Doorlopend WhatsApp/e-mail contact (max 10 vragen/week)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-warm-gray">Reactie binnen 1 uur tijdens kantooruren</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-warm-gray">Toegang tot inlogomgeving en e-books</span>
                </li>
                <li className="flex items-start">
                  <Plus className="w-4 h-4 text-orange-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-warm-gray">Extra sessies: €19,99 per 30 min</span>
                </li>
              </ul>
            </div>
            
            <Link 
              href="/contact"
              className="w-full bg-purple-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-light transition-colors duration-200 block text-center"
            >
              Kies Basis Pakket
            </Link>
          </div>

          {/* Plus Pakket */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-orange-primary p-8 hover:shadow-xl transition-shadow duration-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-orange-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Populair
              </span>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-dark-gray mb-2">Plus Pakket</h3>
              <div className="text-4xl font-bold text-orange-primary mb-2">€119,99</div>
              <p className="text-warm-gray">per maand</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-dark-gray mb-2">Voor wie?</h4>
              <p className="text-warm-gray text-sm mb-4">
                Voor mensen die regelmatig begeleiding willen en behoefte hebben aan extra advies.
              </p>
              
              <h4 className="font-semibold text-dark-gray mb-3">Wat krijg je?</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-warm-gray">2x per week gepland contactmoment (30 min)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-warm-gray">Doorlopend WhatsApp/e-mail contact (max 15 vragen/week)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-warm-gray">Reactie binnen 1 uur tijdens kantooruren</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-warm-gray">1x per maand sessie over praktische zaken</span>
                </li>
                <li className="flex items-start">
                  <Plus className="w-4 h-4 text-orange-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-warm-gray">Extra sessies: €17,49 per 30 min</span>
                </li>
              </ul>
            </div>
            
            <Link 
              href="/contact"
              className="w-full bg-orange-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-light transition-colors duration-200 block text-center"
            >
              Kies Plus Pakket
            </Link>
          </div>

          {/* Intensief Pakket */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-dark-gray mb-2">Intensief Pakket</h3>
              <div className="text-4xl font-bold text-purple-primary mb-2">€169,99</div>
              <p className="text-warm-gray">per maand</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-dark-gray mb-2">Voor wie?</h4>
              <p className="text-warm-gray text-sm mb-4">
                Voor nabestaanden die intensieve begeleiding nodig hebben.
              </p>
              
              <h4 className="font-semibold text-dark-gray mb-3">Wat krijg je?</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-warm-gray">3x per week gepland contactmoment (30 min)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-warm-gray">Doorlopend WhatsApp/e-mail contact (max 20 vragen/week)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-warm-gray">Reactie binnen 30 minuten tijdens kantooruren</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-warm-gray">1x per maand sessie over praktische zaken</span>
                </li>
                <li className="flex items-start">
                  <Plus className="w-4 h-4 text-orange-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-warm-gray">Extra sessies: €14,49 per 30 min</span>
                </li>
              </ul>
            </div>
            
            <Link 
              href="/contact"
              className="w-full bg-purple-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-light transition-colors duration-200 block text-center"
            >
              Kies Intensief Pakket
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
