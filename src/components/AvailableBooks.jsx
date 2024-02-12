import "./CSS/AvailableBooks.css";

function AvailableBooks({booksList, handleClick}) {
  
  return (
    <aside className="row">
      {booksList.map((list) => {
        return (
          <div className="columBook" key={list.book.title}>
            <img
              src={list.book.cover}
              alt={list.book.title}
            />
            <h4>{list.book.title}</h4>
            <p>{list.book.author.name}</p>
            <button className='buttom_element' onClick={() => handleClick(list.book)} >Añadir</button>
          </div>
        );
      })}
    </aside>
  );
}

export default AvailableBooks;
