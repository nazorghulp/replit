import { Mail, Clock, Calendar } from "lucide-react";
import Logo from "@/components/ui/logo";

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  X
                </div>
                <span className="ml-3 text-xl font-semibold">Xenra Nazorghulp</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Warme, persoonlijke en professionele begeleiding voor nabestaanden. 
              Wij zijn er om je te helpen met emotionele steun én praktische zaken.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@nazorghulp.nl
              </p>
              <p className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                07:30 - 17:30
              </p>
              <p className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Maandag t/m vrijdag
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Onze Pakketten</h3>
            <div className="space-y-2 text-gray-300">
              <p>Basis Pakket - €79,99/maand</p>
              <p>Plus Pakket - €119,99/maand</p>
              <p>Intensief Pakket - €169,99/maand</p>
              <p className="text-orange-primary">Per maand opzegbaar</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Xenra Nazorghulp. Alle rechten voorbehouden. | Privacy & Cookies | Algemene Voorwaarden
          </p>
        </div>
      </div>
    </footer>
  );
}
