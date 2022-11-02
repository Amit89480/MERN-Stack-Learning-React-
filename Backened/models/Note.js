const mongoose = require('mongoose');
const fetchUser = require('../middlewares/fetchUser')
const { Schema } = mongoose; 
const notesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
        
    },

    title: {
        type: String,
        required:true
    },
   
description :{
        type: String,
    required: true,
   
    },
    tag: {
        type: String,
        default:'General'
        
    },
    date: {
        type: String,
        default:Date()
    }

});
module.exports=mongoose.model('notes',notesSchema)