import React from 'react';
import { Youtube, FileText, ExternalLink, Play, BookOpen, Shield } from 'lucide-react';
import { ConcentricRipples } from './ConcentricRipples';

export const MultimediaHub: React.FC = () => {
  const mediaItems = [
    {
      id: 'amirassy-tv',
      type: 'youtube',
      title: 'Canal Amirassy TV',
      subtitle: 'Comunicação Audiovisual & Produções Culturais',
      description:
        'Canal dedicado a produções audiovisuais, difusão cultural, saraus, reflexões e conteúdos informativos de alto valor estético.',
      url: 'https://youtube.com/@amirassytv?si=QRTFcSoaiKMsAwSG',
      buttonText: 'Acessar Amirassy TV no YouTube',
      icon: Youtube,
      accentColor: 'text-[#C91524]',
      badge: 'Canal Oficial YouTube',
    },
    {
      id: 'academia-masakatsu',
      type: 'youtube',
      title: 'Academia Masakatsu',
      subtitle: 'Filosofia, Tradição e Marcialidade',
      description:
        'Espaço de reflexão dedicado aos princípios filosóficos das artes marciais tradicionais, disciplina, ética e formação interior.',
      url: 'https://youtube.com/@academiamasakatsu3755?si=F5jlqYUmq50squhV',
      buttonText: 'Acessar Academia Masakatsu',
      icon: Youtube,
      accentColor: 'text-[#3FD3C6]',
      badge: 'Filosofia & Marcialidade',
    },
    {
      id: 'doc-01',
      type: 'document',
      title: 'Documento Institucional 01',
      subtitle: 'Acervo & Registro Documental',
      description:
        'Registro arquivístico oficial, diretrizes institucionais e documentação de patrimônio em formato compartilhado oficial.',
      url: 'https://docs.google.com/document/d/1gq_s1-ZqA4V5w1w-T4252m3M1p8GfA96B6L9_ZgU1wU/edit?usp=sharing',
      buttonText: 'Abrir Documento Institucional 01',
      icon: FileText,
      accentColor: 'text-[#3FD3C6]',
      badge: 'Google Docs Oficial',
    },
    {
      id: 'doc-02',
      type: 'document',
      title: 'Documento Institucional 02',
      subtitle: 'Acervo & Registro Documental',
      description:
        'Documento formal e protocolar contendo deliberações, estatutos ou diretrizes institucionais preservadas.',
      url: 'https://docs.google.com/document/d/1Zt-Wk9g47Q0yqG4E9523H037M0G_d4w1z6G_ZtU4y7U/edit?usp=sharing',
      buttonText: 'Abrir Documento Institucional 02',
      icon: FileText,
      accentColor: 'text-[#C91524]',
      badge: 'Google Docs Oficial',
    },
  ];

  return (
    <section
      id="multimidia"
      className="relative bg-[#122019] text-white py-20 lg:py-28 overflow-hidden border-t border-white/5"
    >
      {/* Background ripples */}
      <div className="absolute -top-24 right-1/4 pointer-events-none opacity-20 z-0">
        <ConcentricRipples size={500} count={8} origin="top-right" color="#3FD3C6" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F382B] border border-white/10 text-xs text-[#3FD3C6] font-montserrat font-bold tracking-wider uppercase mb-3">
            <Youtube className="w-3.5 h-3.5 text-[#C91524]" />
            <span>Acervo & Canais de Transmissão</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Hub Multimídia & Documentação
          </h2>

          <p className="text-sm sm:text-base text-[#B8C8BF] font-montserrat max-w-xl mx-auto">
            Acesso aos canais audiovisuais de produção cultural, marcialidade e documentação oficial arquivada.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mediaItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={`media-${item.id}`}
                className="bg-[#1F382B] border border-white/15 rounded-3xl p-7 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-[#3FD3C6]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-bold font-montserrat uppercase tracking-wider text-white/80 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                      {item.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#15271E] border border-white/10 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${item.accentColor}`} />
                    </div>
                  </div>

                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#3FD3C6] font-montserrat mb-4">
                    {item.subtitle}
                  </p>

                  <p className="text-sm text-[#B8C8BF] font-montserrat leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-[#15271E] hover:bg-[#C91524] text-white font-montserrat font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl border border-white/15 hover:border-transparent transition-all duration-300 group-hover:shadow-lg"
                  >
                    <span>{item.buttonText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
