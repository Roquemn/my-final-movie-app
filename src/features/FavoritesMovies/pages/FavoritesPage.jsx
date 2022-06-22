import { useMovies } from "../../Providers/MoviesProvider";
import styled  from "styled-components";

const ContainerWrapper = styled.div`
  min-height: 920px;
  background: transparent;
  display: grid;
  // justify-items: self-start;
  margin: auto;

`

const Heading = styled.h1`
  padding: 5rem ;
  display: flex;
  flex-direction: row;
  color: #FF7D00;
  font-weight: 300;
  font-size: 2.5rem;
  letter-spacing: .1em;

  @media screen and (max-width:768px) {
    justify-content: center;
  }


`

const MovieGrid = styled.div`
  display: flex;
  place-content: center;
  gap: 2rem;

  @media screen and (max-width:768px) {
    flex-direction: column;
    padding:2rem;
  }
`

const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    border: none;
    border-radius: 5px;
    background-color: #FF7D00;
    padding: .312em;
    font-size: 1.2rem;
    font-weight: 500;

  }

`

const FavoritesPage = () => {
  const { movies, removeMovie } = useMovies();

  return (
    <ContainerWrapper>
      <Heading>Favorites</Heading>
      <MovieGrid>
      {movies.map((movie) => (
        <MovieCard key={movie.Year}>
          
          <div>{movie.Poster}</div>
          <h2>{movie.Title}</h2>
          <span>{movie.Year}</span>
          <span>{movie.Actors}</span>
          <button onClick={() => removeMovie(movie.Title)}>Remove from favorites</button>
        </MovieCard>
      ))}
      </MovieGrid>
    </ContainerWrapper>
  );
};

export default FavoritesPage;

