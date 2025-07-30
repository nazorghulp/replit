import { Link } from "wouter";
import { Heart, Handshake, Users, Shield, MessageCircle, ArrowRight } from "lucide-react";
import familyImagePath from "@assets/image_1753725391508.png";

export default function Hero() {
  return (
    <section className="relative">
      {/* Bosachtergrond met tekst erop */}
      <div 
        className="relative h-96 lg:h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&h=1200')`
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block">Nazorg voor Nabestaanden</span>
            <span className="block text-orange-light">Xenra Nazorghulp</span>
          </h1>
        </div>
      </div>
      
      {/* Emotionele sectie ONDER de foto */}
      <section className="relative py-24 bg-gradient-to-b from-purple-light to-purple-primary overflow-hidden">
        {/* Subtiele achtergrond pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-orange-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-20">            
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/30 shadow-2xl">
                <div className="space-y-8 text-lg lg:text-xl text-warm-gray leading-relaxed">
                  <p className="text-2xl font-medium text-purple-primary">
                    Het verlies van een dierbare is een van de zwaarste momenten in een mensenleven. 
                    Juist dan is het belangrijk dat je niet alles alleen hoeft te doen.
                  </p>
                  
                  <p className="text-lg lg:text-xl">
                    Bij Xenra Nazorg begrijpen we de diepte van jouw verdriet. We weten dat elke dag anders kan voelen, 
                    dat sommige momenten ondraaglijk lijken en dat herinneringen zowel troost als pijn kunnen brengen. 
                    Jouw verhaal is uniek, en jouw rouwproces verdient alle respect en tijd die nodig is.
                  </p>
                  
                  <p className="text-lg lg:text-xl">
                    Onze begeleiders zijn er niet om jouw pijn weg te nemen – dat kunnen we niet en dat willen we ook niet. 
                    Wel bieden we een veilige ruimte waar je kunt voelen wat je voelt, 
                    waar je tranen welkom zijn en waar je stiltes gerespecteerd worden. Daarnaast helpen we je om{" "}
                    het verlies een plek te geven in je leven.
                  </p>
                  
                  <p className="text-lg lg:text-xl">
                    Je bepaalt het tempo. Misschien ben je klaar voor diepgaande gesprekken, 
                    of heb je juist behoefte aan praktische ondersteuning bij de regelzaken. Wellicht wil je samen herinneringen ophalen, 
                    of zoek je manieren om de herdenking vorm te geven. We volgen jouw behoeften en gaan mee in wat jij nodig hebt.
                  </p>
                  
                  <p className="text-lg lg:text-xl">
                    Je bent niet alleen. Hoewel niemand jouw exacte pijn kan begrijpen, 
                    zijn er mensen die het pad van verlies hebben bewandeld en die je met warmte en expertise willen begeleiden. 
                    Bij Xenra Nazorg vind je die mensen.
                  </p>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                  <Link 
                    href="/diensten" 
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-orange-primary hover:bg-orange-600 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Bekijk Onze Pakketten
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-purple-primary bg-white hover:bg-purple-50 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-purple-primary transform hover:-translate-y-1"
                  >
                    Neem Contact Op
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Emotionele sectie met foto en tekst */}
      <div className="bg-purple-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Verplaatste kop */}
          <div className="text-center mb-12">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl px-8 py-6 inline-block">
              <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Je hoeft het niet <span className="text-orange-light">alleen</span> te dragen
              </h2>
            </div>
          </div>
          
          {/* Donkerpaarse rand met lichtpaarse achtergrond */}
          <div className="border-4 border-purple-800 rounded-3xl bg-purple-200 p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Foto links */}
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={familyImagePath} 
                    alt="Moeder met kinderen die steun zoeken na verlies" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              {/* Tekst rechts */}
              <div className="order-1 lg:order-2 text-black self-center">
                <h3 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
                  Het is oké om hulp te vragen
                </h3>
                <div className="space-y-6 text-lg lg:text-xl leading-relaxed">
                  <p>
                    Rouw is een natuurlijk proces, maar dat betekent niet dat je het alleen hoeft te doorstaan. 
                    Het verlies van een dierbare brengt emoties met zich mee die overweldigend kunnen zijn. 
                    Verdriet, boosheid, eenzaamheid en verwarring zijn allemaal normale reacties.
                  </p>
                  <p>
                    Bij Xenra Nazorg begrijpen we dat iedereen anders rouwt. Er is geen 'juiste' manier om 
                    met verlies om te gaan, en er is geen tijdslijn die voor iedereen geldt. Wat wel 
                    belangrijk is, is dat je de ruimte krijgt om te voelen wat je voelt.
                  </p>
                  <p>
                    Misschien voel je je schuldig over het zoeken van hulp, of denk je dat je het zelf 
                    moet kunnen. Maar het tegenovergestelde is waar: het vragen om ondersteuning is een 
                    teken van moed en zelfzorg. Xenra Nazorg kan een waardevolle rol spelen in jouw 
                    verwerkingsproces, door je de tools en begeleiding te bieden die je nodig hebt.
                  </p>
                </div>
                
                {/* Internal Link to Services */}
                <div className="mt-8">
                  <Link 
                    href="/diensten" 
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold text-lg group transition-colors duration-300"
                  >
                    Ontdek onze begeleidingspakketten
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}