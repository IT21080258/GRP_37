//import routers and paymentmodel
const router = require('express').Router();

let location = require('../models/locationModel');

//location get method
router.route('/get').get((req,res) => {
    location.find()
        .then(location => res.json(location))
        .catch(err => res.status(400).json('Error: '+ err));
});

//location post method
router.route('/add').post((req,res) => {
    //get data from form
    const name = req.body.name;
    const coordinates = req.body.coordinates;
    const animal = req.body.animal;
    const authorizedBy = req.body.authorizedBy;

    //enter data to new schema
    const newlocation = new location({
        name,
        coordinates,
        animal,
        authorizedBy,
    });
    //pass data to datbase
    newlocation.save()
        .then(() => res.json('Location Added'))
        .catch(() => res.status(400).json('Error: ' + err))
});

//location delete method
router.route('/delete/:id').delete((req,res) => {
    location.findByIdAndDelete(req.params.id)
        .then(() => res.json('location deleted!!!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//get a location by ID
router.route("/get/:id").get(async (req, res)=>{
    let locationId = req.params.id;
    const locationOne = await location.findById(locationId)
      .then((locaion)=>{
        res.status(200).send({status: "locaion Fetched", locaion})
      }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status: "Error with locaion fetch",error:err.message});
        
    })
  })

//location update method
router.route('/update/:id').post((req, res) => {
    //find location when ID is provided
    location.findById(req.params.id)
        .then(location => {
            location.name = req.body.name;
            location.coordinates = req.body.coordinates;
            location.animal = req.body.animal;
            location.authorizedBy = req.body.authorizedBy;
        //save location to database and catch errors if any
        Payment.save()
          .then(() => res.json('Location updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
     })
       .catch(err => res.status(400).json('Error: ' + err));
   });
   
  module.exports = router;