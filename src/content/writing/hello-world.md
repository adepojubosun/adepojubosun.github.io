---
title: "Hello, World"
description: "A placeholder entry that demonstrates the frontmatter schema. Delete it — or flip draft to false — when the first real post is ready."
pubDate: 2026-09-01
tags: ["meta"]
draft: true
format: "post"
---

This entry is a draft, so it never renders on the landing page, the archive, or
the RSS feed. It exists to document the frontmatter schema.

## Frontmatter

| field | required | notes |
| --- | --- | --- |
| `title` | yes | Shown as the card name and the page `<h1>`. |
| `description` | yes | Card subtitle and the RSS item description. |
| `pubDate` | yes | Any date string; entries sort newest first. |
| `tags` | no | Defaults to `[]`. Renders as cyan tag chips. |
| `draft` | no | Defaults to `false`. `true` hides the entry everywhere. |
| `format` | no | `post` (default) or `video`. |
| `videoUrl` | for videos | Where the card links out to. |
| `thumbnail` | for videos | Path under `public/`, e.g. `/thumbs/talk.jpg`. |

## Video entries

A `format: video` entry never gets its own page. Its archive card links straight
out to `videoUrl` and shows `thumbnail` with a play indicator:

```yaml
---
title: "Event-Driven Architecture, Honestly"
description: "Forty minutes on what actually breaks at scale."
pubDate: 2026-10-12
tags: ["distributed systems", "talks"]
format: "video"
videoUrl: "https://www.youtube.com/watch?v=xxxxxxxxxxx"
thumbnail: "/thumbs/eda-talk.jpg"
---
```

Once a single entry has `draft: false`, the landing page swaps its empty state
for the three most recent cards and a link to the archive.
