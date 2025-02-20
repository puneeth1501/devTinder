const mongoose = require('mongoose')

const userSchema =  new mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    emailId:{
        type:String,
    },
    password:{
        type:String,
    },
   age:{
    type:Number,
   },
   gender:{
       type:String,
   },
}); // this schema is the defination of the model means that we will be using to create a new user document in our database like
//class User extends mongoose.Model { //... } and we will create an instance of this class called user in the database(document)

const User = mongoose.model('User', userSchema);

module.exports = User;