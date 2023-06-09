import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { useNavigate, Link } from 'react-router-dom'

import UsersContext from '../../context/UsersContext'

const RegisterContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 20px;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;

    div {
      margin-bottom: 1rem;

      label {
        font-weight: bold;
      }

      input {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
      }
    }

    button[type='submit'] {
      padding: 0.5rem 1rem;
      background-color: #333;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }
  }

  a {
    display: block;
    text-align: center;
    margin-top: 1rem;
  }
`;

const Register = () => {
  const { users, setUsers, setCurrentUser, USERS_ACTION_TYPE } = useContext(UsersContext)
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

    if (email.length < 3) {
      alert('Fill in email address');
      return;
    }

    if (password.length < 1 || confirmPassword.length < 1) {
      alert('Fill in password');
      return;
    }


    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const newUser = {
      id: users[users.length - 1].id + 1,
      email,
      password
    }
    
    if (newUser.email !== users.find(user => user.email === email)?.email) {
      setUsers({
        type: USERS_ACTION_TYPE.ADD,
        data: newUser
      })
      setCurrentUser(newUser)
      navigate('/')
    } else {
      alert('This user is already registered, login!');
    }
  };

  return (
    <RegisterContainer>

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

      <Link to="/">Already registered</Link>
    </div>
    </RegisterContainer>
  );
};

export default Register;
