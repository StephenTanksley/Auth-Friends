import React, {useState} from 'react'

//I'll be moving this call to a util.
import { axiosWithAuth as axios } from '../utils/api'

const Signin = (props) => {
    const [error, setError] = useState()
    const [data, setData] = useState({
        username: '',
        password: '',
        isLoading: false
    })

    //use this to set the state of our application back to blank.
    // const initialState = useState({
    //     username: '',
    //     password: '',
    //     isLoading: false
    // })

    const handleChange = (e) => {
        //making our data immutable by spreading in data first.
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios()
            .post('/login', data)
            .then(response => {
                console.log(response)
                localStorage.setItem('token', response.data.payload)
                props.history.push('/account')
            })
            .catch(err => {
                setError(err)
                console.log(error)
            })
    }
 
    return (
       <form onSubmit={handleSubmit}>
           {/* If there's an error, render a div that shows it. */}
           {error && <div className="error">{error}</div>}

        <input 
            type="text" 
            name="username"
            value={data.username}
            onChange={handleChange}
            placeholder="Username" 
            />

        <input 
            type="current-password"
            // type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Password"
            />

        <button type="submit">
            Sign-In
        </button>
       </form> 
    )
}

export default Signin