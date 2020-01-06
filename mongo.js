const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/paginationDemo', {useNewUrlParser: true},function(err){
  if(err) throw err;
  else console.log("Connected to DB");
})  

const mongoSchema = mongoose.Schema;

const userSchema = new mongoSchema({
    "id" : Number,
    "first_name" : String,
    "last_name" : String,
    "email" : String,
    "gender" : String,
    "ip_address" : String
});

module.exports = mongoose.model('User',userSchema);