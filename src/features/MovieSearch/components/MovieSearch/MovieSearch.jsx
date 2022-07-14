import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const SearchContainer = styled.div`
  display: flex;
  place-content: center;
  gap: 2rem;
  margin-top: 5rem;
  z-index: 40;
  

  @media screen and (max-width: 820px) {
    margin-top: 2rem;
  }
`;

const TextField = styled.input`
  background: transparent;
  border: none;
  border-bottom: 3px solid #ff7d00;
  padding: .625rem 15rem;
  outline: none;
  color: #f7f5fb;
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
  letter-spacing: .1em;

  @media screen and (max-width: 820px) {
    padding: .625rem 4.25rem;
  }

  ::placeholder {
    color: #f7f5fb;
    text-align: center;
    opacity: 0.6;
    letter-spacing: .1em;
    font-size: 1.2rem;
    font-weight: 300;
  }
`;

const SearchButton = styled.button`
  background-color: #ff7d00;
  border: none;
  border-radius: 5px;
  color: #f7f5fb;
  cursor: pointer;
  font-family: "Oswald", sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  padding: 0 3rem;

  @media screen and (max-width: 820px) {
    padding: 0 1.5rem;
    font-size: 1.2rem;
  }

  &:hover {
    background-color: #f7f5fb;
    color: #252422;
  }
`;

const MovieSearch = ({ setMovie }) => {
  const [movieName, setMovieName] = useState("");
  const apiKey = "af87555"

  //af87555 api key

  // process.env.REACT_APP_API_KEY;

  const getMoviesByName = async (name) => {
    const url = `//www.omdbapi.com/?apikey=${apiKey}&t=${name}`;
    const response = await axios.get(url);
    setMovie(response.data);
  };

  

  // const getMoviesById = async (id) => {
  //   const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
  //   const response = await axios.get(url);
  //   setMovie(response.data);
  // };

  const onSearch = (e) => {
    e.preventDefault();
    getMoviesByName(movieName);
  };


  return (
    <SearchContainer>
      
      <TextField
        type="text"
        placeholder="Search Movie Name"
        value={movieName}
        onChange={(e) => setMovieName(e.currentTarget.value)}
      />
      <SearchButton onClick={onSearch}>Search</SearchButton>
    </SearchContainer>
  );
};

export default MovieSearch;
