
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
        console.error('there was an error in getAllPosts in src/api/index:',error);
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
        console.error('there was an error in createPost in src/api/index:', error);
    }
}

export const createPerson = async (person) => {
    try {
        const headers = createHeaders();
        return await fetch(`${BASE_URL}/person`, {
            method: 'POST',
            headers,
            body: JSON.stringify(person),
        }).then(response => response.json());
    } catch (error) {
        console.error('there was an error in createPerson in src/api/index:', error);
    }
}

export const getAllPeople = async () => {
    try {
        const headers = createHeaders();
        return await fetch(`${BASE_URL}/person`, {
            headers,
        }).then(response => response.json());
    } catch (error) {
        console.error('there was an error in getAllPeople in src/api/index:', error)
    }
}

export const getAllRelationships = async () => {
    try {
        const headers = createHeaders();
        return await fetch(`${BASE_URL}/relationship`, {
            headers,
        }).then(response => response.json());
    } catch (error) {
        console.error('there was an error getting all relationships')
    }
}


