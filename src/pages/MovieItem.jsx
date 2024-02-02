import { useParams } from 'react-router-dom';

export const MovieItem = ({ data }) => {
  const { movieId } = useParams();

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
        alt={data.title}
      />
      <h2>{data.title}</h2>
      <p>User Score: {data.vote_average}</p>
      <p>Overview: {data.overview}</p>
      <p>Genres: {data.genres}</p>
    </div>
  );
};
