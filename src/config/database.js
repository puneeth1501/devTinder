const mongoose = require('mongoose');

const connectDB=async () => {
   await mongoose.connect('mongodb+srv://puneeth:puneeth%401501@namastenode.krvjb.mongodb.net/devTinder')
};

module.exports=connectDB;
