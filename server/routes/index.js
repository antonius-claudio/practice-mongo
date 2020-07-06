const router = require('express').Router();
const userRouter = require('./userRouter');

router
    .get('/', (req, res) => {
        res.status(200).json({status: 'Connected'})
    })
    .use('/users', userRouter)

module.exports = router;