import { useState } from "react";

export const useFilters = () => {
  const [filters, setFilters] = useState({
    genre: "all",
    minPage: 0,
  });

  const filtersBooks = (libros) => {
    return libros.filter((libro) => {
      return (
        libro.book.pages >= filters.minPage && 
        (filters.genre === "all" || libro.book.genre === filters.genre)
      );
    });
  };

  return{filters,setFilters,filtersBooks}

};
