import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom'

import UsersContext from '../../context/UsersContext'

const Login = () => {
    const { users, setCurrentUser } = useContext(UsersContext)
    const navigate = useNavigate();

    const [email, setEmail] = useState('u@u.com');
    const [password, setPassword] = useState('password');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.length < 3) {
            alert('Fill in email address');
            return;
          }
        if (password.length < 1) {
            alert('Fill in password');
            return;
          }


        const logedInUser = users.find(user => email === user.email && password === user.password)
        if (logedInUser) {
            setCurrentUser(logedInUser)
            navigate('/')

            setEmail('');
            setPassword('');
        } else {
            setPassword('');
            alert('User with these credentials is not found!');
        }

    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="text" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit">Login</button>
            </form>
            <Link to="/register">
                Don't have account?
            </Link>
        </div>
    );
};

export default Login;
