const mongoose = require("mongoose");

const companyPropertySchema = new mongoose.Schema({}, { timestamps: true });

const CompanyProperty = mongoose.model(
  "CompanyProperty",
  companyPropertySchema
);

module.exports = CompanyProperty;
