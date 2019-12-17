import React, { Component } from 'react';
import Card from '../Card/Card';
import throttle from 'lodash/throttle';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = throttle(this.handleScroll.bind(this), 1000);
  }
  componentDidMount() {
    this.props.onLoad();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 200
    ) {
      this.props.loadMore(this.props.page + 1);
    }
  }
  render() {
    const { movies } = this.props;
    return (
      <div className="wrapper">
        <div className="list-card">
          {movies.map(movie => (
            <Card key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    );
  }
}
