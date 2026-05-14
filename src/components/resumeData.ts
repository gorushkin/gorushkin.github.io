import { frontmatter as info } from "../data/info.md";

export { info };

export const skillGroups = [
  ["Основной стек", info.skills.main],
  ["Дополнительно", info.skills.additional],
  ["Архитектура", info.skills.architecture],
  ["Тестирование", info.skills.testing],
  ["Backend", info.skills.backend],
  ["UI", info.skills.ui],
  ["Стили", info.skills.styles],
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
