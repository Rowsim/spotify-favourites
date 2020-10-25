import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import { getUserTopArtists } from "../../services/spotify-service";
import { Artist } from "../../services/spotify-types";
import { StyledTitle } from "../title/styled-title";
import "./spotify-top.scss";

const SpotifyTopArtists = () => {
  const { selectedTimeRange } = useContext(AppContext);
  const [artists, setArtists] = useState([] as Array<Artist>);
  const [selectedArtist, setSelectedArtist] = useState({} as Artist);
  const [currentElementPos, setCurrentElementPos] = useState(0);

  const scrollSelector = (left: boolean) => {
    const selectorElement = document.querySelector(
      ".spotify-top__selector"
    ) as HTMLDivElement;
    const scrollAmount = selectorElement.offsetWidth * (1 - 0.05);
    selectorElement.scrollBy({
      top: 0,
      left: left ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    getUserTopArtists(`${selectedTimeRange}_term`).then((result) => {
      setArtists(result.items);
      setSelectedArtist(result.items && result.items[0]);
      //TODO Scroll to start of selector
    });

    /* const artists = getDummyArtists(); */
    /*     setArtists(artists);
    setSelectedArtist(artists[0]); */
  }, [selectedTimeRange]);

  return (
    <div className="spotify-top fade-in">
      <StyledTitle fontSize="60px">Your top artists</StyledTitle>
      <div className="spotify-top__scroll-buttons"></div>
      <div className="spotify-top__selector-container">
        <div
          className="spotify-top__selector-container__scroll"
          onClick={() => scrollSelector(true)}
        >
          {"<"}
        </div>
        <div className="spotify-top__selector fade-in">
          {artists &&
            artists.map((artist, index) => (
              <ArtistSelector
                artist={artist}
                selected={artist === selectedArtist}
                setSelectedArtist={setSelectedArtist}
                setCurrentElementPos={setCurrentElementPos}
                currentElementPos={currentElementPos}
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

      {selectedArtist && <SelectedArtist artist={selectedArtist} />}
    </div>
  );
};

const ArtistSelector = ({
  artist,
  selected,
  setSelectedArtist,
  setCurrentElementPos,
  currentElementPos,
}: {
  artist: Artist;
  selected: boolean;
  setSelectedArtist: Function;
  setCurrentElementPos: Function;
  currentElementPos: number;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const scrollToElement = (event: any) => {
    //TODO Remove this function/think about how it could work better..
    const scrollOffset = 300;
    const selectedElement = event.currentTarget;
    const selectedElementPos = selectedElement.offsetLeft;
    const newPosition =
      selectedElementPos > currentElementPos
        ? currentElementPos + scrollOffset
        : currentElementPos - scrollOffset;

    selectedElement.parentElement.scrollTo({
      top: 0,
      left: newPosition,
      behavior: "smooth",
    });

    setCurrentElementPos(newPosition);
  };

  return (
    <div
      onClick={(e) => {
        setSelectedArtist(artist);
      }}
      className={`spotify-top__selector__item fade-in ${
        selected ? "spotify-top__selector__item--selected" : ""
      }`}
    >
      <img alt="artist" src={artist.images[0].url} />
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
          <div className="spotify-top__selected__genres">
            <div className="spotify-top__selected__genres__title">Genres</div>
            {artist.genres.map((genre, index) => (
              <span key={index}>{genre}</span>
            ))}
          </div>
        )}
        {artist.followers && (
          <div className="spotify-top__selected__followers">
            <div className="spotify-top__selected__followers__title">
              Followers
            </div>
            <div>{artist.followers.total}</div>
          </div>
        )}
      </div>
    </div>
  );
};

const getDummyArtists = () => {
  return [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4",
      },
      followers: { href: null, total: 50098920 },
      genres: [
        "canadian hip hop",
        "canadian pop",
        "hip hop",
        "pop rap",
        "rap",
        "toronto rap",
      ],
      href: "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
      id: "3TVXtAsR1Inumwj472S9r4",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/60cfab40c6bb160a1906be45276829d430058005",
          width: 640,
        },
        {
          height: 320,
          url:
            "https://i.scdn.co/image/5ea794cf832550943d5f8122afcf5f23ee9d85b7",
          width: 320,
        },
        {
          height: 160,
          url:
            "https://i.scdn.co/image/8eaace74aaca82eaccde400bbcab2653b9cf86e1",
          width: 160,
        },
      ],
      name: "Drake",
      popularity: 100,
      type: "artist",
      uri: "spotify:artist:3TVXtAsR1Inumwj472S9r4",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/7wg1qvie3KqDNQbAkTdbX0",
      },
      followers: { href: null, total: 380956 },
      genres: ["edm", "electropop", "pop", "tropical house"],
      href: "https://api.spotify.com/v1/artists/7wg1qvie3KqDNQbAkTdbX0",
      id: "7wg1qvie3KqDNQbAkTdbX0",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/d4dead698f1d50ac7321385d76fb431d4c3e99c2",
          width: 640,
        },
        {
          height: 320,
          url:
            "https://i.scdn.co/image/4f869af238a8356ed4b65c69670f7cd8649a6251",
          width: 320,
        },
        {
          height: 160,
          url:
            "https://i.scdn.co/image/84e8595d5d8c217467cc0b9578a45cb1cd2fbe8f",
          width: 160,
        },
      ],
      name: "Louis The Child",
      popularity: 74,
      type: "artist",
      uri: "spotify:artist:7wg1qvie3KqDNQbAkTdbX0",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4",
      },
      followers: { href: null, total: 50098920 },
      genres: [
        "canadian hip hop",
        "canadian pop",
        "hip hop",
        "pop rap",
        "rap",
        "toronto rap",
      ],
      href: "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
      id: "3TVXtAsR1Inumwj472S9r4",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/60cfab40c6bb160a1906be45276829d430058005",
          width: 640,
        },
        {
          height: 320,
          url:
            "https://i.scdn.co/image/5ea794cf832550943d5f8122afcf5f23ee9d85b7",
          width: 320,
        },
        {
          height: 160,
          url:
            "https://i.scdn.co/image/8eaace74aaca82eaccde400bbcab2653b9cf86e1",
          width: 160,
        },
      ],
      name: "Drake2",
      popularity: 100,
      type: "artist",
      uri: "spotify:artist:3TVXtAsR1Inumwj472S9r4",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/7wg1qvie3KqDNQbAkTdbX0",
      },
      followers: { href: null, total: 380956 },
      genres: ["edm", "electropop", "pop", "tropical house"],
      href: "https://api.spotify.com/v1/artists/7wg1qvie3KqDNQbAkTdbX0",
      id: "7wg1qvie3KqDNQbAkTdbX0",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/d4dead698f1d50ac7321385d76fb431d4c3e99c2",
          width: 640,
        },
        {
          height: 320,
          url:
            "https://i.scdn.co/image/4f869af238a8356ed4b65c69670f7cd8649a6251",
          width: 320,
        },
        {
          height: 160,
          url:
            "https://i.scdn.co/image/84e8595d5d8c217467cc0b9578a45cb1cd2fbe8f",
          width: 160,
        },
      ],
      name: "Louis The Child2",
      popularity: 74,
      type: "artist",
      uri: "spotify:artist:7wg1qvie3KqDNQbAkTdbX0",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4",
      },
      followers: { href: null, total: 50098920 },
      genres: [
        "canadian hip hop",
        "canadian pop",
        "hip hop",
        "pop rap",
        "rap",
        "toronto rap",
      ],
      href: "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
      id: "3TVXtAsR1Inumwj472S9r4",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/60cfab40c6bb160a1906be45276829d430058005",
          width: 640,
        },
        {
          height: 320,
          url:
            "https://i.scdn.co/image/5ea794cf832550943d5f8122afcf5f23ee9d85b7",
          width: 320,
        },
        {
          height: 160,
          url:
            "https://i.scdn.co/image/8eaace74aaca82eaccde400bbcab2653b9cf86e1",
          width: 160,
        },
      ],
      name: "Drake3",
      popularity: 100,
      type: "artist",
      uri: "spotify:artist:3TVXtAsR1Inumwj472S9r4",
    },
  ];
};

export default SpotifyTopArtists;
