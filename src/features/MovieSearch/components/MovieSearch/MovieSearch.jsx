import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 5rem;
  z-index: 40;
`;

const TextField = styled.input`
  border: none;
  border-bottom: 3px solid #ff7d00;
  padding: 10px;
  outline: none;
  color: #f7f5fb;
  font-weight: bolder;

  ::placeholder {
    font-color: #f7f5fb;
    text-align: center;
    opacity: 0.3;
    letter-spacing: 0.1em;
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
  font-weight: 400;
  letter-spacing: 0.1em;
  padding: 0 2rem;

  &:hover {
    background-color: #f7f5fb;
    color: #252422;
  }
`;

const MovieSearch = ({ setMovie }) => {
  const [movieName, setMovieName] = useState("");
  const apiKey = process.env.REACT_APP_API_KEY;

  const getMoviesByName = async (name) => {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${name}`;
    const response = await axios.get(url);
    setMovie(response.data);
  };

  const getMoviesById = async (id) => {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
    const response = await axios.get(url);
    setMovie(response.data);
  };

  const onSearch = (e) => {
    e.preventDefault();
    getMoviesByName(movieName);
  };

  return (
    <SearchContainer>
      <TextField
        type="text"
        placeholder="Movie Name"
        value={movieName}
        onChange={(e) => setMovieName(e.currentTarget.value)}
      />
      <SearchButton onClick={onSearch}>Search</SearchButton>
    </SearchContainer>
  );
};

export default MovieSearch;
