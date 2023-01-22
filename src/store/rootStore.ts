import { createStore, combineReducers } from "redux";
import { authorReducer } from "./Author/AuthorReducer";

export const rootReducer = combineReducers({ authorReducer });

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
