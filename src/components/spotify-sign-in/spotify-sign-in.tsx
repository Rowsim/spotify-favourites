import React, { useEffect, useState } from "react";
import { spotifyAuthRequestUri } from "../../services/spotify-auth";
import spotifyLogoSvg from "../../assets/images/spotify-logo.svg";
import { ReactComponent as GirlMusicSvg } from "../../assets/images/girl-music.svg";
import styled from "styled-components";

const SpotifySignIn = () => {
  const [authRequestUri, setRequestAuthUri] = useState("");

  useEffect(() => {
    spotifyAuthRequestUri().then(setRequestAuthUri);
  }, []);

  return (
    <StyledSpotifySignIn>
      <a href={authRequestUri} className="spotify-sign-in-link">
        <div>Connect Spotify</div>
        <img src={spotifyLogoSvg} alt="spotify-logo" />
      </a>
      <StyledGirlSvg>
        <GirlMusicSvg />
      </StyledGirlSvg>
    </StyledSpotifySignIn>
  );
};

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

const StyledSpotifySignIn = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap");

  font-family: "Montserrat", sans-serif;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .spotify-sign-in-link {
    animation: 1.2s ease 0s 1 slideInFromLeft;
    display: flex;
    align-items: center;
    color: rgb(47, 47, 230);
    cursor: pointer;
    font-size: 40px;

    @media only screen and (max-width: 425px) {
      font-size: 25px;
    }

    &:visited {
      color: rgb(47, 47, 230);
    }

    &:hover {
      opacity: 0.7;

      img {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    div {
      margin-right: 12px;
    }

    img {
      height: 50px;

      -webkit-transition: -webkit-transform 0.8s ease-in-out;
      transition: transform 0.8s ease-in-out;

      @media only screen and (max-width: 425px) {
        height: 40px;
      }
    }
  }
`;

export default SpotifySignIn;
