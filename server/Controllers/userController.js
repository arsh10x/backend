const users = require("../models/usersSchema");
// const moment = require("moment");

// create user
exports.addUser = async (req, res) => {
  const { firstName, email, gender, mobile, role } = req.body;
  if (!(firstName || email || gender || mobile || role)) {
    res.status(400).json({ error: "All fields are required" });
  }

  try {
    const preUser = await users.findOne({ email: email });
    if (preUser) {
      res.status(400).json({ error: "User already exist" });
    } else {
      const userData = new users({
        firstName,
        email,
        gender,
        mobile,
        role,
      });
      await userData.save(); // save data in db
      res.status(201).json(userData);
    }
  } catch (error) {
    res.status(400).json(error);
    console.log("Catch block error");
  }
};

// get all users

exports.getUsers = async (req, res) => {
  try {
    const userData= await users.find();
    res.status(200).json(userData);
  } catch (error) {
    console.log("Catch block error");
    res.status(400).json(error);
  }
};

// get single user 