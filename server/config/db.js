const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("An error occurred:", error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
