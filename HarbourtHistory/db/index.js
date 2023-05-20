const { Client } = require('pg');

const client = new Client('postgres://localhost:5432/family-tree');

client.connect();

module.exports = client;