export const AddUser = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                    Add User
                </h2>
                <form className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter name"
                        />
                    </div>

                    {/* Surname Field */}
                    <div>
                        <label
                            htmlFor="surname"
                            className="block text-sm font-medium text-gray-700 mb-1">
                            Surname
                        </label>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter surname"
                        />
                    </div>

                    {/* Age Field */}
                    <div>
                        <label
                            htmlFor="age"
                            className="block text-sm font-medium text-gray-700 mb-1">
                            Age
                        </label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter age"
                        />
                    </div>

                    {/* Salary Field */}
                    <div>
                        <label
                            htmlFor="salary"
                            className="block text-sm font-medium text-gray-700 mb-1">
                            Salary
                        </label>
                        <input
                            type="number"
                            id="salary"
                            name="salary"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter salary"
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
