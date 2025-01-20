const mongoose = require("mongoose");

// Schema for User Authentication
const UserAuthSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create Models
const UserAuth = mongoose.model("UserAuth", UserAuthSchema);


// Export Models
module.exports = { UserAuth };
