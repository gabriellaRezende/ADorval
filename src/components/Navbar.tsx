"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="w-full border-b border-gelo bg-creme sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          {/* desktop */}
          <Image
            src="/logo/ADcomplete.svg"
            alt="Ana Paula Dorval — Massoterapeuta"
            width={233}
            height={94}
            className="hidden md:block h-15 w-auto"
            priority
          />
          {/* mobile */}
          <Image
            src="/logo/logo.svg"
            alt="Ana Paula Dorval"
            width={96}
            height={202}
            className="md:hidden h-8 w-auto"
            priority
          />
        </a>
        {/* Desktop */}
        <nav className="hidden md:flex gap-6">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`text-xl transition-colors ${active === href ? "text-brand font-medium" : "text-suave hover:text-noite"
                }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile — botão hamburger */}
        <button
          className="md:hidden text-noite p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile — menu aberto */}
      {menuOpen && (
        <nav className="md:hidden border-t border-gelo bg-creme px-6 py-4 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-base transition-colors ${active === href ? "text-brand font-medium" : "text-suave hover:text-noite"
                }`}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
