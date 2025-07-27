import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();



  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-purple-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/over-ons" className="text-white hover:text-orange-light font-medium text-sm uppercase tracking-wide">
              OVER ONS
            </Link>
            <Link href="/diensten" className="text-white hover:text-orange-light font-medium text-sm uppercase tracking-wide">
              DIENSTEN
            </Link>
            <Link href="/faq" className="text-white hover:text-orange-light font-medium text-sm uppercase tracking-wide">
              VEELGESTELDE VRAGEN
            </Link>
          </div>
          
          {/* Center Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/attached_assets/logo web_1753635650777.jpg" 
              alt="Xenra Logo" 
              className="h-12 w-auto"
            />
          </Link>
          
          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/contact" className="text-white hover:text-orange-light font-medium text-sm uppercase tracking-wide">
              CONTACT
            </Link>
            <Link href="/diensten" className="text-white hover:text-orange-light font-medium text-sm uppercase tracking-wide">
              PAKKETTEN
            </Link>
            <Link href="/contact" className="text-white hover:text-orange-light font-medium text-sm uppercase tracking-wide">
              AFSPRAAK MAKEN
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
            <Link href="/over-ons" className="block px-4 py-3 rounded-xl text-lg font-medium text-white hover:text-orange-light hover:bg-purple-primary transition-colors duration-200" onClick={() => setIsOpen(false)}>
              OVER ONS
            </Link>
            <Link href="/diensten" className="block px-4 py-3 rounded-xl text-lg font-medium text-white hover:text-orange-light hover:bg-purple-primary transition-colors duration-200" onClick={() => setIsOpen(false)}>
              DIENSTEN
            </Link>
            <Link href="/faq" className="block px-4 py-3 rounded-xl text-lg font-medium text-white hover:text-orange-light hover:bg-purple-primary transition-colors duration-200" onClick={() => setIsOpen(false)}>
              VEELGESTELDE VRAGEN
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
