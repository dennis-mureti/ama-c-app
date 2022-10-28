const { application } = require("express");
const express = require ("express");
const User = require("../models/user");

const authRouter = express.Router();

authRouter.post('/api/signup', (req, res) => {
    const {name, email, password} = req.body;  // get the data fom the client
    
    const existingUser = User.findOne({ email }); // to find user
    // post data in the database
    // return the data to the user
});
// To enable use of functions from this file to other files
module.exports = authRouter;