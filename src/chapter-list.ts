import axios from 'axios';
import { load } from 'cheerio';
import { getChapterId } from './helpers';
import { ChapterInfo } from './model';

async function getPageUrls(slug: string) {
  const { data } = await axios.get(`https://freewebnovel.com/${slug}.html`);
  const $ = load(data);
  const pages = $('#indexselect').children().length;
  let arr = Array.from({ length: pages }, (_, i) => i + 1);

  return arr.map(page => {
    return `https://freewebnovel.com/${slug}/${page}.html`;
  });
}

/**
 * Returns all the chapters for a given slug
 */
export async function getChapterList(slug: string) {
  const pageUrls = await getPageUrls(slug);

  let chapterList: ChapterInfo[] = [];
  for (const url of pageUrls) {
    const data: ChapterInfo[] = await parseChapterList(url);
    chapterList = chapterList.concat(data);
  }

  return chapterList;
}

/**
 * Returns all the chapters for a given page url
 */
export async function parseChapterList(url: string): Promise<ChapterInfo[]> {
  console.log(url);
  const { data } = await axios.get(url);
  const $ = load(data);

  const chapters = $('div.m-newest2 ul.ul-list5 li a')
    .map((_, elem) => {
      const href = $(elem).attr('href') ?? '';
      const chapterId = getChapterId(href);
      return {
        title: $(elem).text(),
        chapterId: chapterId,
        datePosted: new Date().toISOString(),
      } as ChapterInfo;
    })
    .get() as ChapterInfo[];
  return chapters;
}
