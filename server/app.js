const express = require("express");
const applyMiddlewares = require("./middlewares");
const authRoutes = require("./routes/authroutes");

const app = express();

// Apply middlewares
applyMiddlewares(app);

// Define routes
app.use("/api", authRoutes);

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

module.exports = app;











