const express = require('express');
const dotenv = require('dotenv').config();
const {errorhandler} = require('./Middleware/ErrorMiddleware')
const port  = process.env.PORT || 5000
const goalroute = require('./Routes/goalroutes')

const app = express();

app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use('/api/goal',goalroute);

app.use(errorhandler)
app.listen(port,() => console.log(`server started on port ${port}`))


