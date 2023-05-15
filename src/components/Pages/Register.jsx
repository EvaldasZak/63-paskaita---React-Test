import React, { useState, useContext } from 'react';

import {useNavigate} from 'react-router-dom'

import UsersContext from '../../context/UsersContext'

const Register = () => {
  const {users, setUsers, setCurrentUser, USERS_ACTION_TYPE} = useContext(UsersContext)
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    const newUser = {
      id: users[users.length - 1].id + 1,
      email,
      password
    }
    if(newUser.email !== users.find(user => user.email === email)?.email){
      setUsers({
        type: USERS_ACTION_TYPE.ADD,
        data: newUser
      })
      setCurrentUser(newUser)
      navigate('/')
    } else {
      alert('This user has account on server!');
    }
  };
  
  return (
    <div>
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
    <div>
    <label>Email:</label>
    <input type="text" value={email} onChange={handleEmailChange} />
    </div>
    <div>
    <label>Password:</label>
    <input type="password" value={password} onChange={handlePasswordChange} />
    </div>
    <div>
    <label>Confirm Password:</label>
    <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
    </div>
    <button type="submit">Register</button>
    </form>
    <a href="/">
    Already registered
    </a>
    </div>
    );
  };
  
  export default Register;
  