# portfolio-v2

Personal portfolio for **Ayush Kadam** — AI engineer at Capgemini, working on
agentic AI systems, real-time streaming pipelines and cloud infrastructure.

Built with Vite + vanilla JS, GSAP and Loconative Scroll. No framework.

## Stack

- **Build:** Vite 5, Sass
- **Animation:** GSAP 3, Loconative Scroll (horizontal + smooth scroll)
- **Build tooling:** Cheerio (generates the project sections from JSON at build time)
- **Deploy:** static output in `dist/`

## Project data

Projects are **not** hand-written into `src/index.html`. They live in
[`src/public/project-data.json`](src/public/project-data.json) and
`scripts/predev.js` regenerates the markup on every `dev` and `build`.

**Edit `project-data.json`, never the generated project HTML in
`src/index.html`** — your changes will be overwritten.

Project fields:

| Field         | Purpose                                                     |
| ------------- | ----------------------------------------------------------- |
| `id`          | Stable identifier, order in the list determines display order |
| `title`       | Large display headline, keep it under ~35 characters          |
| `role`        | Small label above the title, `<br />` allowed for line breaks |
| `description` | One or two sentences, used for accessibility/SEO context       |
| `link`        | Destination URL (repo, live site, case study)                |
| `cta`         | Button label, defaults to `Visit Site` when omitted           |

## Getting started

```bash
npm install
npm run dev
```

Or with yarn:

```bash
yarn
yarn dev
```

The dev server runs on <http://localhost:3000>.

## Scripts

| Script            | What it does                                             |
| ----------------- | -------------------------------------------------------- |
| `npm run dev`     | Regenerates project HTML, then starts Vite on port 3000    |
| `npm run build`   | Regenerates project HTML, then builds static output to `dist/` |
| `npm run preview` | Serves the built `dist/` locally                          |

`predev` and `prebuild` both run `scripts/predev.js`, which rewrites
`src/index.html` in place. Run it from the repository root — it uses
relative paths.

## Deploying

Output directory is `dist/`, build command is `npm run build`.

Note: `loconative-scroll` is installed from a git URL rather than the npm
registry. If that repository is ever deleted or made private, installs will
break — consider vendoring it into this repo or publishing it to npm.

## Credits

Design and build of the original template by
[Isaac Fayemi](https://fayemi.design/) and
[Oluwadareseyi](https://github.com/oluwadareseyi) — from
[`folio-v2`](https://github.com/oluwadareseyi/folio-v2). Content, projects
and styling are my own.
