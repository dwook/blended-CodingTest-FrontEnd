import axios from 'axios';
import { API_KEY } from '../constants';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getLatestMovies = () => {
  return axios.get('/movie/popular', {
    params: {
      api_key: API_KEY
    }
  });
};
