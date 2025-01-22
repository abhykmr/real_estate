const express = require("express");
const {
  getUserProfile,
  updateUserProfile,
} = require("../controllers/usercontroller");
const router = express.Router();

// Middleware to check JWT token
const protect = require("../middleware/authmiddleware");

router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);

module.exports = router;
