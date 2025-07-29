import { Mail, Clock, Calendar } from "lucide-react";
import Logo from "@/components/ui/logo";

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  X
                </div>
                <span className="ml-4 text-2xl font-semibold">Xenra Nazorghulp</span>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Warme, persoonlijke en professionele begeleiding voor nabestaanden. 
              Wij zijn er om je te helpen met emotionele steun én praktische zaken.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-center text-lg">
                <Mail className="w-5 h-5 mr-3" />
                info@nazorghulp.nl
              </p>
              <p className="flex items-center text-lg">
                <Clock className="w-5 h-5 mr-3" />
                07:30 - 17:30
              </p>
              <p className="flex items-center text-lg">
                <Calendar className="w-5 h-5 mr-3" />
                Maandag t/m vrijdag
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Onze Pakketten</h3>
            <div className="space-y-2 text-gray-400">
              <p className="text-sm">Basis Pakket - €79,99/maand</p>
              <p className="text-sm">Plus Pakket - €119,99/maand</p>
              <p className="text-sm">Intensief Pakket - €169,99/maand</p>
              <p className="text-sm">Kinderen Pakket - €129,99/maand</p>
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
