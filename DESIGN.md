# DESIGN.md — Youth STEM Journal Club Website

The single source of truth for the YSJC website's design system, information
architecture, page content, and interaction model. Independent of tech stack.

Last updated: 2026-05-29 · Version 0.1 (pre-build)

---

## 1. Mission & audiences

YSJC's website has one mission and three audiences. It must serve all three on
the homepage and offer dedicated depth in subpages.

**Mission:** make it obvious — within ten seconds — that YSJC is a real,
structured, free summer program where middle and high school students get to
read actual scientific research with high school mentors, and walk away having
presented their own analysis.

**Audiences, in priority order on the homepage:**

| # | Audience            | Job to be done                                             |
|---|---------------------|------------------------------------------------------------|
| 1 | Prospective student | "Could I do this? Does it look fun? When does it start?"   |
| 2 | Parent of student   | "Is this legitimate? Who runs it? What's the structure?"   |
| 3 | Alumni / curious    | "Where can I see what last year's students actually did?"  |

Anyone in any audience should be able to find their answer without leaving the
homepage. Subpages exist for depth, not for required reading.

---

## 2. Brand foundation

The visual language extends two artifacts that already exist and are well-loved:

1. The **YSJC logo** — lowercase wordmark, sprout monogram, teal + deep blue.
2. The **YSJC Journal Volume 1 (Summer 2025)** — bold serif italic on display
   headings, calm body type, subject sections delineated by italic teal subheads.

The site treats itself as Volume 2 of the same publication. The publishing
voice, the editorial discipline, and the two-color palette all carry over.

### Voice

- **Direct, warm, never condescending.** These are smart middle and high
  schoolers. Don't talk down. Don't use exclamation marks to manufacture energy.
- **Concrete over inspirational.** "Read Attention Is All You Need with a
  high schooler who's read it three times" beats "Discover the wonders of CS."
- **Parents are addressed as parents, not as gatekeepers.** Tell them what
  happens, who runs it, how it's structured. Don't sell.
- **Students are addressed as future scientists.** "You'll annotate the paper"
  not "Kids learn to read papers."

### Tonal anti-patterns to avoid

- Emoji-as-decoration (one or two intentional placements is fine; sprinkled
  randomly is not).
- "Empowering young minds" / "fostering curiosity" — boilerplate ed-tech voice.
- Stock photography of multi-ethnic children laughing at a laptop. Use our own
  showcase photos or no photo.
- Cyberpunk-grid / particle-shader hero. YSJC is a journal club, not a fintech.

---

## 3. Color system

### Brand colors

```
--ysjc-blue          #1B5E8B    deep brand blue        headings, nav, link hover
--ysjc-blue-deep     #134668    pressed / heading bold occasional emphasis
--ysjc-teal          #3FAFA8    brand teal             accents, italics, sprout
--ysjc-teal-deep     #2A8F89    teal pressed state
--ysjc-mint          #E6F7F5    pale teal wash         page bg, hero, soft cards
--ysjc-mint-deep     #C8EDE8    section dividers
--ink                #1A2330    body text
--ink-soft           #475569    secondary text, metadata
--paper              #FFFFFF    card / content bg
--border             #E2E8F0    1px subtle borders
```

### Subject palette

Each cohort has a single color used as a 4-8% tint on card backgrounds and at
full saturation for a 4px left border or chip. Body chrome stays blue/teal —
subject colors only appear on subject-tagged surfaces (subject cards, journal
TOC entries, archive page heroes).

```
Biology              #6FBE5C    fresh leaf green
Chemistry            #E879A8    soft magenta
Computer Science     #4A90D9    bright blue
Mathematics          #E07856    warm salmon
Neuroscience         #E8C547    sun yellow
Physics  (2026 new)  #8B7AC8    soft violet
Psychology           #F09848    warm orange
```

These are the saturated values. The 6% tint values used for card backgrounds
are derived at build time via `color-mix(in srgb, <subject> 6%, white)`.

### Accessibility floor

