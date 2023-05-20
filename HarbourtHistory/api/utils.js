function requireUser(req, res, next) {
    if(!req.user) {
        res.status(401).send({
            error: 'unauthorized',
            name: 'unauthorized error',
            message: 'you are not authorized to do this'
        })
    } else {
        next();
    }
}

module.exports = {
    requireUser
}