import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'jeksn.me | Blog',
    description: 'The blog of jeksn.me',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./blog/*.md')),
    customData: `<language>en-us</language>`,
  });
}