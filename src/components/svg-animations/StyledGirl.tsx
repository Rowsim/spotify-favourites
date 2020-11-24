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
    height: 25vh;

    &:hover {
      #note-1,
      #note-2,
      #note-3,
      #note-4 {
        transition: fill 1.5s ease-in-out;
        fill: #fd6500;
      }
    }
  }

  #note-1,
  #note-2,
  #note-3,
  #note-4 {
    fill: #1db954;
  }

  #note-1 {
    animation: note1 ease-in-out 0.6s infinite alternate;
  }

  #note-2 {
    animation: note2 ease-in-out 0.5s infinite alternate;
  }

  #note-3 {
    animation: note3 ease-in-out 0.5s infinite alternate;
  }

  #note-4 {
    animation: note4 ease-in-out 0.6s infinite alternate;
  }

  #head {
    animation: head ease-in-out 0.5s infinite alternate;
  }

  #hair {
    animation: hair ease-in-out 0.5s infinite alternate;
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
      transform: translate(5px, 45px);
    }
  }

  @keyframes note2 {
    from {
      transform: translate(0px);
    }
    to {
      transform: translate(5px, 50px);
    }
  }

  @keyframes note3 {
    from {
      transform: translate(0px);
    }
    to {
      transform: translate(-3px, 65px);
    }
  }

  @keyframes note4 {
    from {
      transform: translate(0px);
    }
    to {
      transform: translate(0, 30px);
    }
  }
`;
