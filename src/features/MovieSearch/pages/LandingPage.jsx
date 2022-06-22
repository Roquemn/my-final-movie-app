import React, { useState } from "react";
import styled from 'styled-components';
import MovieCard from "../components/MovieCard/MovieCard";
import MovieSearch from '../components/MovieSearch/MovieSearch';

const Container = styled.div`
  text-align: center;
  padding: 2
  

  
`

const LandingPage = () => {
    
  const [movie, setMovie] = useState("");


  return (
    <Container>
      <h1>Welcome to my movie app!</h1>
      <MovieSearch setMovie={setMovie} />
      <div>
        {movie && <MovieCard movieData={movie} />}
      </div>
    </Container>
  );
};

export default LandingPage;
