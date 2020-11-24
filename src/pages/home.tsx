import React, { lazy, useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import { getWithExpiry } from "../util/storage-util";

const VantaWrapperLazy = lazy(() => import("../components/vanta/vanta"));
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

const HomePage = () => {
  const { hasSpotifyToken, setHasSpotifyToken, favouritesType } = useContext(
    AppContext
  );
  useEffect(() => {
    setHasSpotifyToken(getWithExpiry("spotifyToken") != null);
  }, [setHasSpotifyToken]);

  return (
    <>
      {hasSpotifyToken ? (
        <VantaWrapperLazy>
          <TopControlsLazy />
          {favouritesType === "tracks" ? (
            <SpotifyTopTracksLazy />
          ) : (
            <SpotifyTopArtistsLazy />
          )}
        </VantaWrapperLazy>
      ) : (
        <SpotifySignInLazy />
      )}
    </>
  );
};

export default HomePage;
