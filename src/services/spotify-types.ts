export interface Artist {
  id: string;
  href: string;
  name: string;
  popularity: number;
  genres: Array<string>;
  images: Array<Image>;
}

export interface Track {
  id: string;
  href: string;
  name: string;
  release_date: string;
  explicit: boolean;
  duration_ms: number;
  popularity: number;
  images: Array<Image>;
  album: Album;
}

interface Album {
  id: string;
  href: string;
  name: string;
  release_date: string;
  album_type: string;
  popularity: number;
  genres: Array<string>;
  artists: Array<Artist>;
  images: Array<Image>;
}

interface Image {
  url: string;
  height: number;
  width: number;
}
