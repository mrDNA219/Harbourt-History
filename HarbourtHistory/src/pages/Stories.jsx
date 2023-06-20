import { getAllPosts, createPost } from "../api";
import { useEffect, useState } from "react";

const Stories = () => {
    const [posts, setPosts] = useState([]);
    const [newPostText, setNewPostText] = useState('');

    async function getAllPostsHelper(){
        const result = await getAllPosts();
        if(result){
            setPosts(result)
        }
    }

    async function handleSubmit(){
        await createPost(newPostText);
    }

    useEffect(() => {
        getAllPostsHelper();
    }, []);

    return (
        <div>
            {
                posts.map(post => {
                    return (
                        <div key={post.id}>
                            <h1>Story #{post.id}</h1>
                            <p>{post.postText}</p>

                        </div>
                    )
                })
            }
            <input onChange={e => setNewPostText(e.target.value)}></input>
            <button type="submit" onClick={e => {
                e.preventDefault();
                handleSubmit();
                getAllPostsHelper();
            }}>submit</button>
        </div>
    )
}

export default Stories;