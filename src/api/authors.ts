import axios from "axios";
import { IAuthor } from "../Interfaces/IAuthor";

const authorsURI = "/api/authors";

export const getAllAuthors = async () => {
  try {
    const result = await axios.get(authorsURI);
    return result.data as IAuthor[];
  } catch (e) {
    console.log(e);
  }
};

export const getAuthor = async (id: string) => {
  try {
    const result = await axios.get(`${authorsURI}/${id}`);
    return result.data as IAuthor;
  } catch (e) {
    console.log(e);
  }
};

export const deleteAuthor = async (id: string) => {
  try {
    await axios.delete(`${authorsURI}/${id}`);
  } catch (e) {
    console.log(e);
  }
};
