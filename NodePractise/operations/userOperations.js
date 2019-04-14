const users = require("../db/schemas/userSchema.js.js");

const addUser = (userDetails, response) => {
  const userDoc = new users(userDetails);
  userDoc.save((err, doc) => {
    if (err) {
      response.status(500).send({ status: "failure" });
    } else {
      response.send({ status: "success", userSaved: doc });
    }
  });
};
const findUser = ({ name }, response) => {
  users.find({ name }, (err, doc) => {
    if (err) {
      response.status(500).send({ status: "failure" });
    } else {
      if (doc.length > 0) {
        response.send("user found");
      } else {
        response.send("no such user exists");
      }
    }
  });
};
module.exports = {
  addUser,
  findUser
};
