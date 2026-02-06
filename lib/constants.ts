import { Experience, Project, SkillCategory, Award } from "./types";

export const EXPERIENCES: Experience[] = [
  {
    company: "Lowell High School",
    role: "Marketing Coordinator",
    period: "May 2024 - Present",
    location: "Vancouver, BC",
    achievements: [
      "Produced targeted campaigns increasing student inquiries by 40%",
      "Designed bilingual materials, boosting Chinese engagement by 25%",
      "Strategized digital marketing, achieving 25% enrollment improvement",
      "Analyzed CRM data to refine messaging and enhance lead conversion",
    ],
    skills: [
      "Campaign Strategy",
      "Bilingual Marketing",
      "CRM Analytics",
      "Lead Generation",
    ],
  },
  {
    company: "NomBot",
    role: "Co-Founder & Marketing Lead",
    period: "Sep 2023 - Present",
    location: "Remote",
    achievements: [
      "Co-founded AI-driven recipe recommendation startup",
      "Achieved 100% beta user participation through strategic outreach",
      "Built brand identity from concept to launch",
      "Developed go-to-market strategy for tech startup",
    ],
    skills: [
      "Startup Branding",
      "Product Launch",
      "User Acquisition",
      "AI/Tech Marketing",
    ],
  },
  {
    company: "Fairleigh Dickinson University",
    role: "Orientation Leader",
    period: "Aug 2023 - May 2024",
    location: "Madison, NJ",
    achievements: [
      "Led campus tours and orientation sessions for prospective students",
      "Represented university brand and culture to diverse audiences",
      "Facilitated peer mentorship and campus engagement programs",
      "Enhanced student experience through welcoming communication",
    ],
    skills: ["Public Speaking", "Peer Mentoring", "Event Coordination"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "International Student Recruitment Campaign",
    description:
      "Designed and executed bilingual marketing materials targeting Chinese-speaking families, resulting in significant engagement improvements and increased enrollment from international markets.",
    metrics: [
      "40% increase in inquiries",
      "25% boost in Chinese engagement",
      "25% enrollment improvement",
    ],
    tags: [
      "Bilingual Marketing",
      "Cultural Adaptation",
      "Print & Digital Design",
    ],
  },
  {
    title: "NomBot Beta Launch",
    description:
      "Orchestrated complete product launch strategy for AI recipe recommendation platform, from brand identity development to user acquisition campaigns achieving full beta participation.",
    metrics: [
      "100% beta participation",
      "Built from 0 to launch",
      "Multi-channel outreach",
    ],
    tags: [
      "Product Launch",
      "Brand Identity",
      "Startup Marketing",
      "User Acquisition",
    ],
  },
  {
    title: "Digital Enrollment Marketing Initiative",
    description:
      "Developed comprehensive digital marketing strategy integrating CRM analytics, targeted messaging, and multi-channel campaigns to drive measurable enrollment growth.",
    metrics: [
      "25% enrollment increase",
      "Data-driven targeting",
      "Improved conversion rates",
    ],
    tags: [
      "Digital Strategy",
      "CRM Analytics",
      "Lead Generation",
      "Performance Marketing",
    ],
  },
  {
    title: "Campus Brand Representation Program",
    description:
      "Led campus tours and orientation programming that strengthened university brand presence and created welcoming experiences for prospective students and families.",
    metrics: [
      "100+ campus tours led",
      "Enhanced brand perception",
      "Positive student feedback",
    ],
    tags: ["Brand Ambassador", "Public Speaking", "Event Marketing"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Brand & Strategy",
    skills: [
      "Brand Development",
      "Campaign Strategy",
      "Market Research",
      "Content Strategy",
      "Storytelling",
    ],
  },
  {
    category: "Design Tools",
    skills: [
      "Canva Pro",
      "Adobe Creative Suite",
      "Figma",
      "Visual Design",
      "Layout Design",
    ],
  },
  {
    category: "Marketing & CRM",
    skills: [
      "HubSpot",
      "Salesforce",
      "CRM Analytics",
      "Email Marketing",
      "Lead Generation",
      "SEO",
    ],
  },
  {
    category: "Digital & Web",
    skills: [
      "Social Media Marketing",
      "Digital Campaigns",
      "Google Analytics",
      "WordPress",
      "HTML/CSS",
    ],
  },
  {
    category: "Languages",
    skills: ["English (Native)", "Mandarin Chinese (Fluent)"],
  },
];

export const AWARDS: Award[] = [
  {
    title: "Pinnacle Award",
    organization: "Lowell High School",
    year: "2024",
    description:
      "Recognized for outstanding contributions to marketing excellence and measurable impact on student enrollment",
  },
  {
    title: "Beta Gamma Sigma Honors",
    organization: "International Business Honors Society",
    year: "2024",
    description:
      "Top 10% of business students worldwide, recognizing academic excellence and leadership",
  },
  {
    title: "Global Scholars Program",
    organization: "Fairleigh Dickinson University",
    year: "2023",
    description:
      "Selected for prestigious international education program fostering global citizenship",
  },
  {
    title: "Model UN Delegate",
    organization: "United Nations Headquarters",
    year: "2022",
    description:
      "Represented university at Model UN conference, demonstrating diplomacy and public speaking skills",
  },
];

export const HERO_CONTENT = {
  name: "Helen Ham",
  tagline: "Marketing Strategist & Digital Brand Builder",
  description:
    "Driving measurable growth through data-driven campaigns, bilingual storytelling, and strategic brand development.",
  cta: {
    primary: "View My Work",
    secondary: "Get in Touch",
  },
};

export const ABOUT_CONTENT = {
  bio: "I'm a Marketing Coordinator at Lowell High School with a passion for creating campaigns that deliver real results. With expertise in bilingual marketing, CRM analytics, and digital strategy, I've helped organizations achieve significant growth—from a 40% rise in student inquiries to launching a tech startup from concept to 100% beta participation. I thrive at the intersection of creativity and data, building brands that resonate across cultures and drive measurable impact.",
  stats: [
    { value: "40%", label: "Rise in Student Inquiries" },
    { value: "25%", label: "Enrollment Improvement" },
    { value: "100%", label: "Beta Participation" },
  ],
};

export const CONTACT_INFO = {
  email: "helen.ham@example.com",
  linkedin: "https://www.linkedin.com/in/helenham",
  location: "Vancouver, BC",
};
