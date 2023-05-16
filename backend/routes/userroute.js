const router = require('express').Router();

const user = require('../models/userModel');


//read userdetails
router.route('/').get((req, res) => {
    user.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: '+ err));
});

//adding userdetails
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const telephone = req.body.telephone;
    const email = req.body.email;
    const password = req.body.password;
    
    
    
      
    const newuser = new user({
      name,
      telephone,
      email,
      password,
      
      
    });
    newuser.save()
    .then(() => res.json('useradded !'))
    .catch (err => res.status(400).json('Error: ' + err))
});

 //delete user
  router.route('/delete/:id').delete((req, res) => {
    Animal.findByIdAndDelete(req.params.id)
      .then(() => res.json('user Deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

//get user by ID
router.route("/get/:id").get(async (req, res)=>{
  let userId = req.params.id;
  const userOne = await user.findById(userId)
    .then((user)=>{
      res.status(200).send({status: "userdetails Fetched", user})
    }).catch((err)=>{
          console.log(err.message);
          res.status(500).send({status: "Error with userdetails fetch",error:err.message});
      
  })
})

//update userdetails
router.route('/update/:id').post((req, res) => {
   user.findById(req.params.id)
     .then(user => {
       user.Name =req.body.Name;
       user.Telephone =req.body.Telephone;
       user.Email = req.body.Email;
       user.Password =req.body.Password;
       
       //save userdetails to database and catch errors if any
       user.save()
         .then(() => res.json('user updated!'))
         .catch(err => res.status(400).json('Error: ' + err));
    })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
 module.exports = router;