const express = require("express");
const { createContract } = require("../controllers/contractcontroller");

const router = express.Router();

router.post("/contracts", createContract);
// router.get("/contracts", getAllContracts);
// router.get("/contracts/:id", getContractById);
// router.put("/contracts/:id", updateContract);
// router.delete("/contracts/:id", deleteContract);

module.exports = router;
