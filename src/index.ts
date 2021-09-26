import axios from 'axios';
import { load } from 'cheerio';
import { LatestChapterInfo, Novel } from './model';

export function getChapterId(url: string) {
  const CHAPTER_ID_REGEX = /(?!chapter-)(\d+)(?=.html)/gi;
  const chapterStr = CHAPTER_ID_REGEX.exec(url)?.shift() ?? '-1';
  return parseInt(chapterStr);
}

async function parseNovelPage(slug: string) {
  const url = `https://freewebnovel.com/${slug}.html`;
  try {
    const response = await axios.get(url);
    const $ = load(response.data);
    const title = getTitle($);
    const rating = parseFloat(getRating($));
    const description = getDescription($);
    const alternativeTitles = getAlternativeTitles($);
    const authors = getAuthor($);
    const genres = getGenres($);
    const type = getType($);
    const status = getStatus($);
    const imageUrl = getImageUrl($);
    const latestUpdate = await getLatestUpdate($);
    return {
      slug,
      title,
      imageUrl,
      alternativeTitles,
      rating,
      description,
      authors,
      genres,
      type,
      status,
      latestUpdate,
    } as Novel;
  } catch (error) {
    throw error;
  }
}

function getTitle($: cheerio.Root) {
  return $('h1.tit')
    .text()
    .replace(/\n/g, '');
}
function getRating($: cheerio.Root) {
  const text = $('div.score p.vote')
    .first()
    .text();
  return (
    text
      .split('/')
      .shift()
      ?.trim() ?? '0'
  );
}

function getDescription($: cheerio.Root) {
  const text = $('div.m-desc div.txt p')
    .map((_index, elem) => {
      return $(elem).text();
    })
    .get()
    .join('\n');

  return text;
}

function getAlternativeTitles($: cheerio.Root) {
  const text = $("span[title='Alternative names']")
    .siblings()
    .first()
    .text();
  return text.replace(/\n/g, '');
}

function getAuthor($: cheerio.Root) {
  const containerElem = $("span[title='Author']").next();
  const author = $(containerElem)
    .children('a')
    .map((_index, elem) => {
      return $(elem).text();
    })
    .get();

  return author;
}

function getGenres($: cheerio.Root) {
  const containerElem = $("span[title='Genre']").next();
  const genre: string[] = $(containerElem)
    .children('a')
    .map((_index, elem) => {
      return $(elem).text();
    })
    .get();

  return genre;
}

function getType($: cheerio.Root) {
  const type = $("span[title='Original Language']")
    .next()
    .text()
    .replace(/\n/g, '');

  return type;
}

function getStatus($: cheerio.Root) {
  const type = $("span[title='Status']")
    .next()
    .text()
    .replace(/\n/g, '');

  return type;
}
function getImageUrl($: cheerio.Root) {
  const imgUrl = $('div.pic img').attr('src');
  return imgUrl;
}

async function getLatestUpdate($: cheerio.Root) {
  const latest = $('div.m-newest1 ul.ul-list5')
    .children()
    .first();
  const url =
    $(latest)
      .find('a')
      .attr('href') ?? '';
  const title = $(latest)
    .find('a')
    .text();
  const chapterId = getChapterId(url);
  try {
    const response = await axios.get(`https://freewebnovel.com${url}`);
    const $$ = load(response.data);
    const teaserText = $$('div.m-read div.txt')
      .children('p')
      .slice(0, 4)
      .map((_index, elem) => {
        if ($(elem).children('strong').length) return '';

        return $(elem).text();
      })
      .get()
      .join('\n');
    return {
      title,
      chapterId,
      datePosted: new Date().toISOString(),
      teaserText,
    } as LatestChapterInfo;
  } catch (error) {
    throw error;
  }
}

const scraper = {
  parseNovelPage,
  getChapterId,
};

export default scraper;
