import "./App.css";
import { library as InitialState } from "./data/books.json";
import Books from "./components/Books";
import { useFilters } from "./hooks/useFilters";
import NavBar from "./components/NavBar";

function App() {
  const {filtersBooks } = useFilters();

  const listaLibros = filtersBooks(InitialState);

  return (
    <>
      <Books listaLibros={listaLibros} />
    </>
  );
}

export default App;
