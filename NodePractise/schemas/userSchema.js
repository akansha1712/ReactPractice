const connection = require("../db/connection.js/index.js");
const Schema = connection.Schema;
const userSchema = new Schema({
  name: String,
  email: String,
  address: String,
  phone: Number,
  password: String
});
const userModel = connection.model("users", userSchema);

module.exports = userModel;
