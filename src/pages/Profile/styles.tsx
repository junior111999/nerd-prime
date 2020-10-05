import styled from 'styled-components';

export const ContainerInfo = styled.section`
  margin-top: 150px;
  border: 1px solid #ccc;
  border-radius: 10px;
  z-index: 9999999;

  header {
    margin: 30px;
    display: flex;
    align-items: center;
    img {
      width: 150px;
      height: 200px;
      border-radius: 10%;
    }
    div {
      margin-left: 24px;
      strong {
        font-size: 36px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }
`;

export const Genres = styled.section`
  display: flex;
  margin-left: 0;
  align-items: center;

  p {
    font-size: 24px;
    color: #3d3d4d;
  }
  div {
    width: 60px;
    height: 30px;
    background-color: #cdcdcd;
    border-radius: 5px;

    h3 {
      margin-left: 5px;
      font-size: 20px;
      color: #3d3d4d;
    }
  }
`;

export const VoteAverage = styled.section`
  div {
    width: 50px;
    height: 50px;
    border: 5px solid red;
    border-radius: 100%;

    h3 {
      font-size: 20px;
      color: #3d3d4d;
    }
  }
`;
