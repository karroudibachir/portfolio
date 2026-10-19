export interface ProjectArchitecture {
  pattern: string;
  layers: { name: string; tech: string; description: string }[];
  dataFlow: string[];
  securityAndResilience: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Microservices & Kafka' | 'Full Stack (Spring / Angular)' | 'DevOps & CI/CD' | 'Optimisation & Data';
  description: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  metrics: string;
  liveUrl?: string;
  githubUrl?: string;
  imageGradient: string;
  featured: boolean;
  architecture?: ProjectArchitecture;
}

export interface SkillCategory {
  name: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: number;
  badge?: string;
  icon?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  badgeColor: string;
  verifyUrl?: string;
  skills?: string[];
  category?: 'IA & LLM' | 'Java & Full Stack' | 'DevOps & Cloud' | 'Data & SQL' | 'Agilité & Leadership';
  expires?: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  flag?: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  titles: string[];
  bio: string;
  extendedBio: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  twitter: string;
  stats: { label: string; value: string; suffix: string }[];
}
