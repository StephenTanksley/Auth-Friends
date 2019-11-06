import React from 'react'

const Friend = (props) => {
    console.log(props)

    return (
        <div className = "friend-card">
            <h4>{props.friend.name}</h4>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    )

}

export default Friend