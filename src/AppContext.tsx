import React, { createContext, useState } from "react";
import { Artist, Track, UserProfile } from "./services/spotify-types";

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
  userProfile: UserProfile;
  setUserProfile: Function;
  playerWebSDKConnected: boolean;
  setPlayerWebSDKConnected: Function;
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
  userProfile: {} as UserProfile,
  setUserProfile: () => {},
  playerWebSDKConnected: false,
  setPlayerWebSDKConnected: () => {},
});

export const AppProvider = ({ children }: any) => {
  const [hasSpotifyToken, setHasSpotifyToken] = useState(false);
  const [favouritesType, setFavouritesType] = useState("artists");
  const [selectedTimeRange, setSelectedTimeRange] = useState("medium");
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [userProfile, setUserProfile] = useState({} as UserProfile);
  const [playerWebSDKConnected, setPlayerWebSDKConnected] = useState(false);

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
        userProfile,
        setUserProfile,
        playerWebSDKConnected,
        setPlayerWebSDKConnected
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
