import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../../utils/api';
import Friend from './Friend'

import { Container } from '../Styled'

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
        axiosWithAuth()
        .get('/friends')
        .then(res => setFriends(res.data))
        .catch(error => console.log(error))
    }, [])

    return (
        
        <Container className = "friends-list">

            {loading ? (
                <div className="spinner"><p>Loading...</p></div>
            ) : ( null 
            )}
            
            {friends && friends.map(item => {
                return (
                <Friend friend = {item} key = {item.id} />
                )})}
        </Container>
    )
}

export default FriendsList