import { combineReducers } from 'redux';
import { LOAD_MOVIES, ADD_PAGE_NUMBER } from '../constants/ActionTypes';

const initialState = {
  movies: [],
  page: 1
};

function moviesReducers(state = initialState.movies, action) {
  switch (action.type) {
    case LOAD_MOVIES:
      return [...state, ...action.data];
    default:
      return state;
  }
}

function pageReducers(state = initialState.page, action) {
  switch (action.type) {
    case ADD_PAGE_NUMBER:
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  movies: moviesReducers,
  page: pageReducers
});
