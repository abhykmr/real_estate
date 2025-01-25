const mongoose = require("mongoose");
// Schema for Contract Form Data
const ContractFormSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserAuth", // Reference to the UserAuth model
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  propertyId: {
    type: String,
    required: true,
    trim: true,
  },
  propertyType: {
    type: String,
    required: true,
    enum: ["Plot", "Flat", "Mall", "Villa"], // Example property types
  },
  propertyLocation: {
    type: String,
    required: true,
    trim: true,
  },
  installments: {
    type: Number,
    required: true,
  },
  totalPayment: {
    type: Number,
    required: true,
  },
  duePayment: {
    type: Number,
    required: true,
  },

});
const ContractForm = mongoose.model("ContractForm", ContractFormSchema);
module.exports = { ContractForm };