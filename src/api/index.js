import axios from 'axios';
import { API_KEY } from '../constants';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovies = page => {
  return axios.get('/discover/movie', {
    params: {
      api_key: API_KEY,
      page,
      sort_by: 'primary_release_date.desc',
      'primary_release_date.lte': new Date()
    }
  });
};

export const getMovieDetails = id => {
  return axios.get(`/movie/${id}`, {
    params: {
      api_key: API_KEY
    }
  });
};

export const getMovieActors = id => {
  return axios.get(`/movie/${id}/credits`, {
    params: {
      api_key: API_KEY
    }
  });
};
