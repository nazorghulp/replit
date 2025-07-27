import Hero from "@/components/sections/hero";
import HowWeWork from "@/components/sections/how-we-work";

export default function Home() {
  return (
    <>
      <Hero />
      <HowWeWork />
      
      {/* Plan vandaag nog jouw eerste contactmoment */}
      <section className="py-16 bg-purple-primary bg-opacity-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark-gray mb-4">
            Plan vandaag nog jouw eerste contactmoment
          </h2>
          <p className="text-lg text-warm-gray mb-8">
            Stuur ons een bericht of mail. Binnen één werkdag krijg je reactie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-purple-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-light transition-colors duration-200"
            >
              Stuur een bericht
            </a>
            <a 
              href="mailto:info@nazorghulp.nl" 
              className="border border-purple-primary text-purple-primary px-8 py-3 rounded-lg font-medium hover:bg-purple-primary hover:text-white transition-colors duration-200"
            >
              Mail direct: info@nazorghulp.nl
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
