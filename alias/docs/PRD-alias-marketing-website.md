# PRD: Alias — Marketing Website (SEO-First)

**Version:** 1.0
**Date:** 2026-03-11
**Domain:** alias.amatera.dev (subdomain of amatera.dev)
**Current state:** 4 static pages (landing, support, account-deletion, privacy-policy). No blog, no structured data, store links still placeholder.

---

## 1. Product Overview

### What Is Alias?

Alias is a mobile party word-guessing game for iOS and Android. One player explains a word without saying it while teammates guess. Teams compete across rounds — the team with the most correct guesses wins.

### Game Identity & Theme

- **Genre:** Party / social word game
- **Vibe:** Fun, loud, competitive, inclusive — designed for gatherings, family nights, house parties, road trips
- **Tone:** Playful but polished. Not childish. Appeals to teens through adults
- **Visual identity:** Purple-accented Material 3 design, Nunito/Inter typography, 8 vibrant team colors, light/dark themes
- **Emotional hook:** Laughter, social bonding, friendly rivalry, "one more round" energy

### Two Game Modes

| Mode | Description | Differentiator |
|------|-------------|----------------|
| **Classic** | Standard Alias — explain, guess, score | Clean, fast, no distractions |
| **Party** | Classic + challenge cards with funny constraints | 25 built-in challenges (whisper, sing, robot voice, pirate, etc.) + unlimited custom challenges. Configurable frequency. This is the "Fan Favorite" |

### Content Scale

| Content | Count |
|---------|-------|
| Bundled languages | 16 (playable offline immediately) |
| Words per language (general) | ~3,100–3,300 (easy/medium/hard) |
| Specialized pack categories | 6+ (Movies & TV, Football, Geography, History, Kids, Popular Movies) |
| Total words across all packs | 50,000+ |
| Built-in party challenges | 25 |
| Localized team name suggestions | 85 per language (1,360 total) |
| UI translation keys | ~251 per language |

---

## 2. Target Audience

### Primary

- **Party game enthusiasts** (18–35): Groups of friends looking for phone-based party games
- **Families** (parents + kids 8+): Game night seekers, especially multilingual households
- **International / multilingual groups**: Erasmus students, expat communities, mixed-language friend groups

### Secondary

- **ESL / language learners**: Using Alias as vocabulary practice in a fun format
- **Teachers / youth leaders**: Looking for group activities, icebreakers
- **Board game fans**: Already know physical Alias, want a digital version without buying cards

### Search Intent Personas

| Persona | What they search | What they need |
|---------|-----------------|----------------|
| Party planner | "party games for groups", "phone games for friends" | Quick-start game that works with any group size |
| Alias player | "alias game app", "alias word game online" | Digital version of the game they already love |
| Multilingual parent | "word game in Finnish", "party game in multiple languages" | Native-language support without awkward translations |
| ESL teacher | "vocabulary game for students", "word guessing game for learning" | Engaging classroom-friendly tool |
| Bored group | "fun games to play at a party", "games to play with friends no internet" | Works offline, minimal setup, immediate fun |

---

## 3. Competitive Advantages (USPs)

These are the features to hammer in all marketing copy and blog content:

### Tier 1 — Primary Differentiators

1. **16 languages bundled, works offline**
   Most competitors: 1–3 languages, require internet. Alias ships with 16 fully playable languages out of the box — no download, no internet needed. This is the #1 differentiator.

2. **Language mixing in a single game**
   Play with English + Finnish + Georgian packs in the same game. A round-robin interleaving algorithm ensures balanced word distribution. No competitor does this.

3. **Party mode with customizable challenges**
   25 built-in challenges (explain like a robot, whisper, sing, stand on one leg...) that can be individually toggled. Users can create unlimited custom challenges with emoji icons. Frequency is configurable (every 1–5 rounds).

4. **Dynamically updated content — new packs without app updates**
   Word packs sync from Firebase. New categories and languages can be pushed live. The app checks for updates on launch and only downloads what's changed. Content is always growing.

### Tier 2 — Strong Supporting Features

5. **Per-player statistics**
   Track individual performance: words explained, words guessed, win rate, games played. Game Over screen shows a ranked player leaderboard. Persists across sessions.

6. **Word contesting system**
   After each round, any skipped word can be challenged — the opposing team votes approve or reject. Settles real-world disputes that every Alias game has.

7. **Massive word library (50,000+ words)**
   ~3,100+ words per language in general packs alone, split by difficulty (easy/medium/hard). Plus specialized categories: Movies & TV, Football, Geography, History, Kids.

8. **Flexible game rules**
   Round timer (30–120 sec), win by target score (10–200) or fixed rounds (3–10), optional skip penalty. Adapts to any group's style.

