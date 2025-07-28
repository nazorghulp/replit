import Hero from "@/components/sections/hero";
import HowWeWork, { ChildrenYouthHelp } from "@/components/sections/how-we-work";

export default function Home() {
  return (
    <div className="bg-purple-primary">
      <Hero />
      <HowWeWork />
      <ChildrenYouthHelp />
      
      {/* Plan vandaag nog jouw eerste contactmoment */}
      <section className="py-20 bg-purple-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-purple-100 rounded-3xl p-12 shadow-xl border border-purple-200">
            <h2 className="text-3xl lg:text-4xl font-bold text-purple-primary mb-6">
              Plan vandaag nog jouw eerste contactmoment
            </h2>
            <p className="text-xl text-purple-700 mb-10 leading-relaxed">
              Stuur ons een bericht. Binnen één werkdag krijg je reactie.
            </p>
            <div className="flex justify-center">
              <a 
                href="/contact" 
                className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-semibold hover:bg-blue-700 transition-colors duration-300 text-lg shadow-lg"
              >
                Stuur een bericht
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
