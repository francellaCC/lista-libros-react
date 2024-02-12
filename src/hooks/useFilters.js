import { useContext } from "react";
import { FilterContext } from "../context/filters";

export const useFilters = () => {
 
  const {filters, setFilters} = useContext(FilterContext)

  const filtersBooks = (libros) => {
    return libros.filter((libro) => {
      
      return (
        libro.book.title.includes(filters.sortByTitle) &&
        libro.book.pages >= filters.minPage &&
        (filters.genre === "all" || libro.book.genre === filters.genre)
      );
    });
  };

  return { filters, setFilters, filtersBooks };
};