- All body text on its background must clear WCAG AA (4.5:1).
- Subject colors at full saturation are used **only for non-text accents**
  (chips, borders, icons). When subject color must appear as text, use the
  `--ysjc-blue` variant for the heading and the subject color for a decorative
  glyph next to it.
- Never communicate information by color alone. A subject chip always pairs
  color with subject name.
- Focus rings: 2px solid `--ysjc-blue` with 2px offset, never removed.
- Respect `prefers-reduced-motion`: disable the sprout grow-in, stat counter
  animation, and scroll-triggered fade-ups (content appears at final state).

---

## 4. Typography

```
Display    Fraunces (variable serif, 100-900, opsz 9-144, slant 0/-10)
           Use: hero H1, volume titles, page H1s, pull quotes
           Style: regular for setup line, italic for emphasis word(s)
           Echoes the journal cover's italic "Literature Reviews" treatment.

Sans       Inter (variable, 100-900)
           Use: body, UI, navigation, eyebrows, captions

Mono       JetBrains Mono
           Use: paper citations on /journal pages, code samples in CS articles,
                mathematical notation in math articles
```

**Type scale** (rem units, mobile values; desktop scales up via clamp):

```
Display XL    clamp(2.75, 4vw + 1rem, 4.5)     hero H1
Display L     clamp(2.25, 3vw + 1rem, 3.5)     page H1
Display M     clamp(1.75, 2vw + 1rem, 2.75)    section H2
Heading L     1.5                              card titles, subsection H3
Heading M     1.25                             metadata headings
Heading S     1.125                            inline labels, eyebrows (uppercase)
Body          1.0   line-height 1.6            paragraphs
Small         0.875 line-height 1.5            metadata, captions
Tiny          0.75  line-height 1.4            footer fine print
```

**Italic discipline.** Italic is reserved for:
- The second word of a two-part H1 ("Read real science. *Together.*")
- Paper titles in citations and journal cards
- Pull quotes
- The word "Volume N" on journal pages

Don't italicize for casual emphasis. Use `--ysjc-blue` weight 600 instead.

**Long-form reading width.** Journal article pages cap body text at 65ch (~720px)
regardless of viewport. Everything else uses the 1200px content max-width.

---

## 5. Layout & spacing

- **Content max-width:** 1200px (general), 720px (long-form journal pages)
- **Spacing unit:** 8px. All margins/padding/gaps are multiples of 8.
- **Vertical section rhythm:** 96px desktop, 64px tablet, 48px mobile
- **Card padding:** 32px desktop, 24px mobile
- **Card radius:** 16px (cards), 8px (chips/buttons), 4px (input fields)
- **Grid:** 12-column desktop, 4-column mobile, 24px gutters

### Breakpoints

```
sm   640px     phone landscape
md   768px     tablet
lg   1024px    small laptop  ← primary design target
xl   1280px    desktop
2xl  1536px    large desktop (content stays at 1200px max)
```

---

## 6. Motion

Motion budget is intentionally small. Every animation must justify itself.

**Permitted motion (homepage):**

1. **Sprout grow-in** — the leaf in the logo's "tj" monogram grows once on
   first homepage load per session. 1.2s ease-out. Plays once. Respects
   `prefers-reduced-motion`.
2. **Stat counter** — the `6 subjects · 30+ scholars · 12 papers · 4 weeks`
   strip counts up from 0 once when it enters the viewport. 800ms ease-out.
3. **Scroll-triggered fade-up** — each section fades from `opacity:0, translateY(16px)`
   to its rest state. 300ms ease-out. No parallax, no scroll-jacking.
4. **Card hover** — cards lift 4px and gain a 24px subject-color shadow at 12%
   opacity. 150ms ease-out.
5. **Subject chip hover** — 4% saturation bump (no scale). 150ms.
6. **Tab switch** ("How it works" weeks) — instant content swap, with the
   inbound content fading in over 150ms. No tab-indicator slide animation.
7. **Carousel drag** (showcase photos) — native scroll-snap, no JS-driven
   animation.

**Banned motion:**

- Auto-playing video in hero
- Looping background animations (waves, particles, gradient shifts)
- Parallax scroll on text or images
- Cursor-tracking effects
- Scroll-jacking (any scroll handler that delays or overrides native scroll)
- Spinner loaders longer than 200ms — if something would need a spinner,
  render the placeholder skeleton or load it before navigation

