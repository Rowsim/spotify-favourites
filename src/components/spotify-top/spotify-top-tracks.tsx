import React, { useContext, useEffect, useState } from "react";
import { Artist, Track } from "../../services/spotify-types";
import { StyledTitle } from "../title/styled-title";
import { ReactComponent as PlaySvg } from "../../assets/images/play.svg";
import { getUserTopTracks } from "../../services/spotify-service";
import { AppContext } from "../../AppContext";
import notFoundImg from "../../assets/images/not-found.png";
import "./spotify-top.scss";

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
      prevSelectedTimeRange !== selectedTimeRange
    )
      getUserTopTracks(`${selectedTimeRange}_term`).then((result) => {
        setTopTracks(result.items);
      });
  }, [prevSelectedTimeRange, selectedTimeRange, setTopTracks, topTracks]);

  return (
    <div className="spotify-top spotify-top--tracks fade-in">
      <StyledTitle fontSize="60px">Your top tracks</StyledTitle>
      <div className="spotify-top__tracks">
        {topTracks &&
          topTracks.map((track, index) => (
            <TrackCard key={track.id} track={track} position={index + 1} />
          ))}
      </div>
    </div>
  );
};

const TrackCard = ({ track, position }: TrackCardProps) => {
  const artistNames: string[] = getTrackArtistNames(track.artists);
  const trackImageUrl: string = getTrackingImageUrl(track);
  const className = "spotify-top__tracks";
  return (
    <div className={`${className}__card`}>
      <div className={`${className}__card__img`}>
        <img
          src={trackImageUrl ? trackImageUrl : notFoundImg}
          alt={track.name}
        />
        <div className={`${className}__card__img__number`}>{position}</div>
      </div>
      <div className={`${className}__card__title`}>{track.name}</div>
      <div className={`${className}__card__artists`}>
        {artistNames.map((name, i) => {
          if (i + 1 >= artistNames.length)
            return (
              <div
                key={name + i}
                className={`${className}__card__artists__name`}
              >
                {name}
              </div>
            );
          return (
            <div key={name + i} className={`${className}__card__artists__name`}>
              {`${name},`}
            </div>
          );
        })}
      </div>
      <div className={`${className}__card__play`}>
        <PlaySvg />
      </div>
    </div>
  );
};

const getTrackingImageUrl = (track: Track) => {
  if (!track.album || !track.album.images) return "";
  return track.album.images[0].url;
};

const getTrackArtistNames = (artists: Artist[]) => {
  if (!artists) return [];

  const names: string[] = [];
  artists.forEach((artist, i) => {
    if (i <= 3) names.push(artist.name);
    if (i === 5) names.push("...");
  });

  return names;
};

interface TrackCardProps {
  track: Track;
  position: number;
}

export default SpotifyTopTracks;
