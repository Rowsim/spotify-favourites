import React, { useEffect, useState } from "react";
import { spotifyAuthRequestUri } from "../services/spotify-auth";

const SpotifySignIn = () => {
  const [authRequestUri, setRequestAuthUri] = useState("");

  useEffect(() => {
    spotifyAuthRequestUri().then(setRequestAuthUri);
  }, []);

  return (
    <div>
      <a href={authRequestUri}>Sign in</a>
    </div>
  );
};

export default SpotifySignIn;
