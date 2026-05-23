# Portfolio

Minimal personal portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS. Content lives in `/data` — update those files to change the site without touching UI components.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (static export)

This project uses `output: "export"` for fully static HTML, compatible with Cloudflare Pages (no Node.js runtime required).

```bash
npm run build
```

Static files are written to `out/`.

## Deploy to Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the repository and configure the build:

| Setting | Value |
|--------|--------|
| Framework preset | None (or Next.js Static if available) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node.js version | 20+ |

4. Save and deploy. Each push to the default branch triggers a new deployment.

No environment variables or server functions are required.

## Customize content

| Section | File |
|--------|------|
| Hero / intro | `data/intro.ts` |
| About Me | `data/about.ts` |
| Projects | `data/projects.ts` |
| Achievements | `data/achievements.ts` |
| Contact | `data/contact.ts` |
| Navigation | `data/nav.ts` |

## Project structure

```
app/           # Next.js App Router (layout, page, styles)
components/    # Navbar, Hero, About, Projects, Achievements, Contact, GlassCard
data/          # All site content (edit here)
lib/           # Small helpers (e.g. achievement grouping)
```
