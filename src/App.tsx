import "./App.css"; //styled components
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Author from "./pages/Author";
import Header from "./components/Header";
import Book from "./pages/Book";
import AuthorEdit from "./pages/AuthorEdit";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState } from "./store/rootStore";
import {
  createAuthor,
  updateAuthor,
  deleteAuthor,
  getAuthor,
  getAllAuthors,
} from "./store/Author/AuthorAction";
import { IAppProps } from "./Interfaces/IAppProps";

const mapSateToProps = (state: AppState) => ({
  author: state.authorReducer.id,
});

const mapDispatchToProps = (dispatch: Dispatch): IAppProps => ({
  createAuthor: () => dispatch(createAuthor()),
  updateAuthor: () => dispatch(updateAuthor()),
  deleteAuthor: () => dispatch(deleteAuthor()),
  getAuthor: () => dispatch(getAuthor()),
  getAllAuthors: () => dispatch(getAllAuthors()),
});

class App {
  render(): JSX.Element {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <div className="main-content">
            <Routes>
              {/* <Route path="*" element={<Navigate to="/authors" />} /> */}
              <Route path="/authors" element={<Main />} />
              <Route path="/author/:id" element={<Author />} />
              <Route path="/edit-author/:id" element={<AuthorEdit />} />
              <Route path="/books" element={<Book />} />
              <Route path="/books/:id" element={<Book />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(mapSateToProps, mapDispatchToProps)(App);
