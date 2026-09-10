import React, { useState } from 'react';
import { ConcentricRipples } from './ConcentricRipples';
import { SparkleOrnament } from './SparkleOrnament';
import { CheckCircle2, MessageCircle, ExternalLink } from 'lucide-react';

const LINKEDIN_URL = "https://www.linkedin.com/in/davi-samuel-valukas-lopes/";
const WHATSAPP_NUMBER = "553492175675";

export const ContactSection: React.FC = () => {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const enviarLead = async (event: React.FormEvent) => {
    event.preventDefault();

    const trimmedNome = nome.trim();
    const trimmedWhatsapp = whatsapp.trim();
    const trimmedEmail = email.trim();
    const trimmedMensagem = mensagem.trim();

    if (!trimmedNome || !trimmedWhatsapp || !trimmedEmail || !trimmedMensagem) {
      return;
    }

    setIsSubmitting(true);

    // 1. Mensagem montada para o WhatsApp de Davi Valukas (34 9217-5675)
    const textoWhatsApp =
      `*NOVA SOLICITAÇÃO EXECUTIVA (SITE VALUKAS)*\n\n` +
      `*Nome / Cargo:* ${trimmedNome}\n` +
      `*WhatsApp do Lead:* ${trimmedWhatsapp}\n` +
      `*E-mail:* ${trimmedEmail}\n` +
      `*Escopo da Demanda:* ${trimmedMensagem}`;

    const urlWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textoWhatsApp)}`;
    setLastWhatsAppUrl(urlWhatsApp);

    try {
      // 2. Disparo do e-mail em segundo plano para valukasdigital@gmail.com
      await fetch("https://formsubmit.co/ajax/valukasdigital@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Novo Lead Executivo: ${trimmedNome}`,
          Nome: trimmedNome,
          WhatsApp: trimmedWhatsapp,
          Email: trimmedEmail,
          Mensagem: trimmedMensagem
        })
      });
    } catch (error) {
      console.warn("E-mail disparado em contingência ou aguardando confirmação:", error);
    }

    // 3. Abre o WhatsApp com a mensagem formatada
    try {
      window.open(urlWhatsApp, "_blank");
    } catch (err) {
      console.warn("Popup bloqueado pelo navegador:", err);
    }

    // Marca como submetido e limpa formulário
    setIsSubmitting(false);
    setSubmitted(true);
    setNome('');
    setWhatsapp('');
    setEmail('');
    setMensagem('');
  };

  const handleReset = () => {
    setSubmitted(false);
    setLastWhatsAppUrl(null);
  };

  return (
    <section
      id="contato"
      className="relative bg-[#16271e] text-white py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden border-t border-white/5 font-montserrat"
    >
      {/* Centered 4-pointed Star Ornament above contact card (as seen in mockup) */}
      <div className="w-full max-w-xl mx-auto text-center mb-8 relative z-10">
        <SparkleOrnament color="#3FD3C6" variant="section-divider" className="text-[#3FD3C6] opacity-80" />
      </div>

      <div className="relative w-full max-w-[1050px]">
        {/* Concentric ripples flanking the left side of the card (Exact to reference image) */}
        <div className="absolute -top-16 -left-20 pointer-events-none opacity-40 z-0">
          <ConcentricRipples size={460} count={8} origin="top-left" color="#3FD3C6" />
        </div>
        <div className="absolute -bottom-16 -right-16 pointer-events-none opacity-20 z-0 hidden sm:block">
          <ConcentricRipples size={400} count={6} origin="bottom-right" color="#3FD3C6" />
        </div>

        {/* Contact Card */}
        <div
          id="contact-card"
          className="relative z-10 bg-[#1b3327] border border-white/[0.08] rounded-2xl p-7 sm:p-12 lg:p-[50px] w-full grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-10 lg:gap-[50px] shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
        >
          {/* Coluna Esquerda: Informações e Garantias */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-cinzel text-3xl sm:text-[2.2rem] font-bold text-white mb-5 leading-tight">
                Contato Executivo
              </h2>

              <p className="text-[#a8bcaf] text-[0.98rem] leading-[1.6] mb-9">
                Inicie um diálogo reservado para projetos de ghostwriting, produções literárias de alto nível, palestras ou representação institucional e cultural.
              </p>

              <div className="flex flex-col gap-4 sm:gap-[18px] mb-9">
                <div className="flex items-center gap-3.5 text-[#e5ece8] text-[0.92rem] font-medium">
                  <span className="text-lg text-[#3fd3c6]">🛡️</span>
                  <span>Confidencialidade Rigorosa (NDA Sob Demanda)</span>
                </div>
                <div className="flex items-center gap-3.5 text-[#e5ece8] text-[0.92rem] font-medium">
                  <span className="text-lg text-[#3fd3c6]">👤</span>
                  <span>Atendimento Direto por Davi Samuel Valukas Lopes</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[0.85rem] font-extrabold tracking-[1px] text-[#3fd3c6] uppercase no-underline transition-opacity hover:opacity-80"
              >
                <span>CONECTAR PELO LINKEDIN OFICIAL ↗</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita: Formulário ou Feedback de Envio */}
          <div className="w-full">
            {submitted ? (
              <div className="bg-[#14241c] border border-[#3fd3c6]/30 rounded-xl p-8 text-center space-y-5 animate-fadeIn">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#3fd3c6]/15 text-[#3fd3c6] flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
                    Solicitação Enviada!
                  </h3>
                  <p className="text-sm text-[#a8bcaf] leading-relaxed max-w-md mx-auto">
                    Os dados foram transmitidos em segundo plano para a assessoria via e-mail e preparados para contato imediato no WhatsApp oficial.
                  </p>
                </div>

                {lastWhatsAppUrl && (
                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <a
                      href={lastWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-montserrat font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg transition-all shadow-md w-full sm:w-auto"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Abrir Chat WhatsApp Novamente</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider text-white/60 hover:text-white px-4 py-3 rounded-lg transition-colors border border-white/10 hover:border-white/30 w-full sm:w-auto"
                    >
                      Enviar Nova Mensagem
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <form id="leadForm" onSubmit={enviarLead} className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="nome"
                    className="block text-[0.75rem] font-extrabold tracking-[1px] text-[#d1ded6] uppercase"
                  >
                    NOME COMPLETO
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Seu nome ou cargo executivo"
                    required
                    className="w-full bg-[#14241c] border border-white/[0.08] rounded-lg px-4 py-3.5 text-white font-inherit text-[0.95rem] outline-none transition-colors duration-200 placeholder:text-[#63776c] focus:border-[#3fd3c6]"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="whatsapp"
                    className="block text-[0.75rem] font-extrabold tracking-[1px] text-[#d1ded6] uppercase"
                  >
                    CONTATO / WHATSAPP
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="(DDD) 00000-0000"
                    required
                    className="w-full bg-[#14241c] border border-white/[0.08] rounded-lg px-4 py-3.5 text-white font-inherit text-[0.95rem] outline-none transition-colors duration-200 placeholder:text-[#63776c] focus:border-[#3fd3c6]"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-[0.75rem] font-extrabold tracking-[1px] text-[#d1ded6] uppercase"
                  >
                    EMAIL CORPORATIVO
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seuemail@empresa.com"
                    required
                    className="w-full bg-[#14241c] border border-white/[0.08] rounded-lg px-4 py-3.5 text-white font-inherit text-[0.95rem] outline-none transition-colors duration-200 placeholder:text-[#63776c] focus:border-[#3fd3c6]"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="mensagem"
                    className="block text-[0.75rem] font-extrabold tracking-[1px] text-[#d1ded6] uppercase"
                  >
                    MENSAGEM / ESCOPO DA DEMANDA
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Descreva brevemente seu projeto, livro, discurso ou consulta..."
                    required
                    className="w-full bg-[#14241c] border border-white/[0.08] rounded-lg px-4 py-3.5 text-white font-inherit text-[0.95rem] outline-none transition-colors duration-200 placeholder:text-[#63776c] focus:border-[#3fd3c6] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="btnSubmit"
                  disabled={isSubmitting}
                  className="w-full bg-[#c91524] hover:bg-[#a30f1b] text-white border-none rounded-lg p-4 text-[0.95rem] font-black tracking-[1.5px] uppercase cursor-pointer shadow-[0_10px_25px_rgba(201,21,36,0.35)] transition-all duration-200 hover:-translate-y-0.5 mt-2.5 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'ENVIANDO DADOS...' : 'ENVIAR SOLICITAÇÃO'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
