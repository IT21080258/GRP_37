//Model of user collection


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create user object
const UserSchema = new Schema ({
    name:{
        type: String,
        required: true
    },
    telephone:{
        type : Number,
        required: true
        
    },
    email:{
        type : String,
        required: true
    },
    username:{
        type : String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
    
})

const user = mongoose.model("user" ,UserSchema );
module.exports = user;