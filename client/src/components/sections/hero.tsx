import { Link } from "wouter";
import { Heart, Handshake, Baby } from "lucide-react";
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
          <h2 className="text-lg lg:text-xl mb-4 font-light tracking-wide uppercase">Welkom bij</h2>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block">XENRA</span>
            <span className="block text-orange-light">NAZORGHULP</span>
          </h1>
        </div>
      </div>
      
      {/* Witte tekstbox ONDER de foto */}
      <div className="bg-purple-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-12 lg:p-16 shadow-2xl">
              <div className="text-center">
                <p className="text-xl lg:text-2xl text-warm-gray leading-relaxed">
                  Het verlies van een dierbare is een van de zwaarste momenten in een mensenleven. 
                  Juist dan is het belangrijk dat je niet alles alleen hoeft te doen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Emotionele sectie met foto en tekst */}
      <div className="bg-purple-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Donkerpaarse rand met lichtpaarse achtergrond */}
          <div className="border-4 border-purple-800 rounded-3xl bg-purple-200 p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Foto links - beperkte hoogte */}
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={familyImagePath} 
                    alt="Moeder met kinderen die steun zoeken na verlies" 
                    className="w-full h-auto object-cover max-h-96"
                  />
                </div>
              </div>
              
              {/* Tekst rechts */}
              <div className="order-1 lg:order-2 text-purple-900">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
