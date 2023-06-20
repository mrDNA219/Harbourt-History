const client = require('../index');

async function createRelationship(relationship) {
    try {
        const columnNames = Object.keys(relationship).join('", "');
        const valueString = Object.keys(relationship).map((key, index) => `$${index + 1}`).join();

        const { rows: [newRelationship], } = await client.query(`
        INSERT INTO relationship("${columnNames}")
        VALUES (${valueString})
        RETURNING *;
        `, Object.values(relationship));

        return newRelationship;

    } catch (error) {
       console.error('Error in createRelationship at db/tables/relationship:', error);
       throw error; 
    }
}

async function getAllRelationships() {
    try {
        const { rows: relationships } = await client.query(`
        SELECT * FROM relationship;
        `);
        return relationships;
    } catch (error) {
        console.error('Error getting all relationships');
        throw error;
    }
}

module.exports = {
    createRelationship,
    getAllRelationships
}