### Tier 3 — Polish & Quality

9. **Offline-first architecture** — All data in local SQLite. Works on planes, camping, anywhere.
10. **One phone, pass & play** — No need for everyone to install the app.
11. **Unlimited teams** — Not capped at 2–4 like most competitors.
12. **Full dark mode** — Polished Material 3 design.
13. **Sound & haptic feedback** — Timer ticks, victory sounds, swipe haptics.
14. **85 random team names per language** — Culturally localized, fun.

---

## 4. Website Goals

### Primary Goal: SEO-Driven Organic Acquisition

The website exists to capture organic search traffic and convert it to app downloads. Every page should target specific search queries. The blog is the primary SEO vehicle.

### KPIs

| Metric | Target (6 months) |
|--------|-------------------|
| Organic monthly sessions | 5,000+ |
| Blog posts published | 15–20 |
| Keywords ranking page 1 | 20+ |
| App store click-through rate | 8%+ from landing pages |

### Conversion Funnel

```
Search query → Blog post / Landing page → App Store link click → Install
```

Every page must have a clear, visible CTA pointing to App Store / Google Play.

---

## 5. Website Structure (Proposed)

```
alias.amatera.dev/
├── index.html                          ← Landing page (current, enhance)
├── support/                            ← FAQ + contact (current)
├── privacy-policy/                     ← Privacy policy (current, noindex)
├── account-deletion/                   ← GDPR form (current, noindex)
├── blog/                               ← Blog hub (NEW)
│   ├── index.html                      ← Blog listing page
│   ├── best-party-games-for-groups/    ← SEO article
│   ├── alias-word-game-rules/          ← SEO article
│   ├── party-games-no-internet/        ← SEO article
│   ├── word-games-in-[language]/       ← Per-language SEO pages
│   └── ...
├── languages/                          ← Languages showcase (NEW)
│   └── index.html                      ← All 16 languages listed
├── word-packs/                         ← Word packs showcase (NEW)
│   └── index.html                      ← Categories & difficulty levels
└── party-mode/                         ← Party mode showcase (NEW)
    └── index.html                      ← Challenge cards highlight
```

### New Pages Breakdown

**Blog Hub** (`/blog/`)
- Grid of article cards with thumbnails, titles, dates
- Category filtering (Party Games, Word Games, Languages, Tips)
- Each article: breadcrumb, author, publish date, related articles, app CTA
- Template matches Speedoku blog pattern for consistency

**Languages Page** (`/languages/`)
- Showcase all 16 bundled languages with flags and native names
- Highlight "no internet required" for all bundled languages
- Mention language mixing feature
- Target queries: "word game in [language]", "alias game [language]"

**Word Packs Page** (`/word-packs/`)
- Display all categories with word counts
- Highlight difficulty levels (easy/medium/hard)
- Emphasize "new packs added regularly"
- Target queries: "alias word packs", "word guessing game categories"

**Party Mode Page** (`/party-mode/`)
- Showcase all 25 challenge cards with emojis and descriptions
- Explain customization (toggle, frequency, custom challenges)
- Target queries: "party mode word game", "alias challenges", "fun party game rules"

---

## 6. SEO Strategy

### Technical SEO (Fix Now)

| Item | Current State | Action |
|------|---------------|--------|
| App Store links | `href="#"` placeholder | Add real URLs when published |
| JSON-LD on landing page | Missing | Add SoftwareApplication schema (like Speedoku) |
| Sitemap | Only 3 Alias entries | Expand to include all new pages + blog posts |
| Canonical URL | Uses `amatera.dev/alias/` | Consider `alias.amatera.dev` as primary canonical |
| Hreflang tags | Missing | Add for multilingual pages if content is localized |
| Page speed | Good (static HTML) | Maintain — no heavy JS frameworks |
| Internal linking | Minimal | Cross-link between blog posts, feature pages, and landing |

### Content SEO (Blog Strategy)

#### Keyword Clusters

**Cluster 1: Brand & Product (high intent)**
- "alias word game app"
- "alias game download"
- "alias party game app"
- "digital alias game"

**Cluster 2: Party Games (high volume)**
- "best party games for groups"
- "party games for adults"
- "fun games to play at a party"
- "phone games for groups"
- "drinking game alternatives" (position as fun without alcohol)

**Cluster 3: Word Games (medium volume, high relevance)**
- "word guessing game"
- "word game for friends"
- "vocabulary game app"
- "charades alternative app"

**Cluster 4: Offline / No-Internet Games (high intent)**
- "party games without internet"
- "offline word game"
- "games to play without wifi"
- "airplane games for groups"

