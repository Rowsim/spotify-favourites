import React, { createContext, useState } from "react";
import { PlayerTrack, SpotifyPlayerState } from "../../services/spotify-types";

interface PlayerContextType {
  deviceId: string;
  setDeviceId: Function;
  spotifyPlayerState: SpotifyPlayerState;
  setSpotifyPlayerState: Function;
  trackHistory: PlayerTrack[];
  setTrackHistory: Function;
}

export const PlayerContext = createContext<PlayerContextType>({
  deviceId: "",
  setDeviceId: () => {},
  spotifyPlayerState: {} as SpotifyPlayerState,
  setSpotifyPlayerState: () => {},
  trackHistory: [],
  setTrackHistory: () => {}
});

export const PlayerProvider = ({ children }: any) => {
  const [deviceId, setDeviceId] = useState("");
  const [spotifyPlayerState, setSpotifyPlayerState] = useState(
    {} as SpotifyPlayerState
  );
  const [trackHistory, setTrackHistory] = useState([]);

  return (
    <PlayerContext.Provider
      value={{
        deviceId,
        setDeviceId,
        spotifyPlayerState,
        setSpotifyPlayerState,
        trackHistory,
        setTrackHistory
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
