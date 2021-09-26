import { getChapterId } from './helpers';
import * as novelPage from './novel-page';
import * as chapterList from './chapter-list';
import { parseChapterPage } from './chapter-page';
import { getGenreList } from './genres';
import { getAllSlugs } from './slugs';

const scraper = {
  ...novelPage,
  ...chapterList,
  getChapterId,
  parseChapterPage,
  getGenreList,
  getAllSlugs,
};

export default scraper;
