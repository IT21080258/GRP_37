//import routers and userModel
const router = require('express').Router();

let user = require('../models/userModel');

//user get method
router.route('/get').get((req,res) => {
    user.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: '+ err));
});

//user post method
router.route('/add').post((req,res) => {
    //get data from form
    const name = req.body.name;
    const telephone = Number(req.body.telephone);
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    //enter data to new schema
    const newUser = new user({
        name,
        telephone,
        email,
        username,
        password,
    });
    //pass data to datbase
    newUser.save()
        .then(() => res.json('Location Added'))
        .catch(() => res.status(400).json('Error: ' + err))
});

//user delete method
router.route('/delete/:id').delete((req,res) => {
    user.findByIdAndDelete(req.params.id)
        .then(() => res.json('User Removed!!!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//get a user by ID
router.route("/get/:id").get(async (req, res)=>{
    let userId = req.params.id;
    const userOne = await user.findById(userId)
      .then((user)=>{
        res.status(200).send({status: "user Fetched", user})
      }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status: "Error with user fetch",error:err.message});
        
    })
  })

//user update method
router.route('/update/:id').post((req, res) => {
    //find user when ID is provided
    user.findById(req.params.id)
        .then(user => {
            user.name = req.body.name;
            user.telephone = Number(req.body.telephone);
            user.email = req.body.email;
            user.username = req.body.username;
            user.password = req.body.password;

        //save user to database and catch errors if any
        user.save()
          .then(() => res.json('user updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
     })
       .catch(err => res.status(400).json('Error: ' + err));
   });
   
  module.exports = router;