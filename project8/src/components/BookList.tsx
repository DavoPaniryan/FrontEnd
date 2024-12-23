import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../context/context';
import { Book } from './Book';
import { Types } from '../types';
import {  getAllBooks } from '../context/api';
import { AddBookModal } from './AddBookModal';

export const BookList: React.FC = () => {
    const context = useContext(BookContext);
    if (!context) throw new Error();
    const { state, dispatch } = context;

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        getAllBooks().then((res) => {
            dispatch({ type: Types.SET_BOOKS, payload: res });
        });
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4 bg-gray-100 rounded-md shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">
                📖 Phone Book
            </h1>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4">
                Add Contact
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {state.books.map((book) => (
                    <Book book={book} key={book.id} />
                ))}
            </div>
            {isModalOpen && (
                <AddBookModal onClose={() => setIsModalOpen(false)} />
            )}
        </div>
    );
};
