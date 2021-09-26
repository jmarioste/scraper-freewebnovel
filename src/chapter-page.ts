import { getMetaProperty } from './helpers';
import { load } from './wrapper';

export async function parseChapterPage(url: string) {
  const $ = await load(url);
  const text = getChapterText($);
  const title = getTitle($);
  return {
    text,
    title,
  };
}

function getChapterText($: cheerio.Root) {
  const chapterText = $('div.m-read div.txt > p')
    .map((_, elem) => {
      if ($(elem).children('strong').length) return '';

      return $(elem).text();
    })
    .get()
    .join('\n');
  return chapterText;
}

function getTitle($: cheerio.Root) {
  return getMetaProperty($, 'og:novel:chapter_name');
}
