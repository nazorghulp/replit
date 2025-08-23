import { Link } from "wouter";
import logoPath from "@assets/Cenra Nederland Logo web_1755957075296.png";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center group">
      <div className="w-32 h-12 bg-white rounded-lg flex items-center justify-center p-1 shadow-sm border border-gray-200">
        <img 
          src={logoPath} 
          alt="Cenra Nederland" 
          className="w-full h-full object-contain"
        />
      </div>
    </Link>
  );
}
