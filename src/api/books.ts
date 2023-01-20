import axios from "axios";
import { IBook } from "../Interfaces/IBook";

const booksURI = "/api/books";

export const getAllBooks = async () => {
  try {
    const result = await axios.get(booksURI);
    return result.data as IBook[];
  } catch (e) {
    console.log(e);
  }
};

export const getAllBooksByAuthorId = async (authorId: string) => {
  try {
    const result = await axios.get(`${booksURI}/author/${authorId}`);
    return result.data as IBook[];
  } catch (e) {
    console.log(e);
  }
};

export const getBook = async (id: string) => {
  try {
    const result = await axios.get(`${booksURI}/${id}`);
    return result.data as IBook;
  } catch (e) {
    console.log(e);
  }
};

export const deleteBook = async (id: string) => {
  try {
    await axios.delete(`${booksURI}/${id}`);
  } catch (e) {
    console.log(e);
  }
};
