import React, { lazy, useEffect, useState } from "react";
import { TimeRange } from "../components/time-range/time-range";

const SpotifySignInLazy = lazy(
  () => import("../components/spotify-sign-in/spotify-sign-in")
);
const SpotifyTopArtistsLazy = lazy(
  () => import("../components/spotify-top/spotify-top-artists")
);

const HomePage = () => {
  const [hasSpotifyToken, setHasSpotifyToken] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState("medium");

  useEffect(() => {
    setHasSpotifyToken(
      localStorage.getItem("spotifyToken") != null &&
        localStorage.getItem("spotifyToken") !== ""
    );
  }, []);

  return (
    <>
      {hasSpotifyToken ? (
        <>
          <TimeRange
            selectedTimeRange={selectedTimeRange}
            setSelectedTimeRange={setSelectedTimeRange}
          />
          <SpotifyTopArtistsLazy timeRange={selectedTimeRange} />
        </>
      ) : (
        <SpotifySignInLazy />
      )}
    </>
  );
};

export default HomePage;
