import { Novel } from '../../src/model';

export const expectedNovel: Omit<Novel, 'id'> = {
  title: 'Martial Peak',
  alternativeTitles: 'Wǔ Liàn Diān Fēng, 武炼巅峰',
  slug: 'martial-peak',
  imageUrl: 'https://freewebnovel.com/files/article/image/0/374/374s.jpg',
  rating: 4.8,
  genres: ['Fantasy', 'Martial Arts', 'Mature', 'Action', 'Xuanhuan', 'Harem'],
  authors: ['莫默', 'Momo'],
  type: 'Chinese Novel',
  description:
    ' The journey to the martial peak is a lonely, solitary and long one. In the face of adversity, you must survive and remain unyielding. Only then can you break through and continue on your journey to become the strongest. High Heaven Pavilion tests its disciples in the harshest ways to prepare them for this journey. One day the lowly sweeper Kai Yang managed to obtain a black book, setting him on the road to the peak of the martials world.',
  latestUpdate: {
    title: 'Chapter 2346 - Must Die',
    chapterId: 2347,
    datePosted: '2021-09-26T08:08:52.957Z',
    teaserText:
      ' Chapter 2346 , Must Die\n\n Translator: Silavin & Raikov\n\n Translation Checker: PewPewLazerGun\n\n Editor and Proofreader: Leo of Zion Mountain & Dhael Ligerkeys\n',
  },
  status: 'OnGoing',
};
