import { combineReducers } from 'redux';
import { LOAD_LATEST_MOVIES } from '../constants/ActionTypes';

const initialState = {
  latestMovies: []
};

function latestMoviesReducers(state = initialState.latestMovies, action) {
  switch (action.type) {
    case LOAD_LATEST_MOVIES:
      return action.data.slice();
    default:
      return state;
  }
}

export default combineReducers({
  latestMovies: latestMoviesReducers
});
