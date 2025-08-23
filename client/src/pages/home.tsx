import Hero from "@/components/sections/hero";
import HowWeWork, { ChildrenYouthHelp } from "@/components/sections/how-we-work";
import References from "@/components/sections/references";
import HeadMeta from "@/components/seo/head-meta";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kazenra Nederland",
    "description": "Professionele nazorg en rouwbegeleiding voor nabestaanden en kinderen",
    "url": "https://nazorg.nl",
    "telephone": "085-401 92 65",
    "priceRange": "€99-€189",
    "serviceArea": "Nederland",
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
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Plus Pakket",
            "description": "Uitgebreide rouwbegeleiding"
          }
        }
      ]
    }
  };

  return (
    <div className="bg-orange-soft">
      <HeadMeta 
        title="Nazorg voor nabestaanden - Kazenra Nederland"
        description="Directe begeleiding bij verlies. Kies je eigen pakket zonder wachtlijst - ook voor kinderen. Professionele nazorg en rouwbegeleiding op jouw tempo."
        keywords="nazorg nabestaanden, rouwbegeleiding, kinderen rouw verwerken, rouw support online, rouwbegeleiding zonder wachtlijst, begeleiding verlies, nazorg begeleiding na overlijden ouder"
        url="https://nazorg.nl"
        structuredData={structuredData}
      />
      <Hero />
      <HowWeWork />
      <ChildrenYouthHelp />
      <References />
    </div>
  );
}
