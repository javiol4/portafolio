/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Section } from "../types";

interface NavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionClick: (id: string) => void;
}

export default function Navigation({
  sections,
  activeSection,
  onSectionClick,
}: NavigationProps) {
  return (
    <nav className="hidden md:block my-12" aria-label="Table of contents" id="side-navigation">
      <ul className="flex flex-col gap-5 font-display text-sm tracking-widest font-semibold" id="nav-list">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <li key={section.id} id={`nav-item-${section.id}`}>
              <button
                onClick={() => onSectionClick(section.id)}
                className="group flex items-center gap-4 text-left transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-terracotta/40 rounded py-1"
                aria-current={isActive ? "page" : undefined}
              >
                {/* Horizontal / Vertical bar transition similar to brittanychiang.com but adapted */}
                <span
                  className={`h-[1px] bg-terracotta transition-all duration-300 ease-out ${
                    isActive ? "w-12 bg-terracotta" : "w-6 bg-text-dark/30 group-hover:w-12 group-hover:bg-text-dark/60"
                  }`}
                  id={`nav-indicator-${section.id}`}
                />
                
                <span
                  className={`transition-all duration-300 ${
                    isActive
                      ? "text-terracotta translate-x-1"
                      : "text-text-dark/50 group-hover:text-text-dark group-hover:translate-x-1"
                  }`}
                  id={`nav-label-${section.id}`}
                >
                  <span className="font-mono text-xs mr-2 font-normal opacity-70">
                    {section.number}
                  </span>
                  {section.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
