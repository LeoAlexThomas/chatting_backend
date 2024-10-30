const express = require("express");
const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require("../controller/userController");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/current").get(getCurrentUser);

module.exports = router;
