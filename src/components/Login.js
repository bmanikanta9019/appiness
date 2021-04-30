import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './Login.css'

function Login() {
    const loginData =  {
        "username":"hruday@gmail.com",
        "password" :'hruday123'
        };
    let history = useHistory();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => (userName == loginData.username && password === loginData.password) ? history.push('dashboard') : '';
    
    return (
        <div className="centering">

            <form className="loginLayout card" onSubmit={() => handleLogin()}>
                <h3 className="textCenter">Login Page</h3>
                <br />
                <label>Username</label> 
                <input type="text" name="UserName" onChange={e => setUserName(e.target.value)} required /> <br />
                <label>Password</label>
                <input type="password" name="Password" onChange={e => setPassword(e.target.value)} required /> <br />
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login;
