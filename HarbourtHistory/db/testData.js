const createMom = async () => {
    const mom = {
        email: 'maharbourt@gmail.com',
        username: 'meauxharbourt',
        password: 'sam1joe2'
    };

    return mom;
}

const createFirstPost = async () => {
    const post = {
        postTitle: 'Test Post',
        postText: 'this is the first post on the website. It is meant to be a test to determine if a long string of text can be stored in the database. this is the first post on the website. It is meant to be a test to determine if a long string of text can be stored in the database. this is the first post on the website. It is meant to be a test to determine if a long string of text can be stored in the database. this is the first post on the website. It is meant to be a test to determine if a long string of text can be stored in the database. this is the first post on the website. It is meant to be a test to determine if a long string of text can be stored in the database. this is the first post on the website. It is meant to be a test to determine if a long string of text can be stored in the database. this is the first post on the website. It is meant to be a test to determine if a long string of text can be stored in the database. this is the first post on the website. It is meant to be a test to determine if a long string of text can be stored in the database. this is the first post on the website. It is meant to be a test to determine if a long string of text can be stored in the database. this is the first post on the website. It is meant to be a test to determine if a long string of text can be stored in the database. this is the first post on the website. It is meant to be a test to determine if a long string of text can be stored in the database. this is the first post on the website. It is meant to be a test to determine if a long string of text can be stored in the database. this is the first post on the website. It is meant to be a test to determine if a long string of text can be stored in the database. this is the first post on the website. It is meant to be a test to determine if a long string of text can be stored in the database. this is the first post on the website. It is meant to be a test to determine if a long string of text can be stored in the database. this is the first post on the website. It is meant to be a test to determine if a long string of text can be stored in the database. this is the first post on the website. It is meant to be a test to determine if a long string of text can be stored in the database. this is the first post on the website. It is meant to be a test to determine if a long string of text can be stored in the database.'
    };

    return post;
}

const createFirstPerson = async () => {
    const person = {
        firstName: 'Sophia',
        lastName: 'Polin',
        birthDate: '05-29-1992',
        gender: 'female'
    };

    return person;
}

const createSecondPerson = async () => {
    const person = {
        firstName: 'Francis',
        lastName: 'Harbourt',
        birthDate: '02-10-1990',
        gender: 'male'
    };

    return person;
}

const createFirstRelationship = async () => {

    const relationship = {
        personId: 1,
        relationshipType: 'married',
        relatedPersonId: 2
    };

    return relationship;
}

module.exports = {
    createMom,
    createFirstPost,
    createFirstPerson,
    createSecondPerson,
    createFirstRelationship
}