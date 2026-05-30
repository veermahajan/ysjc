# Youth STEM Journal Club — Website

The public website for the **Youth STEM Journal Club (YSJC)** — a free, online summer
program where middle and high school students read, discuss, and present real
scientific research papers under the guidance of high school student mentors.

Live URL: _TBD_

## About the program

YSJC is a four-week summer cohort. Students are placed into small subject groups
(Biology, Chemistry, Computer Science, Mathematics, Neuroscience, Physics,
Psychology — final 2026 line-up TBD), meet twice a week over Zoom, work through
two real research papers with their mentor, and finish the program by presenting
their own analysis of a paper to peers and parents on Showcase Day.

- **Summer 2026:** 100% online (Zoom). Four weeks beginning the week of June 15, 2026.
- **Parent & student orientation:** weekend of June 13–14, 2026.
- **Final presentations:** Saturday of Week 4.
- **Email:** ysjcteam@gmail.com

For the full program structure and conduct expectations, see
`YSJC_2026_Program_Outline.docx.pdf` and `YSJC_2026_Academic_Expectations.docx.pdf`
at the repo root. Last year's capstone literature reviews are compiled in
`YSJC Compiled Literature Reviews Summer 2025.pdf` (also at the root) and will
be re-rendered as `/journal` on the live site.

## What the site does

The site serves three audiences in one scroll:

1. **Prospective students and parents** — what YSJC is, the four-week rhythm, who
   the mentors are, how to register interest for 2026.
2. **Parents specifically** — trust signals: structured program, online conduct
   rules, mentor accountability, photos from last year.
3. **Alumni and the curious** — the YSJC Journal archive (Volume 1 — Summer 2025)
   with the actual literature reviews each cohort wrote.

The full site plan, IA, visual system, and page-by-page content live in
[`DESIGN.md`](./DESIGN.md).

## Repository layout

```
.
├── README.md                                    this file
├── DESIGN.md                                    site design source of truth
├── YSJC_2026_Program_Outline.docx.pdf           authoritative 2026 program info
├── YSJC_2026_Academic_Expectations.docx.pdf     2026 conduct + academic rules
├── YSJC Compiled Literature Reviews Summer 2025.pdf  source for /journal Vol. 1
└── Context Assets/                              source materials, not shipped
    ├── YSJC logo/                               brand marks (PNG, blue/white/transparent)
    ├── YSJC Program Materials/                  2025 syllabi, calendar, capstone guidelines
    └── 7-26-25 YSJC Showcase Photos/            2025 Showcase Day photos (HEIC/MOV)
```

`Context Assets/` is reference material the team uses to write the site; nothing
in that folder is served to visitors. Anything that needs to ship to users lives
elsewhere or gets copied/converted into the site source tree at build time.

## Status

The site has not been built yet. Tech stack is still undecided — `DESIGN.md`
documents the design system and content plan independent of framework so we can
pick the stack on its merits.

Brand colors are defined in `DESIGN.md` and derived from the existing YSJC logo
(deep blue `#1B5E8B`, brand teal `#3FAFA8`) plus the subject color system from
the 2025 program calendar.

## Mentors

The 2025 cohort was led by:

- **Biology** — Jadon Li
- **Chemistry** — Ashley Kang
- **Computer Science** — Kalena Dai
- **Mathematics** — Veer Mahajan
- **Neuroscience** — Jennifer Li
- **Psychology** — Stephanie Leung

2026 mentor line-up will be confirmed before registration opens.

## Contact

ysjcteam@gmail.com — we typically respond within 48 hours.
