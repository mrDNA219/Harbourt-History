const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../db/tables');
// const { requireUser } = require('./utils');

router.get('/', async (req, res, next) => {
    try {
        const allUsers = await getAllUsers();
        if(!allUsers){
            res.send({
                name: 'no users',
                error: 'no users error',
                message: 'no users were retrieved'
            });
        } else {
            res.send(allUsers);
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
})

module.exports = router;