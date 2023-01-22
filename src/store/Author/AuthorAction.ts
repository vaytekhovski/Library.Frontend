import {
  CREATE_AUTHOR,
  UPDATE_AUTHOR,
  DELETE_AUTHOR,
  GET_AUTHOR,
  GET_ALL_AUTHORS,
} from "./models/actions";

import { Author } from "./models/Author";

export const createAuthor = () => ({
  type: CREATE_AUTHOR,
});

export const updateAuthor = () => ({
  type: UPDATE_AUTHOR,
});

export const deleteAuthor = () => ({
  type: DELETE_AUTHOR,
});

export const getAuthor = () => ({
  type: GET_AUTHOR,
});

export const getAllAuthors = () => ({
  type: GET_ALL_AUTHORS,
});
