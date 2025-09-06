const mongoose = require('mongoose')

const conndb = async() => {
try {
  const conn = await mongoose.connect(process.env.MONGO_URI)

  console.log(`MongoDb is Connected, ${conn.connection.host}`.cyan.underline)

} catch(err){
console.log(err)
process.exit(1)

}
}

module.exports = conndb
