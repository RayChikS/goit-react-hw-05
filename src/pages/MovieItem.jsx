// MovieItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const MovieItem = ({ data, detailedView }) => {
  return (
    <div>
      {detailedView ? (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt={data.title}
          />
          <h2>{data.title}</h2>
          <p>User Score: {data.vote_average}</p>
          <p>Overview: {data.overview}</p>
          <p>Genres: {data.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      ) : (
        <li>
          <Link to={`/movies/${data.id}`}>{data.title}</Link>
        </li>
      )}
    </div>
  );
};
