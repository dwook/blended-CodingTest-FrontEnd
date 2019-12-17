import { connect } from 'react-redux';
import App from '../components/App/App';
import { getLatestMovies } from '../api';
import { LOAD_LATEST_MOVIES } from '../constants/ActionTypes';

const mapStateToProps = state => {
  return {
    latestMovies: state.latestMovies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    async onLoad() {
      try {
        await getLatestMovies().then(res => {
          console.log(res.data);
          dispatch({
            type: LOAD_LATEST_MOVIES,
            data: res.data.results
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
