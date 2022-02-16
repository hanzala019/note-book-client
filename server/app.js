const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const dot = require('dotenv');
const router = require('./routes/route');
dot.config()

const app = express()
const port = 5000 || process.env.PORT;



//middleware
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.URI, ()=>{
    console.log("connecting to db...")
})

app.listen(port, ()=>{
    console.log("server running...")
});

app.use('/', router)