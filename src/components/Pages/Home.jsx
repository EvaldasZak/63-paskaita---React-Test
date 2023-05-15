import PostCard from "../Organisms/PostCard";

const Home = () => {
    let posts = [
        {
            "id": 1,
            "title": "Post 1",
            "body": "Body 1"
          },
          {
            "id": 2,
            "title": "Post 2",
            "body": "Body 2"
          }
    ];

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