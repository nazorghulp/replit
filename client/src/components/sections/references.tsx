import { Quote, Star } from "lucide-react";

export default function References() {
  const references = [
    {
      name: "Maria van der Berg",
      location: "Amsterdam",
      text: "Na het verlies van mijn partner voelde ik me volledig verloren. De begeleiders van Xenra hebben me geholpen om stap voor stap weer grip op mijn leven te krijgen. Hun begrip en professionaliteit hebben het verschil gemaakt.",
      rating: 5
    },
    {
      name: "Jan Hendriks", 
      location: "Utrecht",
      text: "Mijn dochter van 14 had veel moeite met het overlijden van haar oma. De gespecialiseerde kindbegeleiding was precies wat ze nodig had. Ze voelde zich direct begrepen en kon eindelijk haar verdriet uiten.",
      rating: 5
    },
    {
      name: "Sophie Jansen",
      location: "Rotterdam", 
      text: "De flexibiliteit in contact opnemen - soms WhatsApp, soms bellen - paste perfect bij wat ik toen aankon. Geen druk, gewoon oprechte ondersteuning wanneer ik het nodig had.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-orange-soft to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-purple-primary/10 rounded-full px-6 py-3 mb-6">
            <Quote className="w-5 h-5 text-purple-primary" />
            <span className="text-purple-primary font-semibold">Referenties</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-warm-gray mb-6">
            Wat onze cliënten zeggen
          </h2>
          <p className="text-xl text-warm-gray/80 max-w-2xl mx-auto">
            Persoonlijke ervaringen van mensen die door ons zijn begeleid tijdens een moeilijke periode
          </p>
        </div>

        {/* Referenties grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {references.map((reference, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-orange-primary" />
              </div>

              {/* Tekst */}
              <blockquote className="text-warm-gray leading-relaxed mb-6 text-lg">
                "{reference.text}"
              </blockquote>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(reference.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-primary text-orange-primary" />
                ))}
              </div>

              {/* Author */}
              <div className="border-t border-purple-100 pt-4">
                <div className="font-semibold text-purple-primary text-lg">
                  {reference.name}
                </div>
                <div className="text-warm-gray/70">
                  {reference.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtiele disclaimer */}
        <div className="text-center mt-12">
          <p className="text-sm text-warm-gray/60 italic">
            Namen zijn gefingeerd ter bescherming van de privacy van onze cliënten
          </p>
        </div>
      </div>
    </section>
  );
}