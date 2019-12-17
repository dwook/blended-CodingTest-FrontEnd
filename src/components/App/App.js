import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import List from '../List/List';
import Details from '../Details/Details';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/movies" />} />
          <Route
            path="/movies/:id"
            render={routeProps => (
              <Details
                {...routeProps}
                details={this.props.details}
                actors={this.props.actors}
                onDetailsLoad={this.props.onDetailsLoad}
              />
            )}
          />
          <Route
            path="/movies"
            render={() => (
              <List
                movies={this.props.movies}
                page={this.props.page}
                onLoad={this.props.onLoad}
                onLoadMore={this.props.onLoadMore}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
