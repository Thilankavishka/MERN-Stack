const express = require('express')
const route = express.Router()
const {getGoals} = require('../Controllers/goalcontroller')

route.get("/message",getGoals)

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