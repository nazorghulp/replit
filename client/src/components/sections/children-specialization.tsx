import { Link } from "wouter";
import { Baby } from "lucide-react";

export default function ChildrenSpecialization() {
  return (
    <div className="bg-gradient-to-r from-orange-primary to-orange-light rounded-2xl p-8 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Baby className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Specialisatie Kinderen</h3>
        <p className="text-lg mb-6 text-orange-50">
          Voor kinderen tot 17 jaar bieden we begeleiding die speciaal is afgestemd op hun leeftijd 
          en hersteltempo. Sessies duren langer en zijn speelser en rustiger opgebouwd.
        </p>
        <Link 
          href="/contact"
          className="bg-white text-orange-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 inline-block"
        >
          Meer informatie over kinderbegeleiding
        </Link>
      </div>
    </div>
  );
}
