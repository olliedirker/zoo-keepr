const fs = require('fs');
const path = require('path');
const express = require('express');
const { animals } = require('./data/animals');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//parse incoming string or array data 
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data 
app.use(express.json());
app.use(express.static('public'));

//use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//end of server.js
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});