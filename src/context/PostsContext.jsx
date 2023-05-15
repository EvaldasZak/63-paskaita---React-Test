import { useReducer, useEffect, createContext } from "react";

const PostsContext = createContext()

const POSTS_ACTION_TYPE = {
    GET: 'get_all_posts',
    ADD: 'add_new_post'
}

const reducer = (state, action) => {
    switch (action.type) {            
        case POSTS_ACTION_TYPE.GET:
            return action.data
        case POSTS_ACTION_TYPE.ADD:
            fetch(`http://localhost:8080/posts`, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(action.data)
            })
            return [...state, action.data]
    }
}

const PostsProvider = ({children}) => {

    const [posts, setPosts] = useReducer(reducer, null)

    useEffect(() => {
        const fetchData = async () => {
            fetch('http://localhost:8080/posts')
              .then(res => res.json())
              .then(data => {
                setPosts({
                  type: POSTS_ACTION_TYPE.GET,
                  data: data
                });
              })
              .catch(error => {
                // Handle the error
              });
          };
        
            fetchData()
    }, [])

    return ( 
        <PostsContext.Provider
            value={{
                posts,
                setPosts,
                POSTS_ACTION_TYPE,
            }}
        >
            {children}
        </PostsContext.Provider>
     );
}
 
export default PostsContext;
export {PostsProvider}