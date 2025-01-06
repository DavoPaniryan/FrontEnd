import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../helpers/api';
import { IBook } from '../types';

export const Details = () => {
    const { id } = useParams();
    if (!id) throw new Error();
    const [book, setBook] = useState<IBook | null>(null);
    const id2 = id.split(':')[0];

    useEffect(() => {
        getBookById(id2).then((res) => {
            setBook(res);
        });
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 w-screen">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {book?.title}
                </h2>
                <div className="space-y-4">
                    <p className="text-gray-600">
                        <strong>Pages:</strong> {book?.pages}
                    </p>
                    <p className="text-gray-600">
                        <strong>Price:</strong> ${book?.price}
                    </p>
                    <p className="text-gray-600">
                        <strong>Author ID:</strong> {book?.authorId}
                    </p>
                </div>
                <button
                    onClick={() => window.history.back()}
                    className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Go Back
                </button>
            </div>
        </div>
    );
};