---

## 7. Imagery & iconography

- **Photography:** only the 2025 showcase photos we own. Convert HEIC → WebP
  (and an AVIF fallback) at build time. Max width 1600px. Compress to ≤120KB
  per image. Use `loading="lazy"` for any image below the fold.
- **No stock photography.** Empty states render the sprout mark from the logo,
  in `--ysjc-teal` at 30% opacity, not an Unsplash placeholder.
- **No illustrations** in v1. We don't have an illustrator; AI illustrations
  read as generic. The subject color system + clean type does the visual
  differentiation work instead.
- **Icons:** [Lucide](https://lucide.dev) (open source, consistent stroke
  weight). Used sparingly — in navigation, in subject card metadata rows, and
  in the footer. Never decoratively beside headings.
- **Logo usage:** the horizontal wordmark is used in the site header
  (max-height 32px); the square monogram is used in the favicon, the footer,
  and as the empty-state mark.

---

## 8. Information architecture

```
/                       Home  (single long scroll; see §10)
/program                Program details: 4-week structure, expectations, FAQ
/subjects               Combined 2026 subjects page (cards; TBD-friendly)
/mentors                Meet the Mentors (placeholder cards now; bios to come)
/journal                Landing: "A Collection of Literature Reviews"
                        Grid of subject covers, Vol. 1 - Summer 2025 prominent,
                        "Volume 2 - Summer 2026 coming soon" teaser
  /journal/biology      ┐  Each subject archive page:
  /journal/chemistry    │  - subject hero (subject color blob bg)
  /journal/cs           │  - mentor name
  /journal/math         │  - papers analyzed (2)
  /journal/neuroscience │  - rendered literature review (HTML, 65ch width)
  /journal/psychology   │  - link to full Vol. 1 PDF
                        ┘  - photos from that cohort (where available)
/register               Email-capture stub until the real form is ready.
                        Once live, embeds or links to the registration form
                        and posts the parent meeting calendar invite.
/contact                ysjcteam@gmail.com, contact form (optional),
                        parent meeting info, FAQ overflow
```

**Navigation header (every page):**
- Left: YSJC horizontal wordmark, links home
- Middle/right desktop: `Program · Subjects · Mentors · Journal · Register`
- Mobile: hamburger drawer with the same links
- Sticky on scroll, with a 1px `--border` shadow once scrolled

**Footer (every page):**
- Three columns desktop, stacked mobile
  - About: mission one-liner, contact email
  - Site: full nav repeated
  - Last year: Journal Vol. 1 link, Showcase Day photo album link
- Bottom row: © 2026 Youth STEM Journal Club · ysjcteam@gmail.com

---

## 9. Subject color & content reference

### 2025 cohort (lives in `/journal`)

| Subject          | Color           | Mentor (2025)    | Paper(s) analyzed                                                                                            |
|------------------|-----------------|------------------|--------------------------------------------------------------------------------------------------------------|
| Biology          | `#6FBE5C` green | Jadon Li         | Understanding and applying biological resilience, from genes to ecosystems                                   |
| Computer Science | `#4A90D9` blue  | Kalena Dai       | Attention Is All You Need                                                                                    |
| Neuroscience     | `#E8C547` yellow | Jennifer Li      | Loss of Recent Memory after Bilateral Hippocampal Lesions; Creating a False Memory in the Hippocampus       |
| Mathematics      | `#E07856` salmon | Veer Mahajan     | Emergence of Scaling in Random Networks                                                                      |
| Chemistry        | `#E879A8` magenta| Ashley Kang      | Occurrence, exposure, and health risk assessment of heavy metals in green tea samples (Hangzhou area)        |
| Psychology       | `#F09848` orange | Stephanie Leung  | Milgram's Obedience Study                                                                                    |

Color assignments mirror the 2025 program calendar so returning students see
the same color for their cohort.

### 2026 subjects (subject to confirmation before registration opens)

