export function getMetaProperty($: cheerio.Root, property: string) {
  return $(`meta[property="${property}"]`).attr('content') ?? '';
}

export function getChapterId(url: string) {
  const CHAPTER_ID_REGEX = /(?<=chapter-)(\d+)(?=.html)/gi;
  const chapterStr = CHAPTER_ID_REGEX.exec(url)?.shift() ?? '-1';
  return parseInt(chapterStr);
}
