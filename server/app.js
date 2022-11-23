const express = require('express');
const app = express();
const path = require('path');


//middleware for form input data & json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//middleware for static files
app.use(express.static(path.join(__dirname, 'public')));

// api router
app.use('/api', require('./routes'));

// error handler
app.use((req, res) => {res.status(404).send({error: '404 - Not Found', message: 'No route found for the requested URL'});
});

// error handling middleware
app.use((err, req, res, next) => {
    console.error('SERVER ERROR: ', err);
    if(res.statusCode < 400) res.status(500);
    res.send(err.message);
});

module.exports = app;