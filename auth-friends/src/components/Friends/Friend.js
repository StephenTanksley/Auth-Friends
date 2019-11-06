import React, {useState} from 'react'
import { Container, Card } from '../Styled';

const Friend = (props) => {
    console.log(props)
    //I'll use this to make it more CRUD functional.
    // const [editing, setEditing] = useState(false)


    return (
        <Card className="friend-card">
            <h4>{props.friend.name}</h4>
                <p>Age: {props.friend.age}</p>
                <p>Email: {props.friend.email}</p>

                <Container>
                    <button className = "button">Edit</button>
                    <button className = "button">Delete</button>
                </Container>
        </Card>
    )
}

export default Friend