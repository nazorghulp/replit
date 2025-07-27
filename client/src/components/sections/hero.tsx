import { Link } from "wouter";
import { Heart, Handshake, Baby } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="lg:order-2 mb-10 lg:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600" 
              alt="Vredige bospad met zachte ochtendbelichting" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="lg:order-1">
            <h1 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-6 leading-tight">
              Welkom bij <span className="text-purple-primary">Xenra Nazorghulp</span>
            </h1>
            <p className="text-lg text-warm-gray mb-8 leading-relaxed">
              Het verlies van een dierbare is een van de zwaarste momenten in een mensenleven. 
              Juist dan is het belangrijk dat je niet alles alleen hoeft te doen. Xenra Nazorghulp 
              biedt warme, persoonlijke en professionele begeleiding voor nabestaanden. Wij zijn er 
              om je te helpen met emotionele steun én praktische zaken.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
              <h3 className="text-xl font-semibold text-dark-gray mb-4">
                Waarom kiezen voor Xenra Nazorghulp?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Heart className="w-5 h-5 text-orange-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-warm-gray">Persoonlijke begeleiding op jouw tempo</span>
                </li>
                <li className="flex items-start">
                  <Handshake className="w-5 h-5 text-orange-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-warm-gray">Geen verplichtingen: je bepaalt zelf per maand of je doorgaat</span>
                </li>
                <li className="flex items-start">
                  <Baby className="w-5 h-5 text-orange-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-warm-gray">Speciale aandacht voor kinderen tot 17 jaar</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-purple-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-light transition-colors duration-200 text-center"
              >
                Start vandaag nog
              </Link>
              <Link 
                href="/diensten" 
                className="border border-purple-primary text-purple-primary px-8 py-3 rounded-lg font-medium hover:bg-purple-primary hover:text-white transition-colors duration-200 text-center"
              >
                Bekijk pakketten
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