The 2026 outline lists seven "under consideration": Biology, Chemistry, Computer
Science, Mathematics, Neuroscience, Physics, Psychology. The six returning
subjects keep their color from the table above; Physics is new and uses
violet `#8B7AC8`.

---

## 10. Homepage anatomy

The homepage is one long scroll, designed to answer the three audience
questions in order without forcing anyone to a subpage. See §1.

### Section order

1. **Hero**
2. **Three anchor cards** (Summer 2026 · The 2025 Journal · Meet the Mentors)
3. **How it works** (tabbed week-by-week)
4. **Subjects preview** (horizontal chip row)
5. **2025 showcase strip** (photo carousel)
6. **Testimonials** (3 cards, placeholder quotes initially)
7. **Registration CTA** (mint background card, email capture)
8. **Footer**

### 10.1 Hero

```
[Eyebrow]    SUMMER 2026 · ONLINE · JUNE 15 → JULY 11
[H1]         Read real science.
             Together.                  ← Fraunces italic
[Sub]        A 4-week online summer program where middle and high
             school students dissect real research papers with high
             school mentors — and present their own analysis at the end.
[CTAs]       [ Join the 2026 cohort → ]   See last year's journal
[Stats]      6 subjects · 30+ scholars · 12 papers · 4 weeks  (counts up)
```

- Background: soft radial gradient blob in `--ysjc-mint` anchored bottom-right,
  fading to white. No image, no video.
- H1 type: Fraunces 700 regular for line 1, Fraunces 700 italic for line 2.
- "30+" is honest: 2025 had ~30 distinct scholars listed across the six
  cohort rosters (with overlap, so the unique count is around 18; "30+" reads
  as the total cohort-membership count which is what we display).
- Primary CTA scrolls to the Registration section. Secondary CTA navigates to
  `/journal`.

### 10.2 Three anchor cards

Three equal-width cards (1×3 desktop, 1×1 mobile). Each card has:
- Eyebrow label
- Title (Fraunces 600, 1.5rem)
- One-sentence description
- Arrow link to the destination

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│ STARTING        │  │ THE ARCHIVE     │  │ THE TEAM        │
│                 │  │                 │  │                 │
│ Summer 2026     │  │ The 2025        │  │ Meet the        │
│                 │  │ Journal         │  │ mentors         │
│                 │  │                 │  │                 │
│ Format, dates,  │  │ Volume 1 — six  │  │ The high school │
│ and what to     │  │ literature      │  │ students who    │
│ expect.         │  │ reviews by      │  │ lead each       │
│                 │  │ last year's     │  │ cohort.         │
│                 │  │ scholars.       │  │                 │
│ /program →      │  │ /journal →      │  │ /mentors →      │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

### 10.3 How it works (tabbed)

H2: "Four-week rhythm."

Sub: "Two 1-hour Zoom sessions per week. Mentors lead. Students read, discuss, and present."

Tab strip: `Week 1 · Week 2 · Week 3 · Week 4` (also a "Showcase Day" tab at the end).

Each tab shows the two sessions for that week with plain-language one-liners
sourced from the 2026 Program Outline:

```
Week 1 — Foundations of Reading Research
  Day 1: Introduction to research literature.
         How papers are structured. Breakout rooms to meet your mentor.
  Day 2: Your cohort's first paper.
         Guided reading and annotation begins.
```

Tab switch swaps content instantly; the inbound panel fades in over 150ms
(matches §6). No URL change.

### 10.4 Subjects preview

H2: "Six fields. One way of thinking."

Sub: "Each cohort is small, mentor-led, and built around two real research papers."

Horizontal row of subject chips, scrollable on mobile:

```
[ Biology ]  [ Chemistry ]  [ CS ]  [ Math ]  [ Neuro ]  [ Physics ]  [ Psych ]
```

- Each chip: subject-color 6% tint background, subject-color 1px border,
  `--ink` text. On hover: tint goes to 12%, border to 2px, lift 2px.
- Click → `/subjects#<subject>` (combined page, anchor scroll).
- A footer link below the chips: `See all subjects →`

### 10.5 2025 showcase strip

H2: "Photos from last summer."

