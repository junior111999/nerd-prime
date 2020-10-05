import React from 'react';

import { Card, Button } from 'react-bootstrap';

// import api from '../../services/api';

import { ContainerInfo, Genres, VoteAverage } from './styles';

const Profile: React.FC = () => {
  return (
    <div className="container">
      <ContainerInfo>
        <header>
          <img
            src="https://image.tmdb.org/t/p/w1280/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"
            alt="banner"
          />
          <div>
            <strong>Money Plane</strong>
            <p>
              Um ladrão profissional com dívidas de 40 milhões de dólares deve
              cometer um último golpe - roubar um cassino aéreo futurista cheio
              dos criminosos mais perigosos do mundo.
            </p>
            <Genres>
              <p>Genero:</p>
              <div>
                <h3>Ação</h3>
              </div>
            </Genres>
            <VoteAverage>
              <div>
                <h3>5.8</h3>
              </div>
            </VoteAverage>
          </div>
        </header>
      </ContainerInfo>
    </div>
  );
};

export default Profile;
