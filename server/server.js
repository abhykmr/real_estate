const express = require("express");
const path = require("path");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/db.js");
// const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT;

// Middleware to parse JSON requests
app.use(express.json());
// dotenv.config();
app.use(cookieParser());
app.use(cors());

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, '../client/build')));

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Catch-all route to serve the React app
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
