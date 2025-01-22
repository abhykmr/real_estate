// const User = require("../models/userModel");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs"); // For password hashing

// // Signup Controller
// const signup = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     // Check if user already exists
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const user = new User({ name, email, password: hashedPassword });
//     await user.save();

//     // Create and send JWT token
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SEC, {
//       expiresIn: "1h",
//     });

//     res.cookie("token", token, {
//       httpOnly: true,
//     }); // To set a cookie with the token
//     res.status(201).json({ token, userId: user._id });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Login Controller
// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // console.log("Login request received with email:", email);

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       // console.error("User not found:", email);
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     console.log("User found:", user);

//     // Check if password matches
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       // console.error("Password mismatch for user:", email);
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     // Generate JWT
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SEC, {
//       expiresIn: "1h",
//     });
//     // console.log("JWT generated:", token);

//     // Set cookie
//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production", // Enable secure cookies in production
//     });
//     // console.log("Cookie set successfully");

//     // Send response
//     res.status(200).json({ token, userId: user._id });
//     // console.log("Response sent with token:", token);
//   } catch (error) {
//     console.error("Error during login:", error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong. Please try again later." });
//   }
// };

// // Logout Controller
// const logout = (req, res) => {
//   try {
//     res.clearCookie("token");
//     res.status(200).json({ message: "Logout successful!" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Logout failed!" });
//   }
// };

// module.exports = { signup, login, logout };













const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Signup Controller
const signup = async (req, res) => {
  const { name, email, password, phone, address, userType } = req.body;

  try {
    const normalizedEmail = email.trim().toLowerCase();
    console.log("Starting signup process for:", normalizedEmail);

    // Check if user already exists
    const userExists = await User.findOne({ email: normalizedEmail });
    if (userExists) {
      console.log("Signup failed: User already exists:", normalizedEmail);
      return res.status(400).json({ 
        success: false,
        message: "User already exists" 
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password successfully generated.");

    // Create new user with additional fields
    const user = new User({ 
      name, 
      email: normalizedEmail, 
      password: hashedPassword,
      phone,
      address,
      userType
    });
    await user.save();
    console.log("User successfully created:", normalizedEmail);

    // Check if JWT secret is defined
    if (!process.env.JWT_SEC) {
      throw new Error("JWT secret is not defined. Please set JWT_SEC in your .env file.");
    }

    // Create and send JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SEC, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
    });
    
    res.status(201).json({ 
      success: true,
      message: "Signup successful! Welcome to our platform.",
      token, 
      userId: user._id 
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ 
      success: false,
      message: "Server error during signup" 
    });
  }
};

// Login Controller
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const normalizedEmail = email.trim().toLowerCase();
    console.log("Login attempt for email:", normalizedEmail);

    // Check if user exists
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      console.log("Login failed: User not found:", normalizedEmail);
      return res.status(400).json({ 
        success: false,
        message: "Invalid email or password" 
      });
    }

    // console.log("User found:", user);

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Login failed: Invalid password for user:", normalizedEmail);
      return res.status(400).json({ 
        success: false,
        message: "Invalid email or password" 
      });
    }

    console.log("Password validation successful for:", normalizedEmail);

    // Check if JWT secret is defined
    if (!process.env.JWT_SEC) {
      throw new Error("JWT secret is not defined. Please set JWT_SEC in your .env file.");
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SEC, {
      expiresIn: "1h",
    });
    console.log("JWT generated successfully for:", normalizedEmail);

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    console.log("Cookie set successfully for:", normalizedEmail);

    res.status(200).json({ 
      success: true,
      message: "Login successful!",
      token, 
      userId: user._id 
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ 
      success: false,
      message: "Something went wrong. Please try again later." 
    });
  }
};

// Logout Controller
const logout = (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ 
      success: true,
      message: "Logout successful!" 
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ 
      success: false,
      message: "Logout failed!" 
    });
  }
};

module.exports = { signup, login, logout };