import { useState } from "react";
import "./CSS/NavBar.css";
import ReadingList from "./ReadingList";
import { useBooks } from "../hooks/useBooks";

function NavBar({listaLibros}) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    listaLectura,
    deleteBook,
  } = useBooks(listaLibros);
  
  return (
    <div className="navbar">
      <div className={`nav_items ${isOpen && "open"}`}>
        <ReadingList listaLectura={listaLectura} deleteBook={deleteBook}/>
      </div>
      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default NavBar;
