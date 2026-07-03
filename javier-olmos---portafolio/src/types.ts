/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills: string[];
}

export type PillarKey = "psico-tech" | "impact-research" | "learning-communities";

export interface Project {
  id: string;
  title: string;
  pillar?: PillarKey;
  meta?: string;
  description: string;
  skills: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
}

export interface Section {
  id: string;
  label: string;
  number: string;
}

export interface Writing {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  category?: string;
  link?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  source: string;
  year: string;
  doi?: string;
  link?: string;
}
