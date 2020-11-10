import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../api';
import { axiosWithAuth } from '../utils'
import FriendsCard from './FriendsCard'
import {useHistory} from 'react-router-dom'


const FriendsList = () => {
    const [friends, setFriends]= useState([])
    const history = useHistory()
    const currentUser = window.localStorage.getItem('user')


    const logout = () => { 
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user')
        history.push('/')
    }

    const getFriends = () => { 
        axiosWithAuth()
        .get(`${BASE_URL}/api/friends`)
        .then((response) => { 
            setFriends(response.data)
        
        })
        .catch((error) => { 
        console.log("There was an error finding your friends :{", error)
        })
    }

    useEffect(() => { 
        getFriends()
    },[])

    return ( 
        <div>
            
                <h2 id="title">{currentUser}'s Friends</h2>
                <div className='list-head'>
                    <div></div>
                <button id='logout' onClick={() => logout()}>Log Out</button>
            </div>
            {friends.map((friend,index) => { 
                return <FriendsCard friend={friend} key={friend.id} />
            })}
        </div>
     );
}
 
export default FriendsList;