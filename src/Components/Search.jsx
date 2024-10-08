import PropTypes from 'prop-types';

const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h2>Pesquisar:</h2>
      <input
        id="search-input"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite para Pesquisar"
        aria-label="Pesquisar tarefas"
      />
    </div>
  );
};

Search.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Search;
