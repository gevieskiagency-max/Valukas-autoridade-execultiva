import React from 'react';
import { ExternalLink, Linkedin, Youtube, Shield, BookOpen, FileText } from 'lucide-react';

const LINKEDIN_URL = "https://www.linkedin.com/in/davi-samuel-valukas-lopes/";

export const Footer: React.FC = () => {
  return (
    <footer
      id="main-footer"
      className="bg-[#0F1D16] text-white border-t border-white/10 pt-16 pb-12 font-montserrat"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-cinzel text-3xl font-bold tracking-tight text-[#C91524]">
                Valukas
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3FD3C6]" />
            </div>

            <p className="text-xs text-[#B8C8BF] leading-relaxed max-w-sm">
              Plataforma institucional de Davi Samuel Valukas Lopes (Nana Kofi Adom). Ghostwriting executivo, consultoria de autoridade, produção intelectual e representação patrimonial e cultural.
            </p>

            <div className="pt-2 text-xs text-white/50">
              <span>Sede Comercial: Uberlândia / MG • Brasil</span>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#C91524] text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn de Davi Samuel Valukas Lopes"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://youtube.com/@amirassytv?si=QRTFcSoaiKMsAwSG"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#C91524] text-white flex items-center justify-center transition-colors"
                aria-label="Canal Amirassy TV"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href="https://youtube.com/@academiamasakatsu3755?si=F5jlqYUmq50squhV"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#3FD3C6] hover:text-[#0F1D16] text-white flex items-center justify-center transition-colors"
                aria-label="Academia Masakatsu"
              >
                <Shield className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Produção Intelectual */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Produção & Obras
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a
                  href="https://www.amazon.com.br/dp/B0CVTRYBZD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3FD3C6] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Obra na Amazon</span>
                  <ExternalLink className="w-3 h-3 text-white/40" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.fabricadeebooks.com.br/contosepoemassobreofuturo6.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3FD3C6] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Antologia em PDF</span>
                  <ExternalLink className="w-3 h-3 text-white/40" />
                </a>
              </li>
              <li>
                <a
                  href="https://folhadeparaguacu.com.br/author/davivalukas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3FD3C6] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Folha de Paraguaçu</span>
                  <ExternalLink className="w-3 h-3 text-white/40" />
                </a>
              </li>
              <li>
                <a
                  href="https://nanakofiadom.wordpress.com/2025/01/29/nana-kofi-adom-uma-jornada/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3FD3C6] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Biografia Oficial</span>
                  <ExternalLink className="w-3 h-3 text-white/40" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Acervo Multimídia & Docs */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Acervo & Canais
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a
                  href="https://youtube.com/@amirassytv?si=QRTFcSoaiKMsAwSG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3FD3C6] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Canal Amirassy TV</span>
                  <ExternalLink className="w-3 h-3 text-white/40" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@academiamasakatsu3755?si=F5jlqYUmq50squhV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3FD3C6] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Academia Masakatsu</span>
                  <ExternalLink className="w-3 h-3 text-white/40" />
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1gq_s1-ZqA4V5w1w-T4252m3M1p8GfA96B6L9_ZgU1wU/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3FD3C6] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Documento Institucional 01</span>
                  <ExternalLink className="w-3 h-3 text-white/40" />
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1Zt-Wk9g47Q0yqG4E9523H037M0G_d4w1z6G_ZtU4y7U/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3FD3C6] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Documento Institucional 02</span>
                  <ExternalLink className="w-3 h-3 text-white/40" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Relações & Contato */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Institucional
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#diplomacia" className="hover:text-[#3FD3C6] transition-colors">
                  Reino Bunyoro-Kitara (Brasil)
                </a>
              </li>
              <li>
                <a href="#diplomacia" className="hover:text-[#3FD3C6] transition-colors">
                  ARPHAC Cultura
                </a>
              </li>
              <li>
                <a href="#diplomacia" className="hover:text-[#3FD3C6] transition-colors">
                  Círculo Monárquico de Uberlândia
                </a>
              </li>
              <li>
                <a href="#formacao" className="hover:text-[#3FD3C6] transition-colors">
                  Mestrado em Música (UFU)
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C91524] font-bold hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Consulta Executiva</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Protocol */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Valukas. Todos os direitos reservados. Davi Samuel Valukas Lopes (Nana Kofi Adom).
          </p>

          <div className="flex items-center space-x-6 text-[11px]">
            <span>Uberlândia, Minas Gerais</span>
            <span>•</span>
            <span>Rigor Intelectual & Confidencialidade</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
