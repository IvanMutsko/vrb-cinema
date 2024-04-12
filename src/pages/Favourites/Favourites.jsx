import { useState, useEffect } from "react";
import { MoviesList } from "../../components/MovieList/MovieList";
import getDataFromLS from "../../helpers/getDataFromLS";
import { fetchFavouriteMovies } from "../../api/api";
import Loader from "../../components/Loader/Loader";

const Favourites = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setError(false);
        setIsLoading(true);

        const favouritesIDs = await getDataFromLS("favoriteMovies");
        const results = await fetchFavouriteMovies(favouritesIDs);

        if (results.length === 0) {
          setMovies([]);
        } else {
          setMovies(results);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {movies.length === 0 ? <p>You haven not favourites movies</p> : null}
      {error ? <div>An error occurred, please try again later...</div> : null}
      {isLoading ? <Loader /> : <MoviesList movies={movies} />}
    </div>
  );
};

export default Favourites;
