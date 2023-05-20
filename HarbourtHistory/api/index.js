const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("hello, the stack is functioning")
})

const usersRouter = require('./users');
router.use('/users', usersRouter);
module.exports = router;