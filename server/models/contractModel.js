const mongoose = require("mongoose");

const contractSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    propertyId: { type: String, required: true },
    propertyType: { type: String, required: true },
    location: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    downPayment: { type: Number, required: true },
    installmentDuration: { type: Number, required: true },
    firstInstallmentDate: { type: Date, required: true },
    agreeTerms: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contract", contractSchema);
