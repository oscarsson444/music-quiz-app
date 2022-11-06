export type DataType = {
  etag: string;
  items: ItemType[];
  kind: string;
  nextPageToken: string;
  pageInfo: { totalResults: number; resultPerPage: number };
  regionCode: string;
};

export type ItemType = {
  etag: string;
  id: { kind: string; videoId: string };
  kind: string;
  snippet: SnippetType;
};

export type SnippetType = {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: Date;
  publishedAt: Date;
  thumbnails: ThumbnailType;
  title: string;
};

export type ThumbnailType = {
  default: { url: string; width: number; height: number };
  high: { url: string; width: number; height: number };
  medium: { url: string; width: number; height: number };
};

export type SongFetchType = {
  title: string;
  url: string;
  image: string;
};
