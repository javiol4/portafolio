/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { SECTIONS, EXPERIENCES, PROJECTS, TOOL_TAGS, WRITINGS, PUBLICATIONS } from "./data";
import Navigation from "./components/Navigation";
import SocialLinks from "./components/SocialLinks";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import DesignPlayground from "./components/DesignPlayground";
import { ArrowUpRight, Download, Mail, Linkedin, Wrench, Github, Sparkles } from "lucide-react";

function getToolLogoAndStyle(tool: string) {
  switch (tool) {
    case "Figma":
      return {
        icon: (
          <svg width="12" height="18" viewBox="0 0 12 18" fill="none" className="shrink-0">
            <path d="M3 6a3 3 0 1 1 0-6h3v6H3z" fill="#F24E1E"/>
            <path d="M9 6a3 3 0 1 1-3-3h3v3z" fill="#FF7262"/>
            <path d="M3 12a3 3 0 1 1 0-6h3v6H3z" fill="#A259FF"/>
            <path d="M6 12a3 3 0 1 1 3 3H6v-3z" fill="#1ABCFE"/>
            <path d="M3 18a3 3 0 1 1 3-3v3H3z" fill="#0ACF83"/>
          </svg>
        ),
        className: "bg-[#F24E1E]/5 border-[#F24E1E]/20 text-[#2C2C2C] hover:bg-[#F24E1E]/10"
      };
    case "GitHub":
      return {
        icon: <Github size={13} className="shrink-0 text-[#24292e]" />,
        className: "bg-[#24292e]/5 border-[#24292e]/20 text-[#24292e] hover:bg-[#24292e]/10"
      };
    case "Slack":
      return {
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zM6.302 15.165a2.528 2.528 0 0 1 2.52-2.52h5.044a2.528 2.528 0 0 1 2.522 2.52v5.044a2.528 2.528 0 0 1-2.522 2.52H8.822a2.528 2.528 0 0 1-2.52-2.52v-5.044z" fill="#36C5F0"/>
            <path d="M8.822 5.043a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52v2.52h-2.522a2.528 2.528 0 0 1-2.52-2.52zM8.822 6.302a2.528 2.528 0 0 1 2.52 2.52v5.044a2.528 2.528 0 0 1-2.52 2.522H3.778a2.528 2.528 0 0 1-2.522-2.522 2.528 2.528 0 0 1 2.522-2.52h5.044z" fill="#2EB67D"/>
            <path d="M18.958 8.822a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.522 2.528 2.528 0 0 1-2.522 2.52h-2.52v-2.522zM17.698 8.822a2.528 2.528 0 0 1-2.52 2.52h-5.044a2.528 2.528 0 0 1-2.522-2.52V3.778a2.528 2.528 0 0 1 2.522-2.522h5.044a2.528 2.528 0 0 1 2.52 2.522v5.044z" fill="#ECB22E"/>
            <path d="M15.178 18.957a2.528 2.528 0 0 1-2.52 2.522 2.528 2.528 0 0 1-2.522-2.522v-2.52h2.522a2.528 2.528 0 0 1 2.52 2.52zM15.178 17.697a2.528 2.528 0 0 1-2.52-2.52v-5.044a2.528 2.528 0 0 1 2.52-2.522h5.044a2.528 2.528 0 0 1 2.522 2.522 2.528 2.528 0 0 1-2.522 2.52h-5.044z" fill="#E01E5A"/>
          </svg>
        ),
        className: "bg-[#4A154B]/5 border-[#4A154B]/15 text-[#4A154B] hover:bg-[#4A154B]/10"
      };
    case "Notion":
      return {
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-black">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M7 7h2v10H7z" fill="currentColor" />
            <path d="M15 7h2v10h-2z" fill="currentColor" />
            <path d="M9 7l6 10" />
          </svg>
        ),
        className: "bg-[#000000]/5 border-[#000000]/20 text-[#000000] hover:bg-[#000000]/10"
      };
    case "Canva":
      return {
        icon: (
          <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-[#00C4CC] to-[#7d2ae8] flex items-center justify-center shrink-0">
            <span className="text-[10px] text-white font-extrabold font-serif -mt-0.5">C</span>
          </div>
        ),
        className: "bg-[#00C4CC]/5 border-[#00C4CC]/25 text-[#008F94] hover:bg-[#00C4CC]/10"
      };
    case "Loom":
      return {
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#FF5E5B]">
            <circle cx="12" cy="12" r="3" fill="currentColor" />
            <circle cx="12" cy="5" r="2.5" fill="currentColor" />
            <circle cx="12" cy="19" r="2.5" fill="currentColor" />
            <circle cx="5" cy="12" r="2.5" fill="currentColor" />
            <circle cx="19" cy="12" r="2.5" fill="currentColor" />
            <circle cx="7" cy="7" r="2.5" fill="currentColor" />
            <circle cx="17" cy="17" r="2.5" fill="currentColor" />
            <circle cx="17" cy="7" r="2.5" fill="currentColor" />
            <circle cx="7" cy="17" r="2.5" fill="currentColor" />
          </svg>
        ),
        className: "bg-[#FF5E5B]/5 border-[#FF5E5B]/20 text-[#E04F4C] hover:bg-[#FF5E5B]/10"
      };
    case "Moodle":
      return {
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#F25F22]">
            <path d="M12 2L4 6l8 4 8-4-8-4z" fill="#231F20" />
            <path d="M7 7.5v4c0 1 2 2.5 5 2.5s5-1.5 5-2.5v-4" stroke="#231F20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 6v6" stroke="#231F20" strokeWidth="1" />
            <path d="M5 14v6h3v-3l4 3 4-3v3h3v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        className: "bg-[#F25F22]/5 border-[#F25F22]/20 text-[#D44A13] hover:bg-[#F25F22]/10"
      };
    case "Google Workspace":
      return {
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.87-2.6-2.87-4.53-6.19-4.53z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        ),
        className: "bg-[#4285F4]/5 border-[#4285F4]/20 text-[#1A73E8] hover:bg-[#4285F4]/10"
      };
    case "ATLAS.ti":
      return {
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#A6192E]">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            <path d="M2 12h20" />
          </svg>
        ),
        className: "bg-[#A6192E]/5 border-[#A6192E]/20 text-[#A6192E] hover:bg-[#A6192E]/10"
      };
    case "Flourish":
      return {
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#E0533C]">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
            <path d="M3 12a9 9 0 0 1 15 0" strokeDasharray="2 2" />
          </svg>
        ),
        className: "bg-[#E0533C]/5 border-[#E0533C]/20 text-[#C7402B] hover:bg-[#E0533C]/10"
      };
    case "Scrum / Ágil":
      return {
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#0052CC]">
            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
          </svg>
        ),
        className: "bg-[#0052CC]/5 border-[#0052CC]/15 text-[#0052CC] hover:bg-[#0052CC]/10"
      };
    case "IA Generativa":
      return {
        icon: <Sparkles size={13} className="shrink-0 text-[#E0A458]" />,
        className: "bg-[#E0A458]/10 border-[#E0A458]/25 text-[#2B2620] hover:bg-[#E0A458]/20"
      };
    case "Edición de videos":
      return {
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#E23E57]">
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
            <line x1="7" y1="2" x2="7" y2="22" />
            <line x1="17" y1="2" x2="17" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <line x1="2" y1="7" x2="7" y2="7" />
            <line x1="2" y1="17" x2="7" y2="17" />
            <line x1="17" y1="17" x2="22" y2="17" />
            <line x1="17" y1="7" x2="22" y2="7" />
          </svg>
        ),
        className: "bg-[#E23E57]/5 border-[#E23E57]/20 text-[#C42E45] hover:bg-[#E23E57]/10"
      };
    case "UX Research":
      return {
        icon: (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#00A86B]">
            <circle cx="12" cy="12" r="3" />
            <path d="M3 12c4-8 14-8 18 0-4 8-14 8-18 0z" />
          </svg>
        ),
        className: "bg-[#00A86B]/5 border-[#00A86B]/20 text-[#008A56] hover:bg-[#00A86B]/10"
      };
    default:
      return {
        icon: <Wrench size={12} className="text-sage" />,
        className: "bg-ochre/15 border-ochre/25 text-text-dark hover:bg-ochre/20"
      };
  }
}

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showGrid, setShowGrid] = useState(false);

  // Track cursor coordinates for the custom radial glow overlay
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Set up intersection observer to dynamically spy on scrolling and highlight correct sidebar anchor
  useEffect(() => {
    const sectionIds = SECTIONS.map((s) => s.id);
    const observers = sectionIds.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          // High-accuracy trigger point for vertical scroll Spy
          rootMargin: "-25% 0px -55% 0px",
        }
      );
      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.element);
      });
    };
  }, []);

  const handleSectionClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F8F5F0] text-[#2B2620] selection:bg-ochre/30 selection:text-[#2B2620] overflow-x-hidden" id="app-viewport">
      {/* 1. Mouse Tracking Glow Overlay (following cursor movement) */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(91, 107, 88, 0.08), rgba(224, 164, 88, 0.04) 45%, transparent 80%)`,
        }}
        id="cursor-glow-overlay"
      />

      {/* 2. Professional 12-Column Figma Designer Grid Overlay (Toggled via Playground) */}
      {showGrid && (
        <div 
          className="pointer-events-none fixed inset-0 z-40 mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24 grid grid-cols-12 gap-4 h-full"
          id="designer-layout-grid"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i} 
              className="bg-sage/[0.03] border-x border-sage/5 h-full w-full flex items-start justify-center pt-4"
              id={`grid-col-${i}`}
            >
              <span className="font-mono text-[9px] text-sage/30 font-semibold select-none">C{i + 1}</span>
            </div>
          ))}
        </div>
      )}

      {/* 3. Main Composition Grid) */}
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0" id="main-content-layout">
        <div className="lg:flex lg:justify-between lg:gap-4" id="split-panes-wrapper">
          
          {/* LEFT FIXED PANEL: HEADER & NAVIGATION */}
          <header 
            className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[35%] lg:flex-col lg:justify-between lg:py-24"
            id="left-fixed-panel"
          >
            <div id="author-headline-group">
              {/* Profile Image Avatar */}
              <div className="mb-6 flex items-center gap-4" id="avatar-container">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-sage/20 bg-sage/5 shadow-inner" id="avatar-img-frame">
                  <img
                    src="/src/assets/images/javier.jpg"
                    alt="Javier Alberto Olmos Aguilar"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150";
                    }}
                    id="avatar-image"
                  />
                </div>
              </div>

              {/* Title & Editorial Bio */}
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-text-dark leading-tight" id="designer-name">
                Javier Alberto Olmos Aguilar
              </h1>
              <h2 className="font-display font-semibold text-base text-terracotta mt-2.5" id="designer-title">
                Psicólogo social · Tecnología con propósito · Investigación aplicada
              </h2>
              <p className="font-display font-bold text-sm text-text-dark mt-4 max-w-xs leading-relaxed" id="designer-tagline">
                Construyo tecnología que entiende a las personas.
              </p>
              <p className="font-sans text-sm text-text-dark/75 mt-2 max-w-xs leading-relaxed" id="designer-editorial-bio">
                Diseño y lidero proyectos donde la psicología, los datos y la tecnología se encuentran para generar impacto social real. Y aparte, escribo.
              </p>

              {/* Hero CTA buttons */}
              <div className="flex flex-wrap gap-3 mt-5" id="hero-cta-buttons">
                <button
                  onClick={() => handleSectionClick("projects")}
                  className="px-4 py-2 rounded-lg font-display font-bold text-xs tracking-wider uppercase bg-terracotta text-[#F8F5F0] hover:bg-terracotta/90 transition-colors"
                  id="hero-cta-projects"
                >
                  Ver proyectos
                </button>
                <button
                  onClick={() => handleSectionClick("contact")}
                  className="px-4 py-2 rounded-lg font-display font-bold text-xs tracking-wider uppercase border border-sage/40 text-sage hover:bg-sage/10 transition-colors"
                  id="hero-cta-contact"
                >
                  Contáctame
                </button>
              </div>

              {/* Side Navigation Anchor List */}
              <Navigation
                sections={SECTIONS}
                activeSection={activeSection}
                onSectionClick={handleSectionClick}
              />
            </div>

            {/* Bottom Social Action Anchor bar */}
            <div id="footer-social-section">
              <SocialLinks />
              <div className="mt-4 font-mono text-[10px] text-text-dark/40" id="footer-copyright-note">
                Javier Alberto Olmos Aguilar © 2026. Cochabamba, Bolivia.
              </div>
            </div>
          </header>

          {/* RIGHT SCROLLABLE PANEL: RICH CONTENT CV */}
          <main className="lg:w-[58%] lg:py-24 flex flex-col gap-20 sm:gap-28" id="right-scrollable-panel">
            
            {/* SECTION 00 // SOBRE MÍ */}
            <section
              id="about"
              className="scroll-mt-16 lg:scroll-mt-24 flex flex-col gap-5 text-sm sm:text-base text-text-dark/85 leading-relaxed font-sans"
              aria-label="Sobre Javier Olmos"
            >
              <h2 className="font-display font-bold text-xs uppercase tracking-widest text-text-dark lg:hidden mb-2" id="about-section-header-mobile">
                00 // SOBRE MÍ
              </h2>
              <p id="about-p1">
                Soy psicólogo social (UMSS) y candidato a MBA en desarrollo y creación de empresas (UPB). Trabajo en un territorio poco habitado: <strong className="text-text-dark font-semibold">el cruce entre la salud mental, la tecnología social y la investigación aplicada</strong>.
              </p>
              <p id="about-p2">
                En mi rol en el <strong className="text-text-dark font-semibold"><a href="https://labtecnosocial.org/" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:text-ochre underline underline-offset-4 decoration-terracotta/30 transition-colors">Laboratorio de Tecnologías Sociales</a></strong>, he liderado el desarrollo de apps de bienestar emocional, transformado datos en mapas interactivos que informan decisiones públicas. Además he formado a más de 600 estudiantes y profesionales en universidades y organizaciones de cooperación internacional. Mi trabajo fue reconocido con el <strong className="text-text-dark font-semibold">Premio Kamay 2024</strong> en innovación de base tecnológica.
              </p>
              <p id="about-p3">
                Investigo para hacer, no solo para publicar. Y creo que la mejor tecnología es la que se diseña entendiendo primero a las personas.
              </p>
            </section>

            {/* SECTION 01 // PROYECTOS DESTACADOS */}
            <section
              id="projects"
              className="scroll-mt-16 lg:scroll-mt-24 flex flex-col gap-6"
              aria-label="Proyectos tecnológicos y sociales"
            >
              <div className="lg:sticky lg:top-0 z-20 bg-[#F8F5F0]/90 backdrop-blur-xs py-3 -mx-4 px-4 border-b border-text-dark/5" id="projects-section-sticky-header">
                <h2 className="font-display font-extrabold text-sm uppercase tracking-widest text-text-dark flex items-center justify-between" id="projects-section-header">
                  <span>01 // PROYECTOS DESTACADOS</span>
                  <span className="font-mono text-[10px] text-text-dark/40 font-normal">Innovación Social</span>
                </h2>
              </div>

              {/* Portfolio Project list */}
              <div className="flex flex-col gap-4" id="projects-cards-stack">
                {PROJECTS.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    isHovered={hoveredItemId === project.id}
                    onHoverChange={setHoveredItemId}
                  />
                ))}
              </div>
            </section>

            {/* SECTION 02 // TRAYECTORIA */}
            <section
              id="experience"
              className="scroll-mt-16 lg:scroll-mt-24 flex flex-col gap-6"
              aria-label="Trayectoria profesional"
            >
              <div className="lg:sticky lg:top-0 z-20 bg-[#F8F5F0]/90 backdrop-blur-xs py-3 -mx-4 px-4 border-b border-text-dark/5" id="experience-section-sticky-header">
                <h2 className="font-display font-extrabold text-sm uppercase tracking-widest text-text-dark flex items-center justify-between" id="experience-section-header">
                  <span>02 // TRAYECTORIA</span>
                  <span className="font-mono text-[10px] text-text-dark/40 font-normal">Recorrido Profesional</span>
                </h2>
              </div>

              {/* Standard & Hovered CV cards stack */}
              <div className="flex flex-col gap-4" id="experience-cards-stack">
                {EXPERIENCES.map((exp) => (
                  <ExperienceCard
                    key={exp.id}
                    experience={exp}
                    isHovered={hoveredItemId === exp.id}
                    onHoverChange={setHoveredItemId}
                  />
                ))}
              </div>

              <a
                href="/src/assets/images/CV_JAOA_2026.pdf"
                download="CV_JAOA_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-lg font-display font-bold text-xs tracking-wider uppercase border border-terracotta/40 text-terracotta hover:bg-terracotta/10 transition-colors"
                id="download-cv-button"
              >
                <Download size={14} />
                Descargar CV completo
              </a>
            </section>

            {/* SECTION 03 // ESCRITURA PERSONAL */}
            <section 
              id="writings" 
              className="scroll-mt-16 lg:scroll-mt-24 flex flex-col gap-6"
              aria-label="Escritura personal y reflexiones"
            >
              <div className="lg:sticky lg:top-0 z-20 bg-[#F8F5F0]/90 backdrop-blur-xs py-3 -mx-4 px-4 border-b border-text-dark/5" id="writings-section-sticky-header">
                <h2 className="font-display font-extrabold text-sm uppercase tracking-widest text-text-dark flex items-center justify-between" id="writings-section-header">
                  <span>03 // ESCRITURA PERSONAL</span>
                  <span className="font-mono text-[10px] text-text-dark/40 font-normal">Zona creativa</span>
                </h2>
              </div>

              <p className="font-sans text-sm text-text-dark/80 leading-relaxed" id="publications-intro">
                Aquí habito la zona creativa, donde las palabras se vuelven más libres:
              </p>

              <div className="flex flex-col gap-4" id="writings-cards-stack">
                {WRITINGS.map((writing) => {
                  const isHovered = hoveredItemId === writing.id;
                  return (
                    <a
                      key={writing.id}
                      href={writing.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative flex flex-col p-5 pt-8 rounded-xl border border-transparent transition-all duration-300 ease-out cursor-pointer ${
                        isHovered
                          ? "bg-sage/[0.05] border-sage/20 shadow-[0_4px_20px_-4px_rgba(91,107,88,0.1)]"
                          : "hover:bg-sage/[0.04] hover:border-sage/10 hover:shadow-[0_4px_16px_-4px_rgba(91,107,88,0.06)]"
                      }`}
                      onMouseEnter={() => setHoveredItemId(writing.id)}
                      onMouseLeave={() => setHoveredItemId(null)}
                      id={`writing-card-${writing.id}`}
                    >
                      {/* Decorative elegant serif quotes at the top-left corner */}
                      <span className="absolute top-2 left-4 font-serif text-5xl leading-none text-text-dark/15 select-none pointer-events-none transition-colors duration-300 group-hover:text-terracotta/25" aria-hidden="true">
                        “
                      </span>
                      <div className="flex items-center gap-2 text-xs font-mono text-text-dark/50 mb-2" id={`writing-meta-${writing.id}`}>
                        <span>{writing.date}</span>
                        <span>•</span>
                        <span>{writing.readTime}</span>
                        {writing.category && (
                          <>
                            <span>•</span>
                            <span className="text-sage font-medium">{writing.category}</span>
                          </>
                        )}
                      </div>
                      <h3 className="font-display font-bold text-base text-text-dark flex items-center justify-between leading-snug" id={`writing-title-row-${writing.id}`}>
                        <span 
                          className={`transition-transform duration-300 inline-flex items-center gap-1 ${
                            isHovered ? "text-terracotta translate-x-1" : "group-hover:text-terracotta group-hover:translate-x-1"
                          }`}
                        >
                          {writing.title}
                          <ArrowUpRight 
                            size={16} 
                            className={`inline-block transition-transform duration-300 ${
                              isHovered ? "translate-x-1 -translate-y-1" : "group-hover:translate-x-1 group-hover:-translate-y-1"
                            }`}
                          />
                        </span>
                      </h3>
                      <p className="font-sans text-sm text-text-dark/80 mt-2 leading-relaxed" id={`writing-excerpt-${writing.id}`}>
                        {writing.excerpt}
                      </p>
                    </a>
                  );
                })}
              </div>
            </section>

            {/* SECTION 04 // PUBLICACIONES */}
            <section 
              id="publications" 
              className="scroll-mt-16 lg:scroll-mt-24 flex flex-col gap-6"
              aria-label="Publicaciones académicas"
            >
              <div className="lg:sticky lg:top-0 z-20 bg-[#F8F5F0]/90 backdrop-blur-xs py-3 -mx-4 px-4 border-b border-text-dark/5" id="publications-section-sticky-header">
                <h2 className="font-display font-extrabold text-sm uppercase tracking-widest text-text-dark flex items-center justify-between" id="publications-section-header">
                  <span>04 // PUBLICACIONES</span>
                  <span className="font-mono text-[10px] text-text-dark/40 font-normal">Investigación Científica</span>
                </h2>
              </div>

              <p className="font-sans text-sm text-text-dark/80 leading-relaxed" id="publications-intro">
                Autor y coautor de más de 10 publicaciones. Acá las puedes ver todas:
              </p>

              <div className="flex flex-col gap-4" id="publications-cards-stack">
                {PUBLICATIONS.map((pub) => {
                  const isHovered = hoveredItemId === pub.id;
                  return (
                    <div
                      key={pub.id}
                      className={`group relative flex flex-col p-5 rounded-xl border border-transparent transition-all duration-300 ease-out cursor-pointer ${
                        isHovered
                          ? "bg-sage/[0.05] border-sage/20 shadow-[0_4px_20px_-4px_rgba(91,107,88,0.1)]"
                          : "hover:bg-sage/[0.04] hover:border-sage/10 hover:shadow-[0_4px_16px_-4px_rgba(91,107,88,0.06)]"
                      }`}
                      onMouseEnter={() => setHoveredItemId(pub.id)}
                      onMouseLeave={() => setHoveredItemId(null)}
                      id={`pub-card-${pub.id}`}
                    >
                      <div className="flex items-center gap-2 text-[10px] font-mono mb-2 flex-wrap" id={`pub-meta-${pub.id}`}>
                        <span className="px-2 py-0.5 rounded font-bold uppercase bg-terracotta/10 text-terracotta" id={`pub-authors-${pub.id}`}>
                          {pub.authors}
                        </span>
                        <span className="text-text-dark/50" id={`pub-year-${pub.id}`}>
                          {pub.year}
                        </span>
                        {pub.doi && (
                          <span className="text-sage font-medium px-1.5 py-0.2 border border-sage/20 rounded" id={`pub-doi-${pub.id}`}>
                            DOI: {pub.doi}
                          </span>
                        )}
                      </div>

                      <h3 className="font-display font-semibold text-base text-text-dark leading-snug" id={`pub-title-row-${pub.id}`}>
                        {pub.link && pub.link !== "#" ? (
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1 transition-transform duration-300 ${
                              isHovered ? "text-terracotta translate-x-1" : "group-hover:text-terracotta group-hover:translate-x-1"
                            }`}
                            id={`pub-link-${pub.id}`}
                          >
                            {pub.title}
                            <ArrowUpRight 
                              size={16} 
                              className={`inline-block transition-transform duration-300 ${
                                isHovered ? "translate-x-1 -translate-y-1" : "group-hover:translate-x-1 group-hover:-translate-y-1"
                              }`}
                            />
                          </a>
                        ) : (
                          <span className="text-text-dark">{pub.title}</span>
                        )}
                      </h3>

                      <p className="font-sans text-xs sm:text-sm text-text-dark/75 mt-2 leading-relaxed" id={`pub-source-${pub.id}`}>
                        {pub.source}
                      </p>
                    </div>
                  );
                })}
              </div>

 
            </section>

            {/* SECTION 05 // PLAYGROUND & SKILLS */}
            <section 
              id="playground" 
              className="scroll-mt-16 lg:scroll-mt-24 flex flex-col gap-8"
              aria-label="Especificación del Sistema de Diseño"
            >
              <div className="lg:sticky lg:top-0 z-20 bg-[#F8F5F0]/90 backdrop-blur-xs py-3 -mx-4 px-4 border-b border-text-dark/5" id="playground-section-sticky-header">
                <h2 className="font-display font-extrabold text-sm uppercase tracking-widest text-text-dark flex items-center justify-between" id="playground-section-header">
                  <span>05 // PLAYGROUND & TOKENS</span>
                  <span className="font-mono text-[10px] text-text-dark/40 font-normal">Verificación W3C</span>
                </h2>
              </div>

              {/* 1. Auto-scrolling Tools Tags Carousel */}
              <div className="relative overflow-hidden border border-text-dark/10 rounded-xl py-5" id="tools-carousel-wrapper">
                {/* Edge fade masks matching the warm background */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-12 z-10 bg-gradient-to-r from-[#F8F5F0] to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-12 z-10 bg-gradient-to-l from-[#F8F5F0] to-transparent" />

                <div className="tools-marquee-track gap-3 px-3" id="tools-marquee-track">
                  {/* Track duplicated so the loop is seamless */}
                  {[...TOOL_TAGS, ...TOOL_TAGS].map((tool, i) => {
                    const info = getToolLogoAndStyle(tool);
                    return (
                      <span
                        key={`${tool}-${i}`}
                        aria-hidden={i >= TOOL_TAGS.length}
                        className={`inline-flex items-center gap-1.5 shrink-0 px-3 py-1.5 text-xs font-sans font-medium rounded-md border transition-all duration-300 ${info.className}`}
                        id={`tool-tag-${i}`}
                      >
                        {info.icon}
                        {tool}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* 2. Interactive Tokens Sandbox and Accessibility Tester */}
              <DesignPlayground
                showGrid={showGrid}
                onToggleGrid={setShowGrid}
                hoverLockedId={hoveredItemId}
                onHoverLockChange={setHoveredItemId}
              />
            </section>

            {/* SECTION 06 // CONTACTO */}
            <section
              id="contact"
              className="scroll-mt-16 lg:scroll-mt-24 flex flex-col gap-6 pb-20"
              aria-label="Contacto"
            >
              <div className="lg:sticky lg:top-0 z-20 bg-[#F8F5F0]/90 backdrop-blur-xs py-3 -mx-4 px-4 border-b border-text-dark/5" id="contact-section-sticky-header">
                <h2 className="font-display font-extrabold text-sm uppercase tracking-widest text-text-dark flex items-center justify-between" id="contact-section-header">
                  <span>06 // CONTACTO</span>
                  <span className="font-mono text-[10px] text-text-dark/40 font-normal">Conversemos</span>
                </h2>
              </div>

              <div className="flex flex-col gap-4 p-6 rounded-xl border border-sage/20 bg-sage/[0.05]" id="contact-card">
                <h3 className="font-display font-bold text-xl text-text-dark leading-snug" id="contact-headline">
                  ¿Tienes un proyecto donde la tecnología necesite entender a las personas?
                </h3>
                <p className="font-sans text-sm sm:text-base text-text-dark/85 leading-relaxed" id="contact-body">
                  Trabajo con organizaciones, universidades y equipos que buscan unir investigación, bienestar y herramientas digitales. Conversemos.
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-2" id="contact-actions">
                  <a
                    href="mailto:javier@labtecnosocial.org"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-display font-bold text-xs tracking-wider uppercase bg-terracotta text-[#F8F5F0] hover:bg-terracotta/90 transition-colors"
                    id="contact-email-button"
                  >
                    <Mail size={14} />
                    Escríbeme
                  </a>
                  <a
                    href="https://www.linkedin.com/in/javierolmosaguilar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-display font-bold text-xs tracking-wider uppercase border border-sage/40 text-sage hover:bg-sage/10 transition-colors"
                    id="contact-linkedin-button"
                  >
                    <Linkedin size={14} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </section>

          </main>

        </div>
      </div>
    </div>
  );
}
