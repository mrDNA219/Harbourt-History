const client = require('../index');

async function createPerson(person) {
    try {
        const columnNames = Object.keys(person).join('", "');
        const valueString = Object.keys(person).map((key, index) => `$${index + 1}`).join();

        const { 
            rows: [newPerson],
        } = await client.query(
        `
        INSERT INTO person("${columnNames}")
        VALUES (${valueString})
        RETURNING *;
        `, Object.values(person));

        return newPerson;

    } catch (error) {
        console.error("Error creating person");
        throw error;
    }
}

module.exports ={
    createPerson,
}