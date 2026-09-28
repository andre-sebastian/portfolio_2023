# Portfolio — Andre Sebastian Reinoso Aranda

Sitio personal (CV + portfolio) construido con Next.js 16 (App Router) y React 19.

**Stack:** Next.js 16 · React 19 · TypeScript (strict) · Tailwind CSS v4 · daisyUI 5 · hCaptcha

## Requisitos

- Node.js ≥ 20.9 (probado con 24)
- npm

## Puesta en marcha

```bash
npm install

# variables de entorno (ver tabla)
cp .env.example .env

npm run dev        # http://localhost:3000
```

### Variables de entorno (`.env`)

| Variable | Descripción |
| --- | --- |
| `NEXT_PUBLIC_HCAPTCHA` | Sitekey pública de hCaptcha (formulario de contacto) |
| `NEXT_PUBLIC_SITE_URL` | URL base del sitio; afecta a canonical, sitemap y JSON-LD. Por defecto `http://localhost:3000` — **cambiar en producción** |

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo (Turbopack) |
| `npm run build` | Build de producción (incluye typecheck y prerender) |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | ESLint (`eslint .`) |

Verificación completa de cambios: `npx tsc --noEmit` → `npm run lint` → `npm run build`.

## Estructura

```
src/
├── app/          # Rutas App Router: /, /about, /resume, /contact + sitemap/robots
├── components/   # UI: PageShell, Panel, Drawer, Button, SocialLinks, Footer, IconCloud…
├── data/         # Contenido del CV: experiencia, educación, skills, datos personales
├── util/         # site.ts (identidad/SEO), socialLinks.ts, cx.ts
└── styles/       # globals.css (tema daisyUI "forest", Tailwind v4 CSS-first)
public/assets/pdf/cv.pdf   # CV descargable
```

- Cada página se envuelve en `PageShell` (menú lateral + panel con footer); el home no muestra footer.
- `/portfolio` redirige a `/` (ruta histórica).

## Notas

- No hay tests ni CI; la verificación es `tsc` + `eslint` + `build` y revisión manual en navegador.
- La auditoría de accesibilidad se hace con la skill `accessibility` (axe-core + puppeteer).
- Idioma del sitio y de los commits: español.
