//Model of boat collection


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create boat object
const BoatSchema = new Schema ({
    Bname:{
        type: String,
        required: true
    },
    equipments:{
        type : String,
        
    },
    Owner:{
        type : String,
        required: true
    },
    capacity:{
        type : Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    gps:{

        type:String,
        required:true

    }
})

const boat = mongoose.model("boat" ,BoatSchema );
module.exports = boat;