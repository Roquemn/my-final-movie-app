import React from "react";
import "./styles.css";
import styled from "styled-components";
import { useMovies } from "../../../Providers/MoviesProvider";

const Container = styled.div`
  background-color: rgba(32, 44, 57, 0.5);
  width: 50vw;
  padding: 3rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  // align-items: center;
  margin: 4rem auto;
  place-content: center;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  color: #f7f5fb;
  font-weight: 300;
  font-size: 1.2rem;
  text-align: left;
  letter-spacing: 0.1em;
  gap: 0.625rem;

  span {
    color: #ff7d00;
    font-weight: 400;
    margin: 5rem 0;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }

  button {
    cursor: pointer;
    margin: 0.625rem auto 0 0;
    border: none;
    border-radius: 5px;
    padding: 0.3rem 0.625rem;
    outline: none;
    background-color: #ff7d00;
    font-size: 1rem;
    color: #252422;
    font-weight: 400;

    @media screen and (max-width: 768px) {
      margin: auto 0;
    }

    &:hover {
      background-color: #f7f5fb;
    }
  }
`;


const MovieDetails = (
  { Title, Year, imdbID, Type, Poster, Plot, Actors },
  favorites) => {
  const { addMovie, movies } = useMovies();

  const addMovieWithCheck = (movie) => {
    if (movies.some((m) => m.Title === movie.Title)) {
      return;
    } else {
      addMovie(movie);
    }
  };
  


  return (
    <Container>
      <img src={Poster} alt={`${Title} poster.`} />
      <Content>
        <h1>
          <span>Title:</span> {Title}
        </h1>
        <h2>
          <span>Year:</span> {Year}
        </h2>
        <h2>
          <span>IMBD ID:</span> {imdbID}
        </h2>
        <p>
          <span>Plot:</span> {Plot}
        </p>
        <p>
          <span>Cast:</span> {Actors}
        </p>
        <button onClick={() => addMovieWithCheck({ Title, Year, Actors, Poster })}>
          Add to favorites
        </button>
      </Content>
    </Container>
  );
};

export default MovieDetails;
