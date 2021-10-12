import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css"
const Register = () => {
    return (
        <div className="register-form">
            <div>
                <h2>Please Register</h2>


                <form action="">

                    <input type="email" name="" id="" placeholder="your email" />
                    <br /><br />
                    <input type="password" name="" id="" placeholder="your pass" />
                    <br /><br />
                    <input type="password" name="" id="" placeholder="re-enter pass" />
                    <br /> <br />
                    <input type="submit" value="Submit" />

                </form>
                <p>already have an account <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;