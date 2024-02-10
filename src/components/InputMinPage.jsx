import React, { useContext } from 'react'
import { FilterContext } from '../context/filters';
import "./CSS/Filter.css";

function InputMinPage() {
  const {filters, setFilters } = useContext(FilterContext);
  const handleChangeMinPage = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPage: event.target.value,
    }));
  };
  return (
    <div className="filters_pageMin">
          <label  className='filters-pageMin_label' htmlFor="price">Filtrar por paginas</label>
          <input
            className="slider"
            type="range"
            main="0"
            max="1000"
            onChange={handleChangeMinPage}
          />
          <span>{filters.minPage}</span>
        </div>
  )
}

export default InputMinPage