**Cluster 5: Multilingual / Language-Specific (long-tail, low competition)**
- "word game in Finnish" / "sanapelit suomeksi"
- "word game in German" / "Wortspiel App"
- "word game in Polish" / "gra w słowa"
- "party game in Russian" / "алиас игра"
- One article per language — 16 articles from this cluster alone

**Cluster 6: How-to / Educational (link building)**
- "how to play alias"
- "alias game rules"
- "word game rules for beginners"
- "how to explain words in alias"
- "tips for winning alias"

**Cluster 7: Comparison / Alternative (bottom-funnel)**
- "best alias apps 2026"
- "alias app comparison"
- "alias vs taboo app"
- "free word game apps for parties"

#### Blog Content Calendar (First 15 Articles)

Priority order — publish highest-impact first:

| # | Title | Target Keyword | Cluster | Priority |
|---|-------|---------------|---------|----------|
| 1 | How to Play Alias: Complete Rules & Guide | alias game rules, how to play alias | 6 | P0 |
| 2 | 10 Best Party Games for Groups in 2026 | best party games for groups | 2 | P0 |
| 3 | The Ultimate Word Game for Multilingual Groups | word game multiple languages | 5 | P0 |
| 4 | Party Games That Work Without Internet | party games without internet | 4 | P0 |
| 5 | Alias vs Taboo: Which Word Game Is Better? | alias vs taboo | 7 | P1 |
| 6 | 25 Hilarious Challenge Cards for Your Next Game Night | party game challenges, alias challenges | 2 | P1 |
| 7 | Fun Word Games in Finnish (Sanapelit) | word game Finnish, sanapelit | 5 | P1 |
| 8 | Best Phone Games for Road Trips | phone games for road trips | 4 | P1 |
| 9 | How to Win at Alias: Pro Tips & Strategies | alias tips, word game strategy | 6 | P1 |
| 10 | Word Games for ESL Students & Language Learners | word games for language learning | 6 | P2 |
| 11 | Fun Word Games in German (Wortspiele) | Wortspiel App, word game German | 5 | P2 |
| 12 | Family Game Night Ideas with Alias | family word games | 2 | P2 |
| 13 | Best Free Word Game Apps for Parties (2026) | free word game apps | 7 | P2 |
| 14 | Fun Word Games in Russian (Алиас) | алиас игра, word game Russian | 5 | P2 |
| 15 | Creative Alias Challenges to Try Tonight | alias party mode ideas | 2 | P2 |

#### Per-Language SEO Pages (Cluster 5 Expansion)

Create a dedicated page for each of the 16 languages. These target extremely long-tail, low-competition queries in native languages. Each page:
- Written partially in English, partially in the target language
- Lists sample words from that language's packs
- Highlights team name examples in that language
- Links to App Store with a "Play in [Language]" CTA

---

## 7. Landing Page Enhancements

The current landing page is solid but needs:

