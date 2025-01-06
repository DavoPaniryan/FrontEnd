import React from 'react';
import Modal from 'react-modal';

interface DeleteBookModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    bookTitle: string;
}

Modal.setAppElement('#root');

export const DeleteBookModal: React.FC<DeleteBookModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    bookTitle,
}) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Delete Book Modal"
            className="bg-white p-6 rounded-lg shadow-lg w-80 mx-auto"
            overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-50">
            <h3 className="text-xl font-semibold mb-4">Confirm Deletion</h3>
            <p>Are you sure you want to delete "{bookTitle}"?</p>
            <div className="mt-4 flex justify-between">
                <button
                    className="bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400"
                    onClick={onClose}>
                    No
                </button>
                <button
                    className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                    onClick={onConfirm}>
                    Yes
                </button>
            </div>
        </Modal>
    );
};

export default DeleteBookModal;
