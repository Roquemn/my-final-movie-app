import React, { useState } from "react";
import styled from 'styled-components';
import axios from 'axios';


const TextField = styled.input`
  background: #ababab;
  border: none;
  border-radius: 2px;
  padding: 10px;
  color: white;
  font-weight: bolder;

` 

const SubmitButton = styled.button`
  background-color: dodgerblue;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 12px;

  &:hover {
    background-color: #054cda;
  }
`


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

  const onSubmit = (e) => {
    e.preventDefault();
    getMoviesByName(movieName);
  };
  
  return (
    <div>
      <form>
        <TextField
          type="text"
          placeholder="Movie Name"
          value={movieName}
          onChange={(e) => setMovieName(e.currentTarget.value)}
        />
        <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
      </form>
    </div>
  );
};

export default MovieSearch;
