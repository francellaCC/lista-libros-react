import { useState } from "react";
import "./App.css";

import { library as InitialState } from "./data/books.json";
import Filters from "./components/Filters";
import Books from "./components/Books";
import { useFilters } from "./hooks/useFilters";

function App() {
  const {filters,setFilters,filtersBooks} = useFilters()

  const listaLibros = filtersBooks(InitialState);
console.log(listaLibros)


  return (
    <>
    <h1>Unkai <span>Book</span></h1>
    <Books listaLibros={listaLibros} setFilters={setFilters} filters={filters}/>
    </>
  );
}

export default App;
