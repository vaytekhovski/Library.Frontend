import "./App.css"; //styled components
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Author from "./pages/Author";
import Header from "./components/Header";
import Book from "./pages/Book";
import AuthorEdit from "./pages/AuthorEdit";

function App() {
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

export default App;
