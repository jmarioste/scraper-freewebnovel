### Webscraper FreeWebNovel

A webscraper for freewebnovel.com

```
  npm install scraper-freewebnovel
```

### API

##### `async scraper.parseNovelPage(slug:string): Novel`

Accepts a slug and returns a Novel object.
Example:

```
  import scraper from "scraper-freewebnovel"
  const novel = await scraper.parseNovelPage("martial-peak");

  console.log(novel);
  /**
    {
      title: 'Martial Peak',
      alternativeTitles: 'Wǔ Liàn Diān Fēng, 武炼巅峰',
      slug: 'martial-peak',
      imageUrl: 'https://freewebnovel.com/files/article/image/0/374/374s.jpg',
      rating: 4.8,
      genres: ['Fantasy', 'Martial Arts', 'Mature', 'Action', 'Xuanhuan', 'Harem'],
      authors: ['莫默', 'Momo'],
      type: 'Chinese Novel',
      description:
        '...',
      latestUpdate: {
        title: 'Chapter 2346 - Must Die',
        chapterId: 2347,
        datePosted: '2021-09-26T08:08:52.957Z',
        teaserText:
          '...',
      },
      status: 'OnGoing',
    }
  */
```

##### `scraper.getChapterId(url string): number`

returns the `chapterId` or `chapterNumber` from a url.
Example:

```
  const url = "https://freewebnovel.com/monarch-of-time/chapter-100.html";
  const chapterId = scraper.getChapterId(url); //100
```
