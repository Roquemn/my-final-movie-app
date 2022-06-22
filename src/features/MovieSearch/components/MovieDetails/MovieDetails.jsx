import React from "react";
import "./styles.css";
import styled from "styled-components";
import { useMovies } from "../../../Providers/MoviesProvider";

const Container = styled.div`
  background-color: rgba(32, 44, 57, .5);
  width: 50vw;
  padding: 3rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  // align-items: center;
  margin: 4rem auto;
  place-content: center;
  border-radius: 5px;
  transition: opacity
  
  @media screen and (max-width:768px) {
    flex-direction: column;
  }
`;

const Content = styled.section`
  text-align: left;
  display: flex;
  flex-direction: column;
  color: #F7F5FB;
  font-weight: 300;
  font-size: 1.2rem;
  letter-spacing: .1em;
  gap: .625rem;



  span {
    color: #FF7D00;
    font-weight: 400;
    margin: 5rem 0;

  }


  button {
    cursor: pointer;
    margin: .625rem auto 0 0;
    border: none;
    border-radius: 5px;
    padding: .3rem .625rem;
    outline: none;
    background-color: #FF7D00;
    font-size: 1rem;
    color: #252422;
    font-weight: 500;

    @media screen and (max-width: 768px) {
      margin: auto 0;
    }
  }

  
`;

const MovieDetails = ({ Title, Year, imdbID, Type, Poster, Plot, Actors }, favorites) => {
  const { addMovie, movies } = useMovies();


  const addMovieWithCheck = (movie) => {
    if (movies.some((m) => m.Title === movie.Title)) {
      return;
    } else {
    }
    addMovie(movie);
  };

  return (
    <Container>
      <img src={Poster} alt={`${Title} poster.`} />
      <Content>
        <h1><span>Title:</span> {Title}</h1>
        <h2><span>Year:</span>  {Year}</h2>
        <h2><span>IMBD ID:</span> {imdbID}</h2>
        <p><span>Plot:</span> {Plot}</p>
        <p><span>Cast:</span> {Actors}</p>
        <button onClick={() => addMovieWithCheck({ Title, Year, Actors })}>
          Add to favorites
        </button>
      </Content>
    </Container>
  );
};

export default MovieDetails;