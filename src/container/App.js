import { connect } from 'react-redux';
import App from '../components/App/App';
import { getMovies, getMovieDetails, getMovieActors } from '../api';
import {
  LOAD_MOVIES,
  ADD_PAGE_NUMBER,
  GET_MOVIE_DETAILS,
  GET_MOVIE_ACTORS
} from '../constants/ActionTypes';

const mapStateToProps = state => {
  return {
    movies: state.movies,
    page: state.page,
    details: state.details,
    actors: state.actors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    async onLoad() {
      try {
        await getMovies().then(res => {
          dispatch({
            type: LOAD_MOVIES,
            data: res.data.results
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
    async onLoadMore(page) {
      try {
        await getMovies(page).then(res => {
          console.log(res.data);
          dispatch({
            type: LOAD_MOVIES,
            data: res.data.results
          });
          dispatch({
            type: ADD_PAGE_NUMBER,
            data: page
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
    async onDetailsLoad(id) {
      try {
        await getMovieDetails(id).then(res => {
          console.log(res.data);
          dispatch({
            type: GET_MOVIE_DETAILS,
            data: res.data
          });
        });
        await getMovieActors(id).then(res => {
          console.log(res.data);
          dispatch({
            type: GET_MOVIE_ACTORS,
            data: res.data.cast
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
