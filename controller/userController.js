const asyncHandler = require("express-async-handler");

//@desc Registering new user
//@route POST /user/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  console.log("User registered api called");
});

//@desc Logging user
//@route POST /user/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  console.log("User log api called");
});

//@desc Get logged in User
//@route GET /user/current
//@access private
const getCurrentUser = asyncHandler(async (req, res) => {
  console.log("Current user data");
  res.status(200).json({
    message: "Current User data",
  });
});

module.exports = { registerUser, loginUser, getCurrentUser };
