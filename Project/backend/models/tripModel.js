//model of trip. This is all details regarding trip.

import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

//attributes of trip and datatypes of each attribute
const tripSchema = new Schema({
    tripId:{
        type: String,
        required: true
    },
    inspectorName:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    tripTracker:{
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
const trip = model("trip" ,tripSchema);
export default trip;


