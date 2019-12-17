import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  componentDidMount() {
    this.props.onLoad();
  }
  render() {
    return <div></div>;
  }
}
