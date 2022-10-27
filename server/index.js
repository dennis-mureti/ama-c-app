// import 'package:express/express.dart'
const express = require('express');
const mongoose = require ('mongoose');

// Import from other files
const authRouter = require('./routes/auth');


// INIT
const PORT = 3000;
const app = express();

// middleware
app.use(authRouter); 

// connections
mongoose.connect().then (() => {
    console.log('Connection Successful');
}).catch(e => {
    console.log(e);
})

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected to port ${PORT}`);
});
