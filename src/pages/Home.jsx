import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUser } from '../features/userSlice';

const Home = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState()
    const [emial, setEmial] = useState()
    const [newName, setNewName] = useState()
    const users = useSelector(state => state.users.value)
    console.log(users)

  return (
    <div style={{display:'grid', placeContent: 'center', gap:'0px'}}>
        <div>
            <input placeholder='Frank' type="text" name="name" id="" onChange={(e) => setName(e.target.value)} />
            <input placeholder='frank@gmail.com' type="email" name="email" id="" onChange={(e) => setEmial(e.target.value)}/>
            <button onClick={() => dispatch(addUser({id: Number(users.length) + 1, name, emial}))}>Add User</button>
            <h4>Total number of users {users.length}</h4>
        </div>
        {users.map(user => {
            return (
                <div>
                    <h1>{user.name}</h1>
                    <h1>{user.emial}</h1>
                    <input placeholder='New Name' type="text" name="name" id="" onChange={(e) => setNewName(e.target.value)} />
                    <button onClick={() => dispatch(updateUser({id: user.id, name:newName}))}>Update User</button>
                    <button onClick={() => dispatch(deleteUser({id: user.id}))}>Delete User</button>

                </div>
            )
        })}
    </div>
  )
}

export default Home