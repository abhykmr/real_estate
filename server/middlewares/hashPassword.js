const bcrypt = require("bcrypt");

const hashedPassword = async (req, res, next) => {
  try {
    // Check if password is provided in the request body
    const { password } = req.body;
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    // Hash the password using bcrypt
    const saltRounds = 10; // You can adjust the number of salt rounds
    const hashed = await bcrypt.hash(password, saltRounds);

    // Attach the hashed password to the request object
    req.body.password = hashed;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Handle errors
    return res
      .status(500)
      .json({ message: "Error hashing password", error: error.message });
  }
};

module.exports = hashedPassword;
