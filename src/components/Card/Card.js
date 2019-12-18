import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';
import { BASE_URL_POSTSER } from '../../constants';

function Card({ poster_path, title, id }) {
  return (
    <div className="card">
      <Link to={`/movies/${id}`}>
        <div className="thumbnail">
          {poster_path ? (
            <img
              src={BASE_URL_POSTSER + poster_path}
              alt={title}
            />
          ) : (
            <p>No Image</p>
          )}
        </div>
        <div className="info">
          <div className="title">{title}</div>
          <div></div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
