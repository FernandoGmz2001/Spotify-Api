import PropTypes from 'prop-types';
function SpotifyLogo({width,height}) {
  return (
    <div>
      <picture className="spotify__logo">
        <img
          src="/images/login/spotify-logo.svg"
          alt="spotify-logo"
          width={width}
          height={height}
        />
      </picture>
    </div>
  );
}

SpotifyLogo.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
  };

export default SpotifyLogo;
