import { Artist, Track } from "./spotify-types";

const SPOTIFY_API_URL = "https://api.spotify.com/v1";

const spotifyToken = localStorage.getItem("spotifyToken") || "";

export const getUserTopArtists = async (
  timeRange: string,
  limit: number
): Promise<UserTopArtists> => {
  console.log(`GET: ${SPOTIFY_API_URL}/me/top/artists?time_range=${timeRange}&limit=${limit}`);
  const userTopArtistsResults = await fetch(
    `${SPOTIFY_API_URL}/me/top/artists?time_range=${timeRange}&limit=${limit}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
      },
    }
  );

  return userTopArtistsResults.json();
};

interface UserTopArtists {
  items: Array<Artist>;
}

interface UserTopTracks {
  items: Array<Track>;
}
