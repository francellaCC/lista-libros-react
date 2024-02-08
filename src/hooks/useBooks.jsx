import { useEffect, useState } from "react";

export const useBooks = (listaLibros) => {
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

  const saveBook = (book) => {
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
  return { booksList, setBookList, listaLectura, setListaLectura, saveBook, deleteBook };
};
