import React, { useEffect, useState } from "react";
import { Track } from "../../services/spotify-types";
import { ReactComponent as PlaySvg } from "../../assets/images/play-arrow.svg";
import { getArtistTopTracks } from "../../services/spotify-service";
import { getTrackArtistNames, getTrackImageUrl } from "./spotify-top-tracks";
import "./spotify-top-artist-tracks.scss";

export const SpotifyTopArtistsTracks = ({ artistId }: { artistId: string }) => {
  const [tracks, setTracks] = useState([] as Track[]);

  useEffect(() => {
    if (artistId) {
      getArtistTopTracks(artistId).then((result) => {
        setTracks(result.tracks);
      });
    }
  }, [artistId]);

  return (
    <>
      {artistId && tracks && tracks.length > 0 && (
        <div className="artist-top-tracks">
          <div className="artist-top-tracks__title">Top tracks</div>
          {tracks.map((track, i) => (
            <TrackCard key={i} track={track} />
          ))}
        </div>
      )}
    </>
  );
};

const TrackCard = ({ track }: { track: Track }) => {
  const artistNames = getTrackArtistNames(track.artists);
  const imageUrl = getTrackImageUrl(track, 2);
  return (
    <div className="artist-top-tracks__card">
      <div className="artist-top-tracks__card__info">
        <div className="artist-top-tracks__card__info__name">{track.name}</div>
        {artistNames && (
          <div className="artist-top-tracks__card__info__artists">
            {artistNames.map((name, i) => {
              if (i + 1 === artistNames.length)
                return (
                  <div
                    key={i}
                    className="artist-top-tracks__card__info__artists__name"
                  >
                    {name}
                  </div>
                );
              return (
                <div
                  key={i}
                  className="artist-top-tracks__card__info__artists__name"
                >
                  {name},
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="artist-top-tracks__card__img">
        <div className="artist-top-tracks__card__play">
          <PlaySvg />
        </div>
        <img src={imageUrl} alt="album-art" />
      </div>
    </div>
  );
};
