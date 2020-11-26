import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../AppContext";
import { StyledToggle } from "../toggle-button/styled-toggle";

export const FavouritesType = () => {
  const { favouritesType, setFavouritesType } = useContext(AppContext);

  return (
    <FavouritesOptionsContainer>
      <StyledToggle
        selected={favouritesType === "tracks"}
        onClick={() => setFavouritesType("tracks")}
      >
        Tracks
      </StyledToggle>
      <StyledToggle
        selected={favouritesType === "artists"}
        onClick={() => setFavouritesType("artists")}
      >
        Artists
      </StyledToggle>
    </FavouritesOptionsContainer>
  );
};

const FavouritesOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  max-height: 33px;
`;
