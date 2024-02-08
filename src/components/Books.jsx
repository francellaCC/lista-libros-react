import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import ReadingList from "./ReadingList";
import AvailableBooks from "./AvailableBooks";
import { useBooks } from "../hooks/useBooks";

function Books({ listaLibros, setFilters, filters }) {
  const {
    booksList,
    setBookList,
    listaLectura,
    setListaLectura,
    saveBook,
    deleteBook,
  } = useBooks(listaLibros);

  // Manejador de clic para agregar un libro a listaLectura y quitarlo de booksList
  const handleClick = (book) => {
    saveBook(book);
  };

  // Función para eliminar un libro de listaLectura y agregarlo a booksList si no está presente

  return (
    <main className="container">
      <div>
        <h1>{booksList.length} Libros disponibles </h1>
        <Filters setFilters={setFilters} filters={filters} />
        <AvailableBooks handleClick={handleClick} booksList={booksList} />
      </div>

      {listaLectura.length > 0 && <ReadingList listaLectura={listaLectura} deleteBook={deleteBook}/>}
    </main>
  );
}

export default Books;
