import React, { lazy, useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import { TopControls } from "../components/top-controls/top-controls";
import { getWithExpiry } from "../util/storage-util";

const SpotifySignInLazy = lazy(
  () => import("../components/spotify-sign-in/spotify-sign-in")
);
const SpotifyTopArtistsLazy = lazy(
  () => import("../components/spotify-top/spotify-top-artists")
);

const HomePage = () => {
  const { hasSpotifyToken, setHasSpotifyToken } = useContext(AppContext);

  useEffect(() => {
    setHasSpotifyToken(getWithExpiry("spotifyToken") != null);
  }, [setHasSpotifyToken]);

  return (
    <>
      {hasSpotifyToken ? (
        <>
          <TopControls />
          <SpotifyTopArtistsLazy />
        </>
      ) : (
        <SpotifySignInLazy />
      )}
    </>
  );
};

export default HomePage;
