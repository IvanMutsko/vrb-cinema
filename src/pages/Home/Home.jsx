import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { MoviesList } from "../../components/MovieList/MovieList";
import { Searchbar } from "../../components/Searchbar/Searchbar";
import { fetchAllMovies } from "../../api/api";
import Loader from "../../components/Loader/Loader";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const query = searchParams.get("query") ?? "";

      try {
        setError(false);
        setIsLoading(true);

        const results = await fetchAllMovies();

        if (results.length === 0) {
          setSearchedMovies([]);
        } else {
          const filteredMovies = results.filter(({ title }) =>
            title.toLowerCase().includes(query.toLowerCase())
          );

          setSearchedMovies(filteredMovies);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [searchParams]);

  return (
    <div>
      <Hero>
        <Searchbar onSubmit={(query) => setSearchParams({ query })} />
      </Hero>
      {error ? <p>An error occurred, please try again later...</p> : null}
      {searchedMovies.length ? null : <p>Movies not found</p>}
      {isLoading ? <Loader /> : <MoviesList movies={searchedMovies} />}
    </div>
  );
};

export default Home;
