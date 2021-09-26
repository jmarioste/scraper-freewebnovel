import { load } from './wrapper';

function getPages($: cheerio.Root) {
  const pages = $('div.pages li')
    .children()
    .last()
    .text();

  let arr = Array.from({ length: parseInt(pages) }, (_, i) => i + 1);
  return arr;
}

async function getSlugs(url: string) {
  const $ = await load(url);
  const novelSlugs = $('div.col-content h3.tit a')
    .map((_, elem) => {
      return $(elem)
        .attr('href')
        ?.replace('.html', '')
        .replace('/', '');
    })
    .get() as string[];

  return novelSlugs;
}

export async function getPageUrls() {
  const baseUrl = 'https://freewebnovel.com/latest-novel';
  const $ = await load(baseUrl);
  const pages = getPages($);

  const pageUrls = pages.map(page => {
    return `${baseUrl}/${page}/`;
  });
  return pageUrls;
}

export async function getAllSlugs() {
  const pageUrls = await getPageUrls();
  let slugs: string[] = [];
  for (var url of pageUrls) {
    const data = await getSlugs(url);
    slugs = slugs.concat(data);
  }
  return slugs;
}
