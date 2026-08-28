# bosunade.com

Personal site for Bosun Adepoju. [Astro](https://astro.build), plain CSS, no
frameworks. Built to static HTML and served from GitHub Pages at
[bosunade.com](https://bosunade.com).

## Running it

```sh
npm install
npm run dev      # dev server on http://localhost:4321
npm run build    # static build into dist/
npm run preview  # serve dist/ exactly as it will be deployed
```

## Layout

```
src/
  content.config.ts        writing collection schema
  content/writing/         markdown entries — one file per post
  layouts/Base.astro       head, fonts, nav, footer, the two bits of JS
  components/EntryCard.astro
  pages/
    index.astro            landing page
    writing/index.astro    archive
    writing/[...slug].astro  post pages
    rss.xml.js             feed
  styles/global.css        the whole stylesheet
  lib/writing.js           draft filter, date formatting, entry links
public/                    copied to the site root as-is (CNAME lives here)
```

The CSS is one file, in source order, with a marked boundary partway down:
everything above it is the original design, everything below covers the
writing pages. Keep that split when editing.

## Writing a post

Drop a markdown file in `src/content/writing/`. The filename becomes the URL
slug, so `backpressure-is-a-product-decision.md` publishes at
`/writing/backpressure-is-a-product-decision/`.

```yaml
---
title: "Backpressure Is a Product Decision"
description: "One line. Used on the card and in the RSS feed."
pubDate: 2026-09-14
tags: ["distributed systems", "jvm"]
draft: false
---
```

| field | required | notes |
| --- | --- | --- |
| `title` | yes | Card name and page `<h1>`. |
| `description` | yes | Card subtitle and RSS description. |
| `pubDate` | yes | Entries sort newest first. |
| `tags` | no | Defaults to `[]`. Renders as cyan chips. |
| `draft` | no | Defaults to `false`. `true` hides the entry everywhere. |
| `format` | no | `post` (default) or `video`. |
| `videoUrl` | for videos | Where the card links out to. |
| `thumbnail` | for videos | Path under `public/`, e.g. `/thumbs/talk.jpg`. |

**Drafts** are excluded from the landing page, the archive and the feed, in
dev as well as in production. `src/content/writing/hello-world.md` is a draft
kept around to document the schema — delete it whenever.

**Video entries** never get their own page. The card links straight out to
`videoUrl` and shows `thumbnail` with a play indicator.

The landing page's `/writing` section shows an empty state until something is
published, then switches itself to the three most recent entries plus a link
to the archive. No edit needed when the first post ships.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which
builds with `withastro/action` and publishes to GitHub Pages.

Two settings this depends on:

- **Settings → Pages → Source** must be **GitHub Actions**, not "Deploy from
  a branch".
- `public/CNAME` holds the custom domain. It has to stay there — GitHub
  rewrites the repo-root `CNAME`, but only the built output reaches Pages.

Because the domain is custom, `astro.config.mjs` sets `site` and no `base`
path, regardless of the repo name.
