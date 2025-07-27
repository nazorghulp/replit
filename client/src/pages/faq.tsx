import FAQSection from "@/components/sections/faq-section";

export default function FAQ() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">Veelgestelde Vragen</h1>
          <p className="text-lg text-warm-gray">Vind snel antwoorden op de meest gestelde vragen</p>
        </div>

        <FAQSection />

        {/* Still have questions? */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-dark-gray mb-4">
              Heb je nog andere vragen?
            </h2>
            <p className="text-lg text-warm-gray mb-6">
              Aarzel niet om contact met ons op te nemen. We beantwoorden graag al je vragen 
              over onze dienstverlening en begeleiding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-purple-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-light transition-colors duration-200"
              >
                Stel je vraag
              </a>
              <a 
                href="mailto:info@nazorghulp.nl" 
                className="border border-purple-primary text-purple-primary px-8 py-3 rounded-lg font-medium hover:bg-purple-primary hover:text-white transition-colors duration-200"
              >
                E-mail ons direct
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
