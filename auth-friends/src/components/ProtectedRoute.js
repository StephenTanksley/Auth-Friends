import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getToken } from '../utils/api';

const ProtectedRoute = (props) => {
    const { 
        component: Component,
        ...rest 
        } = props

    return (
        //we use ...rest to pass in the rest of the props that /aren't/ component so we can separate them. You can't use component and render at the same time, so we have to separate them out.
        <Route {...rest} render={(renderProps) => {
        //     //we're asking if the token exists in localStorage. 
        //     getToken() ? 
        //         //if it does, we get our component back.
        //         <Component {...renderProps} />
        //     :
        //         //...if not, we get redirected to sign in.
        //         <Redirect to='/signin' />
        //     }}
        // />

        if (localStorage.getItem('token')) {
            return <Component {...renderProps} />
        } else {
            return <Redirect to='/login' />
        }
    }} />
    
)}

export default ProtectedRoute;