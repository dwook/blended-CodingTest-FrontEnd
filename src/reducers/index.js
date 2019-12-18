import { combineReducers } from 'redux';
import {
  LOAD_MOVIES,
  LOAD_MOVIES_MORE,
  ADD_PAGE_NUMBER,
  GET_MOVIE_DETAILS,
  GET_MOVIE_ACTORS
} from '../constants/ActionTypes';

export const initialState = {
  movies: [],
  page: 1,
  details: {},
  actors: []
};

export function moviesReducers(state = initialState.movies, action) {
  switch (action.type) {
    case LOAD_MOVIES:
      return [...action.data];
    case LOAD_MOVIES_MORE:
      return [...state, ...action.data];
    default:
      return state;
  }
}

export function pageReducers(state = initialState.page, action) {
  switch (action.type) {
    case ADD_PAGE_NUMBER:
      return action.data;
    default:
      return state;
  }
}

export function detailsReducers(state = initialState.details, action) {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return action.data;
    case LOAD_MOVIES:
      return {};
    default:
      return state;
  }
}

export function actorsReducers(state = initialState.details, action) {
  switch (action.type) {
    case GET_MOVIE_ACTORS:
      return action.data;
    case LOAD_MOVIES:
      return [];
    default:
      return state;
  }
}

export default combineReducers({
  movies: moviesReducers,
  page: pageReducers,
  details: detailsReducers,
  actors: actorsReducers
});
