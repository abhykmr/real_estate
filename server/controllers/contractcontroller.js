const Contract = require("../models/contractModel");
// const pdf = require("html-pdf");
// const fs = require("fs");
// const path = require("path");

const createContract = async (req, res) => {
  try {
    const applicationData = req.body;

    // Validate required fields
    const requiredFields = [
      "lump_sum_price",
      "remit_sum",
      "rupees_amount",
      "cheque_no",
      "cheque_date",
      "bank_name",
      "first_applicant_name",
      "first_applicant_sdw",
      "first_applicant_address",
      "first_applicant_pincode",
      "first_applicant_phone",
      "first_applicant_email",
      "first_applicant_signature",
      "second_applicant_name",
      "second_applicant_sdw",
      "second_applicant_address",
      "second_applicant_pincode",
      "second_applicant_phone",
      "second_applicant_email",
      "second_applicant_signature",
    ];

    for (const field of requiredFields) {
      if (!applicationData[field]) {
        return res
          .status(400)
          .json({ message: `Field "${field}" is required.` });
      }
    }

    // Create and save the new application
    const newApplication = new Contract(applicationData);
    const savedApplication = await newApplication.save();
    // Respond with success
    res.status(201).json({
      message: "Application submitted successfully.",
      application: savedApplication,
    });
  } catch (error) {
    console.error("Error creating application:", error);
    res.status(500).json({ message: "Internal server error.", error });
  }
};

module.exports = { createContract };
