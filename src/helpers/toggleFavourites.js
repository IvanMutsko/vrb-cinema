export default function toggleFavourites(movieId) {
  const favoriteMovies =
    JSON.parse(localStorage.getItem("favoriteMovies")) || [];

  const isMovieInFavorites = favoriteMovies.includes(movieId);

  if (isMovieInFavorites) {
    const updatedFavorites = favoriteMovies.filter((id) => id !== movieId);
    localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
    return;
  }

  favoriteMovies.push(movieId);
  localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
}
