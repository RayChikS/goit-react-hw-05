import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import { Layout } from './Layout';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { NotFound } from '../pages/NotFound';
import { fetchData } from '../fetchArticles';
import { Loader } from './Loader';
import { ErrorMassage } from './ErrorMassage';

export const App = () => {
  const [articles, setArticles] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const searchArticles = async query => {
    try {
      setLoader(true);
      const result = await fetchData(query);
      console.log(result);
      setArticles(result);
    } catch (error) {
      setError(true);
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home data={articles} />} />
          <Route path="movies" element={<Movies onSearch={searchArticles} />} />
          <Route
            path="movies/:movieId"
            element={<Movies onSearch={searchArticles} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {loader && <Loader />}
      {error && <ErrorMassage />}
    </>
  );
};
