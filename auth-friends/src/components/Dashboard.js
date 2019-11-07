import React, {useEffect, useState} from 'react'

import FriendsList from './Friends/FriendsList';
import FriendForm from './Friends/FriendForm'

const Dashboard = () => {


    return (
        <>
        <h1>My Account</h1>


        <FriendsList />

        </>
    )
}

export default Dashboard



//Our dashboard is going to include a list of our friends and also the form which will populate our friends into the server.