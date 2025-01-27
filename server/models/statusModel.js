const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema(
  {
    contractId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contract", // Reference to the Contract schema
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
      default: "Review",
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

module.exports = mongoose.model("Status", statusSchema);
