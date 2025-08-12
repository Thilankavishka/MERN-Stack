const express = require('express')
const route = express.Router()


route.get("/message",(req,res) => {

   res.json({message: 'helloo i am the message route'})

})

route.post("/postmessage",(req,res) => {

   res.json({message: 'helloo i am the post message route'})

})

route.put("/update/:id",(req,res) => {

   res.json({message: `helloo i am the update message route my id is  ${req.params.id}`})

})

route.delete("/delete/:id",(req,res) => {

   res.json({message: `helloo i am the delete message route my id is  ${req.params.id}`})

})

module.exports = route