import { useMovies } from "../../Providers/MoviesProvider";
import styled from "styled-components";
import React, {useEffect} from "react";

const ContainerWrapper = styled.div`
  min-height: 100vh;
  background: transparent;
  margin: auto;
`;

const Heading = styled.h1`
  display: flex;
  text-align: center;
  border-bottom: 3px solid #ff7d00;
  color: #ff7d00;
  font-weight: 300;
  font-size: 2.5rem;
  margin: 3rem 5rem;
  padding-left: 2rem;
  letter-spacing: 0.1em;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const MovieGrid = styled.div`
  display: flex;
  place-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

const MovieCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;
  background: rgba(32, 44, 57, 0.5);
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 3px 3px 10px #202c39;

  button {
    border: none;
    border-radius: 5px;
    background-color: #ff7d00;
    padding: 0.312em;
    font-size: 1.2rem;
    font-weight: 400;

    &:hover {
      background-color: #dc3f2f;
      cursor: pointer;
    }
  }

  h2 {
    color: #f7f5fb;
    font-weight: 400;
    letter-spacing: 0.05em;
  }

  span {
    color: #f7f5fb;
    font-weight: 300;
  }
`;


const FavoritesPage = () => {
  const { movies, removeMovie } = useMovies();

  

  useEffect (() => {
    localStorage.setItem ('movies', JSON.stringify(movies))
  });

  return (
    <ContainerWrapper>
      <Heading>Favorites</Heading>
      <MovieGrid>
        {movies.map((movie) => (
          <MovieCard key={movie.Year}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />

            {/* <div>{movie.Poster}</div> */}

            <h2>{movie.Title}</h2>
            <span>{movie.Year}</span>
            <span>{movie.Actors}</span>
            <button onClick={() => removeMovie(movie.Title)}>
              Remove from favorites
            </button>
          </MovieCard>
        ))}
      </MovieGrid>
    </ContainerWrapper>
  );
};

export default FavoritesPage;
