import "./App.css";
import { library as InitialState } from "./data/books.json";
import Books from "./components/Books";
import { useFilters } from "./hooks/useFilters";

function App() {
  const { filters, setFilters, filtersBooks } = useFilters();

  const listaLibros = filtersBooks(InitialState);

  return (
    <>
      <h1 className="title">
        Unkai <span>Book</span>
      </h1>
      <Books
        listaLibros={listaLibros}
        setFilters={setFilters}
        filters={filters}
      />
    </>
  );
}

export default App;
