//model of location. This is all details regarding locaion.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//attributes of location and datatypes of each attribute
const locationSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    coordinates:{
        type: String,
        required: true
    },
    animal:{
        type: String,
        required: true
    },
    authorizedBy:{
        type: String,
    },
})
//passing location schema to required API
const location = mongoose.model("location" ,locationSchema);
module.exports = location;
