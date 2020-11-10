import React, { useState, useEffect } from 'react'
import { getFriends } from '../api';
import FriendsCard from './FriendsCard'


const FriendsList = () => {
    const [friends, setFriends]= useState([])
    const currentUser = window.localStorage.getItem('user')

    useEffect(() => { 
        getFriends()
    },[])

    return ( 
        <div>
            <h2>{currentUser}'s Friends</h2>
            {friends.map((friend) => { 
                return <FriendsCard friend={friend} />
            })}
        </div>
     );
}
 
export default FriendsList;