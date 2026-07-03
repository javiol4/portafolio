/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Github, Linkedin, Mail, GraduationCap, BookUser, Instagram } from "lucide-react";

export default function SocialLinks() {
  const socials = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/javierolmosaguilar/",
      icon: <Linkedin size={20} />,
      label: "Perfil de LinkedIn",
    },
    {
      name: "GitHub",
      url: "https://github.com/javiol4",
      icon: <Github size={20} />,
      label: "Perfil de GitHub",
    },
    {
      name: "ORCID",
      url: "https://orcid.org/0000-0002-5516-338X",
      icon: <BookUser size={20} />,
      label: "Perfil ORCID",
    },
    {
      name: "Scholar",
      url: "https://scholar.google.com/citations?user=w0WtTHEAAAAJ&hl=es",
      icon: <GraduationCap size={20} />,
      label: "Google Académico",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/reivaj_94/",
      icon: <Instagram size={20} />,
      label: "Perfil de Instagram",
    },
    {
      name: "Email",
      url: "mailto:javier@labtecnosocial.org",
      icon: <Mail size={20} />,
      label: "Enviar correo",
    },
  ];

  return (
    <div className="flex items-center gap-5 mt-8 md:mt-0" id="social-links-container">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="text-text-dark/60 hover:text-terracotta hover:-translate-y-0.5 transition-all duration-300 ease-out"
          id={`social-link-${social.name.toLowerCase()}`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
