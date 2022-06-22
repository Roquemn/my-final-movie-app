import { useMovies } from "../../Providers/MoviesProvider";

const FavoritesPage = () => {
  const { movies, removeMovie } = useMovies();

  return (
    <div>
      <h1>Favorites</h1>
      {movies.map((movie) => (
        <div key={movie.Year}>
          <div>{movie.Poster}</div>
          <h2>{movie.Title}</h2>
          <span>{movie.Year}</span>
          <span>{movie.Actors}</span>
          <button onClick={() => removeMovie(movie.Title)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;

