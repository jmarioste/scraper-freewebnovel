import { load } from './wrapper';

export async function getGenreList() {
  const $ = await load('https://freewebnovel.com');

  const genreList = $('ul.ul-list3 li>a')
    .map((_, elem) => {
      return $(elem)
        .text()
        .trim();
    })
    .get() as string[];

  return genreList ?? [];
}
