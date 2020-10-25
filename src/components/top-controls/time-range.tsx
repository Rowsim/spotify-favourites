import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../AppContext";
import { StyledToggle } from "../toggle-button/styled-toggle";

export const TimeRange = () => {
  const { selectedTimeRange, setSelectedTimeRange } = useContext(AppContext);

  const handleClick = (timeRange: string) => {
    const spotifyTopElement = document.querySelector(
      ".spotify-top"
    ) as HTMLDivElement;
    spotifyTopElement.style.opacity = "0.2";
    setSelectedTimeRange(timeRange);
    setTimeout(() => {
      spotifyTopElement.style.opacity = "1";
    }, 500);
  };

  return (
    <TimeRangeContainer>
      <StyledToggle
        selected={selectedTimeRange === "short"}
        onClick={() => handleClick("short")}
      >
        Short
      </StyledToggle>
      <StyledToggle
        selected={selectedTimeRange === "medium"}
        onClick={() => handleClick("medium")}
      >
        Medium
      </StyledToggle>
      <StyledToggle
        selected={selectedTimeRange === "long"}
        onClick={() => handleClick("long")}
      >
        Long
      </StyledToggle>
    </TimeRangeContainer>
  );
};

const TimeRangeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${(props) => props.theme.primary};

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;
