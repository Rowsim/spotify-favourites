import React, { createContext, useState } from "react";

export const AppContext = createContext<AppContextType>({
  hasSpotifyToken: false,
  setHasSpotifyToken: () => {},
  selectedTimeRange: "medium",
  setSelectedTimeRange: () => {},
});

export const AppProvider = ({ children }: any) => {
  const [hasSpotifyToken, setHasSpotifyToken] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState("medium");

  return (
    <AppContext.Provider
      value={{
        hasSpotifyToken,
        setHasSpotifyToken,
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
  selectedTimeRange: string;
  setSelectedTimeRange: Function;
}
