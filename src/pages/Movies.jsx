import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchBox } from '../components/SearchBox';
import { fetchData } from '../fetchArticles';
import { Loader } from '../components/Loader';
import { ErrorMassage } from '../components/ErrorMassage';

export const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchMovies = async query => {
    try {
      setLoading(true);
      const result = await fetchData(query);
      setSearchResults(result.results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBox onSearch={searchMovies} />
      {loading && <Loader />}
      {error && <ErrorMassage />}
      <div>
        {searchResults.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <li>{movie.title}</li>
          </Link>
        ))}
      </div>
    </>
  );
};
