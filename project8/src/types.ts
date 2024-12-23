import { Dispatch } from "react";

export interface IBook {
    id: string;
    number: number;
    name: string;
}

export interface IState {
    books: IBook[];
}

export enum Types {
    SET_BOOKS = 'SET_BOOKS',
    ADD_BOOK = 'ADD_BOOK',
    DELETE_BOOK = 'DELETE_BOOK'
}

export interface IAction {
    type: Types;
    payload: unknown;
  }
export interface IContext {
    state: IState;
    dispatch: Dispatch<IAction>;
}

export interface InputProps {
    name: string,
    number : string
}
