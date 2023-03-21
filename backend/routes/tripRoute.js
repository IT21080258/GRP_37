//import routers and paymentmodel
const router = require('express').Router();

let trip = require('../models/tripModel');

//trip get method
router.route('/get').get((req,res) => {
    trip.find()
        .then(trip => res.json(trip))
        .catch(err => res.status(400).json('Error: '+ err));
});

//trip post method
router.route('/add').post((req,res) => {
    //get data from form
    const tripId = req.body.tripId;
    const fishermanName = req.body.fishermanName;
    const location = req.body.location;
    const depatureTime = req.body.depatureTime;
    const arrivalTime = req.body.arrivalTime;


    //enter data to new schema
    const newtrip = new trip({
        tripId,
        fishermanName,
        location,
        depatureTime,
        arrivalTime
    });
    //pass data to datbase
    newtrip.save()
        .then(() => res.json('Trip Added'))
        .catch(() => res.status(400).json('Error: ' + err))
});

//trip delete method
router.route('/delete/:id').delete((req,res) => {
    trip.findByIdAndDelete(req.params.id)
        .then(() => res.json('trip deleted!!!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//get a trip by ID
router.route("/get/:id").get(async (req, res)=>{
    let tripId = req.params.id;
    const tripOne = await trip.findById(tripId)
      .then((trip)=>{
        res.status(200).send({status: "trip Fetched", trip})
      }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status: "Error with trip fetch",error:err.message});
        
    })
  })

//trip update method
router.route('/update/:id').post((req, res) => {
    //find location when ID is provided
    trip.findById(req.params.id)
        .then(trip => {
            trip.tripId = req.body.tripId;
            trip.fishermanName = req.body.fishermanName;
            trip.location = req.body.location;
            trip.arrivalTime = req.body.arrivalTime;
            trip.depatureTime = req.body.depatureTime;
        //save trip to database and catch errors if any
        Payment.save()
          .then(() => res.json('Trip updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
     })
       .catch(err => res.status(400).json('Error: ' + err));
   });
   
  module.exports = router;