import React from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import List from '../components/List/List';
import { mount } from 'enzyme';

describe('<List />', () => {
  let wrapper;
  const movies = [
    {
      poster_path: null,
      adult: false,
      overview:
        'Go behind the scenes during One Directions sell out "Take Me Home" tour and experience life on the road.',
      release_date: '2013-08-30',
      genre_ids: [99, 10402],
      id: 164558,
      original_title: 'One Direction: This Is Us',
      original_language: 'en',
      title: 'One Direction: This Is Us',
      backdrop_path: null,
      popularity: 1.166982,
      vote_count: 55,
      video: false,
      vote_average: 8.45
    },
    {
      poster_path: null,
      adult: false,
      overview: '',
      release_date: '1954-06-22',
      genre_ids: [80, 18],
      id: 654,
      original_title: 'On the Waterfront',
      original_language: 'en',
      title: 'On the Waterfront',
      backdrop_path: null,
      popularity: 1.07031,
      vote_count: 51,
      video: false,
      vote_average: 8.19
    }
  ];
  const props = {
    movies: movies,
    page: 1,
    onLoad: jest.fn(),
    onLoadMore: jest.fn()
  };
  const history = createBrowserHistory();

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('simulates scroll event', () => {
    const map = {};
    window.addEventListener = jest.fn((event, callback) => {
      map[event] = callback;
    });

    wrapper = mount(
      <Router history={history}>
        <List {...props} />
      </Router>
    );
    map.scroll();
  });
});
