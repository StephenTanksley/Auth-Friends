import React, {useState} from 'react'

import { axiosWithAuth } from '../../utils/api';

const FriendForm = () => {
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    })
    
    const initialState = {
        name: '',
        age: '',
        email: ''
    }

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/friends', newFriend)
        .then(response => setNewFriend({
            ...newFriend,
            initialState}))
        .catch(error => console.log(error))
    }

    return (
        <div className="friend-form">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={newFriend.name}
                    onChange={handleChange}
                    />

                <input
                    type="text"
                    name="age"
                    placeholder="age"
                    value={newFriend.age}
                    onChange={handleChange}
                    />
                    
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={newFriend.email}
                    onChange={handleChange}
                    />
                <button type="submit">Add New Friend</button>
            </form>
        </div>
    )
}

export default FriendForm;