import { useNavigate } from "react-router-dom"
import { useDeleteUserMutation, useGetUsersQuery } from "./usersApiSlice"
import { ToastContainer, toast } from "react-toastify"

export const Users = () => {
  const { data, isLoading, isError } = useGetUsersQuery(null)
  const [deleteUser] = useDeleteUserMutation()
  const navigate = useNavigate()
  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>somthing went wrong</p>
  }
  return (
    data && (
      <div className="max-w-6xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg">
        <ToastContainer />
        <h2 className="text-white text-3xl font-bold mb-6 text-center">
          Users
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map(user => (
            <div
              key={user.id}
              className="p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition"
            >
              <p className="text-lg text-white font-semibold">
                {user.name} {user.surname}
              </p>
              <p className="text-gray-400">{user.salary} USD</p>
              <p className="text-gray-400">{user.age} years old</p>

              {/* Buttons container */}
              <div className="flex gap-2 mt-4">
                <button
                  className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
                  onClick={() => {
                    deleteUser(user.id)
                    toast.success("User was deleted successfuly")
                  }}
                >
                  Delete
                </button>
                <button
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                  onClick={() => navigate("/" + user.id)}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  )
}
