export const CREATE_AUTHOR = "CREATE_AUTHOR";
export const UPDATE_AUTHOR = "UPDATE_AUTHOR";
export const DELETE_AUTHOR = "DELETE_AUTHOR";
export const GET_AUTHOR = "GET_AUTHOR";
export const GET_ALL_AUTHORS = "GET_ALL_AUTHORS";

interface CreateAuthorAction {
  type: typeof CREATE_AUTHOR;
}

interface UpdateAuthorAction {
  type: typeof UPDATE_AUTHOR;
}

interface DeleteAuthorAction {
  type: typeof DELETE_AUTHOR;
}

interface GetAuthorAction {
  type: typeof GET_AUTHOR;
}

interface GetAllAuthors {
  type: typeof GET_ALL_AUTHORS;
}

export type AuthorActionTypes =
  | CreateAuthorAction
  | UpdateAuthorAction
  | DeleteAuthorAction
  | GetAuthorAction
  | GetAllAuthors;
