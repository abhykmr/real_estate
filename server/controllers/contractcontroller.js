const Contract = require("../models/contractModel");

const createContract = async (req, res) => {
  try {
    console.log("Request receive:");
    const {
      firstName,
      lastName,
      email,
      phone,
      propertyId,
      propertyType,
      location,
      totalPrice,
      discount = 0,
      downPayment,
      installmentDuration,
      firstInstallmentDate,
      agreeTerms,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !propertyId ||
      !propertyType ||
      !totalPrice ||
      !downPayment ||
      !installmentDuration ||
      !firstInstallmentDate ||
      !agreeTerms
    ) {
      return res
        .status(400)
        .json({ message: "All required fields must be filled." });
    }

    const discountedPrice = Number(totalPrice) - Number(discount);
    if (Number(downPayment) >= discountedPrice) {
      return res.status(400).json({
        message:
          "Down payment cannot exceed or equal the total price after discount.",
      });
    }

    const newContract = new Contract({
      firstName,
      lastName,
      email,
      phone,
      propertyId,
      propertyType,
      location,
      totalPrice: Number(totalPrice),
      discount: Number(discount),
      downPayment: Number(downPayment),
      installmentDuration: Number(installmentDuration),
      firstInstallmentDate: new Date(firstInstallmentDate),
      agreeTerms,
    });

    const savedContract = await newContract.save();
    res.status(201).json({
      message: "Contract saved successfully",
      contract: savedContract,
    });
  } catch (error) {
    console.error("Error creating contract:", error.message || error);
    if (error.code === 11000 && error.keyPattern?.email) {
      return res
        .status(400)
        .json({ message: "This email is already associated with a contract." });
    }
    res.status(500).json({ message: "Internal server error", error });
  }
};

module.exports = { createContract };
