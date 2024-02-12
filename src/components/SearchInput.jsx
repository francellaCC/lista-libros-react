import { useContext, useEffect, useState } from "react";
import "./CSS/SearchInput.css";
import { FilterContext } from "../context/filters";

function SearchInput() {
  const { setFilters } = useContext(FilterContext);
  const [search, updateSearch] = useState("");

  const changeSearchFilter = () => {
    setFilters((prevState) => ({
      ...prevState,
      sortByTitle: search,
    }));
  };

  useEffect(() => {
    changeSearchFilter();
  }, [search]);
  
  const handleChange = (event) => {
    updateSearch(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    changeSearchFilter();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="div_input">
        <input
        className="form_input"
          type="text"
          placeholder="Nombre del libro"
          value={search}
          onChange={handleChange}
        />
      </form>
    </>
  );
}

export default SearchInput;
