import React from "react";
import styled from "styled-components";
import { FavouritesType } from "./favourites-options";
import { TimeRange } from "./time-range";
import { UserIcon } from "./user-icon";


const TopControls = () => (
  <TopControlsContainer>
    <FavouritesType />
    <UserIcon />
    <TimeRange />
  </TopControlsContainer>
);

const TopControlsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
`;

export default TopControls;
