import React from "react";
import styled from "styled-components";
import { FavouritesType } from "./favourites-options";
import { TimeRange } from "./time-range";

const TopControls = () => (
  <TopControlsContainer>
    <FavouritesType />
    <TimeRange />
  </TopControlsContainer>
);

const TopControlsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default TopControls;
