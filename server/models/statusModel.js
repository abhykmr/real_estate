const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema(
  {
    applicantName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: [
        "Accepted",
        "Review",
        "Approved",
        "Payment Done",
        "Document Generated",
      ],
      default: "accepted",
    },
    isDocumentGenerated: {
      type: Boolean,
      default: false,
    },
    paymentDetails: {
      paymentId: { type: String, default: null },
      amount: { type: Number, default: null },
      paymentDate: { type: Date, default: null },
    },
    documentDetails: {
      documentPath: { type: String, default: null },
      generatedAt: { type: Date, default: null },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", ApplicationSchema);
