import { getCollection } from 'astro:content';

/** Published entries, newest first. Drafts never surface anywhere. */
export async function getPublishedWriting() {
  const entries = await getCollection('writing', ({ data }) => data.draft !== true);
  return entries.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Lowercase long-form date, e.g. "september 14, 2026", to match the site voice. */
export function formatDate(date) {
  return date
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    })
    .toLowerCase();
}

/** Where an entry points: posts get a page, videos link straight out. */
export function entryHref(entry) {
  return entry.data.format === 'video' ? entry.data.videoUrl : `/writing/${entry.id}/`;
}
