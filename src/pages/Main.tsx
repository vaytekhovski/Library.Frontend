import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllAuthors } from "../api/authors";
import { IAuthor } from "../Interfaces/IAuthor";
// import axios from "axios";

const Main = () => {
  const [authors, setAuthors] = useState<IAuthor[]>();

  useEffect(() => {
    getAllAuthors().then((authors) => authors && setAuthors(authors));
  }, []);

  return (
    <>
      {authors &&
        authors.map((author, index) => {
          return (
            <div className="col-md-4" key={index}>
              <Link to={`/author/${author.id}`}>
                <div className="card">
                  <div className="image-container">
                    <img
                      src={author.imageURI}
                      className="card-img-top"
                      alt={author.fullName}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{author.fullName}</h5>
                    <p className="card-text">{author.biography}</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      {new Date(author.dateOfBirth).toDateString()}
                    </small>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </>
  );
};

export default Main;
