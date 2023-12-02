const express = require('express');
const router = express.Router();

const userRouter = require('./user.router'); 
const cvRouter = require('./cv.router');

router.use('/user', userRouter);
router.use('/cv', cvRouter);

module.exports = router;