const jwt = require("jsonwebtoken");

const jwtVerify = async (req, res, next) => {
  const token = req.cookies.token;
};
