import React, { useEffect, useState } from "react";
import Filters from "./Filters";

function Books({ listaLibros , setFilters}) {

  const [booksList, setBookList] = useState(listaLibros);
 
  const [listaLectura, setListaLectura] = useState( ()=>{const bookFromStorage = window.localStorage.getItem('listaLectura');
  return JSON.parse(bookFromStorage) ?? []} );

  useEffect(()=>{
      localStorage.setItem('listaLectura', JSON.stringify(listaLectura))
  },[listaLectura])

  const handleClick = (book) => {
    setListaLectura((prevLista) => [...prevLista, book]);

    const updatedBooksList = booksList.filter(
      (item) => item.book.title !== book.title
    );

    // Actualiza el estado booksList con el nuevo array filtrado
    setBookList(updatedBooksList);
  };

  const deleteBook = (title) => {
    const book = listaLectura.find((item) => item.title === title);
    // Agrega el libro nuevamente a booksList
    setBookList((prevBooksList) => [...prevBooksList, { book }]);

    // Actualiza el estado listaLectura con el nuevo array filtrado
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

        <Filters setFilters={setFilters} />
        <aside className="row">
          {booksList.map((list) => {
            return (
              <div className="column">
                <img
                  onClick={() => handleClick(list.book)}
                  src={list.book.cover}
                  alt={list.book.title}
                />
              </div>
            );
          })}
        </aside>
      </div>

      {listaLectura.length > 0 && (
        <div className="readBookList">
          <h2>Lista de lectura</h2>
          <aside className="row">
            {listaLectura?.map((listBook) => {
              return (
                <div className="column">
                  <img src={listBook.cover} alt={listBook.title} />
                  <button onClick={() => deleteBook(listBook.title)}>X</button>
                </div>
              );
            })}
          </aside>
        </div>
      )}
    </main>
  );
}

export default Books;
