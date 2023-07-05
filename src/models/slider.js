const mongoose = require("mongoose");
const slider= mongoose.Schema({
      Source:String,
      AltText:String,
      Header:String,
      Text:String,
  });
  module.exports = mongoose.model("slider",slider)