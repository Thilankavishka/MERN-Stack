const express = require('express');
const color = require('colors')
const dotenv = require('dotenv').config();
const {errorhandler} = require('./Middleware/ErrorMiddleware')
const ConnDb = require('./Config/db')
const port  = process.env.PORT || 5000
const goalroute = require('./Routes/goalroutes')

const app = express();

ConnDb()
app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use('/api/goal',goalroute);

app.use(errorhandler)
app.listen(port,() => console.log(`server started on port ${port}`))


