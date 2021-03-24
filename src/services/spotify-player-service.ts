import { checkSpotifyTokenAndRefresh } from "./spotify-auth";

const SPOTIFY_API_URL = "https://api.spotify.com/v1/me/player";

export const playTrack = async (trackUris: string[]) => {
  const spotifyToken = checkSpotifyTokenAndRefresh();

  fetch(`${SPOTIFY_API_URL}/play`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${spotifyToken}`,
    },
    body: JSON.stringify({ uris: trackUris }),
  });
};

export const setActivePlayer = async (playerId: string, play = false) => {
  const spotifyToken = checkSpotifyTokenAndRefresh();

  fetch(SPOTIFY_API_URL, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${spotifyToken}`,
    },
    body: JSON.stringify({ device_ids: [playerId], play }),
  });
};
