const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("hello, the stack is functioning")
})

const usersRouter = require('./users');
router.use('/users', usersRouter);

const postsRouter = require('./posts');
router.use('/posts', postsRouter);

const personRouter = require('./person');
router.use('/person', personRouter);

const relationshipRouter = require('./relationship');
router.use('/relationship', relationshipRouter);

module.exports = router;