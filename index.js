const express = require('express')
const mongoose = require('mongoose')
const usermodel = require("./model")
const cors = require('cors')


const app = express();

app.use(express.json())
app.use(cors())

app.post("/contact",(req,res)=>{
    usermodel.create(req.body)
    .then(info => res.json(info))
    .catch(err=> res.json(err))
})


app.listen(3000,()=>{
    console.log("server is run");
})