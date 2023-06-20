import { getAllPosts } from "../api";
import {useState, useEffect} from 'react';



const Whatsnew = () => {

    const [posts, setPosts] = useState([]);

    async function getAllPostsHelper(){
        const result = await getAllPosts();
        if(result){
            setPosts(result)
        }
    }
    console.log(posts)
    const postToDisplay = posts.pop()
    console.log(postToDisplay)
    useEffect(() => {
        getAllPostsHelper();
    }, []);

    return (
        <div>
            <h1>What is New</h1>
            {
                postToDisplay ? <p>{postToDisplay.postText}</p> : <></>
            }
        </div>
        
    )
}

export default Whatsnew;