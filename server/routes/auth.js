const { application } = require("express");
const express = require ("express");
const User = require("../models/user");

const authRouter = express.Router();

authRouter.post('/api/signup', async (req, res) => {
    try {
    const {name, email, password} = req.body;  // get the data fom the client
    
    const existingUser = await User.findOne({ email }); // to find user
    // to check if existing user is there
    if(existingUser){
        return res.status(400).json({msg: 'User with same email already esists!'});
    }

    let user = new User({ 
        email,
        password,
        name,
    })
    user = await user.save();
    res.json(user);
    // post data in the database
    // return the data to the user
} catch (e) {
    res.status(500).json({ error: e.message });
}
});
// To enable use of functions from this file to other files
module.exports = authRouter;