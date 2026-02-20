# Speedoku SEO Optimization Design

**Date:** 2026-02-20
**Status:** Approved
**Focus:** 100% Speedoku & homepage (no Alias changes)

## Goal

Maximize SEO for "multiplayer sudoku" (primary) and related keywords like "sudoku", "sudoku with friends", "competitive sudoku". Make Speedoku discoverable when people search these terms.

## Approach: Technical SEO + Content Strategy

### 1. Technical SEO Fixes

**New files:**
- `robots.txt` - Allow crawlers, block account-deletion/privacy-policy, reference sitemap
- `sitemap.xml` - All public pages with priority weights (Speedoku highest)
- `assets/logo-fav.png` → favicon for all pages

**Homepage (`index.html`) changes:**
- Add `<link rel="canonical" href="https://amatera.dev/">`
- Add `og:image`, `og:url` meta tags
- Add Twitter Card meta tags
- Add JSON-LD Organization schema
- Add favicon link
- Enhance meta keywords with sudoku-focused terms

**Speedoku page (`speedoku/index.html`) changes:**
- Add `<link rel="canonical" href="https://amatera.dev/speedoku/">`
- Add Twitter Card meta tags
- Strengthen h1 to include "multiplayer sudoku" explicitly
- Enhance meta keywords: "multiplayer sudoku", "sudoku with friends", "real-time sudoku", "competitive sudoku app", "online sudoku multiplayer", "sudoku battle"
- Add JSON-LD SoftwareApplication schema
- Ensure "multiplayer sudoku" appears naturally 4-6 times on page
- Add favicon link
- Add link to blog section

### 2. Blog Section

**Location:** `/speedoku/blog/`

**Blog index:** `/speedoku/blog/index.html`
- Lists all articles with titles, excerpts, dates
- Styled consistently with Speedoku page
- BreadcrumbList JSON-LD schema

**Articles (each in own directory):**

| # | Slug | Title | Target Keyword |
|---|------|-------|---------------|
| 1 | multiplayer-sudoku-guide | What Is Multiplayer Sudoku? The Complete Guide | multiplayer sudoku |
| 2 | play-sudoku-with-friends | How to Play Sudoku with Friends Online in 2026 | sudoku with friends |
| 3 | sudoku-tips-and-strategies | 10 Sudoku Tips and Strategies to Solve Puzzles Faster | sudoku tips, sudoku strategies |
| 4 | competitive-sudoku | Competitive Sudoku: How Real-Time Battles Are Changing the Game | competitive sudoku |
| 5 | best-multiplayer-sudoku-apps | Best Multiplayer Sudoku Apps in 2026 | best sudoku app |

**Each article includes:**
- Full JSON-LD Article schema
- OG + Twitter Card tags
- Canonical URL
- Internal links to Speedoku landing page (download CTA)
- Related articles section
- Breadcrumb navigation

### 3. Structured Data (JSON-LD)

**Homepage:** Organization schema (Amatera company info)
**Speedoku page:** SoftwareApplication schema (app details, platforms, pricing)
**Blog articles:** Article schema (headline, author, dates, publisher)
**Blog index:** BreadcrumbList schema

### 4. Internal Linking Strategy

- Every blog article → Speedoku landing page (download CTA)
- Articles cross-link to each other where relevant
- Speedoku landing page → blog section
- Homepage → blog/Speedoku

### 5. Post-Implementation

- Set up Google Search Console for amatera.dev
- Submit sitemap.xml
- Monitor keyword rankings

## Files to Create

- `robots.txt`
- `sitemap.xml`
- `speedoku/blog/index.html`
- `speedoku/blog/multiplayer-sudoku-guide/index.html`
- `speedoku/blog/play-sudoku-with-friends/index.html`
- `speedoku/blog/sudoku-tips-and-strategies/index.html`
- `speedoku/blog/competitive-sudoku/index.html`
- `speedoku/blog/best-multiplayer-sudoku-apps/index.html`

## Files to Modify

- `index.html` (homepage - meta tags, structured data, favicon, links)
- `speedoku/index.html` (meta tags, structured data, content, favicon, blog link)
