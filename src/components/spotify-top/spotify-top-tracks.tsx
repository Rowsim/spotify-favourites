import React, { useContext, useEffect, useState } from "react";
import { Artist, Track } from "../../services/spotify-types";
import { ReactComponent as PauseSvg } from "../../assets/images/pause.svg";
import { ReactComponent as PlaySvg } from "../../assets/images/play.svg";
import { getUserTopTracks } from "../../services/spotify-service";
import { AppContext } from "../../AppContext";
import notFoundImg from "../../assets/images/not-found.png";
import "./spotify-top.scss";
import { pause, playTrack } from "../../services/spotify-player-service";
import { PlayerContext } from "../player/PlayerContext";

const SpotifyTopTracks = () => {
  const { topTracks, setTopTracks, selectedTimeRange } = useContext(AppContext);
  const [prevSelectedTimeRange, saveSelectedTimeRange] = useState(
    selectedTimeRange
  );

  useEffect(() => {
    saveSelectedTimeRange(selectedTimeRange);

    if (
      !topTracks ||
      topTracks.length < 1 ||
      prevSelectedTimeRange !== selectedTimeRange //todo bug here where you go from one component to another and change time ranges
    )
      getUserTopTracks(`${selectedTimeRange}_term`).then((result) => {
        setTopTracks(result.items);
      });
  }, [prevSelectedTimeRange, selectedTimeRange, setTopTracks, topTracks]);

  return (
    <div className="spotify-top spotify-top--tracks fade-in">
      <div className="spotify-top__tracks">
        {topTracks &&
          topTracks.map((track, index) => (
            <TrackCard
              key={track.id + index}
              track={track}
              position={index + 1}
              nextTrackUris={topTracks
                .slice(index + 1)
                .map((track) => track.uri)}
            />
          ))}
      </div>
    </div>
  );
};

const TrackCard = ({ track, position, nextTrackUris }: TrackCardProps) => {
  const className = "spotify-top__tracks";
  const artistNames: string[] = getTrackArtistNames(track.artists);
  const trackImageUrl: string = getTrackImageUrl(track, 1);
  const { spotifyPlayerState } = useContext(PlayerContext);
  const isCurrentlyPlaying =
    !spotifyPlayerState?.paused &&
    spotifyPlayerState?.track_window?.current_track?.uri === track.uri
      ? true
      : false;
  const handlePlayClick = () => {
    // TODO think about how to handle active tracks that have been paused... probably an extra piece of state here
    isCurrentlyPlaying ? pause() : playTrack([track.uri, ...nextTrackUris]);
  };

  return (
    <div
      className={`${className}__card ${
        isCurrentlyPlaying ? `${className}__card--playing` : ""
      }`}
      onClick={handlePlayClick}
    >
      <div className={`${className}__card__img`}>
        <img
          src={trackImageUrl ? trackImageUrl : notFoundImg}
          alt={track.name}
          width="200"
          height="190"
        />
        <div className={`${className}__card__img__number`}>{position}</div>
      </div>
      <div className={`${className}__card__title`}>{track.name}</div>
      <div className={`${className}__card__artists`}>
        {artistNames.map((name, i) => {
          if (i + 1 >= artistNames.length)
            return (
              <div key={i} className={`${className}__card__artists__name`}>
                {name}
              </div>
            );
          return (
            <div key={i} className={`${className}__card__artists__name`}>
              {`${name},`}
            </div>
          );
        })}
      </div>
      {!isCurrentlyPlaying ? (
        <div className={`${className}__card__play`}>
          <PlaySvg />
        </div>
      ) : (
        <div className={`${className}__card__play`}>
          <PauseSvg />
        </div>
      )}
    </div>
  );
};

export const getTrackImageUrl = (track: Track, imageIndex = 0) => {
  if (!track.album || !track.album.images || !track.album.images[imageIndex])
    return "";
  return track.album.images[imageIndex].url;
};

export const getTrackArtistNames = (artists: Artist[], limit = 3) => {
  if (!artists) return [];

  const names: string[] = [];
  artists.forEach((artist, i) => {
    if (i <= limit) names.push(artist.name);
  });

  return names;
};

interface TrackCardProps {
  track: Track;
  position: number;
  nextTrackUris: string[];
}

export default SpotifyTopTracks;
