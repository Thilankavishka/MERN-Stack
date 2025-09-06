const mongoose = require('mongoose')

const GoalScheema = mongoose.Schema({
   name: String,
   text : {
    type: String,
    required : [true]
   },
   


}, {timestamps : true})


module.exports = mongoose.model('Goal', GoalScheema)