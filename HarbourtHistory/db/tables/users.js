const client = require('../index');

async function createUser(user) {
    try {
        const columnNames = Object.keys(user).join('", "');
        const valueString = Object.keys(user)
        .map((key, index) => `$${index + 1}`)
        .join();

        const {
            rows: [newUser],
        } = await client.query(
            `
            INSERT INTO users("${columnNames}")
            VALUES (${valueString})
            RETURNING *;`,
            Object.values(user)
        );
        return newUser;
    } catch (error) {
        console.error('error creating user');
        throw error;
    }
}

async function loginUser({ username, password}) {
    try {
        const {
            rows: [user],
        } = await client.query(`
        SELECT *
        FROM users
        WHERE username='${username}
        `);

        if(user) {
            if(password === user.password){
                return user;
            }
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getAllUsers() {
    try {
        const { rows: users } = await client.query(`
            SELECT * FROM users;`);

        return users;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    createUser,
    loginUser,
    getAllUsers
}