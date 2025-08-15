const express = require('express')
const route = express.Router()
const {getGoals} = require('../Controllers/goalcontroller')
const {postGoals} = require('../Controllers/goalcontroller')
//const {putGoals} = require('../Controllers/goalcontroller')
//const {deleteGoals} = require('../Controllers/goalcontroller')


route.get("/message",getGoals)
route.post("/postmessage",postGoals)
//route.put("/update/:id",putGoals)
//route.delete("/delete/:id",deleteGoals)

module.exports = route