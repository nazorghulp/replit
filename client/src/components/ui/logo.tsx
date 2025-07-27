import { Link } from "wouter";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center group">
      <div className="w-10 h-10 bg-purple-primary rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-purple-light transition-colors duration-200">
        X
      </div>
      <span className="ml-3 text-xl font-semibold text-dark-gray group-hover:text-purple-primary transition-colors duration-200">
        Xenra Nazorghulp
      </span>
    </Link>
  );
}
