import React from 'react';
import { User, Music, BookOpen, Briefcase, Award, ExternalLink, Sparkles } from 'lucide-react';
import { ConcentricRipples } from './ConcentricRipples';

const BIOGRAPHY_URL = "https://nanakofiadom.wordpress.com/2025/01/29/nana-kofi-adom-uma-jornada/";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="sobre"
      className="relative bg-[#15271E] text-white py-20 lg:py-28 overflow-hidden border-t border-white/5"
    >
      {/* Background ripples */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-20 z-0">
        <ConcentricRipples size={500} count={8} origin="top-right" color="#3FD3C6" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Profile Card with Heraldic Emblem */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-[#1F382B] rounded-3xl p-8 border border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.35)] relative overflow-hidden">
              
              {/* Corner accent glow */}
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-[#3FD3C6]/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-[#C91524]/20 rounded-full blur-2xl pointer-events-none" />

              {/* Profile Portrait with Luxury Carmesim & Emerald Ring */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  {/* Decorative ambient aura behind the photo */}
                  <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#C91524] via-[#3FD3C6]/60 to-[#C91524]/40 rounded-2xl blur-sm opacity-70 animate-pulse pointer-events-none" />
                  
                  {/* Portrait Frame Container */}
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl p-1 bg-gradient-to-br from-[#C91524] via-[#8B0000] to-[#15271E] shadow-2xl overflow-hidden border border-white/20">
                    <img
                      src="/davi-valukas.png"
                      alt="Davi Samuel Valukas Lopes (Nana Kofi Adom) - Ghostwriter Executivo e Gestor Comercial"
                      className="w-full h-full object-cover object-top rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Status / Seal Pill */}
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#15271E] border border-[#3FD3C6]/60 px-3 py-0.5 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3FD3C6] animate-ping" />
                    <span className="text-[10px] font-bold tracking-wider text-[#3FD3C6] font-montserrat uppercase">
                      OFICIAL
                    </span>
                  </div>
                </div>

                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-wide mt-2">
                  Davi Samuel Valukas Lopes
                </h3>
                
                <p className="text-sm font-semibold text-[#3FD3C6] font-montserrat mt-1">
                  Nana Kofi Adom
                </p>

                <div className="w-12 h-0.5 bg-[#C91524] my-4" />

                <p className="text-xs text-[#B8C8BF] leading-relaxed font-montserrat max-w-xs">
                  Ghostwriter executivo, gestor comercial de negócios em Uberlândia/MG, músico, poeta, educador e produtor cultural.
                </p>

                {/* Profile Stats / Anchors */}
                <div className="w-full grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-white/10 text-left text-xs font-montserrat">
                  <div className="bg-[#15271E]/60 p-3 rounded-xl border border-white/5">
                    <span className="text-white/50 block text-[10px] uppercase tracking-wider">Atuação</span>
                    <span className="font-bold text-white block mt-0.5">Uberlândia / MG</span>
                  </div>
                  <div className="bg-[#15271E]/60 p-3 rounded-xl border border-white/5">
                    <span className="text-white/50 block text-[10px] uppercase tracking-wider">Titulação</span>
                    <span className="font-bold text-white block mt-0.5">Mestre (UFU)</span>
                  </div>
                </div>

                {/* Direct Link to Biography */}
                <a
                  href={BIOGRAPHY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-[#C91524] text-white text-xs font-montserrat font-bold uppercase tracking-wider py-3 rounded-xl border border-white/15 hover:border-transparent transition-all duration-300"
                >
                  <span>Conhecer Jornada Oficial</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Areas of Excellence */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F382B] border border-white/10 text-xs text-[#3FD3C6] font-montserrat font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Valukas Liderança & Trajetória</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              A Síntese entre Rigor Intelectual, Gestão Estratégica e Expressão Artística
            </h2>

            <p className="text-base text-[#B8C8BF] leading-relaxed font-montserrat">
              Com sólida base acadêmica e ampla vivência executiva em Uberlândia/MG, Davi Samuel Valukas Lopes (Nana Kofi Adom) atua no ponto de convergência entre a formulação do pensamento crítico, a gestão de negócios e a alta produção cultural.
            </p>

            <p className="text-sm sm:text-base text-[#B8C8BF] leading-relaxed font-montserrat">
              Como <strong className="text-white">ghostwriter executivo</strong>, transforma a visão de líderes e tomadores de decisão em discursos memoráveis, artigos analíticos de alto impacto e obras com densidade estilística irrepreensível.
            </p>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-[#1F382B]/60 border border-white/10 rounded-2xl p-4 hover:border-[#3FD3C6]/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#C91524]/20 border border-[#C91524]/40 flex items-center justify-center text-[#C91524] mb-3">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h4 className="font-cinzel font-bold text-sm text-white mb-1">Gestão Comercial</h4>
                <p className="text-xs text-[#B8C8BF] leading-relaxed font-montserrat">
                  Liderança de negócios em Uberlândia e consultoria em Recursos Humanos.
                </p>
              </div>

              <div className="bg-[#1F382B]/60 border border-white/10 rounded-2xl p-4 hover:border-[#3FD3C6]/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#3FD3C6]/20 border border-[#3FD3C6]/40 flex items-center justify-center text-[#3FD3C6] mb-3">
                  <Music className="w-4 h-4" />
                </div>
                <h4 className="font-cinzel font-bold text-sm text-white mb-1">Produção Artística</h4>
                <p className="text-xs text-[#B8C8BF] leading-relaxed font-montserrat">
                  Concertos orquestrais, concursos literários e saraus de prestígio.
                </p>
              </div>

              <div className="bg-[#1F382B]/60 border border-white/10 rounded-2xl p-4 hover:border-[#3FD3C6]/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white mb-3">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="font-cinzel font-bold text-sm text-white mb-1">Semiótica & Discurso</h4>
                <p className="text-xs text-[#B8C8BF] leading-relaxed font-montserrat">
                  Análise linguística, narrativa de autoridade e estética discursiva.
                </p>
              </div>
            </div>

            {/* Read Journey Button */}
            <div className="pt-2">
              <a
                href={BIOGRAPHY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm font-bold font-montserrat text-[#3FD3C6] hover:text-white transition-colors"
              >
                <span>Ler Biografia Completa no WordPress</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
