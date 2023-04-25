const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);

const mongodbconn = mongoose
  .connect("mongodb://localhost:27017/hospital2")
  .then(() => {})
  .catch((error) => {
    return error;
  });

module.exports = mongodbconn;
