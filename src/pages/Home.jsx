// Home.jsx
import { useState, useEffect } from 'react';
import { fetchPopular } from '../fetchArticles';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchPopular();
        setData(result.results);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {data.map(item => (
        <Link key={item.id} to={`/movies/${item.id}`}>
          <li>{item.title}</li>
        </Link>
      ))}
    </div>
  );
};
