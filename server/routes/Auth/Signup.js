const express = require('express');
const { User } = require('react-axios');
const router = express.Router();


router.post('/signup', async(req, res)=>{
    //res.status(201).json(req.body);
    //add new user and return 201
    const salt = await bcrypt.genSalt(10);
    var usr = {
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      email : req.body.email,
      password : await bcrypt.hash(req.body.password, salt)
    };
    created_user = await User.create(usr);
    res.status(201).json(created_user);
  });
   
  module.exports = router;