import axios from 'axios';
import { API_KEY } from '../constants';
import dotenv from 'dotenv';
dotenv.config();
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovies = page => {
  return axios.get('/discover/movie', {
    params: {
      api_key: REACT_APP_API_KEY,
      page,
      sort_by: 'primary_release_date.desc',
      'primary_release_date.lte': new Date()
    }
  });
};

export const getMovieDetails = id => {
  return axios.get(`/movie/${id}`, {
    params: {
      api_key: REACT_APP_API_KEY
    }
  });
};

export const getMovieActors = id => {
  return axios.get(`/movie/${id}/credits`, {
    params: {
      api_key: REACT_APP_API_KEY
    }
  });
};
