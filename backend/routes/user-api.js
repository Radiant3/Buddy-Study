const express = require("express");
const userController = require("../controller/userController")
//app router
const router = express.Router();

router.post("/", userController.newUser);
router.get("/:id", userController.getUser);

module.exports = router;