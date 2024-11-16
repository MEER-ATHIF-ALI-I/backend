const express = require('express');
const app = express();
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({path: path.join(__dirname,'config','config.env')});


const booking= require('./routes/booking');
const order = require('./routes/order')

app.use(express.json())
app.use('/api/v1/', booking);
app.use('/api/v1/',order)


app.listen(8000,()=>{
    console.log(`Served started at ${process.env.PORT} in ${process.env.NODE_ENV}`)
})