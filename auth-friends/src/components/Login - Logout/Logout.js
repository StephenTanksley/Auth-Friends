import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Logout(props) {
    localStorage.removeItem('token')
    // props.history.push('/login') 
    // ^^^ This will only return us if we refresh the page.
    
    return <Redirect to="/login" />
}