const mongoose = require('mongoose');
const { Schema } = mongoose;

// here we are creating the moongoose schema
const userSchema = new Schema({

    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required:true
    },
   date :{
        type: String,
       default: Date()
    }

});
const Users = mongoose.model('user', userSchema);
// Users.createIndexes();
module.exports = Users;