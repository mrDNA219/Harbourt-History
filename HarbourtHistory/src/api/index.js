
const BASE_URL = 'http://localhost:3000/api';

const createHeaders = token => {
    return token
      ? {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      : {
          'Content-Type': 'application/json',
        };
  };

export const getAllPosts = async () => {
    try {
        const headers = createHeaders();
        return await fetch(`${BASE_URL}/posts`, {
            headers,
        }).then(response => response.json());
    } catch (error) {
        console.error(error);
    }
}

export const createPost = async (postText) => {
    try {
        const headers = createHeaders();
        return await fetch(`${BASE_URL}/posts`, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                postText: postText
            }),
        }).then(response => response.json());
    } catch (error) {
        console.error(error);
    }
}

