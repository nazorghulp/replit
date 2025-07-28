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
      
      {/* Emotionele sectie ONDER de foto */}
      <div className="relative bg-gradient-to-b from-purple-primary to-purple-800 py-20 overflow-hidden">
        {/* Subtiele achtergrond elementen */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-orange-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Hoofdtekst in glasmorphism container */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-12 lg:p-16 shadow-2xl border border-white/30 mb-16">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-6 py-3 mb-8">
                  <Heart className="w-5 h-5 text-purple-primary" />
                  <span className="text-purple-primary font-medium">Begrip en medeleven</span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-8 leading-tight">
                  Je hoeft het niet alleen te dragen
                </h3>
                
                <div className="space-y-6 text-lg lg:text-xl text-warm-gray leading-relaxed">
                  <p className="text-2xl font-medium text-purple-primary">
                    Het verlies van een dierbare is een van de zwaarste momenten in een mensenleven. 
                    Juist dan is het belangrijk dat je niet alles alleen hoeft te doen.
                  </p>
                  
                  <p>
                    Bij Xenra Nazorg begrijpen we de diepte van jouw verdriet. We weten dat elke dag anders kan voelen, 
                    dat sommige momenten ondraaglijk lijken en dat herinneringen zowel troost als pijn kunnen brengen. 
                    <strong className="text-purple-primary">Jouw verhaal is uniek, en jouw rouwproces verdient alle respect en tijd die nodig is.</strong>
                  </p>
                  
                  <p>
                    Onze begeleiders zijn er niet om jouw pijn weg te nemen – dat kunnen we niet en dat willen we ook niet. 
                    Maar we kunnen wel <strong className="text-orange-primary">een veilige ruimte bieden</strong> waar je kunt voelen wat je voelt, 
                    waar je tranen welkom zijn en waar je stiltes gerespecteerd worden.
                  </p>
                  
                  <p>
                    <strong className="text-purple-primary">Xenra Nazorg staat voor warme, professionele begeleiding 
                    zonder oordeel</strong>. We lopen een stukje mee op jouw pad, in jouw tempo, met jouw verhaal centraal. 
                    Want ook al voelt het misschien niet zo: je bent sterker dan je denkt, en je verdient alle steun die je nodig hebt.
                  </p>
                </div>
                
                {/* Call-to-action */}
                <div className="mt-12 pt-8 border-t border-purple-100">
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <div className="text-center">
                      <p className="text-lg text-warm-gray mb-4">
                        Klaar voor een gesprek? <strong className="text-purple-primary">We luisteren.</strong>
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                          href="/contact" 
                          className="bg-purple-primary text-white px-8 py-4 rounded-2xl font-semibold hover:bg-purple-600 transition-colors duration-300 text-lg shadow-lg"
                        >
                          Plan een gesprek
                        </a>
                        <a 
                          href="mailto:info@nazorghulp.nl" 
                          className="border-2 border-orange-primary text-orange-primary px-8 py-4 rounded-2xl font-semibold hover:bg-orange-primary hover:text-white transition-colors duration-300 text-lg"
                        >
                          Stuur een mail
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
