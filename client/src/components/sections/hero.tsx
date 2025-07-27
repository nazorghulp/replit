import { Link } from "wouter";
import { Heart, Handshake, Baby } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 lg:py-32 bg-natural-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-8">
            <h2 className="text-lg lg:text-xl text-warm-gray mb-4 font-light tracking-wide uppercase">Welkom bij</h2>
            <h1 className="text-4xl lg:text-6xl font-bold text-dark-gray mb-8 leading-tight">
              <span className="text-purple-primary">Xenra Nazorghulp</span>
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <blockquote className="text-xl lg:text-2xl text-warm-gray italic leading-relaxed mb-4">
              "Het verlies van een dierbare is een van de zwaarste momenten in een mensenleven. 
              Juist dan is het belangrijk dat je niet alles alleen hoeft te doen."
            </blockquote>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="lg:order-2 mb-12 lg:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600" 
              alt="Vredige bospad met zachte ochtendbelichting" 
              className="rounded-3xl shadow-xl w-full h-auto"
            />
          </div>
          <div className="lg:order-1">
            <h2 className="text-2xl lg:text-3xl font-bold text-dark-gray mb-8 leading-tight">
              Persoonlijke begeleiding tijdens een moeilijke tijd
            </h2>
            <p className="text-lg text-warm-gray mb-10 leading-relaxed">
              Xenra Nazorghulp biedt warme, persoonlijke en professionele begeleiding voor nabestaanden. 
              Wij zijn er om je te helpen met emotionele steun én praktische zaken.
            </p>
            
            <div className="bg-soft-beige rounded-2xl p-8 mb-10 border border-purple-soft">
              <h3 className="text-xl font-semibold text-dark-gray mb-6 text-center">
                Waarom kiezen voor Xenra Nazorghulp?
              </h3>
              <div className="grid gap-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-dark-gray font-medium">Persoonlijke begeleiding op jouw tempo</span>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Handshake className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-dark-gray font-medium">Geen verplichtingen: je bepaalt zelf per maand of je doorgaat</span>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Baby className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-dark-gray font-medium">Speciale aandacht voor kinderen tot 17 jaar</span>
                </div>
              </div>
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
