export default function Kinderen() {
  return (
    <div className="bg-purple-primary min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Begeleiding voor Kinderen
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Speciale aandacht voor kinderen tot 17 jaar
          </p>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-xl mb-12">
          <h2 className="text-3xl font-bold text-dark-gray mb-8 text-center">
            Specialisatie Kinderen
          </h2>
          
          <div className="prose prose-lg max-w-none text-dark-gray">
            <p className="text-xl mb-6">
              Voor kinderen tot 17 jaar bieden we begeleiding die speciaal is afgestemd op hun leeftijd en hersteltempo.
            </p>
            
            <div className="bg-soft-beige rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-dark-gray mb-6">
                Wat maakt onze kinderbegeleiding bijzonder?
              </h3>
              
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-purple-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <span>Sessies duren langer dan bij volwassenen</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-orange-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <span>Speelser en rustiger opgebouwd</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-purple-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <span>Aangepast aan de leeftijd en ontwikkelingsfase</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-orange-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <span>Respectvol omgaan met hun eigen hersteltempo</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-purple-soft rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-dark-gray mb-4">
                  Voor jongere kinderen (5-12 jaar)
                </h4>
                <ul className="space-y-2 text-dark-gray">
                  <li>• Speelse vormen van gesprek</li>
                  <li>• Gebruik van tekeningen en verhalen</li>
                  <li>• Korte, frequent contact</li>
                  <li>• Betrekking van ouders/verzorgers</li>
                </ul>
              </div>
              
              <div className="bg-orange-soft rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-dark-gray mb-4">
                  Voor tieners (13-17 jaar)
                </h4>
                <ul className="space-y-2 text-dark-gray">
                  <li>• Meer privacy en zelfstandigheid</li>
                  <li>• Focus op school en vriendschappen</li>
                  <li>• Hulp bij emotieregulatie</li>
                  <li>• Begeleiding bij toekomstplannen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-natural-white rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-dark-gray mb-6">
              Interesse in kinderbegeleiding?
            </h3>
            <p className="text-xl text-warm-gray mb-8">
              Neem contact op voor een vrijblijvend gesprek over hoe wij uw kind kunnen helpen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-purple-primary text-white px-10 py-4 rounded-2xl font-semibold hover:bg-purple-light transition-colors duration-300 text-lg"
              >
                Contact opnemen
              </a>
              <a 
                href="mailto:info@nazorghulp.nl" 
                className="border-2 border-orange-primary text-orange-primary px-10 py-4 rounded-2xl font-semibold hover:bg-orange-primary hover:text-white transition-colors duration-300 text-lg"
              >
                Direct mailen
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}