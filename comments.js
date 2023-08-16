// create web server with express
const express = require('express');
const app = express();
// create a port
const port = 3000;
// create a path
const path = require('path');
// create a body parser
const bodyParser = require('body-parser');
// create router
const router = express.Router();
//start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
 //handle get request
app.get('/', (req, res) => res.send('Hello World!'));
//handle post request
app.post('/', (req, res) => res.send('Got a POST request'));
//handle put request
app.put('/user', (req, res) => res.send('Got a PUT request at /user'));



