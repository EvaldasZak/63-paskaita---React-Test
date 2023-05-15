import React, { useContext } from 'react';

import PostCard from "../Organisms/PostCard";
import PostsContext from '../../context/PostsContext'


const Home = () => {
    const { posts } = useContext(PostsContext)

    return (
        <>
            <h1>Home</h1>
            <div>

                {
                    !posts && (<p>Loading...</p>)
                }
                {
                    posts && posts.map(post =>
                        <PostCard
                            key={post.id}
                            data={post}
                        />
                    )
                }
                {
                    posts && posts.length === 0 && (
                        <p>No posts</p>
                    )
                }
            </div>
        </>
    )
}

export default Home;