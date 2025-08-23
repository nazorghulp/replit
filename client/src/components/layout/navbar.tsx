import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import logoPath from "@assets/Cenra Nederland Logo web_1755957075296.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();



  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed-navbar shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Left Logo */}
          <Link href="/" className="flex items-center relative z-20">
            <div className="w-32 sm:w-36 md:w-40 h-12 sm:h-14 md:h-16 bg-white rounded-lg flex items-center justify-center p-1 shadow-lg border-2 border-white/20">
              <img 
                src={logoPath} 
                alt="Cenra Nederland" 
                className="w-full h-full object-contain"
                style={{ clipPath: 'none' }}
              />
            </div>
          </Link>
          
          {/* Center Phone Number - moved slightly left for BLOGS menu item */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-20">
            <a 
              href="tel:085-401-92-65" 
              className="text-white hover:text-orange-light font-bold text-base lg:text-lg uppercase tracking-wide transition-colors duration-200 flex flex-col items-center"
            >
              <span>Bel 085 - 401 92 65</span>
              <span className="text-xs font-normal lowercase">(lokaal tarief)</span>
            </a>
          </div>
          
          {/* Mobile Phone Number */}
          <div className="block lg:hidden">
            <a 
              href="tel:085-401-92-65" 
              className="text-white hover:text-orange-light font-bold text-sm transition-colors duration-200 flex flex-col items-center"
            >
              <span>085 - 401 92 65</span>
              <span className="text-xs font-normal">(lokaal tarief)</span>
            </a>
          </div>
          
          {/* Right Navigation - All menu items */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-orange-light font-medium text-sm uppercase tracking-wide">
              HOME
            </Link>
            <Link href="/over-ons" className="text-white hover:text-orange-light font-medium text-sm uppercase tracking-wide">
              OVER ONS
            </Link>
            <Link href="/diensten" className="text-white hover:text-orange-light font-medium text-sm uppercase tracking-wide">
              DIENSTEN
            </Link>
            <Link href="/blogs" className="text-white hover:text-orange-light font-medium text-sm uppercase tracking-wide">
              BLOGS
            </Link>
            <Link href="/faq" className="text-white hover:text-orange-light font-medium text-sm uppercase tracking-wide">
              F.A.Q.
            </Link>
            <Link href="/contact" className="text-white hover:text-orange-light font-medium text-sm uppercase tracking-wide">
              CONTACT
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-orange-light transition-colors duration-200"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-purple-900 border-t border-purple-soft shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link href="/" className="block px-4 py-3 rounded-xl text-lg font-medium text-white hover:text-orange-light hover:bg-purple-800 transition-colors duration-200" onClick={() => setIsOpen(false)}>
              HOME
            </Link>
            <Link href="/over-ons" className="block px-4 py-3 rounded-xl text-lg font-medium text-white hover:text-orange-light hover:bg-purple-800 transition-colors duration-200" onClick={() => setIsOpen(false)}>
              OVER ONS
            </Link>
            <Link href="/diensten" className="block px-4 py-3 rounded-xl text-lg font-medium text-white hover:text-orange-light hover:bg-purple-800 transition-colors duration-200" onClick={() => setIsOpen(false)}>
              DIENSTEN
            </Link>
            <Link href="/blogs" className="block px-4 py-3 rounded-xl text-lg font-medium text-white hover:text-orange-light hover:bg-purple-800 transition-colors duration-200" onClick={() => setIsOpen(false)}>
              BLOGS
            </Link>
            <Link href="/faq" className="block px-4 py-3 rounded-xl text-lg font-medium text-white hover:text-orange-light hover:bg-purple-800 transition-colors duration-200" onClick={() => setIsOpen(false)}>
              F.A.Q.
            </Link>
            <Link href="/contact" className="block px-4 py-3 rounded-xl text-lg font-medium text-white hover:text-orange-light hover:bg-purple-800 transition-colors duration-200" onClick={() => setIsOpen(false)}>
              CONTACT
            </Link>
            {/* Phone Number for Mobile */}
            <div className="border-t border-purple-soft/30 pt-4 mt-4">
              <a 
                href="tel:085-401-92-65" 
                className="block px-4 py-3 rounded-xl text-lg font-medium text-white hover:text-orange-light hover:bg-purple-800 transition-colors duration-200 text-center"
                onClick={() => setIsOpen(false)}
              >
                <span className="block">Bel 085 - 401 92 65</span>
                <span className="text-sm font-normal">(lokaal tarief)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
