import React from 'react';
import './Card.scss';
import { BASE_URL_POSTSER } from '../../constants';

function Card({ poster_path, title }) {
  return (
    <div className="card">
      <div className="thumbnail">
        {poster_path ? (
          <img src={BASE_URL_POSTSER + poster_path} alt={title} />
        ) : (
          <p>No Image</p>
        )}
      </div>
      <div className="details">
        <div className="title">{title}</div>
        <div></div>
      </div>
    </div>
  );
}

export default Card;
