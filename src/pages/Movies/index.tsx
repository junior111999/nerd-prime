import React, { useEffect, useState } from 'react';

import NavBar from '../../components/NavBar';

import CardMovie from '../../components/CardMovie';

import { Background } from './styles';
// import { Container, Row, Col } from 'react-bootstrap';

import api from '../../services/api';
// import { } from './styles';

const Movies: React.FC = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const loadMovies = async () => {
      const list = await api.getMoviesList();
      console.log(list);
      // setMovies(list);
    };
    loadMovies();
  });
  return (
    <>
      <Background>
        <NavBar />
        {movies.map((item) => (
          <h1>${item}</h1>
        ))}
        <CardMovie />
      </Background>
    </>
  );
};

export default Movies;
