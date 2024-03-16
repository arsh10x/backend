const express = require("express");
const router = new express.Router();
const controller = require("../Controllers/userController");

//routes
router.put("/user/register", controller.addUser);
router.get("/user", controller.getUsers);
router.get("/singleUser/:id", controller.getSingleUser);
router.delete("/user/:id", controller.deleteUser);

module.exports = router;
