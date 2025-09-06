const aysnchandler = require('express-async-handler')

const Goal = require('../Model/GoalModel')

const getGoals = aysnchandler(async (req,res) => {

const Goals = await Goal.find()

res.status(200).json(Goals)
})


const postGoals = async (req,res) => {
   if(!req.body){
        res.status(400)
        throw new Error('Please Add a text field')
   } 

   const goal = await Goal.create({
         name:req.body.name,
         text: req.body.text

   })
   res.json(goal)
}



const putGoals = async (req,res) => {

   const finddata = await Goal.findById(req.params.id)


   if(!finddata){
      res.status(400)
      throw new Error('Goal not found')
   }

   const updategoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{
      new:true
   })
   res.json({message:"Data is Updated",data:updategoal})
}

const deleteGoals = async (req,res) => {
    
res.json({message: `helloo i am the delete message route my id is  ${req.params.id}`})
}


module.exports = {
    getGoals,postGoals,putGoals,deleteGoals
}