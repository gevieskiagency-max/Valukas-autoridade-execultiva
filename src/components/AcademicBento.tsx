import React from 'react';
import { GraduationCap, BookMarked, Users, Brain, School, History, Sparkles } from 'lucide-react';
import { ConcentricRipples } from './ConcentricRipples';

export const AcademicBento: React.FC = () => {
  return (
    <section
      id="formacao"
      className="relative bg-[#122019] text-white py-20 lg:py-28 overflow-hidden border-t border-white/5"
    >
      {/* Background ripples */}
      <div className="absolute -bottom-20 -right-20 pointer-events-none opacity-20 z-0">
        <ConcentricRipples size={500} count={8} origin="bottom-right" color="#3FD3C6" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F382B] border border-white/10 text-xs text-[#3FD3C6] font-montserrat font-bold tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Fundamentação & Excelência Acadêmica</span>
          </div>
          
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Formação & Especializações
          </h2>
          
          <p className="text-sm sm:text-base text-[#B8C8BF] font-montserrat max-w-xl mx-auto">
            Arcabouço interdisciplinar que une teoria musical, ciências sociais, recursos humanos e análise semiótica aplicada.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Bento Card 1: Mestrado em Música UFU (Anchor Feature - 2 cols on lg) */}
          <div className="md:col-span-2 lg:col-span-2 bg-[#1F382B] border border-white/15 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] relative overflow-hidden flex flex-col justify-between group hover:border-[#3FD3C6]/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C91524]/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-bold font-montserrat uppercase tracking-wider text-[#C91524] bg-[#C91524]/10 border border-[#C91524]/30 px-3 py-1 rounded-full">
                  Pós-Graduação Stricto Sensu
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#15271E] border border-white/15 flex items-center justify-center text-[#3FD3C6]">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                Mestrado em Música
              </h3>
              
              <p className="text-sm font-semibold text-[#3FD3C6] font-montserrat mb-4">
                Universidade Federal de Uberlândia (UFU)
              </p>

              <p className="text-sm text-[#B8C8BF] leading-relaxed font-montserrat">
                Pesquisa avançada em estética, estruturação musical e rigor investigativo acadêmico, conferindo sofisticação composicional e hermenêutica aplicadas tanto às artes quanto à estruturação narrativa executiva.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60 font-montserrat">
              <span>Instituição Federal de Ensino Superior</span>
              <span className="text-[#3FD3C6] font-semibold">Uberlândia / MG</span>
            </div>
          </div>

          {/* Bento Card 2: Formação Pedagógica em Ciências Sociais */}
          <div className="md:col-span-1 lg:col-span-2 bg-[#1F382B] border border-white/15 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex flex-col justify-between group hover:border-[#3FD3C6]/50 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-bold font-montserrat uppercase tracking-wider text-[#3FD3C6] bg-[#3FD3C6]/10 border border-[#3FD3C6]/30 px-3 py-1 rounded-full">
                  Graduação / Licenciatura
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#15271E] border border-white/15 flex items-center justify-center text-[#3FD3C6]">
                  <School className="w-6 h-6" />
                </div>
              </div>

              <h3 className="font-cinzel text-2xl font-bold text-white mb-2 leading-tight">
                Formação Pedagógica em Ciências Sociais
              </h3>

              <p className="text-sm text-[#B8C8BF] leading-relaxed font-montserrat mt-3">
                Compreensão profunda das dinâmicas estruturais da sociedade, instituições políticas, antropologia cultural e métodos pedagógicos de transmissão do saber.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/60 font-montserrat">
              <span>Análise Social, Antropológica e Cultural</span>
            </div>
          </div>

          {/* Bento Card 3: Tecnólogo em Gestão de Recursos Humanos */}
          <div className="md:col-span-1 lg:col-span-2 bg-[#1F382B] border border-white/15 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex flex-col justify-between group hover:border-[#3FD3C6]/50 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-bold font-montserrat uppercase tracking-wider text-white/80 bg-white/10 border border-white/20 px-3 py-1 rounded-full">
                  Gestão Estratégica
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#15271E] border border-white/15 flex items-center justify-center text-white">
                  <Users className="w-6 h-6" />
                </div>
              </div>

              <h3 className="font-cinzel text-2xl font-bold text-white mb-2 leading-tight">
                Tecnólogo em Gestão de Recursos Humanos
              </h3>

              <p className="text-sm text-[#B8C8BF] leading-relaxed font-montserrat mt-3">
                Fundamentos de liderança corporativa, gestão de pessoas, clima organizacional, negociação comercial e desenvolvimento de talentos e equipes.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/60 font-montserrat">
              <span>Liderança e Estratégia de Pessoas</span>
            </div>
          </div>

          {/* Bento Card 4: Especializações Lato Sensu (Modular Banner - 2 cols on lg) */}
          <div className="md:col-span-2 lg:col-span-2 bg-[#1F382B] border border-white/15 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex flex-col justify-between group hover:border-[#3FD3C6]/50 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold font-montserrat uppercase tracking-wider text-[#3FD3C6] bg-[#3FD3C6]/10 border border-[#3FD3C6]/30 px-3 py-1 rounded-full">
                  Pós-Graduações Lato Sensu
                </span>
                <Sparkles className="w-5 h-5 text-[#3FD3C6]" />
              </div>

              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-4">
                Especializações Especializadas
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-montserrat text-xs">
                <div className="bg-[#15271E] p-3 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2 font-bold text-white mb-1">
                    <BookMarked className="w-3.5 h-3.5 text-[#C91524]" />
                    <span>Semiótica & Discurso</span>
                  </div>
                  <p className="text-white/60 text-[11px]">Semiótica e Análise do Discurso</p>
                </div>

                <div className="bg-[#15271E] p-3 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2 font-bold text-white mb-1">
                    <School className="w-3.5 h-3.5 text-[#3FD3C6]" />
                    <span>Docência</span>
                  </div>
                  <p className="text-white/60 text-[11px]">Práticas de ensino e formação</p>
                </div>

                <div className="bg-[#15271E] p-3 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2 font-bold text-white mb-1">
                    <History className="w-3.5 h-3.5 text-[#C91524]" />
                    <span>História Cultural</span>
                  </div>
                  <p className="text-white/60 text-[11px]">Patrimônio e memória social</p>
                </div>

                <div className="bg-[#15271E] p-3 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2 font-bold text-white mb-1">
                    <Brain className="w-3.5 h-3.5 text-[#3FD3C6]" />
                    <span>Psicologia Organizacional</span>
                  </div>
                  <p className="text-white/60 text-[11px]">Psicologia do Trabalho</p>
                </div>

                <div className="bg-[#15271E] p-3 rounded-xl border border-white/5 sm:col-span-2">
                  <div className="flex items-center gap-2 font-bold text-white mb-1">
                    <GraduationCap className="w-3.5 h-3.5 text-[#C91524]" />
                    <span>Educação Musical</span>
                  </div>
                  <p className="text-white/60 text-[11px]">Pedagogia e epistemologia da música</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-white/50 font-montserrat">
              5 Especializações Lato Sensu Concluídas
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
