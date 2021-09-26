import scraper from '../src/index';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { page } from './mock-data/page';
import { chapter } from './mock-data/chapter';
import { expectedNovel } from './mock-data/expected-novel';
import { novel3page1, novel3page2 } from './mock-data/page-sample';
import { genreData } from './mock-data/genre-data';
import { latestNovel } from './mock-data/latest-novel';

describe('scraper', () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  describe('parseNovelPage', () => {
    it('should parse novel page correctly when the slug is given', async () => {
      const slug = 'martial-peak';
      const pageUrl = `https://freewebnovel.com/${slug}.html`;
      const chapterUrl = `https://freewebnovel.com/${slug}/chapter-2347.html`;
      mock.onGet(pageUrl).reply(200, page);
      mock.onGet(chapterUrl).reply(200, chapter);

      const result = await scraper.parseNovelPage(slug);
      expectedNovel.latestUpdate.datePosted = result.latestUpdate.datePosted;
      expect(result).toEqual(expectedNovel);
    });
  });

  describe('getChapterList', () => {
    it('it should get all chapters correctly when given a slug', async () => {
      const slug = 'exclusive-rights-to-an-online-voice-actor';
      const novelUrl = `https://freewebnovel.com/${slug}.html`;
      const pageUrl = `https://freewebnovel.com/${slug}/1.html`;
      const pageUrl2 = `https://freewebnovel.com/${slug}/2.html`;
      mock.onGet(novelUrl).reply(200, novel3page1);
      mock.onGet(pageUrl).reply(200, novel3page1);
      mock.onGet(pageUrl2).reply(200, novel3page2);
      const result = await scraper.getChapterList(slug);
      expect(result.length).toEqual(69);
    });
  });

  describe('parseChapterList', () => {
    it('it should get chapters for a page correctly when given a url', async () => {
      const slug = 'exclusive-rights-to-an-online-voice-actor';
      const pageUrl = `https://freewebnovel.com/${slug}/2.html`;
      mock.onGet(pageUrl).reply(200, novel3page2);

      const result = await scraper.parseChapterList(pageUrl);
      expect(result.length).toEqual(29);
    });
  });

  describe('parseChapterPage', () => {
    it('it should parse title and text content for a chapter', async () => {
      const slug = 'martial-peak';
      const chapterUrl = `https://freewebnovel.com/${slug}/chapter-2347.html`;
      mock.onGet(chapterUrl).reply(200, chapter);

      const result = await scraper.parseChapterPage(chapterUrl);
      expect(result.title).toEqual('Chapter 2346 - Must Die');

      expect(result.text).toContain('Translator: Silavin & Raikov');
      expect(result.text).toContain(
        'Because of that, they desperately wanted to increase their strength.'
      );
    });
  });

  describe('getGenreList', () => {
    it('should get all genres from home page', async () => {
      mock.onGet('https://freewebnovel.com').reply(200, genreData);
      const result = await scraper.getGenreList();
      expect(result.length).toEqual(34);
      expect(result).toContain('Action');
      expect(result).toContain('Smut');
      expect(result).toContain('Wuxia');
    });
  });

  describe('getAllSlugs', () => {
    it('should get all slugs from freewebnovel.com', async () => {
      mock
        .onGet('https://freewebnovel.com/latest-novel')
        .reply(200, latestNovel);
      let page = 1;
      while (page <= 73) {
        mock
          .onGet(`https://freewebnovel.com/latest-novel/${page}/`)
          .reply(200, latestNovel);
        page += 1;
      }
      const result = await scraper.getAllSlugs();
      expect(result.length).toEqual(73 * 20);
      expect(result.shift()).toEqual('my-hermes-system');
      expect(result.pop()).toEqual(
        'top-tier-providence-secretly-cultivate-for-a-thousand-years'
      );
    });
  });
});
