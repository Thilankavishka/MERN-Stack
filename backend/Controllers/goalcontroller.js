const getGoals = (req,res) => {
res.json({message: 'helloo i am the message route'})
}

const postGoals = (req,res) => {
    
   res.json({message: 'helloo i am the post message route'})


}
const putGoals = (req,res) => {
    
   res.json({message: `helloo i am the update message route my id is  ${req.params.id}`})


}

const deleteGoals = (req,res) => {
    
res.json({message: `helloo i am the delete message route my id is  ${req.params.id}`})

}

module.exports = {
    getGoals,postGoals,putGoals,deleteGoals
}