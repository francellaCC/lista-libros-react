import { useState } from "react";
import "./App.css";

import { library as InitialState } from "./data/books.json";
import Filters from "./components/Filters";
import Books from "./components/Books";

function App() {
  const [filters, setFilters] = useState({
    genre: "all",
    minPage: 0,
  });

  const filterProducts = (libros) => {
    return libros.filter((libro) => {
      return (
        libro.book.pages >= filters.minPage &&
        (filters.genre === "all" || libro.book.genre === filters.genre)
      );
    });
  };

  const listaLibros = filterProducts(InitialState);



  return (
    <>
    <h1>Unkai <span>Book</span></h1>
    <Books listaLibros={listaLibros} setFilters={setFilters} filters={filters}/>
    </>
  );
}

export default App;
