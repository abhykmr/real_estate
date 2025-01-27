const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const path = require("path");
const connectDB = require("./config/db.js");
require("dotenv").config();
// const authRouter = require("./routes/authroutes.js");
const authRouter = require("./routes/authroutes.js");
const contractRouter = require("./routes/contractroute.js");
const ejs = require("ejs");
const path = require("path");

// const userRouter = require("./routes/userRoutes");

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));


// Set EJS as the view engine
app.set("view engine", "ejs");


// const corsOptions = {
//   origin: "http://localhost:5173", // Your frontend URL
//   credentials: true, // Allow cookies to be sent
// };
// app.use(cors(corsOptions));
if (process.env.NODE_ENV === "local") {
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
} else {
  app.use(
    cors({
      origin: "*",
      credentials: true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    })
  );
}

// Route

app.use("/api", authRouter);
// app.use("/api", userRouter);
app.use("/api", contractRouter);

// Catch-all route to serve a default response
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  // console.log(process.env.MONGO_URI);
  connectDB();
});

app.use((err, req, res, next) => {
  // Log the error for debugging purposes
  console.error(err.stack);

  // Set the response status code
  const statusCode = err.status || 500;

  // Send a generic error message or a specific one if provided
  res.status(statusCode).json({
    error: {
      message: err.message || "Internal Server Error",
      status: statusCode,
    },
  });
});
