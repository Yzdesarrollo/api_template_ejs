const express = require('express');
const app = express();
const path = require('path');

// settings
app.set('port', 5000);
app.set('views', path.join(__dirname,'views'));


// Middlewares

// Routes

// Static

module.exports = app;