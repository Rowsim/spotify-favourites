import React, { createContext, useState } from "react";
import { CurrentTrack } from "../../services/spotify-types";

interface PlayerContextType {
  deviceId: string;
  setDeviceId: Function;
  currentTrack: CurrentTrack;
  setCurrentTrack: Function;
  isPlaying: boolean;
  setIsPlaying: Function;
}

export const PlayerContext = createContext<PlayerContextType>({
  deviceId: '',
  setDeviceId: () => {},
  currentTrack: {} as CurrentTrack,
  setCurrentTrack: () => {},
  isPlaying: false,
  setIsPlaying: () => {},
});

export const PlayerProvider = ({ children }: any) => {
  const [deviceId, setDeviceId] = useState('');
  const [currentTrack, setCurrentTrack] = useState({} as CurrentTrack);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <PlayerContext.Provider
      value={{
        deviceId,
        setDeviceId,
        currentTrack,
        setCurrentTrack,
        isPlaying,
        setIsPlaying,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
