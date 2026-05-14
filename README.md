# CV

Astro + Tailwind проект для резюме с несколькими вариантами оформления.

## Данные

Основной контент резюме хранится в:

```txt
src/data/info.md
```

Шаблоны редактируются в:

```txt
src/components/ResumeDocument.astro
```

Список доступных стилей:

```txt
src/data/resumeStyles.ts
```

## Команды

Через Makefile:

```sh
make install
make dev
make build
make preview
make resume STYLE=engen
make resume-classic
make resume-compact
make resume-editorial
make resume-default
make resume-engen
make clean
```

Напрямую через pnpm:

```sh
pnpm dev
```

Запускает локальный сервер.

```sh
pnpm build
```

Собирает главную страницу и все варианты резюме в `dist/`.

```sh
pnpm build:resume -- engen
```

Собирает один выбранный шаблон как корневой `dist/index.html` плюс ассеты. Доступные id:

```txt
classic
compact
editorial
default
engen
```

## Маршруты

```txt
/                  список шаблонов
/resume/classic/   конкретный шаблон
/resume/engen/     конкретный шаблон
```

Кнопка `Скачать PDF` вызывает печать страницы. При печати кнопка скрывается через `print:hidden`.

## Деплой

При push в `master` GitHub Actions собирает один шаблон командой:

```sh
pnpm build:resume -- engen
```

Результат из `dist/` публикуется в ветку `deply`. Шаблон по умолчанию задается в `.github/workflows/deploy-resume.yml` через `RESUME_STYLE`, ветка публикации — через `DEPLOY_BRANCH`.

Workflow также можно запустить вручную из GitHub Actions и выбрать другой шаблон.
