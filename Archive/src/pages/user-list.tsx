import { useEffect, useState } from 'react';
import { IUser } from '../helpers/types';
import { deleteUser, getAllUsers } from '../helpers/api';
import { Link } from 'react-router-dom';

export const UserList = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getAllUsers().then((res) => {
            setUsers(res);
            console.log(res);
        });
    }, []);

    const handleDelete = (id: number) => {
        deleteUser(id).then(() => {
            setUsers(users.filter((user) => user.id !== id));
        });
    };
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">User List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                        <div className="flex justify-center items-center w-16 h-16 bg-blue-500 text-white font-bold rounded-full text-xl mb-4">
                            {user.name[0].toUpperCase()}
                            {user.surname[0].toUpperCase()}
                        </div>
                        <div className="text-center">
                            <h2 className="text-lg font-bold text-gray-800">
                                {user.name} {user.surname}
                            </h2>
                            <p className="text-gray-600">Age: {user.age}</p>
                            <p className="text-gray-600">
                                Salary: ${user.salary.toLocaleString()}
                            </p>
                        </div>
                        <Link to={'/user/edit/' + user.id}>Edit</Link>
                        <Link to={'/user/details/' + user.id}>Details</Link>
                        <button
                            className="text-red-500"
                            onClick={() => handleDelete(user.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
