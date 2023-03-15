const router = require('express').Router();

let Boat = require('../models/boatModel');

//read Boat
router.route('/').get((req, res) => {
    Boat.find()
        .then(Boat => res.json(Boat))
        .catch(err => res.status(400).json('Error: '+ err));
});

//adding Boat
router.route('/add').post((req, res) => {
    const Name = req.body.Bname;
    const Equipments = req.body.equipment;
    const Owner = req.body.Owner;
    const Capacity = Number(req.body.capacity);
    const Description = req.body.description;
    const GPS = req.body.gps;
    
      
    const newBoat = new Boat({
      Name,
      Equipments,
      Owner,
      Capacity,
      Description,
      GPS
    });
    newBoat.save()
    .then(() => res.json('boat added !'))
    .catch (err => res.status(400).json('Error: ' + err))
});

//delete boat
  router.route('/delete/:id').delete((req, res) => {
    Boat.findByIdAndDelete(req.params.id)
      .then(() => res.json('Boat refunded.'))
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
      
      const Name = req.body.Bname;
      const Equipments = req.body.equipment;
      const Owner = req.body.Owner;
      const Capacity = Number(req.body.capacity);
      const Description = req.body.description;
      const GPS = req.body.gps;

       //save boat to database and catch errors if any
       Boat.save()
         .then(() => res.json('Boat updated!'))
         .catch(err => res.status(400).json('Error: ' + err));
    })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
 module.exports = router;