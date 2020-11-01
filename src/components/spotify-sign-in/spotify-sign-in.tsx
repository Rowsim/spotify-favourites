import React, { useEffect, useState } from "react";
import { spotifyAuthRequestUri } from "../../services/spotify-auth";
import spotifyLogoSvg from "../../assets/images/spotify-logo.svg";
import styled from "styled-components";
import { StyledGirl } from "../svg-animations/StyledGirl";

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

      <StyledGirl />
    </StyledSpotifySignIn>
  );
};

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
