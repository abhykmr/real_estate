const jwt = require("jsonwebtoken");

const createToken = async (req, res, next) => {
  try {
    // Get the user information from the request (you can modify this based on your authentication flow)
    const { user } = req; // Assuming user is attached to the request object

    // Check if user data exists
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Create the payload for the token
    const payload = {
      id: user.id, // You can add more data as needed (e.g., username, email, etc.)
      username: user.username,
    };

    // Define the token's expiration time (e.g., 1 hour)
    const expiresIn = "1h";

    // Generate the JWT token
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });

    // You can send the token as a response (e.g., for login) or attach it to the request object
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    }); // To set a cookie with the token

    // If you don't want to use a cookie, you can send the token in the response body:
    // return res.status(200).json({ token });

    // Proceed to the next middleware if necessary
    next();
  } catch (error) {
    // Handle errors
    return res
      .status(500)
      .json({ message: "Error creating token", error: error.message });
  }
};

module.exports = createToken;
