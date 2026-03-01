# Amatera Website

## Priority Framework

**Every change must be evaluated against these priorities, in order:**

### Priority 1: SEO
Before making ANY change, ask: **"Does this improve SEO, worsen it, or have no effect?"**
- If it improves SEO → proceed
- If it worsens SEO → do NOT make the change without explicit user approval and a compelling reason
- If neutral → proceed only if it serves Priority 2 or is otherwise necessary

SEO checklist for every page change:
- [ ] Canonical URL is correct (use `speedoku.amatera.dev` for Speedoku pages, `amatera.dev` for root pages)
- [ ] Meta description is present, unique, and under 160 characters
- [ ] Open Graph tags are complete (`og:title`, `og:description`, `og:type`, `og:url`, `og:image`)
- [ ] Twitter Card tags are present (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`)
- [ ] Heading hierarchy is correct (single `<h1>`, logical `<h2>`/`<h3>` structure)
- [ ] Images have descriptive `alt` text
- [ ] Internal links use correct canonical domains
- [ ] JSON-LD structured data is valid if the page has it
- [ ] New pages are added to the appropriate sitemap (`/sitemap.xml` or `/speedoku/sitemap.xml`)
- [ ] `robots.txt` is updated if needed (block utility pages like account-deletion, privacy-policy)

### Priority 2: Clean and Fancy UI/UX
The site uses a dark, premium aesthetic with glowing accents. Every UI change must feel polished and intentional:
- Smooth animations (`fadeInUp`, `float`, `pulse`)
- Glassmorphism headers with `backdrop-filter: blur()`
- Gradient text for emphasis
- Generous spacing and clear visual hierarchy
- Mobile-first responsive design

---

## Tech Stack

- **Pure static HTML/CSS** — no framework, no build step, no bundler
- **Inline CSS** — each page has its own `<style>` block, no shared stylesheet
- **Vanilla JavaScript** — only where truly needed (deep linking, interactions)
- **Google Fonts** — Inter (weights: 300-900), fallback: `-apple-system, BlinkMacSystemFont, sans-serif`

## Hosting & Deployment

- **GitHub + Cloudflare Pages** — NOT Vercel
- Push to `main` → GitHub Actions → Cloudflare Pages via Wrangler
- **Cloudflare Worker** (`_worker.js`) handles subdomain routing:
  - `speedoku.amatera.dev` → `/speedoku/` (internal rewrite)
  - `alias.amatera.dev` → `/alias/` (internal rewrite)
  - `/room/{roomId}` → `/speedoku/room/index.html` (deep link)
- No build step — files are deployed as-is

## Project Structure

```
/                              Amatera homepage
/alias/                        Alias app landing page
/alias/support/                Alias support
/alias/account-deletion/       GDPR account deletion
/alias/privacy-policy/         Privacy policy
/speedoku/                     Speedoku app landing page
/speedoku/blog/                Blog hub (5 SEO articles)
/speedoku/support/             Speedoku support
/speedoku/account-deletion/    GDPR account deletion
/speedoku/privacy-policy/      Privacy policy
/speedoku/room/                Deep link handler for room invites
/speedoku/.well-known/         App verification (assetlinks.json, AASA)
/assets/                       Shared assets (logos, favicon)
```

## Domain & URL Rules

- **Speedoku canonical domain:** `https://speedoku.amatera.dev`
- **Root canonical domain:** `https://amatera.dev`
- All Speedoku pages (including blog) use `speedoku.amatera.dev` in canonical URLs, OG URLs, and sitemaps
- All root/Alias pages use `amatera.dev`
- Always use trailing slashes on directory URLs

## Design System

### Color Palettes

**Amatera (root):**
- Primary: `#f5a623` (orange), Dark: `#d4890f`, Light: `#ffc966`
- Background: `#0f0f1a` (page), `#1a1a2e` (sections), `#1e1e32` (cards)
- Text: `#ffffff` (primary), `#a0a0b0` (muted)

**Speedoku:**
- Primary: `#8B5CF6` (purple), Glow: `#A78BFA`, Dim: `#6D28D9`
- Accent: `#D580FF` (magenta), `#F472B6` (pink)
- Background: `#0D0515` (deep), `#1A0A2E` (dark), `#251440` (card)
- Text: `#FFFFFF` (primary), `#B4A5C7` (secondary), `#7C6A94` (muted)

**Alias:**
- Primary: `#6C5CE7` (blue-purple), Dark: `#5849c2`, Light: `#a29bfe`
- Background: same as root

### UI Patterns
- **Glassmorphism headers:** `background: rgba(13, 5, 21, 0.8); backdrop-filter: blur(20px);`
- **Gradient text:** `background: linear-gradient(135deg, ...); -webkit-background-clip: text;`
- **Glow effects:** `box-shadow: 0 0 60px rgba(139, 92, 246, 0.3);`
- **Card style:** `border-radius: 16px; border: 1px solid rgba(255,255,255,0.05);`
- **Section padding:** `100px 24px` desktop, `60px 24px` mobile
- **Container:** `max-width: 1200px; margin: 0 auto; padding: 0 24px;`
- **Responsive breakpoints:** 768px (mobile nav), 968px (grid collapse), 640px (small text)

## SEO Infrastructure

- **Sitemaps:** `/sitemap.xml` (root pages) and `/speedoku/sitemap.xml` (Speedoku pages)
- **robots.txt:** Blocks account-deletion and privacy-policy pages, references both sitemaps
- **JSON-LD:** Organization schema on homepage, SoftwareApplication schema on Speedoku landing
- **Blog articles:** Use `og:type: article`, each has canonical URL with subdomain
- **App linking:** Android assetlinks.json + iOS apple-app-site-association in `/speedoku/.well-known/`
- **Smart App Banner:** on room deep link page (`meta name="apple-itunes-app"`)

## Conventions

- Every HTML page uses `index.html` inside its directory (Pretty URLs)
- Favicon: `/assets/logo-fav.png` (referenced from all pages)
- No shared CSS file — duplicate styles are acceptable to keep pages self-contained
- Keep pages lightweight — no unnecessary JavaScript or external dependencies
- Blog articles follow a consistent template with breadcrumb navigation, author info, and related articles section

## API Access (via `.env`)

Tokens are in `.env` (gitignored). Load with: `export $(grep -v '^#' .env | grep -v '^$' | xargs)`

- **Cloudflare** — full zone control (DNS, Pages, cache purge) via REST API
  - Base: `https://api.cloudflare.com/client/v4/`
  - Auth header: `Authorization: Bearer $CLOUDFLARE_API_TOKEN`
  - Zone ID in `$CLOUDFLARE_ZONE_ID` (`00717fcf712f952697d65dbe978c0af7`)
- **Google Search Console** — owner access to `amatera.dev`, `speedoku.amatera.dev`, `alias.amatera.dev`
  - OAuth2: exchange `$GSC_REFRESH_TOKEN` for access token via `https://oauth2.googleapis.com/token`
  - API: `https://www.googleapis.com/webmasters/v3/sites/`
  - Use for: indexing requests, search performance, sitemap submission, crawl errors
- **GitHub** — use `gh` CLI directly (authenticated as Tengizo, no token needed in `.env`)

## Cross-Project: Speedoku App Source

The Speedoku app source lives at `/Users/tengizo/personal/projects/mobile/speedoku/`.
When app features ship, update the landing page and blog content to reflect them.

Key app areas to track for website updates:
- Features: `lib/features/` — each subdirectory is a major feature
- Version: `pubspec.yaml` → `version:` field
- App Store links: see Speedoku's CLAUDE.md → Distribution section
- Changelog: git log on the speedoku repo for recent features
