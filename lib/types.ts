export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  skills?: string[];
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  metrics?: string[];
  tags: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Award {
  title: string;
  organization: string;
  year: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
