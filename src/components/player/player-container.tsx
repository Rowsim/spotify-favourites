// @ts-nocheck
import React, { useContext, useEffect } from "react";
import { checkSpotifyTokenAndRefresh } from "../../services/spotify-auth";
import { setActivePlayer } from "../../services/spotify-player-service";
import { Player } from "./player";
import { PlayerContext } from "./PlayerContext";

declare global {
  interface Window {
    onSpotifyWebPlaybackSDKReady: any;
  }
}

const PlayerContainer = () => {
  const { setDeviceId } = useContext(PlayerContext);
  useEffect(() => {
    const spotifyScript = loadSpotifySDKScript();
    window.onSpotifyWebPlaybackSDKReady = () => {
      const token = checkSpotifyTokenAndRefresh();
      const player: any = new Spotify.Player({
        name: "Spotify Favourites Web Player",
        getOAuthToken: (cb) => {
          cb(token);
        },
      });

      player.addListener("initialization_error", ({ message }) => {
        console.error(message);
      });
      player.addListener("authentication_error", ({ message }) => {
        console.error(message);
      });
      player.addListener("account_error", ({ message }) => {
        console.error(message);
      });
      player.addListener("playback_error", ({ message }) => {
        console.error(message);
      });

      player.addListener("player_state_changed", (state) => {
        console.log(state);
      });

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
        setActivePlayer(device_id);
        setDeviceId(device_id); // Todo might not need this in state..
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      player.connect();
    };

    return () => {
      document.body.removeChild(spotifyScript);
    };
  }, []);

  return <Player />;
};

const loadSpotifySDKScript = () => {
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://sdk.scdn.co/spotify-player.js";
  document.body.appendChild(script);
  return script;
};

export default PlayerContainer;
