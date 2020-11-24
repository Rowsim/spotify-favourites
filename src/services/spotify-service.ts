import { checkSpotifyTokenAndRefresh } from "./spotify-auth";
import { Artist, Track } from "./spotify-types";

const SPOTIFY_API_URL = "https://api.spotify.com/v1";

export const getUserTopArtists = async (
  timeRange: string,
  limit?: number
): Promise<UserTopArtists> => {
  const spotifyToken = checkSpotifyTokenAndRefresh();
  if (spotifyToken) {
    console.log(`GET ${SPOTIFY_API_URL}/me/top/artists`)
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

export const getUserTopTracks = async (
  timeRange: string,
  limit?: number
): Promise<UserTopTracks> => {
  const spotifyToken = checkSpotifyTokenAndRefresh();
  if (spotifyToken) {
    console.log(`GET ${SPOTIFY_API_URL}/me/top/tracks`)
    const userTopTracksResponse = await fetch(
      `${SPOTIFY_API_URL}/me/top/tracks?time_range=${timeRange}${
        limit ? `&limit=${limit}` : ""
      }`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${spotifyToken}`,
        },
      }
    );

    return userTopTracksResponse.json();
  }

  return Promise.reject("Invalid spotify auth token :(");
};

interface UserTopArtists {
  items: Array<Artist>;
}

interface UserTopTracks {
  items: Array<Track>;
}
