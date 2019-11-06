import React, {useEffect, useState} from 'react'

import FriendsList from './Friends/FriendsList';

const Dashboard = () => {


    return (
        <>
        <h1>My Account</h1>

        {/* <div className="account-row">Name: {user.name}</div> */}
        {/* <div className="account-row">Email: {user.email}</div> */}

        <FriendsList />

        </>
    )
}

export default Dashboard



//Our dashboard is going to include a list of our friends and also the form which will populate our friends into the server.