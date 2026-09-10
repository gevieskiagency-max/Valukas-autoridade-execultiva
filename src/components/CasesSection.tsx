import React from 'react';
import { BookOpen, FileText, Newspaper, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { ConcentricRipples } from './ConcentricRipples';
import { SparkleOrnament } from './SparkleOrnament';

export const CasesSection: React.FC = () => {
  const casesData = [
    {
      id: 'ceo-positioning',
      tag: 'Posicionamento do CEO',
      title: 'Posicionamento do CEO & Obras Publicadas',
      subtitle: 'Obra Literária na Amazon',
      description:
        'Construção de autoridade intelectual de alto escalão através de obra autoral publicada, articulando pensamento crítico, densidade filosófica e liderança de mercado.',
      linkText: 'Continua',
      url: 'https://www.amazon.com.br/dp/B0CVTRYBZD',
      icon: BookOpen,
      badge: 'Amazon Oficial',
    },
    {
      id: 'pdf-anthology',
      tag: 'Posicionamento do CEO',
      title: 'Contos e Poemas sobre o Futuro',
      subtitle: 'Antologia Literária Especial em PDF',
      description:
        'Produção intelectual em antologia temática sobre prospectiva, semiótica do futuro e sensibilidade poética, chancelada para ampla leitura e difusão pública.',
      linkText: 'Continua',
      url: 'https://www.fabricadeebooks.com.br/contosepoemassobreofuturo6.pdf',
      icon: FileText,
      badge: 'E-book em PDF',
    },
    {
      id: 'folha-paraguacu',
      tag: 'Posicionamento do CEO',
      title: 'Artigos Editoriais & Opinião Pública',
      subtitle: 'Coluna Regular na Folha de Paraguaçu',
      description:
        'Ensaios analíticos regulares sobre cultura, epistemologia, música e sociedade, consolidando autoridade de pensamento no debate público contemporâneo.',
      linkText: 'Continua',
      url: 'https://folhadeparaguacu.com.br/author/davivalukas/',
      icon: Newspaper,
      badge: 'Imprensa & Colunas',
    },
  ];

  return (
    <section
      id="cases"
      className="relative bg-[#FFFFFF] text-[#1A2A22] py-20 lg:py-28 overflow-hidden font-montserrat"
    >
      {/* BACKGROUND GRAPHIC ACCENTS: Concentric Curves and Wavy Flow on Light Canvas (as seen in image) */}
      <div className="absolute -bottom-24 -left-20 pointer-events-none opacity-20 z-0">
        <ConcentricRipples size={520} count={10} origin="bottom-left" color="#1F382B" />
      </div>

      <div className="absolute top-1/4 -right-16 pointer-events-none opacity-25 z-0 hidden lg:block">
        <ConcentricRipples size={460} count={8} origin="top-right" color="#3FD3C6" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER (Strictly styled like the reference layout) */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          {/* Centered 4-point star ornament with fine horizontal divider lines */}
          <SparkleOrnament color="#1F382B" variant="section-divider" className="text-[#1F382B] mb-3" />

          <h2
            id="cases-title"
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2A22] tracking-tight mb-4"
          >
            Cases de Sucesso
          </h2>

          <p className="text-sm sm:text-base text-[#1A2A22]/70 max-w-xl mx-auto">
            Produção intelectual documentada, obras publicadas e contribuições editoriais com rigor analítico e estético.
          </p>

          {/* Right trail sparkle like in the reference image */}
          <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2">
            <SparkleOrnament color="#3FD3C6" variant="hero-trail" />
          </div>
        </div>

        {/* 3-COLUMN CARD GRID MATCHING REFERENCE IMAGE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {casesData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={`card-${item.id}`}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-neutral-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Category Title / Tag from reference image: "Posicionamento do CEO" */}
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C91524] mb-3 block">
                    {item.tag}
                  </span>

                  {/* Card Title */}
                  <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-[#1A2A22] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-[#1F382B] mb-4 flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-[#C91524]" />
                    <span>{item.subtitle}</span>
                  </p>

                  {/* Real Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Card Action Link: "Continua →" in Crimson as seen in image */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#C91524] hover:text-[#A1101D] group-hover:gap-3 transition-all"
                  >
                    <span>Continua</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <span className="text-[11px] text-neutral-400">
                    {item.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Sparkle Divider */}
        <div className="mt-16 text-center">
          <SparkleOrnament color="#1F382B" variant="section-divider" className="text-[#1F382B]" />
        </div>

      </div>
    </section>
  );
};
