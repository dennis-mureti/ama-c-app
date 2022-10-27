const { application } = require("express");
const express = require ("express");

const authRouter = express.Router();

authRouter.post('/api/signup', (req, res) => {
    const {name, email, password} = req.body;  // get the data fom the client
    
    // post data in the database
    // return the data to the user
})
// To enable use of functions from this file to other files
module.exports = authRouter;