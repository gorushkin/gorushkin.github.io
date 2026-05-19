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
    name: "Базовый",
    description: "Простой лист для автоматического разбора: секции, линии и обычные списки.",
    href: "/resume/default/",
    accent: "blue",
  },
  {
    id: "engen",
    name: "Левая колонка",
    description: "Одноколоночное резюме с левой колонкой для названий секций.",
    href: "/resume/engen/",
    accent: "indigo",
  },
  {
    id: "minimal-mono",
    name: "Minimal Mono",
    description: "Компактный shadcn-подобный лист: узкая колонка, моноширинный текст, бейджи и аккуратная печать.",
    href: "/resume/minimal-mono/",
    accent: "zinc",
  },
  {
    id: "minimal-sheet",
    name: "Минималистичный лист",
    description: "Чистый одноколоночный лист: монограмма, спокойный фон и плотная типографика.",
    href: "/resume/minimal-sheet/",
    accent: "indigo",
  },
] as const;

export type ResumeStyleId = (typeof resumeStyles)[number]["id"];
