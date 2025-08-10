import { Mail, Clock, Calendar } from "lucide-react";
import Logo from "@/components/ui/logo";

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          <div>
            <div className="mb-6">
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-gray-700">Xenra Nazorghulp</span>
              </div>
            </div>
            <p className="text-gray-700 mb-8 leading-relaxed text-sm">
              Warme, persoonlijke en professionele begeleiding voor nabestaanden. 
              Wij zijn er om je te helpen met emotionele steun én praktische zaken.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-700">Contact</h3>
            <div className="space-y-3 text-gray-700">
              <p className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-3" />
                info@nazorghulp.nl
              </p>
              <p className="flex items-center text-sm">
                <Clock className="w-4 h-4 mr-3" />
                07:30 - 17:30
              </p>
              <p className="flex items-center text-sm">
                <Calendar className="w-4 h-4 mr-3" />
                Maandag t/m vrijdag
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-700">Onze Pakketten</h3>
            <div className="space-y-2 text-gray-700">
              <p className="text-sm">Basis Pakket - €99,99/maand</p>
              <p className="text-sm">Plus Pakket - €139,99/maand</p>
              <p className="text-sm">Intensief Pakket - €189,99/maand</p>
              <p className="text-sm">Kinderen Pakket - €149,99/maand</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-700">
            &copy; 2024 Xenra Nazorghulp. Alle rechten voorbehouden. | Privacy | Algemene Voorwaarden
          </p>
        </div>
      </div>
    </footer>
  );
}
