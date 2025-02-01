import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export interface IUser {
    id: number,
    name : string
    surname : string
    age : string
    salary : string
}

export const userApi = createApi({
    reducerPath : 'users',
    tagTypes : ['users',],
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:4002/users'}),
    endpoints : builder  => ({
        getUsers : builder.query<IUser[],null>({
            query: () => '/',
            providesTags : ['users']
        }),
        addUser : builder.mutation<IUser,IUser>({
            query : (user : IUser) => ({
                url : '/',
                method : 'POST',
                body : user
            }),
            invalidatesTags : ['users'],
        }),
        getUserById : builder.query<IUser,string>({
            query : (id) => '/' + id,
        }),
        editUser : builder.mutation<IUser,IUser>({
            query : (user : IUser) => ({
                url : '/' + user.id,
                method : 'PATCH',
                body : user
            }),
            invalidatesTags : ['users']
        }),
        deleteUser : builder.mutation({
            query: (id : number) => ({
                url : '/' + id,
                method : 'DELETE',
            }),
            invalidatesTags : ['users']
        })
    }),
})

export const {useGetUsersQuery,useAddUserMutation,useGetUserByIdQuery,useEditUserMutation,useDeleteUserMutation} = userApi