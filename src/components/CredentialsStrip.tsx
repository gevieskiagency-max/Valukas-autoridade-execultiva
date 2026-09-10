import React from 'react';
import { Award, Briefcase, GraduationCap, MapPin, Feather, Sparkles } from 'lucide-react';

export const CredentialsStrip: React.FC = () => {
  return (
    <section
      id="credenciais-strip"
      className="bg-[#122019] border-y border-white/10 py-6 sm:py-8 font-montserrat relative z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Value Proposition Statement */}
        <div className="text-center mb-6">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#3FD3C6] flex items-center justify-center gap-2">
            <Feather className="w-3.5 h-3.5 text-[#C91524]" />
            <span>Do conhecimento tácito ao conteúdo que constrói autoridade • Aprimoramento textual estratégico</span>
          </p>
        </div>

        {/* 4 Quantitative Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="bg-[#1F382B]/60 border border-white/10 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 hover:border-[#3FD3C6]/40 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-[#C91524]/20 border border-[#C91524]/30 flex items-center justify-center text-[#C91524] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-white block leading-tight">
                20+ Anos
              </span>
              <span className="text-[11px] sm:text-xs text-[#B8C8BF] leading-tight block mt-0.5">
                Educação, Gestão & Cultura
              </span>
            </div>
          </div>

          <div className="bg-[#1F382B]/60 border border-white/10 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 hover:border-[#3FD3C6]/40 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-[#3FD3C6]/15 border border-[#3FD3C6]/30 flex items-center justify-center text-[#3FD3C6] shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-white block leading-tight">
                Mestre (UFU)
              </span>
              <span className="text-[11px] sm:text-xs text-[#B8C8BF] leading-tight block mt-0.5">
                Mestrado em Música na UFU
              </span>
            </div>
          </div>

          <div className="bg-[#1F382B]/60 border border-white/10 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 hover:border-[#3FD3C6]/40 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
              <Sparkles className="w-5 h-5 text-[#3FD3C6]" />
            </div>
            <div>
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-white block leading-tight">
                5 Pós-Graduações
              </span>
              <span className="text-[11px] sm:text-xs text-[#B8C8BF] leading-tight block mt-0.5">
                Semiótica, Discurso & Gestão
              </span>
            </div>
          </div>

          <div className="bg-[#1F382B]/60 border border-white/10 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 hover:border-[#3FD3C6]/40 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-[#C91524]/20 border border-[#C91524]/30 flex items-center justify-center text-[#C91524] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-white block leading-tight">
                Uberlândia / MG
              </span>
              <span className="text-[11px] sm:text-xs text-[#B8C8BF] leading-tight block mt-0.5">
                Sede & Alcance Nacional
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
