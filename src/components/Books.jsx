import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import ReadingList from "./ReadingList";
import AvailableBooks from "./AvailableBooks";

function Books({ listaLibros, setFilters, filters }) {
  // Estado para almacenar la lista de libros disponibles
  const [booksList, setBookList] = useState([]);

  // Estado para almacenar la lista de lectura desde el localStorage
  const [listaLectura, setListaLectura] = useState(() => {
    const bookFromStorage = window.localStorage.getItem("listaLectura");
    return JSON.parse(bookFromStorage) ?? [];
  });

  // Efecto para actualizar booksList cuando listaLibros cambia
  useEffect(() => {
    setBookList(listaLibros);
  }, [listaLibros]);

  // Efecto para almacenar listaLectura en localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem("listaLectura", JSON.stringify(listaLectura));
  }, [listaLectura]);

  // Manejador de clic para agregar un libro a listaLectura y quitarlo de booksList
  const handleClick = (book) => {
    setListaLectura((prevLista) => [...prevLista, book]);

    // Filtra el libro seleccionado de la lista de libros disponibles
    const updatedBooksList = booksList.filter(
      (item) => item.book.title !== book.title
    );

    // Actualiza el estado booksList con el nuevo array filtrado
    setBookList(updatedBooksList);
  };

  // Función para eliminar un libro de listaLectura y agregarlo a booksList si no está presente
  const deleteBook = (title) => {
    // Busca el libro en listaLectura
    const book = listaLectura.find((item) => item.title === title);

    // Verifica si el libro ya está en booksList
    const isBook = booksList.find((item) => item.book.title === book.title);

    // Si no está en booksList, agrégalo
    if (!isBook) {
      setBookList((prevBooksList) => [...prevBooksList, { book }]);
    }

    // Filtra el libro eliminado de listaLectura
    const updatedListaLectura = listaLectura.filter(
      (item) => item.title !== title
    );

    // Actualiza el estado listaLectura después de setBookList
    setListaLectura(updatedListaLectura);
  };
  return (
    <main className="container">
      <div>

        <h1>{booksList.length} Libros disponibles </h1>
        <Filters setFilters={setFilters} filters={filters} />
        <AvailableBooks handleClick={handleClick} booksList={booksList}/>
      </div>

      {listaLectura.length > 0 && (
        <ReadingList deleteBook={deleteBook} listaLectura={listaLectura}/>
      )}
    </main>
  );
}

export default Books;
