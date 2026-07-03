/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "../types";
import { PILLARS } from "../data";

interface ProjectCardProps {
  key?: string;
  project: Project;
  isHovered: boolean;
  onHoverChange: (id: string | null) => void;
}

export default function ProjectCard({
  project,
  isHovered,
  onHoverChange,
}: ProjectCardProps) {
  return (
    <div
      id={`project-card-${project.id}`}
      className={`group relative grid grid-cols-1 sm:grid-cols-4 gap-4 p-5 rounded-xl border border-transparent transition-all duration-300 ease-out cursor-pointer ${
        isHovered
          ? "bg-sage/[0.05] border-sage/20 shadow-[0_4px_20px_-4px_rgba(91,107,88,0.1)]"
          : "hover:bg-sage/[0.04] hover:border-sage/10 hover:shadow-[0_4px_16px_-4px_rgba(91,107,88,0.06)]"
      }`}
      onMouseEnter={() => onHoverChange(project.id)}
      onMouseLeave={() => onHoverChange(null)}
    >
      {/* Image Thumbnail Column */}
      <div className="sm:col-span-1" id={`project-img-wrapper-${project.id}`}>
        {project.imageUrl ? (
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-text-dark/10 bg-text-dark/5 shadow-sm" id={`project-img-container-${project.id}`}>
            <img
              src={project.imageUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                isHovered ? "scale-105 filter brightness-105" : "group-hover:scale-105 group-hover:brightness-105"
              }`}
              id={`project-img-${project.id}`}
            />
            {/* Soft decorative overlay */}
            <div className="absolute inset-0 bg-sage/10 mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity duration-300" />
          </div>
        ) : (
          <div className="w-full aspect-[4/3] rounded-lg bg-sage/10 flex items-center justify-center border border-sage/20" id={`project-fallback-img-${project.id}`}>
            <span className="text-xs font-mono text-sage/70 font-semibold">MOCKUP</span>
          </div>
        )}
      </div>

      {/* Content Column */}
      <div className="sm:col-span-3 flex flex-col gap-2" id={`project-content-${project.id}`}>
        {/* Pillar Badge & Metrics */}
        <div className="flex flex-wrap items-center gap-2" id={`project-pillar-row-${project.id}`}>
          {project.pillar && (
            <span
              className={`px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider uppercase rounded-full border ${PILLARS[project.pillar].className}`}
              id={`project-pillar-badge-${project.id}`}
            >
              {PILLARS[project.pillar].label}
            </span>
          )}
          {project.meta && (
            <span className="font-mono text-[11px] text-text-dark/50" id={`project-meta-${project.id}`}>
              {project.meta}
            </span>
          )}
        </div>
        <h3 className="font-display font-semibold text-base text-text-dark leading-snug flex items-center justify-between" id={`project-title-row-${project.id}`}>
          {project.projectUrl && project.projectUrl !== "#" && project.projectUrl !== "" ? (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 group/link"
              id={`project-link-${project.id}`}
            >
              {/* This span stretches to cover the entire relative card container */}
              <span className="absolute inset-0 rounded-xl z-0" />
              <span 
                className={`transition-transform duration-300 inline-flex items-center gap-1 z-10 ${
                  isHovered ? "text-terracotta translate-x-1" : "group-hover/link:text-terracotta group-hover/link:translate-x-1"
                }`}
                id={`project-title-${project.id}`}
              >
                {project.title}
                <ArrowUpRight 
                  size={16} 
                  className={`inline-block transition-transform duration-300 ${
                    isHovered ? "translate-x-1 -translate-y-1" : "group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                  }`}
                />
              </span>
            </a>
          ) : (
            <span 
              className={`transition-transform duration-300 inline-flex items-center gap-1 ${
                isHovered ? "text-terracotta translate-x-1" : "group-hover:text-terracotta group-hover:translate-x-1"
              }`}
              id={`project-title-${project.id}`}
            >
              {project.title}
            </span>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 text-text-dark/50 hover:text-terracotta p-1 rounded-full hover:bg-sage/10 transition-colors"
              onClick={(e) => e.stopPropagation()}
              title="View Source on GitHub"
              id={`project-gh-link-${project.id}`}
            >
              <Github size={16} />
            </a>
          )}
        </h3>

        {/* Project Description */}
        <p className="font-sans text-sm text-text-dark/80 leading-relaxed" id={`project-desc-${project.id}`}>
          {project.description}
        </p>

        {/* Technologies Pills */}
        {project.skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2" id={`project-skills-${project.id}`}>
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 text-xs font-sans font-medium text-text-dark rounded-md bg-ochre/15 border border-ochre/25 transition-colors duration-200 hover:bg-ochre/25"
              id={`project-skill-pill-${project.id}-${skill.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {skill}
            </span>
          ))}
        </div>
        )}
      </div>
    </div>
  );
}
