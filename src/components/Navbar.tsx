import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const LINKEDIN_URL = "https://www.linkedin.com/in/davi-samuel-valukas-lopes/";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-montserrat ${
        scrolled
          ? 'bg-[#15271E]/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3'
          : 'bg-[#15271E] py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo: Classical Red Serif Typography matching Reference Image */}
        <a
          href="#"
          id="nav-logo"
          className="group flex items-center gap-2 text-decoration-none focus:outline-none"
        >
          <span className="font-cinzel text-2xl sm:text-3xl font-bold tracking-tight text-[#C91524] group-hover:text-[#e02434] transition-colors">
            Valukas
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#3FD3C6] opacity-80" />
        </a>

        {/* Desktop Navigation (Exact matching links from screenshot) */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs font-bold tracking-wider uppercase text-white/90">
          
          {/* O QUE FAZEMOS ⌵ */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button
              id="nav-services-toggle"
              className="flex items-center gap-1.5 hover:text-[#3FD3C6] transition-colors py-2 uppercase"
              onClick={() => setServicesDropdown(!servicesDropdown)}
            >
              <span>O QUE FAZEMOS</span>
              <ChevronDown className="w-3.5 h-3.5 text-white/70 transition-transform duration-200" />
            </button>

            {servicesDropdown && (
              <div className="absolute top-full left-0 w-64 bg-[#1F382B] border border-white/15 rounded-xl shadow-2xl p-3 flex flex-col gap-2 backdrop-blur-xl animate-fadeIn">
                <a
                  href="#hero"
                  onClick={() => setServicesDropdown(false)}
                  className="px-3 py-2 rounded-lg text-[11px] text-white/90 hover:bg-[#15271E] hover:text-[#3FD3C6] transition-colors block"
                >
                  <span className="font-bold text-white block">Ghostwriting Executivo</span>
                  <span className="text-[10px] text-white/60 lowercase">Artigos de liderança, livros e discursos</span>
                </a>
                <a
                  href="#cases"
                  onClick={() => setServicesDropdown(false)}
                  className="px-3 py-2 rounded-lg text-[11px] text-white/90 hover:bg-[#15271E] hover:text-[#3FD3C6] transition-colors block"
                >
                  <span className="font-bold text-white block">Produção Intelectual</span>
                  <span className="text-[10px] text-white/60 lowercase">Semiótica, ensaios e curadoria cultural</span>
                </a>
                <a
                  href="#diplomacia"
                  onClick={() => setServicesDropdown(false)}
                  className="px-3 py-2 rounded-lg text-[11px] text-white/90 hover:bg-[#15271E] hover:text-[#3FD3C6] transition-colors block"
                >
                  <span className="font-bold text-white block">Diplomacia & Patrimônio</span>
                  <span className="text-[10px] text-white/60 lowercase">Reino Bunyoro-Kitara e institutos</span>
                </a>
              </div>
            )}
          </div>

          {/* CASES DE SUCESSO */}
          <a
            href="#cases"
            id="nav-link-cases"
            className="hover:text-[#3FD3C6] transition-colors py-2"
          >
            CASES DE SUCESSO
          </a>

          {/* VALUKAS LIDERANÇA */}
          <a
            href="#sobre"
            id="nav-link-lideranca"
            className="hover:text-[#3FD3C6] transition-colors py-2"
          >
            VALUKAS LIDERANÇA
          </a>

          {/* CONTATO */}
          <a
            href="#contato"
            id="nav-link-contato"
            className="hover:text-[#3FD3C6] transition-colors py-2"
          >
            CONTATO
          </a>
        </nav>

        {/* Primary Carmesim CTA */}
        <div className="hidden sm:flex items-center">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-cta-button"
            className="inline-flex items-center gap-2 bg-[#C91524] hover:bg-[#A1101D] text-white font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-md transition-all duration-300 shadow-[0_4px_14px_rgba(201,21,36,0.39)] hover:shadow-[0_6px_20px_rgba(201,21,36,0.55)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>CONSULTA EXECUTIVA</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden bg-[#C91524] text-white text-[10px] font-black uppercase px-3 py-1.5 rounded"
          >
            CONSULTA
          </a>
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-dropdown"
          className="lg:hidden bg-[#15271E] border-t border-white/10 px-4 pt-4 pb-6 space-y-3 text-sm"
        >
          <a
            href="#cases"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white/90 hover:text-[#3FD3C6] font-bold uppercase tracking-wider"
          >
            Cases de Sucesso
          </a>
          <a
            href="#sobre"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white/90 hover:text-[#3FD3C6] font-bold uppercase tracking-wider"
          >
            Valukas Liderança
          </a>
          <a
            href="#formacao"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white/90 hover:text-[#3FD3C6] font-bold uppercase tracking-wider"
          >
            Credenciais & Formação
          </a>
          <a
            href="#diplomacia"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white/90 hover:text-[#3FD3C6] font-bold uppercase tracking-wider"
          >
            Diplomacia & Patrimônio
          </a>
          <a
            href="#multimidia"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white/90 hover:text-[#3FD3C6] font-bold uppercase tracking-wider"
          >
            Acervo & Multimídia
          </a>
          <a
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white/90 hover:text-[#3FD3C6] font-bold uppercase tracking-wider"
          >
            Contato
          </a>

          <div className="pt-2">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#C91524] text-white font-black text-xs uppercase tracking-wider py-3 rounded-md shadow-md"
            >
              <span>CONSULTA EXECUTIVA (LINKEDIN)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
