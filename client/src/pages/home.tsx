import Hero from "@/components/sections/hero";
import HowWeWork from "@/components/sections/how-we-work";

export default function Home() {
  return (
    <div className="bg-purple-primary">
      <Hero />
      <HowWeWork />
      
      {/* Plan vandaag nog jouw eerste contactmoment */}
      <section className="py-20 bg-purple-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-natural-white rounded-3xl p-12 shadow-xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-6">
              Plan vandaag nog jouw eerste contactmoment
            </h2>
            <p className="text-xl text-warm-gray mb-10 leading-relaxed">
              Stuur ons een bericht of mail. Binnen één werkdag krijg je reactie.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/contact" 
                className="bg-purple-primary text-white px-10 py-4 rounded-2xl font-semibold hover:bg-purple-light transition-colors duration-300 text-lg"
              >
                Stuur een bericht
              </a>
              <a 
                href="mailto:info@nazorghulp.nl" 
                className="border-2 border-orange-primary text-orange-primary px-10 py-4 rounded-2xl font-semibold hover:bg-orange-primary hover:text-white transition-colors duration-300 text-lg"
              >
                Mail direct: info@nazorghulp.nl
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
