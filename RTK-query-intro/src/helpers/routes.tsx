import { createBrowserRouter } from "react-router-dom"
import { Layout } from "../Layout"
import { Users } from "../features/users/users"
import { AddUser } from "../features/users/addUser"
import { EditUser } from "../features/users/editUser"

export const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Users /> },
      { path: "/add", element: <AddUser /> },
      { path: "/:id", element: <EditUser /> },
    ],
  },
])
