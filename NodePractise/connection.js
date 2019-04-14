const mongoose = require("mongoose");
const { dbPath } = require("./db/config");

mongoose.connect(dbPath);
module.exports = mongoose;
