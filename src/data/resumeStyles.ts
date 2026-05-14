export const resumeStyles = [
  {
    id: "classic",
    name: "Классический",
    description: "Строгий двухколоночный шаблон с темной шапкой и акцентом на опыт.",
    href: "/resume/classic/",
    accent: "emerald",
  },
  {
    id: "compact",
    name: "Компактный",
    description: "Плотная версия для быстрого просмотра: меньше воздуха, больше информации на первом экране.",
    href: "/resume/compact/",
    accent: "sky",
  },
  {
    id: "editorial",
    name: "Редакционный",
    description: "Более выразительная подача с крупной типографикой и акцентом на карьерный путь.",
    href: "/resume/editorial/",
    accent: "rose",
  },
  {
    id: "default",
    name: "Default Tailwind",
    description: "Простой ATS-friendly лист в духе adiian/resume-templates: секции, линии и обычные списки.",
    href: "/resume/default/",
    accent: "blue",
  },
  {
    id: "engen",
    name: "Eleventy Gutter",
    description: "Одноколоночное резюме с левым gutter для секций, вдохновлено HTML-резюме Michael Engen.",
    href: "/resume/engen/",
    accent: "indigo",
  },
] as const;

export type ResumeStyleId = (typeof resumeStyles)[number]["id"];
