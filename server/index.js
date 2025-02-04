require('dotenv').config()
const express = require('express');
const cors = require('cors');
const imageRoutes = require('./routes/image')

const app = express();

app.use(cors());
app.use(express.json()); //for parsing requesst
app.use(express.urlencoded({extended:true, limit:'50mb'}));

//imageRoutes
app.use('/image', imageRoutes);

//middleware for handling errrors
app.use((error, req, res, next) => {
    const message = error.message || 'server error';
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({message:message})
})

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
})