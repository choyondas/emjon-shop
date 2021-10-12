import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import "./Login.css"
const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form action="">

                    <input type="email" name="" id="" placeholder="Your email" /><br />
                    <input type="password" name="" id="" placeholder="your password" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>new to emajon ? <Link to="/register"> Create Account</Link></p>
                <button onClick={handleGoogleLogin} >Google sign in</button>
            </div>
        </div>
    );
};

export default Login;