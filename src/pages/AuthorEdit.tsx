import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getAuthor } from "../api/authors";
import { IAuthor } from "../Interfaces/IAuthor";

function AuthorEdit() {
  const { id } = useParams();

  const [author, setAuthor] = useState<IAuthor>();

  useEffect(() => {
    if (id) {
      getAuthor(id).then((author) => setAuthor(author));
    }
  }, [id]);

  useEffect(() => {
    console.log("author is edited!");
  }, [author]);

  const onChangeDateOfDeath = (e: React.FormEvent<HTMLInputElement>): void => {
    // setAuthor((prev) => ({
    //   ...prev,
    //   //   dateOfDeath: new Date(e.currentTarget.value),
    // }));
    //   setAuthor((prev) => ({ ...prev }));
    //не получается обновить стейт нормально
  };

  return (
    <>
      {author && (
        <div>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={author.imageURI}
                  className="card-img-top"
                  alt={author.fullName}
                ></img>
                <div className="edit-button-container">
                  <span>
                    <button type="button" className="btn btn-outline-success">
                      Сохранить
                    </button>
                    <button type="button" className="btn btn-outline-danger">
                      Удалить
                    </button>
                  </span>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{author.fullName}</h5>
                  <p className="card-text" style={{ maxHeight: "max-content" }}>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={20}
                    >
                      {author.biography}
                    </textarea>
                  </p>
                  <div className="card-text">
                    <input
                      type="date"
                      value={new Date(author.dateOfDeath).toDateString()}
                      onChange={onChangeDateOfDeath}
                    />
                    {/* <small className="text-muted">
                      {new Date(author.dateOfBirth).toDateString()}
                      {author.dateOfDeath &&
                        " - " + new Date(author.dateOfDeath).toDateString()}
                    </small> */}
                    {/*                                       
                     <input className="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                                  <input className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AuthorEdit;
