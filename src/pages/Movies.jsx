import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { SearchBox } from '../components/SearchBox';
import { fetchData } from '../fetchArticles';
import { Loader } from '../components/Loader';
import { ErrorMassage } from '../components/ErrorMassage';

export default function Movies() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const movieName = searchParams.get('query') ?? '';
  const location = useLocation();

  const searchMovies = async query => {
    try {
      setLoading(true);
      const result = await fetchData(query);
      setSearchResults(result.results);
      const nextParams = query !== '' ? { query } : {};
      setSearchParams(nextParams);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBox value={movieName} onSearch={searchMovies} />
      {loading && <Loader />}
      {error && <ErrorMassage />}
      <div>
        {searchResults.map(movie => (
          <Link key={movie.id} to={`${movie.id}`} state={{ from: location }}>
            <li>{movie.title}</li>
          </Link>
        ))}
      </div>
    </>
  );
}
