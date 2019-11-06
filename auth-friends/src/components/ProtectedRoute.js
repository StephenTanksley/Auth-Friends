import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = (props) => {
    const { 
        component: Component,
        ...rest 
        } = props
    return (
        //we use ...rest to pass in the rest of the props that /aren't/ component so we can separate them. You can't use component and render at the same time, so we have to separate them out.
        <Route {...rest} render={(renderProps) => {
            //we're asking if the token exists in localStorage. 
            if (localStorage.getItem('token')) {
                //if it does, we get our component back.
                return <Component {...renderProps} />
            } else {
                //...if not, we get redirected to sign in.
                return <Redirect to='/signin' />
            }
        }} />
    )
}

export default ProtectedRoute;