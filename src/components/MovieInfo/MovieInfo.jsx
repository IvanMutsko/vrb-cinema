import PropTypes from "prop-types";
import FavouriteBtn from "../FavouriteBtn/FavouriteBtn";
import DeleteBtn from "../DeleteBtn/DeleteBtn";
import { deleteMovieById } from "../../api/api";
import { Wrap, PhotoWrap, Image, DescrWrap, Layout } from "./MovieInfo.styled";

const MovieInfo = ({ data }) => {
  return (
    <Layout>
      <Wrap>
        <PhotoWrap>
          <Image src={data.image} alt={data.title} />
          <FavouriteBtn id={data.id} />
          <DeleteBtn id={data.id} deleteFn={deleteMovieById} />
        </PhotoWrap>
        <DescrWrap>
          <h2>{data.title}</h2>
          <p>
            <span>Directed by:</span> {data.director}
          </p>
          <p>
            <span>Cast:</span> {data.actors.join(", ")}
          </p>
          <p>
            <span>Genre:</span> {data.genre.join(", ")}
          </p>
          <p>
            <span>IMDb:</span> {data.rating}
          </p>
          <p>{data.description}</p>
        </DescrWrap>
      </Wrap>
    </Layout>
  );
};

export default MovieInfo;

MovieInfo.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    release_date: PropTypes.string,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
    director: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
