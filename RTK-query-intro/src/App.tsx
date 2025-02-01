import { AddUser } from "./features/users/addUser"
import { Users } from "./features/users/users"

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex justify-around gap-9">
        <AddUser />
        <Users />
      </div>
    </div>
  )
}

export default App
