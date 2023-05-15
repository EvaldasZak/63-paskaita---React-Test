import React, { useState, useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';

import PostsContext from '../../context/PostsContext'

const AddContainer = styled.div`
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

      textarea {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        min-height: 80px;
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

const Add = () => {
  const {posts, setPosts, POSTS_ACTION_TYPE} = useContext(PostsContext)
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  
  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (body.length === 0 || title.length === 0) {
      alert('Fill in form fields');
      return;
    }
    
    const newPost = {
      id: posts[posts.length - 1].id + 1,
      title,
      body
    }

      setPosts({
        type: POSTS_ACTION_TYPE.ADD,
        data: newPost
      })
      navigate('/')
  };
  
  return (
    <AddContainer>
    <div>
    <h2>Add a post</h2>
    <form onSubmit={handleSubmit}>
    <div>
    <label>Title:</label>
    <input type="text" value={title} onChange={handleTitleChange} />
    </div>
    <div>
    <label>Body:</label>
    <textarea value={body} onChange={handleBodyChange} />
    </div>
    <button type="submit">Add a post</button>
    </form>
    </div>
    </AddContainer>
    );
  };
  
  export default Add;
  