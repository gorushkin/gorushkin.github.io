STYLE ?= engen

.PHONY: install dev build preview resume resume-classic resume-compact resume-editorial resume-default resume-engen clean

install:
	pnpm install

dev:
	pnpm dev

build:
	pnpm build

preview:
	pnpm preview

resume:
	pnpm build:resume -- $(STYLE)

resume-classic:
	pnpm build:resume -- classic

resume-compact:
	pnpm build:resume -- compact

resume-editorial:
	pnpm build:resume -- editorial

resume-default:
	pnpm build:resume -- default

resume-engen:
	pnpm build:resume -- engen

clean:
	rm -rf dist
