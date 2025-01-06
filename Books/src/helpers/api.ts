import axios from "axios";
import { IBook, IBookForm } from "../types";
import { IAuthorForm } from '../types';


const Axios = axios.create({
    baseURL:'http://localhost:4000',
});

export const getAllBooks = async () : Promise<IBook[]> => {
    const response  = await Axios.get('/books');
    return response.data
}

export const addBook = async (data : IBookForm) : Promise<IBook> => {
    const response = await Axios.post('/books',data);
    return response.data
}
//authors

export const addAuthor = async (data : IAuthorForm) : Promise<IAuthorForm> => {
    const response = await Axios.post('/authors',data);
    return response.data
}

export const getBookById = async (id:string): Promise<IBook> => {
    console.log(id)
    const response = await Axios.get('/books/' + id);
    return response.data;
};

export const deleteBook = async (id: string): Promise<void> => {
      await Axios.delete(`/books/${id}`);
  };