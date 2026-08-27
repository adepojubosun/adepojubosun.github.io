import rss from '@astrojs/rss';
import { getPublishedWriting, entryHref } from '../lib/writing.js';

export async function GET(context) {
  const entries = await getPublishedWriting();

  return rss({
    title: 'Bosun Adepoju',
    description: 'Writing and video on building software at scale.',
    site: context.site,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      categories: entry.data.tags,
      link: entryHref(entry),
    })),
    customData: '<language>en-us</language>',
  });
}
