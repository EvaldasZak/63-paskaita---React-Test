import React, { useContext } from 'react';

import PostCard from "../Organisms/PostCard";
import PostsContext from '../../context/PostsContext'


const Home = () => {
    const {posts} = useContext(PostsContext)


    return ( 
        <>
        <h1>Home</h1>
        <div>
        
        {
            posts.map(post => 
                <PostCard 
                key={post.id}
                data={post}
                />
                )
            }
            </div>
            </>
            )
        }
        
        export default Home;