import React, { useState, useContext } from 'react';

import {useNavigate} from 'react-router-dom'

import PostsContext from '../../context/PostsContext'

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
    );
  };
  
  export default Add;
  