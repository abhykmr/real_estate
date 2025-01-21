const mongoose = require("mongoose");

const userPropertySchema = new mongoose.Schema({}, { timestamps: true });

const UserProperty = mongoose.model("UserProperty", userPropertySchema);

module.exports = UserProperty;
