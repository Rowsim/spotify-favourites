import { checkSpotifyTokenAndRefresh } from "./spotify-auth";
import { Artist, Track } from "./spotify-types";

const SPOTIFY_API_URL = "https://api.spotify.com/v1";

export const getUserTopArtists = async (
  timeRange: string,
  limit?: number
): Promise<UserTopArtists> => {
  const spotifyToken = checkSpotifyTokenAndRefresh();
  if (spotifyToken) {
    const userTopArtistsResults = await fetch(
      `${SPOTIFY_API_URL}/me/top/artists?time_range=${timeRange}${
        limit ? `&limit=${limit}` : ""
      }`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${spotifyToken}`,
        },
      }
    );

    return userTopArtistsResults.json();
  }

  return Promise.reject("Invalid spotify auth token :(");
};

interface UserTopArtists {
  items: Array<Artist>;
}

interface UserTopTracks {
  items: Array<Track>;
}
