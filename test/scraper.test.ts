import scraper from '../src/index';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { page } from './mock-data/page';
import { chapter } from './mock-data/chapter';
import { expectedNovel } from './mock-data/expected-novel';

describe('parseNovelPage', () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

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
