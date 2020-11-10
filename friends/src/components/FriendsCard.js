import React from 'react';


const FriendsCard = (props) => {
    const { friend }=props
    return ( 
        <div className='card'>
            <h3>{friend.name}</h3>
            <p>{friend.email}</p>
            <p>{friend.age}</p>
        </div>
     );
}
 
export default FriendsCard;