import { useDispatch, useSelector } from "react-redux"
import { remove, salaryUp,salaryDown } from "./users.slice";

export const Users = () => {
    const users = useSelector(state => state.users.list);
    const dispatch = useDispatch()

    
    return <>
        <h3>Users</h3>
        <table >
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>salary</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                    {users.map(user => <tr key={user.id}>
                        <th>{user.id}</th>
                        <th>{user.name}</th>
                        <th>{user.age}</th>
                        <th>{user.salary}</th>
                        <th>
                            <button onClick={() => dispatch(remove(user.id))}>X</button>
                            <button onClick={() => dispatch(salaryUp(user.id))}>Up</button>
                            <button onClick={() => dispatch(salaryDown(user.id))}>Down</button>
                        </th>
                    </tr>)}
            
            </tbody>
        </table>
    </>
}