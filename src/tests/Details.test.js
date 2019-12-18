import React from 'react';
import Details from '../components/Details/Details';
import { shallow } from 'enzyme';

describe('<Details />', () => {
  let wrapper;
  const details = {};
  const actors = [];
  const props = {
    match: {
      params: {
        id: ''
      }
    },
    details: details,
    actors: actors,
    onDetailsLoad: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<Details {...props} />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render details when having no details data', function() {
    expect(wrapper.find('.details').exists()).toEqual(false);
  });

  it('should not render actors list when having no actors', function() {
    expect(wrapper.find('.actors').exists()).toEqual(false);
  });
});
