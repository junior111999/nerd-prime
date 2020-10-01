import React from 'react';

import NavBar from '../../components/NavBar'

import CardMovie from '../../components/CardMovie';

import { Background } from './styles';
// import { Container, Row, Col } from 'react-bootstrap';

// import api from '../../services/api';

// import { } from './styles';

const Movie: React.FC = () => {
  return (
      <>
      <Background>
        <NavBar></NavBar>
        <CardMovie></CardMovie>
      </Background>
      
      </>
  );
};

export default Movie;
