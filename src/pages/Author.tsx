import React, { Component, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getAuthor } from "../api/authors";
import { getAllBooksByAuthorId } from "../api/books";
import { IAuthor } from "../Interfaces/IAuthor";
import { IBook } from "../Interfaces/IBook";
import { Author as AuthorModel } from "../store/Author/models/Author";
import Button from "../components/Button";

interface Props {
  createAuthor: () => void;
  updateAuthor: () => void;
  deleteAuthor: () => void;
  getAuthor: () => void;
  author: AuthorModel;
}

class Author extends Component {
  render() {
    const { author, createAuthor, updateAuthor, deleteAuthor, getAuthor } = this
      .props as Props;

    return (
      <div>
        <div>{author.id}</div>
        <div>{author.fullName}</div>
        <div>{author.biography}</div>
        <div>
          <Button handleClick={updateAuthor} color="green">
            edit
          </Button>
        </div>
      </div>
    );
  }
}

// function Author() {
//   const { id } = useParams();

//   const [author, setAuthor] = useState<IAuthor>();
//   const [books, setBooks] = useState<IBook[]>();

//   useEffect(() => {
//     if (id) {
//       getAuthor(id).then((author) => setAuthor(author));
//       getAllBooksByAuthorId(id).then((books) => setBooks(books));
//     }
//   }, []);

//   return (
//     <>
//       {author && (
//         <div>
//           <div className="card mb-3">
//             <div className="row g-0">
//               <div className="col-md-4">
//                 <img
//                   src={author.imageURI}
//                   className="card-img-top"
//                   alt={author.fullName}
//                 ></img>
//                 <div className="edit-button-container">
//                   <Link
//                     className="btn btn-outline-secondary"
//                     to={`/edit-author/${author.id}`}
//                   >
//                     Редактировать
//                   </Link>
//                 </div>
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body">
//                   <h5 className="card-title">{author.fullName}</h5>
//                   <p className="card-text" style={{ maxHeight: "max-content" }}>
//                     {author.biography}
//                   </p>
//                   <p className="card-text">
//                     <small className="text-muted">
//                       {new Date(author.dateOfBirth).toDateString()}
//                       {author.dateOfDeath &&
//                         " - " + new Date(author.dateOfDeath).toDateString()}
//                     </small>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <>
//             {books &&
//               books.map((book, index) => {
//                 return (
//                   <div className="col-md-4" key={index}>
//                     <Link to={`/books/${book.id}`}>
//                       <div className="card">
//                         <div className="image-container">
//                           <img
//                             src={book.imageURI}
//                             className="card-img-top"
//                             alt={book.name}
//                           />
//                         </div>
//                         <div className="card-body">
//                           <h5 className="card-title">{book.name}</h5>
//                           <p className="card-text">{book.description}</p>
//                         </div>
//                         <div className="card-footer">
//                           <small className="text-muted">
//                             {new Date(book.creationDate).toDateString()}
//                           </small>
//                         </div>
//                       </div>
//                     </Link>
//                   </div>
//                 );
//               })}
//           </>
//         </div>
//       )}
//     </>
//   );
// }

export default Author;
