import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../../utils/api';
import Friend from './Friend'

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('/friends')
        .then(res => setFriends(res.data))
        .catch(error => console.log(error))
    }, [])

    return (
        <div className = "friends-list">
            {friends && friends.map(item => {
                return (
                <Friend friend = {item} key = {item.id} />
                )})}
        </div>
    )
}

export default FriendsList