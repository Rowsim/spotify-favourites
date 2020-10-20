import React, { useEffect, useState } from "react";
import { spotifyAuthRequestUri } from "../../services/spotify-auth";
import spotifyLogoSvg from "../../assets/images/spotify-logo.svg";
import "./spotify-sign-in.scss";

const SpotifySignIn = () => {
  const [authRequestUri, setRequestAuthUri] = useState("");

  useEffect(() => {
    spotifyAuthRequestUri().then(setRequestAuthUri);
  }, []);

  return (
    <div className="spotify-sign-in">
      <a href={authRequestUri} className="spotify-sign-in__link">
        <div>Connect Spotify</div>
        <img src={spotifyLogoSvg} alt="spotify-logo" />
      </a>
    </div>
  );
};

export default SpotifySignIn;
