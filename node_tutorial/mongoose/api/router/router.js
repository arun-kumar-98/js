const express = require("express").Router();
const user = require("../controller/userController");
express.post("/save", user.saveUser);
module.exports = express;
