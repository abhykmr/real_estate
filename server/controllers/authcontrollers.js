// const User = require('../models/user');
// const jwt = require('jsonwebtoken');

// // Signup Controller
// const signup = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     // Check if user already exists
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Create new user
//     const user = new User({ name, email, password });
//     await user.save();

//     // Create and send JWT token
//     const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
//     res.status(201).json({ token, userId: user._id });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Login Controller
// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Check if password matches
//     const isMatch = await user.matchPassword(password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Create and send JWT token
//     const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
//     res.json({ token, userId: user._id });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// module.exports = { signup, login };





const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  const { name, email, password, phone, address } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Email already exists." });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    res.status(200).json({ message: "Login successful!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
