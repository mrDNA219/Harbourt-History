import { getAllPosts } from "../api";
import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';

const Whatsnew = () => {

    const [posts, setPosts] = useState([]);

    async function getAllPostsHelper(){
        const result = await getAllPosts();
        if(result){
            setPosts(result)
        }
    }
    const postToDisplay = posts.pop();
    useEffect(() => {
        getAllPostsHelper();
    }, []);

    return (
        <Container className="stories-container">
            <h1 className="">Most Recent Post</h1>
            {
                postToDisplay ? 
                <div className="stories-container">
                    <h1 className="story-title"></h1>
                    <p className="story-text">{postToDisplay.postText}</p> 
                </div>
                : 
                <p>There are no stories to display! The most recently written story will appear here.</p>

            }
        </Container>
        
    )
}

export default Whatsnew;