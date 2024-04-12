import { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fetchMovieById, updateMovieById } from "../../api/api";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import Loader from "../../components/Loader/Loader";
import Form from "../../components/Form/Form";
import { BackLink } from "./MovieDetails.styled";

const MoviePage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [currentMovie, setCurrentMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const backLinkHref = useRef(location.state?.from ?? "/");

  const updateFilm = async (data) => {
    try {
      await updateMovieById(movieId, data);

      setCurrentMovie(data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    const fetchMovie = async (movieId) => {
      try {
        setError(false);
        setIsLoading(true);

        const fetchedMovie = await fetchMovieById(movieId);

        setCurrentMovie(fetchedMovie);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie(movieId);
  }, [movieId, setCurrentMovie]);

  return (
    <>
      <BackLink to={backLinkHref.current}>Go back</BackLink>

      {error ? <div>An error occurred, please try again later...</div> : null}

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <MovieInfo data={currentMovie} />
          <Form initialData={currentMovie} editFn={updateFilm} />
        </>
      )}
    </>
  );
};

export default MoviePage;
