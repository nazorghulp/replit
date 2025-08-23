import { Link } from "wouter";
import { Heart, Handshake, Users, Shield, MessageCircle, ArrowRight } from "lucide-react";
import familyImagePath from "@assets/image_1753725391508_optimized.png";
import breakImagePath from "@assets/generated_images/Peaceful_healing_landscape_break_53864a0f.png";

export default function Hero() {
  return (
    <section className="relative">
      {/* Bosachtergrond met tekst erop */}
      <div 
        className="relative h-80 sm:h-96 lg:h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&h=1200')`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block">Nazorg voor Nabestaanden</span>
            <span className="block text-orange-light">Cenra Nederland</span>
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
              <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/30 shadow-2xl">
                <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-warm-gray leading-relaxed">
                  <p className="text-lg sm:text-xl lg:text-2xl font-medium text-purple-primary">
                    Het verlies van een dierbare is een van de zwaarste momenten in een mensenleven. 
                    Juist dan is het belangrijk dat je niet alles alleen hoeft te doen.
                  </p>
                  
                  <p>
                    De leegte die achterblijft kan overweldigend zijn. Soms voelt het alsof je verdwaald bent 
                    in je eigen emoties – verdriet, gemis, misschien boosheid – en je niet weet waar je moet beginnen.
                  </p>
                  
                  <p>
                    Bij Cenra Nederland bieden we niet alleen een luisterend oor, maar professionele online therapie 
                    door ervaren psychologen, gespecialiseerd in rouw. We begrijpen dat rouwen geen rechte lijn is: 
                    de ene dag lukt het je om te praten, de andere dag voelt elke stap te zwaar.
                  </p>
                  
                  {/* Rustgevende break afbeelding */}
                  <div className="my-8 -mx-6 sm:-mx-8 lg:-mx-12">
                    <img 
                      src={breakImagePath} 
                      alt="Rustgevend landschap als visuele pauze" 
                      className="w-full h-24 sm:h-32 lg:h-40 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  
                  <p>
                    In onze sessies krijg je een veilige plek waar je mag voelen wat je voelt. 
                    Waar tranen, stilte en boosheid net zo welkom zijn als herinneringen en glimlachen. 
                    Samen werken we stap voor stap aan het vinden van houvast in een wereld die plotseling veranderd is.
                  </p>
                  
                  <p>
                    Of je nu behoefte hebt aan diepgaande therapeutische gesprekken, begeleiding bij dagelijkse uitdagingen, 
                    of steun bij herdenkingsmomenten – wij stemmen alles af op jouw tempo en jouw verhaal.
                  </p>
                  
                  <p>
                    Je hoeft dit niet alleen te dragen. Wij lopen met je mee, bieden steun op de momenten dat het zwaar is 
                    en reiken de handvatten aan om verder te kunnen, zonder dat je hoeft los te laten.
                  </p>
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
          <div className="border-2 sm:border-4 border-purple-800 rounded-2xl sm:rounded-3xl bg-purple-200 p-4 sm:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
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
                    Bij Cenra Nederland begrijpen we dat iedereen anders rouwt. Er is geen 'juiste' manier om 
                    met verlies om te gaan, en er is geen tijdslijn die voor iedereen geldt. Wat wel 
                    belangrijk is, is dat je de ruimte krijgt om te voelen wat je voelt.
                  </p>
                  <p>
                    Misschien voel je je schuldig over het zoeken van hulp, of denk je dat je het zelf 
                    moet kunnen. Maar het tegenovergestelde is waar: het vragen om ondersteuning is een 
                    teken van moed en zelfzorg. Cenra Nederland kan een waardevolle rol spelen in jouw 
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