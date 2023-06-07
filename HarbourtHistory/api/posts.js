const express = require('express');
const router = express.Router();
const {
    createPost,
    getAllPosts
} = require('../db/tables');

router.get('/', async (req, res, next) => {
    try {
      const allPosts = await getAllPosts();
      if(!allPosts){
        res.send({
            name: 'no posts',
            error: 'no posts error',
            message: 'no posts were retrieved'
        });
      } else {
          res.send(allPosts)
      }
    } catch (error) {
        console.error(error);
        next(error);
    }
})

router.post('/', async (req, res, next) => {
    try {
      const postToCreate = {};
      for(var key in req.body){
        postToCreate[key] = req.body[key]
      }
      const result = await createPost(postToCreate);
      if(result){
          res.send(result)
      }
    } catch (error) {
        next(error);
    }
})

module.exports = router;