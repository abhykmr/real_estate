// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const bcrypt = require("bcryptjs");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const path = require("path");
// require("dotenv").config();

// // Initialize app
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(bodyParser.json());
// app.use(express.json());
// app.use(cors());
// app.use(cookieParser());

// const MONGO_URI = process.env.MONGO_URI;

// // MongoDB Connection
// mongoose
//   .connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected successfully!"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // User Schema
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   phone: String,
//   address: String,
// });

// // Model
// const User = mongoose.model("User", userSchema);

// // Routes
// // Signup Route
// app.post("/api/signup", async (req, res) => {
//   const { name, email, password, phone, address } = req.body;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//       phone,
//       address,
//     });
//     await newUser.save();
//     res.status(201).json({ message: "User created successfully!" });
//   } catch (error) {
//     if (error.code === 11000) {
//       res.status(400).json({ message: "Email already exists." });
//     } else {
//       res.status(500).json({ message: "Internal Server Error" });
//     }
//   }
// });


// // Login Route
// app.post("/api/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "User not found." });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials." });
//     }

//     res.status(200).json({ message: "Login successful!" });
//   } catch (error) {
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });


// // Catch-all route to serve a default response
// app.get("/", (req, res) => {
//   res.json({ message: "Hello from Express!" });
// });



// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });




const app = require("./app");
const connectDB = require("./config/db");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// Connect to database and start server
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
