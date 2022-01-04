import React, { lazy, useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import { PlayerProvider } from "../components/player/PlayerContext";
import { getWithExpiry } from "../util/storage-util";

const SpotifySignInLazy = lazy(
  () => import("../components/spotify-sign-in/spotify-sign-in")
);
const TopControlsLazy = lazy(
  () => import("../components/top-controls/top-controls")
);
const SpotifyTopArtistsLazy = lazy(
  () => import("../components/spotify-top/spotify-top-artists")
);
const SpotifyTopTracksLazy = lazy(
  () => import("../components/spotify-top/spotify-top-tracks")
);
const SpotifyPlayerContainerLazy = lazy(
  () => import("../components/player/player-container")
);
const SetupLoadingLazy = lazy(() => import("../components/loading/setup-load"));

const HomePage = () => {
  const {
    hasSpotifyToken,
    setHasSpotifyToken,
    favouritesType,
    playerWebSDKConnected,
  } = useContext(AppContext);
  useEffect(() => {
    setHasSpotifyToken(getWithExpiry("spotifyToken") != null);
  }, [setHasSpotifyToken]);

  return (
    <>
      {hasSpotifyToken ? (
        <>
          <PlayerProvider>
            <SpotifyPlayerContainerLazy />
            {playerWebSDKConnected ? (
              <>
                <TopControlsLazy />
                {favouritesType === "tracks" ? (
                  <SpotifyTopTracksLazy />
                ) : (
                  <SpotifyTopArtistsLazy />
                )}
              </>
            ) : (
              <SetupLoadingLazy />
            )}
          </PlayerProvider>
        </>
      ) : (
        <SpotifySignInLazy />
      )}
    </>
  );
};

export default HomePage;
