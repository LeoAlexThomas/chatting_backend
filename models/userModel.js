const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  email: { type: String, required: false, unique: true },
  mobile: {
    type: String,
    required: [true, "Mobile number is required"],
    unique: true,
  },
  password: { type: String, required: [true, "Password is required"] },
  profileImage: { type: String, required: false },
  isBlocked: { type: Boolean, required: false },
  profileStatus: { type: String, required: false },
});

module.exports = mongoose.Model("User", userSchema);
