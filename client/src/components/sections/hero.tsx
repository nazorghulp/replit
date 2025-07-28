import { Link } from "wouter";
import { Heart, Handshake, Baby, Shield, MessageCircle } from "lucide-react";
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
      <section className="relative py-24 bg-gradient-to-b from-purple-primary to-purple-800 overflow-hidden">
        {/* Subtiele achtergrond pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-orange-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Heart className="w-5 h-5 text-orange-light" />
              <span className="text-white/90 font-medium">Begrip en medeleven</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Je hoeft het niet <span className="text-orange-light">alleen</span> te dragen
            </h2>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/30 shadow-2xl">
                <div className="space-y-8 text-lg lg:text-xl text-warm-gray leading-relaxed">
                  <div className="flex items-start gap-4">
                    <Heart className="w-6 h-6 text-purple-primary mt-1 flex-shrink-0" />
                    <p className="text-2xl font-medium text-purple-primary">
                      Het verlies van een dierbare is een van de zwaarste momenten in een mensenleven. 
                      Juist dan is het belangrijk dat je niet alles alleen hoeft te doen.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-orange-primary mt-1 flex-shrink-0" />
                    <p>
                      Bij Xenra Nazorg begrijpen we de diepte van jouw verdriet. We weten dat elke dag anders kan voelen, 
                      dat sommige momenten ondraaglijk lijken en dat herinneringen zowel troost als pijn kunnen brengen. 
                      <strong className="text-purple-primary">Jouw verhaal is uniek, en jouw rouwproces verdient alle respect en tijd die nodig is.</strong>
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MessageCircle className="w-6 h-6 text-purple-primary mt-1 flex-shrink-0" />
                    <p>
                      Onze begeleiders zijn er niet om jouw pijn weg te nemen – dat kunnen we niet en dat willen we ook niet. 
                      Wel bieden we <strong className="text-orange-primary">een veilige ruimte</strong> waar je kunt voelen wat je voelt, 
                      waar je tranen welkom zijn en waar je stiltes gerespecteerd worden. Daarnaast helpen we je om{" "}
                      <strong className="text-purple-primary">het verlies een plek te geven</strong> in je leven.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Heart className="w-6 h-6 text-orange-primary mt-1 flex-shrink-0" />
                    <p>
                      <strong className="text-purple-primary">Xenra Nazorg staat voor warme, professionele begeleiding 
                      zonder oordeel</strong>. We lopen een stukje mee op jouw pad, in jouw tempo, met jouw verhaal centraal. 
                      Want ook al voelt het misschien niet zo: <strong className="text-orange-primary">je bent sterker dan je denkt, en je verdient alle steun die je nodig hebt.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hulp aan Kinderen & Jongeren sectie met foto achtergrond */}
      <section 
        className="relative py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&h=1200')`
        }}
      >
        {/* Subtiele achtergrond pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-orange-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-purple-100 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Baby className="w-5 h-5 text-purple-primary" />
              <span className="text-purple-primary font-medium">Speciale zorg</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-dark-gray mb-8 leading-tight">
              Hulp aan <span className="text-purple-primary">Kinderen</span> & Jongeren
            </h2>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-purple-50 to-orange-50 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-purple-100 shadow-2xl">
                <div className="space-y-8 text-lg lg:text-xl text-warm-gray leading-relaxed">
                  <div className="flex items-start gap-4">
                    <Heart className="w-6 h-6 text-purple-primary mt-1 flex-shrink-0" />
                    <p>
                      <strong className="text-purple-primary">Rouw raakt ook kinderen</strong> – diep, maar vaak anders dan bij volwassenen. 
                      Ze begrijpen verlies nog niet altijd volledig en uiten gevoelens op hun eigen manier. Bij Xenra Nazorghulp 
                      bieden we daarom begeleiding speciaal gericht op <strong className="text-orange-primary">kinderen en jongeren tot 17 jaar</strong>.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MessageCircle className="w-6 h-6 text-orange-primary mt-1 flex-shrink-0" />
                    <p>
                      Veel kinderen/jongeren kiezen in het begin voor <strong className="text-purple-primary">anoniem contact via WhatsApp of e-mail</strong>. 
                      Dat is helemaal prima. Als ze daar later aan toe zijn, kunnen we ook bellen of beeldbellen. 
                      <strong className="text-orange-primary">Ze bepalen zelf het tempo.</strong>
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-purple-primary mt-1 flex-shrink-0" />
                    <p>
                      We werken met een <strong className="text-purple-primary">speciaal behandeltraject</strong>, afgestemd op leeftijd en situatie. 
                      Wat tijdens de gesprekken wordt gedeeld, blijft tussen het kind en de begeleider. Alleen met toestemming van het kind 
                      betrekken we ouders of verzorgers.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Baby className="w-6 h-6 text-orange-primary mt-1 flex-shrink-0" />
                    <p>
                      <strong className="text-orange-primary">Mocht er een wachtlijst zijn, dan krijgen kinderen altijd voorrang.</strong> 
                      Want juist zij verdienen tijdige, veilige en passende ondersteuning als ze te maken krijgen met verlies.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Handshake className="w-6 h-6 text-purple-primary mt-1 flex-shrink-0" />
                    <p>
                      We hebben een <strong className="text-purple-primary">speciaal jeugdpakket</strong> (zie diensten). Ook dit pakket neemt u per maand af 
                      en als de maand bijna om is, wordt de ouders/verzorgers gevraagd of ze met een maand willen verlengen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
