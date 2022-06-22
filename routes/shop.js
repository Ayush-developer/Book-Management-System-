const express = require('express');

const addroute = require('../routes/addroutes')

const router = express.Router();

const bookss = addroute.library;



router.use('/home',(req, res, next) => {
    res.render('shop',{
        books:bookss
    })

})

module.exports = router;