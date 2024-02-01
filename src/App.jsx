import { useState } from "react";
import "./App.css";

import { library as InitialState } from "./data/books.json";
import Books from "./components/Books";

function App() {
  const [libros] = useState(InitialState)
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


  return <Books listaLibros={filterProducts(libros)} setFilters={setFilters}/>;
}

export default App;
