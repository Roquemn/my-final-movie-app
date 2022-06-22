import React, { useState } from "react";
import styled from 'styled-components';
import MovieCard from "../components/MovieCard/MovieCard";
import MovieSearch from '../components/MovieSearch/MovieSearch';

const Container = styled.div`
  min-height:920px ;
  position: relative;
  

  
`

const LandingPage = () => {
    
  const [movie, setMovie] = useState("");


  return (
    <Container>
      <MovieSearch setMovie={setMovie} />
      <div>
        {movie && <MovieCard movieData={movie} />}
      </div>
    </Container>
  );
};

export default LandingPage;
