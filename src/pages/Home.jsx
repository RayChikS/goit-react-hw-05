// Home.jsx
import React, { useState, useEffect } from 'react';
import { fetchPopular } from '../fetchArticles';
import { MovieItem } from '../pages/MovieItem';

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
      {data.map(item => (
        <MovieItem key={item.id} data={item} />
      ))}
    </div>
  );
};
