export interface PersonalInfo {
  name: string
  title: string
  location: string
  email: string
  phone: string
  summary: string
}

export interface EducationEntry {
  institution: string
  degree: string
  dateRange: string
  coursework: string[]
  thesis?: {
    title: string
    description: string
  }
}

export type SkillCategoryName = 'Quantitative' | 'Programming' | 'Tools' | 'Languages'

export interface SkillCategory {
  category: SkillCategoryName
  items: string[]
}

export type ProjectType = 'Thesis' | 'Personal Project' | 'Research'

export interface Project {
  title: string
  type: ProjectType
  year: string
  description: string
  bullets: string[]
  stack?: string[]
  stat?: {
    value: number
    label: string
  }
  link?: string
}

export interface ExperienceEntry {
  company: string
  role: string
  dateRange: string
  bullets: string[]
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
}
