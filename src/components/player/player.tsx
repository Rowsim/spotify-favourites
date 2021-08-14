import React, { useContext } from "react";
import {
  pause,
  play,
  previous,
  next,
} from "../../services/spotify-player-service";
import { PlayerContext } from "./PlayerContext";
import { ReactComponent as PlaySvg } from "../../assets/images/play-arrow.svg";
import { ReactComponent as PauseSvg } from "../../assets/images/pause.svg";
import { ReactComponent as NextSvg } from "../../assets/images/next.svg";
import "./player.scss";

export const Player = () => {
  const { spotifyPlayerState } = useContext(PlayerContext);
  const isPlaying = !spotifyPlayerState?.paused;

  const handlePlayClick = () => {
    isPlaying ? pause() : play();
  };

  const currentTrackImg =
    spotifyPlayerState?.track_window?.current_track?.album?.images[0]?.url;
  const prevTrackImg =
    spotifyPlayerState?.track_window?.previous_tracks[0]?.album?.images[0]?.url;
  const nextTrackImg =
    spotifyPlayerState?.track_window?.next_tracks[0]?.album?.images[0]?.url;

  return (
    <div className="player">
      <div className="player__previous" onClick={previous}>
        <div className="player__previous__btn">
          <NextSvg />
        </div>
        {prevTrackImg && <img src={prevTrackImg} alt="previous-track" />}
      </div>

      <div className="player__current" onClick={handlePlayClick}>
        <div className="player__current__play">
          {isPlaying ? <PauseSvg /> : <PlaySvg />}
        </div>
        {currentTrackImg && <img src={currentTrackImg} alt="current-track" />}
      </div>

      <div className="player__next" onClick={next}>
        <div className="player__next__btn">
          <NextSvg />
        </div>
        {nextTrackImg && <img src={nextTrackImg} alt="next-track" />}
      </div>
    </div>
  );
};
