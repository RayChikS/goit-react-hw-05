import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { getDataById } from '../fetchArticles';
import { BackLink } from '../components/BackLink';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const data = await getDataById(movieId);
        setMovieData(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieData();
  }, [movieId]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BackLink to="/movies">Back to movies</BackLink>
      <div className={css.detailsContent}>
        <div className={css.imageContent}>
          <img
            className={css.image}
            src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
            alt={movieData.title}
          />
        </div>
        <div className={css.textContent}>
          <h2 className={css.title}>{movieData.title}</h2>

          <h3>User Score:</h3>
          <p className={css.score}>{movieData.vote_average}</p>

          <h3>Overview:</h3>
          <p className={css.overview}>{movieData.overview}</p>

          <h3>Genres:</h3>
          {movieData.genres && (
            <p>{movieData.genres.map(genre => genre.name).join(', ')}</p>
          )}
        </div>
      </div>
      <h3 className={css.addInfo}>Additional information</h3>
      <ul className={css.details}>
        <li>
          <Link to={`cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`reviews`}>Reviews</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};
