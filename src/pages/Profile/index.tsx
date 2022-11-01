/* eslint-disable prettier/prettier */
import React from 'react';
import { Media } from 'react-bootstrap';

// import api from '../../services/api';
import { ContainerInfo, Genres, VoteAverage, Details } from './styles';

const Profile: React.FC = () => {
  return (
    <div className="container">
      <ContainerInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/56551979?v=4"
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
                <p>5.8</p>
              </div>
            </VoteAverage>
          </div>
        </header>
        <hr />
        <Details>
          <h1>Autores</h1>
          <div>
            <Media>
              <img
                width={100}
                height={150}
                className="mr-3"
                src="http://image.tmdb.org/t/p/w154/xawkWKkgbOx5atAMeFDh9rjHGWt.jpg"
                alt="banner"
              />
              <Media.Body>
                <h5>Adam Copeland</h5>
                <p>Jack Reese</p>
              </Media.Body>
            </Media>
          </div>
        </Details>
      </ContainerInfo>
    </div>
  );
};

export default Profile;
