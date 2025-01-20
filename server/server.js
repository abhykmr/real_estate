// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const authRoutes = require('./routes/authroutes');
// const userRoutes = require('./routes/userroutes');
// const cors = require('cors');


// const app = express();

// // Middleware
// app.use(bodyParser.json());

// // Routes

// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use(cors());
// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/real_estate', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log('Error connecting to MongoDB:', err));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });




// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const bcrypt = require("bcryptjs");
// const cors = require("cors");

// // Initialize app
// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// // MongoDB Connection
// mongoose.connect("mongodb://127.0.0.1:27017/signupDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

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
//     const newUser = new User({ name, email, password: hashedPassword, phone, address });
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

// // Start Server
// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

// const express = require("express");
// const path = require("path");
// require("dotenv").config();
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const connectDB = require("./config/db.js");
// // const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT;

// // Middleware to parse JSON requests
// app.use(express.json());
// // dotenv.config();
// app.use(cookieParser());
// app.use(cors());

// // Serve static files from the React app
// // app.use(express.static(path.join(__dirname, '../client/build')));

// app.get("/", (req, res) => {
//   res.json({ message: "Hello from Express!" });
// });

// // Catch-all route to serve the React app
// // app.get('*', (req, res) => {
// //     res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// // });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
//   connectDB();
// });






const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
require("dotenv").config();

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/signupDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  address: String,
});

// Model
const User = mongoose.model("User", userSchema);

// Routes
// Signup Route
app.post("/api/signup", async (req, res) => {
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
});

// Catch-all route to serve a default response
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Serve static files from the React app (optional if using React frontend)
// app.use(express.static(path.join(__dirname, "../client/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build", "index.html"));
// });

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
