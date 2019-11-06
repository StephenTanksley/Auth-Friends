import React from 'react'
import { Card } from '../Styled';

const Friend = (props) => {
    console.log(props)

    return (
        <Card className="friend-card">
            <h4>{props.friend.name}</h4>
                <p>Age: {props.friend.age}</p>
                <p>Email: {props.friend.email}</p>
        </Card>
    )

}

export default Friend