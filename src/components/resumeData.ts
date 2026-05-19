import { frontmatter as rawInfo } from "../data/info.md";

export interface ResumeInfo {
  name: string;
  titleName: string;
  title: string;
  description: string;
  location: string;
  workFormat: string;
  contacts: {
    telegram: string;
    emailLabel: string;
    emailUser: string;
    emailDomain: string;
    github: string;
  };
  about: string[];
  skills: {
    core: string[];
    architecture: string[];
    backend: string[];
    ui: string[];
    testing: string[];
    tooling: string[];
    integrations: string[];
  };
  education: Array<{
    institution: string;
    degree: string;
    period: string;
  }>;
  courses: Array<{
    title: string;
    provider: string;
    period: string;
  }>;
  experience: Array<{
    company: string;
    position: string;
    period: string;
    summary: string;
    details: string[];
  }>;
}

export type SkillGroup = readonly [title: string, skills: readonly string[]];

export const info = rawInfo as ResumeInfo;

export const skillGroups: SkillGroup[] = [
  ["Основной стек", info.skills.core],
  ["Архитектура", info.skills.architecture],
  ["Backend", info.skills.backend],
  ["Frontend", info.skills.ui],
  ["Тестирование", info.skills.testing],
  ["Инструменты", info.skills.tooling],
  ["Интеграции", info.skills.integrations],
];

export const primarySkills = [
  "TypeScript",
  "React",
  "Next.js",
  "MobX",
  "Redux Toolkit",
  "Frontend Architecture",
  "State Management",
  "Feature-Sliced Design",
  "Real-time UI",
  "Node.js",
  "BFF",
  "Jest",
  "Vitest",
  "React Testing Library",
];

export const documentTitle = `${info.titleName} — ${info.title}`;

export const compactSkillGroups: SkillGroup[] = [
  ["Frontend", [...info.skills.core, ...info.skills.ui]],
  ["Архитектура", info.skills.architecture],
  ["Backend", info.skills.backend],
  ["Тестирование и инструменты", [...info.skills.testing, ...info.skills.tooling]],
  ["Интеграции", info.skills.integrations],
];

export const sectionTitles = {
  about: "Обо мне",
  skills: "Навыки",
  technologies: "Технологии",
  keyTechnologies: "Ключевые технологии",
  education: "Образование",
  experience: "Опыт работы",
  shortExperience: "Опыт",
  focus: "Фокус",
} as const;

export const resumeSections = {
  about: {
    title: sectionTitles.about,
    paragraphs: info.about,
  },
  skills: {
    title: sectionTitles.skills,
    groups: skillGroups,
  },
  technologies: {
    title: sectionTitles.technologies,
    groups: skillGroups,
  },
  keyTechnologies: {
    title: sectionTitles.keyTechnologies,
    skills: primarySkills,
  },
  compactSkills: {
    title: sectionTitles.skills,
    groups: compactSkillGroups,
  },
  education: {
    title: sectionTitles.education,
    items: info.education,
    courses: info.courses,
  },
  experience: {
    title: sectionTitles.experience,
    jobs: info.experience,
  },
  shortExperience: {
    title: sectionTitles.shortExperience,
    jobs: info.experience,
  },
} as const;

export const getSplitAboutSections = (introCount: number) => ({
  about: {
    title: sectionTitles.about,
    paragraphs: info.about.slice(0, introCount),
  },
  focus: {
    title: sectionTitles.focus,
    paragraphs: info.about.slice(introCount),
  },
});
