import { Heart, Award, DoorOpen, Lock } from "lucide-react";

export default function OverOns() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center mb-16">
          <div className="mb-10 lg:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600" 
              alt="Zachte hand die een delicate veer vasthoudt, symbool van zorg en medeleven" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-6">Wie zijn wij?</h1>
            <p className="text-lg text-warm-gray mb-6 leading-relaxed">
              Xenra Nazorghulp is opgericht door Hilko Verdult. Na jarenlange ervaring met ondersteuning 
              van nabestaanden besloot hij een dienst op te zetten die écht persoonlijk is. Geen 
              standaardoplossingen, maar begeleiding die aansluit bij jouw situatie.
            </p>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
              <h3 className="text-xl font-semibold text-dark-gray mb-4">Onze kernwaarden</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Heart className="w-5 h-5 text-purple-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-dark-gray">Empathie</h4>
                    <p className="text-sm text-warm-gray">We luisteren zonder oordeel</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-5 h-5 text-purple-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-dark-gray">Professionaliteit</h4>
                    <p className="text-sm text-warm-gray">Duidelijke afspraken, betrouwbare begeleiding</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <DoorOpen className="w-5 h-5 text-purple-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-dark-gray">Laagdrempelig</h4>
                    <p className="text-sm text-warm-gray">Contact op jouw manier en jouw tempo</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Lock className="w-5 h-5 text-purple-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-dark-gray">Vertrouwelijk</h4>
                    <p className="text-sm text-warm-gray">Alles blijft tussen jou en jouw begeleider</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-primary bg-opacity-5 rounded-xl p-6 border border-purple-primary border-opacity-20">
              <h3 className="text-xl font-semibold text-dark-gray mb-3">Waarom Xenra?</h3>
              <p className="text-warm-gray">
                Omdat wij geloven dat nazorg méér is dan een luisterend oor. Soms heb je praktische hulp 
                nodig: hoe ga je om met verjaardagen? Wanneer kun je weer werken? Wij denken mee op alle fronten.
              </p>
            </div>
          </div>
        </div>

        {/* About Hilko Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-dark-gray mb-6">Over Hilko Verdult</h2>
            <div className="text-lg text-warm-gray leading-relaxed space-y-4">
              <p>
                Hilko Verdult heeft jarenlange ervaring in nazorg en begeleiding van nabestaanden. 
                Zijn persoonlijke aanpak en diepe begrip voor de unieke uitdagingen waar nabestaanden 
                mee te maken krijgen, vormen de basis van Xenra Nazorghulp.
              </p>
              <p>
                Met een focus op empathische begeleiding en praktische ondersteuning, helpt Hilko 
                mensen door een van de moeilijkste periodes van hun leven. Zijn filosofie is eenvoudig: 
                iedereen verdient persoonlijke aandacht en begeleiding die past bij hun eigen situatie en tempo.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-dark-gray mb-4">
            Klaar om de eerste stap te zetten?
          </h2>
          <p className="text-lg text-warm-gray mb-8">
            Neem contact met ons op voor een vrijblijvend gesprek over hoe wij jou kunnen helpen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-purple-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-light transition-colors duration-200"
            >
              Neem contact op
            </a>
            <a 
              href="/diensten" 
              className="border border-purple-primary text-purple-primary px-8 py-3 rounded-lg font-medium hover:bg-purple-primary hover:text-white transition-colors duration-200"
            >
              Bekijk onze pakketten
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
