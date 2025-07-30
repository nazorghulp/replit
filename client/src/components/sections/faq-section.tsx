import { useState } from "react";
import { ChevronDown, Clock, Shield, Users, MessageCircle, Euro, Calendar, Phone, Globe } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const faqData = [
  {
    category: "Praktische Zaken",
    icon: Clock,
    questions: [
      {
        question: "Hoe snel kan ik starten met de begeleiding?",
        answer: "Binnen één werkdag na je aanmelding nemen we contact met je op voor een vrijblijvend kennismakingsgesprek. We begrijpen dat je in een moeilijke periode zit en willen je zo snel mogelijk de ondersteuning bieden die je nodig hebt. Na het intakegesprek kunnen we direct beginnen met de begeleiding."
      },
      {
        question: "Hoe werkt de betaling en welke kosten zijn er?",
        answer: "Je ontvangt elke maand een duidelijk betaalverzoek per e-mail. Er is geen automatische incasso, zodat je volledig de controle houdt. Onze pakketten variëren van €79,99 tot €129,99 per maand. Er zijn geen verborgen kosten, opstartkosten of administratiekosten. Je betaalt alleen voor de maanden dat je gebruik maakt van onze diensten."
      },
      {
        question: "Kan ik per maand stoppen of ben ik gebonden aan een contract?",
        answer: "Je zit nergens aan vast. Je bepaalt elke maand opnieuw of je de begeleiding wilt voortzetten. Er zijn geen langetermijncontracten of opzegtermijnen. We begrijpen dat je proces van rouw uniek is en je de flexibiliteit nodig hebt om te stoppen wanneer je er klaar voor bent."
      },
      {
        question: "Kan ik extra sessies bijboeken als ik meer ondersteuning nodig heb?",
        answer: "Ja, bij elk pakket kun je altijd extra individuele sessies bijboeken tegen een vast tarief van €45 per sessie. Dit geeft je de flexibiliteit om in moeilijke periodes extra ondersteuning te krijgen zonder van pakket te hoeven wisselen."
      }
    ]
  },
  {
    category: "Privacy & Veiligheid",
    icon: Shield,
    questions: [
      {
        question: "Kan ik anoniem contact hebben en zijn mijn gegevens veilig?",
        answer: "Ja, volledige anonimiteit is mogelijk. Je mag een nickname, initialen of zelfs een andere naam gebruiken tijdens de begeleiding. We respecteren je behoefte aan privacy en vragen alleen om de informatie die noodzakelijk is voor de begeleiding. Al je gegevens worden veilig opgeslagen volgens de AVG-wetgeving."
      },
      {
        question: "Zijn de gesprekken en berichten vertrouwelijk?",
        answer: "Absolute vertrouwelijkheid is de basis van onze werkwijze. Alles wat je deelt blijft tussen jou en je persoonlijke begeleider. We zijn gebonden aan de beroepsethiek en privacy-wetgeving. Je verhaal wordt nooit gedeeld met derden zonder jouw expliciete toestemming."
      },
      {
        question: "Hoe wordt mijn privacy beschermd bij online begeleiding?",
        answer: "We gebruiken veilige, geëncrypteerde communicatiekanalen voor alle online gesprekken en berichten. Onze platformen voldoen aan de hoogste beveiligingsstandaarden. Je kunt er zeker van zijn dat je privacy en de vertrouwelijkheid van je gesprekken volledig beschermd zijn."
      }
    ]
  },
  {
    category: "Begeleiding & Werkwijze",
    icon: MessageCircle,
    questions: [
      {
        question: "Worden kinderen en jongeren ook begeleid?",
        answer: "Ja, we zijn gespecialiseerd in nazorgbegeleiding voor kinderen en jongeren tot 17 jaar. Onze kinderbegeleiding is speciaal aangepast aan hun leeftijd en ontwikkelingsperiode. De sessies duren langer, zijn speelser en rustiger opgebouwd, en zijn afgestemd op hun unieke verwerkingsproces van verlies en rouw."
      },
      {
        question: "Moet ik in Nederland wonen om gebruik te maken van jullie diensten?",
        answer: "Nee, dat hoeft niet. Onze begeleiding kan volledig online plaatsvinden via videogesprekken, telefonisch contact en berichtuitwisseling. Dit betekent dat je ongeacht je locatie - binnen of buiten Nederland - gebruik kunt maken van onze diensten. We zijn er voor je, waar je ook bent."
      },
      {
        question: "Wat is de werkwijze en hoe verloopt een typische begeleidingssessie?",
        answer: "Elke begeleiding start met een persoonlijk intakegesprek waarin we kennismaken en je situatie bespreken. Daarna stellen we samen een begeleidingsplan op dat aansluit bij jouw behoeften. Sessies kunnen plaatsvinden via videobellen, telefonisch contact of berichtuitwisseling, afhankelijk van wat voor jou het prettigst voelt."
      },
      {
        question: "Hoeveel ervaring heeft Xenra Nazorghulp met rouwbegeleiding?",
        answer: "Xenra Nazorghulp is opgericht door Hilko Verdult, die jarenlange ervaring heeft in nazorg en professionele begeleiding van nabestaanden. Onze begeleiders zijn gespecialiseerd in rouwverwerking en hebben uitgebreide training in het begeleiden van mensen in verlies en rouw. We combineren professionele expertise met een warme, persoonlijke benadering."
      }
    ]
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId);
    } else {
      newOpenItems.add(itemId);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="space-y-8">
      {faqData.map((category, categoryIndex) => {
        const IconComponent = category.icon;
        return (
          <div key={categoryIndex} className="bg-gradient-to-r from-purple-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-purple-100">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-purple-primary rounded-xl flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-dark-gray">{category.category}</h2>
            </div>

            {/* Questions in Category */}
            <div className="space-y-4">
              {category.questions.map((item, questionIndex) => {
                const itemId = `${categoryIndex}-${questionIndex}`;
                return (
                  <Collapsible key={itemId} open={openItems.has(itemId)} onOpenChange={() => toggleItem(itemId)}>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                      <CollapsibleTrigger className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-opacity-50">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-semibold text-dark-gray pr-4">{item.question}</h3>
                          <ChevronDown 
                            className={`w-5 h-5 text-purple-primary transition-transform duration-300 flex-shrink-0 ${
                              openItems.has(itemId) ? 'transform rotate-180' : ''
                            }`}
                          />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-6 pb-6">
                        <div className="pt-2 border-t border-gray-100">
                          <p className="text-warm-gray leading-relaxed text-base">{item.answer}</p>
                        </div>
                      </CollapsibleContent>
                    </div>
                  </Collapsible>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
