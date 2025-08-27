import Image from "next/image";
import Link from "next/link";
import Button from "../atoms/button";

import { Menu } from "lucide-react";

function NavigationBar() {
  return (
    <nav className="bg-[#1e2236] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-28">
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/bigemip-logo.jpeg"
              alt="BIGEMIP Logo"
              className="h-10 w-auto"
              width={100}
              height={100}
            />
            <span className="text-white font-bold text-xl tracking-wide">
              BIGEMIP
            </span>
          </div>

          <div className="hidden xl:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[#f0a500] text-lg hover:text-white transition"
            >
              Acceuil
            </Link>
            <Link
              href="/projects"
              className="text-[#f0a500] text-lg hover:text-white transition"
            >
              Projets
            </Link>
            <Link
              href="/team"
              className="text-[#f0a500] text-lg hover:text-white transition"
            >
              Notre Equipe
            </Link>
            <Link
              href="/about"
              className="text-[#f0a500] text-lg hover:text-white transition"
            >
              A Propos de Nous
            </Link>
            <Link
              href="/contact"
              className="text-[#f0a500] text-lg hover:text-white transition"
            >
              Contactez-nous
            </Link>
          </div>
          <div className="hidden xl:flex items-center w-fit ">
            <Button buttonText="Contactez-nous" type="submit" />
          </div>

          <div className="xl:hidden flex items-center">
            <button id="menu-btn" className="text-[#f0a500] focus:outline-none">
              <Menu />
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className="hidden xl:hidden px-6 pb-4">
        <Link href="#" className="block py-2 text-[#f0a500] hover:text-white">
          Home
        </Link>
        <Link href="#" className="block py-2 text-[#f0a500] hover:text-white">
          About
        </Link>
        <Link href="#" className="block py-2 text-[#f0a500] hover:text-white">
          Contact
        </Link>
        <Link href="#" className="block py-2 text-[#f0a500] hover:text-white">
          Projects
        </Link>
        <Link href="#" className="block py-2 text-[#f0a500] hover:text-white">
          Teams
        </Link>
        <Button buttonText="Contactez-nous" type="submit" />
      </div>
    </nav>
  );
}

export default NavigationBar;
