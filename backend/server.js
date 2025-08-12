const express = require('express');
const dotenv = require('dotenv').config();
const port  = process.env.PORT || 5000
const goalroute = require('./Routes/goalroutes')

const app = express();

app.use('/api/goal',goalroute);


app.listen(port,() => console.log(`server started on port ${port}`))


