import PricingPackages from "@/components/sections/pricing-packages";
import ChildrenSpecialization from "@/components/sections/children-specialization";
import { Heart, Package, Sparkles, Star, Shield, Users } from "lucide-react";
import HeadMeta from "@/components/seo/head-meta";

export default function Diensten() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Nazorg en rouwbegeleiding pakketten",
    "description": "Kies wat bij jou past - van basis tot intensieve rouwbegeleiding",
    "provider": {
      "@type": "Organization",
      "name": "Kazenra Nederland"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Rouwbegeleiding Pakketten",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basis Pakket",
            "description": "Rouwbegeleiding basis ondersteuning"
          },
          "price": "99.99",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Plus Pakket",
            "description": "Uitgebreide rouwbegeleiding"
          },
          "price": "139.99",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Intensief Pakket", 
            "description": "Intensieve rouwbegeleiding"
          },
          "price": "169.99",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kinderen Pakket",
            "description": "Rouwbegeleiding speciaal voor kinderen"
          },
          "price": "149.99",
          "priceCurrency": "EUR"
        }
      ]
    }
  };

  return (
    <div>
      <HeadMeta 
        title="Nazorg en rouwbegeleiding pakketten - Kies wat bij jou past"
        description="Van basis tot intensieve rouwbegeleiding. Flexibele pakketten zonder wachtlijst voor volwassenen en kinderen. Maandelijks opzegbaar."
        keywords="rouwbegeleiding pakketten, nazorg pakketten, rouwbegeleiding kinderen, rouwbegeleiding zonder wachtlijst, rouwbegeleiding prijs"
        url="https://nazorg.nl/diensten"
        structuredData={structuredData}
      />
      {/* Hero Section - Beautiful Header */}
      <section className="relative overflow-hidden">
        <div 
          className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(91, 33, 182, 0.8), rgba(251, 146, 60, 0.6)), url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200')`
          }}
        >
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 mb-8">
              <Package className="w-6 h-6 text-orange-light animate-pulse" />
              <span className="text-white/95 font-medium text-lg">Onze nazorgdiensten</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Passende <span className="text-orange-light">Begeleiding</span><br />
              Voor Elke Situatie
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12 max-w-4xl mx-auto">
              Van basis ondersteuning tot intensieve begeleiding - we hebben verschillende pakketten 
              zodat je precies de zorg krijgt die bij jouw situatie en behoeften past.
            </p>

            {/* Feature highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Shield className="w-8 h-8 text-orange-light mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Flexibel & Veilig</h3>
                <p className="text-white/80 text-sm">Maandelijks verlengbaar, volledige privacy</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Users className="w-8 h-8 text-orange-light mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Alle Leeftijden</h3>
                <p className="text-white/80 text-sm">Volwassenen en kinderen tot 17 jaar</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Heart className="w-8 h-8 text-orange-light mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Persoonlijk</h3>
                <p className="text-white/80 text-sm">Warme begeleiding op jouw tempo</p>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Original Content */}
      <div className="py-16">
        <PricingPackages />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ChildrenSpecialization />
        </div>
      </div>
    </div>
  );
}
