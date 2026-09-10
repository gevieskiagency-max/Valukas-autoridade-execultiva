import React, { useState, useRef, useEffect } from 'react';

const DEFAULT_VIDEO = "/videos/Create_looping_website_hero_video_20260910130534.mp4";
const LINKTREE_URL = "https://linktr.ee/davivalukas";

export const Hero: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState<string>(DEFAULT_VIDEO);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback: muted video plays automatically
      });
    }
  }, [videoSrc]);

  const handleSmoothScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById('contato');
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Support drag-and-drop of 3D video file directly onto the hero section
  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && (file.type.startsWith('video/') || file.name.endsWith('.mp4'))) {
      const videoUrl = URL.createObjectURL(file);
      setVideoSrc(videoUrl);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <section
      id="hero"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="hero-valukas"
    >
      <div className="hero-container">
        
        {/* COLUNA 1: TEXTO INSTITUCIONAL & CTAS (ISOLADA À ESQUERDA) */}
        <div className="hero-text-col">
          <span className="hero-tag">
            GHOSTWRITING EXECUTIVO B2B • UBERLÂNDIA, MG, BRASIL
          </span>
          
          <h1 id="hero-title" className="hero-headline">
            AUTORIDADE EXECUTIVA REDEFINIDA: SERVIÇOS DE GHOSTWRITING PREMIADOS
          </h1>
          
          <p className="hero-lead-b2b">
            Do conhecimento tácito ao conteúdo que constrói autoridade.
          </p>
          
          <p className="hero-bio-summary">
            Aprimoramento textual estratégico e posicionamento de pensamento para líderes e executivos. 20+ anos de experiência multidisciplinar em Educação, Gestão, Comunicação e Cultura. Mestrando em Música pela UFU.
          </p>
          
          <div className="hero-cta-buttons">
            <a
              href="#contato"
              onClick={handleSmoothScrollToContact}
              id="hero-cta-primary"
              className="btn-hero-primary"
            >
              CONSULTA EXECUTIVA
            </a>
            
            <a
              href={LINKTREE_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-secondary"
              className="btn-hero-outline"
            >
              EXPLORAR LINKTREE ↗
            </a>
          </div>
        </div>

        {/* COLUNA 2: VÍDEO 3D DE REPRODUÇÃO AUTOMÁTICA (SEM CROP / SEM DISTORÇÃO) */}
        <div className="hero-media-col">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="hero-video-asset"
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
            <source src="/videos/Create_looping_website_hero_video_20260910130534.mp4" type="video/mp4" />
            <source src="/Create_looping_website_hero_video_20260910130534.mp4" type="video/mp4" />
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </section>
  );
};
