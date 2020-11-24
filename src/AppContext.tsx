import React, { createContext, useState } from "react";
import { Artist, Track } from "./services/spotify-types";

interface AppContextType {
  hasSpotifyToken: boolean;
  setHasSpotifyToken: Function;
  favouritesType: string;
  setFavouritesType: Function;
  selectedTimeRange: string;
  setSelectedTimeRange: Function;
  topTracks: Array<Track>;
  setTopTracks: Function;
  topArtists: Array<Artist>;
  setTopArtists: Function;
}

export const AppContext = createContext<AppContextType>({
  hasSpotifyToken: false,
  setHasSpotifyToken: () => {},
  favouritesType: "artists",
  setFavouritesType: () => {},
  selectedTimeRange: "medium",
  setSelectedTimeRange: () => {},
  topTracks: [],
  setTopTracks: () => {},
  topArtists: [],
  setTopArtists: () => {},
});

export const AppProvider = ({ children }: any) => {
  const [hasSpotifyToken, setHasSpotifyToken] = useState(false);
  const [favouritesType, setFavouritesType] = useState("artists");
  const [selectedTimeRange, setSelectedTimeRange] = useState("medium");
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);

  return (
    <AppContext.Provider
      value={{
        hasSpotifyToken,
        setHasSpotifyToken,
        favouritesType,
        setFavouritesType,
        selectedTimeRange,
        setSelectedTimeRange,
        topTracks,
        setTopTracks,
        topArtists,
        setTopArtists,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
