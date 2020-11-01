import React from "react";
import styled from "styled-components";
import { ReactComponent as GirlMusicSvg } from "../../assets/images/girl-music.svg";

export const StyledGirl = () => (
  <StyledGirlSvg>
    <GirlMusicSvg />
  </StyledGirlSvg>
);

const StyledGirlSvg = styled.div`
  svg {
    height: 60vh;
  }
  #note-1 {
    animation: note1 ease-in-out 1.3s infinite alternate;
  }

  #head {
    animation: head ease-in-out 0.6s infinite alternate;
  }

  #hair {
    animation: hair ease-in-out 0.6s infinite alternate;
  }

  @keyframes hair {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(10deg);
    }
  }

  @keyframes head {
    from {
      transform: translate(0px);
    }
    to {
      transform: translate(-2px, 5px);
    }
  }

  @keyframes note1 {
    from {
      transform: translate(0px);
    }
    to {
      transform: translate(-5px, 50px);
    }
  }
`;
