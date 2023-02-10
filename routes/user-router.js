const express = require("express");
const userRouter = express.Router();

const users = [
  {
    id: 1,
    name: "Myo Thiha",
  },
  {
    id: 2,
    name: "Peter",
  },
];
// define the home page route
userRouter.get("/", (req, res) => {
  res.send(users);
});
// define the about route
userRouter.get("/about", (req, res) => {
  res.send("About Users");
});

module.exports = userRouter;
