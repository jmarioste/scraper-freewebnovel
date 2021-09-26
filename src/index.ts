import { getChapterId } from './helpers';
import * as novelPage from './novel-page';
import * as chapterList from './chapter-list';

const scraper = {
  ...novelPage,
  getChapterId,
  ...chapterList,
};

export default scraper;
