import {useForm} from 'react-hook-form'
import axios from 'axios'

export function AddUser({onAdd}) {
    const {register,handleSubmit,formState:{errors},reset} = useForm()

    function handleAdd(data) {
        axios.post('http://localhost:4000/users',data)
        .then(res => {
            onAdd(res.dats)
            reset();
        })
    }
    return (
        <>
            <form className="max-w-md mx-auto p-4 bg-gray-800 rounded shadow-lg" onSubmit={handleSubmit(handleAdd)}>
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                <input
                    type="text"
                    placeholder="Name"
                    {...register('name',{required:'please fill name',})}

                    className="w-full mb-4 px-4 py-2 rounded border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Surname"
                    {...register('Surname',{required:'please fill surname',})}
                    className="w-full mb-4 px-4 py-2 rounded border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Age"
                    {...register('Age',{required:'please fill age',})}
                    className="w-full mb-4 px-4 py-2 rounded border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Salary"
                    {...register('Salary',{required:'please fill salary',})}
                    className="w-full mb-4 px-4 py-2 rounded border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                    Submit
                </button>
            </form>
        </>
    );
}
