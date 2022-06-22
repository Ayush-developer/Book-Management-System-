const { render } = require('ejs');
const express = require('express');

const router = express.Router();

const books =[];

router.get('/add-books',(req, res, next) => {
    res.render('addproduct')

})
router.post('/add-books',(req, res, next) => {
    books.push(req.body)
    // console.log(books);

    res.redirect('/home');
})


exports.routes = router;
exports.library = books;