const mongoose = require("mongoose");
const { dbPath } = require("./config");

mongoose.connect(dbPath);
module.exports = mongoose;
