const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();

dotenv.config();

const app = express();

mongoose.set('strictQuery', true);

//app midleware
app.use(bodyParser.json());
app.use(cors());

//create database connection

const PORT = process.env.PORT || 8090 ;
const URL = process.env.DB_URL ;
mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true


})

//Check connection status
const connection = mongoose.connection;
connection.once("open",() => {
    console.log("Mongodb connection success!");
})

//location define
const locationRouter = require('./routes/locationRoute');
app.use('/location', locationRouter);


//boat define
const boatRouter = require('./routes/boatRoutes');
app.use('/boat', boatRouter);

//user define
const userRouter = require('./routes/userRoute');
app.use('/user', userRouter);


//port
app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);

});



