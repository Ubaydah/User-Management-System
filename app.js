const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection')

const app = express();

dotenv.config();
const port = process.env.PORT || 8080;

//log requests
app.use(morgan('tiny'));

//Mongo DB connection
connectDB();

//parse requests
app.use(bodyparser.urlencoded({ extended:true }));

//set view engine
app.set('view engine', 'ejs');

//load asset
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

//load routes
app.use('/', require('./server/routes/router'));

//Listen to the server
app.listen(port, ()=> {
    console.log(`Server listening on port ${port}`);
});