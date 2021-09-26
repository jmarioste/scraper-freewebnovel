import { load } from 'cheerio';
import { page } from './mock-data/page';
import { getMetaProperty, getChapterId } from '../src/helpers';

describe('getMetaProperty', () => {
  it('it should get the meta content given a property', async () => {
    const $ = load(page);
    const content = getMetaProperty($, 'og:title');
    expect(content).toEqual('Martial Peak');
  });
});

describe('getChapterId', () => {
  it('it should return the chapter id from a url', async () => {
    const url = 'https://freewebnovel.com/monarch-of-time/chapter-100.html';
    const chapterId = getChapterId(url);
    expect(chapterId).toEqual(100);
  });

  it('it should return -1 if the url is not a chapter page url', async () => {
    const url = 'https://freewebnovel.com/monarch-of-time/2.html';
    const result = getChapterId(url);
    expect(result).toEqual(-1);
  });
});
