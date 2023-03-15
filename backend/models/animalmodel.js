const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create animal object
const AnimalSchema = new Schema ({
    Species:{
        type: String,
        required: true
    },
    Size:{
        type : String,
        required: true
    },
    Migratingcountry:{
        type : String
        
    },
    Migratingmonth:{
        type : String
    
    },
    Description:{
        type: String,
        required: true
    }
},{timestamps:true})

const Animal= mongoose.model("Animal" ,AnimalSchema );
module.exports = Animal;