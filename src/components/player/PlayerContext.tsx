import React, { createContext, useState } from "react";
import { SpotifyPlayerState } from "../../services/spotify-types";

interface PlayerContextType {
  deviceId: string;
  setDeviceId: Function;
  spotifyPlayerState: SpotifyPlayerState;
  setSpotifyPlayerState: Function;
}

export const PlayerContext = createContext<PlayerContextType>({
  deviceId: "",
  setDeviceId: () => {},
  spotifyPlayerState: {} as SpotifyPlayerState,
  setSpotifyPlayerState: () => {},
});

export const PlayerProvider = ({ children }: any) => {
  const [deviceId, setDeviceId] = useState("");
  const [spotifyPlayerState, setSpotifyPlayerState] = useState(
    {} as SpotifyPlayerState
  );

  return (
    <PlayerContext.Provider
      value={{
        deviceId,
        setDeviceId,
        spotifyPlayerState,
        setSpotifyPlayerState,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
