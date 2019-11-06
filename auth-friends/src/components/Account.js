import React, {useEffect, useState} from 'react'
import {axiosWithAuth} from '../utils/api'

const Account = (props) => {
    const [friends, setFriends] = useState({
        age: null,
        email: '',
        id: null,
        name: ''
    })


useEffect(() => {
    axiosWithAuth().get('/friends')
    .then(response => {
        const result = response.data
        setFriends({
            age: result.age,
            email: result.email,
            id: result.id,
            name: result.name
        })
        console.log(friends)
    })
    
    .catch(error => {
        console.log(error)
    })

}, [])

    return (
        <>
        <h1>My Account</h1>

        {/* <div className="account-row">Name: {user.name}</div> */}
        {/* <div className="account-row">Email: {user.email}</div> */}

        <div className="account-row">Name: Something</div>
        <div className="account-row">Email: Here</div>

        </>
    )
}

export default Account