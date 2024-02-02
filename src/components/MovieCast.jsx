import { useState, useEffect } from 'react';
import { getDataById } from '../fetchArticles';
import { useParams } from 'react-router-dom';

export const MovieCast = () => {
  const { movieId } = useParams();
  const [castData, setCastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const data = await getDataById(movieId);
        console.log(data);
        if (data && data.cast && Array.isArray(data.cast)) {
          setCastData(data.cast);
        } else {
          setCastData([]);
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCastData();
  }, [movieId]);

  if (loading) return <div>Loading cast data...</div>;
  if (error) return <div>We don't have any cast for this movie.</div>;

  return (
    <div>
      <h3>Movie Cast</h3>
      <ul>
        {castData.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};
