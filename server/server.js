require('dotenv').config();

const express = require('express');
const userRoutes = require('./routes/users');

const app = express();

//Middlewares
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//Routs
app.use('/api/users', userRoutes);

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('Server is listening on port 3000');
});

