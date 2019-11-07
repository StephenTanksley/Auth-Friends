import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../../utils/api';

//import components
import Friend from './Friend'
import FriendForm from './FriendForm';

//import styles
import { Container } from '../Styled'

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    // const [loading, setLoading] = useState(true)

    useEffect(() => {
        // setLoading(false)
        axiosWithAuth()
        .get('/friends')
        .then(response => setFriends(response.data))
        .catch(error => console.log(error))
    }, [])



    return (
    <div>
        <FriendForm setFriends={setFriends}/>
        <Container className = "friends-list">
            {/* Would like to implement a spinner while the component is loading. */}
            {/* {loading ? (
                <div className="spinner"><p>Loading...</p></div>
                ) : ( null 
                    )} */}
            
            {friends && friends.map(item => {
                return (
                    <Friend friend = {item} key = {item.id} />
                    )})}
        </Container>
    </div>
    )
}

export default FriendsList