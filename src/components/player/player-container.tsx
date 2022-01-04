// @ts-nocheck
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../AppContext";
import { checkSpotifyTokenAndRefresh } from "../../services/spotify-auth";
import { setActivePlayer } from "../../services/spotify-player-service";
import { PlayerTrack, SpotifyPlayerState } from "../../services/spotify-types";
import { Player } from "./player";
import { PlayerContext } from "./PlayerContext";

const PlayerContainer = () => {
  const { setDeviceId, setSpotifyPlayerState, trackHistory, setTrackHistory } =
    useContext(PlayerContext);

  const { playerWebSDKConnected, setPlayerWebSDKConnected } =
    useContext(AppContext);

  useEffect(() => {
    if (playerWebSDKConnected) return;
    const spotifyScript = loadSpotifySDKScript();
    window.onSpotifyWebPlaybackSDKReady = () => {
      const token = checkSpotifyTokenAndRefresh();
      const player: any = new Spotify.Player({
        name: "Spotify Favourites Web Player",
        getOAuthToken: (cb) => {
          cb(token);
        },
      });

      const addTrackToHistory = (currentTrack: PlayerTrack) => {
        const isDuplicate = trackHistory.some(
          (track) => track.uri === currentTrack.uri
        );
        if (!isDuplicate) {
          setTrackHistory([...trackHistory, currentTrack]);
        }
      };

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

      player.addListener(
        "player_state_changed",
        (state: SpotifyPlayerState) => {
          console.log(state);
          setSpotifyPlayerState(state);
          addTrackToHistory(state?.track_window?.current_track);
        }
      );

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
        setActivePlayer(device_id);
        setDeviceId(device_id); // Todo might not need this in state..
        player.setVolume(0.4);
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      player.connect().then((success) => {
        if (success) {
          setTimeout(() => setPlayerWebSDKConnected(true), 2000);
          console.log("Spotify Player Web SDK succesfully connected!");
        } else {
          setPlayerWebSDKConnected(false);
          console.error("Spotify Player Web SDK failed to connect.");
        }
      });
    };

    return () => {
      document.body.removeChild(spotifyScript);
    };
  }, []);

  if (playerWebSDKConnected) return <Player />;
  else return null;
};

const loadSpotifySDKScript = () => {
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://sdk.scdn.co/spotify-player.js";
  document.body.appendChild(script);
  return script;
};

export default PlayerContainer;
