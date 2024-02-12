

// crear contexto

import { createContext, useState } from "react";

export const FilterContext = createContext()

// Creacion del provaider 

export function FilterProvider({children}){

  const [filters, setFilters] = useState({
    genre: "all",
    minPage: 0,
    sortByTitle: "",
  });

  return(
    <FilterContext.Provider value={{filters, setFilters}}>
      {children}
    </FilterContext.Provider>
  )
}