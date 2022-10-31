// import 'package:express/express.dart'
const express = require('express');
const mongoose = require ('mongoose');

// Import from other files
const authRouter = require('./routes/auth');

// INIT
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://Dennis:Dennis123@cluster0.vcfrrti.mongodb.net/?retryWrites=true&w=majority";

// middleware
app.use(express.json()); // To help handle distructuring
app.use(authRouter); 

// connections
mongoose.connect(DB).then(() => {
    console.log('Connection Successful');
})
.catch((e) => {
    console.log(e);
}); 

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected to port ${PORT}`);
});
