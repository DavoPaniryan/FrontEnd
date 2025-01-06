import { useForm, SubmitHandler } from 'react-hook-form';
import { addBook } from '../helpers/api';
import { IBookForm } from '../types';
import { useNavigate } from 'react-router-dom';

export const AddBook = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IBookForm>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IBookForm> = (data) => {
        reset();
        addBook(data);
        navigate('/');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 w-screen">
            <div className="bg-white shadow-md rounded-lg p-8">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Add a New Book
                </h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {/* Title */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Title
                        </label>
                        <input
                            {...register('title', {
                                required: 'Title is required',
                                minLength: {
                                    value: 3,
                                    message:
                                        'Title must be at least 3 characters',
                                },
                            })}
                            className="w-full p-3 border rounded-md"
                        />
                        {errors.title && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.title.message}
                            </p>
                        )}
                    </div>

                    {/* Pages */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Pages
                        </label>
                        <input
                            type="number"
                            {...register('pages', {
                                required: 'Pages are required',
                                min: {
                                    value: 1,
                                    message: 'Must be at least 1 page',
                                },
                            })}
                            className="w-full p-3 border rounded-md"
                        />
                        {errors.pages && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.pages.message}
                            </p>
                        )}
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Price ($)
                        </label>
                        <input
                            type="number"
                            step="10"
                            {...register('price', {
                                required: 'Price is required',
                                min: {
                                    value: 0.1,
                                    message: 'Price must be at least $0.1',
                                },
                            })}
                            className="w-full p-3 border rounded-md"
                        />
                        {errors.price && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.price.message}
                            </p>
                        )}
                    </div>

                    {/* Author ID */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Author ID
                        </label>
                        <input
                            type="number"
                            {...register('authorId', {
                                required: 'Author ID is required',
                                min: {
                                    value: 1,
                                    message: 'Author ID must be at least 1',
                                },
                            })}
                            className="w-full p-3 border rounded-md"
                        />
                        {errors.authorId && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.authorId.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
                            Add Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
