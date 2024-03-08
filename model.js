const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/information");

const userschema = mongoose.Schema({
    name:String,
    mobile:String,
    add:String
})


module.exports =mongoose.model("info", userschema);