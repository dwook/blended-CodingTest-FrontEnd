import React from 'react';
import Card from '../components/Card/Card';
import { shallow } from 'enzyme';

describe('<Card />', () => {
  let wrapper1;
  let wrapper2;
  const movie_with_poster = {
    adult: false,
    backdrop_path: '/6vKPprzJPUSDW3IyJiZ2RyrpChY.jpg',
    belongs_to_collection: null,
    budget: 0,
    genres: [
      {
        id: 28,
        name: 'Action'
      },
      {
        id: 35,
        name: 'Comedy'
      },
      {
        id: 10751,
        name: 'Family'
      }
    ],
    homepage: '',
    id: 656216,
    imdb_id: 'tt9149946',
    original_language: 'en',
    original_title: 'Bernie the Dolphin 2',
    overview:
      "The kids are thrilled that Bernie has come back. But so has their old enemy Winston, who's about to kidnap the talented dolphin. Kevin and Holly must rescue their splashy friend before it's too late.",
    popularity: 0,
    poster_path: '/r0U3mBQEOJ6kKpxZ0F8WFfjCldK.jpg',
    production_companies: [],
    production_countries: [],
    release_date: '2019-12-17',
    revenue: 0,
    runtime: 99,
    spoken_languages: [],
    status: 'Released',
    tagline: '',
    title: 'Bernie the Dolphin 2',
    video: false,
    vote_average: 6,
    vote_count: 1
  };

  const movie_without_poster = {
    adult: false,
    backdrop_path: '/6vKPprzJPUSDW3IyJiZ2RyrpChY.jpg',
    belongs_to_collection: null,
    budget: 0,
    genres: [
      {
        id: 28,
        name: 'Action'
      },
      {
        id: 35,
        name: 'Comedy'
      },
      {
        id: 10751,
        name: 'Family'
      }
    ],
    homepage: '',
    id: 656216,
    imdb_id: 'tt9149946',
    original_language: 'en',
    original_title: 'Bernie the Dolphin 2',
    overview:
      "The kids are thrilled that Bernie has come back. But so has their old enemy Winston, who's about to kidnap the talented dolphin. Kevin and Holly must rescue their splashy friend before it's too late.",
    popularity: 0,
    poster_path: null,
    production_companies: [],
    production_countries: [],
    release_date: '2019-12-17',
    revenue: 0,
    runtime: 99,
    spoken_languages: [],
    status: 'Released',
    tagline: '',
    title: 'Bernie the Dolphin 2',
    video: false,
    vote_average: 6,
    vote_count: 1
  };

  beforeEach(() => {
    wrapper1 = shallow(<Card {...movie_with_poster} />);
    wrapper2 = shallow(<Card {...movie_without_poster} />);
  });

  it('matches snapshot', () => {
    expect(wrapper1).toMatchSnapshot();
  });

  it('must have title', function() {
    expect(
      wrapper1.contains(<div className="title">Bernie the Dolphin 2</div>)
    ).toBe(true);
  });

  it('must show an image if it has a poster path', function() {
    expect(wrapper1.find('img')).toHaveLength(1);
  });

  it('must show no image text if it does not have a poster path', function() {
    expect(wrapper2.contains(<p>No Image</p>)).toBe(true);
  });
});