1. **Real App Store / Play Store links** (currently `#`)
2. **JSON-LD SoftwareApplication schema** (match Speedoku's pattern)
3. **"16 Languages" hero badge** — immediately visible
4. **Social proof section** — ratings, download count, testimonials (when available)
5. **Word pack categories showcase** — visual grid of available categories
6. **"New content added regularly" messaging** — emphasize the living, updating nature
7. **App screenshots / mockups** — show actual gameplay
8. **Structured FAQ section** with FAQ schema markup for rich snippets
9. **Internal links to blog** and feature pages

---

## 8. Structured Data (JSON-LD)

Add to landing page:
- `SoftwareApplication` — name, OS, category, rating, price (Free), download URLs
- `FAQPage` — from the support FAQ items
- `Organization` — already on amatera.dev root
- `BreadcrumbList` — on all subpages and blog posts
- `Article` / `BlogPosting` — on each blog post (headline, author, datePublished, image)

---

## 9. Sitemap Expansion

Current sitemap has 3 Alias entries. Expand to:

```xml
<!-- Core pages -->
https://amatera.dev/alias/                    priority=0.9
https://amatera.dev/alias/languages/          priority=0.7
https://amatera.dev/alias/word-packs/         priority=0.7
https://amatera.dev/alias/party-mode/         priority=0.7
https://amatera.dev/alias/support/            priority=0.3

<!-- Blog -->
https://amatera.dev/alias/blog/               priority=0.8
https://amatera.dev/alias/blog/[each-post]/   priority=0.6
```

Update `sitemap.xml` with every new page. Set `<lastmod>` dates accurately.

---

## 10. Design & UX Notes

- **Maintain the current static HTML approach** — no framework needed, Cloudflare Pages serves it fast, zero JS overhead helps Core Web Vitals
- **Blog article template** — copy the Speedoku blog pattern (breadcrumb, author, OG article tags, related articles sidebar)
- **Consistent purple brand color** (`#6C5CE7`) across all Alias pages (note: privacy policy currently uses orange `#f5a623` — fix this)
- **Mobile-first** — most users finding a mobile game will be on mobile
- **Every page gets an app download CTA** — sticky footer bar or in-content buttons
- **Image optimization** — use WebP with `<picture>` fallback, lazy loading, explicit dimensions

---

## 11. Implementation Phases

### Phase 1 — Quick Wins (Week 1)
- [ ] Add real App Store / Play Store links
- [ ] Add JSON-LD SoftwareApplication to landing page
- [ ] Fix privacy policy color inconsistency
- [ ] Enhance landing page copy with USPs from Section 3
- [ ] Update sitemap.xml

### Phase 2 — Feature Pages (Week 2)
- [ ] Create `/languages/` page
- [ ] Create `/word-packs/` page
- [ ] Create `/party-mode/` page
- [ ] Add internal cross-linking between all pages
- [ ] Update sitemap

### Phase 3 — Blog Launch (Weeks 3–4)
- [ ] Create blog hub `/blog/`
- [ ] Create blog article HTML template
- [ ] Publish P0 articles (1–4)
- [ ] Add FAQ schema to support page
- [ ] Update sitemap

### Phase 4 — Content Expansion (Ongoing)
- [ ] Publish P1 articles (5–9)
- [ ] Start per-language SEO pages
- [ ] Publish P2 articles (10–15)
- [ ] Monitor Search Console, iterate on performing keywords
- [ ] Add social proof as ratings accumulate

---

## Appendix A: All 25 Party Challenges (for content)

| Challenge | Emoji | Rule |
|-----------|-------|------|
| Three Words Only | 3️⃣ | Explain using only 3 words per description |
| Eyes Closed | 😑 | Explain with your eyes closed |
| Questions Only | ❓ | Explain using only questions |
| Whisper | 🤫 | Explain by whispering |
| One Leg | 🦩 | Stand on one leg while explaining |
| Antonyms Only | 🔄 | Explain using antonyms |
| Slow Motion | 🐢 | Explain everything in slow motion |
| Funny Accent | 🎭 | Use a funny accent |
| One Hand | 🤚 | Only use one hand |
| Sing It | 🎤 | Sing your explanations |
| Robot | 🤖 | Talk like a robot |
| Backwards | ⏪ | Say each word backwards |
| No Hands | 🙅 | No hand gestures allowed |
| Baby Talk | 👶 | Explain like a baby |
| Opera | 🎵 | Use an opera singing voice |
| Freeze | 🥶 | Freeze for 3 seconds between words |
| Superhero | 🦸 | Explain like a superhero |
| Pirate | 🏴‍☠️ | Talk like a pirate |
| Two Words | ✌️ | Only 2 words per description |
| Rhyme | 🎶 | Every explanation must rhyme |
| Laughing | 😂 | Laugh non-stop while explaining |
| Mirror | 🪞 | Team mirrors your gestures |
| Celebrity | 🌟 | Impersonate a famous person |
| Back Turned | 🔙 | Explain with your back to the team |
| Tongue Out | 👅 | Explain with tongue sticking out |

## Appendix B: Supported Languages (for content)

| Flag | Language | Native Name | Code |
|------|----------|-------------|------|
| 🇬🇧 | English | English | en |
| 🇷🇺 | Russian | Русский | ru |
| 🇫🇮 | Finnish | Suomi | fi |
| 🇵🇱 | Polish | Polski | pl |
| 🇨🇿 | Czech | Čeština | cs |
| 🇸🇰 | Slovak | Slovenčina | sk |
| 🇸🇪 | Swedish | Svenska | sv |
| 🇩🇪 | German | Deutsch | de |
| 🇩🇰 | Danish | Dansk | da |
| 🇳🇴 | Norwegian | Norsk | no |
| 🇺🇦 | Ukrainian | Українська | uk |
| 🇪🇪 | Estonian | Eesti | et |
| 🇱🇻 | Latvian | Latviešu | lv |
| 🇱🇹 | Lithuanian | Lietuvių | lt |
| 🇬🇪 | Georgian | ქართული | ka |
| 🇦🇲 | Armenian | Հայերեն | hy |

## Appendix C: Word Pack Categories (for content)

| Category | Difficulties | Words (en) | Languages |
|----------|-------------|------------|-----------|
| General | Easy, Medium, Hard | ~3,200 | 16 |
| Movies & TV | Easy, Medium, Hard | ~1,134 | 16 |
| Football (Sports) | Easy, Medium, Hard | ~562 | 16 |
| Geography | Single | ~1,000 | 16 |
| History | Single | ~1,145 | 16 |
| Kids | Single | ~300 | 16 |
