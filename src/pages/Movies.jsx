import { SearchBox } from '../components/SearchBox';

export const Movies = ({ onSearch }) => {
  return (
    <>
      <SearchBox onSearch={onSearch} />
    </>
  );
};
