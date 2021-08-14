import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../AppContext";
import { StyledToggle } from "../toggle-button/styled-toggle";
import { ReactComponent as LikeSvg } from "../../assets/images/like.svg";

export const FavouritesType = () => {
  const { favouritesType, setFavouritesType } = useContext(AppContext);

  return (
    <FavouritesOptionsContainer>
      <StyledToggle
        selected={favouritesType === "tracks"}
        onClick={() => setFavouritesType("tracks")}
        className="styled-toggle"
      >
        Tracks
        {favouritesType === "tracks" && <LikeSvg />}
      </StyledToggle>
      <StyledToggle
        selected={favouritesType === "artists"}
        onClick={() => setFavouritesType("artists")}
        className="styled-toggle"
      >
        Artists
        {favouritesType === "artists" && <LikeSvg />}
      </StyledToggle>
    </FavouritesOptionsContainer>
  );
};

const FavouritesOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  max-height: 33px;

  .styled-toggle {
    display: flex;
    align-items: center;

    svg {
      margin-left: 4px;
      height: 14px;
    }
  }
`;
