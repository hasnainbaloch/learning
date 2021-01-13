import React, {useState, useEffect} from 'react';
import {login} from '../../../utils';

import { useHistory } from "react-router-dom";


function Login() {
    const history = useHistory();
    
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    
    const loginUser = (e) => {
        e.preventDefault();
        const isLogin = login(name, password);
        isLogin ? history.push('/dashboard') : history.push('/');  
    }

    return (
        <div>
            <form>
                <label htmlFor="name">
                    <input type="text" name="name" id="name" value={name} placeholder="type your name" onChange={(e) => setName(e.target.value)}/>
                </label>
                <br/>
                <label htmlFor="password">
                    <input type="password" name="password" id="password" value={password} placeholder="type your password" onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button type="submit" onClick={(e) => loginUser(e)}>Login</button>
            </form>
        </div>
    )
}

export default Login;
