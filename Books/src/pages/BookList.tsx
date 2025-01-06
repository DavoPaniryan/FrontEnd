import { useEffect, useState } from 'react';
import { IBook } from '../types';
import { getAllBooks, deleteBook } from '../helpers/api';
import { useNavigate } from 'react-router-dom';
import DeleteBookModal from '../helpers/DeleteBookModal';

export const BookList = () => {
    const [books, setBooks] = useState<IBook[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bookToDelete, setBookToDelete] = useState<IBook | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        getAllBooks().then((res) => {
            setBooks(res);
        });
    }, []);

    const openDeleteModal = (book: IBook) => {
        setBookToDelete(book);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setBookToDelete(null);
    };

    const handleDeleteConfirm = async () => {
        if (bookToDelete) {
            await deleteBook(bookToDelete.id);
            setBooks(books.filter((book) => book.id !== bookToDelete.id));
        }
        closeModal();
    };

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-full">
                {books.map((book) => (
                    <div
                        key={book.id}
                        className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            {book.title}
                        </h2>
                        <p className="text-gray-600 mb-1">
                            <strong>Pages:</strong> {book.pages}
                        </p>
                        <p className="text-gray-600 mb-1">
                            <strong>Price:</strong> ${book.price}
                        </p>
                        <p className="text-gray-600">
                            <strong>Author ID:</strong> {book.authorId}
                        </p>
                        <button
                            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            onClick={() => {
                                navigate('/details/' + book.id);
                            }}>
                            View Details
                        </button>
                        <button
                            className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
                            onClick={() => openDeleteModal(book)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>

            {bookToDelete && (
                <DeleteBookModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onConfirm={handleDeleteConfirm}
                    bookTitle={bookToDelete.title}
                />
            )}
        </div>
    );
};
