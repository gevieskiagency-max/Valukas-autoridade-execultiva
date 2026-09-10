import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CredentialsStrip } from './components/CredentialsStrip';
import { AboutSection } from './components/AboutSection';
import { AcademicBento } from './components/AcademicBento';
import { CasesSection } from './components/CasesSection';
import { DiplomacySection } from './components/DiplomacySection';
import { MultimediaHub } from './components/MultimediaHub';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#15271E] text-white flex flex-col selection:bg-[#C91524] selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Faixa de Credenciais & Métricas */}
        <CredentialsStrip />

        {/* 4. Sobre / Biografia Executiva */}
        <AboutSection />

        {/* 5. Formação & Pesquisa (Bento Grid) */}
        <AcademicBento />

        {/* 6. Hub de Obras, Artigos e Presença Digital (Cases de Sucesso em Fundo Claro) */}
        <CasesSection />

        {/* 7. Patrimônio Histórico & Diplomacia */}
        <DiplomacySection />

        {/* 8. Hub Multimídia & Acervo Documental */}
        <MultimediaHub />

        {/* 9. Seção de Contato Executivo com Disparo Duplo */}
        <ContactSection />
      </main>

      {/* 10. Rodapé Corporativo */}
      <Footer />
    </div>
  );
}
