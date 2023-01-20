import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBook } from "../api/books";
import { IBook } from "../Interfaces/IBook";

function Author() {
  const { id } = useParams();

  const [book, setBook] = useState<IBook>();

  useEffect(() => {
    if (id) {
      getBook(id).then((book) => setBook(book));
      console.log(book);
    }
  }, [book, id]);

  return (
    <>
      {book && (
        <div>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={book.imageURI}
                  className="card-img-top"
                  alt={book.name}
                ></img>
                <div className="edit-button-container">
                  <button type="button" className="btn btn-outline-secondary">
                    Редактировать
                  </button>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{book.name}</h5>
                  <p className="card-text" style={{ maxHeight: "max-content" }}>
                    {book.description}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      {new Date(book.creationDate).toDateString()}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Author;
