const mongoose = require("mongoose");

const petsdetail=mongoose.Schema({
   petName:String,
   petGender:String,
   petBreed:String,
   petAge:String,
   petID:String,
   petLocation:String, 
   petImage:String,
   petLike:String,
   petDislike:String,
});
module.exports=mongoose.model("petdetail", petsdetail);