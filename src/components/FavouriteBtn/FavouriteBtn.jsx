import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";
import { FaHeart } from "react-icons/fa6";
import { Button } from "./FavouriteBtn.styled";
import toggleFavourites from "../../helpers/toggleFavourites";
import getDataFromLS from "../../helpers/getDataFromLS";

const FavouriteBtn = ({ id }) => {
  const [favourite, setFavourite] = useState(false);
  const buttonRef = useRef();

  useEffect(() => {
    const favourites = getDataFromLS("favoriteMovies");

    if (favourites.includes(id)) {
      setFavourite(true);
    }
  }, [id]);

  const handleFavouriteClick = () => {
    toggleFavourites(id);
    setFavourite(!favourite);

    if (buttonRef.current) {
      buttonRef.current.className = favourite ? "red" : "gray";
    }
  };

  return (
    <Button
      ref={buttonRef}
      onClick={handleFavouriteClick}
      className={favourite ? "red" : "gray"}
    >
      <FaHeart />
    </Button>
  );
};

export default FavouriteBtn;

FavouriteBtn.propTypes = {
  id: PropTypes.string.isRequired,
};
