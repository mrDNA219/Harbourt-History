import { getAllPosts, createPost } from "../api";
import { useEffect, useState } from "react";
import  Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

//Most recent story should display first
//The post text should be obscured until the title is clicked... want to save page real estate by just having the list of post titles displayed.


const Stories = () => {
    const [posts, setPosts] = useState([]);
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostText, setNewPostText] = useState('');


    async function getAllPostsHelper(){
        const result = await getAllPosts();
        if(result.length > 1){
            setPosts(result)
        }
    }

    async function handleSubmit(){
        await createPost(newPostTitle, newPostText);
    }

    useEffect(() => {
        getAllPostsHelper();
    }, []);

    return (
        <Container className="main-content-wrapper">
            {
                posts.map(post => {
                    return (
                        <div className='stories-container' key={post.id}>
                            <h1 className="story-title">{post.postTitle}</h1>
                            <p className="story-text">{post.postText}</p>
                        </div>
                    )
                })
            }
            <Form className="stories-container">
                <Form.Label className="">Create New Story</Form.Label>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Story Title</Form.Label>
                    <Form.Control onChange={e => setNewPostTitle(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Story Text</Form.Label>
                    <Form.Control as="textarea" rows={6} onChange={e => setNewPostText(e.target.value)}></Form.Control>
                </Form.Group>
            <Button type="submit" onClick={e => {
                e.preventDefault();
                handleSubmit();
                getAllPostsHelper();
            }}>Post Story</Button>
            </Form>
        </Container>
    )
}

export default Stories;