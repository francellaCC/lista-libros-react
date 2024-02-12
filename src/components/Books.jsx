import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import ReadingList from "./ReadingList";
import AvailableBooks from "./AvailableBooks";
import { useBooks } from "../hooks/useBooks";
import NavBar from "./NavBar";

function Books({ listaLibros}) {
  const {
    booksList,
    listaLectura,
    saveBook,
    deleteBook,
  } = useBooks(listaLibros);

  // Manejador de clic para agregar un libro a listaLectura y quitarlo de booksList
  const handleClick = (book) => {
    saveBook(book);
  };
  return (
    <>
      <NavBar listaLibros={listaLibros} />
      <h1 className="title">
        Unkai <span>Book</span>
      </h1>
      <main className="container">
        <div>
          <h1>{booksList.length} Libros disponibles </h1>
          <Filters/>
          <AvailableBooks handleClick={handleClick} booksList={booksList} />
        </div>
        <ReadingList listaLectura={listaLectura} deleteBook={deleteBook} />
      </main>
    </>
  );
}

export default Books;
