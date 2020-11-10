import React from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form';

import {BASE_URL} from '../api'


const LoginForm = () => {
    const history = useHistory()
    const { register, handleSubmit, errors,reset } = useForm();
     const login = (history,user) => { 
        axios.post(`${BASE_URL}/api/login`, user)
        .then((response) => { 
            window.localStorage.setItem('token', response.data.payload)
            window.localStorage.setItem('user', user.username)
           history.push("/friends")
        })
        .catch((error) => { 
            console.log("There was an error loggin you in :{", error)
        })
    }


    const onSubmit = data => { 
        const user = data
        login(history,user)
        reset()
    }
    


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="User Name" name="username" ref={register({required: true, maxLength: 80})} />
          <input type="password" placeholder="password" name="password" ref={register({required: true})} />
          <button type='submit'>Submit</button>
        </form>
      );
    }
 
export default LoginForm;
