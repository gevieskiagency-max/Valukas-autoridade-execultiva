import React from 'react';
import { Crown, Globe, Landmark, ShieldCheck, Award } from 'lucide-react';
import { ConcentricRipples } from './ConcentricRipples';

export const DiplomacySection: React.FC = () => {
  const diplomaticRoles = [
    {
      id: 'bunyoro',
      institution: 'Reino Bunyoro-Kitara (Uganda)',
      role: 'Representante Oficial no Brasil',
      context: 'Monarquia subnacional constitucionalmente reconhecida como patrimônio histórico e imaterial.',
      description:
        'Representação institucional e diplomática cultural, promovendo intercâmbio histórico, cooperação fraterna e difusão das tradições e patrimônio régio no território brasileiro.',
      icon: Crown,
      badge: 'Chancelaria Internacional',
      accent: 'border-[#C91524]/40 text-[#C91524]',
    },
    {
      id: 'arphac',
      institution: 'Academia Ranulfida de Preservação Histórica de Arte e Cultura (ARPHAC)',
      role: 'Coordenador Cultural',
      context: 'Instituição dedicada à salvaguarda patrimonial, memória e tradições artísticas.',
      description:
        'Coordenação de programas culturais, preservação de acervos históricos e incentivo a estudos genealógicos, artísticos e ensaísticos.',
      icon: Landmark,
      badge: 'Preservação & Memória',
      accent: 'border-[#3FD3C6]/40 text-[#3FD3C6]',
    },
    {
      id: 'circulo-monarquico',
      institution: 'Círculo Monárquico de Uberlândia',
      role: 'Diretor Executivo',
      context: 'Núcleo regional de estudos históricos, constitucionais e memoriais.',
      description:
        'Direção executiva de encontros culturais, debates acadêmicos e resgate da memória histórica e institucional brasileira na região do Triângulo Mineiro.',
      icon: ShieldCheck,
      badge: 'Liderança Regional',
      accent: 'border-[#C91524]/40 text-[#C91524]',
    },
    {
      id: 'institutos',
      institution: 'Instituto Cultural Nana Kofi Adom & Instituto Barão da Rifaina',
      role: 'Presidente',
      context: 'Entidades civis sem fins lucrativos focadas em cultura, filantropia e humanidades.',
      description:
        'Presidência e planejamento diretivo de projetos de salvaguarda cultural, incentivo à literatura, música clássica e promoção social.',
      icon: Globe,
      badge: 'Presidência Institucional',
      accent: 'border-[#3FD3C6]/40 text-[#3FD3C6]',
    },
  ];

  return (
    <section
      id="diplomacia"
      className="relative bg-[#15271E] text-white py-20 lg:py-28 overflow-hidden border-t border-white/5"
    >
      {/* Background ripples */}
      <div className="absolute top-1/2 -left-28 pointer-events-none opacity-20 z-0">
        <ConcentricRipples size={550} count={9} origin="top-left" color="#3FD3C6" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F382B] border border-white/15 text-xs text-[#3FD3C6] font-montserrat font-bold tracking-wider uppercase mb-3">
            <Crown className="w-3.5 h-3.5 text-[#C91524]" />
            <span>Relações Institucionais & Diplomacia</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Diplomacia & Patrimônio Histórico
          </h2>

          <p className="text-sm sm:text-base text-[#B8C8BF] font-montserrat max-w-2xl mx-auto">
            Atuação protocolar em entidades históricas, monarquias tradicionais e organizações dedicadas à alta cultura e preservação memorial.
          </p>
        </div>

        {/* Diplomatic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {diplomaticRoles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-[#1F382B]/80 border border-white/15 rounded-3xl p-8 shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:border-[#3FD3C6]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <span className="text-[10px] font-bold font-montserrat uppercase tracking-wider text-[#3FD3C6] bg-[#3FD3C6]/10 border border-[#3FD3C6]/30 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#15271E] border border-white/10 flex items-center justify-center text-white shrink-0">
                      <Icon className="w-5 h-5 text-[#C91524]" />
                    </div>
                  </div>

                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                    {item.institution}
                  </h3>

                  <div className="inline-block text-xs font-bold text-[#3FD3C6] font-montserrat mb-3 bg-[#15271E] px-3 py-1 rounded-lg border border-white/5">
                    {item.role}
                  </div>

                  <p className="text-xs text-white/50 italic font-montserrat mb-4">
                    {item.context}
                  </p>

                  <p className="text-sm text-[#B8C8BF] font-montserrat leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40 font-montserrat">
                  <span>Protocolo & Representação</span>
                  <span className="text-[#3FD3C6]">Ativo</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
