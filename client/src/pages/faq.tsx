import FAQSection from "@/components/sections/faq-section";
import { HelpCircle, MessageCircle, Phone, Mail, Clock, Shield } from "lucide-react";
import HeadMeta from "@/components/seo/head-meta";

export default function FAQ() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hoe snel kan ik starten met de begeleiding?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zo snel mogelijk na je aanmelding nemen we contact met je op voor een vrijblijvend kennismakingsgesprek."
        }
      },
      {
        "@type": "Question", 
        "name": "Hoe werkt rouwbegeleiding online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Onze begeleiding kan volledig online plaatsvinden via videogesprekken, telefonisch contact en berichtuitwisseling."
        }
      },
      {
        "@type": "Question",
        "name": "Worden kinderen en jongeren ook begeleid?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, we zijn gespecialiseerd in nazorgbegeleiding voor kinderen en jongeren tot 17 jaar."
        }
      }
    ]
  };

  return (
    <div>
      <HeadMeta 
        title="Veelgestelde vragen over nazorg en rouwbegeleiding"
        description="Vind antwoorden op vragen over onze pakketten, kosten en werkwijze. Alles over rouwbegeleiding online en voor kinderen."
        keywords="veelgestelde vragen rouwbegeleiding, hoe werkt rouwbegeleiding online, rouwbegeleiding kinderen vragen, nazorg vragen"
        url="https://nazorg.nl/faq"
        structuredData={structuredData}
      />
      {/* Hero Section with Professional Image */}
      <section className="relative">
        <div 
          className="relative h-96 lg:h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&h=1200')`
          }}
        >
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <HelpCircle className="w-6 h-6 text-orange-light" />
              <span className="text-white/90 font-medium">Ondersteuning & Hulp</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Veelgestelde <span className="text-orange-light">Vragen</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              Vind direct antwoorden op al je vragen over onze nazorgdiensten, 
              behandelingen en begeleiding tijdens deze moeilijke periode.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-6">
              Transparantie en Duidelijkheid
            </h2>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
              We begrijpen dat je in deze periode van rouw veel vragen hebt. 
              Hieronder vind je uitgebreide antwoorden op de meest gestelde vragen 
              over onze werkwijze, kosten en begeleiding.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-purple-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-2">Praktische Zaken</h3>
              <p className="text-warm-gray">Aanmelden, kosten, betalingen en flexibiliteit</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-2">Privacy & Veiligheid</h3>
              <p className="text-warm-gray">Vertrouwelijkheid, anonimiteit en gegevensbescherming</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-purple-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-2">Begeleiding</h3>
              <p className="text-warm-gray">Werkwijze, specialisaties en behandeltrajecten</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <FAQSection />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-purple-primary to-purple-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Nog andere vragen?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We begrijpen dat elke situatie uniek is. Aarzel niet om persoonlijk contact op te nemen 
              voor vragen die hier niet beantwoord worden.
            </p>
            
            {/* Contact Options */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-2xl p-6">
                <Phone className="w-8 h-8 text-orange-light mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Bellen</h3>
                <p className="text-white/80 text-sm">Direct persoonlijk contact</p>
              </div>
              
              <div className="bg-white/10 rounded-2xl p-6">
                <Mail className="w-8 h-8 text-orange-light mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">E-mailen</h3>
                <p className="text-white/80 text-sm">info@nazorghulp.nl</p>
              </div>
              
              <div className="bg-white/10 rounded-2xl p-6">
                <MessageCircle className="w-8 h-8 text-orange-light mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
                <p className="text-white/80 text-sm">Direct en laagdrempelig</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-orange-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-light transition-colors duration-200 shadow-lg"
              >
                Neem Contact Op
              </a>
              <a 
                href="mailto:info@nazorghulp.nl" 
                className="bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-colors duration-200"
              >
                E-mail Direct
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
