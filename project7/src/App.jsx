import { useEffect, useState } from 'react'
import './App.css'
import { AddUser } from './components/Adduser'
import { UserList } from './components/UserList'
import axios from 'axios';

function App() {
  const [users,setUsers] = useState([]);

  function addUser(user) {
    setUsers([...users,user]);
  }

  useEffect(() => {
    axios.get('http://localhost:4000/users')
    .then(res => {
      setUsers(res.data)
    })
  },[])

  return (
    <>
     <AddUser onAdd={addUser}/>
     <UserList users={users}/>
    </>
  )
}

export default App
