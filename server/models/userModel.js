const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    userType: { type: String, required: true }, // Could add enum: ["user", "admin"] if needed
    profile: { type: String, default: "" },     // Optional profile field
  },
  { timestamps: true }  // Fixed typo from 'timeseries' to 'timestamps'
);

const User = mongoose.model("User", userSchema);

module.exports = User;