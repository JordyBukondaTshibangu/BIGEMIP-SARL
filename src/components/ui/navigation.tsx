"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../atoms/button";

// Reusable navigation links
const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/projects", label: "Projets" },
  { href: "/about", label: "À Propos de Nous" },
  { href: "/contact", label: "Contactez-nous" },
];

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#1e2236] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-28">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/assets/bigemip-logo.jpeg"
                alt="BIGEMIP Logo"
                className="h-10 w-auto"
                width={100}
                height={100}
                priority
              />
              <span className="text-white font-bold text-xl tracking-wide">
                BIGEMIP
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden xl:flex items-center space-x-8">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[#f0a500] text-lg hover:text-white transition"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Contact Button (Desktop only) */}
            <div className="hidden xl:flex items-center">
              <Link href="/contact">
                <Button buttonText="Contactez-nous" type="button" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              className="xl:hidden text-[#f0a500] focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-[#1e2236] flex flex-col justify-center items-center gap-14 z-50 overflow-hidden">
          <span
            className="text-[#f0a500] text-3xl"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </span>

          <Link
            href="/"
            className="flex items-center space-x-2 font-extrabold text-4xl tracking-wide text-[#f0a500]"
          >
            BIGEMIP
          </Link>

          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[#f0a500] text-lg hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default NavigationBar;
