

// crear contexto

import { createContext, useState } from "react";

export const FilterContext = createContext()

// Creacion del provaider 

export function FilterProvaider({children}){

  const [filters, setFilters] = useState({
    genre: "all",
    minPage: 0,
  });

  return(
    <FilterContext.Provider value={{filters, setFilters}}>
      {children}
    </FilterContext.Provider>
  )
}