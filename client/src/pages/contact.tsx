import { Mail, MessageSquare, Phone, Clock } from "lucide-react";
import ContactForm from "@/components/sections/contact-form";

export default function Contact() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">Neem contact op</h1>
          <p className="text-lg text-warm-gray max-w-3xl mx-auto">
            Heb je vragen of wil je starten? Stuur ons een bericht of bel ons. 
            We reageren altijd binnen één werkdag.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="mb-10 lg:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600" 
              alt="Vredige zonsopgang over kalm water, symbool van hoop en nieuwe begin" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            
            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-primary bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-purple-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-gray mb-1">E-mail</h3>
                  <p className="text-warm-gray">info@nazorghulp.nl</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-primary bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                  <MessageSquare className="w-5 h-5 text-orange-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-gray mb-1">WhatsApp Business</h3>
                  <p className="text-warm-gray">[nummer invoegen]</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-primary bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-purple-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-gray mb-1">Telefoon</h3>
                  <p className="text-warm-gray">[nummer invoegen]</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-primary bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="w-5 h-5 text-orange-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-gray mb-1">Bereikbaarheid</h3>
                  <p className="text-warm-gray">
                    07:30 tot 17:30<br />
                    Maandag t/m vrijdag
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-dark-gray mb-4">
              Wat kun je van ons verwachten?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="w-12 h-12 bg-purple-primary bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-purple-primary" />
                </div>
                <h3 className="font-semibold text-dark-gray mb-2">Snelle reactie</h3>
                <p className="text-warm-gray text-sm">
                  We reageren altijd binnen één werkdag op je bericht
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-orange-primary bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-6 h-6 text-orange-primary" />
                </div>
                <h3 className="font-semibold text-dark-gray mb-2">Persoonlijk contact</h3>
                <p className="text-warm-gray text-sm">
                  Een warm, persoonlijk gesprek zonder verplichtingen
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-purple-primary bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-purple-primary" />
                </div>
                <h3 className="font-semibold text-dark-gray mb-2">Jouw privacy</h3>
                <p className="text-warm-gray text-sm">
                  We respecteren je privacy en behandelen je gegevens vertrouwelijk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
