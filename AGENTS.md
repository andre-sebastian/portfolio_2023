# AGENTS.md

Portfolio personal con Next.js 16 (App Router), React 19, Tailwind v4 y daisyUI 5. Idioma del repo: español (contenido, mensajes de commit en español, commits planos sin conventional commits).

## Verificación (orden obligatorio)

```bash
npx tsc --noEmit   # tipos
npm run lint       # eslint . (no usar `next lint`, ya no existe)
npm run build      # OBLIGATORIO: aquí estallan los fallos de prerender (ver abajo)
```

- **No hay tests ni CI.** No inventar runners (no hay jest/vitest/playwright).
- Cambios visuales: verificar en navegador con `npm run dev`; para auditoría de contraste/teclado cargar la skill `accessibility` (puppeteer-core + axe-core sobre `next start`).

## Hechos no obvios

- **`cacheComponents: true`** en `next.config.js`: `new Date()` o `Math.random()` durante el prerender rompen `npm run build`. Solución: server component con `'use cache'` (ej. `src/components/Footer/index.tsx`) o límite `'use client'`. `tsc` y `eslint` NO detectan esto — solo el build.
- Alias `@/*` → `./src/*`.
- **Tailwind v4 es CSS-first**: no existe `tailwind.config.js`. El tema (daisyUI "forest", colores, radii) vive en `src/styles/globals.css` vía `@plugin "daisyui/theme"` + bloques `@theme`. Tokens propios: `text-linkedin`, `text-twitter`.
- **daisyUI `.btn` fija `color` y gana a las utilidades Tailwind**: `text-white` sobre un botón NO funciona. Usar `src/components/Button` (polimórfico: `href` interno → `Link`, externo/`download` → `<a>`, sin `href` → `<button>`; variantes `primary|secondary|neutral|outline|link`).
- Iconos: librería `@react-icons/all-files` con import por archivo (`@react-icons/all-files/fa/FaGithub`), **no** `react-icons`. La nube de skills (`src/components/IconCloud/`) usa slugs de simple-icons en `allIconsCloud.tsx`: marcas sin icono en ese set (p. ej. Zustand, SQL Server) quedan fuera del cloud.

## Estructura

- `src/app/` — rutas (el viejo `src/pages/` fue eliminado en la migración; si aún aparece en `git status`, es un borrado pendiente de commit). `/portfolio` redirige a `/`.
- Cada página se envuelve en `PageShell` (Drawer + grid de 12 cols + Panel con Footer). El home usa `showFooter={false}`; el footer solo se ve en about/resume/contact/404.
- `src/util/site.ts` — única fuente de identidad del sitio (SITE_URL, FULL_NAME, PROFILE_IMAGE, JSON-LD, `absoluteUrl()`). `src/data/*` — contenido del CV (userInfo, experiencia/educación, skills). CV en PDF: `public/assets/pdf/cv.pdf` (el botón CV apunta ahí).
- Componentes base: `Button`, `SocialLinks` (variant `buttons|icons`), `Panel` (único wrapper con `card`), `PageShell`, `Drawer/NavLink`. No duplicar estilos de card/botón fuera de estos.

## Entorno

- `.env` (local, está en `.gitignore`): `NEXT_PUBLIC_HCAPTCHA` (sitekey pública, ContactForm) y `NEXT_PUBLIC_SITE_URL` (afecta canonical/sitemap/JSON-LD; hoy por defecto `http://localhost:3000` — hay que cambiarlo en producción).
- Skills de agente instaladas en `.agents/skills/` (next-best-practices, next-cache-components, accessibility, seo, frontend-design…): cargarlas con el skill tool cuando apliquen.

## Estilo de código

Tabs, comillas simples, punto y coma. No hay Prettier ni formatter configurado: copiar el estilo del archivo vecino.
