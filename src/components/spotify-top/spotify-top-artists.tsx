import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import { getUserTopArtists } from "../../services/spotify-service";
import { Artist } from "../../services/spotify-types";
import { SpotifyTopArtistsTracks } from "./spotify-top-artist-tracks";
import "./spotify-top.scss";

const SpotifyTopArtists = () => {
  const { topArtists, setTopArtists, selectedTimeRange } = useContext(
    AppContext
  );

  const [prevSelectedTimeRange, saveSelectedTimeRange] = useState(
    selectedTimeRange
  );
  const [selectedArtist, setSelectedArtist] = useState({} as Artist);

  const scrollSelector = (left: boolean, toStart?: boolean) => {
    const selectorElement = document.querySelector(
      ".spotify-top__selector"
    ) as HTMLDivElement;

    if (toStart) {
      selectorElement.scrollTo(0, 0);
    } else {
      const scrollAmount = selectorElement.offsetWidth * (1 - 0.05);
      selectorElement.scrollBy({
        top: 0,
        left: left ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    saveSelectedTimeRange(selectedTimeRange);

    if (
      !topArtists ||
      topArtists.length < 1 ||
      prevSelectedTimeRange !== selectedTimeRange
    ) {
      getUserTopArtists(`${selectedTimeRange}_term`).then((result) => {
        setTopArtists(result.items);
      });
    }

    setSelectedArtist(topArtists && topArtists[0]);
    scrollSelector(false, true);
  }, [prevSelectedTimeRange, selectedTimeRange, setTopArtists, topArtists]);

  return (
    <div className="spotify-top spotify-top--artists fade-in">
      <div className="spotify-top__scroll-buttons"></div>
      <div className="spotify-top__selector-container">
        <div
          className="spotify-top__selector-container__scroll"
          onClick={() => scrollSelector(true)}
        >
          {"<"}
        </div>
        <div className="spotify-top__selector fade-in">
          {topArtists &&
            topArtists.map((artist, index) => (
              <ArtistSelector
                artist={artist}
                selected={artist === selectedArtist}
                setSelectedArtist={setSelectedArtist}
                key={index}
              />
            ))}
        </div>
        <div
          className="spotify-top__selector-container__scroll"
          onClick={() => scrollSelector(false)}
        >
          {">"}
        </div>
      </div>

      {selectedArtist && (
        <div className="spotify-top__info">
          <SelectedArtist artist={selectedArtist} />
          <SpotifyTopArtistsTracks artistId={selectedArtist.id} />
        </div>
      )}
    </div>
  );
};

const ArtistSelector = ({
  artist,
  selected,
  setSelectedArtist,
}: {
  artist: Artist;
  selected: boolean;
  setSelectedArtist: Function;
}) => {
  return (
    <div
      onClick={() => {
        setSelectedArtist(artist);
      }}
      className={`spotify-top__selector__item fade-in ${
        selected ? "spotify-top__selector__item--selected" : ""
      }`}
    >
      <img
        alt="artist"
        width={120}
        height={120}
        src={artist.images && artist.images[2] ? artist.images[2].url : ""} // TODO Not found image
      />
      <div className="spotify-top__selector__item__name">{artist.name}</div>
    </div>
  );
};

const SelectedArtist = ({ artist }: { artist: Artist }) => {
  return (
    <div className="spotify-top__selected">
      <div className="spotify-top__selected__title">
        <div className="spotify-top__selected__title__name">{artist.name} </div>
        <div className="spotify-top__selected__title__popularity">
          <div>{artist.popularity}</div>
        </div>
      </div>
      <div className="spotify-top__selected__details">
        {artist.genres && artist.genres.length > 0 && (
          <div className="spotify-top__selected__info-tile">
            <div className="spotify-top__selected__info-tile__title">
              Genres
            </div>
            {artist.genres.map((genre, index) => (
              <span key={index}>{genre}</span>
            ))}
          </div>
        )}
        {artist.followers && (
          <div className="spotify-top__selected__info-tile">
            <div className="spotify-top__selected__info-tile__title">
              Followers
            </div>
            <div>
              {Intl.NumberFormat("en-us").format(artist.followers.total)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpotifyTopArtists;
