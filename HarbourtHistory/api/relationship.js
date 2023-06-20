const express = require('express');
const router = express.Router();

const { getAllRelationships, createRelationship } = require('../db/tables');

router.get('/', async (req, res, next) => {
    try {
        const allRelationships = await getAllRelationships();
        if(!allRelationships){
            res.send({
                name: 'no relationships',
                error: 'no relationships error',
                message: 'no relationships were retrieved'
            })
        } else {
            res.send(allRelationships)
        }
    } catch (error) {
        next(error);
    }
})

router.post('/', async (req, res, next) => {
    try {
        const relationshipToCreate = {};
        for(var key in req.body){
            relationshipToCreate[key] = req.body[key];
        }
        const result = await createRelationship(relationshipToCreate);
        if(result){
            res.send(result);
        }
    } catch (error) {
        next(error);
    }
})

module.exports = router;