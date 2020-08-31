'use strict'
require('dotenv/config');

const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/default');
const app = express();

// parse request body
app.use(express.urlencoded({ extended: true }));

// routes
app.use(require('./routes'));

// database connection
mongoose.connect( config.db.connection_String,{ useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true})
        .catch( err => {throw err} );

app.listen(config.app.app_port, (err)=> {
    if(err) throw err;
    console.log(`server is running on ${config.app.app_port}`);
});