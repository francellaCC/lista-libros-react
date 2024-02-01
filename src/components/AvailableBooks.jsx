import React from "react";

function AvailableBooks({booksList, handleClick}) {
  return (
    <aside className="row">
      {booksList.map((list) => {
        return (
          <div className="column" key={list.book.title}>
            <img
              onClick={() => handleClick(list.book)}
              src={list.book.cover}
              alt={list.book.title}
            />
          </div>
        );
      })}
    </aside>
  );
}

export default AvailableBooks;
