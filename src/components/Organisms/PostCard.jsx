import React from 'react';

const PostCard = ({data}) => {
    
    return (
        <div>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
        </div>
        );
    };
    
    export default PostCard;