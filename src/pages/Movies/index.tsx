import React, { useEffect, useState } from 'react';

import NavBar from '../../components/NavBar';
import CardMovie from '../../components/CardMovie';
import { Background } from './styles';

import api from '../../services/api';

const Movies: React.FC = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    function loadMovies() {
      const list = await api.getMoviesList();
      setMovies(list);
    }
    loadMovies();
  });

  return (
    <Background>
      <NavBar />
      {movies.map((item) => (
        <h1>${item}</h1>
      ))}
      <CardMovie />
    </Background>
  );
};

export default Movies;
