import { load } from 'cheerio';
import { page } from './mock-data/page';
import { getMetaProperty } from '../src/helpers';

describe('getMetaProperty', () => {
  it('it should get the meta content given a property', async () => {
    const $ = load(page);
    const content = getMetaProperty($, 'og:title');
    expect(content).toEqual('Martial Peak');
  });
});
