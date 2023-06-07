const client = require('../index');

async function createPost(post) {
    try {
        const columnNames = Object.keys(post).join('", "');
        const valueString = Object.keys(post)
        .map((key, index) => `$${index + 1}`)
        .join();

        const {
            rows: [newPost],
        } = await client.query(
            `
            INSERT INTO posts("${columnNames}")
            VALUES (${valueString})
            RETURNING *;
            `, Object.values(post)
        );

        return newPost;
    } catch (error) {
        console.error('Error creating post');
        throw error;
    }
}

async function getAllPosts() {
    try {
        const { rows: posts } = await client.query(`
        SELECT * FROM posts;
        `);
        return posts;
    } catch (error) {
        console.error('Error getting all posts');
        throw error;
    }
}

module.exports = {
    createPost,
    getAllPosts
}