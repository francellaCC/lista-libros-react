import React from "react";

function ReadingList({ listaLectura, deleteBook }) {
  return (
    <div className="readBookList">
      <h2>{listaLectura.length} Lista de lectura</h2>
      <aside className="row">
        {listaLectura?.map((listBook) => {
          return (
            <div className="column" key={listBook.title}>
              <img src={listBook.cover} alt={listBook.title} />
              <button onClick={() => deleteBook(listBook.title)}>X</button>
            </div>
          );
        })}
      </aside>
    </div>
  );
}

export default ReadingList;
