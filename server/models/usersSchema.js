const mongoose = require("mongoose");
// const validator = require("validator");

//create user schema

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    // minlenght:10,
    // maxlenght:10
  },
  gender: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  datecreated: Date,
  dateUpdated: Date,
});


//modle define

const users = new mongoose.model("users", userSchema);
module.exports=users;