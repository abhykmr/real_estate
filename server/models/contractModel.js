const mongoose = require("mongoose");

const contractSchema = new mongoose.Schema(
  {
    lump_sum_price: { type: Number, required: true },
    remit_sum: { type: Number, required: true },
    rupees_amount: { type: Number, required: true },
    cheque_no: { type: String, required: true },
    cheque_date: { type: Date, required: true },
    bank_name: { type: String, required: true },

    // First Applicant Details
    first_applicant_name: { type: String, required: true },
    first_applicant_sdw: { type: String, required: true },
    first_applicant_address: { type: String, required: true },
    first_applicant_pincode: { type: String, required: true, match: /^\d{6}$/ },
    first_applicant_phone: {
      type: String, // Changed to String
      required: true,
      match: /^[0-9]\d{9}$/, // Phone number regex
    },
    first_applicant_email: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
    },
    first_applicant_signature: { type: String, required: true },

    // Second Applicant Details
    second_applicant_name: { type: String, required: true },
    second_applicant_sdw: { type: String, required: true },
    second_applicant_address: { type: String, required: true },
    second_applicant_pincode: {
      type: String,
      required: true,
      match: /^\d{6}$/,
    },
    second_applicant_phone: {
      type: String, // Changed to String
      required: true,
      match: /^[0-9]\d{9}$/,
    },
    second_applicant_email: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
    },
    second_applicant_signature: { type: String, required: true },

    // Office Use Fields
    application_received_by: { type: String, default: "" },
    broker_name: { type: String, default: "" },
    application_status: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contract", contractSchema);
