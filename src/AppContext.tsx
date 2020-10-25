import React, { createContext, useState } from "react";

export const AppContext = createContext<AppContextType>({
  hasSpotifyToken: false,
  setHasSpotifyToken: () => {},
  favouritesType: "artists",
  setFavouritesType: () => {},
  selectedTimeRange: "medium",
  setSelectedTimeRange: () => {},
});

export const AppProvider = ({ children }: any) => {
  const [hasSpotifyToken, setHasSpotifyToken] = useState(false);
  const [favouritesType, setFavouritesType] = useState("artists");
  const [selectedTimeRange, setSelectedTimeRange] = useState("medium");

  return (
    <AppContext.Provider
      value={{
        hasSpotifyToken,
        setHasSpotifyToken,
        favouritesType,
        setFavouritesType,
        selectedTimeRange,
        setSelectedTimeRange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

interface AppContextType {
  hasSpotifyToken: boolean;
  setHasSpotifyToken: Function;
  favouritesType: string;
  setFavouritesType: Function;
  selectedTimeRange: string;
  setSelectedTimeRange: Function;
}
