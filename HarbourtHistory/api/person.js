const express = require('express');
const router = express.Router();

const {
    getAllPeople,
    createPerson,
} = require('../db/tables');

router.get('/', async (req, res, next) => {
    try {
        const allPeople = await getAllPeople();
        if(!allPeople){
            res.send({
                name: 'no people',
                error: 'no people error',
                message: 'no people were retrieved'
            })
        } else {
            res.send(allPeople);
        }
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const personToCreate = {};
        for(var key in req.body){
            personToCreate[key] = req.body[key]
        }
        const result = await createPerson(personToCreate);
        if(result){
         res.send(result);
        }
    } catch (error) {
        next(error);
    }
})

module.exports = router;