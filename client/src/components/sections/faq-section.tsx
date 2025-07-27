import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const faqData = [
  {
    question: "Hoe snel kan ik starten?",
    answer: "Binnen één werkdag na aanmelding nemen we contact met je op."
  },
  {
    question: "Kan ik anoniem contact hebben?",
    answer: "Ja. Je mag een nickname of initialen gebruiken."
  },
  {
    question: "Hoe werkt de betaling?",
    answer: "Je ontvangt elke maand een betaalverzoek. Er is geen automatische incasso."
  },
  {
    question: "Kan ik per maand stoppen?",
    answer: "Ja, je zit nergens aan vast. Je bepaalt elke maand of je doorgaat."
  },
  {
    question: "Zijn de sessies vertrouwelijk?",
    answer: "Ja, alles wat je deelt blijft tussen jou en jouw begeleider."
  },
  {
    question: "Worden kinderen ook begeleid?",
    answer: "Ja, we zijn gespecialiseerd in begeleiding van kinderen tot 17 jaar."
  },
  {
    question: "Kan ik losse sessies boeken?",
    answer: "Ja, bij elk pakket kun je extra sessies boeken tegen een vast tarief."
  },
  {
    question: "Moet ik in Nederland wonen?",
    answer: "Nee, begeleiding kan ook online plaatsvinden, ongeacht waar je bent."
  },
  {
    question: "Hoeveel ervaring heeft Xenra Nazorghulp?",
    answer: "De oprichter, Hilko Verdult, heeft jarenlange ervaring in nazorg en begeleiding van nabestaanden."
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <Collapsible key={index} open={openItems.has(index)} onOpenChange={() => toggleItem(index)}>
          <div className="bg-white rounded-lg shadow-sm">
            <CollapsibleTrigger className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-opacity-50 rounded-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-dark-gray">{item.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-warm-gray transition-transform duration-200 ${
                    openItems.has(index) ? 'transform rotate-180' : ''
                  }`}
                />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 pb-6">
              <p className="text-warm-gray">{item.answer}</p>
            </CollapsibleContent>
          </div>
        </Collapsible>
      ))}
    </div>
  );
}
