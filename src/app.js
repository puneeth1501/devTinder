const express = require('express');
const connectDB = require('./config/database');
const app = express();
const User = require('./model/user');

app.post('/signup',async(req,res)=>{
    //add code to save user to database
    const userObj={
        firstName:"puneeth",
        lastName:"Smith chowdary",
        emailId:"puneeth@example.com",
        password:"password",
    }
    //create a new user instance using the user schema of usermodel
     const user = new User(userObj);
     //save the user to the database
     //also if you are deleaing with db operartions you need to use try catch block to handle errors
     await user.save().then(data=>res.send(data)).catch(err=>res.status(500).send("Error saving user"));
     //most of the time mongoose will give us a promise

})

connectDB().then(()=>{
    console.log('MongoDB Connected...')
    app.listen(3000, () => {console.log('listening on')});
}).catch(err=>console.error("database connection error: "));



