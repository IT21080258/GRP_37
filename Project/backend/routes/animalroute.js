const router = require('express').Router();

let Animal = require('../models/animalModel');

//read Animaldetails
router.route('/').get((req, res) => {
    Animal.find()
        .then(Animal => res.json(Animal))
        .catch(err => res.status(400).json('Error: '+ err));
});

//adding Animaldetails
router.route('/add').post((req, res) => {
    const Species = req.body.Species;
    const Size = req.body.Size;
    const Migratingcountry = req.body.Migratingcountry;
    const Migratingmonth = req.body.Migratingmonth;
    const Description = req.body.Description;
    
      
    const newAnimal = new Animal({
      Species,
      Size,
      Migratingcountry,
      Migratingmonth,
      Description,
    });
    newAnimal.save()
    .then(() => res.json('Animaladded !'))
    .catch (err => res.status(400).json('Error: ' + err))
});

 //delete Animal
  router.route('/delete/:id').delete((req, res) => {
    Animal.findByIdAndDelete(req.params.id)
      .then(() => res.json('Animal refunded.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

//get Animal by ID
router.route("/get/:id").get(async (req, res)=>{
  let animalId = req.params.id;
  const animalOne = await animal.findById(animalId)
    .then((animal)=>{
      res.status(200).send({status: "Animaldetails Fetched", Animal})
    }).catch((err)=>{
          console.log(err.message);
          res.status(500).send({status: "Error with Animaldetails fetch",error:err.message});
      
  })
})

//update animaldetails
router.route('/update/:id').post((req, res) => {
   Animal.findById(req.params.id)
     .then(Animal => {
       Animal.Species = req.body.Species;
       Animal.Size =req.body.Size;
       Animal.Migratingcountry =req.body.Migratingmonth;
       Animal.Migratingmonth = req.body.Migratingcountry;
       Animal.Description = req.body.Description
       //save Animaldetails to database and catch errors if any
       Animal.save()
         .then(() => res.json('Animal updated!'))
         .catch(err => res.status(400).json('Error: ' + err));
    })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
 module.exports = router;