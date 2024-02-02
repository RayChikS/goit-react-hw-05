import { useState, useEffect } from 'react';
import { getDataById } from '../fetchArticles';
import { useParams } from 'react-router-dom';

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviewsData, setReviewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        const data = await getDataById(movieId);
        console.log(data);

        if (data && data.reviews && Array.isArray(data.reviews)) {
          setReviewsData(data.reviews);
        } else {
          setReviewsData([]);
        }

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchReviewsData();
  }, [movieId]);

  if (loading) return <div>Loading reviews data...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h3>Movie Reviews</h3>
      <ul>
        {reviewsData.map(review => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
