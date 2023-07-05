const mongoose = require("mongoose");

const detailSchema = mongoose.Schema({
  cname: String,
  clogo: String,
  links: [
    {
      label: String,
      url: String,
    },
  ],
});

module.exports = mongoose.model("WebData", detailSchema);
 