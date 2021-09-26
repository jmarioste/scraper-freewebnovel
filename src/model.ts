export type ChapterInfo = {
  title: string;
  datePosted: string;
  chapterId: number;
};

export type LatestChapterInfo = {
  teaserText?: string;
} & ChapterInfo;

export type Novel = {
  id: string;
  title: string;
  alternativeTitles: string;
  slug: string;
  imageUrl: string;
  rating: number;
  genres: string[];
  authors: string[];
  artists?: string[];
  type: string; //chinese/web
  status: string; //ongoing / completed
  description: string;
  latestUpdate: LatestChapterInfo;
};
