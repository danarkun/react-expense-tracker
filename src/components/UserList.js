import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { User } from './User';

export const UserList = () => {
    const { userList } = useContext(GlobalContext);

    // foreach user is state.users, create a new user element and pass in the user
    return (
        <>
            <h3>Users</h3>
            <ul id="userList" className="list">
                {userList.map(user => (<User key={user.id} user={user} isList={true}/>))}
            </ul>
        </>
    )
}
