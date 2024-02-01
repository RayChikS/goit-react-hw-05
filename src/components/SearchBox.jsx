export const SearchBox = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSearch(e.target.elements.query.value);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" />
      <button>Search</button>
    </form>
  );
};
