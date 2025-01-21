const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs"); // For password hashing

// Signup Controller
const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    // Create and send JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SEC, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
    }); // To set a cookie with the token
    res.status(201).json({ token, userId: user._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Login Controller
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("Login request received with email:", email);

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      console.error("User not found:", email);
      return res.status(400).json({ message: "Invalid email or password" });
    }

    console.log("User found:", user);

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.error("Password mismatch for user:", email);
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SEC, {
      expiresIn: "1h",
    });
    console.log("JWT generated:", token);

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Enable secure cookies in production
    });
    console.log("Cookie set successfully");

    // Send response
    res.status(200).json({ token, userId: user._id });
    console.log("Response sent with token:", token);
  } catch (error) {
    console.error("Error during login:", error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
};

// Logout Controller
const logout = (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Logout failed!" });
  }
};

module.exports = { signup, login, logout };
