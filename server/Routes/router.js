const express = require("express");
const router = new express.Router();
const controller = require("../Controllers/userController");

//routes
router.put("/user/register",controller.addUser);
router.get("/user",controller.getUsers);



module.exports=router;