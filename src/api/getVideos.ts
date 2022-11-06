import { ItemType, SongFetchType } from "../types/fetchTypes";

const API_URL = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyB5T0IPe7RxSZ2I1YWXA7THAtwvrl2dgvM&type=video&part=snippet&maxResults=2&videoEmbeddable=true`;

export const fetchSongsFromName = async (
  name: string
): Promise<SongFetchType[]> => {
  const url = API_URL + "&q=" + encodeURIComponent(name);
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
  const songs = data.items.map((item: ItemType) => ({
    title: item.snippet.title,
    url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    image: item.snippet.thumbnails.medium.url,
  }));
  return songs;
};
