import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Over Ons", href: "/over-ons" },
    { name: "Diensten", href: "/diensten" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-purple-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/over-ons" className="text-white hover:text-orange-light font-medium text-sm uppercase tracking-wide">
              WIE ZIJN WIJ?
            </Link>
            <Link href="/diensten" className="text-white hover:text-orange-light font-medium text-sm uppercase tracking-wide">
              ONZE VISIE
            </Link>
            <Link href="/faq" className="text-white hover:text-orange-light font-medium text-sm uppercase tracking-wide">
              WERKWIJZE
            </Link>
          </div>
          
          {/* Center Logo */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-lg px-4 py-2 mb-1">
              <span className="text-purple-primary font-bold text-lg">XENRA</span>
            </div>
            <div className="text-orange-primary font-bold text-sm tracking-wider">
              NAZORGHULP
            </div>
          </div>
          
          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/contact" className="text-white hover:text-orange-light font-medium text-sm uppercase tracking-wide">
              LEDEN
            </Link>
            <Link href="/faq" className="text-white hover:text-orange-light font-medium text-sm uppercase tracking-wide">
              REFERENTIES
            </Link>
            <Link href="/contact" className="text-white hover:text-orange-light font-medium text-sm uppercase tracking-wide">
              BLOG
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
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-xl text-lg font-medium transition-colors duration-200 ${
                  location === item.href
                    ? "text-orange-primary bg-orange-soft"
                    : "text-white hover:text-orange-light hover:bg-purple-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
