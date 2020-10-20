import React, { lazy, useEffect, useState } from "react";

const SpotifySignInLazy = lazy(
  () => import("../components/spotify-sign-in/spotify-sign-in")
);
const SpotifyTopArtistsLazy = lazy(
  () => import("../components/spotify-top/spotify-top-artists")
);

const HomePage = () => {
  const [hasSpotifyToken, setHasSpotifyToken] = useState(false);

  useEffect(() => {
    setHasSpotifyToken(
      localStorage.getItem("spotifyToken") != null &&
        localStorage.getItem("spotifyToken") !== ""
    );
  }, []);

  return (
    <>{hasSpotifyToken ? <SpotifyTopArtistsLazy /> : <SpotifySignInLazy />}</>
  );
};

export default HomePage;
