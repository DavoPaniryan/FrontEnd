import React, { useContext } from 'react';
import { IBook, Types } from '../types';
import { BookContext } from '../context/context';
import { deleteBook } from '../context/api';

interface BookProps {
    book: IBook;
}

export const Book: React.FC<BookProps> = ({ book: { id, number, name } }) => {
    const context = useContext(BookContext);
    if (!context) throw new Error();
    const { dispatch } = context;

    const handleDelete = (id: string) => {
        deleteBook(id).then(() => {
            dispatch({ type: Types.DELETE_BOOK, payload: id });
        });
    };
    return (
        <div
            id={id}
            className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-100 to-blue-200 border border-gray-300 rounded-md shadow-md">
            <div>
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <h4 className="text-lg font-semibold text-gray-800">
                    {number}
                </h4>
            </div>
            <button
                onClick={() => handleDelete(id)}
                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">
                🗑️ Delete
            </button>
        </div>
    );
};
