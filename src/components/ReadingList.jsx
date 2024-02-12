import "./CSS/ReadingList.css";

function ReadingList({ listaLectura, deleteBook }) {
  return (
    <div className="readBookContent">
      <h2 className="readBookContent_title">Lista de lectura</h2>
      {listaLectura.length > 0 ? (
        <div>
          <p className="readBookContent_subTitle">
            Cantidad de libros: {listaLectura.length}
          </p>
          <aside className="rowList">
            {listaLectura?.map((listBook) => {
              return (
                <div className="readBookContent_divList" key={listBook.ISBN}>
                  <img src={listBook.cover} alt={listBook.title} />
                  <p>{listBook.title}</p>
                  <button
                    className="readBookContent_button"
                    onClick={() => deleteBook(listBook.title)}
                  >
                    Remover
                  </button>
                </div>
              );
            })}
          </aside>
        </div>
      ) : (
        <div>
          <h3>Aun no tienes libros guardados</h3>
          <p>¿Que esperas para sumergirte en el mundo de la lectura?</p>
        </div>
      )}
    </div>
  );
}

export default ReadingList;
