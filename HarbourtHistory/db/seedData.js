const client = require('./index');

const {
    createUser,
    createPerson,
    createPost,
    createRelationship
} = require('./tables');

const {
    createMom,
    createFirstPost,
    createFirstPerson,
    createSecondPerson,
    createFirstRelationship
} = require('./testData');

async function dropTables() {
    try {
        console.log('dropping tables...');
        await client.query(`
        DROP TABLE IF EXISTS relationship;
        DROP TABLE IF EXISTS person;
        DROP TABLE IF EXISTS posts;
        DROP TABLE IF EXISTS users;
        `);
    } catch (error) {
        console.error('error dropping tables');
        throw error;
    }
}

async function createTables() {
    try {
        console.log('building tables...');
        await client.query(`
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            email VARCHAR(225) UNIQUE NOT NULL,
            username VARCHAR(225) UNIQUE NOT NULL,
            password VARCHAR(225) NOT NULL
        );
        CREATE TABLE posts(
            id SERIAL PRIMARY KEY,
            "postTitle" VARCHAR(225),
            "postText" TEXT
        );
        CREATE TABLE person(
            id SERIAL PRIMARY KEY,
            "firstName" VARCHAR(225),
            "lastName" VARCHAR(225),
            "birthDate" DATE,
            "gender" VARCHAR(225)
        );
        CREATE TABLE relationship(
            id SERIAL PRIMARY KEY,
            "personId" INTEGER REFERENCES person(id),
            "relationshipType" VARCHAR(225),
            "relatedPersonId" INTEGER REFERENCES person(id)
        );
        `);
    } catch (error) {
        console.error('error creating tables');
        throw error;
    }
}

async function createInitialUser() {
    try {
        console.log('starting to create initial user');
        const userToCreate = await createMom();
        const result = await createUser(userToCreate)
        return result;
    } catch (error) {
        console.error('error creating initial user');
        throw error;
    }
}

async function createInitialPost() {
    try {
        console.log('starting to create initial post');
        const postToCreate = await createFirstPost();
        const result = await createPost(postToCreate);
        return result;
    } catch (error) {
       console.error('error creating initial post');
       throw error;
    }
}

async function createInitialPerson() {
    try {
       console.log('starting to create initial person');
       const personToCreate = await createFirstPerson();
       const result = await createPerson(personToCreate);
       return result;
    } catch (error) {
        console.error("Error creating initial person");
        throw error;
    }
}

async function createInitialSecondPerson() {
    try {
        console.log('starting to create initial second person');
        const personToCreate = await createSecondPerson();
        const result = await createPerson(personToCreate);
        return result;
    } catch (error) {
        console.error('Error creating initial second person');
        throw error;
    }
}

async function createInitialRelationship() {
    try {
        console.log('starting to create initial relationship');
        const relationshipToCreate = await createFirstRelationship();
        const result = await createRelationship(relationshipToCreate);
        return result;
    } catch (error) {
        console.error("Error creating initial relationship");
        throw error;
    }
}

async function rebuildDB() {
    try {
        await dropTables();
        await createTables();
        await createInitialUser();
        await createInitialPost();
        await createInitialPerson();
        await createInitialSecondPerson();
        await createInitialRelationship();
    } catch (error) {
        console.error('error during rebuildDB');
        throw error;
    }
}

module.exports = {
    rebuildDB,
    dropTables
}