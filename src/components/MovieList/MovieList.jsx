import PropTypes from "prop-types";

import { Movies } from "./MovieList.styled";
import { deleteMovieById } from "../../api/api";
import MovieCard from "../MovieCard/MovieCard";
import { useState } from "react";

export const MoviesList = ({ movies }) => {
  const [newMovies, setNewMovies] = useState(movies);

  const deleteFilm = async (id) => {
    const response = await deleteMovieById(id);

    if (response.status === 200) {
      const newList = newMovies.filter(
        (movie) => movie.id !== response.data.id
      );
      setNewMovies(newList);
    }
  };

  return (
    <Movies>
      {newMovies.map((movie) => (
        <MovieCard key={movie.id} data={movie} deleteFn={deleteFilm} />
      ))}
    </Movies>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
