/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Experience } from "../types";

interface ExperienceCardProps {
  key?: string;
  experience: Experience;
  isHovered: boolean;
  onHoverChange: (id: string | null) => void;
}

export default function ExperienceCard({
  experience,
  isHovered,
  onHoverChange,
}: ExperienceCardProps) {
  return (
    <div
      id={`experience-card-${experience.id}`}
      className={`group relative grid grid-cols-1 sm:grid-cols-4 gap-4 p-5 rounded-xl border border-transparent transition-all duration-300 ease-out cursor-pointer ${
        isHovered
          ? "bg-sage/[0.05] border-sage/20 shadow-[0_4px_20px_-4px_rgba(91,107,88,0.1)]"
          : "hover:bg-sage/[0.04] hover:border-sage/10 hover:shadow-[0_4px_16px_-4px_rgba(91,107,88,0.06)]"
      }`}
      onMouseEnter={() => onHoverChange(experience.id)}
      onMouseLeave={() => onHoverChange(null)}
    >
      {/* Dates Column */}
      <div className="sm:col-span-1 font-sans text-xs font-semibold tracking-wider text-text-dark/50 pt-1" id={`exp-date-${experience.id}`}>
        {experience.startDate} — {experience.endDate}
      </div>

      {/* Main Content Column */}
      <div className="sm:col-span-3 flex flex-col gap-3" id={`exp-content-${experience.id}`}>
        <h3 className="font-display font-semibold text-base text-text-dark leading-snug flex items-baseline flex-wrap gap-x-1.5" id={`exp-title-row-${experience.id}`}>
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-baseline flex-wrap gap-x-1.5 group/link"
              id={`exp-link-${experience.id}`}
            >
              {/* This span stretches to cover the entire relative card container */}
              <span className="absolute inset-0 rounded-xl z-0" />
              <span 
                className={`transition-transform duration-300 inline-flex items-center gap-1 z-10 ${
                  isHovered ? "text-terracotta translate-x-1" : "group-hover/link:text-terracotta group-hover/link:translate-x-1"
                }`}
                id={`exp-role-${experience.id}`}
              >
                {experience.role}
                <ArrowUpRight 
                  size={16} 
                  className={`inline-block transition-transform duration-300 ${
                    isHovered ? "translate-x-1 -translate-y-1" : "group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                  }`}
                />
              </span>
              <span className="text-terracotta z-10" id={`exp-company-${experience.id}`}>
                @ {experience.company}
              </span>
            </a>
          ) : (
            <>
              <span 
                className={`transition-transform duration-300 inline-flex items-center gap-1 ${
                  isHovered ? "text-terracotta translate-x-1" : "group-hover:text-terracotta group-hover:translate-x-1"
                }`}
                id={`exp-role-${experience.id}`}
              >
                {experience.role}
              </span>
              <span className="text-terracotta" id={`exp-company-${experience.id}`}>
                @ {experience.company}
              </span>
            </>
          )}
        </h3>

        {/* Bullet description */}
        <ul className="flex flex-col gap-2 font-sans text-sm text-text-dark/85 leading-relaxed list-none pl-0" id={`exp-desc-list-${experience.id}`}>
          {experience.description.map((bullet, idx) => (
            <li key={idx} className="relative pl-4" id={`exp-bullet-${experience.id}-${idx}`}>
              <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full bg-sage/50" />
              {bullet}
            </li>
          ))}
        </ul>

        {/* Technologies Pills */}
        {experience.skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2" id={`exp-skills-${experience.id}`}>
          {experience.skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 text-xs font-sans font-medium text-text-dark rounded-md bg-ochre/15 border border-ochre/25 transition-colors duration-200 hover:bg-ochre/25"
              id={`exp-skill-pill-${experience.id}-${skill.toLowerCase().replace(/\s+/g, "-")}`}
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
