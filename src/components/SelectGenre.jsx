import { useContext } from "react";
import { FilterContext } from "../context/filters";
import "./CSS/Filter.css";

function SelectGenre() {

  const {setFilters } = useContext(FilterContext);
  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      genre: event.target.value,
    }));
  };
  return (
    <div className="filters_genere">
    <label className="filters_genere_label" htmlFor="category">Filtrar por genero</label>
    <select name="" onChange={handleChangeCategory}>
      <option value="all">Todas</option>
      <option value="Terror">Terror</option>
      <option value="Ciencia ficción">Ciencia ficción</option>
      <option value="Zombies">Zombies</option>
      <option value="Fantasía">Fantasía</option>
    </select>
  </div>
  )
}

export default SelectGenre
