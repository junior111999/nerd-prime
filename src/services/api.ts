import axios from 'axios';

const API_KEY = '7e726a6fab6acefcaae69a9da9a2b75e';
const API_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: `${API_URL}`,
});

const request = async (endpoint: any) => {
  const req = await api.get(endpoint);
  return req;
};

export default {
  getMoviesList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await request(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'top',
        title: 'Em Alta',
        items: await request(
          `/discover/movie?sort_by=popularity.desc&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await request(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await request(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await request(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await request(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await request(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
    ];
  },
};
