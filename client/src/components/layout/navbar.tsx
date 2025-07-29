import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import logoPath from "@assets/logo web_1753678013397.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();



  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed-navbar shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Left Navigation */}
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
          </div>
          
          {/* Center Logo */}
          <Link href="/" className="flex items-center relative z-20">
            <div className="w-32 h-20 bg-white rounded-lg flex items-center justify-center p-2 shadow-lg border-2 border-white/20">
              <img 
                src={logoPath} 
                alt="Xenra Nazorg" 
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
          
          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-6">
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
        <div className="md:hidden bg-purple-light border-t border-purple-soft">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link href="/" className="block px-4 py-3 rounded-xl text-lg font-medium text-white hover:text-orange-light hover:bg-purple-primary transition-colors duration-200" onClick={() => setIsOpen(false)}>
              HOME
            </Link>
            <Link href="/over-ons" className="block px-4 py-3 rounded-xl text-lg font-medium text-white hover:text-orange-light hover:bg-purple-primary transition-colors duration-200" onClick={() => setIsOpen(false)}>
              OVER ONS
            </Link>
            <Link href="/diensten" className="block px-4 py-3 rounded-xl text-lg font-medium text-white hover:text-orange-light hover:bg-purple-primary transition-colors duration-200" onClick={() => setIsOpen(false)}>
              DIENSTEN
            </Link>
            <Link href="/faq" className="block px-4 py-3 rounded-xl text-lg font-medium text-white hover:text-orange-light hover:bg-purple-primary transition-colors duration-200" onClick={() => setIsOpen(false)}>
              F.A.Q.
            </Link>
            <Link href="/contact" className="block px-4 py-3 rounded-xl text-lg font-medium text-white hover:text-orange-light hover:bg-purple-primary transition-colors duration-200" onClick={() => setIsOpen(false)}>
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