Sub: "Showcase Day at the Newark Library Community Room, July 26, 2025."

Horizontal-scrolling row of photos, 4 visible desktop / 1.2 visible mobile,
CSS `scroll-snap-type: x mandatory`. Native scrollbar styled minimally on
desktop. No JS carousel library; native scroll only.

Photos are pulled from `Context Assets/7-26-25 YSJC Showcase Photos/` and
converted HEIC → WebP at build time. Selection: pick the 6-8 strongest at
build, manually curated, not all of them.

### 10.6 Testimonials

H2: "What scholars are saying."

Three cards in a row (1×3 desktop, 1×1 mobile stacked). Each card:
- Quote (Fraunces italic, 1.25rem)
- Avatar placeholder (sprout monogram in subject color) — replace with real
  headshot when available
- Name + cohort label ("Carter Li · Biology, 2025")

Initial quotes are placeholder/lorem until real quotes are collected from the
2025 cohort. The placeholder copy must be clearly marked TODO in the source
so we don't ship lorem to production by accident.

### 10.7 Registration CTA

Full-width section, `--ysjc-mint` background. Single centered card on `--paper`:

```
H2:    Registration opens soon.
Sub:   Drop your email and we'll send the form the moment it's ready —
       plus the parent meeting Zoom link for the weekend of June 13–14.

[ email input                          ] [ Notify me ]

Small: We send 2-3 emails a year. No spam.
```

Email capture posts to a service TBD (Buttondown, ConvertKit, or simple
Formspree — decision deferred to build time).

### 10.8 Footer

See §8.

---

## 11. Page-by-page content plan

### /program

H1: "How the program works."

Sections:
1. **Format** — 100% online, four weeks beginning week of June 15, 2026, two
   1-hour Zoom sessions per week (days/times TBD), parent meeting June 13-14.
2. **Week-by-week** — same four-week breakdown as the homepage tab strip, but
   expanded with the full bullet lists from the 2026 Program Outline.
3. **Academic expectations** — pulled from `YSJC_2026_Academic_Expectations.docx.pdf`:
   pre-reading (~3 pages per session), short reflections, no grades or tests.
4. **Online conduct** — the 13-point rule list from the same doc, grouped by
   Preparation / Zoom etiquette / Respect / Attendance.
