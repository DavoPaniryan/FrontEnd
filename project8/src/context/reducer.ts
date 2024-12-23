import { IAction, IBook, IState, Types } from "../types";

export const Reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case Types.SET_BOOKS:
            return {
                ...state,
                books: action.payload as IBook[]
            };
        case Types.ADD_BOOK:
            return {
                ...state,
                books: [...state.books, action.payload as IBook], 
            };
        case Types.DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter(book => book.id !== action.payload), 
            };
        default:
            return state;
    }
};
