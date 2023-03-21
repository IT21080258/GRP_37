//model of trip. This is all details regarding trip.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//attributes of trip and datatypes of each attribute
const tripSchema = new Schema({
    tripId:{
        type: String,
        required: true
    },
    fishermanName:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    depatureTime:{
        type: String,
        required: true
    },
    arrivalTime:{
        type: String,
    },
})
//passing trip schema to required API
const trip = mongoose.model("trip" ,tripSchema);
module.exports = trip;
