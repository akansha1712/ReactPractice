const express = require("express");
const bodyParser = require("body-parser");
const { findUser, addUser } = require("./db/operations/userOperations");

//const router = require("express").Router();
const app = express();
const PORT = 1234;
app.use(bodyParser.json());
app.use(express.static("public"));

//router.use("/user", userRoutes);
app.get("/create-user", (req, res) => {
  const demoUser = {
    name: "Akansha",
    email: "anu@gmail.com",
    address: ",Delhi",
    phone: 8860534252,
    password: "123674"
  };
  addUser(demoUser, res);
});
app.get("/find-user", (req, res) => {
  const demoUser = {
    name: "Akanshjgdjhda"
  };
  findUser(demoUser, res);
});

app.listen(PORT, () => {
  console.log(`Server has startedon PORT> ${PORT}!!`);
});
