import React, { useContext } from "react";
import { pause, play } from "../../services/spotify-player-service";
import "./player.scss";
import { PlayerContext } from "./PlayerContext";

export const Player = () => {
  const { spotifyPlayerState } = useContext(PlayerContext);
  const isPlaying = !spotifyPlayerState.paused;

  const handlePlayClick = () => {
    play();
  };

  const handlePauseClick = () => {
    pause();
  };

  return (
    <div className="player">
      {isPlaying ? (
        <div onClick={handlePauseClick}>Pause</div>
      ) : (
        <div onClick={handlePlayClick}>Play</div>
      )}
    </div>
  );
};
