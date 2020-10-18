import React, { lazy, useEffect, useState } from "react";
import SpotifyTopArtists from "../components/spotify-top/spotify-top-artists";

const SpotifySignInLazy = lazy(() => import("../components/spotify-sign-in"));

const HomePage = () => {
  const [hasSpotifyToken, setHasSpotifyToken] = useState(false);

  useEffect(() => {
    setHasSpotifyToken(
      localStorage.getItem("spotifyToken") != null &&
        localStorage.getItem("spotifyToken") !== ""
    );
  }, []);

  return (
    <div>
      {hasSpotifyToken ? (
        <div>
          Home..
          <SpotifyTopArtists />
        </div>
      ) : (
        <SpotifySignInLazy />
      )}
    </div>
  );
};

export default HomePage;
