const express = require('express');
const dotenv = require('dotenv').config();
const port  = process.env.PORT || 5000

const app = express();

app.listen(port,() => console.log(`server started on port ${port}`))


app.get("/api/message",(req,res) => {

   res.json({message: 'helloo i am the message route'})

})