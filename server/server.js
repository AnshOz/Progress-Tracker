require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const progressRoutes = require('./routes/progress');

const app = express();

//Middlewares
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//Routs
app.use('/api/progress', progressRoutes);

//connect to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
         // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Server is listening on port 3000');
        });
  
    })
    .catch((err) => {
        console.log(err);
    });


