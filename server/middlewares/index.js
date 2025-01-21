const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const applyMiddlewares = (app) => {
  app.use(bodyParser.json());
  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());
};

module.exports = applyMiddlewares;
