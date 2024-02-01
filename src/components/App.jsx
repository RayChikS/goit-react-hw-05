import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import { Layout } from './Layout';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { NotFound } from '../pages/NotFound';
import { fetchData } from '../fetchArticles';

export const App = () => {
  const searchArticles = async query => {
    try {
      const data = await fetchData(query);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      //
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies onSearch={searchArticles} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
