import React from 'react';
import { useForm } from 'react-hook-form';

import {login} from '../api'

const LoginForm = () => {
    const { register, handleSubmit, errors,reset } = useForm();
    const onSubmit = data => { 
        const user = data
        login(user)
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
