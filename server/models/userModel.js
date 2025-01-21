const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile: { type: String, default: "" }, // Optional profile field
  },
  { timeseries: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
