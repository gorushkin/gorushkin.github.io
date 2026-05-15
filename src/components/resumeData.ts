import { frontmatter as info } from "../data/info.md";

export { info };

export const skillGroups = [
  ["Основной стек", info.skills.main],
  ["Дополнительно", info.skills.additional],
  ["Архитектура", info.skills.architecture],
  ["Тестирование", info.skills.testing],
  ["Backend", info.skills.backend],
  ["Frontend", info.skills.ui],
  ["Стилизация", info.skills.styles],
  ["Интеграции", info.skills.integrations],
  ["Инфраструктура", info.skills.infrastructure],
  ["Инструменты", info.skills.tools],
];

export const primarySkills = [
  ...info.skills.main,
  ...info.skills.additional,
  ...info.skills.architecture,
  ...info.skills.testing,
];

export const sectionTitles = {
  about: "Обо мне",
  skills: "Навыки",
  technologies: "Технологии",
  keyTechnologies: "Ключевые технологии",
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
