import React, {useState} from 'react'

//I'll be moving this call to a util.
import axios from 'axios'

const Signin = (props) => {
    const [error, setError] = useState()

    const [data, setData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        //making our data immutable by spreading in data first.
        setData({
            ...data,
            [e.target.name] : e.target.value
         })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:5000/api/login', data)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                setError(err.response.data)
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
            type="password"
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