import { useNavigate, useParams } from "react-router-dom"
import {
  IUser,
  useEditUserMutation,
  useGetUserByIdQuery,
} from "./usersApiSlice"
import { useForm } from "react-hook-form"
import { useEffect } from "react"

export const EditUser = () => {
  const { id } = useParams()
  if (!id) return <p>Loading</p>
  const { data, isError, isLoading } = useGetUserByIdQuery(id)
  const [editUser] = useEditUserMutation()
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<IUser>()
  const navigate = useNavigate()

  const handleEdit = (user: IUser) => {
    if (data?.id) {
      user.id = data?.id
    }
    editUser(user)
    navigate("/")
    reset()
  }

  useEffect(() => {
    reset({
      name: data?.name,
      age: data?.age,
      surname: data?.surname,
      salary: data?.salary,
    })
  }, [data])

  if (isError) {
    return <p>Something went wrong</p>
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="max-w-lg mx-auto bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-white text-3xl font-bold mb-6 text-center">
        Add User
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit(handleEdit)}>
        {errors.name && <p className="text-red-400">{errors.name.message}</p>}
        <input
          {...register("name", { required: "please fill space name" })}
          type="text"
          placeholder="Name"
          className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.surname && (
          <p className="text-red-400">{errors.surname.message}</p>
        )}
        <input
          {...register("surname", { required: "please fill space surname" })}
          type="text"
          placeholder="Surname"
          className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.age && <p className="text-red-400">{errors.age.message}</p>}
        <input
          {...register("age", { required: "please fill space age" })}
          type="number"
          placeholder="Age"
          className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.salary && (
          <p className="text-red-400">{errors.salary.message}</p>
        )}
        <input
          {...register("salary", { required: "please fill space salary" })}
          type="number"
          placeholder="Salary"
          className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300">
          Save
        </button>
      </form>
    </div>
  )
}
