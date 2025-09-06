const aysnchandler = require('express-async-handler')

const getGoals = aysnchandler(async (req,res) => {
res.json({message: 'helloo i am the message route'})
})


const postGoals = async (req,res) => {
   if(!req.body){
        res.status(400)
        throw new Error('Please Add a text field')
   } 
   res.json({message: 'helloo i am the post message route'})
}
const putGoals = async (req,res) => {
   res.json({message: `helloo i am the update message route my id is  ${req.params.id}`})
}

const deleteGoals = async (req,res) => {
    
res.json({message: `helloo i am the delete message route my id is  ${req.params.id}`})
}


module.exports = {
    getGoals,postGoals,putGoals,deleteGoals
}