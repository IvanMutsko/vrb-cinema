import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import FavouriteBtn from "../FavouriteBtn/FavouriteBtn";
import DeleteBtn from "../DeleteBtn/DeleteBtn";
import formatDate from "../../helpers/formatData";
import {
  Card,
  Image,
  MovieLink,
  TextWrap,
  Info,
  Title,
} from "./MovieCard.styled";

const MovieCard = ({ data, deleteFn }) => {
  const location = useLocation();

  return (
    <Card>
      <FavouriteBtn id={data.id} />
      <DeleteBtn id={data.id} deleteFn={deleteFn} />
      <MovieLink to={`/movie/${data.id}`} state={{ from: location }}>
        <Image src={data.image} alt={data.title} width="240" />

        <TextWrap>
          <Info>
            <span>IMDb: {data.rating}</span>
            <span>{formatDate(data.release_date)}</span>
          </Info>
          <Title>{data.title}</Title>
        </TextWrap>
      </MovieLink>
    </Card>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
    director: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  deleteFn: PropTypes.func,
};
