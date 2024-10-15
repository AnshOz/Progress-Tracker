require('dotenv').config();

const express = require('express');

const app = express();

//Middlewares
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//Routs
app.get('/', (req, res) => {
    res.json({mssg: 'Hello World!'});
});

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('Server is listening on port 3000');
});

