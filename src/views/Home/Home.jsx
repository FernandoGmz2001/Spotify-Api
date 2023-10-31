import "./Home.css";
import PropTypes from "prop-types";
import { SpotifyLogo } from "../../components";
import { useEffect, useState } from "react";

function Home({ token }) {
  const [Data, setData] = useState();
  const [playlist, setPlaylist] = useState();
  useEffect(() => {
    getHomeHeader();
    getPlaylist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function getHomeHeader() {
    console.log(token);
    const response = await fetch(
      "https://api.spotify.com/v1/artists?ids=1Xyo4u8uXC1ZmMpatF05PJ,0Y5tJX1MQlPlqiwlOH1tJY,4q3ewBCX7sLwd24euuV69X,5XJDexmWFLWOkjOEjOVX3e",
      {
        type: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    console.log(data);
    setData(data);
  }
  async function getPlaylist() {
    const response = await fetch(
      "https://api.spotify.com/v1/playlists/37i9dQZF1DWVskFRGurTfg",
      {
        type: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    console.log(data);

    setPlaylist(data);
  }
  return (
    <div className="home">
      <div className="home__header">
        <SpotifyLogo height={35} />
      </div>
      <div className="home__hero">
        <div className="hero__information">
          <p>New Album</p>
          <p>Happier Than Ever</p>
          <p>Billie Eilish</p>
        </div>
        <picture className="hero__image">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a03107a0-b5ba-4ff5-aff5-94d08a420397/deiqugn-6b076747-272b-4b60-adfa-18b3e638c443.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EwMzEwN2EwLWI1YmEtNGZmNS1hZmY1LTk0ZDA4YTQyMDM5N1wvZGVpcXVnbi02YjA3Njc0Ny0yNzJiLTRiNjAtYWRmYS0xOGIzZTYzOGM0NDMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WViNBLKRoFTTpWYnyVzIQ291nw8wIbwwZLrFPqZGRG8"
            alt=""
            width={150}
          />
        </picture>
      </div>
      <div className="home__body">
        <ul className="home__menu">
          <li className="menu__item">Artists</li>
        </ul>
        <div className="home__artists">
          {Data?.artists?.map((artist) => (
            <div className="artist__card" key={artist?.id}>
              <picture className="artist__image">
                <img
                  src={artist?.images[1].url}
                  alt=""
                  width={150}
                  height={180}
                />
              </picture>
              <p className="artist__name">{artist?.name}</p>
            </div>
          ))}
        </div>
        <div className="home__playlist">
          <h1>Playlist</h1>
          <div className="playlist__container">
            {playlist?.tracks?.items?.map((track) => (
              <div className="song" key={track?.id}>
                <div className="song__play">
                  <div className="play__circle">
                    <i className="bx bx-play"></i>
                  </div>
                </div>
                <div className="song__info">
                  <div className="song__title">
                    <p key={track?.id}>{track?.track?.name}</p>
                  </div>
                  <div className="song__artist">
                    {track?.track?.artists[0]?.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  token: PropTypes.string.isRequired,
};
export default Home;
