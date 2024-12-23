import React from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { BookContext } from '../context/context';
import { InputProps, Types } from '../types';
import { addBook } from '../context/api';

interface ModalProps {
    onClose: () => void;
}

export const AddBookModal: React.FC<ModalProps> = ({ onClose }) => {
    const { register, handleSubmit, reset } = useForm<InputProps>();
    const context = useContext(BookContext);
    if (!context) throw new Error();
    const { dispatch } = context;

    const onSubmit = (data: InputProps) => {
        addBook(data).then((res) => {
            dispatch({
                type: Types.ADD_BOOK,
                payload: { ...res },
            });
            reset();
            onClose();
        });
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-md shadow-md w-96">
                <h2 className="text-xl font-bold mb-4 text-center">
                    Add New Contact
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input
                        {...register('name', { required: true })}
                        placeholder="Name"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <input
                        {...register('number', { required: true })}
                        placeholder="Phone Number"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
