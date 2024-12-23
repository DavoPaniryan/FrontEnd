import axios from "axios";
import { IBook, InputProps } from "../types";

const Axios = axios.create({baseURL: 'http://localhost:4000'})

export const getAllBooks = async () : Promise<IBook[]> => {
    const response = await Axios.get('/books');
    return response.data;
}

export const deleteBook = async(id : string) : Promise<IBook> => {
    const response = await Axios.delete('/books/' + id);
    return response.data;
}

export const addBook = async (data : InputProps) : Promise<IBook> =>{
    const response = await Axios.post('/books',data);
    return response.data
}