import { MovieItem } from '../components/MovieItem';

export const Home = data => {
  return (
    <div>
      <MovieItem data={data} />
    </div>
  );
};
