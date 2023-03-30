const router = require('express').Router();

let Boat = require('../models/boatModel');

//read Boats
router.route('/').get((req, res) => {
    Boat.find()
        .then(Boat => res.json(Boat))
        .catch(err => res.status(400).json('Error: '+ err));
});

//adding Boat
router.route('/add').post((req, res) => {
    const Bname = req.body.Bname;
    const equipments = req.body.equipment;
    const Owner = req.body.Owner;
    const capacity = Number(req.body.capacity);
    const description = req.body.description;
    const gps = req.body.gps;
    
      
    const newBoat = new Boat({
      Bname,
      equipments,
      Owner,
      capacity,
      description,
      gps
    });
    newBoat.save()
    .then(() => res.json('boat added !'))
    .catch (err => res.status(400).json('Error: ' + err))
});

//delete boat
  router.route('/delete/:id').delete((req, res) => {
    Boat.findByIdAndDelete(req.params.id)
      .then(() => res.json('Boat Removed!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

//get boat by ID
router.route("/get/:id").get(async (req, res)=>{
  let BId = req.params.id;
  const boatOne = await Boat.findById(BId)
    .then((boat)=>{
      res.status(200).send({status: "Boat Fetched", boat})
    }).catch((err)=>{
          console.log(err.message);
          res.status(500).send({status: "Error with boat fetch",error:err.message});
      
  })
})

//update boat
router.route('/update/:id').post((req, res) => {
   Boat.findById(req.params.id)
     .then(Boat => {
      
      Boat.Bname = req.body.Bname;
      Boat.equipments = req.body.equipment;
      Boat.Owner = req.body.Owner;
      Boat.capacity = Number(req.body.capacity);
      Boat.description = req.body.description;
      Boat.gps = req.body.gps;

       //save boat to database and catch errors if any
       Boat.save()
         .then(() => res.json('Boat updated!'))
         .catch(err => res.status(400).json('Error: ' + err));
    })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
 module.exports = router;