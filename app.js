const express = require('express');
const body_sparser = require('body-parser');

const addroutes = require('./routes/addroutes')
const shoproutes = require('./routes/shop')

const path = require('path')

const app = express();



app.set('view engine', 'ejs');
app.set('views','views')


app.use(body_sparser.urlencoded({extended:false}));


app.use(express.static(path.join(__dirname, 'public')))

app.use(addroutes.routes);
app.use(shoproutes);





app.use('/',(req, res, next) => {
    res.send("<h1>No Page Found Error 404</h1>");

})


app.listen(9080);