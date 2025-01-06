import { useForm, SubmitHandler } from 'react-hook-form';
import { IAuthorForm } from '../types';
import { addAuthor } from '../helpers/api';
import { useNavigate } from 'react-router-dom';

export const AddAuthor = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IAuthorForm>();

    const onSubmit: SubmitHandler<IAuthorForm> = (data) => {
        reset();
        addAuthor(data);
        navigate('/');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 w-screen">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Add a New Author
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Name
                        </label>
                        <input
                            {...register('name', {
                                required: 'Name is required',
                                minLength: {
                                    value: 2,
                                    message:
                                        'Name must be at least 2 characters',
                                },
                            })}
                            className="w-full p-3 border rounded-md"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Surname */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Surname
                        </label>
                        <input
                            {...register('surname', {
                                required: 'Surname is required',
                                minLength: {
                                    value: 2,
                                    message:
                                        'Surname must be at least 2 characters',
                                },
                            })}
                            className="w-full p-3 border rounded-md"
                        />
                        {errors.surname && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.surname.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
                            Add Author
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
