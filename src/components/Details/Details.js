import React, { Component } from 'react';
import { BASE_URL_POSTSER, BASE_URL_PROFILE } from '../../constants';
import './Details.scss';

export default class Details extends Component {
  componentDidMount() {
    this.props.onDetailsLoad(this.props.match.params.id);
  }
  render() {
    const {
      poster_path,
      title,
      overview,
      genres,
      release_date,
      vote_average
    } = this.props.details;
    const { actors } = this.props;
    console.log(this.props.details);
    return (
      Object.keys(this.props.details).length !== 0 && (
        <div className="details">
          <div className="thumbnail">
            {poster_path ? (
              <img src={BASE_URL_POSTSER + poster_path} alt={title} />
            ) : (
              <div className="default">No Image</div>
            )}
            <div className="title">{title}</div>
            <div className="genres">
              {genres.map(item => (
                <span key={item.id}>{item.name}</span>
              ))}
            </div>
          </div>
          <div className="info">
            <div className="release_date row">{release_date}</div>
            <div className="ratings row">
              <span>Ratings</span>
              {vote_average}
            </div>
            {overview && (
              <div className="overview row">
                <p className="title">Overview</p>
                {overview}
              </div>
            )}
            {Object.keys(actors).length !== 0 && (
              <div className="actors row">
                <p className="title">Actors</p>
                <div className="list-people">
                  {actors.map(item => (
                    <div className="person" key={item.id}>
                      <div className="thumbnail">
                        {item.profile_path ? (
                          <img
                            src={BASE_URL_PROFILE + item.profile_path}
                            alt={item.name}
                          />
                        ) : (
                          <p>No Image</p>
                        )}
                      </div>
                      <div className="name"> {item.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )
    );
  }
}
