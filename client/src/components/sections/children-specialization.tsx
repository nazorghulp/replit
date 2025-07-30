import { Heart } from "lucide-react";

export default function ChildrenSpecialization() {
  return (
    <div 
      className="rounded-2xl p-8"
      style={{
        background: 'linear-gradient(135deg, #f4e09d 0%, #e8d68a 100%)'
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-16 h-16 bg-purple-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Heart className="w-8 h-8 text-purple-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-dark-gray">Specialisatie Kinderen</h3>
        <p className="text-lg mb-6 text-warm-gray">
          Voor kinderen tot 17 jaar bieden we begeleiding die speciaal is afgestemd op hun leeftijd 
          en hersteltempo. Sessies duren langer en zijn speelser en rustiger opgebouwd.
        </p>
        <div className="bg-purple-800 text-white px-8 py-3 rounded-lg font-medium inline-block shadow-lg border-2 border-purple-900">
          Neem contact met ons op voor meer informatie
        </div>
      </div>
    </div>
  );
}