5. **FAQ** — answers questions parents are likely to ask: cost (free), age
   range (middle + high school), time zones, how mentors are vetted (high
   school student leaders with the program lead's oversight), what happens if
   my child misses a session.
6. **Download:** PDF of the 2026 Program Outline.

### /subjects

H1: "Subjects for Summer 2026."

Intro: "Subjects are confirmed as mentors are confirmed. Final lineup announced
before registration opens. Students may indicate up to two subject preferences
on the registration form."

Below: a grid of 7 subject cards (or 5-7, depending on what's confirmed). Each
card:
- Subject color stripe on the left
- Subject name (Fraunces, subject color)
- Status chip: "Confirmed for 2026" / "Under consideration"
- One-paragraph description of what students do in that subject (drawn from
  2025 syllabi where available)
- Link: "See the 2025 archive →" (where applicable)

Cards have an internal anchor (`#biology`, `#chemistry`, etc.) so links from
the homepage chip row land at the right card.

### /mentors

H1: "Meet the mentors."

Sub: "Mentors are high school students who've taught the same paper to a
cohort before — or done research in the field themselves. The 2026 mentor
roster is being finalized."

Below: grid of mentor cards. While we don't have bios:
- Placeholder card per 2025 mentor with sprout-monogram avatar
- Subject chip in subject color
- Name only, no fake bio text
- Footer note: "Mentor bios coming soon. Want to mentor in 2026? Email us."

Once bios arrive, each card gets: photo, name, subject, school, one-paragraph
bio, optional links (research project, GitHub, etc.).

### /journal

H1: "A Collection of *Literature Reviews*"  ← echoes the journal cover

Subtitle: "Volume 1 — Summer 2025"

Intro paragraph: pulled directly from the published journal's Introduction
section ("We are honored to present the first volume of the YSJC Journal...").

Then a grid of 6 subject cards, each with:
- Subject color block
- Subject name (Fraunces, large)
- Mentor name
- Number of papers analyzed (1 or 2)
- Number of scholars
- Link: "Read the review →"

Below the grid, a teaser block:
```
VOLUME 2 — SUMMER 2026
Coming after this summer's program.
```

At the bottom: link to download the full Volume 1 PDF.

### /journal/<subject>

H1: subject name (Fraunces, subject color)

Subtitle: "Literature Review · *<paper title>*"

Byline: "By <scholar list>" (Inter, --ink-soft)

Mentor line: "Mentor: <name>"

The full literature review text, rendered as HTML. Max-width 65ch. Body in
Inter 1rem, line-height 1.6. Paper citations in JetBrains Mono inline. Pull
quotes (if used) in Fraunces italic.

Sidebar (desktop) or footer (mobile):
- Link to the source paper (if open access)
- Link to download the full Volume 1 PDF
- Link to the cohort's photos (where they exist)
- Mentor link to `/mentors#<name>`

### /register

Until the real form is ready:

H1: "Register for Summer 2026."

Sub: "Registration opens soon. Add your email and we'll send the form when
it's live, along with the parent meeting Zoom link."

Single email capture (same component as homepage §10.7).

Below: a recap of program-at-a-glance (dates, format, parent meeting, mentor
oversight) so anyone landing here directly understands what they're signing
up to be notified about.

Once the form is ready: embedded form (or link to Google Form / Tally / etc.)
plus the parent meeting calendar invite (`.ics` download).

### /contact

H1: "Contact."

Single column:
- Email: **ysjcteam@gmail.com** (mailto link)
- Response time: "We typically respond within 48 hours."
- Parent meeting: "June 13-14, 2026. Zoom link goes out to registered families."
- FAQ link back to `/program#faq`
- Optional: contact form (probably not needed in v1 — the email link is fine)

---

## 12. Components

Reusable components the build needs. Each component must be implementable in
any modern stack (React, Astro components, Svelte, vanilla — decision deferred).

| Component               | Used in                                                  | Notes                                                            |
|-------------------------|----------------------------------------------------------|------------------------------------------------------------------|
| `<SiteHeader>`          | every page                                               | sticky, shadow on scroll                                         |
| `<SiteFooter>`          | every page                                               | three columns desktop, stacked mobile                            |
| `<Hero>`                | `/`                                                      | eyebrow + display H1 + sub + 2 CTAs + stat counter strip         |
| `<AnchorCard>`          | homepage §10.2, /subjects, /mentors, /journal grid       | 1 image/icon + title + sub + arrow link                          |
| `<StatCounter>`         | homepage §10.1                                           | animates 0 → target on viewport enter                            |
| `<WeekTabs>`            | homepage §10.3, /program                                 | tab strip + content panel, instant switch                        |
| `<SubjectChipRow>`      | homepage §10.4                                           | horizontal scroll, snap, native scrollbar                        |
| `<SubjectCard>`         | /subjects, /journal                                      | color stripe + name + meta + link                                |
| `<MentorCard>`          | /mentors, /journal/<subject>                             | avatar + name + subject chip + optional bio                      |
| `<PhotoStrip>`          | homepage §10.5, /journal/<subject>                       | horizontal scroll, scroll-snap                                   |
| `<TestimonialCard>`     | homepage §10.6                                           | quote + avatar + name + cohort                                   |
| `<EmailCapture>`        | homepage §10.7, /register                                | input + button, validates inline                                 |
| `<JournalArticle>`      | /journal/<subject>                                       | long-form layout, 65ch max, sidebar on desktop                   |
| `<SubjectChip>`         | many                                                     | tinted bg, colored border, label                                 |
| `<StatusChip>`          | /subjects                                                | "Confirmed for 2026" / "Under consideration"                     |
| `<FaqAccordion>`        | /program                                                 | native `<details>` element, no JS                                |

**Implementation guideline:** prefer native HTML elements over custom JS.
`<details>` for FAQ, native scroll-snap for carousels, CSS for hover effects.
JS only when the interaction genuinely requires it (stat counter, tab content
swap, email validation).

---

## 13. Performance & accessibility budgets

**Performance budget (per page, mobile 3G simulation):**

| Metric                    | Budget       |
|---------------------------|--------------|
| Largest Contentful Paint  | < 2.0s       |
| First Input Delay         | < 100ms      |
| Cumulative Layout Shift   | < 0.1        |
| Total JS shipped          | < 80 KB gz   |
| Total CSS                 | < 20 KB gz   |
| Total page weight (home)  | < 500 KB     |

**Accessibility floor:**

- WCAG 2.1 AA across all text/contrast
- Keyboard navigable end-to-end (every interactive element reachable, visible focus ring)
- Screen reader announces the page structure correctly (`<main>`, `<nav>`, `<article>`, `<aside>` used semantically)
- `prefers-reduced-motion` disables sprout animation, stat counter, and scroll-fade
- All images have meaningful `alt` text or `alt=""` for decorative
- Color is never the only indicator of state (subject chip always pairs color + name)
- Forms have visible labels (no placeholder-as-label)

---

## 14. Tech stack decision (deferred)

We deliberately left tech stack out of this document. The site is small enough
(~10 pages, mostly content) that the decision is reversible later. When we
pick a stack, evaluate against:

1. **Content workflow** — can the team add a new journal article and a
   new mentor bio without touching code?
2. **Build performance** — does the static output meet §13's budgets without
   manual optimization?
3. **Image pipeline** — built-in HEIC → WebP/AVIF conversion (we have HEIC
   originals from the showcase photos).
4. **Hosting cost** — free or near-free for a single-team-maintained nonprofit.
5. **Deploy ergonomics** — push-to-deploy on a GitHub branch.

Stacks worth evaluating: Astro (SSG, content collections, image pipeline,
GitHub Pages / Cloudflare Pages friendly), Next.js (overkill for a content
site but the team may already know it), 11ty (lightest, most plain-HTML
result), plain HTML + a build script (smallest deploy footprint).

**Decision is deferred until after the team reviews this doc.**

---

## 15. Open questions

These need an answer before or during the build, captured here so they don't
get lost.

1. **2026 mentors and subjects.** The Program Outline lists seven subjects
   "under consideration" and says "specific subjects are being finalized as
   we confirm qualified mentors." Until that's locked, `/subjects` shows all
   seven with "Confirmed" / "Under consideration" chips.
2. **Registration form.** Where will it live (Google Form, Tally, custom)?
   What fields does it collect? When does it open?
3. **Mentor bios + headshots.** None available today. Site uses placeholders
   in the meantime and will need a way to add them without touching code
   once they exist.
4. **Testimonial quotes.** None collected yet. Reach out to 2025 cohort
   scholars and parents — pull 6-9 quotes, ship 3 on the homepage.
5. **`30+ scholars` claim.** Verify total cohort-membership count from the
   2025 Journal rosters (cross-cohort overlap means unique count is lower).
6. **Photo curation.** Manually pick the strongest 6-8 of the 22 showcase
   photos for the strip. Some are videos (.MOV) — decide whether to use a
   still frame or skip those.
7. **Domain name.** No domain set yet. Likely `youthstemjournalclub.org` or
   `ysjc.org` (check availability).
8. **Analytics.** Add Plausible or umami for basic page-view tracking, or
   skip entirely for a nonprofit?
9. **Email capture backend.** Buttondown / ConvertKit / Formspree / custom.
   Cost vs. ergonomics tradeoff.

---

## 16. What this doc deliberately does not cover

- Marketing copy for individual pages beyond the homepage. Final copy will be
  written during build, against the structure and voice rules in §2 and §4.
- The registration form's field-level design (depends on §15.2).
- A privacy policy and terms (will need legal review before launch).
- SEO meta tags per page (standard implementation: page-specific `<title>`
  and `<meta description>`, Open Graph card with logo + page title, JSON-LD
  for organization).
- Social media presence (out of scope for the website).

---

End of design doc. Next step: pick a stack and start scaffolding `/` and
`/journal` first, since both pull from material we already have.
