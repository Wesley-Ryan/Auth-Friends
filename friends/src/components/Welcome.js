import React from 'react';

import LoginForm from './LoginForm'



const Welcome = () => {
    return (
        <div className='welcome-container'>
                <h1>Friends List </h1>
                <p>A great way to see who actually likes you...</p>

                <LoginForm />
        </div>
      );
}
 
export default Welcome;