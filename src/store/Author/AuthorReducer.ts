import {
  AuthorActionTypes,
  CREATE_AUTHOR,
  UPDATE_AUTHOR,
  DELETE_AUTHOR,
  GET_AUTHOR,
} from "./models/actions";
import { Author } from "./models/Author";
import { Action, Reducer } from "redux";

const defaultState: Author = {
  id: "0",
  fullName: "fullName",
  biography: "biography",
  imageURI: "https://pusat.edu.np/wp-content/uploads/2022/09/default-image.jpg",
  dateOfBirth: new Date(),
  dateOfDeath: new Date(),
};

export const authorReducer: Reducer<Author, Action> = (
  state = defaultState,
  action: AuthorActionTypes
) => {
  const nextSate: Author = { ...state };

  switch (action.type) {
    case CREATE_AUTHOR:
      //   nextSate
      return state;
    case UPDATE_AUTHOR:
      return state;
    case DELETE_AUTHOR:
      return state;
    case GET_AUTHOR:
      return state;
    default:
      return state;
  }
};
