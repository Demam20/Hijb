const express = require('express');
const app = express();
const mongoose = require('mongoose');

//DB config
const db = require('./config/keys').mongoURI;

// connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log("Mongodb connected!"))
  .catch(err => console.log(err));


// let's write first rout
app.get('/', (req,res) => res.send('Hello!'));

const port = 8020;
app.listen(port, ()  => console.log(`server running on port ${port}`));
