import { Link } from "wouter";
import { Heart, Handshake, Baby } from "lucide-react";

export default function Hero() {
  return (
    <section 
      className="relative py-32 lg:py-48 bg-cover bg-center bg-no-repeat -mt-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&h=1200')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-12 lg:p-16 shadow-2xl">
            <div className="text-center">
              <div className="mb-12">
                <h2 className="text-lg lg:text-xl text-purple-primary mb-4 font-light tracking-wide uppercase">Welkom bij</h2>
                <h1 className="text-4xl lg:text-6xl font-bold text-dark-gray mb-8 leading-tight">
                  <span className="block">XENRA</span>
                  <span className="block text-orange-primary">NAZORGHULP</span>
                </h1>
                <p className="text-xl lg:text-2xl text-warm-gray leading-relaxed max-w-4xl mx-auto">
                  Het verlies van een dierbare is een van de zwaarste momenten in een mensenleven. 
                  Juist dan is het belangrijk dat je niet alles alleen hoeft te doen.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <button className="bg-orange-primary text-white px-10 py-5 rounded-2xl font-semibold hover:bg-orange-light transition-colors duration-300 text-xl shadow-lg">
                    Plan gratis kennismaking
                  </button>
                </Link>
                <Link href="/diensten">
                  <button className="border-2 border-purple-primary text-purple-primary px-10 py-5 rounded-2xl font-semibold hover:bg-purple-primary hover:text-white transition-colors duration-300 text-xl shadow-lg">
                    Bekijk onze pakketten
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
