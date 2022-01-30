import React, { useState } from 'react';
import {Link } from "react-router-dom";
import './Login.css'


function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
    }

    const register = e => {
        e.preventDefault();
    }
    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src="https://blooloop.com/wp-content/uploads/2017/08/amazon_logo_RGB.jpg" alt="" />
            </Link>
            <div className="login__container">
                <form>
                    <h2>Sign In</h2>
                    <h6>E-mail</h6>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h6>Password</h6>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}  />
            
                    <button type="submit" onClick={signIn}className="login__signInButton">Continue</button>
                    <p>
                        By signing-in you agree to the Amazon 
                        Clone's Conditions of Use & Sale. Please 
                        see our Privacy Notice, our Cookies Notice
                        and our Interest-Based Ads Notice.
                    </p>
                    <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
                </form>
            </div>
            <div className='login__footer'>
                <p className='login__footer1'> Conditions of Use | Privacy Notice | Cookies Notice | Interest-Based Ads Notice </p>
                <p>&copy; 1996-2022, Amazon.com,  Inc. or its affiliates </p>
            </div>
           
        </div>
    )
}

export default Login
