import { connect } from 'react-redux';
import App from '../components/App/App';
import { getMovies } from '../api';
import { LOAD_MOVIES, ADD_PAGE_NUMBER } from '../constants/ActionTypes';

const mapStateToProps = state => {
  return {
    movies: state.movies,
    page: state.page
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
    async loadMore(page) {
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
