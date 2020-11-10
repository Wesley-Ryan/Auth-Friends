import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'

import './App.css';
import Welcome from './components/Welcome';


function App() {
  return (
    <div className="App">
      <div className='routes'>
        <Route exact path='/' component={Welcome}/>
        <PrivateRoute exact path='/friends' component={FriendsList}/>
      </div>
      
    </div>
  );
}

export default App;
