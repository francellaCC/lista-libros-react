import "./CSS/Filter.css";
import SearchInput from "./SearchInput";

function Filters({ filters, setFilters }) {
  const handleChangeMinPage = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPage: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      genre: event.target.value,
    }));
  };

  return (
    <>
      {/* <SearchInput /> */}
      <section className="filters">
        <div>
          <label htmlFor="price">Filtrar por paginas</label>
          <input
            className="slider"
            type="range"
            main="0"
            max="1000"
            onChange={handleChangeMinPage}
          />
          <span>{filters.minPage}</span>
        </div>

        <div>
          <label htmlFor="category">Filtrar por genero</label>
          <select name="" onChange={handleChangeCategory}>
            <option value="all">Todas</option>
            <option value="Terror">Terror</option>
            <option value="Ciencia ficción">Ciencia ficción</option>
            <option value="Zombies">Zombies</option>
            <option value="Fantasía">Fantasía</option>
          </select>
        </div>
      </section>
    </>
  );
}

export default Filters;
